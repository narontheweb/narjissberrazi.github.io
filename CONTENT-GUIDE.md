# Update the V3 portfolio

On GitHub, open the file, click the pencil, edit and commit to a preview branch. Review the Vercel preview before merging into `main`. Keep JSON punctuation and Markdown `---` markers intact. No UI component edits are needed for ordinary content changes.

## Headline, positioning and About

Edit `src/data/profile.json`:

- `title`, `descriptor`, `hero` and `headline`: the approved professional positioning. The full headline uses charcoal; there is no partial blue emphasis.
- `proof`: the four labels and descriptions in the compact proof strip.
- `expertiseHeadline` and `expertise`: the five numbered areas.
- `workHeadline` and `workIntro`: Selected Work heading and introduction.
- `experienceHeadline` and `experienceIntro`: the broader data-and-analytics foundation.
- `aboutHeadline`, `about`, `aboutContinuation`: the two personal About paragraphs.
- `email`, `linkedin`: public contact links. Never use internal employer contacts.

## Flagship cases

Each file in `src/content/cases/` has structured fields between `---` markers. The interface uses these fields directly; the Markdown body is not displayed.

- `title`, `clientLabel`, `sector`, `summary`: collapsed project content.
- `order`: 1, 2 or 3. All three cases share the same component and hierarchy.
- `tags`: capabilities, separate from sector.
- `context`, `challenge`: expanded paragraphs.
- `contribution`: the responsibility bullet list.
- `evidence`: a list of `label` entries, with an optional `note` for a qualification.
- `deliverables`: a list of actual approved outputs.
- `visualPlaceholders`: two or three entries with `label` and `description`.
- `training`: optional entries with `title` and `description`; the AI case uses the four-part programme.

Use only approved generic client labels. Never upload source client documents, dashboards, names or screenshots.

The banking estimate must always remain qualified: its impact note belongs on the same evidence entry as ~€11M and applies only to the 40 prioritised issues. Do not add AI to that project or claim ownership of the entire workstream.

The website's CSRD case now uses the approved ~200-page report figure. Keep unapproved older metrics out of the case fields. The supplied CV is intentionally unchanged in V3 and can be synchronised in a later pass.

## Replace future deliverable placeholders

Upload a recreated, approved, anonymised visual under `public/images/` with a generic filename. On its `visualPlaceholders` entry, add:

```yaml
image: /images/ai-operating-model.webp
alt: An anonymised overview of AI governance roles and decision structures
```

The shared component automatically shows the image instead of the document-frame placeholder. Change `description` from the future-visual message to an accurate caption. An image requires alt text; the build validates this. Keep two or three entries per case. No fake client screenshots or internal originals.

## Broader experience

Only two entries remain in `src/content/experience/`. Edit `title`, `clientLabel`, `sector`, `description`, `tags` and `order`.

Keep Data Modelling & Architecture business-facing. Do not imply technical-architect or Databricks-engineer ownership. Analytics enablement should retain data storytelling, KPI interpretation, reporting UX and adoption.

## Upcoming / Current Focus

Edit `src/content/focus/assignment.md`:

- `status: upcoming` shows **Upcoming focus**.
- `status: current` automatically shows **Current focus**.
- `status: hidden` removes the block and its sector-filter match entirely.

When the work starts, change status and update `description` to reflect actual work. The heading, client label, title, sector, description and tags are all content fields. Do not change to current merely to make the page look stronger. Keep commercial values, individual contacts and procurement details out.

## Sector filters

Each case, supporting experience and visible focus entry must use one exact sector from `profile.json`. The schema validates the approved names. The filter sits above work, applies across all those items and preserves keyboard focus without forced scrolling. All resets it. A sector with no current matches shows a clear empty message; do not invent an engagement to fill it.

## Credentials and CV

Edit `education`, `certifications` and `languages` in `profile.json`. Keep education entries as `degree · institution`, both PRINCE2 credentials, and the fluent/basic language distinction. No academic distinction or unconfirmed certification.

The one-page PDF remains at `public/cv/Narjiss_Berrazi_CV.pdf`. Navigation, hero and footer use it. Replace only with a later approved PDF using the same filename. V3 does not rewrite the existing CV. Production builds fail if the file is missing.

## Portrait and validation

For a later portrait replacement, update the JPEG and run `npm run assets`, then commit the JPEG, WebP and AVIF together. Do not retouch or generate a replacement face.

Run `npm run check` and `npm run build`. Check all three cases, filters including no-result sectors, focus status, credentials and CV downloads on desktop and phone. Confirm there is no horizontal scrolling and that keyboard and reduced-motion settings work. Review a preview before production approval. Keep noindex; it reduces indexing but does not make the URL private.
