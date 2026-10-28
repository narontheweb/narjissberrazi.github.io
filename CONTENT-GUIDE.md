# Update the V8 portfolio

Edit on a preview branch and review the Vercel preview before merging into `main`. Keep JSON punctuation and Markdown `---` markers intact. V8 synchronises the existing V7 site with the final CV without redesigning it. The supplied final PDF is the factual source of truth where earlier content conflicts.

## Positioning and section order

In `src/data/profile.json`:

- `title`, `descriptor`, `headline`, `description` and `proof`: approved professional positioning. The descriptor is retained as data, without a loose hero tagline.
- `hero`: the exact shorter V7 introduction.
- `expertise`: the unchanged six V6 capabilities, including implementation/delivery and AI capability building.
- `experienceHeadline`, `experienceIntro`: the approved broader-experience heading and supporting copy.
- `education`: objects with `institution`, `degree`, optional `major` and optional `distinction`. Includes the master's distinction and compact University of Cape Town summer school/award entry.
- `technicalSkills`: four textual proficiency groups: Proficient, Working knowledge, Foundational and Solution-level.
- `certifications`: the four V8 credentials: Microsoft AB-731, Microsoft PL-300, Collibra Data Steward and PRINCE2 Practitioner.
- `firmContributions`: KPMG Belgium AIDA organisation, role, ~400-colleague adoption remit and coaching two junior consultants per year. This renders inside credentials.
- `languages`: the unchanged confirmed language boundaries.
- `cta`, `ctaText`, `email`, `linkedin`: closing invitation and public contact links.

Keep the V6 portrait size, no portrait caption and no extra hero tags. The page order is hero/proof, expertise, flagship work, broader experience, Education, Skills & Credentials, then the contact footer. How I Work and About are removed. The retained hidden focus configuration is not imported by the page; changing its status does not add a section.

## Flagship cases

Edit frontmatter in `src/content/cases/*.md`:

- `title`, `clientLabel`, `sector`, `summary`, `order`: collapsed case content.
- `tags`: at most five approved focus areas. These render as one borderless “Focus areas — X · Y · Z” line, without pills or controls.
- `context`, `challenge`: approved concise expanded context.
- `contribution`: five to seven concise objects, each with a bold ownership `lead` and a `detail` continuing the same sentence. V8 uses five for CSRD and six each for banking/AI.
- `evidence`: `label`, optional directly linked `note`, and optional `priority: true` for an approved outcome.
- `deliverables`: compact objects with `title` and optional subordinate `items`.
- `visualPlaceholders`: future visual configuration only; absent files produce no public section or empty card.

Preserve a leading space or punctuation on contribution `detail` so sentences join correctly. Replace weaker wording with validated evidence instead of stacking more bullets. Evidence appears once per case. Keep V8 case order: CSRD, banking, AI.

- CSRD: team of 11, 12-month workstream, 31 entities across 30+ countries, 100+ stakeholders, ~200-page report and external limited assurance. Credit the reporting application as co-built with the client's local IT team, supporting all datapoints across 30+ countries. Do not revert to sole authorship or a full-audit claim.
- Banking: 40 of ~300 issues prioritised using 80/20, ~€11M estimated combined annualised impact, simulated from employee time savings and avoided regulatory fines across those 40 issues. Approximately half are resolved. Retain the ECB/NBB, BCBS 239 / RDARR context; team of 7, 8 domains, approximately 8 months ongoing; 90 governance-role users trained; monthly Data Board/Audit Committee KPIs. The estimate is not a claim of realised savings.
- AI: approximately 1,200 employees, team of 8 over approximately 12 months, strategy/TOM/governance, 2-year roadmap approved by the Managing Director with budget secured. Ten use cases were assessed/prioritised, not claimed as technically implemented. The 12-person working group is chaired/facilitated; the four-part learning programme is rolling out to approximately 300 office-based employees. Do not imply rollout completion or 300 already trained.

The flagship cases remain a single-open accordion, collapsed by default. Opening another case preserves the reading position and focus; direct scrolling interrupts the transition. Reduced motion opens/closes immediately.

## Broader experience

The three entries in `src/content/experience/` remain static articles with title, generic organisation, optional sector and one concise description. The platform-transition entry includes requirements, target model, migration coordination, 13 core-team Power BI users and approximately 6 months. Preserve its business-facing ownership boundary; do not imply Databricks engineering or technical-architect ownership. The analytics-navigation entry covers 20 reports, challenged KPIs/report logic and visual storytelling. Keep the third earlier-experience entry concise. The optional stored tags are not displayed.

## Education, Skills & Credentials

Use one section with Education, Technical Skills, Certifications and Languages, followed by compact Leadership & Firm Contributions. Keep the three main qualifications, the master's distinction, and the additional UCT summer school/award line. Thesis details belong in the CV. Firm contributions remain a subgroup, without a new full-width page section or flagship case.

Technical Skills retain the V7 borderless definition list with whitespace between levels. Keep SQL, Data Modelling and Power BI & DAX proficient; R working knowledge; Python foundational; Azure and Fabric solution-level. The visible certification list is limited to the four V8 credentials. Do not restore the foundation-level list.

Languages remain Dutch, English, French and Arabic fluent; German basic understanding. Spanish is absent.

## The downloadable CV

The separately supplied final `NarjissBerrazi_CV.pdf` supersedes the V7 Word file and earlier exports. It is the single source of truth for CV content and validated portfolio facts. Copy the final PDF unchanged; never recreate, rewrite, re-export or merge it with older content.

Replace `public/cv/Narjiss_Berrazi_CV.pdf` in place, retaining the working link/filename. Keep only this one public CV asset. Do not publish older PDFs or internal source documents. `profile.cv` points to the PDF and `CvLink.astro` is used only in the hero. Production builds require the file. Do not restore navigation/footer CV links.

The V8 asset is byte-for-byte identical to the uploaded final PDF, including its formatting, embedded fonts, links and metadata. It is one A4 page. No conversion or post-processing was applied.

V8 source and public asset provenance (SHA-256):

```text
PDF: ff314ef79c5e1973b2f7ad571ef2cabef7c59cae3a3eef8f0bd0d03a0fa8c050
```

For an approved later replacement, use its supplied final asset directly and update this provenance. Prior immutable Vercel deployments are separate; this replacement applies to the V8 build and subsequent approved production release.

## Typography, navigation and future images

Preserve V6 sizing: 16px body/project copy and 13px focus/sector metadata. Keep neutral backgrounds, restrained blue accents and the dark navy contact footer.

Navigation is Home, Work, Credentials and external LinkedIn, including on phones. Home covers hero/expertise; Work covers flagship/broader experience; Credentials covers the final information section. Anchor IDs and the scrollspy in `src/scripts/portfolio.ts` must agree. Keep short reveals and reduced-motion support.

Existing future visual support accepts approved recreated/anonymised files under `public/images/`, with `image` and descriptive `alt` in a stored visual slot. Files must exist. Real images retain native-dialog previews, Escape/close controls and focus return. Do not publish original client screenshots or add visuals solely to fill space.

For an approved portrait replacement, replace the JPEG, run `npm run assets`, and commit JPEG/WebP/AVIF together. Do not retouch or generate a replacement face.

## Review

Run `npm run check` and `npm run build`. Check desktop/tablet/phone layout, the single hero CV download, static broader entries, keyboard/touch flagship accordion, reduced motion and Home/Work/Credentials scrollspy. Audit overflow, missing assets, unwanted sections and confidential identities, including PDF text/metadata. Review the new Vercel preview before approving production. Noindex reduces indexing but does not make the URL private.
