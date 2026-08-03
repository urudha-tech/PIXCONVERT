import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "EXIF Viewer - Image Metadata",
  description:
    "View and strip EXIF metadata from images: GPS location, camera settings, timestamps and more. Runs entirely in your browser.",
  alternates: { canonical: "https://squish.urudha.com/exif" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
