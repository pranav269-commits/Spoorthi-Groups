/* eslint-disable @next/next/no-img-element */
import { company, createWhatsAppLink, navigation, services, social } from '@/lib/config';
import Link from 'next/link';

export function SiteFooter() {
  return <>
    <footer className="site-footer">
      <div className="footer-intro"><img src={company.logo} alt="Spoorthi Groups"/><p>Helping families navigate important financial decisions with clearer conversations and personal assistance.</p><a href={createWhatsAppLink()} target="_blank" rel="noreferrer">Start on WhatsApp <span>↗</span></a></div>
      <div className="footer-column"><h2>Explore</h2>{navigation.map((item) => <Link href={item.href} key={item.label}>{item.label}</Link>)}<Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/disclaimer">Disclaimer</Link></div>
      <div className="footer-column"><h2>Services</h2>{services.map((service) => <Link href={`/services/${service.slug}`} key={service.slug}>{service.label}</Link>)}</div>
      <div className="footer-column"><h2>Contact</h2><a href={`tel:${company.phoneE164}`}>{company.phoneDisplay}</a><a href={`mailto:${company.email}`}>{company.email}</a><p>{company.address.join(', ')}<small>Address pending verification</small></p><h2 className="follow-title">Follow</h2><a href={social.instagram} target="_blank" rel="noreferrer">Instagram {social.instagramLabel}</a><a href={social.youtube} target="_blank" rel="noreferrer">YouTube {social.youtubeLabel}</a></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Spoorthi Groups</span><span>Financial services advisor • Hyderabad, Telangana</span></div>
    </footer>
    <div className="mobile-action-bar"><a href={`tel:${company.phoneE164}`}><b>⌕</b><span>Call</span></a><a href={createWhatsAppLink()} target="_blank" rel="noreferrer"><b>↗</b><span>WhatsApp</span></a><Link href="/#enquire"><b>＋</b><span>Enquire</span></Link></div>
  </>;
}
