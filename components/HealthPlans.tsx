/* eslint-disable @next/next/no-img-element */

import { healthInsurers, type HealthPlan } from '@/lib/health-plans';

function PlanCard({ plan }: { plan: HealthPlan }) {
  return <div className="chit-plan-card">
    <span>{plan.name}</span>
    <b>{plan.si ?? 'On request'}</b>
    <p><strong>{plan.premiumLabel ?? 'Starting premium'}</strong> {plan.premium ?? 'Premium on request'}</p>
    <ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
    {plan.premiumNote ? <small>{plan.premiumNote}</small> : null}
  </div>;
}

export function HealthPlans() {
  return <section className="chit-plans" id="health-plans" aria-labelledby="health-plans-title">
    <div className="chit-plans-heading">
      <p className="eyebrow"><span /> Plans from our partners</p>
      <h2 id="health-plans-title">Every plan, as published<br />by the insurer.</h2>
      <p>Figures below are exactly as shown on each insurer&apos;s official website on 10 November 2026. Premiums vary by age, city, sum insured and tenure — confirm with the insurer before buying.</p>
    </div>

    {healthInsurers.map((insurer) => <article key={insurer.name} className="chit-company">
      <div className="chit-company-head">
        <div className="chit-company-logo"><img src={insurer.logo} alt={`${insurer.name} logo`} /></div>
        <div><h3>{insurer.name}</h3><p>{insurer.blurb}</p></div>
        <a href={insurer.site} target="_blank" rel="noreferrer">Visit official website ↗</a>
      </div>
      <div className="chit-plan-cards">{insurer.plans.map((plan) => <PlanCard key={plan.name} plan={plan} />)}</div>
      {insurer.name === 'Care Health' ? <>
        <p className="chit-company-note">More ways to buy Care Supreme — same plan, different starting premiums:</p>
        <div className="chit-table-wrap"><table className="chit-table">
          <thead><tr><th>Variant</th><th>Sum insured</th><th>Starting premium</th></tr></thead>
          <tbody>{insurer.plans[0].variants?.map((variant) => <tr key={variant.name}><td>{variant.name}</td><td>{variant.si}</td><td>{variant.premium}</td></tr>)}</tbody>
        </table></div>
      </> : null}
      {insurer.name === 'Star Health' ? <p className="chit-company-note">Star Health does not publish a starting premium for these plans on its official pages — ask us and we will get the exact premium for your age, city and cover.</p> : null}
    </article>)}

    <p className="chit-plans-note">Health insurance is subject to underwriting, policy terms and exclusions. Read the insurer&apos;s policy wording and benefit illustration carefully. Spoorthi Groups provides advisory and facilitation support; relevant provider terms govern every offering.</p>
  </section>;
}
