import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Remove Image Background",
  description:
    "AI-powered background remover that runs entirely in your browser. No uploads, no sign-up. Works on portraits, objects and products.",
  alternates: { canonical: "https://squish.urudha.com/remove-bg" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
