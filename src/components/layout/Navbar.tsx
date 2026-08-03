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
  { href: "/image-editor", label: "Image Editor", short: "Edit" },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-30 border-b border-neutral-100 bg-white/90 backdrop-blur-md dark:border-neutral-900 dark:bg-neutral-950/90">
      <div className="flex items-center w-full px-4 sm:px-16 py-2 gap-4 sm:gap-16">

        {/* Brand - pinned left */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0 text-[1.5rem] sm:text-[2rem] text-neutral-900 dark:text-neutral-100 tracking-wide border-2 border-neutral-200 dark:border-neutral-700 rounded-full pl-1 pr-3 py-0.5"
          style={{ fontFamily: "'Abolition', sans-serif" }}
        >
          <div className="h-9 w-9 rounded-full overflow-hidden shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/squish-logo-light.png" alt="Squish logo" className="h-full w-full object-cover dark:hidden" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/squish-logo-dark.png" alt="Squish logo" className="h-full w-full object-cover hidden dark:block" />
          </div>
          <span style={{ transform: "translateY(-3px)", display: "inline-block" }}>SQUISH</span>
        </Link>

        {/* Desktop links - fill remaining space evenly */}
        <div className="hidden sm:flex items-center gap-1 flex-1 min-w-0">
          {links.map(({ href, label, short }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                  active
                    ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                }`}
              >
                <span className="hidden xl:inline">{label}</span>
                <span className="xl:hidden">{short}</span>
              </Link>
            )
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="sm:hidden ml-auto rounded-lg p-1.5 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800 transition-colors"
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
