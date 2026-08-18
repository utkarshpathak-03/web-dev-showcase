import { portfolioData } from "@/lib/portfolio-data"

const { metrics } = portfolioData

export function Metrics() {
  return (
    <section aria-label="Key impact metrics">
      <div className="grid grid-cols-3 gap-4 rounded-lg border border-border bg-card p-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="text-center">
            <div className="text-2xl font-bold tabular-nums text-foreground sm:text-3xl">
              {metric.value}
            </div>
            <div className="mt-1 text-xs leading-snug text-muted-foreground text-pretty">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
