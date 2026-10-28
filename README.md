# Narjiss Berrazi — Data & AI transformation portfolio

A one-page Astro + TypeScript portfolio for a Data & AI Transformation Specialist. V10 is a focused design prototype on V9: large rounded project cards with fact-based typographic compositions, circular arrow controls and inline expansion. Selected Work moves directly below the hero/expertise strip; Core Expertise follows in a lighter layout. All approved profile and case data, remaining sections, portrait assets and CV remain unchanged.

## Browser review and publication

Repository: `narontheweb/narjissberrazi.github.io`, connected to Vercel.

1. Open the portfolio project in [Vercel](https://vercel.com/dashboard).
2. Select `v10-prototype` in [Deployments](https://vercel.com/narontheweb/narjissberrazi-github-io/deployments) and click **Visit**. The actual preview website URL ends in `.vercel.app`; deployment reachability must be checked in Vercel when cloud network access is blocked.
3. Review the actual prototype captures: [desktop cards](review/v10/desktop-work.png), [mobile card](review/v10/mobile-card.png), [expanded project](review/v10/desktop-expanded.png), [full desktop](review/v10/desktop.png) and [full mobile](review/v10/mobile.png). Click any part of a card, use Enter/Space, and verify inline detail and reduced motion before approval.
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

- `src/data/profile.json`: unchanged V9 hero, four expertise keywords, six capabilities and all credentials/contact data.
- `src/content/cases/*.md`: all three files are byte-identical to V9, including every introduction, metric, qualification and contribution.
- `src/content/experience/*.md`: three static supporting engagements with concise descriptions.
- `src/content/focus/assignment.md`: retained as hidden source data; the page does not import or render a focus section.
- `src/components/ProjectCard.astro`: whole-card native button, circular arrow and distinct international-scope/prioritisation/roadmap compositions, derived from existing evidence.
- `src/components/CaseExpansion.astro`: the existing accessible inline region and unchanged narratives, now controlled by ProjectCard.
- `src/components/EvidenceList.astro`: original evidence once per card, with a configurable typographic focal point; no invented values.
- `src/styles/prototype.css`: scoped hero, card and compact-expertise styles using existing colour tokens.
- `src/scripts/portfolio.ts`: single-open accordion, reading-position preservation, user-scroll interruption, short reveals, scrollspy and optional image preview.
- `public/cv/Narjiss_Berrazi_CV.pdf`: the only public CV asset, byte-for-byte identical to the supplied final `NarjissBerrazi_CV.pdf` for V8. Navigation and hero download the same PDF.
- `QA-REPORT.md`: observed checks and deployment limits.

## Interaction and layout

Each card's complete overview is one native button, without nested controls. Clicking the title, composition or circular arrow expands the original details below it on the same page. Enter and Space work natively; aria-expanded/controls, labelled regions and visible focus remain. Opening another card closes the previous one. No project route, new tab or case modal is created.

The activated card retains focus and its reading position during the existing 240ms reflow. Direct scrolling interrupts it; reduced motion is immediate, with no hover movement. Main body copy stays 16px. Oversized 31, 40 and 2-year figures come directly from approved evidence. The bank's ~€11M remains explicitly estimated/annualised and qualified alongside the metric, with its methodology in expanded detail.

The order is hero/expertise keywords, Selected Work, compact Core Expertise, Broader Data & Analytics Experience, Education, Skills & Credentials, contact/footer. Mobile cards place the typographic composition between the project heading and its unchanged description. The header, broader experience, credentials, leadership and footer are unchanged. The current neutral/blue/navy palette is retained; there are no gradients, new project images, dashboard mockups or simulated deliverables. The compositions are abstract typography and geometry, not project artifacts.

## Privacy and confidentiality

Use approved generic organisation labels only. KPMG is the employer. CSRD assurance is described accurately as external limited assurance; the application is credited as co-built with the client's local IT team. The bank impact is an annualised simulation for the 40 prioritised issues. Do not publish client identities, internal documents, original dashboards, individual stakeholders or procurement details.

Noindex meta, disallow-all robots.txt and Vercel X-Robots-Tag reduce indexing; they do not make the URL private. No analytics, advertising trackers, fingerprinting, session replay or live AI model is installed. Internal source documents and older CV assets are not included in the build. The review screenshots are captures of this website, stored outside public build assets.

## CV source clarification

V9 references a final Word CV, but that file was not attached. The earlier V7 Word file predates the supplied final V8 PDF and is not used to roll back newer facts. V9 keeps the final V8 PDF unchanged and preserves its wording for the co-built CSRD reporting application. Verification against a newer final Word source remains outstanding. The Belgian-based team clarification comes explicitly from the V9 brief.
