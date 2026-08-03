import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Color Palette Extractor from Image",
  description:
    "Extract color palette from any image online free. Get dominant colors as HEX, RGB or CSS variables. Perfect for designers and developers. Instant, no uploads.",
  alternates: { canonical: "https://squish.urudha.com/palette" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
