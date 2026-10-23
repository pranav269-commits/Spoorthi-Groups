'use server';
import { redirect } from 'next/navigation';
import { createAuthClient } from '@/lib/supabase/server';
import { canAccessAdmin } from '@/lib/admin-access';

export type SignInState = { error: string };
export async function signInAction(_previous: SignInState, form: FormData): Promise<SignInState> {
  const email = String(form.get('email') || '').trim().toLowerCase();
  const password = String(form.get('password') || '');
  if (!canAccessAdmin(email, process.env.ADMIN_EMAILS || '') || !password || password.length > 1024) return {error:'Unable to sign in. Check your email and password.'};
  const client = await createAuthClient();
  if (!client) return {error:'Admin sign-in is not available yet. Please contact the site owner.'};
  try {
    const {data,error} = await client.auth.signInWithPassword({email,password});
    if (error || !data.user?.email || !canAccessAdmin(data.user.email,process.env.ADMIN_EMAILS || '')) {
      await client.auth.signOut();
      return {error:'Unable to sign in. Check your email and password.'};
    }
  } catch { return {error:'Sign-in is temporarily unavailable. Please try again.'}; }
  redirect('/admin');
}
export async function signOutAction() {
  const client = await createAuthClient();
  if (client) await client.auth.signOut();
  redirect('/admin/login');
}
