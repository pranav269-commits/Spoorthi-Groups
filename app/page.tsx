/* eslint-disable @next/next/no-img-element */
import { PublicShell } from '@/components/PublicShell';
import { GoalFinder } from '@/components/GoalFinder';
import { EnquiryForm } from '@/components/EnquiryForm';
import { FamilyJourney } from '@/components/FamilyJourney';
import { PartnerNetwork } from '@/components/PartnerNetwork';
import { company, createWhatsAppLink, services, social } from '@/lib/config';

export default function Home() {
  return <PublicShell><main id="main-content">
    <section className="premium-home-hero">
      <video className="hero-cinematic hero-video" autoPlay muted loop playsInline poster="/media/joint-family-hero-v2.png" aria-label="A multigenerational Indian family sharing a joyful evening together at home">
        <source src="/media/family-cinematic-loop.mp4" type="video/mp4" />
      </video>
      <span className="hero-shade" aria-hidden="true"/><span className="protection-orbit orbit-one" aria-hidden="true"/><span className="protection-orbit orbit-two" aria-hidden="true"/>
      <div className="hero-signet"><img src={company.logo} alt="Spoorthi Groups"/><span>Guidance for generations</span></div>
      <div className="hero-copy cinematic-copy"><p className="eyebrow light"><span /> Financial guidance for Hyderabad families</p><h1>Important decisions feel easier <em>with the right guidance.</em></h1><p className="hero-intro">Spoorthi Groups helps families explore chits, insurance, loans and property opportunities through clear conversations and personal guidance.</p><div className="hero-actions"><a className="button button-primary" href="#services">Explore our services <span>→</span></a><a className="button glass-button" href="#enquire">Speak with Spoorthi Groups</a><a className="hero-whatsapp" href={createWhatsAppLink()} target="_blank" rel="noreferrer">Continue on WhatsApp ↗</a></div><div className="trust-line"><span>Clear explanations</span><span>Personal assistance</span><span>One connected relationship</span></div></div>
      <div className="hero-philosophy"><b>Our philosophy</b><p>Guidance before transactions.<br/>Relationships beyond transactions.</p></div>
    </section>

    <PartnerNetwork/>

    <section className="service-showcase" id="services"><div className="service-showcase-heading"><p className="eyebrow"><span/> What Spoorthi Groups helps with</p><h2>Five services.<br/><em>One family perspective.</em></h2><p>Explore each need in its own context, then connect it back to the wider plan.</p></div><div className="service-showcase-grid">{services.map((service,index)=><a className={`premium-service-card theme-${service.theme}`} href={`/services/${service.slug}`} key={service.slug}><div className="service-poster"><span className="poster-symbol">{service.symbol}</span><i/><i/><i/></div><span className="service-card-index">{service.number} / 05</span><div><small>{service.label}</small><h3>{service.title}</h3><p>{service.summary}</p></div><b>Explore service <span>↗</span></b>{index===0&&<em>Start here</em>}</a>)}</div></section>

    <section className="opening-statement"><p className="eyebrow"><span/> Beyond a single product</p><div><h2>Families do not make financial decisions in separate boxes.</h2><p>One goal can touch savings, protection, borrowing and property at the same time. Spoorthi Groups brings those conversations together—clearly, personally and without rushing the decision.</p></div><strong>Different needs.<br/><em>One relationship.</em></strong></section>

    <FamilyJourney/>

    <section className="goal-section" id="goal-finder"><GoalFinder/></section>

    <section className="approach-section"><div className="approach-heading"><p className="eyebrow light"><span/> Why Spoorthi Groups</p><h2>Technology should simplify the journey — <em>not replace the conversation.</em></h2></div><ol className="process-list"><li><span>01</span><div><h3>Begin with the family context.</h3><p>Start with a goal, a responsibility or simply what feels uncertain.</p></div></li><li><span>02</span><div><h3>Make the options understandable.</h3><p>Spoorthi Groups explains important considerations without unnecessary complexity.</p></div></li><li><span>03</span><div><h3>Connect the relevant route.</h3><p>Explore provider-led possibilities while keeping terms, fit and independent checks visible.</p></div></li><li><span>04</span><div><h3>Stay supported through the next steps.</h3><p>A familiar human conversation remains available as priorities evolve.</p></div></li></ol></section>

    <section className="human-advisory"><div className="advisor-portrait"><img src="/media/joint-family-hero-v2.png" alt="A family sharing an important conversation at home"/><span>Hyderabad-based guidance</span></div><div><p className="eyebrow"><span/> Human guidance, close to home</p><h2>A decision can begin online.<br/><em>Trust still grows in conversation.</em></h2><p>Spoorthi Groups combines a clear digital starting point with personal assistance. Ask the question you actually have, understand what deserves attention, and move forward at a pace that feels considered.</p><div className="advisor-metrics"><span><b>5</b> connected service areas</span><span><b>1</b> familiar relationship</span><span><b>100%</b> clarity-first approach</span></div><a className="button button-primary" href="#enquire">Start a conversation <span>→</span></a></div></section>

    <section className="insight-teaser"><div><p className="eyebrow"><span/> Financial clarity</p><h2>Better questions lead to <em>better-informed decisions.</em></h2></div><div className="article-cards"><a href="/insights#insurance-basics"><span>Protection basics</span><h3>Questions to ask before choosing insurance cover</h3><p>Learn what to look for in provider documentation, exclusions and benefit limits.</p><b>Read the guide →</b></a><a href="/insights#loan-readiness"><span>Loan readiness</span><h3>Prepare for a financing conversation</h3><p>A practical checklist for organising your requirement and documentation.</p><b>Read the guide →</b></a></div></section>

    <section className="enquiry-section" id="enquire"><div className="enquiry-copy"><p className="eyebrow light"><span/> Speak with Spoorthi Groups</p><h2>Tell us what you need.<br/><em>We’ll help you find a clear next step.</em></h2><p>Share only basic contact details and your area of interest. Never send OTPs, PINs, passwords, full card details or sensitive medical information.</p><div className="direct-contact"><a href={`tel:${company.phoneE164}`}><span>Call Spoorthi Groups</span><b>{company.phoneDisplay}</b></a><a href={createWhatsAppLink()} target="_blank" rel="noreferrer"><span>WhatsApp Spoorthi Groups</span><b>Start a secure chat ↗</b></a></div></div><div className="form-card"><EnquiryForm/></div></section>

    <section className="social-section"><div><p className="eyebrow"><span/> Stay connected with Spoorthi Groups</p><h2>Financial guidance should remain <em>within reach.</em></h2><p>Follow Spoorthi Groups for useful updates or begin a direct conversation in the channel that works for you.</p></div><div className="social-grid"><a href={createWhatsAppLink()} target="_blank" rel="noreferrer"><span>WA</span><b>WhatsApp</b><small>Message Spoorthi Groups</small><i>↗</i></a><a href={social.instagram} target="_blank" rel="noreferrer"><span>IG</span><b>Instagram</b><small>{social.instagramLabel}</small><i>↗</i></a><a href={social.youtube} target="_blank" rel="noreferrer"><span>YT</span><b>YouTube</b><small>{social.youtubeLabel}</small><i>↗</i></a></div></section>
    <div className="desktop-quick"><a href={createWhatsAppLink()} target="_blank" rel="noreferrer">WhatsApp</a><a href={`tel:${company.phoneE164}`}>Call</a><a href="#enquire">Enquire</a></div>
  </main></PublicShell>;
}
