import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Menu, o as Phone, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-CJfQV8K6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function LogoMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 100 100",
		className: cn("shrink-0 text-gold-bright", className),
		"aria-hidden": "true",
		fill: "none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			stroke: "currentColor",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "50,6 90,28 90,72 50,94 10,72 10,28",
					strokeWidth: "3.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "50,20 78,36 78,64 50,80 22,64 22,36",
					strokeWidth: "2.6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M50 36 L72 48 L50 60 L28 48 Z",
					strokeWidth: "2.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M50 36 L50 60",
					strokeWidth: "2.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M28 48 L50 80 L72 48",
					strokeWidth: "2.2"
				})
			]
		})
	});
}
function Wordmark({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: compact ? "size-8" : "size-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-[0.82rem] font-semibold tracking-[0.18em] text-gold-bright uppercase sm:text-[0.95rem]",
				children: "OmniQuotient"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 text-[0.58rem] font-medium tracking-[0.32em] text-gold uppercase",
				children: "International"
			})]
		})]
	});
}
var company = {
	name: "OmniQuotient International",
	short: "OmniQuotient",
	tagline: "We do it all",
	subtitle: "China — Zimbabwe Trade, Logistics & Technology Partner",
	headquarters: "Harare, Zimbabwe",
	sourcing: "Shenzhen, China",
	domainNote: "tekquotient.com"
};
var contacts = [
	{
		name: "Enias",
		phone: "+263 734 821 852",
		tel: "+263734821852",
		role: "Zimbabwe"
	},
	{
		name: "Hope",
		phone: "+86 153 0076 0927",
		tel: "+8615300760927",
		role: "China"
	},
	{
		name: "Tafadzwa",
		phone: "+263 785 323 449",
		tel: "+263785323449",
		role: "Zimbabwe"
	},
	{
		name: "Carlton",
		phone: "+263 717 941 776",
		tel: "+263717941776",
		role: "Zimbabwe"
	}
];
var nav = [
	{
		href: "/",
		label: "Home"
	},
	{
		href: "/capabilities",
		label: "Capabilities"
	},
	{
		href: "/sectors",
		label: "Sectors"
	},
	{
		href: "/process",
		label: "How we work"
	},
	{
		href: "/contact",
		label: "Contact"
	}
];
var modes = [
	{
		id: "air",
		label: "By air",
		caption: "Faster. Safer. Global."
	},
	{
		id: "sea",
		label: "By sea",
		caption: "Large volumes. Greater value."
	},
	{
		id: "road",
		label: "By road",
		caption: "Right to your door."
	}
];
var promise = [
	{
		title: "Reach",
		body: "Verified suppliers across every product category in China."
	},
	{
		title: "Trust",
		body: "An on-the-ground team in both China and Zimbabwe — not a broker behind a screen."
	},
	{
		title: "Simplicity",
		body: "One point of contact, one invoice, one line of accountability."
	}
];
var capabilities = [
	{
		num: "01",
		title: "Procurement",
		body: "Direct sourcing from verified Chinese suppliers — any product, any category."
	},
	{
		num: "02",
		title: "Payments",
		body: "We settle supplier invoices via Alipay, WeChat Pay or bank transfer, on your behalf."
	},
	{
		num: "03",
		title: "Shipping",
		body: "Factory to Chinese port, port to Harare (or Lusaka, Johannesburg, Gaborone) by sea or air."
	},
	{
		num: "04",
		title: "Quality inspection",
		body: "Goods reviewed and verified before they ever leave China."
	},
	{
		num: "05",
		title: "Factory visits",
		body: "We visit your supplier in person — or accompany you — and represent your interests directly."
	},
	{
		num: "06",
		title: "China tours",
		body: "Full itinerary, translation and on-the-ground support for business travel to China."
	},
	{
		num: "07",
		title: "Translation & negotiation",
		body: "Mandarin–English interpretation and cross-cultural deal-making, built in."
	}
];
var extended = [
	{
		title: "Branding & customisation",
		body: "Apparel, bags, caps and merchandise — branded and custom-fitted."
	},
	{
		title: "Print & vinyl",
		body: "In-house printing and signage production."
	},
	{
		title: "Camera equipment",
		body: "Specialist sourcing and retail of photographic equipment."
	},
	{
		title: "Construction hardware",
		body: "Concrete-cutting blades and site equipment, sourced and delivered."
	},
	{
		title: "IT & cloud services",
		body: "Microsoft 365, cybersecurity and cloud deployment via TekQuotient."
	}
];
var journey = [
	{
		step: "1",
		title: "Enquiry",
		body: "Share your spec, quantity, budget and timeline."
	},
	{
		step: "2",
		title: "Quotation",
		body: "Verified suppliers. Itemised quote."
	},
	{
		step: "3",
		title: "Payment",
		body: "This quarter we settle payment in China."
	},
	{
		step: "4",
		title: "Inspection",
		body: "Goods checked before dispatch."
	},
	{
		step: "5",
		title: "Shipping",
		body: "Sea or air freight, tracked in transit."
	},
	{
		step: "6",
		title: "Delivery",
		body: "To your door, with aftercare support."
	}
];
var care = [
	"A dedicated point of contact for every order, start to finish.",
	"Itemised, transparent quotations before you commit to anything.",
	"Photo or video verification at the inspection stage, on request.",
	"Shipment tracking from Chinese port to your door.",
	"Direct support after delivery for damage, discrepancy or warranty queries."
];
var industries = [
	{
		title: "Education",
		body: "Learning tablets, computers, school bags and sporting equipment — procured and branded."
	},
	{
		title: "Mining",
		body: "Stone-crushing equipment, gold detectors and safety helmets, sourced and delivered."
	},
	{
		title: "Photography & retail",
		body: "CamQuotient — our retail line, built directly from client demand."
	},
	{
		title: "Fashion & retail",
		body: "Guided factory visits for Harare CBD retailers sourcing stock direct from China."
	},
	{
		title: "IT & cloud",
		body: "TekQuotient — Microsoft 365 deployment, cybersecurity and data-protection setup."
	}
];
var schoolSpotlight = [
	"Learning tablets and computers",
	"School bags, branded to spec",
	"Uniforms and learning materials",
	"Furniture and equipment"
];
var extraSectors = [
	{
		title: "Healthcare",
		body: "Medical equipment, supplies and PPE."
	},
	{
		title: "Agriculture",
		body: "Farming equipment, inputs and irrigation."
	},
	{
		title: "Energy",
		body: "Solar, generators and electricals."
	},
	{
		title: "Hospitality",
		body: "Kitchen equipment, furnishings and supplies."
	},
	{
		title: "Manufacturing",
		body: "Machinery, parts and raw materials."
	},
	{
		title: "Government & NGO",
		body: "Procurement and project support."
	}
];
var why = [
	{
		title: "Direct access to Chinese manufacturers",
		body: "No extra broker layers between you and the factory."
	},
	{
		title: "End-to-end logistics & supply chain support",
		body: "Sourcing, payment, inspection, freight and last mile."
	},
	{
		title: "Multiple sectors & services under one group",
		body: "Trade, logistics, branding, cameras, construction and IT."
	},
	{
		title: "Competitive pricing & better margins",
		body: "Factory-direct buying with one accountable partner."
	},
	{
		title: "Local presence in Zimbabwe and China",
		body: "Teams in Harare and Shenzhen, not a screen in between."
	},
	{
		title: "Trusted, transparent & accountable",
		body: "Itemised quotes, inspection evidence, tracked shipments."
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "marble text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 max-w-sm text-sm leading-relaxed text-cream/70",
							children: [
								"Cross-border trading and logistics. Headquarters in ",
								company.headquarters,
								", sourcing operations in ",
								company.sourcing,
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-lg tracking-wide text-gold-bright uppercase",
							children: "From China to Zimbabwe — we make it happen."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.2em] text-gold-bright uppercase",
						children: "Explore"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.href,
							className: "text-sm text-cream/75 hover:text-cream",
							children: item.label
						}) }, item.href))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.2em] text-gold-bright uppercase",
						children: "Direct lines"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: contacts.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${c.tel}`,
								className: "hover:text-gold-bright",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-cream",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-cream/65",
									children: [
										c.phone,
										" · ",
										c.role
									]
								})]
							})]
						}, c.tel))
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-gold/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-cream/50 sm:flex-row sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					company.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Global reach · Local commitment · TekQuotient group" })]
			})
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors transition-transform duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]", {
	variants: {
		variant: {
			primary: "bg-gold text-ink hover:bg-gold-bright ring-offset-navy-deep",
			outline: "border border-gold/50 bg-transparent text-cream hover:border-gold hover:bg-gold/10 ring-offset-navy-deep",
			dark: "border border-gold/25 bg-panel text-cream hover:border-gold/50 ring-offset-navy-deep",
			ghost: "text-cream hover:bg-cream/5 ring-offset-navy-deep"
		},
		size: {
			default: "h-11 px-5 text-sm",
			lg: "h-12 px-6 text-sm tracking-wide",
			sm: "h-9 px-3 text-xs"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-gold/15 bg-navy-deep/85 text-cream backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					"aria-label": "OmniQuotient International home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { compact: true })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					"aria-label": "Primary",
					children: nav.map((item) => {
						const active = pathname === item.href;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.href,
							className: cn("text-sm tracking-wide transition-colors", active ? "text-gold-bright" : "text-cream/70 hover:text-cream"),
							children: item.label
						}, item.href);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "primary",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Request a quote"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-11 items-center justify-center rounded-md text-cream lg:hidden",
					"aria-expanded": open,
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-gold/15 bg-navy-deep px-4 py-4 lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1",
				"aria-label": "Mobile",
				children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.href,
					onClick: () => setOpen(false),
					className: "flex min-h-11 items-center rounded-md px-3 text-base text-cream",
					children: item.label
				}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-3 w-full",
					variant: "primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						onClick: () => setOpen(false),
						children: "Request a quote"
					})
				})]
			})
		}) : null]
	});
}
function SiteShell({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex min-h-screen flex-col bg-navy-deep text-cream", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Section({ children, className, id, marble = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("px-4 py-16 sm:px-6 sm:py-20", marble && "marble", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl",
			children
		})
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-medium tracking-[0.28em] text-gold uppercase",
		children
	});
}
function Panel({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-lg border border-gold/20 bg-panel/80 p-6 backdrop-blur-sm", className),
		children
	});
}
//#endregion
export { schoolSpotlight as _, SiteShell as a, cn as c, extended as d, extraSectors as f, promise as g, modes as h, Section as i, company as l, journey as m, Eyebrow as n, capabilities as o, industries as p, Panel as r, care as s, Button as t, contacts as u, why as v };
