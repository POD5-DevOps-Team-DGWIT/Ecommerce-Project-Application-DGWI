# UI Customized: Cohort 6 -POD 5 - DigitalWitch Shop (Frontend)

Date: 2026-11-18
Scope: `src/frontend/` only. No backend, Kubernetes, or CI changes.

## Goals
- Make the storefront look consistent with the DigitalWitch brand (navy, blue, gold).
- Make it work properly on phones, tablets and desktops.
- Add a place to put Pod5 details.
- Add a way to preview the UI locally without the full backend.

## Summary of changes

| Area | What changed |
|---|---|
| Theme | New colour tokens (`blueDark`, `goldText`, `goldSoft`, `surface`, `border`), plus `radii`, `shadows`, `layout.maxWidth`. `textLightGray` is darker and `otelRed` slightly deeper, for readability. |
| Global CSS | Removed the `body * { color; font-weight: 600 }` rule that forced one colour and weight on every element. Added link/button/input inheritance, focus ring, smooth scroll. |
| Buttons | Brand blue instead of the leftover purple (`#5262a8`); hover, active and disabled states. |
| Header | Sticky white bar with soft shadow, content capped at 1280px, smaller logo on phones (it overflowed before), removed stray `#853b5c` colour. |
| Currency picker / cart icon | Restyled; larger, readable cart badge. |
| Cart dropdown | Repositioned for the sticky header (`height: auto` on desktop is required), rounded card, clickable "Close". |
| Hero banner | Headline text now comes first, then the photo. The photo is cropped with CSS so the words baked into the image no longer repeat the headline. Optional Pod badge. |
| Home page | "Hot Products" is now an `h2` (the page had two `h1`s) with a gold underline; offset for the sticky header. |
| Product grid and cards | Responsive grid (1–4 columns), white cards with borders, hover lift, 2-line names so prices line up. |
| Product page | Two-column layout with image card, larger name and price, wider Add to Cart button. |
| Recommendations | Responsive grid, cleaner title. |
| Select (quantity) | New border, radius, hover and chevron position. |
| Ad strip | Navy text on light gold instead of white on gold (poor contrast). |
| Footer | Gold top line, responsive padding, links styled, optional "Built by" line. |
| Platform flag | Big gold block replaced by a small "local" pill. |

## Files changed

Edited (all under `src/frontend/`):
- `styles/Theme.ts`
- `styles/style.d.ts`
- `styles/globals.css`
- `styles/Home.styled.ts`
- `styles/ProductDetail.styled.ts`
- `components/Button/Button.tsx`
- `components/Header/Header.styled.ts`
- `components/CurrencySwitcher/CurrencySwitcher.styled.ts`
- `components/CartIcon/CartIcon.styled.ts`
- `components/CartDropdown/CartDropdown.styled.ts`
- `components/Banner/Banner.tsx`
- `components/Banner/Banner.styled.ts`
- `components/ProductList/ProductList.styled.ts`
- `components/ProductCard/ProductCard.tsx`
- `components/ProductCard/ProductCard.styled.ts`
- `components/Recommendations/Recommendations.styled.ts`
- `components/Select/Select.styled.ts`
- `components/Ad/Ad.styled.ts`
- `components/Footer/Footer.tsx`
- `components/Footer/Footer.styled.ts`
- `components/PlatformFlag/PlatformFlag.styled.ts`
- `next.config.js` (added the dev-only `rewrites()` block)

New:
- `components/Layout/siteConfig.ts` – Pod details (see below)
- `pages/api-mock/[...path].ts` – fake backend for local preview only

## Pod5 details

Edit `components/Layout/siteConfig.ts`:

```ts
export const siteConfig = {
  podName: 'Pod 5',
};
```

When `podName` is not empty, a badge appears above the hero title and a "Built by …" line appears in the footer. When it is `''`, both are hidden.

This file lives in `components/` on purpose. The frontend Dockerfile only copies certain folders, so a file in `utils/` would break the CI image build.

## Preview the UI locally (no Kubernetes needed)

From `src/frontend` in PowerShell:

```powershell
$env:CYPRESS_INSTALL_BINARY=0
npm install
Copy-Item ..\image-provider\static public\images
Set-Content .env.local "UI_MOCK=true"
npx next dev
```

Open http://localhost:3000.

- Use `npx next dev`, not `npm run dev` (that script's `NODE_OPTIONS='...'` syntax fails on Windows).
- Requires Node 20.9 or newer.
- `UI_MOCK=true` sends `/api/*` calls to `pages/api-mock/[...path].ts`, which returns sample products, a working in-memory cart, and fake currency rates.
- The mock returns 404 unless `UI_MOCK=true`, so it is harmless if deployed.
- Add `src/frontend/.env.local` and `src/frontend/public/images/` to `.gitignore`.
- Phone sizes: Chrome DevTools device toolbar (`Ctrl+Shift+M`), or `npx next dev -H 0.0.0.0` and open `http://<PC-IP>:3000` on a phone on the same Wi-Fi.
- Red console errors about OpenTelemetry and `flagservice` are expected locally.

## Design decisions to know about
- The hero photo is cropped with CSS (`Banner.styled.ts`). The source image is 1175px wide, so it can look slightly soft on large screens.
- Content width is capped at 1280px and centred.
- The header is sticky, which is why the cart dropdown CSS changed.
- On mobile, the headline and button come before the photo.

## Testing status
- Syntax and type checks were run on the new and edited files where possible.
- The new CSS was rendered in a headless browser at 390px, 800px and 1440px with no horizontal scrolling.
- Not yet verified: a full `next build`, the cart dropdown, the cart page, checkout and 404/500 pages.
- After applying the changes, run `npx tsc --noEmit` once.

## Not done yet
- Cart page, checkout form, order-complete page, 404 and 500 pages. These will look slightly lighter in font weight until they are restyled, because the global `body *` rule was removed.
- Remaining Pod5 details (team members and roles, project description).
- Product names and descriptions come from the `product-catalog` service, not the frontend.