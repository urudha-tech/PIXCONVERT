"use client"

import { type ReactNode } from "react"

export function PageCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-3 sm:mx-[18%] my-6 bg-white dark:bg-neutral-950 rounded-2xl sm:rounded-3xl min-h-[calc(100vh-48px)] overflow-hidden ${className}`}>
      {children}
    </div>
  )
}
