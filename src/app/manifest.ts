import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Squish - Free Online Image Tools",
    short_name: "Squish",
    description:
      "Convert to WebP, remove backgrounds, compress, make PDFs, add watermarks and more. All in your browser. Nothing uploaded.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/squish-logo.jpeg",
        sizes: "any",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
    categories: ["photo", "utilities", "productivity"],
    lang: "en",
    scope: "/",
  }
}
