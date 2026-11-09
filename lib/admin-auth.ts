import { cookies } from 'next/headers';
import { env } from 'cloudflare:workers';
import { company } from '@/lib/config';
import { createSessionToken, verifyPassword, verifySessionToken } from '@/lib/admin-session';

// Single admin identity: the company's own email. The password is never in
// the repo — it comes from the ADMIN_PASSWORD secret (Cloudflare) or .dev.vars
// (local development). With no ADMIN_PASSWORD set, login is impossible.
export const ADMIN_COOKIE = 'spoorthi-admin-session';
export const ADMIN_EMAIL = company.email;
export const ADMIN_SESSION_MAX_AGE = 7 * 24 * 60 * 60; // 7 days

export type AdminUser = { email: string; displayName: string };

function sessionSecret(): string {
  return env.ADMIN_SESSION_SECRET || env.ADMIN_PASSWORD || '';
}

export async function getAuthorizedAdmin(): Promise<AdminUser | null> {
  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (!token) return null;
  const secret = sessionSecret();
  if (!secret) return null;
  const email = await verifySessionToken(token, secret);
  if (!email || email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) return null;
  return { email: ADMIN_EMAIL, displayName: 'Spoorthi Groups Admin' };
}

export async function checkAdminPassword(candidate: string): Promise<boolean> {
  const stored = env.ADMIN_PASSWORD || '';
  if (!stored || !candidate) return false;
  return verifyPassword(candidate, stored);
}

export async function createAdminSessionCookie(): Promise<{ name: string; value: string }> {
  const token = await createSessionToken(ADMIN_EMAIL, sessionSecret());
  return { name: ADMIN_COOKIE, value: token };
}
