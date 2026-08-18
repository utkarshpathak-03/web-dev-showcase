import { portfolioData } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"

const { education } = portfolioData

export function Education() {
  return (
    <section aria-labelledby="education-heading">
      <SectionHeading id="education-heading">Education</SectionHeading>

      <ul className="mt-6 space-y-4">
        {education.map((edu) => (
          <li
            key={edu.institution}
            className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <div>
              <h3 className="text-base font-semibold text-foreground">
                {edu.degree}
              </h3>
              <p className="text-sm text-muted-foreground">{edu.institution}</p>
            </div>
            <span className="text-xs text-muted-foreground tabular-nums shrink-0">
              {edu.year}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
