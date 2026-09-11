import { NextRequest, NextResponse } from 'next/server';
import { getAuthorizedAdmin } from '@/lib/admin-auth';
import { ensureDatabase, getDatabase } from '@/lib/database';

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id:string }> }) {
  if (!await getAuthorizedAdmin()) return NextResponse.json({ message:'Unauthorized' }, { status:401 });
  const { id } = await params; const numericId = Number(id); const body = await request.json().catch(() => ({})) as Record<string, unknown>;
  if (!Number.isInteger(numericId)) return NextResponse.json({ message:'Invalid enquiry' }, { status:400 });
  const status = typeof body.status === 'string' && ['NEW','FOLLOW_UP','CONTACTED','CLOSED'].includes(body.status) ? body.status : null;
  const notes = typeof body.notes === 'string' ? body.notes.replace(/[<>]/g,'').trim().slice(0,2000) : null;
  if (!status && notes === null) return NextResponse.json({ message:'No valid changes' }, { status:400 });
  await ensureDatabase(); const db=getDatabase();
  if (status) await db.prepare('UPDATE enquiries SET status=?, updated_at=? WHERE id=?').bind(status,new Date().toISOString(),numericId).run();
  if (notes !== null) await db.prepare('UPDATE enquiries SET notes=?, updated_at=? WHERE id=?').bind(notes,new Date().toISOString(),numericId).run();
  return NextResponse.json({ ok:true });
}
