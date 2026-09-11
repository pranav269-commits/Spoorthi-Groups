'use client';

import { useState } from 'react';

const moments = [
  { phase: 'Build', number: '01', title: 'Turn intention into a steady rhythm.', copy: 'Explore structured ways to work toward education, celebrations, business needs and future plans.', link: '/services/chits' },
  { phase: 'Protect', number: '02', title: 'Prepare for the moments no family can predict.', copy: 'Understand health and life protection through plain-language conversations about needs, terms and trade-offs.', link: '/services/health-insurance' },
  { phase: 'Access', number: '03', title: 'Move from a requirement to a clearer route.', copy: 'Organise the purpose, eligibility considerations and documentation behind a financing need.', link: '/services/loans' },
  { phase: 'Grow', number: '04', title: 'Choose assets with the wider family picture in mind.', copy: 'Approach property opportunities through the lens of budget, location, purpose and independent verification.', link: '/services/real-estate' },
];

export function FamilyJourney() {
  const [active, setActive] = useState(0);
  const moment = moments[active];
  return <section className="family-journey" aria-labelledby="journey-title">
    <div className="journey-heading"><p className="eyebrow"><span/> A family journey</p><h2 id="journey-title">Needs change over time.<br/><em>The relationship can continue.</em></h2></div>
    <div className="journey-interactive">
      <div className="journey-rail" role="tablist" aria-label="Financial journey phases">{moments.map((item,index)=><button type="button" role="tab" aria-selected={active===index} className={active===index?'active':''} onClick={()=>setActive(index)} key={item.phase}><span>{item.number}</span><b>{item.phase}</b></button>)}</div>
      <div className="journey-detail" role="tabpanel"><span>{moment.number} / 04</span><h3>{moment.title}</h3><p>{moment.copy}</p><a href={moment.link}>Explore this part of the journey <b>↗</b></a><div className={`journey-orbit orbit-${active}`} aria-hidden="true"><i/><i/><i/></div></div>
    </div>
  </section>;
}
