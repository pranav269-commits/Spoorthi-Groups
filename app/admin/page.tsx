import { requireAdmin } from '@/lib/admin-auth';
import { signOutAction } from './login/actions';
import { AdminPanel, type AdminEnquiry } from '@/components/AdminPanel';
import { getDatabase } from '@/lib/database';
import { company } from '@/lib/config';

export const dynamic='force-dynamic';
export const metadata={title:'Admin',robots:{index:false,follow:false}};
export default async function Admin() {
  const user=await requireAdmin();
  const {data,error}=await getDatabase().from('enquiries').select('id,reference,name,phone,email,service,callback,message,status,notes,created_at').order('created_at',{ascending:false}).limit(250);
  if(error) throw new Error('Unable to load enquiries');
  return <main className="admin-shell"><header className="admin-header"><a href="/"><img src={company.logo} alt="Spoorthi Groups"/></a><div><span>Enquiry desk</span><b>{user.displayName}</b><form action={signOutAction}><button type="submit">Sign out</button></form></div></header><section className="admin-title"><div><p>Admin portal</p><h1>Enquiries</h1></div><a href="/" target="_blank" rel="noreferrer">View public site ↗</a></section><AdminPanel initial={(data || []) as AdminEnquiry[]}/></main>;
}
