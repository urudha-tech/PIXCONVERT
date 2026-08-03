import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Color Palette Extractor",
  description:
    "Extract dominant colors from any image and export as CSS variables, HEX, or RGB. Free, instant, runs in your browser.",
  alternates: { canonical: "https://squish.urudha.com/palette" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
