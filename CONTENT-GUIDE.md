# Update the portfolio

On GitHub, open the file, click the pencil, make the edit, then **Commit changes**. Keep quotation marks and commas intact in JSON and the `---` markers in Markdown. Vercel builds each update. Changes on a review branch produce a preview; merge into `main` only after approval to update production.

## Headline, title and About

Open `src/data/profile.json`:

- `title`, `descriptor` and `hero`: the approved professional positioning and introduction.
- `headline`: the main headline; `headlineAccent` must match the exact words to emphasise in blue.
- `aboutHeadline`, `about` and `aboutContinuation`: the concise About block.
- `currentFocus`: its heading, paragraph and sector. Keep future work described as current or increasing responsibility, never as a completed achievement. Keep the organisation anonymous.
- `expertise`: the four core pillars.
- `proof`: the recruiter proof strip. Use only supported facts.

## Work and metrics

Edit `src/content/cases/*.md`. Above the second `---`:

- `title`, `client`, `summary`: public copy; use anonymised client labels only.
- `sector`: use one exact label from the sector list in `profile.json`.
- `evidence` and `evidenceNote`: approved figures and their qualifications.
- `tags`: capability labels, separate from the sector.
- `order`: display order; AI governance stays first.
- `tier`: `primary`, `independent`, or `leadership`. Keep one leadership entry in this layout.

Below the second `---`, edit the narrative that opens inline through **View case**. Use `##` for subheadings, `-` for bullet lists and `1.` etc. for transformation-flow steps. Keep CSRD shorter than the two primary cases. Case headings and buttons are generated automatically.

Never imply the €11M estimate covers all ~300 Data Quality issues: it applies only to the 40 prioritised issues. Keep “led key parts” of that transformation and keep AI out of the banking case.

Add a new primary summary by copying an existing file, using a new filename and unique order, and editing the metadata and narrative. The independent tier is reserved for the Studio in this layout.

## Broader experience and sectors

Edit `src/content/experience/*.md`: titles, anonymised labels, sector, capability tags and order above the second `---`; expandable copy below it. Every item needs an explicit sector.

Use the exact existing sector names to keep navigation working. Clicking a sector highlights matching work on desktop and hides nonmatching items on phones; All sectors resets it. Financial Market Infrastructure & Payments leads to Current Focus, its relevant experience item.

## Studio content

`src/data/studio.json` contains the fictional organisation and all eight initiatives. Edit:

- `title`, `function`, `problem`, `rationale`, `risks`, `nextDecision`, `action`.
- `scores`: whole numbers from 1 to 5. Higher risk/adoption complexity means more challenging; higher positive scores mean better.
- `id`: unique numeric identifier. Keep ID 2 for the default Employee Knowledge Assistant.

The score, governance path and recommendation are calculated automatically. Do not replace them with a claim of live AI output.

Scenario flags make the decision logic transparent:

- `sensitiveData`: internal/customer data requires enhanced governance.
- `highImpactDecision`: employment, legal or similar material decisions require high oversight.
- `unresolvedHighImpactRisk`: defers implementation while that risk is unresolved.
- `validationRequired`: keeps the initiative at Explore until readiness questions are resolved.
- `controlledPilot`: the specified customer-service exception allows a limited internal pilot at a score of 3.7 if risk/readiness requirements hold.

Only change these flags if the scenario narrative and methodology remain consistent. Scoring rules are in `src/lib/studio.ts`; changing the method itself requires a coding change and tests. The eight scenarios and portfolio counts are intentionally defined by the approved MVP specification. Adding further initiatives requires updating the hardcoded eight-opportunity wording and default-selection handling in the Studio component/script, so it is not a routine content edit yet.

## Contact and CV

Edit `linkedin` and `email` in `src/data/profile.json`. Never use internal employer contacts.

The supplied one-page CV is `public/cv/Narjiss_Berrazi_CV.pdf`. Replace that PDF using the exact filename; the navigation, hero and footer all download it. Do not remove it for a release. Do not upload the internal KPMG PowerPoint as a public CV.

## Portrait

Replace `public/images/narjiss-berrazi-headshot.jpeg` with the actual portrait. Run `npm run assets` to regenerate WebP and AVIF and commit all three. For browser-only changes, upload all three formats together, or configure Vercel's build command as `npm run assets && npm run build` to regenerate variants automatically. No retouching or generated portrait replacement.

## Credentials

Edit `education`, `certifications` and `languages` in `profile.json`. Education entries use `degree · institution`. Keep both PRINCE2 Foundation and Practitioner. Languages distinguish fluent from basic understanding. Do not add academic distinction or unconfirmed qualifications.

## Before releasing

Run `npm run test`, `npm run check` and `npm run build`. Check the preview on phone and desktop, open each case, exercise Studio filters and initiative selection, reset sector filters and download the CV. Scan all public source/assets for client identities. Keep the noindex configuration; it reduces indexing but does not make the URL private.
