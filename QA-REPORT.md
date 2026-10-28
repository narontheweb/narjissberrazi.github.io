# V10 prototype validation

Validated on 28 October 2026 against the local static production build using Chromium. Baseline: V9 source `81808b8a8364877444d5d73ab804f4b4bfc55ad5`. Work is isolated on `v10-prototype`; production requires owner approval.

## Design and content preservation

- Selected Work follows the existing hero/four-keyword strip. Core Expertise follows the cards with smaller headings, no item numbers, lighter spacing and the original six descriptions. Broader experience, credentials/leadership and contact/footer retain their original markup and content.
- Hero copy, headline, four expertise terms, all other profile data, all three case Markdown files and all three broader-experience files are byte-identical to V9. The complete AI case, including the Flemish organisation introduction, is unchanged: SHA-256 `8ee7329c2e1be4f84139a8f5287d4a3ce7e75a8bb53fd20fcd85b990826ee0bc`.
- Existing portrait files/crop/dimensions, self-hosted font, header, footer, CV component, privacy configuration and dependencies are unchanged. Hero hierarchy uses the same font with a larger/balanced headline and rounded portrait frame; no wording or photograph was regenerated.
- Cards share a rounded two-column desktop structure, circular arrow and whole-card control. International reporting, prioritisation and roadmap compositions use the existing evidence values 31, 40 and 2-year, respectively. Abstract circles/offset frames are decorative, not additional data or mock project artifacts. No screenshots, dashboards, deliverables, results, stock images, gradients or new identity were invented.
- All twelve approved evidence items and notes appear once. The bank impact remains explicitly estimated/annualised, qualified as a combined estimate for the 40 prioritised issues, with its unchanged simulation methodology in expanded detail. Training rollout, team ownership and assurance wording are preserved.
- Desktop/mobile visual inspection covered hero, all three cards, expanded detail and compact expertise. At phone widths the heading precedes the composition, followed by the original description. The existing paper/stone/white/blue/navy tokens are used throughout.

## Passed checks

- Astro + TypeScript: 15 files, zero errors/warnings/hints. Static build generates one page; no project route was added. JS is approximately 4.8 kB before compression, 1.9 kB gzip. No dependency, backend, API or runtime service was added.
- Responsive widths: 320, 375, 430, 768, 1024, 1440 and 1920px. No horizontal overflow, browser exceptions, failed assets or missing images. Main/project/supporting body copy remains 16px; focus/sector metadata remains 13px. Oversized evidence typography is confined to the selected card figure.
- All three cards start collapsed. A single native button covers the complete overview, with one labelled region below it. There are no nested interactive controls. The circular arrow is part of the same button.
- Actual title, evidence-figure and arrow clicks open each case at 320, 375, 768 and 1440px. Enter/Space open and close it. Visible 3px keyboard focus, aria-expanded/controls, labelled panels and focus retention pass. Clicking expanded narrative text leaves it open.
- Exactly one case remains open. Hidden/closing panels are excluded from keyboard and assistive access. All original context, challenge, five/six/six contribution bullets and compact deliverables remain. Each evidence list and label matches V9 source text exactly.
- No navigation, URL change, new window or popup occurs during card interaction. The expanded narrative is a sibling of the clickable overview, on the same page.
- The existing 240ms height/opacity reflow holds the activated card within 0.5px of its reading position on desktop/phone. Rapid toggles, intentional wheel scrolling and live reduced-motion preference changes pass. Reduced motion opens/closes immediately and suppresses hover movement.
- Home/Work/Credentials scrollspy, one current-section marker, native anchors and header clearance pass. Work remains active through the moved Core Expertise and broader experience sections.
- Axe WCAG 2 A/AA and WCAG 2.1 A/AA: zero violations at 1440px and 375px with a case expanded. Automated results are not a full accessibility certification.
- Mobile touch switching, full-card hit areas, minimum 54px circular arrows and unclipped featured typography pass. Layout does not depend on hover to disclose any project content.
- Both navigation/hero CV downloads return HTTP 200, PDF Content-Type/signature and the descriptive filename. Source, built and downloaded PDFs are byte-identical to the existing final file. Only one public CV asset exists; no CV content was modified.
- Website print output retains all three narratives, original AI introduction, banking methodology, broader experience and credentials. Abstract shapes/controls are omitted and typographic metrics return to print scale. The website print output is separate from the unchanged supplied CV.
- Confidentiality audit covered 41 source/build/asset files, including PDF text/metadata, without known client identity/internal-contact matches. No new project images or client asset filenames were added. Noindex, robots policy and Vercel headers remain.
- Review captures are stored outside public build assets: `review/v10/desktop.png`, `mobile.png`, `desktop-work.png`, `mobile-card.png`, and `desktop-expanded.png`. They are screenshots of this prototype, not purported client deliverables.

## Scope and limits

The reference URL `https://www.marco.fyi/work` returned a network 403 here. The prototype follows the features explicitly described by the user—distinctive large cards, rounded corners, circular arrows and interactive exploration—without claiming direct visual inspection or copying the reference.

Local services and temporary QA scripts were used; no new repository test framework, timed recruiter study or Lighthouse benchmark is claimed. Existing dormant real-image support is unchanged and renders no image/example section. No facts or source documents were rewritten.

The connected Vercel workflow can create a preview from `v10-prototype`. Vercel/deployment-metadata access is blocked from this environment, so successful Git push does not establish deployment success or live reachability. Review the actual branch preview through Deployments → v10-prototype → Visit. Any standard branch alias supplied must be labelled unverified. Production `main` remains unchanged until explicit approval.
