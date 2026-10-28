# Update the V9 portfolio

Edit on a preview branch and review the Vercel preview before merging into `main`. Keep JSON punctuation and Markdown `---` markers intact. V9 refines the existing V8 source without redesigning it. Its reference to a final Word CV is unresolved: no newer Word source was attached. The supplied final V8 PDF remains unchanged and governs CV-derived facts pending that source check. The earlier V7 Word file predates it.

## Positioning and section order

In `src/data/profile.json`:

- `title`, `descriptor`, `headline`, `description`: approved professional positioning. Keep the headline exactly. The descriptor remains data without a loose hero tagline.
- `hero`: the concise V9 introduction, based on the supplied candidate copy.
- `proof`: four expertise domains and descriptions, without figures or project metrics.
- `expertiseHeadline`, `expertiseIntro`: V9 section heading and short introduction.
- `expertise`: the unchanged six V6 capabilities, including implementation/delivery and AI capability building.
- `experienceHeadline`, `experienceIntro`: the approved broader-experience heading and supporting copy.
- `education`: objects with `institution`, `degree`, optional `major` and optional `distinction`. Includes the master's distinction and compact University of Cape Town summer school/award entry.
- `technicalSkills`: domain groups with `domain`, `items` and optional `scope`, preserving accurate depth.
- `certifications`: Microsoft AB-731, Microsoft PL-300, Collibra Data Steward and PRINCE2 Practitioner.
- `firmContributions`: KPMG Belgium AIDA organisation, role, ~400-colleague adoption remit and coaching two junior consultants per year. This renders inside credentials.
- `languages`: the unchanged confirmed language boundaries.
- `cta`, `linkedin`: the dark contact band and its single LinkedIn CTA. `disclaimer` is the factual confidentiality line used only in the bottom footer.

Keep the current portrait size, without a caption. The page order is hero/expertise strip, Core Expertise, flagship work, broader experience, Education, Skills & Credentials, then contact/footer. The six capability titles/descriptions and their existing grid remain unchanged. The retained hidden focus configuration is not imported by the page.

## Flagship cases

Edit frontmatter in `src/content/cases/*.md`:

- `title`, `clientLabel`, `sector`, `summary`, `order`: collapsed case content.
- `tags`: at most five approved focus areas. These render as one borderless “Focus areas — X · Y · Z” line, without pills or controls.
- `context`, `challenge`: approved concise expanded context.
- `contribution`: five to seven concise objects, each with a bold ownership `lead` and a `detail` continuing the same sentence. V8 uses five for CSRD and six each for banking/AI.
- `evidence`: comparable 16px `label`, optional short directly linked `note`, and optional `priority` metadata. Avoid a long methodology block alongside a collapsed metric; retain financial qualifications and explain methodology in the contribution.
- `deliverables`: compact objects with `title` and optional subordinate `items`.
- `visualPlaceholders`: future visual configuration only; absent files produce no public section or empty card.

Preserve a leading space or punctuation on contribution `detail` so sentences join correctly. Replace weaker wording with validated evidence instead of stacking more bullets. Evidence appears once per case. Keep V8 case order: CSRD, banking, AI.

- CSRD: the V9 brief explicitly clarifies the 11-person team was led in Belgium; reporting spans 31 entities across 30+ countries and 100+ stakeholders. Keep the 12-month duration and ~200-page report in expanded detail. Distinguish personal workstream contribution from the report's successful external limited assurance. The final PDF calls the application co-built with the client's local IT team; retain that wording pending the final Word source rather than restoring an older readiness/sole-builder claim.
- Banking: 40 of ~300 issues prioritised using 80/20, ~€11M estimated combined annualised impact, simulated from employee time savings and avoided regulatory fines across those 40 issues. Approximately half are resolved. Retain the ECB/NBB, BCBS 239 / RDARR context; team of 7, 8 domains, approximately 8 months ongoing; 90 governance-role users trained; monthly Data Board/Audit Committee KPIs. The estimate is not a claim of realised savings.
- AI: the entire V8 source file is preserved byte-for-byte in V9, including the collapsed summary and Flemish organisation context. Do not rewrite its introduction. Ten use cases are assessed/prioritised and the learning rollout remains ongoing; preserve existing ownership boundaries.

