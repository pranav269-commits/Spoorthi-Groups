import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_EMAIL, ADMIN_SESSION_MAX_AGE, checkAdminPassword, createAdminSessionCookie } from '@/lib/admin-auth';

export async function POST(request: NextRequest) {
  const form = await request.formData().catch(() => null);
  const email = String(form?.get('email') || '').trim().toLowerCase();
  const password = String(form?.get('password') || '');
  if (email !== ADMIN_EMAIL.toLowerCase() || !(await checkAdminPassword(password))) {
    const loginUrl = new URL('/admin/login', request.url);
    loginUrl.searchParams.set('error', '1');
    return NextResponse.redirect(loginUrl);
  }
  const { name, value } = await createAdminSessionCookie();
  const response = NextResponse.redirect(new URL('/admin', request.url));
  response.cookies.set(name, value, {
    httpOnly: true,
    secure: new URL(request.url).protocol === 'https:',
    sameSite: 'lax',
    path: '/',
    maxAge: ADMIN_SESSION_MAX_AGE,
  });
  return response;
}
