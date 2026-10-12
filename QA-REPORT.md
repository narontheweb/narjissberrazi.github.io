# Homepage foundation validation

Validated on 12 October 2026 against the production build using Chromium.

- Lockfile installation with `npm ci`: passed. Asset preparation is repeatable.
- Astro + TypeScript check: 9 files, zero errors, warnings or hints.
- Static production build: passed; one homepage generated.
- Responsive widths: 320, 375, 430, 768, 1024, 1440 and 1920px; no horizontal document overflow, missing images or broken homepage anchors.
- Desktop and phone screenshots visually reviewed for hierarchy, editorial crop and spacing.
- Automated axe WCAG 2 A/AA and WCAG 2.1 A/AA checks: no violations. This is automated coverage, not a complete accessibility certification.
- Native experience disclosures open using keyboard Enter.
- No browser exceptions or HTTP asset failures observed.
- Reduced motion: computed scroll behaviour becomes `auto`.
- Print: A4 PDF generated; identity, case narratives and additional experience text retained, navigation and contact controls hidden.
- Privacy: robots meta, disallow-all robots.txt and Vercel response-header configuration verified. The response header is configured for Vercel but has not been tested on a deployed Vercel URL.
- CV fallback: missing PDF produces “CV forthcoming” with no broken download link.
- Banking metric qualification is retained in the generated homepage.
- Confidentiality: source, filenames, configuration and generated text scanned against known source-CV client names and internal contact patterns; no matches. Source documents and extracted text remain outside the repository.
- Production homepage has no client-side script payload. There is no simulated AI interaction in this first phase.

Lighthouse mobile, local production preview: performance 100, accessibility 100, best practices 100, SEO 66. SEO is intentionally affected by the required `noindex` policy. Scores vary with hardware and network conditions and do not predict a deployed run. One additional visible-label audit on the brand link was corrected after the first run; a final Lighthouse accessibility run scored 100 with no label mismatch.

## Remaining scope

The approved public one-page CV PDF is missing. Work and About are homepage sections for this first phase; dedicated pages, detailed cases, the Decision Studio, the DQ Hub and analytics remain future phases. No website deployment or environment publication was performed.
