# V2 validation

Validated on 12 October 2026 against the static production build using Chromium. V2 keeps one generated homepage, the existing hero, portrait, expertise and visual tokens.

## Passed

- Astro + TypeScript: 15 checked files, zero errors/warnings/hints.
- Production build: one static page. Client interactions use approximately 10.4 kB JavaScript before compression (3.5 kB gzip), with no API or backend.
- Seven deterministic model tests: all eight approved recommendations/paths, weighting, high-impact and data-readiness overrides, controlled-pilot exception, low feasibility and invalid data handling.
- Browser checks at 320, 375, 430, 768, 1024, 1440 and 1920px: no horizontal document overflow, missing assets or client exceptions.
- Three client cases expand inline. Keyboard Enter opens a case without losing button focus. Small screens keep one case open; desktop supports multiple.
- Studio default: Employee Knowledge Assistant. All eight selections update the decision and 90-day action. Desktop matrix and mobile ranked-list fallback tested.
- Function/governance/recommendation filters, combined empty-result state and reset tested. Counts remain labelled as the full portfolio.
- Sector mappings: Corporates 3; Public Sector 2; Banking 1; Financial Market Infrastructure 1; Postal & Logistics 1; Higher Education 1; Professional Services 2. Desktop de-emphasis, phone hiding and reset work. Financial Market Infrastructure leads to its Current Focus item.
- Open/close Studio focus behavior and case/sector reset tested. Reduced motion computes `scroll-behavior: auto`.
- Automated axe WCAG 2 A/AA and WCAG 2.1 A/AA: no violations with cases, Studio, score explanation and methodology open at desktop and phone widths. Automated results are not a complete accessibility certification.
- Approved CV: one A4 page; navigation, hero and footer each point to the PDF. HTTP 200, PDF Content-Type and file signature verified. A production build fails if the required asset is missing.
- Print: A4 PDF generated with case narratives, supporting experience, Current Focus, credentials and selected Studio initiative.
- Public source/configuration, filenames, comments, generated HTML/JavaScript and PDF content/metadata audited for known client identities and internal contact details.
- Search privacy: robots meta, disallow-all robots.txt and Vercel X-Robots-Tag configuration retained. Noindex reduces indexing and does not make a URL private.

## Decision interpretation

The specified scenarios use explicit readiness/impact flags in addition to numerical thresholds. Predictive maintenance stays Explore despite its score until readiness/adoption questions are resolved. Customer service uses a transparent controlled internal-pilot exception at 3.7. Recruitment screening is deferred for unresolved employment decision risks. These are fictional decision-support scenarios, not live AI outputs.

## Release scope and limits

V2 is prepared on a separate review branch. Production `main` must remain unchanged until the owner approves the preview. Analytics remains uninstalled. No site redesign, client identities, separate routes, live model or external service were added. V2 performance has not been Lighthouse-benchmarked; V1 scores must not be presented as V2 measurements. Deployment and preview reachability must be confirmed separately from the local build.
