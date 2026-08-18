import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 sm:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-brand/25 bg-card px-6 py-16 text-center shadow-[0_0_80px_-40px_var(--brand)] sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(50%_100%_at_50%_0%,color-mix(in_oklch,var(--brand),transparent_45%),transparent_70%)]"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Make room for focused work.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Start with a clearer workspace and see what changes when your attention has
              somewhere to go.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="#top"
                className="group inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand px-6 py-3 text-sm font-medium text-brand-foreground shadow-[0_0_28px_-6px_var(--brand)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_36px_-4px_var(--brand)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Start Focusing
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
