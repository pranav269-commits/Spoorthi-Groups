# Spoorthi Groups — Vercel deployment

Native Next.js website with Supabase Postgres enquiry storage and password-based administrator sign-in. It preserves the original public design and the repaired enquiry-management interface.

## Development and verification

Use Node.js 22, then `npm ci`, `npm test`, `npm run build` and `npm run start`. For HTTP integration checks start the production server on port 3001 (`npm run start -- -p 3001`) and run `npm run test:integration`. These HTTP checks expect the server to have no database credentials and verify that missing setup fails safely; run them only against a local test server. Database tests execute the real migration in an isolated PGlite Postgres instance and never use the live customer database.

## Deployment setup

1. Use the Supabase project in Mumbai selected by the owner. Apply `supabase/migrations/202610230001_enquiries.sql` once to its empty public schema. It creates the enquiry tables, indexes, row-level security and server-only transactional submission function. The migration must be approved before it runs; a previously declined request has not been worked around.
2. In Supabase Authentication → Users, create the two administrator users: the two owner-approved admin email addresses. The owner chooses passwords directly in Supabase. Disable public user signup because this is an admin-only application. No passwords belong in source code, chat, or Vercel variables.
3. Import the `vercel-migration` branch in Vercel as a Next.js project. Use the Mumbai function region (`bom1`) and Node.js 22. Keep the preview protected while setup is incomplete. Do not deploy the old Sites branch to Vercel.
4. Set these Vercel variables for Preview and Production, then redeploy:

| Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project API URL |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Active publishable key from Supabase API settings |
| `SUPABASE_SERVICE_ROLE_KEY` | Server service-role key; save as a sensitive Vercel variable |
| `ADMIN_EMAILS` | Comma-separated owner-approved admin email addresses |
| `NEXT_PUBLIC_SITE_URL` | Final HTTPS website origin; use `https://spoorthigrps.com` after it is owned and connected |

The service-role key bypasses database row-level security and must remain server-only. Never give it a `NEXT_PUBLIC_` prefix. Only authenticated, allowlisted administrators can read or update enquiries through the website. Public clients cannot query the enquiry tables or call the submission database function directly.

## Launch checks

- Apply the migration and verify database permissions before opening the site publicly.
- Sign in as each administrator through `/admin/login`; check sign-out and rejection of an unapproved user.
- Submit one clearly labelled test enquiry, then verify notes, status updates, reload persistence, search and CSV export. Close the test record.
- Confirm duplicate submissions return the same reference, and rate limiting responds without creating another record.
- Connect the purchased domain using Vercel's exact DNS records; check HTTPS and both root/www behavior.
- Configure database backups and the account's usage/billing settings. Vercel Hobby is restricted to personal non-commercial use; use a plan eligible for this business site.

## Migration limits

Existing records and users from ChatGPT Sites are not copied by this source migration. Email notifications are not integrated. The historical company address remains marked for verification. Sites-specific hosting configuration and ChatGPT identity headers are not used by this version. The original Sites deployment is unchanged.
