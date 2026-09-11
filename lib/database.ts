import { env } from 'cloudflare:workers';

let ready: Promise<void> | null = null;

export function getDatabase() {
  if (!env.DB) throw new Error('Database binding unavailable');
  return env.DB;
}

export function ensureDatabase() {
  if (ready) return ready;
  ready = (async () => {
    const db = getDatabase();
    await db.batch([
      db.prepare(`CREATE TABLE IF NOT EXISTS enquiries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        reference TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT,
        service TEXT NOT NULL,
        callback TEXT NOT NULL,
        message TEXT NOT NULL DEFAULT '',
        status TEXT NOT NULL DEFAULT 'NEW',
        notes TEXT NOT NULL DEFAULT '',
        source TEXT NOT NULL DEFAULT 'WEBSITE',
        ip_hash TEXT,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      )`),
      db.prepare('CREATE INDEX IF NOT EXISTS idx_enquiries_status_created ON enquiries(status, created_at DESC)'),
      db.prepare('CREATE INDEX IF NOT EXISTS idx_enquiries_phone_service ON enquiries(phone, service, created_at DESC)'),
      db.prepare(`CREATE TABLE IF NOT EXISTS request_limits (
        key TEXT PRIMARY KEY,
        window_start INTEGER NOT NULL,
        request_count INTEGER NOT NULL
      )`),
    ]);
    await db.prepare('PRAGMA optimize').run();
  })().catch((error) => { ready = null; throw error; });
  return ready;
}

export function hashIp(value: string) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) hash = Math.imul(hash ^ value.charCodeAt(i), 16777619);
  return (hash >>> 0).toString(36);
}
