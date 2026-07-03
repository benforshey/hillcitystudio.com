# hillcitystudio.com

Suzuki Method piano lessons in Lynchburg, VA. A four-page static site built
with [Eleventy](https://www.11ty.dev/).

## Develop

```sh
npm install
npm start        # dev server with live reload
npm run build    # writes the site to _site/
```

## How it works

- Pages are Nunjucks templates in `src/` with plain HTML content inline.
- `src/_includes/layout.njk` is the shared shell (head metadata, header, footer).
- Site-wide values (title, description, canonical URL, recital video URL)
  live in `src/_data/site.json`.
- Styles are one plain CSS file, `src/css/site.css`. Fonts are self-hosted
  woff2 files in `src/fonts/`.
- Images: pages use plain `<img>` tags pointing at `src/assets/images/`.
  At build time, `@11ty/eleventy-img` rewrites them into responsive
  `<picture>` elements (AVIF/WebP/JPEG at several widths). Generated images
  are cached in `.cache/` so rebuilds are fast. If you ever remove the
  plugin, the plain `<img>` tags keep working.
- `src/media/` is copied verbatim to the site root (icons, manifest, video
  poster and captions, social share image).

## The recital video

The 40-minute recital video (~200MB) is intentionally **not** in git and not
part of the build. It is hosted on files.com; the `<video>` tag on the
teacher page points at `recitalVideoUrl` in `src/_data/site.json`.

To update it: upload `spring-2015-recital.mp4` to files.com, get a direct
public link, and paste it into `site.json`. Verify that seeking works in the
browser (the host must support HTTP range requests).
