import { portfolioData } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"

const { skills } = portfolioData

export function Skills() {
  return (
    <section aria-labelledby="skills-heading">
      <SectionHeading id="skills-heading">Technical Expertise</SectionHeading>

      <div className="mt-6 space-y-6">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="grid gap-3 sm:grid-cols-[10rem_1fr] sm:gap-6"
          >
            <h3 className="text-sm font-medium text-foreground/80">{category}</h3>
            <ul className="flex flex-wrap gap-1.5">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
