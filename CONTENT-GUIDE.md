# Update the portfolio

Normal content changes use simple text files. On GitHub, open the file, click the pencil, make the edit, then **Commit changes**. Vercel rebuilds automatically. Keep quotation marks, commas and the surrounding structure intact in JSON; a build failure usually points to the line to correct.

## Headline, title and biography

Open `src/data/profile.json`:

- `title`: the professional title used in the header copy, hero eyebrow and footer.
- `headline`: the main homepage headline. `headlineAccent` identifies the exact words to emphasise in blue; those words must appear in `headline`.
- `hero`: the introductory paragraph.
- `descriptor`: the small secondary positioning line.
- `aboutHeadline` and `about`: the homepage About introduction.
- `technical`: the supporting technical-credibility statement.
- `expertise`, `principles`, and `progression`: edit the existing title/text pairs or list items.

## Work and metrics

Open the matching file in `src/content/cases/`. The content between `---` markers controls the homepage summary:

- `title`, `client`, `summary`: public project copy. Use only anonymised client labels.
- `evidence`: a concise, approved metric or evidence statement.
- `evidenceNote`: a necessary qualification.
- `tags`: short expertise labels.
- `order`: display order. AI governance should remain first.
- `tier`: `primary`, `independent`, or `leadership`. Keep one leadership entry in this first-phase layout.

The text below the second `---` is retained as narrative content for later detailed pages; it does not currently appear on the homepage.

Never imply that the €11M estimate covers all ~300 Data Quality issues: it applies only to the 40 prioritised issues. Do not add AI to that engagement. Keep the wording “led key parts” of the banking transformation. Future AI responsibilities and demonstrations must remain labelled as future work.

To add another featured summary, copy a case Markdown file, give it a new filename and a unique `order`, and edit its content. It appears automatically. Detailed case pages are a later phase.

## Additional consulting experience

Edit the Markdown files in `src/content/experience/`. Change the `title`, anonymised `client`, `tags`, and `order` above the second `---`. Change the paragraph below it to update the expandable summary. To add experience, copy an existing file and give it a unique filename and order.

## LinkedIn, email and CV

Change `linkedin` and `email` in `src/data/profile.json`. Use the full `https://` LinkedIn address. Never use internal employer contact information.

Upload the approved one-page CV PDF as `public/cv/Narjiss_Berrazi_CV.pdf`, with that exact filename. The download links become available on the next build. Replace that file to update the CV. Never upload the internal KPMG PowerPoint as the CV.

## Portrait

Replace `public/images/narjiss-berrazi-headshot.jpeg` with the actual professional portrait. Keep the filename. Run `npm run assets` to regenerate WebP and AVIF, then commit all three image files. If working only through GitHub, upload pre-converted WebP and AVIF files with the same base name alongside the JPEG. Do not replace only the JPEG while leaving older optimised versions. Vercel can regenerate variants during the build with `npm run assets && npm run build` if you prefer browser-only updates.

## Certifications, languages, education and sectors

Edit `certifications`, `languages`, `education`, and `sectors` in `src/data/profile.json`. Sectors appear on the homepage; keep Corporates first. Certifications, languages and education are structured content for the standalone About page in a later phase. They are intentionally not promoted to a large homepage section.

## Before committing

Read the text for accuracy and confidentiality. Preview on phone and desktop. Check that all figures retain their qualifications and that the site still clearly presents AI transformation, governance, and adoption. Avoid dates or claims of formal promotions unless approved.
