'use client';
import { useActionState } from 'react';
import { signInAction } from '@/app/admin/login/actions';

export function AdminLogin({enabled}: {enabled:boolean}) {
  const [state,action,pending] = useActionState(signInAction,{error:''});
  return <form action={action} className="enquiry-form">
    <label><span>Email address</span><input type="email" name="email" autoComplete="username" required maxLength={160} disabled={!enabled || pending}/></label>
    <label><span>Password</span><input type="password" name="password" autoComplete="current-password" required maxLength={1024} disabled={!enabled || pending}/></label>
    {!enabled && <p role="status">Admin sign-in is not available yet. Please contact the site owner.</p>}
    {state.error && <p className="form-error" role="alert">{state.error}</p>}
    <button className="button button-primary" disabled={!enabled || pending}>{pending?'Signing in…':'Sign in'}</button>
    <p className="form-note">For authorised Spoorthi Groups administrators. Contact the site owner if you need access or a password reset.</p>
  </form>;
}
