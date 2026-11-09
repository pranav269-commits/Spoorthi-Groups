/* eslint-disable @next/next/no-html-link-for-pages -- plain <a> is intentional: next/link client-side navigation does not navigate in this Vinext build, plain anchors do */
import { PublicShell } from '@/components/PublicShell';
export default function NotFound(){return <PublicShell><main id="main-content" className="not-found"><span>404</span><h1>This page could not be found.</h1><p>The link may have changed, but you can continue exploring Spoorthi Groups.</p><a className="button button-primary" href="/">Return home</a></main></PublicShell>}
