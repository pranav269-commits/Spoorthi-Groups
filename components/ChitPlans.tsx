'use client';
/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import { inr, kapilPlans, kapilSummary, margadarsiBranches, mypaisaaPlans, shriramGroups } from '@/lib/chit-plans';

function CompanyHead({ logo, name, site, blurb }: { logo: string; name: string; site: string; blurb: string }) {
  return <div className="chit-company-head">
    <div className="chit-company-logo"><img src={logo} alt={`${name} logo`} /></div>
    <div><h3>{name}</h3><p>{blurb}</p></div>
    <a href={site} target="_blank" rel="noreferrer">Visit official website ↗</a>
  </div>;
}

export function ChitPlans() {
  const [branch, setBranch] = useState('Hyderabad');
  const activeBranch = margadarsiBranches.find((item) => item.name === branch) ?? margadarsiBranches[0];
  const margadarsiTotal = margadarsiBranches.reduce((sum, item) => sum + item.groups.length, 0);

  return <section className="chit-plans" id="chit-plans" aria-labelledby="chit-plans-title">
    <div className="chit-plans-heading">
      <p className="eyebrow"><span /> Plans from our partners</p>
      <h2 id="chit-plans-title">Every plan, as published<br />by the company.</h2>
      <p>Figures below are exactly as shown on each company&apos;s official website on 9 November 2026. Groups fill and change, so confirm with the branch before joining.</p>
    </div>

    <article className="chit-company">
      <CompanyHead logo="/partners/chits/kapil-chits.png" name="Kapil Chits" site="https://kapilchits.com/#/ChitPlans" blurb="Discounts of up to 40% on bid. In operation since 1981, with online auctions and online payment." />
      <div className="chit-summary-cards">{kapilSummary.map((card) => <div key={card.months}><b>{card.months} months</b><span>{card.discount}% discount</span><small>Chit values {card.values}</small></div>)}</div>
      <div className="chit-table-wrap"><table className="chit-table">
        <thead><tr><th>Chit value</th><th>Months</th><th>Min instalment</th><th>Max instalment</th><th>Min bid payable</th><th>Max bid payable</th></tr></thead>
        <tbody>{kapilPlans.map((plan, index) => <tr key={`${plan.value}-${plan.months}-${index}`}><td>{inr(plan.value)}</td><td>{plan.months}</td><td>{inr(plan.minInstalment)}</td><td>{inr(plan.maxInstalment)}</td><td>{inr(plan.minBidPayable)}</td><td>{inr(plan.maxBidPayable)}</td></tr>)}</tbody>
      </table></div>
      <p className="chit-company-note">No separate commission or dividend figure is shown on the Kapil Chits plans page beyond the discount percentages and bid-payable ranges above.</p>
    </article>

    <article className="chit-company">
      <CompanyHead logo="/partners/chits/margadarsi.svg" name="Margadarsi Chit Fund" site="https://www.margadarsi.com/chit-plans" blurb={`${margadarsiTotal} groups across ${margadarsiBranches.length} Telangana branches. Chit values ${inr(200000)} – ${inr(10000000)}, durations 25, 30, 40 and 50 months.`} />
      <label className="chit-branch-picker"><span>Choose a branch</span><select value={branch} onChange={(event) => setBranch(event.target.value)} aria-label="Choose a Margadarsi branch">{margadarsiBranches.map((item) => <option key={item.name} value={item.name}>{item.name} ({item.groups.length} groups)</option>)}</select></label>
      <div className="chit-table-wrap"><table className="chit-table">
        <thead><tr><th>Group code</th><th>Chit value</th><th>Monthly instalment</th><th>Duration</th></tr></thead>
        <tbody>{activeBranch.groups.map((group) => <tr key={group.code}><td>{group.code}</td><td>{inr(group.value)}</td><td>{inr(group.monthly)}</td><td>{group.months} months</td></tr>)}</tbody>
      </table></div>
      <p className="chit-company-note">No dividend, commission or admission-fee figure is shown on the Margadarsi group cards. Branch contact numbers are listed on each group card on margadarsi.com. Hasthinapuram and Corporate Office showed no group card in the Telangana view.</p>
    </article>

    <article className="chit-company">
      <CompanyHead logo="/partners/chits/shriram-chits.png" name="Shriram Chits" site="https://shriramchits.com/avail_groups.html" blurb="38 available groups, from ₹50,000 to ₹1 crore, over 30, 40, 50 and 60 months." />
      <div className="chit-table-wrap"><table className="chit-table">
        <thead><tr><th>Chit value</th><th>Duration</th><th>Monthly subscription</th></tr></thead>
        <tbody>{shriramGroups.map((group, index) => <tr key={`${group.value}-${group.months}-${index}`}><td>{inr(group.value)}</td><td>{group.months} months</td><td>{inr(group.monthly)}</td></tr>)}</tbody>
      </table></div>
      <p className="chit-company-note">No admission fee, dividend, commission or other figure is shown on the Shriram available-groups page.</p>
    </article>

    <article className="chit-company">
      <CompanyHead logo="/partners/chits/mypaisaa.svg" name="myPaisaa" site="https://mypaisaa.com/chits-scheme" blurb="100% government registered, 100% digital process, 100% transparent auctions. Over 2,00,000+ app installs." />
      <div className="chit-plan-cards">{mypaisaaPlans.map((plan) => <div key={plan.name} className="chit-plan-card">
        <span>{plan.name}</span>
        <b>{inr(plan.value)}</b>
        {plan.monthly ? <p><strong>Monthly</strong> {inr(plan.monthly)}</p> : null}
        {plan.winUpTo ? <p><strong>Win up to</strong> {inr(plan.winUpTo)}</p> : null}
        <p><strong>Commission</strong> {plan.commission}</p>
        {plan.tenure ? <p><strong>Tenure</strong> {plan.tenure}</p> : null}
        {plan.note ? <small>{plan.note}</small> : null}
      </div>)}</div>
      <p className="chit-company-note">The myPaisaa schemes page also lists 15 lakh and 30 lakh chit plans in its menu, but gives no details for them. Tenure is stated only for Maha Silver Save; for the other plans the page gives the monthly amount and maximum win amount but no tenure.</p>
    </article>

    <p className="chit-plans-note">Chits involve financial commitments and provider-specific rules. Review the registered provider&apos;s documentation before joining. Spoorthi Groups provides advisory and facilitation support; relevant provider terms govern every offering.</p>
  </section>;
}
