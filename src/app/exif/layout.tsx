import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "EXIF Viewer - View and Remove Image Metadata",
  description:
    "View EXIF metadata from photos online free. See GPS location, camera settings, timestamps. Strip and remove EXIF data for privacy. No uploads needed.",
  alternates: { canonical: "https://squish.urudha.com/exif" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
