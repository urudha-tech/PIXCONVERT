import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WebP Converter",
  description:
    "Bulk convert JPG, PNG, HEIC, AVIF and more to WebP in your browser. Lossless or lossy, custom quality, ZIP output. Nothing uploaded.",
  alternates: { canonical: "https://squish.urudha.com/editor" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
