# Narjiss Berrazi — portfolio

A one-page editorial Astro + TypeScript portfolio focused on AI transformation, governance, implementation, communication and adoption. V3 presents three equally weighted client cases with concrete responsibilities, evidence, training and deliverables. The synthetic demonstration has been removed. The established portrait, visual tokens and one-page architecture are preserved.

## View and publish in your browser

Repository: `narontheweb/narjissberrazi.github.io`, connected to Vercel. The `.github.io` name does not require GitHub Pages hosting.

1. Sign in at [Vercel](https://vercel.com/dashboard) and open the portfolio project.
2. Open **Deployments**, select the `v3-portfolio` review branch and click **Visit**. Copy the website address ending in `.vercel.app` to share the preview; the Vercel dashboard address is not the website preview.
3. Review on phone and desktop, including cases, evidence, document-frame placeholders, sector controls, Upcoming Focus and CV downloads. Preview protection may require Vercel sign-in.
4. After owner approval, merge the review branch into `main`. Vercel automatically builds production from `main`.
5. Use a new branch and preview for later substantial edits. Normal content updates are explained in `CONTENT-GUIDE.md`.

For a new Vercel project, import the existing repository, select Astro, leave the root directory unchanged, use `npm run build` and output directory `dist`. No API key, backend, database, login service or paid infrastructure is needed. A custom domain can be added later in Vercel settings.

## Optional local development

Use Node.js 22.12+ or 24 LTS and npm. From this repository:

```sh
npm ci
npm run assets
npm run check
npm run build
npm run dev
```

Development serves on port 4321; `npm run preview` serves the static build. In the Codex cloud environment, set `ASTRO_TELEMETRY_DISABLED=1` before Astro commands and use `npm ci --cache /workspace/.npm` to avoid restricted home-directory writes. Use the existing isolated checkout; do not create a worktree unless requested.

## Structure

- `src/data/profile.json`: positioning, proof, five expertise areas, About, credentials and contact details.
- `src/content/cases/*.md`: structured summaries, context, challenge, contribution, evidence, deliverables and future visual slots.
- `src/content/experience/*.md`: two business-facing data/analytics engagements.
- `src/content/focus/assignment.md`: upcoming/current/hidden status and editable focus content.
- `src/content.config.ts`: schema validation, including sector names and image alt text.
- `src/components/CaseExpansion.astro`: the common inline case structure.
- `src/components/EvidenceList.astro`: metrics with directly linked qualifications.
- `src/components/Focus.astro`: status-driven focus display.
- `src/scripts/portfolio.ts`: lightweight case and sector controls.
- `public/cv/Narjiss_Berrazi_CV.pdf`: the approved one-page CV, unchanged in V3.
- `public/images/`: original portrait and optimised variants.
- `QA-REPORT.md`: tested capabilities and limitations.

## Content and interaction

There are three flagship cases and two broader-experience entries. Filters sit directly above work, show matching cases/experience/visible focus entries and preserve keyboard focus without forced scrolling. Sectors with no entries show an honest empty state. Each flagship has two or three labelled future visual slots; optional image/alt fields allow later anonymised visuals without changing components. No client screenshots are fabricated.

Case buttons retain `aria-expanded`, focus and reduced-motion behavior. Phone layouts stack the five expertise areas and expanded narratives. Print reveals the three case narratives and retains education, languages, credentials and visible focus.

## Confidentiality and privacy

Only approved generic organisation labels are public; KPMG is named as employer, and the approved external-auditor reference remains in the CSRD contribution. Never put original client documents, real names, dashboards, individual stakeholders or procurement details in this repository.

Noindex meta, disallow-all robots.txt and Vercel X-Robots-Tag reduce indexing; the URL remains public. No advertising trackers, fingerprinting, session replay or analytics are installed. The supplied CV is deliberately not synchronised to the newer V3 project copy until a later approved CV revision.
