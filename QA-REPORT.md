# V5 validation

Validated on 27 October 2026 against the static production build using Chromium. V5 modifies the existing V4 implementation; it retains the one-page structure, portrait asset, validated projects and approved focus content.

## Passed

- Astro + TypeScript: 14 files checked, zero errors/warnings/hints. Static production build generates one page with no new runtime service or dependency.
- Seven responsive widths: 320, 375, 430, 768, 1024, 1440 and 1920px. No horizontal overflow, missing public images, browser exceptions or HTTP asset errors.
- Hero: approved Data & AI headline, one charcoal text colour, no caption or loose descriptor. Desktop portrait measured against V4 CSS: 18.0% smaller at 1024px and 1440px, 17.9% smaller at 1920px. Portrait source files are unchanged.
- Six capability areas: 3 × 2 at desktop widths, one column on tablet/phone. No engineering claims added to organisational AI capability-building.
- Sector controls/status/reset logic removed; sector labels remain on projects and relevant experience/focus entries.
- Every flagship, broader-experience and focus Markdown file remains byte-for-byte identical to V4. Proof points, education, certifications and first five expertise entries are unchanged. Evidence text is preserved with blue numeric emphasis, once per case.
- All three inline cases work by keyboard/touch with aria-expanded/controls and retained focus. Cases open independently on all screen sizes, avoiding automatic collapse of content above the reader. Expansion preserves measured scroll position; normal-motion open/close and rapid toggles pass.
- How I Work follows project/broader evidence, contains only the personal working-style paragraph and remains beside Upcoming Focus on desktop. Technical fluency has four explicit textual levels with the approved items and no meters/charts.
- Scrollspy: exactly one active navigation link. Home covers hero/expertise, Work covers projects/broader experience, About covers How I Work/credentials. Native anchors and sticky-header offsets work; touch About navigation checked.
- Motion: one-time reveal effects use 220ms opacity/10px translation; case transitions use 240ms. No hidden initial reveal CSS. Live change to reduced motion finishes active transitions and prevents new reveal motion. Reveal targets remain visible with JavaScript disabled; interactive controls require JavaScript.
- Automated axe WCAG 2 A/AA and WCAG 2.1 A/AA checks: zero violations at 1440px and 375px. Automated checks are not a complete accessibility certification.
- Future-image preview tested using a clearly labelled temporary neutral fixture on desktop and phone. Native dialog, accessible title/alt, automatic close-button focus, Escape, close control, focus return, overflow and accessibility passed. Fixture and temporary content changes were removed; actual client miniatures remain uncreated and placeholders remain non-clickable.
- CV: all three controls download the same PDF with HTTP 200, correct Content-Type and PDF signature. It remains one A4 page. Text differs only by the required language-row removal; a 2× raster comparison found all changed pixels confined to that row. Other CV wording/layout is unchanged.
- Public language entries are fluent Dutch, English, French and Arabic plus basic-understanding German. The obsolete entry is absent from current site and PDF text.
- Print PDF checked for new headline, sixth capability, regulatory evidence, technical fluency, language display, Upcoming Focus and credentials. Print reveals case narratives without duplicate Evidence sections.
- Confidentiality audit across source, generated output, filenames, assets and PDF content/metadata found no known client identities or internal contacts. Approved generic labels and external-auditor reference retained.
- Noindex meta, robots.txt and Vercel response-header configuration retained.

## Scope and limits

V5 adds no real client visuals, synthetic project, live AI model, analytics or paid infrastructure. Larger-image behavior is ready for a later approved visual-content iteration.

V5 has not been Lighthouse-benchmarked; previous scores are not V5 measurements. Browser/logic checks were exercised against local services and temporary fixtures, not claimed as an added repository unit-test suite.

V5 is on review branch `v5-portfolio`. Production `main` must remain unchanged until owner review/approval. Branch push, Vercel build success and external preview verification are distinct checks; report network metadata restrictions honestly rather than infer deployment readiness.
