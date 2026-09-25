import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Plane, i as Ship, n as Truck, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as SiteShell, g as promise, h as modes, i as Section, l as company, n as Eyebrow, o as capabilities, r as Panel, t as Button, v as why } from "./site-shell-CJfQV8K6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DXh2LW00.js
var import_jsx_runtime = require_jsx_runtime();
var modeIcons = {
	air: Plane,
	sea: Ship,
	road: Truck
};
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "marble relative overflow-hidden text-cream min-h-screen",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-y-0 right-0 w-1/2 hidden lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/brand/lockup.jpg",
					alt: "OmniQuotient International — We do it all",
					className: "h-full w-full object-cover",
					width: 1400,
					height: 1400
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid w-full min-h-screen items-center gap-10 px-4 py-12 sm:px-6 sm:py-20 lg:grid-cols-12 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: company.subtitle }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 font-display text-4xl leading-[1.12] font-semibold tracking-[0.06em] text-gold-bright uppercase sm:text-6xl lg:text-7xl",
							children: ["One partner", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block text-2xl tracking-[0.28em] text-gold sm:text-3xl",
								children: "We do it all"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg",
							children: "Sourcing to delivery, under one roof — done for you, done right. We connect Zimbabwean and regional buyers to the Chinese supply chain so you manage one relationship, not a dozen suppliers abroad."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									children: ["Start an enquiry ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/capabilities",
									children: "See capabilities"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-10 flex flex-wrap gap-3",
							children: modes.map((m) => {
								const Icon = modeIcons[m.id];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2 rounded-full border border-gold/30 px-3 py-2 text-xs tracking-wide text-cream/80 uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5 text-gold-bright" }), m.label]
								}, m.id);
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-xl border border-gold/20 bg-ink h-full lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/brand/lockup.jpg",
							alt: "OmniQuotient International — We do it all",
							className: "h-full w-full object-cover",
							width: 1400,
							height: 1400
						})
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Company profile" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-semibold tracking-wide text-cream uppercase sm:text-4xl",
				children: "Who we are"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg",
				children: [
					company.name,
					" is a cross-border trading and logistics house headquartered in",
					" ",
					company.headquarters,
					", with direct sourcing operations in ",
					company.sourcing,
					". We source, pay, inspect, ship and deliver — so your team stays focused on the work, not the freight trail."
				]
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "border-y border-gold/15 bg-navy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Our promise" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-semibold tracking-wide text-cream uppercase sm:text-4xl",
					children: "One partner, every step"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 md:grid-cols-3",
					children: promise.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl tracking-wide text-gold-bright uppercase",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: item.body
					})] }, item.title))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "What we deliver" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-semibold tracking-wide text-cream uppercase sm:text-4xl",
				children: "Seven capabilities. One accountable partner."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/capabilities",
					children: ["Full capabilities ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
			children: capabilities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl text-gold",
					children: c.num
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 text-base font-medium text-cream",
					children: c.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: c.body
				})
			] }, c.num))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			marble: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Why OmniQuotient" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-semibold tracking-wide text-cream uppercase sm:text-4xl",
					children: "Your strategic partner"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: why.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border-t border-gold/30 pt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-medium text-cream",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-cream/65",
							children: item.body
						})]
					}, item.title))
				})
			]
		})
	] });
}
//#endregion
export { Home as component };
