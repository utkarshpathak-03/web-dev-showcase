import { Mail, MapPin, FileText, ArrowUpRight } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { portfolioData } from "@/lib/portfolio-data"

const { personalInfo } = portfolioData

export function Hero() {
  const links = [
    {
      label: "Email",
      href: personalInfo.socials.email,
      icon: Mail,
      external: false,
    },
    {
      label: "LinkedIn",
      href: personalInfo.socials.linkedin,
      icon: LinkedinIcon,
      external: true,
    },
    {
      label: "GitHub",
      href: personalInfo.socials.github,
      icon: GithubIcon,
      external: true,
    },
  ]

  return (
    <header>
      <div className="flex items-center gap-4">
        <img
          src="/utkarsh-profile-photo.jpeg"
          alt={`Portrait of ${personalInfo.name}`}
          width={112}
          height={112}
          className="size-20 shrink-0 rounded-full object-cover sm:size-28"
        />

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {personalInfo.name}
          </h1>

          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
            <p className="text-base text-muted-foreground">{personalInfo.role}</p>
            <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
              {personalInfo.yoe}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
        {personalInfo.summary}
      </p>

      <nav
        aria-label="Contact and social links"
        className="mt-8 flex flex-wrap items-center gap-2"
      >
        {links.map(({ label, href, icon: Icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-secondary"
          >
            <Icon className="size-4" aria-hidden="true" />
            {label}
          </a>
        ))}

        <a
          href={personalInfo.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <FileText className="size-4" aria-hidden="true" />
          Resume
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      </nav>
    </header>
  )
}
