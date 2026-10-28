# Update the V7 portfolio

Edit on a preview branch and review the Vercel preview before merging into `main`. Keep JSON punctuation and Markdown `---` markers intact. V7 modifies the existing V6 site; it does not introduce new sections.

## Positioning and section order

In `src/data/profile.json`:

- `title`, `descriptor`, `headline`, `description` and `proof`: approved professional positioning. The descriptor is retained as data, without a loose hero tagline.
- `hero`: the exact shorter V7 introduction.
- `expertise`: the unchanged six V6 capabilities, including implementation/delivery and AI capability building.
- `experienceHeadline`, `experienceIntro`: the approved broader-experience heading and supporting copy.
- `education`: objects with `institution`, `degree` and optional `major`.
- `technicalSkills`: four textual proficiency groups: Proficient, Working knowledge, Foundational and Solution-level.
- `certifications`, `languages`: all nine approved certifications and the confirmed language boundaries.
- `cta`, `ctaText`, `email`, `linkedin`: closing invitation and public contact links.

Keep the V6 portrait size, no portrait caption and no extra hero tags. The page order is hero/proof, expertise, flagship work, broader experience, Education, Skills & Credentials, then the contact footer. How I Work and About are removed. The retained hidden focus configuration is not imported by the page; changing its status does not add a V7 section.

## Flagship cases

Edit frontmatter in `src/content/cases/*.md`:

- `title`, `clientLabel`, `sector`, `summary`, `order`: collapsed case content.
- `tags`: at most five approved focus areas. These render as one borderless “Focus areas — X · Y · Z” line, without pills or controls.
- `context`, `challenge`: approved concise expanded context.
- `contribution`: at most seven objects, each with a bold ownership `lead` and a `detail` continuing the same sentence.
- `evidence`: `label`, optional directly linked `note`, and optional `priority: true` for an approved outcome.
- `deliverables`: compact objects with `title` and optional subordinate `items`.
- `visualPlaceholders`: future visual configuration only; absent files produce no public section or empty card.

Preserve a leading space or punctuation on contribution `detail` so sentences join correctly. Group related responsibilities instead of adding micro-task bullets. Evidence appears once per case. Keep the banking financial estimate qualified as relating only to the 40 prioritised issues. Do not imply implementation of the ten assessed AI use cases. Keep BCBS 239 / RDARR as supervisory reference points.

The flagship cases remain a single-open accordion, collapsed by default. Opening another case preserves the reading position and focus; direct scrolling interrupts the transition. Reduced motion opens/closes immediately.

## Broader experience

The three entries in `src/content/experience/` are static articles with title, generic organisation, optional sector and one concise description. No click-to-open behavior, plus icons, chevrons or hidden panels belong here. The optional stored tags are not displayed. Preserve the business-facing ownership boundary for the platform-transition engagement.

## Education, Skills & Credentials

Use one section with Education, Technical Skills, Certifications and Languages, in that order. Keep all three qualifications, including the KU Leuven bridging programme. Thesis details belong in the CV.

Technical Skills use a borderless definition list with whitespace between levels. Do not add internal dividers, cards, tables or proficiency meters. Keep SQL, Data Modelling and Power BI & DAX proficient; R working knowledge; Python foundational; Azure and Fabric solution-level. Retain all nine website certifications, including both PRINCE2 qualifications. The supplied CV is independent and must not be rewritten to match the website list.

Languages remain Dutch, English, French and Arabic fluent; German basic understanding. Spanish is absent.

## The downloadable CV

The separately supplied `Narjiss_Berrazi_CV.docx` is the sole source for CV wording, hierarchy and content. Export directly from that Word file to PDF; never rebuild, paraphrase, merge with an older CV or pull copy from portfolio data.

Replace `public/cv/Narjiss_Berrazi_CV.pdf` in place. Keep only this one public CV asset. Do not publish the raw Word file, older PDFs or internal source documents. `profile.cv` points to the PDF and `CvLink.astro` is used only in the hero. Production builds require the file. Do not restore navigation/footer CV links.

The V7 export was made with LibreOffice's `writer_pdf_Export` filter, without editing the Word file or post-processing the PDF. All Word paragraphs and both hyperlinks were verified. It is one US Letter page, matching the source document's page size. Arial resolves to the metric-compatible Liberation Sans available in the build environment.

V7 provenance (SHA-256):

```text
Word: 16ed05d9949c793e74383f49184c5ee26b33cfb2fdb1a2db2f4e2c28ef0200e3
PDF:  e84481a814c6bca3032c3b38dc134f5b899b2619f98fa8611a2305c8c9d29b79
```

For an approved later replacement, export its new Word source directly, inspect for clipping or overflow, compare all text and links, then update this provenance. Prior immutable Vercel deployments are separate; this replacement applies to the V7 build and subsequent approved production release.

## Typography, navigation and future images

Preserve V6 sizing: 16px body/project copy and 13px focus/sector metadata. Keep neutral backgrounds, restrained blue accents and the dark navy contact footer.

Navigation is Home, Work, Credentials and external LinkedIn, including on phones. Home covers hero/expertise; Work covers flagship/broader experience; Credentials covers the final information section. Anchor IDs and the scrollspy in `src/scripts/portfolio.ts` must agree. Keep short reveals and reduced-motion support.

Existing future visual support accepts approved recreated/anonymised files under `public/images/`, with `image` and descriptive `alt` in a stored visual slot. Files must exist. Real images retain native-dialog previews, Escape/close controls and focus return. Do not publish original client screenshots or add visuals solely to fill space.

For an approved portrait replacement, replace the JPEG, run `npm run assets`, and commit JPEG/WebP/AVIF together. Do not retouch or generate a replacement face.

## Review

Run `npm run check` and `npm run build`. Check desktop/tablet/phone layout, the single hero CV download, static broader entries, keyboard/touch flagship accordion, reduced motion and Home/Work/Credentials scrollspy. Audit overflow, missing assets, unwanted sections and confidential identities, including PDF text/metadata. Review the new Vercel preview before approving production. Noindex reduces indexing but does not make the URL private.
