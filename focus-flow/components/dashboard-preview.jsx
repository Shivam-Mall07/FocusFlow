'use client'

import { useEffect, useRef, useState } from 'react'
import {
  BarChart3,
  CheckCircle2,
  FolderKanban,
  LayoutDashboard,
  ListTodo,
  Pause,
  Play,
  Plus,
  Target,
} from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Overview', icon: LayoutDashboard, active: true },
  { label: 'My Tasks', icon: ListTodo, active: false },
  { label: 'Focus', icon: Target, active: false },
  { label: 'Projects', icon: FolderKanban, active: false },
  { label: 'Insights', icon: BarChart3, active: false },
]

const initialTasks = [
  { title: 'Finish portfolio redesign', priority: 'High', when: 'Today' },
  { title: 'Review backend API', priority: 'Medium', when: 'Today' },
  { title: 'Practice DSA', priority: 'Low', when: 'Tomorrow' },
]

const priorityStyles = {
  High: 'bg-brand-muted text-brand',
  Medium: 'bg-accent text-foreground/70',
  Low: 'bg-accent text-muted-foreground',
}

const focusBars = [
  { day: 'Mon', value: 55 },
  { day: 'Tue', value: 82 },
  { day: 'Wed', value: 68 },
  { day: 'Thu', value: 100 },
  { day: 'Fri', value: 78 },
]

const TARGET = 50 * 60 // 50 minutes

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export function DashboardPreview() {
  const [elapsed, setElapsed] = useState(42 * 60 + 18)
  const [running, setRunning] = useState(false)
  const [done, setDone] = useState([])
  const intervalRef = useRef(null)

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setElapsed((prev) => {
          if (prev >= TARGET) {
            setRunning(false)
            return TARGET
          }
          return prev + 1
        })
      }, 1000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [running])

  const progress = Math.min((elapsed / TARGET) * 100, 100)

  const toggleTask = (title) => {
    setDone((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    )
  }

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border bg-card shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_80px_-32px_color-mix(in_oklch,var(--brand),transparent_55%)]">
      {/* Window bar */}
      <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <div className="ml-3 hidden items-center gap-1.5 rounded-md bg-background px-2.5 py-1 text-[11px] text-muted-foreground sm:flex">
          app.focusflow.com
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-48 shrink-0 flex-col gap-1 border-r border-border p-3 md:flex">
          <div className="flex items-center gap-2 px-2 py-1.5">
            <Logo className="size-6" />
            <span className="text-sm font-semibold tracking-tight">FocusFlow</span>
          </div>
          <nav className="mt-2 flex flex-col gap-0.5">
            {navItems.map((item) => (
              <span
                key={item.label}
                className={cn(
                  'flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] transition-colors',
                  item.active
                    ? 'bg-brand-muted font-medium text-brand'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                <item.icon className="size-4" />
                {item.label}
              </span>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="mb-4 flex items-end justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                Good morning
                <span aria-hidden="true"> 👋</span>
              </h3>
              <p className="text-[13px] text-muted-foreground">
                Here&apos;s what deserves your attention today.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-[12px] font-medium text-muted-foreground">
              <Plus className="size-3.5" />
              <span className="hidden sm:inline">New task</span>
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            {/* Task list — click to complete */}
            <div className="flex flex-col gap-2.5">
              {initialTasks.map((task) => {
                const isDone = done.includes(task.title)
                return (
                  <button
                    key={task.title}
                    type="button"
                    onClick={() => toggleTask(task.title)}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-background p-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_0_24px_-10px_var(--brand)]"
                    aria-pressed={isDone}
                  >
                    <span
                      className={cn(
                        'flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors',
                        isDone
                          ? 'border-brand bg-brand text-brand-foreground'
                          : 'border-border text-transparent group-hover:border-brand group-hover:text-brand',
                      )}
                    >
                      <CheckCircle2 className="size-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p
                        className={cn(
                          'truncate text-[13px] font-medium transition-colors',
                          isDone && 'text-muted-foreground line-through',
                        )}
                      >
                        {task.title}
                      </p>
                      <div className="mt-1 flex items-center gap-2">
                        <span
                          className={cn(
                            'rounded-full px-2 py-0.5 text-[10px] font-medium',
                            priorityStyles[task.priority],
                          )}
                        >
                          {task.priority} priority
                        </span>
                        <span className="text-[11px] text-muted-foreground">{task.when}</span>
                      </div>
                    </div>
                    <span className="hidden shrink-0 items-center rounded-md bg-brand px-2.5 py-1 text-[11px] font-medium text-brand-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:inline-flex">
                      {isDone ? 'Done' : 'Start'}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Focus + chart */}
            <div className="flex flex-col gap-4">
              {/* Focus session */}
              <div className="rounded-xl border border-brand/25 bg-brand-muted p-4 shadow-[0_0_40px_-18px_var(--brand)]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium uppercase tracking-widest text-brand">
                    Focus session
                  </span>
                  {running && (
                    <span className="flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground">
                      <span className="size-1.5 animate-pulse rounded-full bg-brand shadow-[0_0_8px_1px_var(--brand)]" />
                      Live
                    </span>
                  )}
                </div>
                <div className="mt-2 font-mono text-3xl font-semibold tabular-nums text-foreground">
                  {formatTime(elapsed)}
                </div>
                <p className="text-[12px] text-muted-foreground">Deep Work</p>

                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-background">
                  <div
                    className="h-full rounded-full bg-brand shadow-[0_0_10px_0_var(--brand)] transition-[width] duration-500 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setRunning((v) => !v)}
                  className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-brand px-3 py-2 text-[13px] font-medium text-brand-foreground shadow-[0_0_20px_-6px_var(--brand)] transition-all hover:-translate-y-px hover:shadow-[0_0_26px_-4px_var(--brand)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  aria-live="polite"
                >
                  {running ? (
                    <>
                      <Pause className="size-3.5" /> Focusing...
                    </>
                  ) : (
                    <>
                      <Play className="size-3.5" /> Start Focus
                    </>
                  )}
                </button>
              </div>

              {/* Focus time chart */}
              <div className="rounded-xl border border-border bg-background p-4">
                <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  Focus time
                </span>
                <div className="mt-3 flex h-20 items-end gap-2">
                  {focusBars.map((bar) => (
                    <div key={bar.day} className="group flex flex-1 flex-col items-center gap-1.5">
                      <div className="flex h-full w-full items-end">
                        <div
                          className="w-full rounded-md bg-brand/70 transition-all duration-300 group-hover:bg-brand group-hover:shadow-[0_0_14px_-2px_var(--brand)]"
                          style={{ height: `${bar.value}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-muted-foreground">{bar.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
