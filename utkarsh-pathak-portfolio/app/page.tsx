import { Hero } from "@/components/hero"
import { Metrics } from "@/components/metrics"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Hero />

      <div className="mt-12 space-y-16">
        <Metrics />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </div>

      <SiteFooter />
    </main>
  )
}
