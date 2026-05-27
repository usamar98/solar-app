# HelioGrid Power

Premium frontend-only website for a solar, battery storage, and energy infrastructure company.

## Tech Stack

- Next.js App Router
- React
- Tailwind CSS
- Framer Motion
- Lucide icons

## Run Locally

```bash
npm install
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Open `http://127.0.0.1:3000`.

## Production Build

```bash
npm run typecheck
npm run build
```

## Customize

Update company details, services, industries, projects, reviews, FAQs, service areas, and social links in:

```text
data/site.ts
```

The website is frontend-only. Forms show local success messages and do not submit to a backend.
