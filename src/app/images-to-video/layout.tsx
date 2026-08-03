import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Images to Video Maker Online",
  description:
    "Turn photos into a video online free. Convert a sequence of images to WebM video. Set frame rate and duration. No uploads, instant download, runs in your browser.",
  alternates: { canonical: "https://squish.urudha.com/images-to-video" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
