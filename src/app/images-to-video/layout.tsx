import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Images to Video",
  description:
    "Turn a sequence of images into a WebM video in your browser. Set frame rate and duration. No uploads, instant download.",
  alternates: { canonical: "https://squish.urudha.com/images-to-video" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
