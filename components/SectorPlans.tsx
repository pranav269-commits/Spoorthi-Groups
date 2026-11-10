/* eslint-disable @next/next/no-img-element */

import type { SectorPartner } from '@/lib/sector-plans';

export function SectorPlans({ id, heading, intro, partners, note, defaultPriceLabel }: {
  id: string;
  heading: string;
  intro: string;
  partners: SectorPartner[];
  note: string;
  defaultPriceLabel: string;
}) {
  return <section className="chit-plans" id={id} aria-labelledby={`${id}-title`}>
    <div className="chit-plans-heading">
      <p className="eyebrow"><span /> Plans from our partners</p>
      <h2 id={`${id}-title`}>{heading}</h2>
      <p>{intro}</p>
    </div>

    {partners.map((partner) => <article key={partner.name} className="chit-company">
      <div className="chit-company-head">
        <div className="chit-company-logo"><img src={partner.logo} alt={`${partner.name} logo`} /></div>
        <div><h3>{partner.name}</h3><p>{partner.blurb}</p></div>
        <a href={partner.site} target="_blank" rel="noreferrer">Visit official website ↗</a>
      </div>
      <div className="chit-plan-cards">{partner.plans.map((plan) => <div className="chit-plan-card" key={plan.name}>
        <span>{plan.name}</span>
        <b>{plan.headline ?? 'On request'}</b>
        <p><strong>{plan.priceLabel ?? defaultPriceLabel}</strong> {plan.price ?? 'On request'}</p>
        <ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        {plan.priceNote ? <small>{plan.priceNote}</small> : null}
      </div>)}</div>
      {partner.footnote ? <p className="chit-company-note">{partner.footnote}</p> : null}
    </article>)}

    <p className="chit-plans-note">{note}</p>
  </section>;
}
