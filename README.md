# Narjiss Berrazi — portfolio

A one-page editorial Astro + TypeScript portfolio focused on AI transformation, governance, and change & adoption. V2 retains the established homepage design and adds inline case studies, sector navigation, a synthetic Decision Studio, Current Focus, compact credentials and a real CV download.

## View or publish with your browser

The existing repository is `narontheweb/narjissberrazi.github.io`; it is connected to Vercel. The `.github.io` name does not require GitHub Pages hosting.

1. Sign in at [Vercel](https://vercel.com/dashboard) and open the portfolio project.
2. Open **Deployments** and select the deployment for the review branch to view V2 before publication. Vercel may require sign-in for preview deployments.
3. Review the site on phone and desktop, including cases, sector navigation, Studio and CV download.
4. After approval, merge the review branch into `main`. Vercel automatically builds production from `main`.
5. Future browser edits on GitHub should use a new branch and preview for substantial changes. Follow `CONTENT-GUIDE.md` for normal text updates.

For a new Vercel project: import the existing GitHub repository, select Astro, leave the root directory unchanged, use `npm run build` and output directory `dist`, then deploy. The free Hobby tier is sufficient. A custom domain can be added later in project settings.

The site is static: no paid infrastructure, database, API key, authentication service or live AI model. Vercel manages any preview-access protection separately from the site.

## Optional local development

Use Node.js 22.12+ or 24 LTS and npm. From the repository:

```sh
npm ci
npm run assets
npm run test
npm run check
npm run build
npm run dev
```

`dev` serves on port 4321; `preview` serves the production build. In the Codex cloud environment, set `ASTRO_TELEMETRY_DISABLED=1` before Astro commands and use `npm ci --cache /workspace/.npm` to avoid writing into the restricted home directory. Do not create a worktree unless explicitly requested; the existing cloud checkout is isolated.

## Content and code

- `src/data/profile.json`: positioning, About, Current Focus, credentials and contact details.
- `src/content/cases/*.md`: summaries, sector metadata and inline narrative.
- `src/content/experience/*.md`: wider consulting experience and sector mapping.
- `src/data/studio.json`: the eight fictional AI opportunities and scenario flags.
- `src/lib/studio.ts`: deterministic scores, governance and recommendation rules shared by browser/server.
- `src/scripts/`: lightweight client-side controls for cases, sectors and Studio.
- `src/components/Studio.astro`: embedded editorial Studio interface.
- `tests/studio.test.ts`: scenario outcomes, weighting and governance/readiness boundaries.
- `public/cv/Narjiss_Berrazi_CV.pdf`: approved one-page public CV.
- `public/images/`: original portrait and optimised variants.
- `scripts/prepare-assets.mjs`: format conversion and local Manrope preparation.
- `QA-REPORT.md`: tested capabilities and limits.

## Studio decision logic

Positive scores and inverted risk/adoption scores use the approved weighting. Governance overrides ranking. Explicit validation requirements keep predictive maintenance and sustainability reporting at Explore. The customer-service assistant has a declared controlled-pilot exception at 3.7; recruitment screening is deferred for unresolved employment decision risks. The methodology is visible inside the Studio. Recommendations are synthetic decision-support examples and do not substitute for management judgement.

## Privacy and confidentiality

`noindex,nofollow,noarchive`, disallow-all robots.txt and Vercel's `X-Robots-Tag` reduce search indexing. The URL remains public; these are not access controls. Keep client identities, screenshots, original dashboards and source CV documents outside the repository. KPMG is named only as employer. No advertising trackers, fingerprinting or session replay are installed. Analytics remains optional and is not part of V2.

## Accessibility and print

Semantic headings, native controls, visible keyboard focus, live filter/selection feedback, labelled matrix points and an equivalent initiative list are included. Mobile uses the ranked list instead of the scatterplot. Reduced motion disables animation. Print reveals client case narratives and retains the selected Studio initiative, credentials and CV content when separately printed.
