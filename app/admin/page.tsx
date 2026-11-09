/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import { redirect } from 'next/navigation';
import { getAuthorizedAdmin } from '@/lib/admin-auth';
import { AdminPanel, type AdminEnquiry } from '@/components/AdminPanel';
import { ensureDatabase, getDatabase } from '@/lib/database';
import { company } from '@/lib/config';

export const dynamic='force-dynamic'; export const metadata={title:'Admin'};
export default async function Admin(){const user=await getAuthorizedAdmin(); if(!user) redirect('/admin/login'); await ensureDatabase(); const db=getDatabase(); const result=await db.prepare('SELECT id,reference,name,phone,email,service,callback,message,status,notes,created_at FROM enquiries ORDER BY created_at DESC LIMIT 250').all<AdminEnquiry>(); const rows=result.results||[]; const today=new Date().toISOString().slice(0,10); const month=today.slice(0,7); return <main className="admin-shell"><header className="admin-header"><a href="/"><img src={company.logo} alt="Spoorthi Groups"/></a><div><span>Enquiry desk</span><b>{user.displayName}</b><form action="/api/admin/logout" method="post"><button type="submit">Sign out</button></form></div></header><section className="admin-title"><div><p>Admin portal</p><h1>Enquiries</h1></div><a href="/" target="_blank">View public site ↗</a></section><section className="admin-stats"><div><span>New enquiries</span><b>{rows.filter(r=>r.status==='NEW').length}</b></div><div><span>Follow-ups</span><b>{rows.filter(r=>r.status==='FOLLOW_UP').length}</b></div><div><span>Today</span><b>{rows.filter(r=>r.created_at.startsWith(today)).length}</b></div><div><span>This month</span><b>{rows.filter(r=>r.created_at.startsWith(month)).length}</b></div></section><AdminPanel initial={rows}/></main>}
