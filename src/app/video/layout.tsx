import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Video to Images - Extract Frames Online",
  description:
    "Extract frames from any video online free. Convert video to JPG, PNG or WebP images. Set frame intervals, remove watermarks. Runs in your browser, no uploads.",
  alternates: { canonical: "https://squish.urudha.com/video" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
