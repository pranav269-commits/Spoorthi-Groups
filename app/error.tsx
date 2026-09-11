'use client';
export default function ErrorPage({reset}:{reset:()=>void}){return <main className="not-found"><span>Something went wrong</span><h1>We could not load this page.</h1><p>Please retry. If the problem continues, call or WhatsApp Spoorthi Groups.</p><button className="button button-primary" onClick={()=>reset()}>Try again</button></main>}
