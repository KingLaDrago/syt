import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Eyebrow, Panel, Section, SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { schoolSpotlight, whoWeServe } from "@/lib/site-data";

export const Route = createFileRoute("/sectors")({
  component: SectorsPage,
  head: () => ({
    meta: [{ title: "Sectors — OmniQuotient International" }],
  }),
});

function SectorsPage() {
  return (
    <SiteShell>
      <Section>
        <Eyebrow>Who We Serve</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-wide text-cream uppercase sm:text-5xl">
          Industries and institutions we support
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          We work across education, mining, retail, healthcare, agriculture, hospitality, government,
          manufacturing and more — with the same procurement discipline and local visibility.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {whoWeServe.map((item) => (
            <Panel key={item.title} className="h-full">
              <h2 className="font-display text-xl tracking-wide text-gold-bright uppercase">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </Panel>
          ))}
        </div>
      </Section>

      <Section className="border-y border-gold/15 bg-navy">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Sector spotlight</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-wide text-cream uppercase sm:text-4xl">
              Built for schools
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Schools need reliable procurement, fixed timelines and repeatable supply — not a line of
              random enquiries. We support rollouts for devices, uniforms, classroom supplies and
              equipment with one point of contact and a clear budget trail.
            </p>
            <ul className="mt-6 space-y-3">
              {schoolSpotlight.map((line) => (
                <li key={line} className="flex items-start gap-3 rounded-lg border border-gold/15 bg-panel/60 p-3 text-sm text-cream">
                  <Check className="mt-0.5 size-4 text-gold" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8">
              <Link to="/contact">Start an Enquiry</Link>
            </Button>
          </div>
          <Panel className="sm:p-8">
            <p className="font-display text-2xl leading-snug tracking-wide text-cream">
              One calendar. One budget. Hundreds of students equipped without a dozen supplier
              conversations.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Tablets, bags, uniforms and furniture sourced, branded, inspected and delivered before
              term starts.
            </p>
          </Panel>
        </div>
      </Section>
    </SiteShell>
  );
}
