import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteShell, i as Section, m as journey, n as Eyebrow, r as Panel, s as care, t as Button } from "./site-shell-CJfQV8K6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/process-Ujwzl1OO.js
var import_jsx_runtime = require_jsx_runtime();
function ProcessPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "How we serve you" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-semibold tracking-wide text-cream uppercase sm:text-5xl",
				children: "The client journey"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-base leading-relaxed text-muted",
				children: "Six steps from first message to goods at your door — with inspection evidence and a named contact throughout."
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pt-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: journey.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "h-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl text-gold",
							children: s.step
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl tracking-wide text-cream uppercase",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: s.body
						})
					]
				}) }, s.step))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			marble: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Quality assurance & client care" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-semibold tracking-wide uppercase",
					children: "What to expect"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 max-w-3xl space-y-4",
					children: care.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-l-2 border-gold pl-4 text-sm leading-relaxed text-cream/80",
						children: line
					}, line))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-xs text-cream/50",
					children: "Response times and inspection scope are confirmed per order at quotation stage."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						children: "Start with an enquiry"
					})
				})
			]
		})
	] });
}
//#endregion
export { ProcessPage as component };
