import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as Check } from "../_libs/lucide-react.mjs";
import { _ as schoolSpotlight, a as SiteShell, f as extraSectors, i as Section, n as Eyebrow, p as industries, r as Panel, t as Button } from "./site-shell-CJfQV8K6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sectors-CeJlfXgl.js
var import_jsx_runtime = require_jsx_runtime();
function SectorsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Proven track record" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-semibold tracking-wide text-cream uppercase sm:text-5xl",
				children: "Industries we serve"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-base leading-relaxed text-muted",
				children: "Schools, mines, retailers, photographers and IT programmes — same end-to-end model, different specialist desks."
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pt-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: industries.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-wide text-cream uppercase",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: item.body
				})] }, item.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "border-y border-gold/15 bg-navy",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Sector spotlight" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-semibold tracking-wide text-cream uppercase sm:text-4xl",
						children: "Built for schools"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted",
						children: "Procurement for a school means outfitting hundreds of end-users at once — devices, uniforms, furniture and equipment — on a fixed budget and a fixed term calendar. We have done it before."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3",
						children: schoolSpotlight.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 text-sm text-cream",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 text-gold" }), line]
						}, line))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Brief a school order"
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl leading-snug tracking-wide text-cream",
						children: "One calendar. One budget. Hundreds of students equipped without a dozen supplier conversations."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted",
						children: "Tablets, bags, uniforms and furniture sourced, branded, inspected and delivered before term starts."
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Additional sectors" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-semibold tracking-wide text-cream uppercase",
				children: "More solutions, more opportunities"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: extraSectors.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border-t border-gold/40 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-medium text-cream",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: item.body
					})]
				}, item.title))
			})
		] })
	] });
}
//#endregion
export { SectorsPage as component };
