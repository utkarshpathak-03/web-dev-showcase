"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"

const { experience } = portfolioData

export function Experience() {
  return (
    <section aria-labelledby="experience-heading">
      <SectionHeading id="experience-heading">Experience</SectionHeading>

      <p className="mt-2 text-xs text-muted-foreground">
        Hover a role to reveal its details.
      </p>

      <ol className="mt-6 space-y-3">
        {experience.map((job, index) => (
          <ExperienceItem key={`${job.company}-${index}`} job={job} />
        ))}
      </ol>
    </section>
  )
}

function ExperienceItem({ job }: { job: (typeof experience)[number] }) {
  const [open, setOpen] = useState(false)
  const panelId = `exp-${job.company}-${job.period}`.replace(/\s+/g, "-").toLowerCase()

  return (
    <li
      className="group rounded-lg border border-border bg-secondary/20 p-4 transition-colors hover:border-foreground/20 hover:bg-secondary/40"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex={0}
      aria-expanded={open}
      aria-controls={panelId}
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-base font-semibold text-foreground">{job.role}</h3>
        <span className="text-xs text-muted-foreground tabular-nums shrink-0">
          {job.period}
        </span>
      </div>

      <p className="mt-0.5 text-sm text-muted-foreground">
        <span className="text-foreground/90">{job.company}</span>
        <span aria-hidden="true"> · </span>
        Client: {job.client}
      </p>

      <div
        id={panelId}
        className={`grid transition-all duration-300 ease-out ${
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-2.5">
            {job.highlights.map((highlight, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
              >
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 text-foreground/60"
                  aria-hidden="true"
                />
                <span className="text-pretty">{highlight}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
            {job.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded border border-border bg-secondary/40 px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}
