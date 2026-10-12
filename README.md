# Narjiss Berrazi — portfolio

An editorial, light-mode Astro + TypeScript portfolio focused on AI transformation, governance, and change & adoption. This first phase contains the complete responsive homepage. Work and About in the navigation currently move to homepage sections. Dedicated pages, case studies and interactive synthetic demonstrations belong to later phases.

## Publish using your browser

1. Create a free account at [GitHub](https://github.com), or use your existing account.
2. Create a repository, for example `narjiss-portfolio`. You can also use the existing repository. A `.github.io` repository name does not require GitHub Pages hosting.
3. Use **Add file → Upload files** to upload this project's source folders and root configuration files. Keep the folder structure. Include `public`, `src`, `scripts`, `package.json`, `package-lock.json`, `astro.config.mjs`, `tsconfig.json`, `vercel.json`, and the documentation. Do not upload `node_modules`, `dist`, `.astro`, attachments, source CV documents or secret files. The project fits within GitHub's normal browser file limits.
4. Create a free account at [Vercel](https://vercel.com) and connect GitHub.
5. Choose **Add New → Project** and import the repository. Select Astro if it is not detected automatically. Use `npm run build` as the build command and `dist` as the output directory. Leave the root directory at the repository root.
6. Deploy. Vercel assigns an available URL; no specific subdomain is assumed.
7. For future updates, edit content files on GitHub, commit changes, and Vercel automatically rebuilds. See `CONTENT-GUIDE.md`.
8. Add a custom domain later in Vercel's project settings if desired.

No paid infrastructure, database, API key, or authentication is required. The homepage is static and uses native expandable rows for the secondary experience summaries.

## Optional local Git workflow

Use Node.js 22.12+ or 24 LTS, and npm. In the project folder:

```sh
npm ci
npm run assets
npm run check
npm run build
npm run dev
```

`npm run dev` starts the development server on port 4321. `npm run preview` serves the production build. Commit source and assets; leave generated build and dependency directories ignored. Connect that GitHub repository to Vercel as described above.

## Files

- `src/data/profile.json`: editable professional copy, contact details, sectors and future About-page supporting content.
- `src/content/cases/*.md`: featured work summaries and metadata.
- `src/content/experience/*.md`: additional consulting experience.
- `src/content.config.ts`: content schema validation.
- `src/pages/index.astro`: homepage composition.
- `src/components/`: navigation, footer and CV availability logic.
- `src/styles/global.css`: responsive design tokens and print styles.
- `public/images/`: original portrait and optimised variants.
- `scripts/prepare-assets.mjs`: image-format conversion and locally hosted Manrope font preparation.

## Publication checklist

- Supply the approved one-page PDF at `public/cv/Narjiss_Berrazi_CV.pdf`. Until then, the site says **CV forthcoming**; it never links to a missing PDF. The PowerPoint source is not a public CV and must not be uploaded.
- Keep client work anonymised. No source CV, client logos, original dashboards or internal documents should enter the repository.
- Review the public copy, metric qualifications, desktop/mobile layouts, contact links and portrait.
- Work and About are homepage anchors in this phase. The Decision Studio is explicitly a concept in development.

## Privacy

The site uses a `noindex,nofollow,noarchive` meta tag, a disallow-all `robots.txt`, and an `X-Robots-Tag` response header on Vercel. These reduce indexing; the URL is still public and anyone with it can access the site. Do not publish confidential data.

Analytics is not installed in this foundation phase. Enable Vercel Web Analytics in a later phase if desired; no advertising trackers, session replay or fingerprinting should be added.

## Design and accessibility

Locally hosted Manrope, a warm neutral background, charcoal text and steel-blue accents. Semantic headings, keyboard focus states, a skip link, native disclosures, reduced-motion support and print styles are included. The image is format-converted without facial retouching; its editorial crop is CSS only. Case-study layouts and standalone About print designs will be validated when those pages exist.
