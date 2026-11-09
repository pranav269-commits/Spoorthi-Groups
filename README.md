# Spoorthi Groups digital flagship

Production-oriented public website and enquiry operations portal for Spoorthi Groups. The project uses Vinext/Next App Router, React, TypeScript, Tailwind CSS, Cloudflare D1, Drizzle schema definitions and Cloudflare Workers hosting.

## Architecture

- `app/` contains the public routes, service detail routes, legal pages, enquiry API and protected admin portal.
- `components/` contains the shared brand shell, responsive navigation, enquiry experience, goal finder and lead-management interface.
- `lib/config.ts` is the typed source of truth for company, social and service content.
- `lib/database.ts` owns D1 initialization and access. `db/schema.ts` and `drizzle/` contain the typed schema and migration.
- `public/brand/` contains the exact supplied official logo. `public/og.png` is the social preview card.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

The local D1 database is supplied by the Vinext/Cloudflare Vite plugin
(`vite.config.ts` wires the `DB` binding from `.openai/hosting.json`).

For local admin testing, put a test-only password in `.dev.vars`
(gitignored, never a real password):

```bash
ADMIN_PASSWORD=change-me-locally-only
```

## Environment

Copy `.env.example` to `.env.local` for local configuration. When connecting the final domain, set `NEXT_PUBLIC_SITE_URL=https://spoorthigroups.in`.

Email notifications are intentionally inactive until a real provider is integrated and `EMAIL_API_KEY` plus `NOTIFICATION_EMAIL` are configured. The enquiry database works without email.

## Database

The `DB` binding is declared in `wrangler.jsonc` (single source of truth for
local dev and deploy). Tables and indexes are initialized safely at runtime and represented by the checked-in Drizzle schema and SQL migration.

```bash
npm run db:generate
```

## Verification

```bash
npm run lint
npm run typecheck
npm test
npm run test:integration
npm run build
```

## Admin setup

The `/admin` route uses a password login (`/admin/login`). The admin identity
is the company email `spoorthigroups22@gmail.com`; the password comes from
the `ADMIN_PASSWORD` secret and is never stored in the repo. A successful
login sets a signed, HttpOnly session cookie (7 days). The portal reads real
D1 data, supports search/filtering, status changes, notes, click-to-call,
WhatsApp, email and CSV export.

Set the production password in Cloudflare (see `DEPLOY.md`):

```bash
npx wrangler secret put ADMIN_PASSWORD
```

Optional: `ADMIN_SESSION_SECRET` signs the session cookies separately; if it
is unset, `ADMIN_PASSWORD` is used as the signing key instead.

## Deployment and domain

See `DEPLOY.md` for the full Cloudflare Workers deployment steps: create the
D1 database, fill in its `database_id` in `wrangler.jsonc`, set the
`ADMIN_PASSWORD` secret, then run `npx @vinext/cloudflare deploy`. To connect
`spoorthigroups.in`, add it as a custom domain on the Worker in the Cloudflare
dashboard, then point the domain's DNS at Cloudflare from the registrar. No
code change is needed for the domain — `NEXT_PUBLIC_SITE_URL` is already
`https://spoorthigroups.in` in `wrangler.jsonc` and `lib/config.ts`.

## Business data requiring verification

- The SLR Colony / Laxmi Nagar / Gundlapochampally address is historical and visibly marked as pending verification.
- The Facebook identifier `spoorthigroup` is retained in configuration notes but no public link is guessed.
- No providers, licences, testimonials, company history, customer counts, returns or approval claims are fabricated.
