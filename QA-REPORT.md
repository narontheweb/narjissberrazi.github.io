# V4 validation

Validated on 18 October 2026 against the static production build using Chromium. The portfolio remains one page with the established visual identity and untouched portrait, credentials and CV asset.

## Passed

- Astro + TypeScript: 13 files checked with zero errors, warnings or hints. Static build generated one page.
- New primary title/descriptor are used in the hero, footer and metadata. The complete headline remains charcoal; portrait caption contains only the name. Proof wording includes Target Operating Model design & implementation. About includes Data.
- All seven responsive widths (320, 375, 430, 768, 1024, 1440, 1920px) passed overflow, case expansion, keyboard focus, filter and image-loading checks. Five expertise areas stack on phones; cases and future miniatures remain usable.
- Exactly three equal flagship cases, three broader entries and one Upcoming Focus. The earlier cross-sector entry has no false sector tag, is quieter visually and appears under All only.
- Default filters are exactly All, Public Sector, Banking & Financial Services, Postal & Logistics, Higher Education & Research. No empty sectors are displayed.
- Future-content test: adding a sector to the broader-experience fixture automatically created a functioning filter without component changes. Focus current/upcoming states contributed their sector; hidden excluded the block and its otherwise unique sector. All fixtures were restored to the approved upcoming/unclassified content after testing.
- Filters preserve keyboard focus and measured scroll position. Reset restores all entries and focuses All. Public Sector matches three entries; the other three sector filters each match one.
- Each flagship has exactly one evidence list, in its header. Expanded panels contain Context, Challenge, My Contribution, Deliverables and Miniatures, with no second Evidence section or standalone training block.
- Four training topics appear once under the AI Training Programme deliverable. Banking impact qualification appears once, directly linked to the financial metric. Supervisory BCBS 239 / RDARR wording, global ESG-data framing, Kanban contribution and application wording are present.
- Automated axe WCAG 2 A/AA and WCAG 2.1 A/AA: no violations at 1440px and 375px in unfiltered and Public Sector-filtered states. This is automated coverage, not an accessibility certification.
- Reduced-motion mode skips expansion animation and uses automatic scrolling. No browser exceptions or HTTP asset errors observed.
- CV remains byte-for-byte identical to the approved prior PDF. All three download controls point to the same asset; HTTP 200, PDF Content-Type and signature verified. Credentials, languages, education and the five expertise items are unchanged.
- Print PDF generated and checked for positioning, supervisory context, Kanban, training topics, Upcoming Focus and credentials. Evidence is not duplicated by expanded panels.
- Confidentiality audit covered public source/configuration, generated output, filenames, assets and PDF content/metadata. No known client identities or internal contact details found. Approved generic labels and external-auditor reference retained.
- Noindex meta, robots.txt and Vercel response-header configuration retained.

## Scope and limits

Nine intentionally labelled deliverable placeholders remain for a later approved visual-content iteration. No client screenshots were fabricated. The preserved CV has not been rewritten to synchronise its older wording with V4 website copy.

V4 has not been Lighthouse-benchmarked; older scores must not be reused as V4 measurements. V4 is on review branch `v4-portfolio`; production `main` remains unchanged until approval. A successful branch push is distinct from Vercel deployment success and external preview verification. Report deployment metadata restrictions honestly rather than inferring preview readiness.
