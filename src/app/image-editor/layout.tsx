import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Image Editor",
  description:
    "Crop, rotate, flip, adjust brightness, contrast, sharpen and more. Free online image editor — no uploads, runs in your browser.",
  alternates: { canonical: "https://squish.urudha.com/image-editor" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
