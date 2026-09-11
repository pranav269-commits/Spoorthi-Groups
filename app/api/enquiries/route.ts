import { NextRequest, NextResponse } from 'next/server';
import { ensureDatabase, getDatabase, hashIp } from '@/lib/database';
import { enquiryReference, validateEnquiry } from '@/lib/validation';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const validation = validateEnquiry(await request.json().catch(() => null));
    if (!validation.ok) return NextResponse.json({ message: 'Please review the highlighted details.', errors: validation.errors }, { status: 400 });
    await ensureDatabase();
    const db = getDatabase(); const now = new Date(); const nowIso = now.toISOString();
    const ip = request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for')?.split(',')[0] || 'local';
    const ipHash = hashIp(ip); const windowStart = Math.floor(Date.now() / 3_600_000) * 3_600_000; const limitKey = `${ipHash}:${windowStart}`;
    const current = await db.prepare('SELECT request_count FROM request_limits WHERE key = ?').bind(limitKey).first<{ request_count:number }>();
    if ((current?.request_count || 0) >= 5) return NextResponse.json({ message: 'Too many enquiries were sent recently. Please try again later or call us.' }, { status: 429 });
    await db.prepare(`INSERT INTO request_limits (key, window_start, request_count) VALUES (?, ?, 1)
      ON CONFLICT(key) DO UPDATE SET request_count = request_count + 1`).bind(limitKey, windowStart).run();

    const cutoff = new Date(Date.now() - 15 * 60_000).toISOString();
    const duplicate = await db.prepare('SELECT reference FROM enquiries WHERE phone = ? AND service = ? AND created_at > ? ORDER BY created_at DESC LIMIT 1').bind(validation.data.phone, validation.data.service, cutoff).first<{ reference:string }>();
    if (duplicate) return NextResponse.json({ reference: duplicate.reference, duplicate: true }, { status: 201 });

    const pending = `pending-${crypto.randomUUID()}`;
    const result = await db.prepare(`INSERT INTO enquiries
      (reference, name, phone, email, service, callback, message, status, notes, source, ip_hash, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, 'NEW', '', 'WEBSITE', ?, ?, ?)`)
      .bind(pending, validation.data.name, validation.data.phone, validation.data.email || null, validation.data.service, validation.data.callback, validation.data.message, ipHash, nowIso, nowIso).run();
    const id = Number(result.meta.last_row_id); const reference = enquiryReference(now.getUTCFullYear(), id);
    await db.prepare('UPDATE enquiries SET reference = ? WHERE id = ?').bind(reference, id).run();
    return NextResponse.json({ reference }, { status: 201 });
  } catch {
    return NextResponse.json({ message: 'We could not save your enquiry. Please try again or contact Spoorthi Groups directly.' }, { status: 500 });
  }
}
