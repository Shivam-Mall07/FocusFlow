import { Reveal } from '@/components/reveal'

const steps = [
  {
    num: '01',
    title: 'Capture',
    description: 'Put your tasks and ideas in one place.',
  },
  {
    num: '02',
    title: 'Focus',
    description: 'Choose one important thing and start a focused session.',
  },
  {
    num: '03',
    title: 'Finish',
    description: 'Review progress and decide what deserves attention next.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-border bg-secondary/40 scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            From scattered to finished, in three steps.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 100}>
              <div className="group glow-hover relative flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <span className="inline-flex size-9 items-center justify-center rounded-lg border border-brand/40 bg-brand-muted font-mono text-sm font-medium text-brand transition-shadow group-hover:shadow-[0_0_16px_-4px_var(--brand)]">
                  {step.num}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
