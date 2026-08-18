'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'mx-auto flex h-16 max-w-6xl items-center justify-between px-4 transition-all duration-300 sm:px-6',
          scrolled &&
            'mt-2 rounded-2xl border border-border/70 bg-background/70 backdrop-blur-xl sm:mx-auto',
        )}
        style={scrolled ? { maxWidth: 'min(72rem, calc(100% - 1rem))' } : undefined}
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <Logo />
          <span className="text-[15px] font-semibold tracking-tight">FocusFlow</span>
        </a>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-1 md:flex">
          <a
            href="#"
            className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Log in
          </a>
          <a
            href="#cta"
            className="inline-flex items-center rounded-lg bg-brand px-3.5 py-2 text-sm font-medium text-brand-foreground shadow-[0_0_20px_-4px_var(--brand)] transition-all hover:-translate-y-px hover:shadow-[0_0_28px_-2px_var(--brand)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-2 mt-2 rounded-2xl border border-border bg-background/95 p-2 shadow-lg backdrop-blur-xl md:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="my-1 h-px bg-border" />
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              Log in
            </a>
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-lg bg-brand px-3.5 py-2.5 text-sm font-medium text-brand-foreground"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
