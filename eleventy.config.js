import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  // Rewrites plain <img> tags in the built HTML into responsive <picture>
  // elements with generated AVIF/WebP/JPEG sources. Remove this plugin and
  // the site still works — pages reference the original images directly.
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["avif", "webp", "auto"],
    widths: [320, 640, 960, 1280],
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
      },
    },
  });

  eleventyConfig.addPassthroughCopy({ "src/media": "/" });
  eleventyConfig.addPassthroughCopy({ "src/sw.js": "sw.js" });
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
}
