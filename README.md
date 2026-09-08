# Farrukh Express Inc — Website

Marketing and recruiting site for **FARRUKH EXPRESS INC** (MC 1418733 · DOT 3873235),
a nationwide OTR motor carrier based in Cuyahoga Falls, Ohio.

Built with React 19 + TypeScript + Vite, deployed to `www.farrukhexpress.com`.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # typecheck + production build to dist/
npm run preview  # serve the production build
npm run lint     # oxlint
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero, audiences, stats, services, values, driver benefits, hiring process, testimonials, FAQ |
| `/about` | About — story, company profile, values, safety & compliance |
| `/services` | Services — six service lines, shipment process, broker/shipper capacity |
| `/fleet` | Fleet — tractors and trailer types, maintenance program |
| `/careers` | Careers hub — driver vs. office tracks, hiring process, EEO statement |
| `/careers/drivers` | Six driver positions with full requirements |
| `/careers/office` | Six office & operations positions with responsibilities and requirements |
| `/apply` | Single application form for every open role |
| `/contact` | Contact form, office details, embedded map |
| `*` | 404 |

## Editing content

Nearly all copy lives in [`src/data/site.ts`](src/data/site.ts) — company details, stats,
services, both position lists, fleet, values, driver benefits, and FAQs. Edit that file
rather than the page components for routine content changes; adding a position to
`driverPositions` or `officePositions` automatically adds it to its careers page, to the
application form's position dropdown, and to the "currently hiring" list on `/apply`.

## Forms

Both the contact form and the application form POST JSON to a single configurable
endpoint. By default that is [FormSubmit](https://formsubmit.co), which relays straight
to `info@farrukhexpress.com` with no backend of our own.

> **One-time setup:** the very first submission triggers a confirmation email to
> `info@farrukhexpress.com`. Click the link in it once — until then, submissions are not
> delivered.

To use a different service (Formspree, Web3Forms, a custom API — anything that accepts a
JSON POST), set `VITE_FORM_ENDPOINT`. See [`.env.example`](.env.example).

Both forms include client-side validation, an accessible error summary, a honeypot field
for bots, and a success state. The application form deep-links: the "Apply for This Role"
buttons on the careers pages pass `?position=…` and the form pre-selects it, revealing
CDL and endorsement fields for driving roles.

## Logo

`public/logo.svg` is a **placeholder** approximating the real gold badge — it is not the
actual artwork.

**To install the real logo, save it as `public/logo.png`. That is the whole step** — no
code change. [`Logo`](src/components/Logo.tsx) requests `company.logo` (`/logo.png`) and
silently falls back to the placeholder only while that file is missing, so the header and
footer pick the real badge up as soon as it lands.

### Icons

The artwork has a solid white background and no alpha, which shows as a white square in
the browser tab. `public/favicon.png` and `public/apple-touch-icon.png` are generated
from it with a transparent circular mask:

```bash
python3 scripts/make-icons.py
```

Re-run that after replacing `public/logo.png`. The header and footer mask the same way in
CSS (`.brand__mark`), so no separate asset is needed there.

## Design system

Design tokens (colors, type scale, spacing, radii, shadows) live in
[`src/styles/tokens.css`](src/styles/tokens.css). The palette is black, red, and white
with the logo's gold as a restrained accent. Layout primitives are in `base.css` and
component styles in `components.css`. Everything is fluid and mobile-first; the site is
verified free of horizontal overflow from 375px up.

## Deploying

`npm run build` outputs a static `dist/`. Because this is a client-routed SPA, the host
must rewrite unknown paths to `index.html`:

- **Netlify** — `public/_redirects` is already in place.
- **Vercel / Cloudflare Pages** — detected automatically for Vite SPAs.
- **Nginx / Apache** — add a `try_files $uri /index.html` style fallback.

`public/robots.txt` and `public/sitemap.xml` are included and point at the production
domain.
