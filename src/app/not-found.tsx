import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"
import { PageCard } from "@/components/layout/PageCard"

export default function NotFound() {
  return (
    <>
      <Navbar />
      <PageCard>
        <div className="mx-auto max-w-lg px-4 py-20 text-center">
          <p className="text-6xl font-semibold text-neutral-200 dark:text-neutral-800 select-none">404</p>
          <h1 className="mt-4 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Page not found
          </h1>
          <p className="mt-2 text-sm text-neutral-500">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors"
            >
              Back to home
            </Link>
            <Link
              href="/editor"
              className="rounded-xl border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900 transition-colors"
            >
              WebP Converter
            </Link>
          </div>
          <div className="mt-10 grid gap-2 sm:grid-cols-2 text-left">
            {[
              { href: "/remove-bg",       label: "Remove Background" },
              { href: "/pdf",             label: "Images to PDF" },
              { href: "/image-editor",    label: "Image Editor" },
              { href: "/watermark",       label: "Add Watermark" },
              { href: "/exif",            label: "EXIF Viewer" },
              { href: "/palette",         label: "Color Palette" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg border border-neutral-100 px-4 py-3 text-sm text-neutral-600 hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-neutral-200 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </PageCard>
    </>
  )
}
