/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import { redirect } from 'next/navigation';
import { getAuthorizedAdmin, ADMIN_EMAIL } from '@/lib/admin-auth';
import { company } from '@/lib/config';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Admin sign in' };

export default async function AdminLogin({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const user = await getAuthorizedAdmin();
  if (user) redirect('/admin');
  const params = await searchParams;
  return (
    <main className="access-denied">
      <img src={company.logo} alt="Spoorthi Groups" />
      <h1>Admin sign in</h1>
      <p>Sign in with the admin password to manage enquiries.</p>
      {params.error ? <p className="form-error">Incorrect email or password. Please try again.</p> : null}
      <form className="enquiry-form" style={{ width: 'min(420px, 90vw)', textAlign: 'left' }} method="post" action="/api/admin/login">
        <label>Email<input type="email" name="email" defaultValue={ADMIN_EMAIL} required autoComplete="username" /></label>
        <label>Password<input type="password" name="password" required autoComplete="current-password" /></label>
        <button className="button button-primary submit-button" type="submit">Sign in</button>
      </form>
      <p><a href="/">Back to the website</a></p>
    </main>
  );
}
