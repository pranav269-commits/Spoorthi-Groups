'use client';

import { useMemo, useState } from 'react';
import { csvCell } from '@/lib/csv';

export type AdminEnquiry = { id:number; reference:string; name:string; phone:string; email:string|null; service:string; callback:string; message:string; status:string; notes:string; created_at:string };

export function AdminPanel({ initial }: { initial: AdminEnquiry[] }) {
  const [rows, setRows] = useState(initial); const [query, setQuery] = useState(''); const [status, setStatus] = useState('ALL'); const [active, setActive] = useState<AdminEnquiry | null>(null);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [saved, setSaved] = useState(false);
  const filtered = useMemo(() => rows.filter((row) => (status === 'ALL' || row.status === status) && `${row.name} ${row.phone} ${row.reference} ${row.service}`.toLowerCase().includes(query.toLowerCase())), [rows, query, status]);
  async function update(row: AdminEnquiry, patch: Partial<AdminEnquiry>) {
    setSaving(true); setSaveError(''); setSaved(false);
    try {
      const response = await fetch(`/api/admin/enquiries/${row.id}`, { method:'PATCH', headers:{'content-type':'application/json'}, body:JSON.stringify(patch) });
      if (!response.ok) throw new Error('Save failed');
      setRows(current => current.map(item => item.id === row.id ? { ...item, ...patch } : item));
      setActive(current => current?.id === row.id ? { ...current, ...patch } : current);
      setSaved(true);
    } catch { setSaveError('Changes could not be saved. Please retry before leaving this enquiry.'); }
    finally { setSaving(false); }
  }
  function exportCsv() {
    const lines = [['Reference','Name','Phone','Email','Service','Status','Created'], ...filtered.map((row) => [row.reference,row.name,row.phone,row.email||'',row.service,row.status,row.created_at])];
    const csv = lines.map(line => line.map(csvCell).join(',')).join('\r\n'); const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'})); const anchor=document.createElement('a'); anchor.href=url; anchor.download='spoorthi-enquiries.csv'; anchor.click(); URL.revokeObjectURL(url);
  }
  const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
  const localDate = (value: string) => new Date(value).toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
  return <><section className="admin-stats"><div><span>New enquiries</span><b>{rows.filter(row => row.status === 'NEW').length}</b></div><div><span>Follow-ups</span><b>{rows.filter(row => row.status === 'FOLLOW_UP').length}</b></div><div><span>Today</span><b>{rows.filter(row => localDate(row.created_at) === today).length}</b></div><div><span>This month</span><b>{rows.filter(row => localDate(row.created_at).slice(0,7) === today.slice(0,7)).length}</b></div></section><div className="admin-panel"><div className="admin-toolbar"><input aria-label="Search enquiries" placeholder="Search name, phone or reference" value={query} onChange={(e)=>setQuery(e.target.value)} /><select aria-label="Filter by status" value={status} onChange={(e)=>setStatus(e.target.value)}><option>ALL</option><option>NEW</option><option>FOLLOW_UP</option><option>CONTACTED</option><option>CLOSED</option></select><button onClick={exportCsv}>Export CSV</button></div>
    {filtered.length === 0 ? <div className="admin-empty"><h2>No data yet.</h2><p>New enquiries will appear here after a customer submits the website form.</p></div> : <div className="lead-list">{filtered.map((row)=><button className="lead-row" key={row.id} onClick={()=>{setActive(row);setSaveError('');setSaved(false)}}><span><b>{row.name}</b><small>{row.reference}</small></span><span>{row.service.replaceAll('_',' ')}</span><span className={`status status-${row.status.toLowerCase()}`}>{row.status.replace('_',' ')}</span><time>{new Date(row.created_at).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}</time><b>→</b></button>)}</div>}
    {active && <div className="lead-detail" key={active.id}><button className="detail-close" onClick={()=>setActive(null)} aria-label="Close enquiry details">×</button><p>{active.reference}</p><h2>{active.name}</h2><div className="detail-actions"><a href={`tel:${active.phone}`}>Call</a><a href={`https://wa.me/${active.phone.replace(/\D/g,'')}`} target="_blank" rel="noreferrer">WhatsApp</a>{active.email&&<a href={`mailto:${active.email}`}>Email</a>}</div><dl><div><dt>Service</dt><dd>{active.service.replaceAll('_',' ')}</dd></div><div><dt>Callback</dt><dd>{active.callback}</dd></div><div><dt>Phone</dt><dd>{active.phone}</dd></div><div><dt>Message</dt><dd>{active.message||'No message provided.'}</dd></div></dl><label>Status<select disabled={saving} value={active.status} onChange={(e)=>update(active,{status:e.target.value})}><option>NEW</option><option>FOLLOW_UP</option><option>CONTACTED</option><option>CLOSED</option></select></label><label>Internal notes<textarea disabled={saving} defaultValue={active.notes} onBlur={(e)=>update(active,{notes:e.target.value})} rows={5}/></label>{saveError && <p role="alert" className="form-error">{saveError}</p>}<p role="status">{saving ? "Saving changes…" : saved ? "Changes saved." : ""}</p></div>}
  </div></>;
}
