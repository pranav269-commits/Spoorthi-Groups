'use client';

import { useState } from 'react';
import { services } from '@/lib/config';

const goals = [
  ['Build disciplined savings', 'chits'], ['Protect my family’s health', 'health-insurance'],
  ['Plan life protection', 'life-insurance'], ['Arrange financing', 'loans'], ['Explore property', 'real-estate'],
] as const;

export function GoalFinder() {
  const [slug, setSlug] = useState<string | null>(null);
  const match = services.find((service) => service.slug === slug);
  return <div className="goal-finder">
    <div className="goal-copy"><p className="eyebrow"><span /> Find your starting point</p><h2>What are you planning for?</h2><p>Choose what feels closest. You can always discuss more than one need with us.</p></div>
    <div className="goal-options" role="group" aria-label="Financial goals">{goals.map(([label, value]) => <button key={value} onClick={() => setSlug(value)} className={slug === value ? 'selected' : ''}><span>{label}</span><b aria-hidden="true">{slug === value ? '✓' : '→'}</b></button>)}</div>
    {match && <div className="goal-result" role="status"><span>Suggested starting point</span><h3>{match.label}</h3><p>{match.summary}</p><div><a className="button button-primary" href={`/services/${match.slug}`}>Explore this service</a><a className="button button-secondary" href={`/#enquire`}>Ask Spoorthi Groups</a></div></div>}
  </div>;
}
