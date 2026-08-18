"use client"

import { useState } from "react"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"

const { projects } = portfolioData

export function Projects() {
  return (
    <section aria-labelledby="projects-heading">
      <SectionHeading id="projects-heading">Projects</SectionHeading>

      <ul className="mt-6 space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </section>
  )
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number]
}) {
  const [open, setOpen] = useState(false)
  const panelId = `project-${project.title.replace(/\s+/g, "-").toLowerCase()}`

  return (
    <li className="rounded-lg border border-border bg-card">
      <div className="flex items-start justify-between gap-4 p-4">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="mt-0.5 text-sm text-pretty text-muted-foreground">
            {project.tagline}
          </p>
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Live
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-2 border-t border-border px-4 py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        {open ? "Hide details" : "Show details"}
        <ChevronDown
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div id={panelId} className="border-t border-border px-4 py-4">
          <ul className="space-y-2">
            {project.details.map((detail, i) => (
              <li
                key={i}
                className="text-sm leading-relaxed text-pretty text-muted-foreground"
              >
                {detail}
              </li>
            ))}
          </ul>

          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded border border-border bg-secondary/40 px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}
