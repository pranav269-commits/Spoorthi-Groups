// Health plan data — compiled 2026-11-10 from the four partner insurers' own
// official websites and prospectuses. "Starting" premiums are shown only where
// the insurer publishes one; otherwise the card says "Premium on request".
// Do not add figures from aggregators or blogs.

export type HealthPlanVariant = { name: string; si: string; premium: string };

export type HealthPlan = {
  name: string;
  si: string | null;
  premium: string | null;
  premiumLabel?: string;
  premiumNote?: string;
  features: string[];
  variants?: HealthPlanVariant[];
};

export type HealthInsurer = {
  name: string;
  logo: string;
  site: string;
  blurb: string;
  plans: HealthPlan[];
};

export const healthInsurers: HealthInsurer[] = [
  {
    name: 'Star Health',
    logo: '/partners/health-insurance/star-health.svg',
    site: 'https://www.starhealth.in/',
    blurb: 'Family floater and comprehensive plans with auto-restoration, loyalty bonus and AYUSH cover.',
    plans: [
      {
        name: 'Family Health Optima',
        si: '₹5 lakh – ₹25 lakh',
        premium: null,
        features: [
          '100% auto-restoration, up to 3 times a year',
          'AYUSH cover up to the sum insured',
          'Newborn cover from day 16',
          'Loyalty bonus — 10% of the sum insured',
        ],
      },
      {
        name: 'Super Star',
        si: '₹5 lakh – ₹1 crore + Unlimited',
        premium: null,
        features: [
          'Freeze Your Age — entry age locked till a claim or age 55',
          'Unlimited 100% auto-restoration',
          'No room-rent cap — any room',
          'Quick Shield — selected pre-existing diseases from day 31',
        ],
      },
      {
        name: 'Young Star',
        si: '₹5 lakh – ₹1 crore',
        premium: null,
        features: [
          'Entry 18–40 years; 10% discount if bought before 36',
          'Cumulative bonus 20% a year, up to 100%',
          'Single private AC room',
          'Delivery cover ₹30,000 (Gold variant)',
        ],
      },
      {
        name: 'Star Comprehensive',
        si: '₹5 lakh – ₹1 crore',
        premium: null,
        features: [
          'Cumulative bonus up to 100%',
          'OPD — consultation, dental and eye cover',
          'No room-rent cap',
          'Pre-existing disease wait reducible to 12 months (buy-back)',
        ],
      },
    ],
  },
  {
    name: 'Care Health',
    logo: '/partners/health-insurance/care-health.svg',
    site: 'https://www.careinsurance.com/',
    blurb: 'Comprehensive plans with unlimited recharge, cumulative bonus and 22,100+ cashless hospitals.',
    plans: [
      {
        name: 'Care Supreme',
        si: '₹5 lakh – ₹1 crore',
        premium: 'Starting ₹13/day',
        premiumNote: 'For an individual, age 18, ₹7 lakh cover, Zone 3 city, with Room Rent Modification and Sublimit add-ons.',
        features: [
          'Unlimited automatic recharge',
          'Cumulative bonus 50% a year, up to 100%',
          'No sub-limits, no zone-based co-payment',
          'Pre- and post-hospitalisation 60 / 180 days',
        ],
        variants: [
          { name: 'Super Saver', si: '₹7 lakh – ₹1 crore', premium: '₹10/day' },
          { name: 'Value', si: '₹7 lakh – ₹1 crore', premium: '₹11/day' },
          { name: 'Value Plus', si: '₹7 lakh – ₹1 crore', premium: '₹18/day' },
          { name: 'Vikas', si: '₹5 lakh – ₹10 lakh', premium: '₹14/day' },
        ],
      },
      {
        name: 'Care Plus',
        si: '₹3 lakh – ₹25 lakh',
        premium: null,
        features: [
          'Youth plan — entry up to 35 years',
          'Unlimited auto-recharge, even for related illness',
          'NCB Protect — 50% a year, up to 200%',
          'OPD — consultations, dental and eye cover',
        ],
      },
      {
        name: 'Ultimate Care',
        si: '₹5 lakh – ₹1 crore + Unlimited',
        premium: 'Starting ₹15/day',
        premiumNote: 'Unlimited-cover option from ₹26/day (age 18, 1 year, Zone 3 city).',
        features: [
          'Premium Payback — first-year premium back after 5 claim-free years',
          'Infinity Bonus — 100% of sum insured every year, unlimited',
          'One lifetime claim with no sum-insured limit (optional)',
          'Instant Cover add-on — 7 conditions from day 31',
        ],
      },
    ],
  },
  {
    name: 'Aditya Birla Health',
    logo: '/partners/health-insurance/aditya-birla-health.png',
    site: 'https://www.adityabirlacapital.com/healthinsurance/home',
    blurb: 'Plans that reward healthy living — earn part of the premium back through HealthReturns.',
    plans: [
      {
        name: 'Activ One Max',
        si: '₹2 lakh – ₹6 crore',
        premium: 'Starting ₹6,177/yr',
        features: [
          'HealthReturns — up to 100% of premium back',
          'Super Credit — cover grows up to 6× in 6 years',
          'Super Reload — unlimited refill',
          'No room-rent or ICU capping',
        ],
      },
      {
        name: 'Activ One Max+',
        si: '₹2 lakh – ₹6 crore',
        premium: 'Starting ₹9,952/yr',
        features: [
          'Super Reload — unlimited refill',
          'Claim Protect — non-medical expenses covered',
          'Chronic Care from day 1 (optional)',
          'No room-rent or ICU capping',
        ],
      },
      {
        name: 'Activ One NXT',
        si: null,
        premium: 'Starting ₹5,630/yr',
        features: [
          '2× sum insured from the first claim',
          'Unlimited 100% refill for later claims',
          'Mental health cover',
          'Super Credit up to 5×',
        ],
      },
      {
        name: 'Activ One VYTL',
        si: '₹2 crore – ₹6 crore',
        premium: 'Starting ₹7,111/yr',
        features: [
          '7 chronic conditions covered from day 1',
          'Chronic Management Program — OPD + diagnostics',
          'HealthReturns up to 100%',
          'Super Credit 50% a year, up to 100%',
        ],
      },
      {
        name: 'Activ Fit',
        si: '₹1 lakh – ₹1 crore',
        premium: 'Starting ₹6,863/yr',
        features: [
          'Entry 18–45 years',
          'HealthReturns up to 50%',
          '100% unlimited refill (Binge Refill)',
          'Super No Claim Bonus — cover doubles in 2 claim-free years',
        ],
      },
    ],
  },
  {
    name: 'HDFC ERGO',
    logo: '/partners/health-insurance/hdfc-ergo.png',
    site: 'https://www.hdfcergo.com/',
    blurb: 'Optima range — 2× to 5× cover from day 1, with unlimited restore options and 16,000+ network hospitals.',
    plans: [
      {
        name: 'Optima Secure',
        si: '₹5 lakh – ₹2 crore',
        premium: 'Starting ₹27/day',
        features: [
          '4× cover in 2 years (2× from day 1)',
          'No room-rent cap; 100% of non-medical expenses',
          'Worldwide cover',
          'Free annual health check-up',
        ],
      },
      {
        name: 'Optima Secure+',
        si: '₹10 lakh – ₹2 crore',
        premium: 'Example ₹11,242/yr',
        premiumLabel: 'Example premium',
        premiumNote: 'For a 35-year-old in Chennai, ₹10 lakh cover — as illustrated on the insurer’s page. No generic “starting at” figure is published.',
        features: [
          'Infinite Benefit — 100% of base cover added every year, no cap',
          '2× cover from day 1; unlimited restore',
          'ABCD chronic rider — 4 conditions from day 31',
          'No room-rent cap',
        ],
      },
      {
        name: 'Optima Super Secure',
        si: '₹10 lakh – ₹2 crore',
        premium: null,
        premiumNote: '3-year tenure only.',
        features: [
          '5× cover (3× from day 1)',
          'No room-rent or disease capping; no co-pay',
          'Deductible discounts up to 50%',
          'Please note: pregnancy is not covered under this plan',
        ],
      },
    ],
  },
];
