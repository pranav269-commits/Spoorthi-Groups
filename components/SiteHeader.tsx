'use client';
/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import Link from 'next/link';
import { company, createWhatsAppLink, navigation, services } from '@/lib/config';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Spoorthi Groups home"><img src={company.logo} alt="Spoorthi Groups" /></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <div className="nav-services"><Link href="/#services">Services <span aria-hidden="true">⌄</span></Link><div className="service-menu">
            <p>Explore our guidance</p>{services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}><span>{service.number}</span>{service.label}<b>↗</b></Link>)}
          </div></div>
          {navigation.slice(1).map((item) => <Link href={item.href} key={item.label}>{item.label}</Link>)}
        </nav>
        <div className="header-actions"><Link className="header-cta" href="/#enquire">Speak with Spoorthi Groups <span aria-hidden="true">↗</span></Link><button className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}><span>{open ? 'Close' : 'Menu'}</span><b aria-hidden="true">{open ? '×' : '☰'}</b></button></div>
      </header>
      <div className={`mobile-menu ${open ? 'is-open' : ''}`} id="mobile-navigation" aria-hidden={!open}>
        <nav aria-label="Mobile navigation">{navigation.map((item) => <Link href={item.href} key={item.label} onClick={() => setOpen(false)}>{item.label}<span>↗</span></Link>)}</nav>
        <p>Our services</p><div className="mobile-service-links">{services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setOpen(false)}>{service.label}</Link>)}</div>
        <div className="mobile-contact"><a href={`tel:${company.phoneE164}`}>Call us</a><a href={createWhatsAppLink()} target="_blank" rel="noreferrer">WhatsApp</a></div>
      </div>
    </>
  );
}
