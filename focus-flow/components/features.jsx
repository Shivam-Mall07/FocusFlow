import { Layers, Sparkles, Target, TrendingUp } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const features = [
  {
    num: '01',
    icon: Sparkles,
    title: 'Intelligent Priorities',
    description: 'FocusFlow helps surface the work that matters most.',
  },
  {
    num: '02',
    icon: Target,
    title: 'Deep Work Sessions',
    description: 'Create distraction-free focus sessions around important tasks.',
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Clear Progress',
    description: "See what you've completed and where your attention is going.",
  },
  {
    num: '04',
    icon: Layers,
    title: 'One Calm Workspace',
    description:
      'Tasks, projects and focus sessions stay together instead of being scattered across different tools.',
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 sm:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything you need to focus better.
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Thoughtful building blocks that keep your work organized without getting in the
          way.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <Reveal key={feature.num} delay={i * 80}>
            <div className="group glow-hover flex h-full flex-col rounded-2xl border border-border bg-card p-6 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent text-foreground transition-all group-hover:bg-brand group-hover:text-brand-foreground group-hover:shadow-[0_0_20px_-4px_var(--brand)]">
                  <feature.icon className="size-5" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">{feature.num}</span>
              </div>
              <h3 className="mt-5 text-[15px] font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
