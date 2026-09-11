'use client';
/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import { partners, type PartnerCategory } from '@/lib/config';

const categories: { value: PartnerCategory; label: string }[] = [
  { value: 'CHITS', label: 'Chits' },
  { value: 'HEALTH_INSURANCE', label: 'Health insurance' },
  { value: 'LIFE_INSURANCE', label: 'Life insurance' },
  { value: 'LOANS', label: 'Loans' },
  { value: 'REAL_ESTATE', label: 'Real estate' },
];

export function PartnerNetwork() {
  const [active, setActive] = useState<PartnerCategory>('CHITS');
  const visible = partners.filter((partner) => partner.category === active && partner.status !== 'REQUIRES_VERIFICATION');
  const activeLabel = categories.find((category) => category.value === active)?.label;

  return <section className="partner-network" aria-labelledby="partner-title">
    <div className="provider-glow" aria-hidden="true" />
    <div className="partner-intro"><p className="eyebrow light"><span/> Provider network</p><h2 id="partner-title">Trusted names.<br/><em>One clearer route.</em></h2><p>Spoorthi Groups helps families navigate relevant providers across five connected needs. Select a category to explore the names referenced in company materials.</p><div className="network-metric"><b>{partners.filter((partner)=>partner.status !== 'REQUIRES_VERIFICATION').length}</b><span>provider references<br/>across 5 service areas</span></div></div>
    <div className="partner-panel">
      <div className="partner-tabs" role="tablist" aria-label="Provider categories">{categories.map((category)=><button type="button" role="tab" aria-selected={active===category.value} className={active===category.value?'active':''} onClick={()=>setActive(category.value)} key={category.value}>{category.label}</button>)}</div>
      <div className="partner-stage" role="tabpanel">
        <div className="partner-stage-heading"><span>{activeLabel}</span><small>{String(visible.length).padStart(2,'0')} provider reference{visible.length===1?'':'s'}</small></div>
        {visible.length ? <div className="partner-grid">{visible.map((partner,index)=><article key={partner.name} className="partner-card"><span className="partner-number">{String(index+1).padStart(2,'0')}</span>{partner.logo?<div className="partner-logo"><img src={partner.logo} alt={`${partner.name} official logo`}/></div>:<div className="partner-wordmark" aria-label={partner.name}>{partner.name}</div>}<strong>{partner.name}</strong><span>Referenced in Spoorthi Groups materials</span>{partner.officialUrl?<a href={partner.officialUrl} target="_blank" rel="noreferrer" aria-label={`Visit the official ${partner.name} website`}>Visit official website <b>↗</b></a>:<small>Official identity requires verification</small>}</article>)}</div> : <div className="partner-empty"><b>Provider details are being verified.</b><p>Speak with Spoorthi Groups for the latest available route in this category.</p><a href="#enquire">Start a conversation →</a></div>}
      </div>
      <p className="partner-disclaimer">Provider availability, eligibility, pricing, terms and approval are controlled by the relevant provider. Spoorthi Groups does not guarantee outcomes.</p>
    </div>
  </section>;
}
