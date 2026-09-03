/**
 * Static page generator.
 *
 * Every page except index.html used to be an empty shell filled in at runtime
 * by content-pages.js. Crawlers and social scrapers do not run JavaScript, so
 * they saw a bare <main> and an identical "Technumen" title on all of them.
 *
 * This script renders the same markup at build time into real static HTML and
 * writes proper per-page SEO tags. It reuses the original render code verbatim
 * (extracted from content-pages.js) so the output cannot drift from it.
 *
 *   node tools/generate-pages.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://technumen.com";
const OG_IMAGE = "images/hero-bg-1.jpg"; // TODO: replace with a purpose-built 1200x630 cover

/* ------------------------------------------------------------------ source -- */
const src = fs.readFileSync(path.join(ROOT, "content-pages.js"), "utf8");

const slice = (from, to, label) => {
  const a = src.indexOf(from);
  if (a < 0) throw new Error("cannot find " + label + " start");
  const b = to ? src.indexOf(to, a) : src.length;
  if (b < 0) throw new Error("cannot find " + label + " end");
  return src.slice(a, b);
};

// page data — the bundler-only image imports become plain paths, which is what
// static HTML wants anyway (Vite rewrites src="" for us)
const pagesLiteral = slice("const pages = {", "\nconst services = [", "pages")
  .replace(/^const pages = /, "")
  .replace(/;\s*$/, "")
  .replace(/\bbadgeSoc2File\b/g, '"images/badge-soc2.png"')
  .replace(/\bbadgeCmmiFile\b/g, '"images/badge-cmmi.png"')
  .replace(/\bbadgeIsoFile\b/g, '"images/badge-iso.jpg"');

const pages = new Function("return (" + pagesLiteral + ")")();

const motionThemes = new Function(
  "return (" + slice("const motionThemes = {", "\nconst motionTheme", "motionThemes")
    .replace(/^const motionThemes = /, "").replace(/;\s*$/, "") + ")"
)();

// the render helpers and the body template, lifted as-is
const helpers = slice("const view = {", 'document.querySelector("[data-page-root]")', "helpers");
const tmplStart = src.indexOf("`", src.indexOf('document.querySelector("[data-page-root]").innerHTML ='));
const tmplEnd = src.indexOf("`;", tmplStart + 1);
if (tmplStart < 0 || tmplEnd < 0) throw new Error("cannot find body template");
const bodyTemplate = src.slice(tmplStart + 1, tmplEnd);

const renderBody = new Function(
  "pageName", "page", "motionTheme",
  helpers + "\nreturn `" + bodyTemplate + "`;"
);

/* --------------------------------------------------------------------- seo -- */
/* Hand-written so each page gets a real, distinct title and description
   rather than a truncated intro. Keep descriptions inside ~155 characters. */
