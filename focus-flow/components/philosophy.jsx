import { Reveal } from '@/components/reveal'

export function Philosophy() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-28">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-widest text-muted-foreground">
            Designed around one simple idea
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-3xl text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl md:text-4xl">
            Your productivity system shouldn&apos;t become another thing you have to
            manage.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
