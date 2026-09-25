import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, Ship, Truck } from "lucide-react";
import { useState } from "react";
import { Eyebrow, Panel, Section, SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { capabilities, modes, whatWeTrade } from "@/lib/site-data";

export const Route = createFileRoute("/capabilities")({
  component: CapabilitiesPage,
  head: () => ({
    meta: [{ title: "Capabilities — OmniQuotient International" }],
  }),
});

const icons = [Plane, Ship, Truck];

function AirFreightCalculator() {
  const [weight, setWeight] = useState("0");
  const numericWeight = Number(weight);
  const valid = Number.isFinite(numericWeight) && numericWeight >= 0;
  const estimate = valid ? numericWeight * 20 : 0;

  return (
    <div className="mt-6 rounded-xl border border-gold/20 bg-panel/80 p-5 sm:p-6">
      <label className="block text-sm font-medium text-cream">
        Weight (kg)
        <input
          type="number"
          min="0"
          step="0.1"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
          className="mt-2 block w-full rounded-md border border-gold/25 bg-navy-deep px-3 py-3 text-sm text-cream outline-none ring-gold/50 placeholder:text-muted/70 focus:ring-2"
          placeholder="0"
        />
      </label>
      <p className="mt-4 text-lg font-medium text-gold-bright">
        Estimated cost: ${valid ? estimate.toFixed(2) : "0.00"}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Estimate for air freight to Harare only. Other destinations, or sea freight (volume-based), on request.
      </p>
    </div>
  );
}

function CapabilitiesPage() {
  return (
    <SiteShell>
      <Section>
        <Eyebrow>What We Do</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-wide text-cream uppercase sm:text-5xl">
          Core capabilities
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Procurement, payments, shipping, quality checks and supplier support — run under one
          partner and one accountable line of communication.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((c) => (
            <Panel key={c.num} className="h-full">
              <p className="font-display text-2xl text-gold">{c.num}</p>
              <h2 className="mt-2 font-display text-2xl tracking-wide text-cream uppercase">
                {c.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.body}</p>
            </Panel>
          ))}
        </div>
      </Section>

      <Section className="border-y border-gold/15 bg-navy">
        <Eyebrow>What We Trade</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-wide text-cream uppercase">
          Flat trading categories
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {whatWeTrade.map((item) => (
            <Panel key={item.title} className="h-full">
              <h3 className="text-base font-medium text-cream">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </Panel>
          ))}
        </div>
      </Section>

      <Section marble>
        <Eyebrow>How it moves</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-wide uppercase">
          Air, sea and last mile
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {modes.map((m, i) => {
            const Icon = icons[i];
            return (
              <Panel key={m.id} className="h-full">
                <Icon className="size-6 text-gold-bright" />
                <h3 className="mt-4 font-display text-2xl tracking-wide uppercase">{m.label}</h3>
                <p className="mt-2 text-sm text-cream/70">{m.caption}</p>
              </Panel>
            );
          })}
        </div>

        <div className="mt-8 max-w-xl">
          <AirFreightCalculator />
        </div>
      </Section>

      <Section>
        <Eyebrow>Who We Serve</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-wide text-cream uppercase sm:text-4xl">
          Built for real operating needs
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          We work best with businesses, institutions and teams that need predictable sourcing,
          clear communication and goods that arrive on time.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {whatWeTrade.slice(0, 4).map((item) => (
            <Panel key={item.title} className="h-full">
              <h3 className="text-base font-medium text-cream">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </Panel>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild variant="primary">
            <Link to="/sectors">See sectors and client fits</Link>
          </Button>
        </div>
      </Section>
    </SiteShell>
  );
}
