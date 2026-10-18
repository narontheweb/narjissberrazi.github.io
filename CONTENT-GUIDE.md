# Update the V4 portfolio

On GitHub, open the file, click the pencil, edit and commit to a preview branch. Review the Vercel preview before merging into `main`. Keep JSON punctuation and Markdown `---` markers intact. Normal copy updates do not require UI component edits.

## Positioning and About

Edit `src/data/profile.json`:

- `title`: Data & AI Transformation Specialist, used in the hero, footer, browser title and social title.
- `descriptor`: Data & AI Strategy | Governance | Change & Adoption.
- `hero`, `headline`, `description`: introduction, full charcoal headline and search description.
- `proof`: the four compact labels and descriptions. Keep Target Operating Model design & implementation in the second point.
- `expertiseHeadline` and `expertise`: the five numbered areas.
- `workHeadline` / `workIntro`, `experienceHeadline` / `experienceIntro`: work and broader-foundation introductions.
- `aboutHeadline`, `about`, `aboutContinuation`: the personal About block.
- `email`, `linkedin`: public contacts only.

The portrait caption intentionally contains only the name. No tagline is needed.

## Flagship cases

Edit the fields above the second `---` in `src/content/cases/*.md`:

- `title`, `clientLabel`, `sector`, `summary`, `order`, `tags`: collapsed project content and ordering.
- `context`, `challenge`, `contribution`: expanded narrative and responsibility list.
- `evidence`: `label` entries with an optional directly linked `note`. Evidence appears only in the project header and stays visible when expanded; it is not repeated in the panel.
- `deliverables`: objects with a `title` and optional `items` list for subordinate topics.
- `visualPlaceholders`: two or three future visual entries, described below.

For example, the training deliverable is:

```yaml
- title: AI Training Programme
  items:
  - AI Fundamentals
  - AI Fluency
  - Microsoft Copilot
  - Copilot Studio
```

Do not add a second standalone training section or Evidence block. AI use-case responsibility is assessment and prioritisation, not solution implementation. BCBS 239 / RDARR are supervisory reference points, not themselves an EU regulation. Keep the banking impact note attached to the ~€11M metric; it applies only to the 40 prioritised issues.

Use approved generic client labels only. The CSRD client label is Global Postal & Logistics Group. Do not put original client documents, names or screenshots in the repository.

## Deliverable miniatures

Keep the intentional document-frame placeholders until approved reconstructed visuals are available. To replace one later, upload a generic, anonymised image under `public/images/`, then add to that placeholder:

```yaml
image: /images/ai-operating-model.webp
alt: An anonymised overview of AI governance roles and decision structures
```

Update its `description` to a caption. An image requires alt text. Keep two or three entries per case; no fake client screenshots or internal originals.

## Broader experience

Edit `src/content/experience/*.md`: `title`, `clientLabel`, `description`, `tags`, `order`, and optionally `sector`.

The three entries are Data Modelling & Architecture, Analytics Navigation & User Enablement, and Earlier Data & Analytics Consulting. The first remains business-facing and uses Flemish Social Services Agency. Do not imply technical-architect or Databricks-engineer ownership.

Earlier Data & Analytics Consulting deliberately has no `sector` field because its engagements span sectors without one accurate category. It appears under All and is hidden when a specific sector is selected. Do not add a guessed sector. Its `secondary: true` flag gives it a quieter treatment.

## Automatic sector filters

Filters are derived from nonempty sector values on the displayed cases, broader experience and non-hidden focus entries. There is no separate filter list to maintain. New sectors appear on the next build only when a displayed item maps to them; sectors with no items are absent. Labels follow first appearance in the ordered content.

Use consistent exact wording, including Public Sector. Do not use the old Public Sector & Government label. Omit `sector` on a broader entry only when no single accurate category exists; do not use a blank value. Cases and focus require a sector.

All includes unclassified broader experience. Filtering preserves keyboard focus and scroll position; reset returns all entries. Hidden focus entries do not create a filter.

## Upcoming / Current Focus

Edit `src/content/focus/assignment.md`:

- `status: upcoming` → Upcoming focus.
- `status: current` → Current focus.
- `status: hidden` → no block or filter participation.

The current status remains upcoming. When actual work starts, update both status and description. The client label, title, sector, description and tags are data fields. Do not publish commercial terms, personal contacts or procurement details.

## Credentials, CV and portrait

Edit `education`, `certifications` and `languages` in `profile.json`. Keep the existing education, all confirmed certifications including both PRINCE2 credentials, and fluent/basic language distinctions. Do not add academic distinction or unconfirmed qualifications.

`public/cv/Narjiss_Berrazi_CV.pdf` is unchanged. Navigation, hero and footer use the same one-page file. Replace it only with a later approved PDF. The website copy can be newer than the preserved CV until that revision is approved. Production builds fail if the asset is absent.

For a later portrait replacement, replace the JPEG, run `npm run assets`, and commit JPEG, WebP and AVIF together. Do not retouch or generate a replacement face.

## Review and release

Run `npm run check` and `npm run build`. Check three cases, evidence once, training nested under Deliverables, dynamic filters, the unclassified earlier-experience entry, focus status and all CV links on desktop and phone. Check keyboard behavior, reduced motion, confidentiality and overflow. Review the preview before approving production. Noindex reduces indexing but does not make the URL private.
