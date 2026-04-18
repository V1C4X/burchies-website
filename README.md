# Burchie's Fried Chicken — Website

Marketing site for [Burchie's Fried Chicken](https://www.instagram.com/burchies.fried.chicken/), a New Zealand food truck based in Auckland.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS v4 (`@theme` tokens)
- Framer Motion 12 · Lenis smooth scroll
- Bun (package manager)
- Resend (catering enquiry email)
- Vercel (hosting)

## Local dev

```bash
bun install
bun dev
```

Visit <http://localhost:3000>.

## Environment variables

Set these in `.env.local` for local dev, and in Vercel for production/preview:

- `RESEND_API_KEY` — from <https://resend.com/>
- `CATERING_TO_EMAIL` — inbox that receives catering enquiries
- `CATERING_FROM_EMAIL` — verified sender domain, e.g. `catering@burchies.co.nz`

## Deployment

Auto-deploys via Vercel on push to `main`. Preview deploys for all branches.

---

## Handover Procedure

When transferring ownership from the developer (Victor Pollett) to the client (Thomas / Burchie's):

1. **GitHub repo** — GitHub → Settings → Transfer → enter Thomas's GitHub username.
2. **Vercel project** — create a Vercel team under Thomas's account, then transfer the project (Vercel → Settings → Transfer Project).
3. **Domain** — transfer at registrar (typically 24–48h with the auth code).
4. **Resend** — Thomas creates their own Resend account, adds + verifies the domain, updates `RESEND_API_KEY` in Vercel env vars.
5. **Rotate all API keys** post-transfer for hygiene.

Site content originates from the client — images + captions in `/public/instagram/` are from the client's own Instagram.