const SEO = {
  "about.html": [
    "About Technumen | AI-Native IT & Business Consulting Since 2016",
    "An AI-native IT and business consulting firm founded in 2016. Insights-driven, outcome-based delivery across 3 global centres and 1,500+ technical experts.",
  ],
  "services.html": [
    "Services | AI, Cloud, Data, Quality & Cyber Security | Technumen",
    "Six service lines built around one belief: AI should change what's possible. Digital applications, cloud, analytics, quality engineering, security and Guidewire.",
  ],
  "service-digital-engineering.html": [
    "Digital Applications & Software Engineering | Technumen",
    "Application development, modernization, enterprise architecture, DevOps and agile delivery — software engineered to scale, not just to launch.",
  ],
  "service-cloud.html": [
    "Cloud Transformation Services | AWS, Azure & GCP | Technumen",
    "Cloud strategy, migration, modernization and 24/7 SLA-backed operations across AWS, Azure and GCP — including data centre services and VDI.",
  ],
  "service-data.html": [
    "Advanced Analytics & Data Engineering | Technumen",
    "Data lakes, lakehouses and real-time streaming with governance built in. Turn scattered enterprise data into intelligence your AI models can trust.",
  ],
  "service-quality.html": [
    "Quality Engineering & AI-Powered Test Automation | Technumen",
    "AI-based testing, intelligent test automation, BIDW test automation and test data management that improve reliability, speed and value.",
  ],
  "service-security.html": [
    "Enterprise Cyber Security & Compliance Services | Technumen",
    "Cloud security, product security, GRC, IAM and 24/7 managed detection and response — built for industries where a breach is a regulatory event.",
  ],
  "guidewire.html": [
    "Guidewire Consulting & P&C Insurance Transformation | Technumen",
    "Guidewire-led core transformation across PolicyCenter, BillingCenter and ClaimCenter, plus our Digital Insurance Accelerator for P&C carriers.",
  ],
  "financial-services.html": [
    "Financial Services Technology & Risk Modernization | Technumen",
    "AI-driven fraud detection, real-time credit risk analytics and core banking modernization with zero-downtime cutover for banks, lenders and fintechs.",
  ],
  "careers.html": [
    "Careers at Technumen | IT Consulting Jobs in US, India & Costa Rica",
    "Join a global network of consultants. Open roles in Guidewire, data engineering, AI/MLOps and cloud security across the US, India and Costa Rica.",
  ],
  "resources.html": [
    "Trust Center | CMMI Level 3, SOC 2 Type 2 & ISO 27001 | Technumen",
    "CMMI SVC Level 3 appraised, SOC 2 Type 2 certified and ISO/IEC 27001:2022 certified. Our security certifications, controls and governance posture.",
  ],
  "contact.html": [
    "Contact Technumen | Offices in New Jersey, Hyderabad & San José",
    "Talk to our team about AI transformation, cloud migration or staffing. Offices in Piscataway NJ, Hyderabad India and San José Costa Rica.",
  ],
  "terms.html": ["Terms of Service | Technumen", "The terms governing your use of technumen.com and the services described on it."],
  "privacy.html": ["Privacy Policy | Technumen", "How Technumen collects, uses and protects personal information."],
  "cookies.html": ["Cookie Policy | Technumen", "How technumen.com uses cookies and similar technologies."],
};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
  .replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function head(file, title, description) {
  const url = SITE + "/" + file;
  return [
    "<!DOCTYPE html>",
    '<html lang="en">',
    "<head>",
    '  <meta charset="UTF-8" />',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    "  <title>" + esc(title) + "</title>",
    '  <meta name="description" content="' + esc(description) + '" />',
    '  <link rel="canonical" href="' + url + '" />',
    '  <link rel="icon" type="image/png" href="./images/technumen-logo.png" />',
    "",
    '  <meta property="og:type" content="website" />',
    '  <meta property="og:site_name" content="Technumen" />',
    '  <meta property="og:title" content="' + esc(title) + '" />',
    '  <meta property="og:description" content="' + esc(description) + '" />',
    '  <meta property="og:url" content="' + url + '" />',
    '  <meta property="og:image" content="' + SITE + "/" + OG_IMAGE + '" />',
    '  <meta property="og:image:width" content="1280" />',
    '  <meta property="og:image:height" content="853" />',
    '  <meta name="twitter:card" content="summary_large_image" />',
    '  <meta name="twitter:title" content="' + esc(title) + '" />',
    '  <meta name="twitter:description" content="' + esc(description) + '" />',
    '  <meta name="twitter:image" content="' + SITE + "/" + OG_IMAGE + '" />',
    "",
    '  <link rel="preconnect" href="https://fonts.googleapis.com" />',
    '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />',
    '  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Urbanist:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />',
    '  <link rel="stylesheet" href="styles.css" />',
    "</head>",
  ].join("\n");
}

/* ------------------------------------------------------------------ chrome -- */
/* header, trust bar and footer come from an existing page so the shared
   chrome stays identical everywhere */
const shell = fs.readFileSync(path.join(ROOT, "about.html"), "utf8");
const bodyOpen = shell.slice(shell.indexOf("<body"), shell.indexOf("  <main"));
const afterMain = shell.slice(shell.indexOf("</main>") + "</main>".length);
const chromeTail = afterMain
  .replace(/\n\s*<script type="module" src="content-pages\.js"><\/script>/, "");

/* --------------------------------------------------------------------- run -- */
const report = [];
for (const [file, page] of Object.entries(pages)) {
  const seo = SEO[file];
  if (!seo) { report.push("SKIP (no SEO entry) " + file); continue; }

  const motionTheme = motionThemes[file];
  const body = renderBody(file, page, motionTheme);

  const html = head(file, seo[0], seo[1]) + "\n" + bodyOpen +
    "  <main>" + body + "  </main>\n" + chromeTail;

  fs.writeFileSync(path.join(ROOT, file), html);
  report.push(file.padEnd(34) + (html.length / 1024).toFixed(1) + " KB   " + seo[0].slice(0, 46));
}
console.log(report.join("\n"));
console.log("\n" + report.filter((r) => !r.startsWith("SKIP")).length + " static pages written");
