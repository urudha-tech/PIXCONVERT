interface Feature {
  title: string
  body: string
}

interface ToolInfoProps {
  heading: string
  description: string
  features: Feature[]
}

export function ToolInfo({ heading, description, features }: ToolInfoProps) {
  return (
    <div className="mt-16 border-t border-neutral-100 dark:border-neutral-900 pt-10 pb-10">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{heading}</h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-500">{description}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border border-neutral-100 dark:border-neutral-800 px-4 py-4">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{f.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-500">{f.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
