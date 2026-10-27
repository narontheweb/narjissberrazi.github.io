# Narjiss Berrazi — Data & AI transformation portfolio

A one-page Astro + TypeScript editorial portfolio for a Data & AI Transformation Specialist. V5 retains the approved V4 projects while improving visual rhythm, restrained interaction, technical credibility and navigation. It includes six capability areas, three flagship cases, three supporting engagements, How I Work with Upcoming Focus, credentials, grouped technical fluency and a one-page CV.

## Browser review and publication

Repository: `narontheweb/narjissberrazi.github.io`, connected to Vercel. Its `.github.io` name does not require GitHub Pages hosting.

1. Open the portfolio project in [Vercel](https://vercel.com/dashboard).
2. Select the `v5-portfolio` deployment and click **Visit**. Share the actual website address ending in `.vercel.app`, not the deployment dashboard address. Preview protection may require sign-in.
3. Review desktop and phone views, all case controls, navigation states, technical fluency and CV download. Real client visuals have not been added; placeholders remain intentional.
4. Merge into production `main` only after owner review and approval. Vercel automatically builds production from `main`.
5. Use a new preview branch for later substantial changes. See `CONTENT-GUIDE.md` for copy updates.

For a new Vercel project, use Astro, repository root, `npm run build` and output `dist`. No database, backend, API key, authentication service or paid infrastructure is needed.

## Optional local workflow

Use Node.js 22.12+ or 24 LTS and npm:

```sh
npm ci
npm run assets
npm run check
npm run build
npm run dev
```

Development uses port 4321; `npm run preview` serves the production build. In Codex cloud, set `ASTRO_TELEMETRY_DISABLED=1` before Astro commands and use `npm ci --cache /workspace/.npm` to avoid restricted home-directory writes. Use the existing isolated checkout; do not create a worktree unless requested.

## Content and structure

- `src/data/profile.json`: positioning, hero, proof, six capabilities, working style, credentials, technical levels and contacts.
- `src/content/cases/*.md`: validated V4 case wording, unchanged by V5. Evidence renders once per case.
- `src/content/experience/*.md`: unchanged broader-engagement copy; sector metadata remains for labels only.
- `src/content/focus/assignment.md`: upcoming/current/hidden status and approved focus copy.
- `src/components/CaseExpansion.astro`: shared independent inline panels and future miniature triggers.
- `src/components/EvidenceList.astro`: faithful metric wording with blue numeric emphasis.
- `src/components/VisualPreview.astro`: native accessible larger-image preview for future approved visuals.
- `src/scripts/portfolio.ts`: case transitions, one-time reveals, active navigation and future image preview.
- `src/styles/global.css`: original visual tokens plus restrained V5 backgrounds, accents, responsive layout and interaction states.
- `public/cv/Narjiss_Berrazi_CV.pdf`: original one-page PDF with only its language line updated for V5.
- `QA-REPORT.md`: checks performed and remaining deployment limits.

## Interaction

The sticky header highlights Home in hero/expertise, Work in projects/broader experience and About in How I Work/credentials. Native anchor navigation keeps its normal behavior and accounts for header height; scrolling is never hijacked.

Project panels open independently to avoid collapsing content above the reader. Repeated/rapid toggles are supported. Reveals use short opacity/translation effects and do not rely on hidden initial CSS. Reduced motion skips animations and finishes active transitions. Real future miniature images become native-dialog preview buttons; current placeholders remain noninteractive.

Sector controls have been removed. Sector labels remain visible. Desktop capabilities use a 3 × 2 layout, with stacked tablet/phone views. Technical proficiency is expressed through text groups, not charts or ratings.

## Confidentiality and privacy

Publish only approved generic organisation labels; KPMG is named as employer and the approved auditor reference remains in the CSRD case. Do not include real client identities, original dashboards, internal documents, personal stakeholders or procurement details.

The current languages are Dutch, English, French and Arabic (fluent), and German (basic understanding). V5 updates that language list on the site and removes the obsolete language entry from the PDF without changing other CV content.

Noindex meta, disallow-all robots.txt and Vercel X-Robots-Tag reduce indexing without making the URL private. No analytics, advertising trackers, fingerprinting or session replay are installed.
