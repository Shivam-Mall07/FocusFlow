import { ArrowRight, Check, Circle } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const todayItems = [
  { label: 'Complete portfolio', state: 'done' },
  { label: 'Build API integration', state: 'active' },
  { label: 'Review DSA notes', state: 'todo' },
]

export function Showcase() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Your work, without the noise.
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              FocusFlow keeps a single, quiet view of what matters right now—so you always
              know the next meaningful thing to work on.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-4 sm:grid-cols-[1.3fr_1fr]">
            {/* Today card */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:row-span-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                  Today
                </span>
                <span className="rounded-full bg-brand-muted px-2 py-0.5 text-[11px] font-medium text-brand">
                  3 priorities
                </span>
              </div>
              <ul className="mt-4 flex flex-col gap-2.5">
                {todayItems.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background px-3 py-2.5 transition-colors hover:border-brand/40"
                  >
                    {item.state === 'done' && (
                      <span className="flex size-5 items-center justify-center rounded-full bg-brand text-brand-foreground">
                        <Check className="size-3.5" />
                      </span>
                    )}
                    {item.state === 'active' && (
                      <span className="flex size-5 items-center justify-center rounded-full border border-brand text-brand">
                        <ArrowRight className="size-3" />
                      </span>
                    )}
                    {item.state === 'todo' && (
                      <span className="flex size-5 items-center justify-center rounded-full border border-border text-muted-foreground">
                        <Circle className="size-2 fill-current" />
                      </span>
                    )}
                    <span
                      className={
                        item.state === 'done'
                          ? 'text-sm text-muted-foreground line-through'
                          : 'text-sm font-medium'
                      }
                    >
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Focus insight card */}
            <div className="flex flex-col justify-between rounded-2xl border border-brand/30 bg-brand-muted p-5 text-foreground shadow-[0_0_40px_-16px_var(--brand)] sm:row-span-1">
              <span className="text-[11px] font-medium uppercase tracking-widest text-brand">
                Focus insight
              </span>
              <div className="mt-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Your longest uninterrupted session was
                </p>
                <p className="mt-1 font-mono text-2xl font-semibold">1h 42m</p>
              </div>
              <p className="mt-4 text-[13px] text-muted-foreground">
                Keep protecting that time.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
