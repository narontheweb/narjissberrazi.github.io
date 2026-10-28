# V9 validation

Validated on 28 October 2026 against the local static production build using Chromium. Baseline: V8 review source `70dac8c5880867726a81b1dd252f4ca72b8dfd4b`. The production branch remains unchanged and requires owner approval.

## Passed

- Astro + TypeScript diagnostics: 14 files, zero diagnostic errors, warnings or hints. Static build generates one page. Interaction JS remains byte-identical to V8 (approximately 4.9 kB, 1.9 kB gzip); no dependency or runtime service was added.
- Responsive widths: 320, 375, 430, 768, 1024, 1440 and 1920px. No overflow, clipping, browser exceptions, failed assets or missing images. The five navigation links remain visible; compact phones use two navigation rows without splitting link labels.
- Hero headline is unchanged. Introduction follows the V9 candidate wording. Portrait assets, dimensions, crop, typography scale and neutral palette are preserved; no caption or new hero content block is added. View selected work has no decorative icon.
- The quiet strip contains exactly four domains: Data & AI Transformation, Governance & Strategy, Change & Adoption, Business & Technology. Old metric/proof labels are absent. Six substantive capability descriptions are unchanged, with the V9 heading/introduction and the existing 3 × 2 desktop grid.
- Main/project body text remains 16px, focus/sector metadata 13px. All twelve evidence labels now share 16px type and the same hierarchy. Numeric prefixes no longer receive a different size; evidence notes remain 15px desktop/16px phone. Existing section rhythm and grid layouts are preserved.
- Three cases remain in CSRD/banking/AI order, collapsed by default, with one open at a time. Five/six/six contribution bullets, compact deliverables, borderless focus metadata and one evidence list per case remain.
- CSRD distinguishes the 11-person team led in Belgium from the international reporting scope of 31 entities/30+ countries and 100+ stakeholders. Its report outcome is external limited assurance, without a claim of no findings. The ~200-page report and co-built reporting application remain in expanded detail, with client IT credited.
- Banking evidence names 40 of ~300 DQ issues, ~€11M estimated annualised impact, 8 domains and 90 Data Owners/Stewards/Custodians trained. The short visible financial note says it is a combined estimate for the 40 prioritised issues. Expanded contribution retains the original combined/annualised estimate and simulation from employee time savings/avoided regulatory fines, unchanged. No realised-savings or whole-programme-ownership claim was added.
- The **entire AI case source file is byte-for-byte unchanged** from V8, including summary, organisation context, evidence and training rollout language. SHA-256: `8ee7329c2e1be4f84139a8f5287d4a3ce7e75a8bb53fd20fcd85b990826ee0bc`.
- All three broader-experience files are unchanged, static and directly visible. Education, four certifications, languages, firm contributions, capability descriptions and portrait assets are unchanged.
- Technical Skills uses borderless domain groups with accurate scope: Data & reporting; Analytical programming (R working knowledge, foundational Python); Cloud & platform exposure (Azure/Fabric solution-level understanding). No skill table, meter, rating bars or internal divider lines.
- Selected Work has no confidentiality disclaimer. The sole factual confidentiality line appears in the bottom footer. No published project examples, fabricated assets or claims to such assets exist. Dormant unconfigured image-support code does not render any card or visual section.
- Dark contact band retains the approved heading and one LinkedIn CTA. Bottom footer contains only copyright and the factual confidentiality line; no repeated name/title block, contact links or CV CTA.
- Exactly two CV links exist, in navigation and hero, both using `/cv/Narjiss_Berrazi_CV.pdf`. Each downloads `Narjiss_Berrazi_CV.pdf`. HTTP 200, PDF Content-Type/signature and downloaded bytes pass. Uploaded final V8 PDF, repository asset, static output, navigation download and hero download are byte-identical. Only one public/build CV asset exists.
- Keyboard Enter, touch controls, focus retention, labelled regions, aria-expanded/controls and exclusion of hidden panels from assistive/keyboard access pass. Normal-motion switches held the activated control within 0.5px on desktop/phone. Rapid toggles, live reduced-motion changes and intentional wheel input pass.
- Home/Work/Credentials scrollspy, exactly one current-section link, native anchors and sticky-header clearance pass with the updated header height.
- Axe WCAG 2 A/AA and WCAG 2.1 A/AA checks: zero violations at 1440px and 375px with a case expanded. Automated checks are not a full accessibility certification.
- Print output retains case details, the banking methodology, original AI copy and consolidated credentials. Removed public claims and redundant footer content are absent. Website print output is separate from the one-page CV.
- Confidentiality/stale-public-content audit covered 39 source/build/asset files, including PDF text/metadata. No known client identities or internal contacts matched. Old public proof labels and claims about published example assets are absent. Noindex meta, robots policy and Vercel header configuration remain.
- Actual desktop/mobile review captures are stored in `review/v9/desktop.png` and `review/v9/mobile.png`, outside public build assets. Viewport review also covered hero, work and credentials at 100% zoom. Collapsed height is 5629px at 1440px and 9521px at 375px, shorter than V8.

## Source ambiguities

1. V9 refers to a final Word CV, but no newer Word file is attached. The available V7 Word file predates the supplied final V8 PDF and would roll back validated facts. The final V8 PDF is retained unchanged (SHA-256 `ff314ef79c5e1973b2f7ad571ef2cabef7c59cae3a3eef8f0bd0d03a0fa8c050`). No claim is made that this PDF was verified against a missing newer Word source.
2. V9 mentions an automated readiness application; the final supplied PDF calls it a CSRD reporting application co-built with the client's local IT team. The PDF's current wording/ownership is preserved, without restoring an older sole-builder claim. The Belgian-based team clarification comes explicitly from the V9 brief.

No CV content was reconstructed or rewritten. Original attachments remain unchanged outside the repository. No live recruiter study or Lighthouse benchmark is claimed. QA scripts/services were local and temporary; no new repository test framework was added.

## Preview and release

Review branch: `v9-portfolio`. Do not merge or deploy production before owner approval. GitHub deployment metadata and Vercel pages return a network 403 from this environment, so live deployment/reachability cannot be verified here. A successful branch push triggers the connected Vercel workflow. Use Deployments → v9-portfolio → Visit for the actual preview URL; a standard branch alias, if supplied, must be labelled unverified rather than asserted as a confirmed deployment.
