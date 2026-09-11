import { PublicShell } from '@/components/PublicShell';
import Link from 'next/link';
export default function NotFound(){return <PublicShell><main id="main-content" className="not-found"><span>404</span><h1>This page could not be found.</h1><p>The link may have changed, but you can continue exploring Spoorthi Groups.</p><Link className="button button-primary" href="/">Return home</Link></main></PublicShell>}
