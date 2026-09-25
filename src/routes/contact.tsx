import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { type FormEvent, type ReactNode, useMemo, useState } from "react";
import { Eyebrow, Panel, Section, SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { contacts, faq } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: "Contact — OmniQuotient International" }],
  }),
});

const defaultTo = contacts[0];

function digits(tel: string) {
  return tel.replace(/\D/g, "");
}

function AirFreightCalculator() {
  const [weight, setWeight] = useState("0");
  const numericWeight = Number(weight);
  const valid = Number.isFinite(numericWeight) && numericWeight >= 0;
  const estimate = valid ? numericWeight * 20 : 0;

  return (
    <div className="rounded-xl border border-gold/20 bg-panel/80 p-5 sm:p-6">
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
      <p className="mt-4 text-lg font-medium text-gold-bright">Estimated cost: ${valid ? estimate.toFixed(2) : "0.00"}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Estimate for air freight to Harare only. Other destinations, or sea freight (volume-based), on request.
      </p>
    </div>
  );
}

function ContactPage() {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState("");
  const [sent, setSent] = useState(false);

  const message = useMemo(() => {
    return [
      "OmniQuotient enquiry",
      `Name: ${name || "—"}`,
      `Organisation: ${org || "—"}`,
      `Email: ${email || "—"}`,
      `Phone: ${phone || "—"}`,
      "",
      need || "Please call me to discuss a sourcing brief.",
    ].join("\n");
  }, [name, org, email, phone, need]);

  const wa = `https://wa.me/${digits(defaultTo.tel)}?text=${encodeURIComponent(message)}`;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
    window.open(wa, "_blank", "noopener,noreferrer");
  }

  return (
    <SiteShell>
      <Section>
        <Eyebrow>Let’s build together</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-wide text-cream uppercase sm:text-5xl">
          Start an enquiry
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Share a spec, quantity, budget and delivery target. We reply from Harare or Shenzhen with a
          clear quotation and the best route for your order.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6">
            <div className="max-w-xl">
              <AirFreightCalculator />
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <Panel className="space-y-4 sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your name" required>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={fieldClass}
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="Organisation">
                    <input
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      className={fieldClass}
                      autoComplete="organization"
                    />
                  </Field>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Email" required>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={fieldClass}
                      autoComplete="email"
                    />
                  </Field>
                  <Field label="Phone">
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={fieldClass}
                      autoComplete="tel"
                    />
                  </Field>
                </div>
                <Field label="What do you need sourced or shipped?">
                  <textarea
                    value={need}
                    onChange={(e) => setNeed(e.target.value)}
                    rows={5}
                    className={cn(fieldClass, "h-auto min-h-28 py-3")}
                    placeholder="Product, quantity, destination, timeline…"
                  />
                </Field>
                <Button type="submit" className="w-full sm:w-auto" size="lg">
                  <MessageCircle className="size-4" />
                  Start an Enquiry
                </Button>
                {sent ? (
                  <p className="text-sm text-muted">
                    WhatsApp should open with your brief to {defaultTo.name}. If it did not, use a
                    direct line on the right.
                  </p>
                ) : (
                  <p className="text-xs text-muted">
                    Opens WhatsApp to {defaultTo.name} with your details filled in. Nothing is stored on
                    this site.
                  </p>
                )}
              </Panel>
            </form>
          </div>

          <aside className="lg:col-span-5">
            <Panel className="sm:p-8">
              <p className="text-xs font-medium tracking-[0.22em] text-gold-bright uppercase">
                Direct lines
              </p>
              <ul className="mt-6 space-y-5">
                {contacts.map((c) => (
                  <li
                    key={c.tel}
                    className="flex items-start justify-between gap-3 border-b border-gold/15 pb-4 last:border-0"
                  >
                    <div>
                      <p className="font-medium text-cream">{c.name}</p>
                      <p className="text-sm text-muted">{c.role}</p>
                      <a href={`tel:${c.tel}`} className="mt-1 block text-sm text-gold-bright">
                        {c.phone}
                      </a>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={`tel:${c.tel}`}
                        className="inline-flex size-11 items-center justify-center rounded-md border border-gold/25 text-cream hover:bg-gold/10"
                        aria-label={`Call ${c.name}`}
                      >
                        <Phone className="size-4" />
                      </a>
                      <a
                        href={`https://wa.me/${digits(c.tel)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex size-11 items-center justify-center rounded-md border border-gold/25 text-cream hover:bg-gold/10"
                        aria-label={`WhatsApp ${c.name}`}
                      >
                        <MessageCircle className="size-4" />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </Panel>
            <p className="mt-4 text-sm text-muted">
              Headquarters: Harare, Zimbabwe. Sourcing desk: Shenzhen, China.
            </p>
          </aside>
        </div>
      </Section>

      <Section className="pt-0">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-wide text-cream uppercase sm:text-4xl">
          Common questions
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faq.map((item) => (
            <Panel key={item.q} className="h-full">
              <h3 className="text-base font-medium text-cream">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
            </Panel>
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}

const fieldClass =
  "mt-1.5 h-11 w-full rounded-md border border-gold/25 bg-navy-deep px-3 text-sm text-cream outline-none ring-gold/50 placeholder:text-muted/70 focus:ring-2";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm font-medium text-cream">
      {label}
      {required ? <span className="text-gold"> *</span> : null}
      {children}
    </label>
  );
}
