// Shared plan-card types for the sector pages reworked like Chits/Health
// (Life, Loans, Education Loans, General Insurance). Figures come only from
// each partner's own official website — never from aggregators or blogs.
// `headline` is the big bold line (sum insured / loan amount / cover).
// `price` is shown only where the partner publishes one; otherwise null
// renders as "On request".

export type SectorPlan = {
  name: string;
  headline: string | null;
  price: string | null;
  priceLabel?: string;
  priceNote?: string;
  features: string[];
};

export type SectorPartner = {
  name: string;
  logo: string;
  site: string;
  blurb: string;
  plans: SectorPlan[];
  footnote?: string;
};
