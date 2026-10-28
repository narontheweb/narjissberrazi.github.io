# V7 validation

Validated on 28 October 2026 against the static production build using Chromium. V7 modifies the existing V6 implementation. Production remains subject to owner review and approval.

## Passed

- Clean Astro + TypeScript diagnostics: 14 files, zero errors, warnings or hints. Production build generates one static page. Client interaction code is approximately 4.9 kB before compression, 1.9 kB gzip. No dependency, backend or runtime service was added.
- Responsive widths: 320, 375, 430, 768, 1024, 1440 and 1920px at normal browser zoom. No horizontal overflow, browser exceptions, missing images or failed HTTP assets. The four navigation links remain visible and vertically aligned on phones.
- Hero paragraph matches the shorter V7 text. Positioning, headline, six V6 expertise areas, proof strip and portrait assets/sizing are retained. Expertise remains 3 × 2 on desktop.
- Main/project descriptions remain 16px; focus metadata and sector labels remain 13px. No body-text increase or reduction. Neutral backgrounds and dark navy contact footer are retained.
- Navigation is Home, Work, Credentials and external LinkedIn. Home covers hero/expertise; Work covers flagship/broader experience; Credentials covers the consolidated information section. Exactly one current-section link, native anchors, header clearance and scrollspy pass at 1440px and 375px.
- Exactly one Download CV link exists, in the hero. None appears in navigation or footer. The download returns HTTP 200, PDF Content-Type/signature and the filename `Narjiss_Berrazi_CV.pdf`. Downloaded bytes match the direct Word export exactly.
- The supplied `Narjiss_Berrazi_CV.docx` was exported with LibreOffice's PDF filter without editing the Word source or post-processing/reconstructing the PDF. Complete extracted text matches the Word text after whitespace normalisation; both supplied hyperlinks match. One US Letter page matches the Word page size. Visual inspection found no clipping or spillover. Source/export SHA-256 checksums and font-substitution details are recorded in `CONTENT-GUIDE.md`.
- The old PDF is replaced in place. The V7 public/build CV folder contains only the new PDF; no old CV, raw Word file or internal document is published. Previous immutable deployments and production are outside this preview replacement.
- Exactly three flagship cases start collapsed and retain single-open behavior. Keyboard Enter, touch controls, labelled regions, aria-expanded/controls, focus retention and exclusion of closed regions from assistive/keyboard access pass across the seven widths.
- Animated case switches retained the activated control within 0.5px on desktop and phone. Rapid toggles, live reduced-motion changes and intentional wheel scrolling pass. Accordion logic and animation durations are preserved from V6.
- Every flagship case retains its seven ownership-led contribution bullets with bold leads. Context, challenge, summaries, all evidence/qualifications, deliverables and future-image definitions are unchanged. Evidence appears once per case. The bank's financial estimate remains qualified as relating only to the 40 prioritised issues.
- Project pills are replaced by borderless “Focus areas — X · Y · Z” text. Each project has at most five focus areas; one redundant CSRD focus label was removed. Computed styles confirm no metadata borders/background fill.
- Broader Data & Analytics Experience retains its approved heading, supporting introduction, three engagement titles/labels and relevant sectors. Concise descriptions are visible directly as articles. No details/summary elements, plus icons, expansion controls or hidden supporting panels remain.
- How I Work and About are removed from page and profile data. No focus block, sector filter, empty deliverable visual, extra personality block or standalone Technical Fluency section renders.
- The final section is Education, Skills & Credentials, with four subgroups in order: Education, Technical Skills, Certifications, Languages. All three education entries, including the bridging programme, are present. All nine website certifications remain. Fluent Dutch/English/French/Arabic and basic German remain; Spanish is absent. Website credentials are not merged into the independently supplied CV.
- Technical Skills are a simple borderless text block with all four approved levels and skills. Computed styles confirm no internal divider lines. Certifications are a compact unboxed list.
- Automated axe WCAG 2 A/AA and WCAG 2.1 A/AA checks found no violations at 1440px and 375px with a flagship case expanded. Automated checks are not a full accessibility certification.
- Visual review used actual desktop/phone viewport captures, including hero, work, broader experience and credentials. Collapsed page height is 5614px at 1440px width versus V6's 5675px, and 9423px at 375px width versus V6's 9854px. The page remains shorter despite making all supporting descriptions visible and adding the approved bridging qualification.
- Print output retains flagship narratives, static broader experience and consolidated credentials; removed sections are absent. Website print output is separate from the one-page downloadable CV.
- Confidentiality audit covered 39 source/build/asset files, including PDF text/metadata. No known client identities or internal contacts matched. Approved generic labels, public CV contact details and the approved employer/auditor references remain.
- Noindex meta, disallow-all robots.txt and Vercel X-Robots-Tag configuration are retained. No analytics, model calls or tracking were introduced.

## Scope and deployment limits

Existing case expansion, evidence rendering, portrait, visual-preview component and real-file-only image handling were preserved. No client visuals or fake deliverables were added. Browser checks used local services and temporary external QA scripts, not a new committed test framework. No Lighthouse benchmark or timed recruiter study is claimed.

V7 is on review branch `v7-portfolio`. Do not merge into production `main` before owner approval. GitHub/Vercel metadata and external website access are blocked by this cloud network's 403 policy. A successful branch push triggers the connected Vercel workflow but does not establish a successful deployment or reachable preview. Open the project's Deployments list, select `v7-portfolio`, and use **Visit** to review the actual preview URL.
