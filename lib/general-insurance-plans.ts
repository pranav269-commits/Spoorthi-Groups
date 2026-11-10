// General Insurance plans from our tied-up partners.
// Compiled 2026-11-10 from the insurers' own official websites.
// Premiums are shown only where the insurer publishes one; everywhere else
// price is null and the page renders "On request".
// No aggregator or blog figures are used anywhere in this file.

import { SectorPartner } from '@/lib/sector-plans';

export const generalInsurancePartners: SectorPartner[] = [
  {
    name: 'Go Digit',
    logo: '/partners/general-insurance/go-digit.png',
    site: 'https://www.godigit.com/',
    blurb: 'Digital-first insurer — smartphone claims and paperless service.',
    footnote:
      "Cashless garage figures appear differently across Digit's own pages (9,000+ / 9,500+ / 10,000+) — 9,000+ is the lowest published figure.",
    plans: [
      {
        name: 'Car Insurance',
        headline: 'Third-party property damage up to ₹7.5 lakh',
        price: 'Starting ₹2,094',
        features: [
          'NCB up to 50%',
          '11 add-ons',
          'Doorstep pickup & drop with 6-month repair warranty',
          'Smartphone claims with 7-minute self-inspection',
        ],
      },
      {
        name: 'Health Insurance',
        headline: 'SI Back-Up 100% of base sum insured',
        price: null,
        features: [
          'Cumulative bonus 50% per claim-free year, up to 100%',
          'No room-rent cap',
          'No co-pay',
          '16,400+ network hospitals',
        ],
      },
      {
        name: 'Happy Traveller',
        headline: 'Medical cover $50,000 – $500,000',
        price: 'From ₹395',
        priceNote: 'The product page title also quotes ₹19/day.',
        features: [
          '150+ countries covered',
          'Trip cancellation $500–$750',
          'Baggage loss $500–$1,000',
          'Flight-delay benefit ₹500–1,000 auto-paid for 6+ hour delays',
        ],
      },
      {
        name: 'Home Insurance — Bharat Griha Raksha',
        headline: 'Tenure 1 – 10 years, single premium',
        price: 'From ₹150/year',
        features: [
          'Sum insured auto-escalates 10% a year free',
          'Contents 20% of building sum insured, capped ₹10 lakh',
          'Fire, theft, flood, earthquake and storm cover',
        ],
      },
    ],
  },
  {
    name: 'Tata AIG',
    logo: '/partners/general-insurance/tata-aig.png',
    site: 'https://www.tataaig.com/',
    blurb: 'Comprehensive car, travel and home cover with a large cashless network.',
    plans: [
      {
        name: 'Auto Secure — Private Car',
        headline: 'Personal accident ₹15 lakh',
        price: null,
        features: [
          '6,300+ cashless garages',
          'NCB up to 50%',
          '8+ add-ons incl. zero depreciation and return to invoice',
          'Up to 85% online-purchase discounts',
        ],
      },
      {
        name: 'Travel Guard',
        headline: 'International travel cover',
        price: 'Starting ₹22.5/day',
        features: [
          'Lost passport cover',
          'Trip curtailment/cancellation',
          'Missed flights',
          'Personal liability',
          'No medical exam',
        ],
      },
      {
        name: 'Home Secure Supreme',
        headline: 'Building & contents up to ₹10 crore each',
        price: null,
        features: [
          'Rent for alternative accommodation up to 12 months',
          'Worldwide public liability',
          'Burglary cover',
          'Personal accident for the whole family',
        ],
      },
    ],
  },
  {
    name: 'IFFCO-TOKIO',
    logo: '/partners/general-insurance/iffco-tokio.png',
    site: 'https://www.iffcotokio.co.in/',
    blurb: 'Motor, health, home and travel insurance from one insurer.',
    plans: [
      {
        name: 'Motor Insurance',
        headline: 'Cashless garages 4,300+',
        price: null,
        features: [
          'NCB up to 50%',
          'Customisable IDV',
          '4-hour quick claim settlement',
          'Third-party + comprehensive',
        ],
      },
      {
        name: 'Health Insurance',
        headline: 'Individual up to ₹20 lakh / Family Floater up to ₹30 lakh',
        price: null,
        features: [
          '7,000+ cashless hospitals',
          'Top-up up to ₹1 crore',
          '380 day-care procedures',
          'Tax saving up to ₹1,00,000 under Section 80D',
        ],
      },
      {
        name: 'Home Insurance',
        headline: 'All in One Home Protector',
        price: null,
        features: [
          'Bharat Griha Raksha up to 10-year term',
          'Home Suvidha for accidental damage',
          'Personal liability',
          'Owners & tenants',
        ],
      },
      {
        name: 'Travel Insurance',
        headline: 'International + Pravasi Bharatiya Bima Yojana',
        price: null,
        features: [
          'Overseas medical',
          'Lost passport/baggage',
          'Hijack allowance',
          'Dental and COVID-19 cover',
        ],
      },
    ],
  },
];
