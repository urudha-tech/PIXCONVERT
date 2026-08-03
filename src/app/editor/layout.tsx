import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WebP Converter",
  description:
    "Free online WebP converter. Bulk convert JPG, PNG, HEIC, AVIF to WebP. Reduce image size by up to 80%. Lossless or lossy, custom quality, ZIP download. Nothing uploaded.",
  alternates: { canonical: "https://squish.urudha.com/editor" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
