import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Plane, i as Ship, n as Truck } from "../_libs/lucide-react.mjs";
import { a as SiteShell, d as extended, h as modes, i as Section, n as Eyebrow, o as capabilities, r as Panel, t as Button } from "./site-shell-CJfQV8K6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/capabilities-B-7gejM1.js
var import_jsx_runtime = require_jsx_runtime();
var icons = [
	Plane,
	Ship,
	Truck
];
function CapabilitiesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "How we help" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-semibold tracking-wide text-cream uppercase sm:text-5xl",
				children: "Core capabilities"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-base leading-relaxed text-muted",
				children: "From the first enquiry to the last mile — procurement, payments, inspection, freight, factory visits, China tours and negotiation, under one roof."
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pt-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-4 md:grid-cols-2",
				children: capabilities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "h-full sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl text-gold",
							children: c.num
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl tracking-wide text-cream uppercase",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: c.body
						})
					]
				}) }, c.num))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			marble: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "How it moves" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-semibold tracking-wide uppercase",
					children: "Air, sea and last mile"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 md:grid-cols-3",
					children: modes.map((m, i) => {
						const Icon = icons[i];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6 text-gold-bright" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-2xl tracking-wide uppercase",
								children: m.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-cream/70",
								children: m.caption
							})
						] }, m.id);
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Beyond sourcing" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-semibold tracking-wide text-cream uppercase",
				children: "Extended capabilities"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
				children: "Specialist units covering the services procurement alone cannot reach."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: extended.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-base font-medium text-cream",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: item.body
				})] }, item.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						children: "Brief a specialist unit"
					})
				})
			})
		] })
	] });
}
//#endregion
export { CapabilitiesPage as component };
