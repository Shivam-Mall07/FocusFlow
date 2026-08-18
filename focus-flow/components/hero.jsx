import { ArrowRight } from 'lucide-react'
import { DashboardPreview } from '@/components/dashboard-preview'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Brand glow wash on the black background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(55%_55%_at_50%_0%,color-mix(in_oklch,var(--brand),transparent_72%),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,color-mix(in_oklch,var(--border),transparent_35%)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklch,var(--border),transparent_35%)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.15] [mask-image:radial-gradient(70%_50%_at_50%_0%,black,transparent)]"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-[12px] font-medium text-muted-foreground backdrop-blur">
              <span className="size-1.5 rounded-full bg-brand shadow-[0_0_8px_1px_var(--brand)]" />
              A calmer workspace for getting meaningful work done.
            </span>
          </Reveal>

          <Reveal delay={80} as="h1">
            <span className="mt-6 block text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Turn scattered work into focused progress.
            </span>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              FocusFlow brings your tasks, priorities, and focus sessions into one
              intelligent workspace—so you can spend less time organizing work and more
              time finishing it.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="#cta"
                className="group inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand px-5 py-3 text-sm font-medium text-brand-foreground shadow-[0_0_28px_-6px_var(--brand)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_36px_-4px_var(--brand)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Start Focusing
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                See how it works
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={320} className="mt-14 sm:mt-16">
          <div id="product" className="relative scroll-mt-24">
            <DashboardPreview />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
