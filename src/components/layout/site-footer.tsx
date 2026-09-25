import { Link } from "@tanstack/react-router";
import { Facebook, MessageCircle, Music2, Phone } from "lucide-react";
import { Wordmark } from "@/components/logo";
import { company, contacts, nav, socialLinks } from "@/lib/site-data";

const socialIcons = {
  whatsapp: MessageCircle,
  facebook: Facebook,
  tiktok: Music2,
} as const;

export function SiteFooter() {
  return (
    <footer className="marble text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Wordmark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
            Cross-border sourcing, financing and logistics support. Headquarters in {company.headquarters},
            sourcing operations in {company.sourcing}.
          </p>
          <p className="mt-4 font-display text-lg tracking-wide text-gold-bright uppercase">
            From China to Zimbabwe — we make it happen.
          </p>
          <div className="mt-5 flex items-center gap-2">
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
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs font-medium tracking-[0.2em] text-gold-bright uppercase">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="text-sm text-cream/75 hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="text-xs font-medium tracking-[0.2em] text-gold-bright uppercase">
            Direct lines
          </p>
          <ul className="mt-4 space-y-3">
            {contacts.map((c) => (
              <li key={c.tel} className="flex items-start gap-3 text-sm">
                <Phone className="mt-0.5 size-4 text-gold" />
                <a href={`tel:${c.tel}`} className="hover:text-gold-bright">
                  <span className="block text-cream">{c.name}</span>
                  <span className="text-cream/65">
                    {c.phone} · {c.role}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-cream/50 sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Harare · Shenzhen · Clear sourcing, tight execution</p>
        </div>
      </div>
    </footer>
  );
}
