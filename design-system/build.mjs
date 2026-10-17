// Builds the marcomachado.dev design system into design-system/dist/project/.
//
// Sources: hand-authored docs, tokens and previews in design-system/project/, plus the
// site's own components, fonts, brand assets and an Article excerpt. Outputs the full
// file tree a Design System artifact keeps under project/. See design-system/README.md.

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import * as esbuild from "esbuild";
import postcss from "postcss";
import tailwind from "@tailwindcss/postcss";

const ROOT = path.resolve(import.meta.dirname, "..");
const HERE = path.join(ROOT, "design-system");
const DIST = path.join(HERE, "dist");
const OUT = path.join(DIST, "project");
const NAMESPACE = "MarcoMachado";

// Bundle order = the order of the design system's component table.
const COMPONENTS = [
  "PageHeader",
  "SectionHead",
  "ArticleRow",
  "KvSection",
  "ArticleContent",
  "ExternalLink",
  "Subscribe",
  "MainNav",
  "ContactLinks",
  "SiteHeader",
  "SiteFooter",
];

// The sample Article and section shown in the ArticleContent preview.
const SAMPLE_ARTICLE = "content/blog/the-prompt-isnt-the-bottleneck.md";
const SAMPLE_HEADING = "## Context as Infrastructure";
const SAMPLE_PARAGRAPHS = 2;

const ASSETS = {
  "assets/Logos/mm-mark.svg": "public/favicon.svg",
  "assets/Images/og-default.png": "public/images/og-default.png",
};

const git = (...args) =>
  execFileSync("git", args, { cwd: ROOT, encoding: "utf8" }).trim();

function copySources() {
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.cpSync(path.join(HERE, "project"), OUT, { recursive: true });

  const fonts = path.join(OUT, "fonts");
  fs.mkdirSync(fonts, { recursive: true });
  for (const file of fs.readdirSync(path.join(ROOT, "src/fonts"))) {
    if (file.endsWith(".woff2")) {
      fs.copyFileSync(path.join(ROOT, "src/fonts", file), path.join(fonts, file));
    }
  }

  for (const [to, from] of Object.entries(ASSETS)) {
    fs.mkdirSync(path.dirname(path.join(OUT, to)), { recursive: true });
    fs.copyFileSync(path.join(ROOT, from), path.join(OUT, to));
  }
}

async function buildBundle() {
  const shim = (file) => path.join(HERE, "shims", file);
  const aliases = {
    react: shim("react.cjs"),
    "react-dom": shim("react-dom.cjs"),
    "react/jsx-runtime": shim("jsx-runtime.cjs"),
    "react/jsx-dev-runtime": shim("jsx-runtime.cjs"),
    "next/image": shim("next-image.js"),
    "next/link": shim("next-link.js"),
    "next/navigation": shim("next-navigation.js"),
  };
  const filter = new RegExp(
    `^(${Object.keys(aliases).map((name) => name.replace("/", "\\/")).join("|")})$`,
  );

  const result = await esbuild.build({
    entryPoints: [path.join(HERE, "entry.js")],
    bundle: true,
    format: "iife",
    minify: true,
    write: false,
    jsx: "automatic",
    platform: "browser",
    target: "es2020",
    define: { "process.env.NODE_ENV": '"production"' },
    logLevel: "warning",
    plugins: [
      {
        name: "preview-globals",
        setup(build) {
          build.onResolve({ filter }, (args) => ({ path: aliases[args.path] }));
        },
      },
    ],
  });

  const header = `/* @ds-bundle: ${JSON.stringify({
    format: 4,
    namespace: NAMESPACE,
    components: COMPONENTS.map((name) => ({ name })),
  })} */`;
  // Consumers inline the bundle in a <script>, so it must not close or comment it out.
  const js = result.outputFiles[0].text
    .replace(/<\/script/gi, "<\\/script")
    .replace(/<!--/g, "\\x3C!--");
  fs.writeFileSync(path.join(OUT, "components/bundle.js"), `${header}\n${js}`);
}

