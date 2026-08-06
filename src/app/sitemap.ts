import type { MetadataRoute } from "next"

const BASE = "https://squish.urudha.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                           lastModified: "2026-08-06", changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/editor`,               lastModified: "2026-08-06", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/remove-bg`,            lastModified: "2026-08-06", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/pdf`,                  lastModified: "2026-08-06", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/image-editor`,         lastModified: "2026-08-06", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/watermark`,            lastModified: "2026-08-06", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/images-to-video`,      lastModified: "2026-08-06", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/video`,                lastModified: "2026-08-06", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/palette`,              lastModified: "2026-08-06", changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/exif`,                 lastModified: "2026-08-06", changeFrequency: "monthly", priority: 0.6 },
  ]
}
