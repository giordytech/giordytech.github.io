# GiordyTech

Website for GiordyTech: PC gaming builds, upgrades of old PCs, and hardware and software repairs. Published at
<https://giordytech.github.io/>.

A static Next.js site after [swiftpost-site-template](https://github.com/swiftpostlabs/swiftpost-site-template),
simplified to a single app at the repository root.

## Editing the text

All the site's text is in [`src/content/site.ts`](src/content/site.ts): the name, tagline, contact address and
one entry per service. Photos go in `public/images/` and are referenced as `/images/<file>`.

## Writing blog articles

[`docs/blog/`](docs/blog/README.md) holds the prompts for writing the blog's articles with an AI chat, and how to
use them. The blog section of the site is not built yet.

## Running it locally

Node 24 (see `.nvmrc`) and Yarn 1.22.

```sh
yarn install
yarn dev        # http://localhost:3000, with live reload
yarn build      # the static site in out/
```

Before committing: `yarn lint` and `yarn typecheck`.

## Publishing

Every push to `main` builds the site and publishes `out/` to GitHub Pages
(`.github/workflows/build_and_deploy.yml`). The repository's **Settings → Pages → Source** must be set to
**GitHub Actions**.
