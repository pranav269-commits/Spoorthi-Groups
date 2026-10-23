import 'server-only';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { authConfigured } from './config';

export async function createAuthClient() {
  if (!authConfigured()) return null;
  const store = await cookies();
  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!, {
    cookies: {
      getAll: () => store.getAll(),
      setAll: values => {
        // Server Components cannot write cookies; proxy.ts refreshes their sessions.
        try { values.forEach(({name,value,options}) => store.set(name,value,options)); } catch {}
      },
    },
  });
}
