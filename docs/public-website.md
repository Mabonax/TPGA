# TonicPunkGraphics public website

Implemented locally in the existing Laravel 13.39 / Inertia 3 / React 19 application. No dashboard, authentication provider, account provisioning, database schema or deployment changes were made.

## Preview

Run `npm run build`, then `php artisan serve --host=127.0.0.1 --port=8015` and visit `http://127.0.0.1:8015/`. The production build serves the downloaded fonts locally. For development, use the existing `npm run dev` workflow alongside Laravel.

## Public pages

| Route | Experience |
| --- | --- |
| `/` | Reception banner, home hero, studio introduction, selected projects, customer voices and footer |
| `/studio` | Studio introduction, capabilities links and reference statistics |
| `/capabilities` | Four creative disciplines and project links |
| `/about` | Reference composition with expandable agency, story and mission panels |
| `/services` | Fifteen expandable service cards with project-enquiry links |
| `/packages` | Four service starting points with quote enquiries |
| `/team` | Team browser with previous/next controls |
| `/team/{slug}` | Public member introduction using supplied portraits |
| `/portfolio` | Category filtering, alphabetical sorting and project cards |
| `/portfolio/{slug}` | Project detail and related work |
| `/insights` | Reference story layout with three distinct studio articles, filters and an empty state |
| `/insights/{slug}` | Original studio notes on branding, packaging and planning a website |
| `/sitemap.xml` | Public pages, case studies and articles; excludes account pages |
| `/testimonials` | Customer-voices layout and supplied testimonial |
| `/contact` | Contact details and enquiry form |
| `/start-a-project` | Project brief form with service, budget and timeline controls |
| `/login`, `/register`, `/forgot-password` | Branded existing Fortify forms; recovery/verification/challenge screens share the branded auth layout |

The expanded navigation uses the existing Radix-based Sheet for modal focus management, Escape dismissal and focus return. Site search finds public pages. Footer and enquiry calls to action navigate to real routes, email or telephone links.

## Assets and reference fidelity

Source: `J:\2026\punk\TPGA Website\TPGA Website`.

`scripts/import-tpga-assets.ps1` copies selected original assets into `public/assets/tpga`. `docs/asset-manifest.json` records their source paths and SHA-256 hashes. The source folder is unchanged. The site runs without the J: drive after import.

The supplied flattened page compositions are visual references, not page-sized interactive images. Photos, emblems, logos, icons and portraits have separate clean source files. Buttons, labels, forms, service cards and navigation were rebuilt as live HTML rather than displaying baked controls. CSS controls image crops without modifying originals. The BaNi Foods website image is intentionally shown as portfolio artwork, rather than as interactive site navigation.

Desktop references are generally 1512 × 982. The header and home reception/hero boundaries follow those dimensions: header 102px; reception 279px; hero starts at y=381px. The actual home capture uses that same viewport and DPR 1. Poppins and Roboto Condensed approximate the supplied designs because no source font files or editable typography specifications were provided. Mobile layouts adapt the supplied desktop compositions; no approved mobile reference was present.

Remaining visual differences include font rendering, selected photo crops, geometric linework, icon shapes and functional-form spacing. Pixel-perfect parity is not claimed. An equal-size, zero-tolerance comparison of the home screenshot found mean absolute channel error 11.69/255 and 98.25% changed pixels; it did not pass exact equality. JPEG compression and font rendering contribute, and the result is a diagnostic rather than visual approval. Do not treat this as an approved baseline.

## Deliberate scope boundaries

- Existing password, passkey, registration, reset, verification and two-factor transport remain in place. The Google button pictured in the reference is not rendered because this project has no Google provider configured. No placeholder provider flow or first-user-admin promotion was introduced.
- Contact/project forms validate in the browser and prepare an email draft addressed to the studio email shown in the supplied footer. They clearly say that the user must review and send the draft from their email app. This website does not persist or send enquiries. Briefs can be attached in that email app.
- Newsletter delivery/subscriptions, enquiry storage, uploads, editorial publishing and dashboard management remain future backend work. The footer links to current stories instead of falsely confirming subscriptions.
- Packages use quote requests rather than asserting final commercial prices. The four package descriptions are presentation copy for review.
- Statistics, featured clients, member names/roles and the displayed testimonial are drawn from supplied designs/assets. They have not been independently verified as current business claims. Where biography/article copy was absent, concise introductory copy was supplied without inventing qualifications, dates, project results or personal histories.
- No production publication was performed. Full-resolution source assets are retained unchanged. The frontend now serves responsive WebP delivery variants rather than those originals.

## Verification

