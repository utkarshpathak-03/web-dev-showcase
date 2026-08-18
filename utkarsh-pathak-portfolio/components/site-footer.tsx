import { portfolioData } from "@/lib/portfolio-data"

const { personalInfo } = portfolioData

export function SiteFooter() {
  return (
    <footer className="mt-16 flex flex-col gap-2 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </p>
      <a
        href={personalInfo.socials.email}
        className="text-foreground/80 transition-colors hover:text-foreground"
      >
        {personalInfo.email}
      </a>
    </footer>
  )
}
