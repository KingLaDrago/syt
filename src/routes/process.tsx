import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, Panel, Section, SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { care, journey } from "@/lib/site-data";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
  head: () => ({
    meta: [{ title: "How we work — OmniQuotient International" }],
  }),
});

function ProcessPage() {
  return (
    <SiteShell>
      <Section>
        <Eyebrow>How we serve you</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-wide text-cream uppercase sm:text-5xl">
          The client journey
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Six clear steps from first message to final delivery — with direct communication and a named
          contact throughout.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {journey.map((s) => (
            <Panel key={s.step} className="h-full">
              <p className="font-display text-3xl text-gold">{s.step}</p>
              <h2 className="mt-2 font-display text-2xl tracking-wide text-cream uppercase">
                {s.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </Panel>
          ))}
        </div>
      </Section>

      <Section marble>
        <Eyebrow>Quality assurance & client care</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-wide uppercase">
          What to expect
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {care.map((line) => (
            <Panel key={line} className="h-full">
              <p className="text-sm leading-relaxed text-cream/80">{line}</p>
            </Panel>
          ))}
        </div>
        <p className="mt-8 text-xs text-cream/50">
          Response times, inspection scope and final delivery terms are confirmed per order at the
          quotation stage.
        </p>
        <Button asChild className="mt-8">
          <Link to="/contact">Start an Enquiry</Link>
        </Button>
      </Section>
    </SiteShell>
  );
}
