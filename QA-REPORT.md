# V3 validation

Validated on 14 October 2026 against the static production build with Chromium. The portfolio remains one page, with the established portrait, colours, typography and credentials.

## Passed

- Astro + TypeScript: 13 files checked, zero errors, warnings or hints.
- Static production build: one page generated.
- Responsive widths: 320, 375, 430, 768, 1024, 1440 and 1920px, with no horizontal document overflow, missing images, browser exceptions or HTTP asset errors.
- Hero headline: one charcoal text colour, with no selective blue span. Approved hero copy, four proof points and five expertise areas present; the five areas stack in one column on phones.
- Exactly three equally structured flagship cases and two supporting experience entries. No synthetic project/component/data/logic, generic process ribbons, Takeaway blocks or standalone sector section remain.
- Three cases expand inline; keyboard Enter preserves button focus and aria-expanded state. Phones keep one case open; desktop can open all three. Each contains Context, Challenge, Contribution, Evidence, Deliverables and three labelled future visuals.
- Four-part mandatory AI training programme is present as its own deliverable section.
- Sector controls are beside the work. All seven named sectors tested, including no-match sectors. Public Sector matches three items (case, supporting experience and Upcoming Focus); Banking, Postal & Logistics and Higher Education match one each. Other sectors currently have no entries and show an empty message. Controls preserve focus and measured scroll position. Reset restores all experience and returns keyboard focus to All.
- Upcoming/current/hidden status variants tested on the development server. Status changes automatically change the heading; hidden removes the block and filter participation. The source was restored to upcoming after testing.
- Automated axe WCAG 2 A/AA and WCAG 2.1 A/AA: no violations at 1440px and 375px in both unfiltered and Public Sector-filtered views. Automated checks are not a complete accessibility certification.
- Reduced-motion mode uses automatic rather than smooth scrolling and skips expansion animation.
- CV: byte-for-byte identical to the approved V2 PDF. Navigation, hero and footer point to the same asset; HTTP 200, PDF Content-Type and file signature checked. The file remains one A4 page.
- Print PDF generated; regulatory context, training, banking qualification, ~200-page CSRD evidence, readiness application, Upcoming Focus and credentials retained.
- Confidentiality audit across source, generated output, filenames, assets and PDF content/metadata: no known client names or internal contact details. The auditor reference is explicitly approved content.
- Noindex meta, robots.txt and Vercel response-header configuration retained.

## Deliberate limits

The nine document-frame visuals are labelled placeholders for a later approved content iteration, not fabricated client screenshots. Optional image/alt fields allow later replacement without editing the interface. Sectors without current entries remain available and show no results rather than invented work.

The CV was intentionally not rewritten or synchronised with V3 project copy. A later approved CV revision can do that. V3 has not been Lighthouse-benchmarked; earlier scores must not be claimed as V3 measurements.

V3 is prepared on review branch `v3-portfolio`. Production remains unchanged until owner approval. Branch push, Vercel deployment success and external preview reachability are separate checks; blocked deployment metadata access must not be presented as a successful remote verification.
