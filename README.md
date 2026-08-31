# DeadSeriousNutrition.com — Temporary Site

A lightweight, static "coming soon" storefront for **DeadSeriousNutrition.com**, standing in
until the full store is built. It mimics common Shopify page types (home, shop, product,
about, FAQ, contact, policies) with a bold dark gym/supplement theme.

No build tools, frameworks, or backend — plain HTML/CSS/JS, deployable as-is via GitHub Pages.

## Pages

- `index.html` — Home / hero / catalog preview / email signup
- `shop.html` — All-products catalog preview
- `product-whey-protein.html`, `product-multivitamin.html`, `product-creatine.html` — Product detail pages
- `about.html` — Brand story
- `faq.html` — FAQ accordion
- `contact.html` — Contact form (client-side only, no backend)
- `shipping-returns.html`, `privacy-policy.html`, `terms-of-service.html` — Placeholder policy pages
- `404.html` — Not-found page

Cart/checkout is intentionally disabled everywhere ("Ordering Opens At Launch") since the real
store isn't live yet.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo settings → **Pages**, set source to the `main` branch, root folder.
3. Point your `deadseriousnutrition.com` DNS (CNAME/A records) at GitHub Pages, and add a
   `CNAME` file with your domain if using a custom domain.

## Replacing this later

When the real store is ready, swap this out entirely — none of this content is meant to be
permanent. Placeholder product data, pricing, and policies live in
`assets/css/style.css` and the individual `.html` files and can be edited directly (there's
no CMS or build step).
