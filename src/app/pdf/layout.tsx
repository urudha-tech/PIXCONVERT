import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Images to PDF Converter",
  description:
    "Convert JPG, PNG and photos to PDF free online. Combine multiple images into one PDF, set page sizes, drag to reorder. No uploads, instant download.",
  alternates: { canonical: "https://squish.urudha.com/pdf" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
