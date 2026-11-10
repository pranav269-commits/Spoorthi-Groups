// Education loan data — compiled 2026-11-10 from the four partner lenders'
// own official websites. "Starting" rates are shown only where the lender
// publishes one; otherwise the card says "On request".
// Do not add figures from aggregators or blogs.

import { SectorPartner } from '@/lib/sector-plans';

export const educationLoanPartners: SectorPartner[] = [
  {
    name: 'HDFC Credila',
    logo: '/partners/education-loans/hdfc-credila.png',
    site: 'https://www.credila.com/',
    blurb: 'Specialist education lender for studies in India and abroad, with up to 100% finance.',
    footnote:
      '*No maximum amount is published on Credila’s official pages — do not assume a cap.',
    plans: [
      {
        name: 'Abroad Studies',
        headline: 'No stated maximum*',
        price: 'Secured from 9.95% p.a.',
        priceNote: 'Unsecured from 11.25% p.a. (floating). Origination 1.25% + GST.',
        features: [
          'Tenure up to 15 years PG / 20 years UG',
          'Moratorium — course + 12 months',
          'Up to 100% finance',
          'No prepayment / foreclosure charges',
        ],
      },
      {
        name: 'India Studies',
        headline: 'No stated maximum*',
        price: 'Secured from 9.95% p.a.',
        priceNote: 'Unsecured from 11.25% p.a. (floating).',
        features: [
          'Processing within 21 days on complete documentation',
          'Same rates as the abroad loan',
          'No preferential rate for girl students',
        ],
      },
    ],
  },
  {
    name: 'Avanse',
    logo: '/partners/education-loans/avanse.jpg',
    site: 'https://www.avanse.com/',
    blurb: 'Education loans for study abroad, undergraduate abroad, India and short-term school fees.',
    plans: [
      {
        name: 'Study Abroad',
        headline: 'Up to ₹2 crore unsecured',
        price: 'From 10.25% p.a.',
        features: [
          'Tenure up to 15 years',
          'Moratorium up to 6 months after course or 3 months after job, whichever is earlier',
          '100% finance',
          'Sanction in 3 days',
        ],
      },
      {
        name: 'UG Abroad',
        headline: 'Up to ₹4 crore incl. unsecured',
        price: null,
        features: [
          'Tenure up to 20 years',
          'Full moratorium available',
          '2,000+ institutes, 50 countries',
        ],
      },
      {
        name: 'Study in India',
        headline: '₹5 lakh – ₹50 lakh',
        price: 'Starting at 10% p.a.',
        features: [
          'Tenure up to 15 years',
          'Sanction in 3 days',
          'Also Executive Education and Skill Enhancement loans',
        ],
      },
      {
        name: 'Short-Term Loan',
        headline: 'Up to ₹3 lakh',
        price: '0% interest with affiliated schools',
        priceNote: 'Processing fee ₹999.',
        features: [
          '3 or 6 month EMI',
          'Zero prepayment charges',
          'Instant approval',
        ],
      },
    ],
  },
  {
    name: 'IDFC FIRST Bank',
    logo: '/partners/education-loans/idfc-first-bank.svg',
    site: 'https://www.idfcfirst.bank.in/',
    blurb: 'One education loan for India and abroad, with pre-admission sanction and zero foreclosure charges.',
    plans: [
      {
        name: 'Education Loan (India & Abroad)',
        headline: 'Up to ₹2 crore with collateral',
        price: 'From 9.5% p.a.',
        priceNote: 'Up to ₹1 crore without collateral (select universities). Repo-benchmarked rate.',
        features: [
          'Tenure up to 15 years',
          'Moratorium — course + 12 months',
          '100% financing',
          'Pre-admission sanction',
          'Zero foreclosure / part-payment charges',
        ],
      },
    ],
  },
  {
    name: 'Tata Capital',
    logo: '/partners/education-loans/tata-capital.jpg',
    site: 'https://www.tatacapital.com/',
    blurb: 'Education loans for India and abroad, secured or unsecured, with pre-admission sanction.',
    plans: [
      {
        name: 'Education Loan (India & Abroad)',
        headline: 'Up to ₹85 lakh unsecured / ₹2 crore secured',
        price: 'Starting from 9.50% p.a.',
        priceNote: 'Official range 9.50–18% p.a.',
        features: [
          'Tenure up to 13 years incl. 1-year moratorium',
          'Pre-admission sanction',
          'Section 80E benefit',
          'Co-borrower required, age 18–45',
        ],
      },
    ],
  },
];
