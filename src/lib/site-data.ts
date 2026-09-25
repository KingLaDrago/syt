export const company = {
  name: "OmniQuotient International",
  short: "OmniQuotient",
  tagline: "We do it all",
  subtitle: "China — Zimbabwe Trade, Logistics & Technology Partner",
  headquarters: "Harare, Zimbabwe",
  sourcing: "Shenzhen, China",
  domainNote: "tekquotient.com",
};

export const contacts = [
  { name: "Frost", phone: "WeChat +86 153 0076 0927", tel: "+8615300760927", role: "China" },
  { name: "Enias", phone: "+263 73 482 1852", tel: "+263734821852", role: "Zimbabwe" },
  { name: "Tafadzwa", phone: "+263 78 532 3449", tel: "+263785323449", role: "Zimbabwe" },
  { name: "Carl", phone: "+263 71 794 1776", tel: "+263717941776", role: "Zimbabwe" },
] as const;

export const socialLinks = [
  {
    label: "WhatsApp Channel",
    href: "https://whatsapp.com/channel/0029Vb6bTqhD38CJTMYqOd1E",
    icon: "whatsapp",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61579337192347",
    icon: "facebook",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@omniquotient_int",
    icon: "tiktok",
  },
] as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/sectors", label: "Sectors" },
  { href: "/process", label: "How we work" },
  { href: "/contact", label: "Contact" },
] as const;

export const modes = [
  {
    id: "air",
    label: "By air",
    caption: "Fastest route for urgent shipments and smaller consignments.",
  },
  {
    id: "sea",
    label: "By sea",
    caption: "Volume-based movement for larger, cost-sensitive shipments.",
  },
  {
    id: "road",
    label: "By road",
    caption: "Last-mile delivery and regional movement with clearer control.",
  },
] as const;

export const promise = [
  {
    title: "REACH",
    body: "Verified suppliers across every product category in China.",
  },
  {
    title: "TRUST",
    body: "An on-the-ground team in both China and Zimbabwe, not a broker behind a screen.",
  },
  {
    title: "SIMPLICITY",
    body: "One point of contact, one invoice, one line of accountability.",
  },
] as const;

export const capabilities = [
  {
    num: "01",
    title: "Procurement",
    body: "Direct sourcing from verified Chinese suppliers, matched to your spec and budget.",
  },
  {
    num: "02",
    title: "Payments",
    body: "We handle supplier payment arrangements and keep the process clear and traceable.",
  },
  {
    num: "03",
    title: "Shipping",
    body: "Factory to Chinese port and onward to Harare or other destinations by sea or air.",
  },
  {
    num: "04",
    title: "Quality inspection",
    body: "Goods checked before dispatch, with photo and specification verification on request.",
  },
  {
    num: "05",
    title: "Factory visits",
    body: "We visit suppliers in person or accompany you to verify quality, pricing and process.",
  },
  {
    num: "06",
    title: "China tours",
    body: "Travel support, translation and local guidance for business visits to China.",
  },
  {
    num: "07",
    title: "Translation & negotiation",
    body: "Mandarin–English support for clearer quotations, stronger supplier discussions and better deals.",
  },
] as const;

export const whatWeTrade = [
  { title: "Camera & Security Equipment", body: "Cameras, lenses, monitoring systems and security hardware." },
  { title: "Construction & Building Equipment", body: "Site tools, construction hardware and building materials." },
  { title: "Auto Parts & Vehicles", body: "Vehicle parts, spares and commercial transport support." },
  { title: "IT & Cloud Services", body: "Hardware, software and digital setup for business operations." },
  { title: "Health & Bio Products", body: "Medical, hygiene and bio-related products for institutions and clinics." },
  { title: "Printing & Branding", body: "Printing, signage, packaging and branded merch for local businesses." },
  { title: "General Sourcing", body: "Any product, any category — sourced through a direct China network." },
] as const;

