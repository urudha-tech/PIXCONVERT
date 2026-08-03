import type { MetadataRoute } from "next"

const BASE = "https://squish.urudha.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/editor`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/remove-bg`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/pdf`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/image-editor`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/watermark`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/images-to-video`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/video`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/palette`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/exif`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ]

  return routes
}
