import { redirect } from 'next/navigation';
import { getAuthorizedAdmin } from '@/lib/admin-auth';
import { authConfigured } from '@/lib/supabase/config';
import { AdminLogin } from '@/components/AdminLogin';
import { company } from '@/lib/config';

export const dynamic='force-dynamic';
export const metadata={title:'Admin sign-in',robots:{index:false,follow:false}};
export default async function AdminSignIn() {
  if (await getAuthorizedAdmin()) redirect('/admin');
  return <main className="admin-login"><a href="/" aria-label="Spoorthi Groups home"><img src={company.logo} alt="Spoorthi Groups"/></a><div className="form-card"><p className="eyebrow">Enquiry desk</p><h1>Admin sign-in</h1><AdminLogin enabled={authConfigured()}/></div><a href="/">Return to the website</a></main>;
}
