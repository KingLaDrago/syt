import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { cn } from "@/lib/utils";

export function SiteShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex min-h-screen flex-col bg-navy-deep text-cream", className)}>
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}

export function Section({
  children,
  className,
  id,
  marble = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  marble?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("px-4 py-16 sm:px-6 sm:py-20", marble && "marble", className)}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-[0.28em] text-gold uppercase">
      {children}
    </p>
  );
}

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-gold/20 bg-panel/80 p-5 transition-colors duration-200 hover:border-gold/40 hover:bg-panel/90 sm:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Panel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <Card className={className}>{children}</Card>;
}
