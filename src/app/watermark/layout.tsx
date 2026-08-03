import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Add Watermark to Images",
  description:
    "Add text or image watermarks to a batch of photos in your browser. Custom position, opacity, font. No uploads.",
  alternates: { canonical: "https://squish.urudha.com/watermark" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