- `npm run types:check`: passed.
- `npx vp check` on all changed TypeScript, CSS and Vite files: no lint warnings or errors; formatted.
- `npm run build`: passed. The optional fontaine fallback package is absent, and Vite leaves public asset URLs for runtime resolution; the browser sweep verified those assets load.
- `php artisan test --compact`: 40 passed, 138 assertions. Run tests with a task-specific `VIEW_COMPILED_PATH` if simultaneously browsing on Windows, to avoid a Blade compiled-view rename lock. The first overlapping run encountered that lock; the isolated rerun passed.
- Chrome/Playwright CLI session `tpga-ui`: 18 routes at 1512, 768, 390 and 320px (72 route/viewport checks), all HTTP 200, one h1 per page, no broken images, no page errors and no HTTP asset errors. `docs/qa-initial.json` records the initial observations, including overflow subsequently fixed.
- A focused 24-case recheck of home, studio, packages, testimonials, team and project enquiry confirmed document width equals viewport width at all four sizes. See `docs/qa-recheck.json`.
- Unknown member/project slugs return HTTP 404.
- Eighteen browser interaction checks passed: desktop dropdown navigation; about-panel expansion/collapse; service expansion and enquiry context; required-field blocking; portfolio filtering/sorting; team next/previous; mobile dialog opening, focus containment, Escape and focus return; search results/empty state/Escape; password visibility; and the actual Fortify invalid-credentials response. Only a reserved `.invalid` email was submitted; no account was created and no message was sent.
- Screenshots and task-owned browser scripts are under `storage/app/qa/` and are not application source. Capture files use route names and viewport widths, for example `home-1512.png`, `about-390.png`, `team-1512.png`, and `start-a-project-390.png`.

Browser checks use the actual local Laravel application and built frontend. They do not establish production deployment, Google authentication, real enquiry delivery or independently verified marketing claims.

## Frontend finishing pass — 1 November 2026

The approved layout remains in place. This pass adds:

- Responsive WebP variants and intrinsic image dimensions, native lazy loading, eager priority for the home reception image, and explicit image sizes for logo, team and portfolio contexts. Default delivery variants for 33 images total 1,952,126 bytes versus 53,962,117 bytes for their originals (96.38% smaller). This compares the image collection, not a measured page-load time or total site transfer. All 33 original hashes were rechecked without a mismatch. See `docs/image-optimization.json`.
- A reproducible image-delivery script at `scripts/optimize-public-images.py`. Run it with a Python installation containing Pillow after importing new assets, then build the frontend. It processes selected raster artwork and only the client logos actually used by the website; an unused extremely high-resolution client artwork file is deliberately excluded.
- Initial HTML descriptions, canonical links, Open Graph and Twitter sharing metadata, with the same metadata kept current during Inertia navigation. The branded 1200 × 630 sharing image is `public/assets/tpga/social-preview.jpg`; its code-based artwork source is `resources/brand/social-preview.html`. Private account pages are marked noindex, and password-reset tokens are excluded from sharing and canonical URLs.
- Three substantive, original studio articles. Their text and metadata are edited in `config/public-site.php`. They do not claim project results, publication dates or personal credentials. Previous `/insights/bani-*` links permanently redirect to the corresponding case study.
- Distinct design-focus notes, scope lists and supplied-artwork galleries for each portfolio detail page, edited in `resources/js/lib/project-details.ts`.
- Keyboard access and pressed state for password visibility controls, normal document tab order, linked field errors and alert/status semantics, focus return when closing search, and stale-field clearing when switching enquiry modes. Gold/teal text on white and category labels were darkened for contrast; the supplied background palette remains.
- Branded 403, 404, 419, 429, 500 and 503 views with native links that work without the React bundle. HTTP status codes and JSON exception handling remain intact. The production 500 template is tested with debug disabled in the test process; the local environment was not changed.
- A sitemap without invented modification dates or account URLs.

The current automated suite passes 55 tests / 223 assertions. TypeScript, frontend lint/format, production build, Pint and PHPStan pass. Browser sweeps covered 21 routes at 1512, 768, 390 and 320 CSS pixels in Chrome, Edge and Firefox: 252 checks, with no document overflow, broken images, duplicate descriptions/canonicals, missing headings or page exceptions. Firefox reported no warnings. Chrome and Edge logged Windows network-buffer warnings during the simultaneous sweep; these are retained in `docs/frontend-browser-checks.json` rather than hidden. The earlier image-srcset warning caused by spaces in filenames was fixed by encoding candidate URLs.

The original desktop references and initial QA records remain unchanged. Current screenshots are under `storage/app/qa/finish-*`. Matching the original artwork exactly is still limited by font specifications and normal browser/compression differences. Safari and physical phones have not been verified. Team biographies, confirmed commercial pricing, business claims and legal copy still need the owner's factual input; this pass does not invent them. Google sign-in, real enquiry delivery, uploads, subscriptions and content administration remain deferred integrations.

Final follow-up: the existing 18 interaction checks and 18 additional finishing checks pass on the final build. These cover keyboard password visibility, error associations, search focus return, article empty-state recovery, SPA metadata updates, case-study galleries and enquiry context clearing. The sampled gold-on-white heading contrast is 4.62:1. Text-spacing overrides preserved page width on four key flows; this is a scoped check rather than a full accessibility certification. A further nine case-study/article viewport checks passed at 1512, 390 and 320px. Fresh sequential Chrome and Edge checks showed no failed requests or page exceptions; Chrome's final console contained zero errors or warnings. This separates the earlier simultaneous-run network-buffer warnings from the final verification without deleting their record.
