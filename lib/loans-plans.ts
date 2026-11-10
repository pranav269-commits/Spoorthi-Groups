// Loans plan data — compiled 2026-11-10 from the four partner lenders' own
// official websites. "Starting" rates are shown only where the lender
// publishes one; otherwise the card says "On request". Where a lender's own
// pages conflict, the main product-page figure is used. Do not add figures
// from aggregators or blogs.

import { SectorPartner } from '@/lib/sector-plans';

export const loanPartners: SectorPartner[] = [
  {
    name: 'ICICI Bank',
    logo: '/partners/loans/icici-bank.svg',
    site: 'https://www.icicibank.com/',
    blurb: 'Home loans, balance transfer, top-up and loans against property — with a 5-step digital sanction.',
    plans: [
      {
        name: 'Home Loan',
        headline: '₹20 lakh – ₹5 crore',
        price: 'From 7.80%* p.a.',
        priceNote: 'Pre-approved digital journey; standard floating from 8.75% p.a. (valid till 30 Nov 2026).',
        features: [
          'Tenure up to 30 years',
          'LTV 90% / 80% / 75% by property value',
          '5-step online sanction',
          'Instant sanction for pre-approved customers — up to ₹3 crore',
        ],
      },
      {
        name: 'Home Loan Balance Transfer',
        headline: '₹20 lakh – ₹5 crore',
        price: null,
        features: [
          'Lower EMIs — save on your monthly outgo',
          'Top-up available along with the transfer',
          'CIBIL 700+ (salaried and self-employed)',
          'Instant sanction, minimal documentation',
        ],
      },
      {
        name: 'Top-Up Home Loan',
        headline: '₹50,000 – ₹50 lakh',
        price: null,
        features: [
          'Tenure up to 10 years',
          'Up to 100% of the original loan sanctioned',
          'For existing ICICI home-loan customers',
          'For renovation, extension or personal needs',
        ],
      },
      {
        name: 'Top-Up Home Loan — 24 Hour',
        headline: 'Up to ₹5 crore',
        price: null,
        features: [
          'Disbursal within 24 hours',
          'Tenure — higher of 10 years or the base loan’s remaining tenure',
          'Existing mortgage customers with a good repayment record',
          'Usually no fresh income documents',
        ],
      },
      {
        name: 'Top-Up Home Loan — Instant',
        headline: 'Up to ₹1 crore',
        price: null,
        features: [
          'Tenure up to 10 years',
          'Instant disbursal',
          'Minimal documentation',
          'No additional collateral (select customers only)',
        ],
      },
      {
        name: 'Loan Against Property',
        headline: '₹20 lakh – ₹5 crore',
        price: 'From 10.85% p.a.',
        priceNote: 'Above ₹1 crore.',
        features: [
          'Tenure up to 15 years',
          'LTV up to 75% of the property’s market value',
          'Overdraft up to 90% of the LAP',
          'Residential, commercial and industrial property accepted',
        ],
      },
      {
        name: 'Pratham Home Loan',
        headline: '₹5 lakh – ₹50 lakh',
        price: null,
        features: [
          'Tenure up to 20 years',
          'Minimum salary ₹10,000/month (salaried)',
          'Age 21–70 years',
          'Balance transfer from banks and NBFCs available',
        ],
      },
    ],
  },
  {
    name: 'Aditya Birla Housing Finance',
    logo: '/partners/loans/aditya-birla-housing-finance.png',
    site: 'https://homefinance.adityabirlacapital.com/',
    blurb: 'Home loans and loans against property with flexible repayment — step-up, step-down and extended tenure.',
    plans: [
      {
        name: 'Home Loan',
        headline: 'Any amount (Prime HL)',
        price: 'Starting 7.87% p.a.',
        priceNote: 'Self-employed 8.12% p.a. on the same page.',
        features: [
          'Tenure up to 30 years',
          'LTV 90% / 80% / 75% by property value',
          'No prepayment charges on floating-rate loans',
          'Fixed and floating rate options',
        ],
      },
      {
        name: 'Loan Against Property',
        headline: 'On request',
        price: 'Starting 9.15% p.a.',
        priceNote: 'Self-employed 9.40% p.a. on the same page.',
        features: [
          'Tenure up to 20 years',
          'LTV up to 75% of the property’s market value',
          'Borrow against residential, commercial or industrial property',
          'Processing fee 0.50%–2.50%',
        ],
      },
      {
        name: 'Home Improvement',
        headline: 'On request',
        price: '7.75% – 15.50% p.a.',
        features: [
          'LTV 90% / 80% / 75% by property value',
          'Nil part-payment / pre-closure charges on floating-rate loans to individuals',
          'Floating or fixed rate options',
        ],
      },
      {
        name: 'Home Extension',
        headline: 'On request',
        price: '7.75% – 15.50% p.a.',
        features: [
          'Tenure up to 20 years',
          'LTV 90% / 80% / 75% by property value',
          'No prepayment charges on floating-rate loans',
          'CIBIL 650+ ideal',
        ],
      },
      {
        name: 'Plot + Construction',
        headline: 'On request',
        price: '7.75% – 15.50% p.a.',
        features: [
          'Single loan for plot purchase + construction',
          'Funds released in stages as construction progresses',
          'Tenure up to 20 years',
          '175+ locations nationwide',
        ],
      },
      {
        name: 'Step-Up Home Loan',
        headline: 'Up to 30% higher eligibility',
        price: null,
        features: [
          'Lower EMIs in the first 3 years',
          'Tenure up to 25 years',
          'For salaried young professionals',
          'Home purchase loans only',
        ],
      },
    ],
  },
  {
    name: 'Cholamandalam',
    logo: '/partners/loans/chola.png',
    site: 'https://www.cholamandalam.com/',
    blurb: 'Home loans and loans against property for salaried and self-employed borrowers, with doorstep service.',
    footnote:
      'Figures are as shown on Cholamandalam’s product pages. Tenure and amount figures also appear differently on other pages of the lender’s own site — confirm with the lender before applying.',
    plans: [
      {
        name: 'Home Loan',
        headline: '₹3 lakh – ₹40 lakh',
        price: null,
        features: [
          'Tenure up to 20 years',
          'For salaried and self-employed — rural, urban and semi-urban',
          'Flexible income evaluation for irregular income',
          'Doorstep service with legal and technical verification',
        ],
      },
      {
        name: 'Loan Against Property',
        headline: '₹5 lakh – ₹7.5 crore',
        price: null,
        features: [
          'Tenure up to 15 years',
          'Against residential, commercial, industrial property or vacant plot',
          'Fast-track approval — min. 5 working days after documents',
          'Part-payment and prepayment facility',
        ],
      },
      {
        name: 'Balance Transfer & Top-Up',
        headline: 'On request',
        price: null,
        features: [
          'Pre-approved top-up for existing customers',
          'Transfer your home loan to Chola',
          'Improved tenure, better service, hassle-free processing',
          'Balance-transfer calculator to compare terms',
        ],
      },
      {
        name: 'Self-Construction Home Loan',
        headline: 'On request',
        price: null,
        features: [
          'Finance to build from scratch on your own land',
          'Loan released in stages as construction progresses',
          'Covers all home construction-related expenses',
          'Quick approval process',
        ],
      },
    ],
  },
  {
    name: 'Piramal Finance',
    logo: '/partners/loans/piramal-finance.png',
    site: 'https://www.piramalfinance.com/',
    blurb: 'Home loans, construction loans and loans against property with doorstep service and quick sanctions.',
    plans: [
      {
        name: 'Home Loan',
        headline: '₹3 lakh – ₹2 crore',
        price: 'From 9.99% p.a.',
        features: [
          'Tenure up to 30 years',
          'LTV 75%–90% of property cost',
          'Apply online or at a branch — doorstep service',
          'Sanction typically 7–15 working days',
        ],
      },
      {
        name: 'Home Construction Loan',
        headline: '70%–90% funding',
        price: 'From 9.99% p.a.',
        features: [
          'Tenure up to 30 years',
          'Stage-linked disbursal as construction progresses',
          'Top-up loan facility',
          'Dedicated relationship manager',
        ],
      },
      {
        name: 'Loan Against Property',
        headline: 'Up to ₹2 crore',
        price: 'From 11.50% p.a.',
        features: [
          'Tenure up to 15 years',
          'LTV up to 60% of the property’s market value',
          'Residential, commercial and plots accepted as collateral',
          'Quick sanctions, minimal documentation for self-employed',
        ],
      },
      {
        name: 'Secured Business Loan',
        headline: 'On request',
        price: 'From 8.9% p.a.',
        features: [
          'Collateral can be property, fixed deposits or gold',
          'Repay every 15 days (fortnightly)',
          'Lower interest rate, higher eligibility',
          'Doorstep service and quick approvals',
        ],
      },
    ],
  },
];
