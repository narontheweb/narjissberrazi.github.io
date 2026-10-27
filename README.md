# Narjiss Berrazi — Data & AI transformation portfolio

A one-page Astro + TypeScript editorial portfolio for a Data & AI Transformation Specialist. V6 refines recruiter readability and evidence hierarchy: neutral sections, larger body/metadata type, six end-to-end capabilities, concise ownership-led cases, a single-open accordion, complementary broader experience and a shorter working-style statement.

## Browser review and publication

Repository: `narontheweb/narjissberrazi.github.io`, connected to Vercel.

1. Open the portfolio project in [Vercel](https://vercel.com/dashboard).
2. Select `v6-portfolio` in Deployments and click **Visit**. The actual preview website URL ends in `.vercel.app`; the deployment dashboard address is not the website URL.
3. Review at normal 100% browser zoom on desktop and phone. Check the collapsed recruiter scan, single-open cases, readable contribution bullets, evidence once, neutral colours, scrollspy and CV download.
4. Merge into production `main` only after owner review/approval. Vercel automatically builds production from `main`.
5. Use a new preview branch for substantial later changes. Routine edits are explained in `CONTENT-GUIDE.md`.

A new Vercel project uses Astro, repository root, `npm run build` and output `dist`. The `.github.io` repository name does not require GitHub Pages hosting. No paid infrastructure, database, backend, authentication service or API key is needed.

## Optional local workflow

Use Node.js 22.12+ or 24 LTS:

```sh
npm ci
npm run assets
npm run check
npm run build
npm run dev
```

Development defaults to port 4321; `npm run preview` serves the static build. Check the actual ready message if a requested port is already occupied. In Codex cloud, set `ASTRO_TELEMETRY_DISABLED=1` before Astro commands and use `npm ci --cache /workspace/.npm` to avoid restricted home-directory writes. Use the existing isolated checkout; do not create a worktree unless requested.

## Content architecture

- `src/data/profile.json`: approved positioning/hero, six capabilities, broader heading/copy, working style, credentials, languages and technical levels.
- `src/content/cases/*.md`: three flagship summaries, concise context/challenge, seven ownership-led contribution entries, evidence priority and compact deliverables.
- `src/content/experience/*.md`: unchanged approved broader engagements.
- `src/content/focus/assignment.md`: retained but hidden; enable current status only when actual work/responsibilities can be described.
- `src/components/CaseExpansion.astro`: accessible inline region, contribution lead/detail rendering and real-file-only future visuals.
- `src/components/EvidenceList.astro`: evidence once, numeric emphasis and approved outcome priority.
- `src/scripts/portfolio.ts`: single-open accordion, reading-position preservation, user-scroll interruption, short reveals, scrollspy and optional image preview.
- `public/cv/Narjiss_Berrazi_CV.pdf`: unchanged V5 one-page PDF.
- `QA-REPORT.md`: observed checks and deployment limits.

## Interaction and layout

All cases start collapsed; opening one closes the previous case. The activated control retains focus and its viewport position while the layout changes. Wheel/touch/scroll-key input settles the remaining reflow and lets the user continue scrolling. Reduced motion is immediate. Hidden/closing regions are excluded from keyboard and assistive access.

Evidence sits in a readable band beneath each summary. Main/project copy is 16px, with 13px tags/sector labels; headings retain the prior hierarchy. Core Expertise and How I Work use warm neutral backgrounds. The dark footer remains the strongest colour block.

How I Work uses the full available layout while the focus block is hidden. Empty deliverable cards are not rendered. Future real images need existing public files and descriptive alt text; they retain native-dialog previews without making cases themselves modal.

## Privacy and confidentiality

Use approved generic organisation labels only. KPMG is the employer and the approved auditor reference remains in the reporting case. Do not publish client identities, internal documents, original dashboards, individual stakeholders or procurement details.

Noindex meta, disallow-all robots.txt and Vercel X-Robots-Tag reduce indexing; they do not make the URL private. No analytics, advertising trackers, fingerprinting, session replay or live AI model is installed. The V5 language update remains intact, and V6 does not rewrite the CV.
