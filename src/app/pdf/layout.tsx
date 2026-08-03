import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Images to PDF",
  description:
    "Combine multiple images into a single PDF in your browser. Custom page sizes, drag-to-reorder, no server uploads.",
  alternates: { canonical: "https://squish.urudha.com/pdf" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
