"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"
import { PageCard } from "@/components/layout/PageCard"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <Navbar />
      <PageCard>
        <div className="mx-auto max-w-lg px-4 py-20 text-center">
          <p className="text-6xl font-semibold text-neutral-200 dark:text-neutral-800 select-none">!</p>
          <h2 className="mt-4 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Something went wrong
          </h2>
          <p className="mt-2 text-sm text-neutral-500">
            An unexpected error occurred. Your images are safe — nothing was uploaded.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={reset}
              className="rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors"
            >
              Try again
            </button>
            <Link
              href="/"
              className="rounded-xl border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900 transition-colors"
            >
              Back to home
            </Link>
          </div>
        </div>
      </PageCard>
    </>
  )
}
