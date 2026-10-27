# V6 validation

Validated on 27 October 2026 against the static production build using Chromium. V6 refines the existing V5 implementation rather than rebuilding it.

## Passed

- Astro + TypeScript diagnostics: 14 files checked, zero diagnostic errors, warnings or hints. Production build generates one static page. Client interaction code is approximately 4.9 kB before compression, 1.9 kB gzip, with no new dependency or runtime service.
- Responsive widths: 320, 375, 430, 768, 1024, 1440 and 1920px, at normal browser zoom. No horizontal overflow, missing public images, browser exceptions or HTTP asset errors.
- Measured main/project body copy: 16px. Tags and sector labels: 13px. Evidence qualification: 15px desktop/tablet, 16px phone. Headline hierarchy remains unchanged, with the V5 headline/copy and reduced portrait preserved.
- Neutral Core Expertise and How I Work backgrounds replace the pale-blue blocks. Six capability areas retain the 3 × 2 desktop grid and phone/tablet stack, now including implementation/delivery.
- Recruiter-scan review used actual 1440 × 1000 viewport screenshots at 100% zoom, not just scaled full-page images. Identity/KPMG proof is visible in the hero; collapsed cases show ownership, context, scale and outcomes without opening every narrative.
- Exactly three cases, collapsed by default, with one expanded state at a time. Keyboard Enter, touch controls, aria-expanded/controls, labelled regions and focus retention pass. Closing regions are inert/hidden from assistive access during their transition.
- Seven ownership-led contribution bullets per case, with bold leads and ordinary detail. No duplicate Evidence section. The bank summary uses the approved “Led key parts” ownership boundary rather than implying ownership of the entire programme.
- Selected evidence remains visible once per case in a wider readable band. Approved prioritisation/impact/audit outcomes have stronger typography. The bank estimate remains directly qualified as applying only to the 40 prioritised issues.
- Normal-motion switching between cases held the activated control within 0.5px of its reading position on desktop and phone. Rapid toggles and live reduced-motion changes pass. Intentional wheel input interrupts/settles the layout without being overridden. Durations remain the V5 240ms accordion / 220ms reveal values.
- Automated axe WCAG 2 A/AA and WCAG 2.1 A/AA checks: no violations at 1440px and 375px with a case expanded. Automated results are not a full accessibility certification.
- Upcoming Focus is absent from rendered output, with no empty layout column. Stored configuration is retained with status hidden. How I Work uses the available width intentionally.
- Empty visual cards, future-visual captions and headings do not render. A configured missing file also renders no visual section. A temporary neutral real-file fixture verified future-image preview opening, Escape/close controls, focus return, phone overflow and accessibility. Fixtures were removed before release.
- Home/Work/About scrollspy, native anchors and reduced-motion behavior remain functional. External CTA arrows use vector strokes rather than relying on font glyph availability.
- CV is byte-for-byte identical to V5 and remains one A4 page. Navigation/hero/footer downloads return HTTP 200 with PDF Content-Type/signature. Education, certifications, language boundaries, hero proof and broader engagement entries remain unchanged. Technical fluency uses the shorter Solution-level understanding label.
- Print output retains ownership-led narratives, the Broader Data & Analytics Experience heading and technical fluency. No empty visual sections or hidden focus content appears.
- Confidentiality audit across source, generated output, filenames, assets and PDF content/metadata found no known client identities or internal contacts. Approved generic labels and auditor reference are retained.
- Noindex meta, robots.txt and Vercel response-header configuration remain configured.

## Scope and limits

No client visuals, fabricated outcomes, synthetic project, live AI model, analytics or paid infrastructure were added. Context/challenge wording, validated deliverables and stored future visual definitions are preserved from V5. The focus description is retained for a later truthful current-work update.

The recruiter scan was an editorial review, not a timed user study. No V6 Lighthouse benchmark was performed. Browser checks used local services and temporary fixtures; they are not claimed as a committed repository unit-test suite.

An image-preview regression check initially reached an older dev server on the requested port. It was rerun successfully against the newly reported server port. Startup guidance now emphasises checking the actual ready address.

V6 is on review branch `v6-portfolio`. Production `main` must remain unchanged until owner approval. A branch push does not establish successful Vercel deployment or external preview reachability; deployment metadata restrictions must be reported honestly.
