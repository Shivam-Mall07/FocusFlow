# FocusFlow

A premium landing page for **FocusFlow** — a fictional intelligent productivity workspace that helps developers and students turn scattered work into focused progress.

> Turn scattered work into focused progress.

## Product concept

FocusFlow brings tasks, priorities, and focus sessions into one calm workspace. The landing page features an interactive product dashboard (with a working focus timer), an honest philosophy section, a feature grid, a product showcase, and a three-step workflow — with no fabricated testimonials, stats, or logos.

## Tech stack

- **Next.js (App Router)** + React 19
- **Tailwind CSS v4** for styling and design tokens
- **lucide-react** for icons
- **Geist** typeface via `next/font`
- Lightweight scroll-reveal + focus-timer interactions (no animation libraries)

## Run locally

```bash
pnpm install   # or: npm install
pnpm dev       # or: npm run dev
pnpm build     # or: npm run build
```

Then open http://localhost:3000.

## Deployment

Deploy to Vercel by clicking **Publish** in v0 
focusflow-s-32b2.vercel.app
. No environment variables are required.

## Structure

```
app/
├── layout.tsx        # fonts, metadata, theme
├── page.tsx          # section composition
└── globals.css       # design tokens
components/
├── navbar.tsx        # sticky, blur-on-scroll, mobile menu
├── hero.tsx
├── dashboard-preview.tsx  # interactive focus timer
├── features.tsx
├── philosophy.tsx
├── showcase.tsx
├── how-it-works.tsx
├── cta.tsx
├── footer.tsx
├── reveal.tsx        # scroll-reveal helper
└── logo.tsx
```
