import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Video to Images",
  description:
    "Extract frames from a video as WebP or PNG images in your browser. Remove watermarks, set frame intervals. No uploads.",
  alternates: { canonical: "https://squish.urudha.com/video" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
