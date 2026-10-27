# Update the V6 portfolio

Edit content through GitHub on a preview branch, then review the Vercel preview before merging into `main`. Keep JSON punctuation and Markdown `---` markers intact.

## Positioning and working style

In `src/data/profile.json`:

- `title`, `descriptor`, `headline`, `hero`, `description` and `proof`: the approved V5 positioning and recruiter introduction, retained in V6.
- `expertise`: the six end-to-end areas, including implementation/delivery and organisational AI capability building.
- `experienceHeadline`, `experienceIntro`: Broader Data & Analytics Experience and its complementary-experience framing.
- `aboutLabel`, `aboutHeadline`, `about`: How I Work and the concise ambiguity/ownership/alignment/action paragraph.
- `technicalFluency`: textual proficiency groups, including Solution-level understanding for Azure and Fabric.
- `cta`, `ctaText`, `email`, `linkedin`: closing invitation and public contact links.

Keep the reduced portrait size, no caption and no loose descriptor in the hero. Do not enlarge main headings to compensate for copy density.

## Flagship cases

Edit fields above the second `---` in `src/content/cases/*.md`:

- `title`, `clientLabel`, `sector`, `summary`, `order`, `tags`: scannable collapsed content.
- `context`, `challenge`: concise expanded context; V6 preserves their approved V5 wording.
- `contribution`: at most seven objects, each with a strong ownership `lead` and a `detail` that continues the same sentence.
- `evidence`: `label`, optional directly linked `note`, and optional `priority: true` for a genuinely approved outcome.
- `deliverables`: compact objects with `title` and optional `items` for subordinate training topics.
- `visualPlaceholders`: future visual configuration only; no empty cards are rendered.

Contribution example:

```yaml
- lead: Assessed and prioritised 10 AI use cases
  detail: ' against value, feasibility, risk and readiness, using a structured prioritisation matrix to inform the roadmap.'
```

Preserve a leading space or punctuation on `detail` so the sentence joins correctly. The lead is bold; the detail is ordinary text. The schema enforces seven bullets maximum. Group related responsibilities instead of adding micro-task bullets.

Evidence appears once, in the header. Use outcome priority sparingly and only for supported results. Keep the banking qualification attached to the financial metric, limited to the 40 prioritised issues. Do not imply implementation of the ten assessed AI use cases. Keep BCBS 239 / RDARR as supervisory reference points.

The three projects are a single-open accordion, collapsed by default. Do not restore independent multiple-open behavior. Opening another case preserves the reading position; direct user scrolling interrupts the layout animation cleanly. Reduced motion opens/closes immediately.

## Future deliverable visuals

Stored future slots may remain, but absent images produce no public section, blank cards or future-visual captions. No fake client visuals are needed.

When an approved recreated/anonymised visual exists, upload it under `public/images/`, add `image` and descriptive `alt` to that slot, and update `description` to its actual caption:

```yaml
image: /images/ai-operating-model.webp
alt: An anonymised overview of AI governance roles and decision structures
```

The file must exist under the public image folder. Invalid/missing paths are not rendered. Real images become accessible preview buttons with Escape/close controls and focus return. Never use original client documents or screenshots.

## Broader experience

The three entries in `src/content/experience/` are unchanged. Update their approved titles, labels, descriptions or tags only when confirmed. Sector is optional for genuinely cross-sector experience. There are no filters; labels remain visible where accurate.

## Focus: hidden by default

`src/content/focus/assignment.md` is retained with `status: hidden`. Nothing from the block appears on the public page, and How I Work uses both columns intentionally.

Once actual work starts, set `status: current` and revise `description` to reflect concrete responsibilities. The component automatically labels it Current focus. Do not publish an upcoming engagement solely to fill space. Commercial terms and individual contacts stay out.

## Credentials, CV and portrait

`education`, `certifications`, `languages` and technical levels remain editable in `profile.json`. Keep the confirmed qualifications and language boundaries; do not add proficiency meters or academic distinctions.

All three download links use `public/cv/Narjiss_Berrazi_CV.pdf`. V6 does not change the V5 PDF. Production builds require it. A later approved replacement can use the same filename.

For a later portrait replacement, replace the JPEG, run `npm run assets`, and commit JPEG/WebP/AVIF together. Do not retouch or generate a replacement face.

## Typography and interaction

V6 uses 16px main/project body copy, 13px tags/sector labels and neutral section backgrounds. Preserve these readable sizes at 100% zoom. Supporting metadata may be smaller than body copy but should not return to tiny V5 sizes.

Home covers hero/expertise, Work covers projects/broader experience, About covers How I Work/credentials. Keep the anchor IDs unless also updating the scrollspy script. Reveals and hover effects remain short; reduced motion disables them. Do not add counters or decorative animation.

## Review

Run `npm run check` and `npm run build`. Test desktop/tablet/phone layouts, keyboard/touch accordion behavior, interrupted transitions, reduced motion, scrollspy and all CV downloads. Check for horizontal overflow, empty public visuals, hidden focus leakage and confidential identities. Review a preview before approving production. Noindex reduces indexing but does not make the URL private.
