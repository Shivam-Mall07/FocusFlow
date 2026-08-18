import { cn } from '@/lib/utils'

export function Logo({ className }) {
  return (
    <span
      className={cn(
        'inline-flex size-7 items-center justify-center rounded-lg bg-brand text-brand-foreground shadow-[0_0_16px_-2px_var(--brand)]',
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="size-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        <path
          d="M12 3.5c4.7 0 8.5 3.8 8.5 8.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 15.5A8.5 8.5 0 0 1 6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
    </span>
  )
}