async function buildStyles() {
  const globals = fs.readFileSync(path.join(ROOT, "src/app/globals.css"), "utf8");
  // globals.css from its dark variant on: the type scale, the @theme mapping, and the base,
  // .article-content and Shiki rules. Colour values are left to the system's tokens.css, and
  // the font stack names the family tokens.css loads instead of next/font's variable.
  const rules = globals
    .slice(globals.indexOf("@custom-variant"))
    .replace(/^ *--[\w-]+: oklch\(.*\n/gm, "")
    .replace("var(--font-mono-var)", '"IBM Plex Mono"');
  if (rules.includes("--font-mono-var")) throw new Error("globals.css font stack not replaced");

  // Same layers and imports as globals.css; the shadcn primitives in ui/ aren't bundled.
  const input = `@layer theme, base, components, utilities, site;
@import "tailwindcss" source(none);
@import "tw-animate-css";
@import "shadcn/tailwind.css";
@import "${path.join(ROOT, "src/styles/site.css")}";
@import "${path.join(ROOT, "src/styles/motion.css")}";
@source "${path.join(ROOT, "src/components")}";
@source not "${path.join(ROOT, "src/components/ui")}";
@source "${path.join(HERE, "project/components")}";
${rules}`;

  const result = await postcss([tailwind({ base: ROOT, optimize: { minify: true } })])
    .process(input, { from: path.join(ROOT, "src/app/design-system.css") });
  if (/<\/style/i.test(result.css)) throw new Error("bundle.css contains </style");
  fs.writeFileSync(
    path.join(OUT, "components/bundle.css"),
    "/* Compiled by Tailwind v4 from src/components/*.tsx, src/styles/site.css and motion.css, and the type scale, base and .article-content rules in src/app/globals.css. */\n" +
      result.css,
  );
}

async function buildArticlePreview() {
  // Run the site's own Markdown pipeline (unified + remark-gfm + Shiki).
  const renderer = path.join(DIST, "markdown.mjs");
  await esbuild.build({
    entryPoints: [path.join(ROOT, "src/lib/markdown.ts")],
    bundle: true,
    platform: "node",
    format: "esm",
    outfile: renderer,
    logLevel: "error",
    banner: {
      js: "import { createRequire as __cr } from 'node:module'; const require = __cr(import.meta.url);",
    },
  });
  const { renderMarkdown } = await import(renderer);
  fs.rmSync(renderer);

  const lines = fs.readFileSync(path.join(ROOT, SAMPLE_ARTICLE), "utf8").split("\n");
  const start = lines.indexOf(SAMPLE_HEADING);
  if (start === -1) throw new Error(`"${SAMPLE_HEADING}" not found in ${SAMPLE_ARTICLE}`);
  const excerpt = lines.slice(start, start + 1 + SAMPLE_PARAGRAPHS * 2).join("\n");
  const markdown = `${excerpt}\n\n\`\`\`bash\nnpm run build && npx wrangler deploy\n\`\`\`\n`;
  const html = await renderMarkdown(markdown);

  fs.writeFileSync(
    path.join(OUT, "components/ArticleContent/preview.html"),
    `<!-- @dsCard group="Content" height=440 subtitle="Real renderMarkdown() output in .article-content" -->
<div id="root" class="p-6"></div>
<script>
const { ArticleContent } = window.${NAMESPACE};
const h = React.createElement;
ReactDOM.createRoot(document.getElementById("root")).render(h(ArticleContent, { html: ${JSON.stringify(html).replaceAll("</", "<\\/")} }));
</script>
`,
  );
}

function stampProvenance() {
  const sha = git("rev-parse", "--short", "HEAD");
  const branch = git("rev-parse", "--abbrev-ref", "HEAD");
  const now = new Date();

  const tokensPath = path.join(OUT, "tokens.json");
  const tokens = JSON.parse(fs.readFileSync(tokensPath, "utf8"));
  tokens.meta.ref = `${branch}@${sha}`;
  tokens.meta.synced = now.toISOString().slice(0, 10);
  fs.writeFileSync(tokensPath, `${JSON.stringify(tokens, null, 2)}\n`);

  const indexPath = path.join(OUT, "design-system.json");
  const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));
  index.lastChange = {
    by: "Marco Machado",
    at: now.toISOString().replace(/\.\d+Z$/, "Z"),
    via: `GitHub · marco-machado/marcomachado-dev@${sha}`,
    note: `Re-synced from ${branch}@${sha}.`,
  };
  fs.writeFileSync(indexPath, `${JSON.stringify(index, null, 2)}\n`);
}

copySources();
await buildBundle();
await buildStyles();
await buildArticlePreview();
stampProvenance();

const files = fs.readdirSync(OUT, { recursive: true, withFileTypes: true })
  .filter((entry) => entry.isFile()).length;
console.log(`Design system built: ${path.relative(ROOT, OUT)} (${files} files)`);
