import 'server-only';
import { redirect } from 'next/navigation';
import { createAuthClient } from './supabase/server';
import { canAccessAdmin } from './admin-access';

export async function getAuthorizedAdmin() {
  const client = await createAuthClient();
  if (!client) return null;
  const { data: { user }, error } = await client.auth.getUser();
  if (error || !user?.email || !canAccessAdmin(user.email, process.env.ADMIN_EMAILS || '')) return null;
  return { userId: user.id, email: user.email, displayName: user.email };
}
export async function requireAdmin() {
  const user = await getAuthorizedAdmin();
  if (!user) redirect('/admin/login');
  return user;
}
