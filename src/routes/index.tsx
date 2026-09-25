import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Plane, Ship, Truck } from "lucide-react";
import { Eyebrow, Panel, Section, SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { capabilities, company, modes, promise, why } from "@/lib/site-data";

export const Route = createFileRoute("/")({ component: Home });

const modeIcons = {
  air: Plane,
  sea: Ship,
  road: Truck,
};

const featuredCapabilities = capabilities.slice(0, 4);

function Home() {
  return (
    <SiteShell>
      <section className="marble relative min-h-screen overflow-hidden text-cream">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <img
            src="/brand/lockup.jpg"
            alt="OmniQuotient International — We do it all"
            className="h-full w-full object-cover"
            width={1400}
            height={1400}
          />
        </div>
        <div className="relative mx-auto grid min-h-screen w-full items-center gap-10 px-4 py-12 sm:px-6 sm:py-20 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <Eyebrow>{company.subtitle}</Eyebrow>
            <h1 className="mt-5 font-display text-4xl leading-[1.12] font-semibold tracking-[0.06em] text-gold-bright uppercase sm:text-6xl lg:text-7xl">
              One partner
              <span className="mt-2 block text-2xl tracking-[0.28em] text-gold sm:text-3xl">
                We do it all
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
              Sourcing, inspection, shipping and delivery from China to Zimbabwe — handled end to end,
              with one accountable contact at every step.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Start an Enquiry <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/capabilities">See all capabilities</Link>
              </Button>
            </div>
            <ul className="mt-10 flex flex-wrap gap-3">
              {modes.map((m) => {
                const Icon = modeIcons[m.id];
                return (
                  <li
                    key={m.id}
                    className="flex items-center gap-2 rounded-full border border-gold/30 px-3 py-2 text-xs tracking-wide text-cream/80 uppercase"
                  >
                    <Icon className="size-3.5 text-gold-bright" />
                    {m.label}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="h-full overflow-hidden rounded-xl border border-gold/20 bg-ink lg:hidden">
              <img
                src="/brand/lockup.jpg"
                alt="OmniQuotient International — We do it all"
                className="h-full w-full object-cover"
                width={1400}
                height={1400}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gold/15 bg-navy">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-5 text-sm text-cream/80 sm:px-6 lg:grid-cols-3">
          <div className="rounded-lg border border-gold/15 bg-panel/60 px-4 py-3">
            <p className="text-xs font-medium tracking-[0.22em] text-gold uppercase">Headquarters</p>
            <p className="mt-2 text-base text-cream">Harare, Zimbabwe</p>
          </div>
          <div className="rounded-lg border border-gold/15 bg-panel/60 px-4 py-3">
            <p className="text-xs font-medium tracking-[0.22em] text-gold uppercase">Sourcing office</p>
            <p className="mt-2 text-base text-cream">Shenzhen, China</p>
          </div>
          <div className="rounded-lg border border-gold/15 bg-panel/60 px-4 py-3">
            <p className="text-xs font-medium tracking-[0.22em] text-gold uppercase">Sector reach</p>
            <p className="mt-2 text-base text-cream">Education, mining, retail, healthcare and more</p>
          </div>
        </div>
      </section>

      <Section>
        <Eyebrow>Company profile</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-wide text-cream uppercase sm:text-4xl">
          Who we are
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          {company.name} is a cross-border sourcing and logistics partner built for procurement teams,
          schools, retailers and growing businesses that need a dependable China-to-Zimbabwe route.
          We source, pay, inspect, ship and deliver with a direct line between supplier, freight and
          client.
        </p>
      </Section>

      <Section className="border-y border-gold/15 bg-navy">
        <Eyebrow>Why OmniQuotient</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-wide text-cream uppercase sm:text-4xl">
          Reach. Trust. Simplicity.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {promise.map((item) => (
            <Panel key={item.title} className="h-full">
              <h3 className="font-display text-2xl tracking-wide text-gold-bright uppercase">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </Panel>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {why.map((item) => (
            <span
              key={item.title}
              className="rounded-full border border-gold/20 bg-panel/70 px-3 py-2 text-xs tracking-wide text-cream/80"
            >
              {item.title}
            </span>
          ))}
        </div>

        <p className="mt-8 font-display text-xl tracking-wide text-gold-bright uppercase sm:text-2xl">
          From China to Zimbabwe — we make it happen.
        </p>
      </Section>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-wide text-cream uppercase sm:text-4xl">
              Procurement, payments, shipping and inspection — done as one workflow.
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/capabilities">
              See all capabilities <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredCapabilities.map((c) => (
            <Panel key={c.num} className="h-full">
              <p className="font-display text-xl text-gold">{c.num}</p>
              <h3 className="mt-2 text-base font-medium text-cream">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
            </Panel>
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}