export const journey = [
  {
    step: "1",
    title: "Enquiry",
    body: "Share your specification, quantity, budget and delivery target.",
  },
  {
    step: "2",
    title: "Quotation",
    body: "We compare suppliers and confirm a clear itemised quote.",
  },
  {
    step: "3",
    title: "Payment",
    body: "Confirm the order, then pay the agreed amount for that purchase as arranged with the supplier.",
  },
  {
    step: "4",
    title: "Inspection",
    body: "Goods are checked before dispatch, with documentation and verification where needed.",
  },
  {
    step: "5",
    title: "Shipping",
    body: "Air or sea freight is arranged and tracked through to destination.",
  },
  {
    step: "6",
    title: "Delivery",
    body: "Your goods are delivered to site, warehouse or door with follow-up support.",
  },
] as const;

export const care = [
  "Clear communication from first enquiry through to final delivery.",
  "Itemised, transparent quotations before you commit to anything.",
  "Photo or video verification at the inspection stage, on request.",
  "Shipment tracking and direct updates as goods move from China to Zimbabwe.",
  "Follow-up support for damage, discrepancy or product questions after delivery.",
] as const;

export const whoWeServe = [
  {
    title: "Education",
    body: "School devices, furniture, uniforms and learning materials, delivered to term schedules.",
  },
  {
    title: "Mining",
    body: "Gold-crushing equipment, protective gear and site consumables sourced and delivered for mine operations.",
  },
  {
    title: "Photography & Retail",
    body: "Cameras, lighting, accessories and retail stock for studios, shops and dealers.",
  },
  {
    title: "Fashion & Retail",
    body: "Factory access, product review and seasonal sourcing for retail shops and small brands.",
  },
  {
    title: "Healthcare",
    body: "Medical equipment, clinic essentials and hygiene products for community and private care.",
  },
  {
    title: "Agriculture",
    body: "Irrigation, farm tools and agricultural inputs to match field conditions and delivery windows.",
  },
  {
    title: "Energy",
    body: "Solar systems, electricals and backup equipment for homes, businesses and institutions.",
  },
  {
    title: "Hospitality",
    body: "Kitchen, guestroom and service equipment for lodges, restaurants and hospitality venues.",
  },
  {
    title: "Manufacturing",
    body: "Factory inputs, workshop supplies and machine parts for production teams.",
  },
  {
    title: "Government & NGO",
    body: "Procurement support and project sourcing for public and mission-led programmes.",
  },
] as const;

export const schoolSpotlight = [
  "Learning tablets and computers",
  "School bags and branded learning gear",
  "Uniforms, furniture and classroom equipment",
  "Bulk procurement with a fixed timeline and single point of contact",
] as const;

export const why = [
  { title: "Direct access to Chinese manufacturers", body: "No extra broker layers between you and the factory." },
  { title: "Competitive pricing & better margins", body: "Factory-direct buying with clear sourcing and procurement control." },
  { title: "End-to-end logistics support", body: "Sourcing, payment, inspection, freight and delivery in one workflow." },
  { title: "Local presence in Zimbabwe and China", body: "Teams in Harare and Shenzhen, with clear oversight on both sides." },
  { title: "Multiple sectors under one group", body: "Trade, logistics, branding, cameras, construction and IT, all under one partner." },
  { title: "Trusted, transparent & accountable", body: "Clear quotations, documentation and direct communication from start to finish." },
] as const;

export const faq = [
  {
    q: "What payment methods do you accept?",
    a: "We work with bank transfer, WeChat Pay, Alipay and other payment arrangements agreed per order.",
  },
  {
    q: "Is there a minimum order size?",
    a: "Minimums are case-by-case. We quote based on product type, quantity and destination, and we can advise the best route for smaller or larger orders.",
  },
  {
    q: "How long does delivery take?",
    a: "Air freight is faster and is usually better for urgent orders. Sea freight is slower and is better for larger, volume-based shipments. We confirm lead times once the product, quantity and destination are agreed.",
  },
  {
    q: "What happens if an item is damaged or not as described?",
    a: "We document the issue with photos, packing details and supplier communication, then work through the discrepancy and corrective action with the supplier and the freight documents.",
  },
] as const;
