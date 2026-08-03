import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Add Watermark to Images Online",
  description:
    "Add text or image watermarks to photos online free. Batch watermark multiple images at once. Custom position, opacity, font size. No uploads, instant results.",
  alternates: { canonical: "https://squish.urudha.com/watermark" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
