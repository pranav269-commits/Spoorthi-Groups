import 'server-only';
import { createClient } from '@supabase/supabase-js';

export class StorageNotConfigured extends Error {}
export function getDatabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new StorageNotConfigured('Storage is not configured');
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}
