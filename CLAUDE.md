# DeadSeriousNutrition.com — Temporary Storefront

Static "coming soon" placeholder site for DeadSeriousNutrition.com, standing in until the
real store is built. Plain HTML/CSS/JS — no framework, no build step, no backend.

## Structure

- `index.html`, `shop.html` — home and catalog preview
- `product-whey-protein.html`, `product-multivitamin.html`, `product-creatine.html` — the 3 placeholder product detail pages
- `about.html`, `faq.html`, `contact.html` — content pages
- `shipping-returns.html`, `privacy-policy.html`, `terms-of-service.html` — placeholder policy pages
- `404.html`
- `sitemap.xml` — lists all public pages for search engines; update it when adding/removing pages
- `robots.txt` — allows all crawlers, points to `sitemap.xml`
- `assets/css/style.css` — all styling (single shared stylesheet, bold dark gym/supplement theme)
- `assets/js/main.js` — mobile nav toggle, newsletter form and contact form handlers (client-side only, no backend — they just show a confirmation message)
- `CNAME` — required by GitHub Pages for the custom domain; contains `deadseriousnutrition.com`

Pages were generated from a one-off Python script (not checked into the repo) that templated a
shared header/footer across all pages for consistency. There's no build step to re-run it —
edit the `.html` files directly for any future changes.

## Conventions

- Cart/checkout is intentionally disabled everywhere ("Ordering Opens At Launch") since the real store isn't live.
- Contact email shown throughout: `hello@deadseriousnutrition.com`.
- Keep header/nav/footer markup consistent across pages if hand-editing one — there's no shared include mechanism, so changes to nav/footer need to be applied per-file.
- Every page's `<head>` carries a `<link rel="canonical">` (absolute `https://deadseriousnutrition.com/...` URL) plus matching Open Graph/Twitter meta tags derived from that page's `<title>`/description — keep all three in sync when editing a page's title or description. `404.html` additionally carries `<meta name="robots" content="noindex, follow">` and has no canonical tag.

## Local preview

```bash
python3 -m http.server 8000
```

## Deployment

Hosted on GitHub Pages, custom domain `deadseriousnutrition.com`. See [[dsn-hosting-setup]] memory
for account/DNS specifics not recorded in this repo.
