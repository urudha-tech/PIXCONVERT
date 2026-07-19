"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const links = [
  { href: "/", label: "Convert to WebP", short: "WebP" },
  { href: "/pdf", label: "Images to PDF", short: "PDF" },
  { href: "/video", label: "Video to Images", short: "Vid→Img" },
  { href: "/images-to-video", label: "Images to Video", short: "Img→Vid" },
  { href: "/remove-bg", label: "Remove BG", short: "BG" },
  { href: "/exif", label: "EXIF Viewer", short: "EXIF" },
  { href: "/palette", label: "Color Palette", short: "Palette" },
  { href: "/watermark", label: "Watermark", short: "Mark" },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-30 border-b border-neutral-100 bg-white/80 backdrop-blur-md dark:border-neutral-900 dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand */}
        <Link href="/" className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 shrink-0">
          ImageTools
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-0.5 flex-wrap justify-end">
          {links.map(({ href, label, short }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-lg px-2 py-1.5 text-xs font-medium transition-colors ${
                  active
                    ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                }`}
              >
                <span className="hidden lg:inline">{label}</span>
                <span className="lg:hidden">{short}</span>
              </Link>
            )
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="sm:hidden rounded-lg p-1.5 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden border-t border-neutral-100 dark:border-neutral-900 bg-white dark:bg-neutral-950 px-4 py-2">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}
