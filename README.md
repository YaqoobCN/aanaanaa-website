# aanaanaa Website v2

A lightweight, dependency-free static brand website for aanaanaa.

## What changed in v2

- Reworked visual system with a more premium U.S. technology-company feel.
- Replaced blank/placeholder image areas with responsive CSS-built product and infrastructure visuals.
- Kept the site dependency-light: plain HTML, CSS, and JavaScript.
- Kept all company/product claims conservative and aligned with the supplied brief.
- No fabricated address, phone, email, social account, customer, partner, certification, model number, price, or performance claim.
- Contact form remains preview-only and does not transmit/store submissions.
- No `_redirects` file, avoiding the previous Cloudflare Workers infinite-loop configuration issue.
- Includes `wrangler.jsonc` for the existing Cloudflare Worker named `aanaanaa-website`.

## Deploy

The existing Worker can deploy the repository as static assets. Cloudflare currently supports static assets on Workers, and static asset requests are free/unlimited on the Workers plans; the current Free plan has a 100,000/day request limit for requests that invoke the Worker script. See the official Cloudflare docs for current limits.

For the current GitHub + Cloudflare setup, commit the contents of this folder to the existing `YaqoobCN/aanaanaa-website` repository and let the connected build deploy it.

The project is intentionally self-contained. There is no React/Vite/Supabase dependency in v2.

## Domain

Once the Worker is deployed, use Cloudflare Workers > aanaanaa-website > Settings > Domains & Routes > Add > Custom Domain and add `aanaanaa.com`.

Do not delete the existing mail-related DNS records for aanaanaa.com.
