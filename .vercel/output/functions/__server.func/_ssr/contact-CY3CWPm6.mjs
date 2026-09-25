import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Phone, s as MessageCircle } from "../_libs/lucide-react.mjs";
import { a as SiteShell, c as cn, i as Section, n as Eyebrow, r as Panel, t as Button, u as contacts } from "./site-shell-CJfQV8K6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CY3CWPm6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var defaultTo = contacts[0];
function digits(tel) {
	return tel.replace(/\D/g, "");
}
function ContactPage() {
	const [name, setName] = (0, import_react.useState)("");
	const [org, setOrg] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [need, setNeed] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	const message = (0, import_react.useMemo)(() => {
		return [
			"OmniQuotient enquiry",
			`Name: ${name || "—"}`,
			`Organisation: ${org || "—"}`,
			`Email: ${email || "—"}`,
			`Phone: ${phone || "—"}`,
			"",
			need || "Please call me to discuss a sourcing brief."
		].join("\n");
	}, [
		name,
		org,
		email,
		phone,
		need
	]);
	const wa = `https://wa.me/${digits(defaultTo.tel)}?text=${encodeURIComponent(message)}`;
	function onSubmit(e) {
		e.preventDefault();
		setSent(true);
		window.open(wa, "_blank", "noopener,noreferrer");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Let’s build together" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-3 font-display text-4xl font-semibold tracking-wide text-cream uppercase sm:text-5xl",
			children: "Start an enquiry"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-base leading-relaxed text-muted",
			children: "Share a spec, quantity, budget and timeline. We reply from Harare or Shenzhen with an itemised quotation — no commitment until you approve it."
		})
	] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "pt-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				onSubmit,
				className: "space-y-4 lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "space-y-4 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Your name",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									value: name,
									onChange: (e) => setName(e.target.value),
									className: fieldClass,
									autoComplete: "name"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Organisation",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: org,
									onChange: (e) => setOrg(e.target.value),
									className: fieldClass,
									autoComplete: "organization"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "email",
									value: email,
									onChange: (e) => setEmail(e.target.value),
									className: fieldClass,
									autoComplete: "email"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Phone",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: phone,
									onChange: (e) => setPhone(e.target.value),
									className: fieldClass,
									autoComplete: "tel"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "What do you need sourced or shipped?",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: need,
								onChange: (e) => setNeed(e.target.value),
								rows: 5,
								className: cn(fieldClass, "h-auto min-h-28 py-3"),
								placeholder: "Product, quantity, destination, timeline…"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							className: "w-full sm:w-auto",
							size: "lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), "Send via WhatsApp"]
						}),
						sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								"WhatsApp should open with your brief to ",
								defaultTo.name,
								". If it did not, use a direct line on the right."
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								"Opens WhatsApp to ",
								defaultTo.name,
								" in Zimbabwe with your details filled in. Nothing is stored on this site."
							]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "lg:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.22em] text-gold-bright uppercase",
						children: "Direct lines"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-5",
						children: contacts.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start justify-between gap-3 border-b border-gold/15 pb-4 last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-cream",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: c.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${c.tel}`,
									className: "mt-1 block text-sm text-gold-bright",
									children: c.phone
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${c.tel}`,
									className: "inline-flex size-11 items-center justify-center rounded-md border border-gold/25 text-cream hover:bg-gold/10",
									"aria-label": `Call ${c.name}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `https://wa.me/${digits(c.tel)}`,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex size-11 items-center justify-center rounded-md border border-gold/25 text-cream hover:bg-gold/10",
									"aria-label": `WhatsApp ${c.name}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" })
								})]
							})]
						}, c.tel))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted",
					children: "Headquarters: Harare, Zimbabwe. Sourcing desk: Shenzhen, China."
				})]
			})]
		})
	})] });
}
var fieldClass = "mt-1.5 h-11 w-full rounded-md border border-gold/25 bg-navy-deep px-3 text-sm text-cream outline-none ring-gold/50 placeholder:text-muted/70 focus:ring-2";
function Field({ label, required, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm font-medium text-cream",
		children: [
			label,
			required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold",
				children: " *"
			}) : null,
			children
		]
	});
}
//#endregion
export { ContactPage as component };
