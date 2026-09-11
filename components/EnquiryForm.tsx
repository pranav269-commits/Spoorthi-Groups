'use client';

import { FormEvent, useState } from 'react';
import { company, createWhatsAppLink } from '@/lib/config';

type FormState = { status: 'idle' | 'sending' | 'success' | 'error'; reference?: string; message?: string; errors?: Record<string, string> };

export function EnquiryForm({ defaultService = 'GENERAL' }: { defaultService?: string }) {
  const [state, setState] = useState<FormState>({ status: 'idle' });
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState({ status: 'sending' });
    const form = event.currentTarget; const payload = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch('/api/enquiries', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) });
      const result = await response.json() as { reference?: string; message?: string; errors?: Record<string, string> };
      if (!response.ok) { setState({ status: 'error', message: result.message || 'Please review the form and try again.', errors: result.errors }); return; }
      setState({ status: 'success', reference: result.reference }); form.reset();
    } catch { setState({ status: 'error', message: 'We could not send your enquiry. Your details are still here—please retry or use WhatsApp.' }); }
  }
  if (state.status === 'success') return <div className="form-success" role="status"><span>✓</span><p>Enquiry received</p><h3>Thank you. Your reference is<br /><strong>{state.reference}</strong></h3><p>A member of the Spoorthi Groups team can now follow up with you.</p><div><a className="button button-primary" href={createWhatsAppLink(`Hello Spoorthi Groups, I have submitted enquiry ${state.reference}.`)} target="_blank" rel="noreferrer">Continue on WhatsApp</a><a className="button button-secondary" href={`tel:${company.phoneE164}`}>Call Spoorthi Groups</a></div></div>;
  const error = (name: string) => state.errors?.[name];
  return <form className="enquiry-form" onSubmit={submit} noValidate>
    <div className="form-grid"><label><span>Your name *</span><input name="name" autoComplete="name" minLength={2} required aria-invalid={!!error('name')} />{error('name') && <small>{error('name')}</small>}</label><label><span>Mobile number *</span><input name="phone" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" required aria-invalid={!!error('phone')} />{error('phone') && <small>{error('phone')}</small>}</label></div>
    <div className="form-grid"><label><span>Email (optional)</span><input name="email" type="email" inputMode="email" autoComplete="email" aria-invalid={!!error('email')} />{error('email') && <small>{error('email')}</small>}</label><label><span>I need guidance about *</span><select name="service" defaultValue={defaultService} required><option value="GENERAL">Help me choose</option><option value="CHITS">Chits</option><option value="HEALTH_INSURANCE">Health insurance</option><option value="LIFE_INSURANCE">Life insurance</option><option value="LOANS">Loans</option><option value="REAL_ESTATE">Property</option></select></label></div>
    <label><span>Preferred callback time</span><select name="callback" defaultValue="Any convenient time"><option>Any convenient time</option><option>Morning — 9am to 12pm</option><option>Afternoon — 12pm to 4pm</option><option>Evening — 4pm to 7pm</option><option>WhatsApp message first</option></select></label>
    <label><span>What would you like help with?</span><textarea name="message" rows={4} placeholder="A short note helps us understand your requirement." aria-invalid={!!error('message')} />{error('message') && <small>{error('message')}</small>}</label>
    <label className="honeypot" aria-hidden="true"><span>Website</span><input name="website" tabIndex={-1} autoComplete="off" /></label>
    {state.status === 'error' && <div className="form-error" role="alert">{state.message}</div>}
    <button className="button button-primary submit-button" disabled={state.status === 'sending'}>{state.status === 'sending' ? 'Sending securely…' : 'Request a callback'} <span aria-hidden="true">→</span></button>
    <p className="form-note">We only use these details to respond to your enquiry. Never share OTPs, PINs or banking passwords.</p>
  </form>;
}
