# aanaanaa website

A lightweight, dependency-free, responsive brand website for aanaanaa.

## Pages

- Home
- Products
- Solutions
- About
- Contact

## Important

The contact form currently performs front-end validation and shows a success message. It does **not** send or store messages yet, matching the project requirement that database integration is deferred.

No physical address, phone number, email address, customer logos, partner claims, product model numbers, pricing, certifications, or performance claims are fabricated.

## Deploy to Cloudflare Pages

This version is intentionally static, so you do not need Node.js, React, Vite, Supabase, or any paid website builder.

1. Upload this folder to a GitHub repository.
2. In Cloudflare Pages, connect the repository.
3. Select **No framework** / static site if prompted.
4. Build command: leave empty.
5. Output directory: `/` (the repository root).
6. Add your custom domain in Cloudflare Pages.
7. If the domain is managed by Alibaba Cloud DNS, you can either:
   - move DNS management to Cloudflare for the simplest apex-domain setup, or
   - use a CNAME for a subdomain such as `www` if you prefer to keep DNS elsewhere.

The `_redirects` file keeps the site compatible with SPA-style fallback hosting.

## Before launch

Replace the placeholder contact behavior with a real form backend once the official business email / inquiry workflow is ready.
