---
description: "Use when adding a new job/case-study ('trabajo') or client to the Webllope portfolio website. Covers required frontmatter fields, image conversion/naming conventions, and what info to request from the user if missing."
applyTo: "src/content/trabajo/**,src/content/clients/**,src/assets/businessCovers/**,src/assets/logos/**"
---

# Adding a new job ("trabajo") + client

Each portfolio case study is **3 files** working together (content collections in [config.ts](../../src/content/config.ts)):

1. `src/content/trabajo/<slug>-es.md` (required) and `<slug>-en.md` (optional but preferred, create both unless told otherwise)
2. `src/content/clients/<slug>.md` — referenced by the job's `client` field
3. Images: a cover + a gallery of N screenshots + the client logo

`<slug>` must be lowercase, no spaces/dashes (e.g. `andaluzagestiona`), and match the `name` frontmatter field exactly — it's used to resolve gallery image paths at `/src/assets/${name}${i+1}.webp`.

## Info to collect from the user before writing content

If any of these are missing, ask the user instead of inventing them:
- Final website URL
- What the business does + years of experience / key differentiator
- Services/keywords to target for SEO blurb
- **A real client testimonial quote** (message + author name + position) — never fabricate a quote attributed to a real person. If not provided, write the files with the quote fields set to a clear `"PENDING: ..."` placeholder and tell the user to fill them in.
- Tags: subset of `webdev`, `cms`, `blockchain`, `seo`, `logo`
- Any screenshots of the live site (for the image gallery) and a Lighthouse score screenshot (optional but common)
- The client's logo file

## Images

All located in `src/assets/` (gallery + logo originals) with subfolders `businessCovers/` and `logos/`.

- **Gallery screenshots**: convert to `.webp` with `cwebp -q 82 <in> -o <name><n>.webp` (quality 82 matches existing assets) and name them `<name>1.webp`, `<name>2.webp`, `<name>3.webp`... in `src/assets/` root. Set `imagesAmount` in the job frontmatter to match the count. These are NOT referenced directly in the markdown — the layout ([case-study-layout.astro](../../src/layouts/case-study-layout.astro)) auto-builds the gallery from `name` + `imagesAmount`.
- **Cover image** (`cover.src` in job frontmatter): lives in `src/assets/businessCovers/`. If no dedicated hero/cover screenshot was supplied, reuse the client logo here (established pattern, e.g. `ginevra`, `haciendadelalamo`, `nutraddition`).
- **Client logo** (`logos.light/dark/markDark` in client frontmatter): lives in `src/assets/logos/`. If only one logo variant is supplied, reuse the same file for `light`, `dark`, and `markDark`.
- **Lighthouse screenshot** (optional, if provided): goes in `public/blogImages/lighthouse-web-<name>.png` and is referenced directly with an `<img>`/`<figure>` tag in the markdown body (not through Astro's image pipeline).

## Job markdown (`trabajo`) frontmatter template

See [config.ts](../../src/content/config.ts) `workCollection` for the Zod schema. Copy the structure of an existing `-es.md`/`-en.md` pair (e.g. [haciendadelalamo-es.md](../../src/content/trabajo/haciendadelalamo-es.md)) exactly — field order and object-literal YAML style (`{ src: ..., alt: ... }`) matter for consistency, not for validation.

Body structure (everything after frontmatter is rendered as the article, gallery is appended automatically after):
1. `## Trabajo de diseño y desarrollo de página web` / `## Web Design and Development Work` — 2-3 paragraphs about the client and the work done, with a `<a href="...">` link to the live site.
2. `## Resultados obtenidos hasta la fecha` / `## Results obtained to this date` (only if a Lighthouse screenshot exists) — a `<figure>` with the lighthouse image and one paragraph describing the scores shown.
3. Ends with `### Diseño` / `### Design` heading and nothing after (image gallery renders below it automatically).

## Client markdown (`clients`) template

See `clientsCollection` in [config.ts](../../src/content/config.ts). Minimal file: `name`, `logos` (light/dark/markDark), `reviews` (array with one `{ en: {role, content}, es: {role, content} }` object — same quote as the job's `quote` field, can differ in role wording).

## Validation

Run `pnpm astro check` after adding files to catch schema/type errors (note: this also triggers a `pnpm install`, which may prompt about ignored build scripts in a fresh environment — that prompt is unrelated to content changes).
