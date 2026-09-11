# Spoorthi Groups digital flagship

Production-oriented public website and enquiry operations portal for Spoorthi Groups. The project uses Vinext/Next App Router, React, TypeScript, Tailwind CSS, Cloudflare D1, Drizzle schema definitions and Sites hosting.

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

The Sites scaffold supplies a project-local D1 database and local ChatGPT sign-in identity.

## Environment

Copy `.env.example` to `.env.local` for local configuration. Set `ADMIN_EMAILS` to a comma-separated list of signed-in email addresses that may use `/admin`. When connecting the final domain, set `NEXT_PUBLIC_SITE_URL=https://spoorthigrps.in`.

Email notifications are intentionally inactive until a real provider is integrated and `EMAIL_API_KEY` plus `NOTIFICATION_EMAIL` are configured. The enquiry database works without email.

## Database

The `DB` binding is declared in `.openai/hosting.json`. Tables and indexes are initialized safely at runtime and represented by the checked-in Drizzle schema and SQL migration.

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

The `/admin` route uses Sites-managed Sign in with ChatGPT for authentication and a server-side `ADMIN_EMAILS` allowlist for authorization. The portal reads real D1 data, supports search/filtering, status changes, notes, click-to-call, WhatsApp, email and CSV export.

## Deployment and domain

Publish through Sites so the D1 binding, sign-in routes and Cloudflare Worker runtime are provisioned together. After deployment, configure the `ADMIN_EMAILS` runtime value in Sites. To connect `spoorthigrps.in`, add it as a custom Sites domain, copy the exact DNS records Sites provides into the domain registrar, wait for verification and then set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin before the next production version.

## Business data requiring verification

- The SLR Colony / Laxmi Nagar / Gundlapochampally address is historical and visibly marked as pending verification.
- The Facebook identifier `spoorthigroup` is retained in configuration notes but no public link is guessed.
- No providers, licences, testimonials, company history, customer counts, returns or approval claims are fabricated.
