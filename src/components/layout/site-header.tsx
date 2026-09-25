import { Link, useRouterState } from "@tanstack/react-router";
import { Facebook, Menu, MessageCircle, Music2, X } from "lucide-react";
import { useState } from "react";
import { Wordmark } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { nav, socialLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const socialIcons = {
  whatsapp: MessageCircle,
  facebook: Facebook,
  tiktok: Music2,
} as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/15 bg-navy-deep/85 text-cream backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-[4.5rem] sm:px-6">
        <Link to="/" aria-label="OmniQuotient International home">
          <Wordmark compact />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm tracking-wide transition-colors",
                  active ? "text-gold-bright" : "text-cream/70 hover:text-cream",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="inline-flex size-9 items-center justify-center rounded-md border border-gold/20 text-cream/80 transition-colors hover:border-gold/40 hover:text-gold-bright"
              >
                <Icon className="size-4" />
              </a>
            );
          })}
          <Button asChild variant="primary" size="sm">
            <Link to="/contact">Start an Enquiry</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md text-cream lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-gold/15 bg-navy-deep px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-md px-3 text-base text-cream"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center gap-2">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="inline-flex size-10 items-center justify-center rounded-md border border-gold/20 text-cream/80"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
            <Button asChild className="mt-3 w-full" variant="primary">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Start an Enquiry
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
