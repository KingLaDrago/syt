import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("shrink-0 text-gold-bright", className)}
      aria-hidden="true"
      fill="none"
    >
      <g stroke="currentColor" strokeLinejoin="round">
        <polygon
          points="50,6 90,28 90,72 50,94 10,72 10,28"
          strokeWidth="3.2"
        />
        <polygon
          points="50,20 78,36 78,64 50,80 22,64 22,36"
          strokeWidth="2.6"
        />
        <path
          d="M50 36 L72 48 L50 60 L28 48 Z"
          strokeWidth="2.2"
        />
        <path d="M50 36 L50 60" strokeWidth="2.2" />
        <path d="M28 48 L50 80 L72 48" strokeWidth="2.2" />
      </g>
    </svg>
  );
}

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className={compact ? "size-8" : "size-10"} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.82rem] font-semibold tracking-[0.18em] text-gold-bright uppercase sm:text-[0.95rem]">
          OmniQuotient
        </span>
        <span className="mt-1 text-[0.58rem] font-medium tracking-[0.32em] text-gold uppercase">
          International
        </span>
      </span>
    </span>
  );
}
