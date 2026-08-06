import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/JsonLd"

const BASE = "https://squish.urudha.com"
const PAGE = `${BASE}/editor`

export const metadata: Metadata = {
  title: "WebP Converter - Bulk Convert JPG PNG HEIC to WebP Free",
  description:
    "Free online WebP converter. Bulk convert JPG, PNG, HEIC, AVIF to WebP. Reduce image size by up to 80%. Lossless or lossy, custom quality, ZIP download. Nothing uploaded.",
  keywords: [
    "webp converter", "convert jpg to webp", "convert png to webp", "convert heic to webp",
    "bulk image converter", "image compressor online", "reduce image size", "free webp converter",
    "online image converter", "compress images online free",
  ],
  alternates: { canonical: PAGE },
  openGraph: {
    title: "WebP Converter - Free Bulk Image Conversion",
    description: "Convert JPG, PNG, HEIC and more to WebP in bulk. Reduce file size by up to 80%. Nothing uploaded.",
    url: PAGE,
    siteName: "Squish",
    images: [{ url: `${BASE}/og-image.png`, width: 1200, height: 630, alt: "Squish WebP Converter" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@urudha",
    creator: "@urudha",
    title: "WebP Converter - Free Bulk Image Conversion",
    description: "Convert JPG, PNG, HEIC and more to WebP in bulk. Nothing uploaded.",
    images: [`${BASE}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Squish WebP Converter",
  url: PAGE,
  applicationCategory: "MultimediaApplication",
  applicationSubCategory: "Image Converter",
  operatingSystem: "Web",
  browserRequirements: "Requires JavaScript",
  description:
    "Bulk convert JPG, PNG, HEIC, AVIF and other image formats to WebP. Reduce image file size by up to 80% with custom quality settings. Runs entirely in your browser.",
  featureList: [
    "Bulk batch conversion",
    "Lossless and lossy modes",
    "Custom quality control",
    "ZIP archive download",
    "HEIC and AVIF support",
    "No file uploads",
  ],
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@id": `${BASE}/#organization` },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "WebP Converter", item: PAGE },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={softwareSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  )
}
