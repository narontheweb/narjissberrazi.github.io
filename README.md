# Narjiss Berrazi — Data & AI transformation portfolio

A one-page Astro + TypeScript editorial portfolio for a Data & AI Transformation Specialist. V8 synchronises the existing V7 portfolio with the final CV: international workstream scale, quantified prioritisation, funded AI strategy, broader engagement metrics and compact firm leadership evidence. The V7 structure, typography and interactions are retained. The downloadable CV is the supplied final PDF, unchanged.

## Browser review and publication

Repository: `narontheweb/narjissberrazi.github.io`, connected to Vercel.

1. Open the portfolio project in [Vercel](https://vercel.com/dashboard).
2. Select `v8-portfolio` in [Deployments](https://vercel.com/narontheweb/narjissberrazi-github-io/deployments) and click **Visit**. The actual preview website URL ends in `.vercel.app`; the deployment dashboard address is not the website URL.
3. Review at normal 100% browser zoom on desktop and phone. Check the CSRD/banking/AI evidence, impact qualification, approval and funding outcome, final CV download, and leadership/education additions inside credentials.
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

- `src/data/profile.json`: unchanged V7 positioning/hero and capabilities, education/distinctions, four certifications, firm contributions, languages and technical levels.
- `src/content/cases/*.md`: CSRD, banking and AI in V8 order, five to six contribution bullets each, quantified evidence, qualifications and compact deliverables.
- `src/content/experience/*.md`: three static supporting engagements with concise descriptions.
- `src/content/focus/assignment.md`: retained as hidden source data; the page does not import or render a focus section.
- `src/components/CaseExpansion.astro`: accessible inline region, contribution lead/detail rendering and real-file-only future visuals.
- `src/components/EvidenceList.astro`: evidence once, numeric emphasis and approved outcome priority.
- `src/scripts/portfolio.ts`: single-open accordion, reading-position preservation, user-scroll interruption, short reveals, scrollspy and optional image preview.
- `public/cv/Narjiss_Berrazi_CV.pdf`: the only public CV asset, byte-for-byte identical to the supplied final `NarjissBerrazi_CV.pdf` for V8.
- `QA-REPORT.md`: observed checks and deployment limits.

## Interaction and layout

All cases start collapsed; opening one closes the previous case. The activated control retains focus and its viewport position while the layout changes. Wheel/touch/scroll-key input settles the remaining reflow and lets the user continue scrolling. Reduced motion is immediate. Hidden/closing regions are excluded from keyboard and assistive access.

Evidence sits in a readable band beneath each summary. Main/project copy remains 16px, with 13px borderless focus metadata/sector labels. Core Expertise keeps its warm neutral background. The dark navy contact footer remains the strongest colour block.

The section order is hero/proof, Core Expertise, Selected Work, Broader Data & Analytics Experience, Education, Skills & Credentials, then the contact footer. There is no How I Work or About section. Broader entries are fully visible articles. Technical Skills use borderless text groups. Leadership & Firm Contributions is a compact subgroup inside credentials. Empty deliverable cards are not rendered; existing real-file-only future-image support is preserved.

## Privacy and confidentiality

Use approved generic organisation labels only. KPMG is the employer. CSRD assurance is described accurately as external limited assurance; the application is credited as co-built with the client's local IT team. The bank impact is an annualised simulation for the 40 prioritised issues. Do not publish client identities, internal documents, original dashboards, individual stakeholders or procurement details.

Noindex meta, disallow-all robots.txt and Vercel X-Robots-Tag reduce indexing; they do not make the URL private. No analytics, advertising trackers, fingerprinting, session replay or live AI model is installed. The supplied final CV is the factual source of truth and is published without alteration, including its contact details and metadata. Internal source documents and older CV assets are not included in the V8 build.
