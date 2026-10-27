# Update the V5 portfolio

Edit content through GitHub's pencil button on a preview branch. Review the Vercel preview before merging into `main`. Keep JSON punctuation and Markdown `---` markers intact. Normal content changes do not require editing presentation components.

## Positioning, hero and How I Work

In `src/data/profile.json`:

- `title`: Data & AI Transformation Specialist.
- `descriptor`: the supporting positioning, retained as content data without a loose line in the hero.
- `headline`: the complete charcoal hero headline, now beginning “Turning Data & AI ambition”.
- `hero`, `description`, `proof`: introduction, search description and four proof items.
- `expertiseHeadline`, `expertise`: the six capability areas. Keep organisational AI knowledge/capability distinct from engineering.
- `experienceHeadline`, `experienceIntro`: the broader platform/modelling/analytics/reporting foundation.
- `aboutLabel`, `aboutHeadline`, `about`: How I Work and the single personal working-style paragraph. Avoid repeating the hero career introduction.
- `cta`, `ctaText`, `email`, `linkedin`: the closing invitation and public contacts.

The portrait caption and standalone descriptor are intentionally absent. Its image is unchanged; only the desktop display size is smaller.

## Flagship cases and evidence

The approved V4 case copy remains in `src/content/cases/*.md`:

- `title`, `clientLabel`, `sector`, `summary`, `order`, `tags`: header and ordering.
- `context`, `challenge`, `contribution`: expanded narrative.
- `evidence`: `label` entries and optional directly linked `note`. Evidence appears once, in the header, and remains visible when expanded. Numeric prefixes receive blue emphasis automatically, without changing the wording.
- `deliverables`: objects with a `title` and optional `items` list for subordinate training topics.
- `visualPlaceholders`: two or three future visual slots.

Do not add a duplicate Evidence section or standalone training block. Keep AI use-case work framed as assessment/prioritisation. Treat BCBS 239 / RDARR as supervisory reference points. Keep the banking impact note attached to the ~€11M metric and limited to the 40 prioritised issues.

All three cases open independently, including on phones, so opening another case does not collapse content above the reader. Keep client identities anonymous.

## Deliverable miniatures

V5 retains labelled document placeholders; they are not clickable and do not pretend to be client visuals.

Later, upload an approved, recreated, anonymised visual under `public/images/`, then add:

```yaml
image: /images/ai-operating-model.webp
alt: An anonymised overview of AI governance roles and decision structures
```

Update `description` to an accurate caption. The shared component automatically makes real visuals keyboard/touch-accessible preview buttons. The larger preview closes with Escape, its close control or the backdrop; focus returns to the originating button. Image alt text is required by the schema. Never upload internal originals or fabricate client screenshots.

## Broader experience and sector labels

The three approved entries remain in `src/content/experience/*.md`. Edit title, approved client label, description, tags and order only when changes are confirmed. `sector` remains optional for genuinely cross-sector experience. The earlier consulting entry stays unclassified and visually secondary.

Sector labels remain on projects and relevant experience/focus entries. There are no sector controls or standalone sector section in V5.

## Upcoming Focus

Edit `src/content/focus/assignment.md`. Status values:

- `upcoming`: Upcoming focus.
- `current`: Current focus.
- `hidden`: no block.

The approved current value remains upcoming. Update both status and description when actual work starts. Keep commercial terms, procurement details and personal contacts out.

## Credentials and technical fluency

Edit `education`, `certifications`, `languages`, and `technicalFluency` in `profile.json`.

Technical fluency is grouped into levels, each with an `items` list. Keep the approved distinctions: proficient SQL/data modelling/Power BI & DAX; working knowledge of R; foundational Python; conceptual/solution-level Azure and Fabric. Do not add ratings, percentages or proficiency meters.

The displayed languages are Dutch, English, French and Arabic as fluent, and German with basic understanding. Keep the CV language line consistent when publishing a later approved PDF.

## CV and portrait

All three CV links use `public/cv/Narjiss_Berrazi_CV.pdf`. V5 makes only the required language-line removal; its other wording, layout and one-page format are unchanged. Production builds fail if the PDF is absent. Replace only with a later approved version using the same filename.

For a later portrait replacement, update the JPEG, run `npm run assets`, and commit JPEG, WebP and AVIF together. Do not retouch or generate a replacement face.

## Motion and navigation

The existing Home, Work and About anchors also drive active navigation. Home covers hero/expertise, Work covers projects/broader experience, and About covers How I Work/credentials. Do not rename anchor IDs without updating the script.

Reveals, project feedback and CTA motion are restrained. Content is never initially hidden just to enable a reveal. Reduced motion skips animation and finishes any active transition. Do not add counters, parallax, typewriters or scroll hijacking.

## Before release

Run `npm run check` and `npm run build`. Check desktop/tablet/phone layouts, cases, scrollspy, reduced motion, future-image preview behavior and all CV links. Confirm no horizontal overflow or confidential identities. Review a preview before approving production. Noindex reduces indexing but is not access control.
