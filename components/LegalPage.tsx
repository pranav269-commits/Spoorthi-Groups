import { PublicShell } from './PublicShell';

export type LegalSection={title:string;body:string};
export function LegalPage({eyebrow,title,intro,sections}:{eyebrow:string;title:string;intro:string;sections:LegalSection[]}){return <PublicShell><main id="main-content"><section className="legal-hero"><p className="eyebrow"><span/>{eyebrow}</p><h1>{title}</h1><p>{intro}</p><small>Last updated: 23 August 2026</small></section><section className="legal-content">{sections.map(section=><article key={section.title}><h2>{section.title}</h2><p>{section.body}</p></article>)}</section></main></PublicShell>}
