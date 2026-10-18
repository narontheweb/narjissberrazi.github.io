# Narjiss Berrazi — Data & AI transformation portfolio

A one-page Astro + TypeScript editorial portfolio for a Data & AI Transformation Specialist. V4 connects hands-on data/analytics foundations with strategy, Target Operating Model design, governance, implementation, communication and adoption. It retains the established portrait, light visual identity, five expertise areas, three deep flagship cases, credentials and CV integration.

## Browser review and publication

Repository: `narontheweb/narjissberrazi.github.io`, connected to Vercel. The `.github.io` name does not require GitHub Pages hosting.

1. Sign in at [Vercel](https://vercel.com/dashboard) and open the portfolio project.
2. Open **Deployments**, select `v4-portfolio` and click **Visit**. The shareable website URL ends in `.vercel.app`; the Vercel dashboard URL is not the website preview.
3. Review the preview on phone and desktop. Check the new positioning, inline case panels, evidence once, training under Deliverables, automatic sector filters, all three broader entries, Upcoming Focus and CV downloads. Vercel may require sign-in for preview access.
4. Merge into `main` only after owner review and approval. Vercel builds production from `main` automatically.
5. For future substantial edits, use a new branch/preview. See `CONTENT-GUIDE.md` for routine updates.

A new Vercel project uses Astro, repository root, build command `npm run build` and output `dist`. No API key, backend, database, login service or paid infrastructure is required. Add a custom domain later in Vercel settings if desired.

## Optional local development

Use Node.js 22.12+ or 24 LTS and npm:

```sh
npm ci
npm run assets
npm run check
npm run build
npm run dev
```

Development serves on port 4321; `npm run preview` serves the production build. In Codex cloud, set `ASTRO_TELEMETRY_DISABLED=1` before Astro commands and use `npm ci --cache /workspace/.npm` to avoid restricted home-directory writes. Use the existing isolated checkout; do not create a worktree unless requested.

## Content architecture

- `src/data/profile.json`: primary title/descriptor, hero, proof, five expertise areas, About, credentials and contacts.
- `src/content/cases/*.md`: three equally structured flagship cases. Evidence is rendered once in the header; expansion contains Context, Challenge, Contribution, Deliverables and future miniature slots.
- `src/content/experience/*.md`: three broader entries. Sector is optional for genuinely unclassified cross-sector experience; the earlier consulting entry has no assigned sector.
- `src/content/focus/assignment.md`: upcoming/current/hidden status and editable focus content.
- `src/content.config.ts`: field validation, optional nested deliverable topics and miniature-image alt-text requirements.
- `src/components/CaseExpansion.astro`, `EvidenceList.astro`, `Focus.astro`: shared presentation.
- `src/pages/index.astro`: one-page composition and sector filters derived from displayed content.
- `src/scripts/portfolio.ts`: lightweight case toggles and filtering.
- `public/cv/Narjiss_Berrazi_CV.pdf`: unchanged approved one-page PDF.
- `public/images/`: original portrait and optimised variants.
- `QA-REPORT.md`: current verification and deployment limits.

## Filtering and interaction

Only populated sectors are shown. The current filters are All, Public Sector, Banking & Financial Services, Postal & Logistics, and Higher Education & Research. Adding a displayed project/focus item with a new sector automatically adds its filter. Hidden focus entries do not create filters. Unclassified earlier consulting appears under All, without a false sector tag.

Keyboard focus and scroll position are preserved when filtering. Native case buttons expose aria-expanded; phone layouts keep one case open at a time. Reduced motion skips animation. Print reveals case narratives while keeping evidence in one location. Intentional deliverable placeholders remain for a later approved visual-content iteration.

## Privacy and confidentiality

Publish only approved generic organisation labels. KPMG is the employer; the approved external-auditor reference remains in the CSRD contribution. No original client documents, confidential names, individual stakeholders or procurement details belong in the repository.

Noindex meta, disallow-all robots.txt and Vercel X-Robots-Tag reduce indexing without making the URL private. No analytics, advertising trackers, fingerprinting or session replay are installed. The CV has deliberately not been rewritten to match every later website copy revision.
