// Life insurance plan data — compiled 2026-11-10 from the three partner
// insurers' own official websites, brochures and policy documents.
// "Starting" premiums are shown only where the insurer publishes one;
// otherwise the card says "On request". Do not add figures from
// aggregators or blogs.

import { SectorPartner } from '@/lib/sector-plans';

export const lifePartners: SectorPartner[] = [
  {
    name: 'LIC',
    logo: '/partners/life-insurance/lic.png',
    site: 'https://licindia.in/',
    blurb: "India's largest life insurer — term, endowment, ULIP and annuity plans.",
    plans: [
      {
        name: "LIC's New Tech-Term (Plan 954)",
        headline: '₹50 lakh min, no maximum',
        price: '₹9,135/yr',
        priceLabel: 'Example premium',
        priceNote: '₹1 crore cover, 20-year term, non-smoker male, age 30, Level option (excl. taxes)',
        features: [
          'Entry 18–65 years; term 10–40 years',
          'Level or Increasing sum assured — up to 2× basic SA',
          'Death benefit payable in instalments over 5 / 10 / 15 years',
          'Special premium rates for women and non-smokers',
        ],
      },
      {
        name: "LIC's New Jeevan Anand (Plan 715)",
        headline: '₹2 lakh min, no maximum',
        price: null,
        features: [
          'Entry 18–50 years; term 15–35 years',
          'Maturity: sum assured + bonuses',
          'Death benefit: higher of 125% of SA or 7× annualised premium',
          'Whole-life cover of the basic SA continues after maturity',
        ],
      },
      {
        name: "LIC's Index Plus (Plan 873)",
        headline: '7× or 10× annualised premium',
        price: 'From ₹2,500/month',
        priceLabel: 'Minimum premium',
        priceNote: 'Monthly premium, NACH mode; yearly ₹30,000',
        features: [
          'Entry 90 days–60 years; term 10–25 years',
          'Two NIFTY index funds: Flexi Growth and Flexi Smart Growth',
          'Guaranteed additions up to 90% of one annualised premium over 25 years',
          'Refund of mortality charges on maturity; 4 free fund switches a year',
        ],
      },
      {
        name: "LIC's New Jeevan Shanti (Plan 758)",
        headline: '₹1.5 lakh min, no maximum',
        price: '₹1,50,000',
        priceLabel: 'Minimum purchase price',
        features: [
          'Single or Joint Life deferred annuity; deferment 1–5 years',
          'Annuity rates guaranteed at inception, payable for life',
          'No medical examination',
          'Death benefit: higher of purchase price plus accrued benefit, or 105% of purchase price',
        ],
      },
    ],
  },
  {
    name: 'ICICI Life',
    logo: '/partners/life-insurance/icici-life.png',
    site: 'https://www.icicilife.com/',
    blurb: 'Term, ULIP, guaranteed income and pension plans.',
    plans: [
      {
        name: 'iProtect Smart Plus',
        headline: '₹50 lakh min, no maximum',
        price: '₹16,799/yr',
        priceLabel: 'Example premium',
        priceNote: '32-year-old woman, ₹1 crore cover + ₹1 crore accidental death cover, 30-year term, Life Plus',
        features: [
          'Three variants: Life, Life Plus, Life Rebalancing',
          'Instant claim payout up to ₹3 lakh',
          '100% payout on terminal-illness diagnosis',
          'Premium Break: skip premium for 1 year; Smart Exit after 25 years',
        ],
      },
      {
        name: 'iProtect Smart ROP',
        headline: '₹10 lakh min',
        price: '₹1,441/month',
        priceLabel: 'Example premium',
        priceNote: '20-year-old man, ₹1 crore cover, 40-year term, incl. taxes',
        features: [
          'Entry 18–55 years; term 20–40 years',
          '100% of premiums paid back on survival to maturity',
          'Death benefit: highest of 7× annual premium, 105% of premiums paid, or sum assured',
          '15% lower premiums for women; loan up to 80% of surrender value',
        ],
      },
      {
        name: 'iProtect Smart',
        headline: '₹1 lakh min, no maximum',
        price: '₹2,400/yr',
        priceLabel: 'Minimum premium',
        priceNote: 'Excluding taxes',
        features: [
          'Entry 18–65 years; term up to age 85, Whole Life to 99',
          'Four options: Life, Life Plus, Life & Health, All in One',
          'Accidental death benefit up to ₹2 crore; critical illness up to ₹1 crore',
          'Payout as lump sum, monthly income, or increasing income',
        ],
      },
      {
        name: 'Signature',
        headline: '7×–10× annualised premium',
        price: 'From ₹1,00,000/yr',
        priceLabel: 'Minimum premium',
        features: [
          'Entry 0–65 years; term 15–30 years, Whole Life to 99',
          'Three options: Advantage, Premier, Exclusive',
          'Return of premium allocation charges every 5th year from year 15',
          'Wealth Boosters from year 10; partial withdrawals after 5 years',
        ],
      },
      {
        name: 'GIFT Pro',
        headline: '₹2.5 lakh min sum assured',
        price: null,
        features: [
          'Premium paying term 5–12 years; income period 5–30 years',
          'Guaranteed income: Level or Increasing (+5% p.a.)',
          'MoneyBack: 0–200% of premiums as a lump sum',
          'Example: ₹1 lakh/yr × 12 yrs → ₹1.48 lakh/yr level income for 12 yrs',
        ],
      },
      {
        name: 'Signature Pension',
        headline: 'Up to 60% tax-free lump sum at vesting',
        price: '₹10,000/month',
        priceLabel: 'Example premium',
        priceNote: '25-year-old, 35-year term, vesting at 60 — corpus ₹1.03 crore at 8% (non-guaranteed)',
        features: [
          'Entry 18–75 years; term min 15 years',
          '10–11 fund options and 3 portfolio strategies',
          'Up to 60% tax-free lump sum at vesting; rest buys an annuity',
          'Minimum death benefit: 105% of premiums paid',
        ],
      },
    ],
  },
  {
    name: 'Tata AIA',
    logo: '/partners/life-insurance/tata-aia-life.png',
    site: 'https://www.tataaia.com/',
    blurb: 'Term, savings, ULIP and annuity plans — 99.45% individual death claim settlement ratio (FY 2025–26).',
    plans: [
      {
        name: 'Sampoorna Raksha Promise',
        headline: '₹5 lakh min, no maximum',
        price: '₹501/month',
        priceLabel: 'Example premium',
        priceNote: '20-year-old woman, non-smoker, ₹1 crore cover, 20-year term, Life Promise (with digital + salaried discounts)',
        features: [
          'Four options: Life Promise, Plus, Joint Life, Joint Life Plus',
          '50% of sum assured on terminal-illness diagnosis; premiums waived',
          'Plus options return 100% of premiums on survival',
          'FlexiPay: defer premiums up to 12 months',
        ],
      },
      {
        name: 'Maha Raksha Supreme Select',
        headline: '₹25 lakh min, no maximum',
        price: '₹692/month',
        priceLabel: 'Example premium',
        priceNote: '20-year-old woman, non-smoker, ₹2 crore cover, 20-year term, Life Secure (with first-year discounts)',
        features: [
          'Four options: Life Secure, Plus, Joint Life, Joint Life Plus',
          '50% of sum assured on terminal-illness diagnosis; premiums waived',
          'Plus options return 80% / 90% / 100% of premiums on survival',
          'Instant payout ₹3 lakh on claim intimation',
        ],
      },
      {
        name: 'Fortune Guarantee',
        headline: '10× annualised premium',
        price: null,
        features: [
          'Term 10–40 years; maturity up to age 80',
          'Guaranteed lump sum at maturity',
          'Life cover throughout the policy term',
          'Limited premium payment options',
        ],
      },
      {
        name: 'Smart Sampoorna Raksha Supreme',
        headline: '7×–10× annualised premium',
        price: 'From ₹15,000/yr',
        priceLabel: 'Minimum premium',
        priceNote: '₹15,000–₹20,000/yr depending on term',
        features: [
          'Entry 18–65 years; two options: Classic and Optima',
          'Optima: zero premium allocation and zero policy admin charges',
          '28 fund options; Cover Continuance Boosters from year 11',
          'Classic refunds 2× allocation charges and mortality charges',
        ],
      },
      {
        name: 'Fortune Guarantee Pension',
        headline: 'Annuity options',
        price: null,
        features: [
          'Immediate Life Annuity',
          'Immediate Life Annuity with Return of Purchase Price',
          'Deferred Life Annuity (GA-I / GA-II) with Return of Purchase Price',
          'Full details on request — ask us and we will confirm with Tata AIA.',
        ],
      },
    ],
  },
];
