export const company = {
  name: 'Spoorthi Groups',
  description: 'A Hyderabad-based financial services advisor helping families and individuals explore important financial decisions with clarity and personal assistance.',
  phoneDisplay: '+91 87121 21301',
  phoneE164: '+918712121301',
  whatsapp: '918712121301',
  email: 'spoorthigroups22@gmail.com',
  address: ['SLR Colony', 'Laxmi Nagar', 'Gundlapochampally', 'Hyderabad, Telangana 500100'],
  addressStatus: 'REQUIRES_VERIFICATION' as const,
  domain: 'https://spoorthigrps.in',
  logo: '/brand/spoorthi-groups-logo.png',
};

export const social = {
  instagram: 'https://www.instagram.com/spoorthigroups22/',
  instagramLabel: '@spoorthigroups22',
  facebook: null as string | null,
  facebookLabel: 'spoorthigroup',
  youtube: 'https://www.youtube.com/@SpoorthiGrps',
  youtubeLabel: '@SpoorthiGrps',
};

export const services = [
  {
    slug: 'chits', shortName: 'Chits', label: 'Chit advisory', number: '01',
    title: 'Build Financial Discipline Around the Goals That Matter.',
    theme: 'amber', symbol: '₹', scene: 'A measured rhythm for plans that matter',
    summary: 'Understand chit structures, timelines and participation considerations before deciding what fits your plans.',
    points: ['Goal-led planning', 'Clear explanation of the process', 'Guidance across available providers'],
    process: ['Share your goal and preferred timeline', 'Understand contribution and auction concepts', 'Review relevant options and provider documentation', 'Continue with support through the next steps'],
    whatsapp: 'Hello Spoorthi Groups, I would like to understand your Chit advisory options.',
  },
  {
    slug: 'health-insurance', shortName: 'Health', label: 'Health insurance guidance', number: '02',
    title: 'Protect the Life You Have Built.',
    theme: 'mint', symbol: '+', scene: 'Protection designed around real family life',
    summary: 'Explore important questions around family cover, waiting periods, hospitals and exclusions with help in plain language.',
    points: ['Family needs discussion', 'Policy feature explanations', 'Application assistance'],
    process: ['Tell us who needs cover', 'Discuss existing cover and priorities', 'Explore relevant provider possibilities', 'Review provider terms before applying'],
    whatsapp: 'Hello Spoorthi Groups, I would like guidance regarding Health Insurance.',
  },
  {
    slug: 'life-insurance', shortName: 'Life', label: 'Life insurance guidance', number: '03',
    title: 'Protect Tomorrow for the People Who Matter Today.',
    theme: 'violet', symbol: '∞', scene: 'A promise that continues beyond today',
    summary: 'Discuss life protection goals, time horizons and family responsibilities before exploring provider options.',
    points: ['Needs-led conversation', 'Simple product explanations', 'Documentation guidance'],
    process: ['Map your responsibilities and goals', 'Understand major protection approaches', 'Explore relevant provider options', 'Review terms and complete next steps'],
    whatsapp: 'Hello Spoorthi Groups, I would like to discuss Life Insurance options.',
  },
  {
    slug: 'loans', shortName: 'Loans', label: 'Loan assistance', number: '04',
    title: 'Financing Should Begin With Clarity.',
    theme: 'cobalt', symbol: '↗', scene: 'A clearer route from requirement to readiness',
    summary: 'Get help understanding documentation, eligibility considerations and available routes for personal or business needs.',
    points: ['Requirement assessment', 'Documentation checklist', 'Provider-led eligibility guidance'],
    process: ['Explain the purpose and amount required', 'Review the likely documentation', 'Discuss relevant provider routes', 'Submit directly with the provider when ready'],
    whatsapp: 'Hello Spoorthi Groups, I would like assistance regarding a loan requirement.',
  },
  {
    slug: 'real-estate', shortName: 'Property', label: 'Property guidance', number: '05',
    title: 'Property Decisions Shape More Than an Address.',
    theme: 'terracotta', symbol: '⌂', scene: 'A place, an asset and a family decision',
    summary: 'Discuss residential or investment goals and receive guidance on the questions to ask before taking the next step.',
    points: ['Goal and budget conversation', 'Local opportunity guidance', 'Connection through the next steps'],
    process: ['Share your property objective', 'Discuss location and budget preferences', 'Explore relevant possibilities', 'Carry out independent legal and financial verification'],
    whatsapp: 'Hello Spoorthi Groups, I would like to discuss property opportunities.',
  },
] as const;

export type ServiceSlug = (typeof services)[number]['slug'];

export type PartnerCategory = 'CHITS' | 'HEALTH_INSURANCE' | 'LIFE_INSURANCE' | 'LOANS' | 'REAL_ESTATE';
export type PartnerStatus = 'VERIFIED' | 'HISTORICAL' | 'INACTIVE' | 'REQUIRES_VERIFICATION';
export type Partner = { name: string; category: PartnerCategory; status: PartnerStatus; officialUrl?: string; logo?: string };

export const partners: Partner[] = [
  { name: 'Kapil Chits', category: 'CHITS', status: 'HISTORICAL', officialUrl: 'https://kapilchits.com/', logo: '/partners/chits/kapil-chits.png' },
  { name: 'Margadarsi Chit Fund', category: 'CHITS', status: 'HISTORICAL', officialUrl: 'https://www.margadarsi.com/', logo: '/partners/chits/margadarsi.svg' },
  { name: 'Shriram Chits', category: 'CHITS', status: 'HISTORICAL', officialUrl: 'https://shriramchits.com/', logo: '/partners/chits/shriram-chits.png' },
  { name: 'myPaisaa', category: 'CHITS', status: 'HISTORICAL', officialUrl: 'https://www.mypaisaa.com/', logo: '/partners/chits/mypaisaa.svg' },
  { name: 'Star Health Insurance', category: 'HEALTH_INSURANCE', status: 'HISTORICAL', officialUrl: 'https://www.starhealth.in/', logo: '/partners/health-insurance/star-health.svg' },
  { name: 'Care Health Insurance', category: 'HEALTH_INSURANCE', status: 'HISTORICAL', officialUrl: 'https://www.careinsurance.com/', logo: '/partners/health-insurance/care-health.svg' },
  { name: 'Aditya Birla Health Insurance Co. Limited', category: 'HEALTH_INSURANCE', status: 'HISTORICAL', officialUrl: 'https://www.adityabirlacapital.com/healthinsurance/home', logo: '/partners/health-insurance/aditya-birla-health.png' },
  { name: 'Life Insurance Corporation of India (LIC)', category: 'LIFE_INSURANCE', status: 'HISTORICAL', officialUrl: 'https://licindia.in/', logo: '/partners/life-insurance/lic.png' },
  { name: 'Kapil Properties', category: 'REAL_ESTATE', status: 'HISTORICAL', officialUrl: 'https://kapilproperties.com/', logo: '/partners/real-estate/kapil-properties.svg' },
  { name: 'Building Blocks Group (BBG India)', category: 'REAL_ESTATE', status: 'HISTORICAL', officialUrl: 'https://www.bbgindia.com/' },
];

export function createWhatsAppLink(message = 'Hello Spoorthi Groups, I visited your website and would like guidance regarding your financial services.') {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navigation = [
  { label: 'Services', href: '/#services' },
  { label: 'Why Spoorthi Groups', href: '/why-spoorthi' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/#enquire' },
];