The flagship cases remain a single-open accordion, collapsed by default. Opening another case preserves the reading position and focus; direct scrolling interrupts the transition. Reduced motion opens/closes immediately.

## Broader experience

The three entries in `src/content/experience/` remain static articles with title, generic organisation, optional sector and one concise description. The platform-transition entry includes requirements, target model, migration coordination, 13 core-team Power BI users and approximately 6 months. Preserve its business-facing ownership boundary; do not imply Databricks engineering or technical-architect ownership. The analytics-navigation entry covers 20 reports, challenged KPIs/report logic and visual storytelling. Keep the third earlier-experience entry concise. The optional stored tags are not displayed.

## Education, Skills & Credentials

Use one section with Education, Technical Skills, Certifications and Languages, followed by compact Leadership & Firm Contributions. Keep the three main qualifications, the master's distinction, and the additional UCT summer school/award line. Thesis details belong in the CV. Firm contributions remain a subgroup, without a new full-width page section or flagship case.

Technical Skills retain a borderless definition list, now grouped by domain: Data & reporting, Analytical programming, Cloud & platform exposure. SQL, Data Modelling and Power BI & DAX remain the practical data/reporting skills. The programming scope states working knowledge of R and foundational Python; platform scope states solution-level understanding of Azure/Fabric. Grouping does not upgrade engineering depth. Keep the four visible certifications.

Languages remain Dutch, English, French and Arabic fluent; German basic understanding. Spanish is absent.

## The downloadable CV

Keep the separately supplied final V8 `NarjissBerrazi_CV.pdf` unchanged while the newer Word source referenced in V9 is missing. Do not reconstruct a CV, alter the PDF or merge it with the older V7 Word file. If a newer final Word file is supplied later, preserve that original and export/verify it directly before replacing the PDF.

`public/cv/Narjiss_Berrazi_CV.pdf` remains the one public CV asset with a descriptive filename. Both navigation and hero use `CvLink.astro` and the same `profile.cv` path. The navigation link is understated and icon-free; no other CV CTA belongs on the page. Production builds require the PDF. The original Word attachments remain unchanged outside the repository.

The V9 asset is byte-for-byte identical to the uploaded final V8 PDF, including formatting, embedded fonts, links and metadata. It is one A4 page. No conversion or post-processing was applied; this does not claim verification against the missing newer Word source.

Retained final PDF provenance (SHA-256):

```text
PDF: ff314ef79c5e1973b2f7ad571ef2cabef7c59cae3a3eef8f0bd0d03a0fa8c050
```

Prior immutable Vercel deployments are separate. Review source ambiguities and the new preview before approving a production change.

## Typography, navigation and future images

Preserve V6 sizing: 16px body/project copy and 13px focus/sector metadata. Keep neutral backgrounds, restrained blue accents and the dark navy contact footer.

Navigation is Home, Work, Credentials and external LinkedIn, including on phones. Home covers hero/expertise; Work covers flagship/broader experience; Credentials covers the final information section. Anchor IDs and the scrollspy in `src/scripts/portfolio.ts` must agree. Keep short reveals and reduced-motion support.

No project example assets are published. Do not add fictional cases, fabricated screenshots or recreated deliverables. Retained image-preview code and unconfigured future slots are dormant; they do not establish that examples exist. Remove any public claim to the contrary. The sole footer confidentiality line is factual and does not mention examples.

For an approved portrait replacement, replace the JPEG, run `npm run assets`, and commit JPEG/WebP/AVIF together. Do not retouch or generate a replacement face.

## Review

Run `npm run check` and `npm run build`. Check desktop/tablet/phone layout, both CV downloads, static broader entries, keyboard/touch flagship accordion, reduced motion and scrollspy. Compare the AI source bytes to V8. Audit obsolete public claims and confidential identities, including PDF text/metadata. Capture real desktop/mobile screenshots under `review/v9/`, outside public build assets, and review the Vercel preview before approving production.
