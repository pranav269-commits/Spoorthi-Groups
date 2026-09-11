import type { Metadata, Viewport } from 'next';
import { DM_Sans, Manrope } from 'next/font/google';
import { company, social } from '@/lib/config';
import './globals.css';

const display = Manrope({ variable: '--font-display', subsets: ['latin'], display:'swap' });
const body = DM_Sans({ variable: '--font-body', subsets: ['latin'], display:'swap' });
const siteUrl=process.env.NEXT_PUBLIC_SITE_URL || company.domain;

export const viewport:Viewport={width:'device-width',initialScale:1,viewportFit:'cover',themeColor:'#07335d'};
export const metadata:Metadata={
  metadataBase:new URL(siteUrl), title:{default:'Spoorthi Groups | Financial Guidance in Hyderabad',template:'%s | Spoorthi Groups'},
  description:'Clear, human guidance across chits, health insurance, life insurance, loans and property needs in Hyderabad.',
  alternates:{canonical:'/'}, icons:{icon:company.logo,apple:company.logo},
  openGraph:{type:'website',url:'/',siteName:company.name,title:'Spoorthi Groups | Clear guidance for important financial decisions',description:'Chits, insurance, loans and property guidance with a clear, human approach.',images:[{url:new URL('/og.png',siteUrl).toString(),width:1200,height:630,alt:'Clear guidance for important financial decisions — Spoorthi Groups'}]},
  twitter:{card:'summary_large_image',title:'Spoorthi Groups | Clear financial guidance',description:'Chits, insurance, loans and property guidance in Hyderabad.',images:[new URL('/og.png',siteUrl).toString()]},
  robots:{index:true,follow:true},
};

const organization={ '@context':'https://schema.org','@type':'Organization',name:company.name,url:company.domain,logo:new URL(company.logo,company.domain).toString(),email:company.email,telephone:company.phoneE164,sameAs:[social.instagram,social.youtube] };

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className={`${display.variable} ${body.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization).replace(/</g,'\\u003c')}}/>{children}</body></html>}
