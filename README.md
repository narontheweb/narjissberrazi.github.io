# Narjiss Berrazi — Data & AI transformation portfolio

A one-page Astro + TypeScript editorial portfolio for a Data & AI Transformation Specialist. V9 refines the existing V8 source: four expertise terms, concise positioning, navigation/hero CV access, comparable evidence, domain-based skills and a minimal footer. The portrait, body-text scale, six capabilities, three-case order and interaction model are preserved. The AI case source and final V8 PDF are unchanged.

## Browser review and publication

Repository: `narontheweb/narjissberrazi.github.io`, connected to Vercel.

1. Open the portfolio project in [Vercel](https://vercel.com/dashboard).
2. Select `v9-portfolio` in [Deployments](https://vercel.com/narontheweb/narjissberrazi-github-io/deployments) and click **Visit**. The actual preview website URL ends in `.vercel.app`; the deployment dashboard address is not the website URL. Deployment reachability must be checked in Vercel when cloud network access is blocked.
3. Review at normal 100% browser zoom on desktop and phone. Check both CV links, quiet expertise strip, CSRD team/scope distinction, short banking evidence, verbatim AI introduction, grouped skills and single LinkedIn contact CTA. [Desktop](review/v9/desktop.png) and [mobile](review/v9/mobile.png) captures show the actual V9 site.
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

- `src/data/profile.json`: V9 hero/expertise strip, unchanged six capabilities, education, four certifications, firm contributions, languages and skills grouped by domain.
- `src/content/cases/*.md`: CSRD, banking and AI in the approved order, five to six contribution bullets each, comparable evidence, qualifications and compact deliverables. The AI file is byte-identical to V8.
- `src/content/experience/*.md`: three static supporting engagements with concise descriptions.
- `src/content/focus/assignment.md`: retained as hidden source data; the page does not import or render a focus section.
- `src/components/CaseExpansion.astro`: accessible inline region, contribution lead/detail rendering and real-file-only future visuals.
- `src/components/EvidenceList.astro`: evidence once, numeric emphasis and approved outcome priority.
- `src/scripts/portfolio.ts`: single-open accordion, reading-position preservation, user-scroll interruption, short reveals, scrollspy and optional image preview.
- `public/cv/Narjiss_Berrazi_CV.pdf`: the only public CV asset, byte-for-byte identical to the supplied final `NarjissBerrazi_CV.pdf` for V8. Navigation and hero download the same PDF.
- `QA-REPORT.md`: observed checks and deployment limits.

## Interaction and layout

All cases start collapsed; opening one closes the previous case. The activated control retains focus and its viewport position while the layout changes. Wheel/touch/scroll-key input settles the remaining reflow and lets the user continue scrolling. Reduced motion is immediate. Hidden/closing regions are excluded from keyboard and assistive access.

Evidence sits in a readable band beneath each summary, with consistent 16px labels. Main/project copy remains 16px, with 13px borderless focus metadata/sector labels. Long banking methodology remains in the expanded contribution, with a short combined-estimate qualification alongside the collapsed metric. Core Expertise keeps its warm neutral background. The dark navy contact band has one LinkedIn CTA; the bottom footer contains only copyright and the factual confidentiality line.

The section order is hero/expertise strip, Core Expertise, Selected Work, Broader Data & Analytics Experience, Education, Skills & Credentials, then the contact footer. Broader entries remain static. Technical Skills use borderless domain groups with accurate scope descriptions. Leadership & Firm Contributions stays inside credentials. No project example assets are published. There is no disclaimer beneath Selected Work and no claim that example assets exist.

## Privacy and confidentiality

Use approved generic organisation labels only. KPMG is the employer. CSRD assurance is described accurately as external limited assurance; the application is credited as co-built with the client's local IT team. The bank impact is an annualised simulation for the 40 prioritised issues. Do not publish client identities, internal documents, original dashboards, individual stakeholders or procurement details.

Noindex meta, disallow-all robots.txt and Vercel X-Robots-Tag reduce indexing; they do not make the URL private. No analytics, advertising trackers, fingerprinting, session replay or live AI model is installed. Internal source documents and older CV assets are not included in the V9 build. The review screenshots are captures of this website, stored outside public build assets.

## CV source clarification

V9 references a final Word CV, but that file was not attached. The earlier V7 Word file predates the supplied final V8 PDF and is not used to roll back newer facts. V9 keeps the final V8 PDF unchanged and preserves its wording for the co-built CSRD reporting application. Verification against a newer final Word source remains outstanding. The Belgian-based team clarification comes explicitly from the V9 brief.
