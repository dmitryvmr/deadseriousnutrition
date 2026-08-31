# DeadSeriousNutrition.com — Temporary Storefront

Static "coming soon" placeholder site for DeadSeriousNutrition.com, standing in until the
real store is built. Plain HTML/CSS/JS — no framework, no build step, no backend.

## Structure

- `index.html`, `shop.html` — home and catalog preview
- `product-whey-protein.html`, `product-multivitamin.html`, `product-creatine.html` — the 3 placeholder product detail pages
- `about.html`, `faq.html`, `contact.html` — content pages
- `shipping-returns.html`, `privacy-policy.html`, `terms-of-service.html` — placeholder policy pages
- `404.html`
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

## Local preview

```bash
python3 -m http.server 8000
```

## Deployment

Hosted on GitHub Pages, custom domain `deadseriousnutrition.com`. See [[dsn-hosting-setup]] memory
for account/DNS specifics not recorded in this repo.
