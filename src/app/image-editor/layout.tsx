import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Online Image Editor",
  description:
    "Best free online image editor. Crop, rotate, flip, resize, adjust brightness, contrast and sharpen photos. No download, no sign-up, runs entirely in your browser.",
  alternates: { canonical: "https://squish.urudha.com/image-editor" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
