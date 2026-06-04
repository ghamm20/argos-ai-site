# Argos-AI

Landing page for **Argos-AI** — AI-powered security audits for developers. One flat price: **$99 per audit**.

Built with [Next.js 16](https://nextjs.org) (App Router) and [Tailwind CSS v4](https://tailwindcss.com). Dark terminal theme with green accents. Mobile responsive. Statically prerendered.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build   # produces an optimized, statically prerendered build
npm run start   # serve the production build
npm run lint
```

## Deploy to Vercel

This is a standard Next.js app with no custom server config — it deploys to Vercel with zero setup.

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import it at [vercel.com/new](https://vercel.com/new). Vercel auto-detects Next.js.
3. Deploy. No environment variables are required.

Or from the CLI:

```bash
npx vercel        # preview deploy
npx vercel --prod # production deploy
```

## Editing the page

- **Copy, sections, and audit coverage** live in [`src/app/page.tsx`](src/app/page.tsx).
- The **Stripe checkout link** is the `STRIPE_CHECKOUT_URL` constant at the top of that file.
- **Theme colors** (background, foreground, green accent) are CSS variables in [`src/app/globals.css`](src/app/globals.css).
- **Page title / SEO metadata** is in [`src/app/layout.tsx`](src/app/layout.tsx).
