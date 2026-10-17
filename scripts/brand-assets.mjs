// Render the raster brand assets: node scripts/brand-assets.mjs
// public/favicon.svg -> public/favicon.ico (16, 32, 48px), and the site-wide
// Social Image -> public/images/og-default.png (1200x630). CHROME_PATH picks the browser.
import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer-core";

const ROOT = path.resolve(import.meta.dirname, "..");
const COLORS = {
  background: "#080c0b",
  border: "#262d2a",
  foreground: "#d8e1db",
  muted: "#9aa9a1",
  primary: "#6cd79d",
};

const fontData = (file) =>
  fs.readFileSync(path.join(ROOT, "src/fonts", file)).toString("base64");

const socialImage = `<!doctype html>
<style>
  @font-face {
    font-family: "Plex Mono";
    src: url(data:font/woff2;base64,${fontData("ibm-plex-mono-latin-400-normal.woff2")}) format("woff2");
    font-weight: 400;
  }
  html, body { margin: 0; }
  body {
    box-sizing: border-box;
    width: 1200px;
    height: 630px;
    padding: 88px 96px;
    display: flex;
    flex-direction: column;
    background: ${COLORS.background};
    color: ${COLORS.foreground};
    font-family: "Plex Mono", monospace;
  }
  .cmd { font-size: 30px; color: ${COLORS.muted}; }
  .cmd b { font-weight: 400; color: ${COLORS.primary}; }
  h1 { margin: 36px 0 0; font-size: 92px; font-weight: 400; letter-spacing: -0.01em; line-height: 1.1; }
  h1 span { color: ${COLORS.muted}; }
  .cursor { display: inline-block; width: 0.5em; height: 0.9em; margin-left: 0.1em; vertical-align: -0.08em; background: ${COLORS.primary}; }
  p { margin: 32px 0 0; font-size: 34px; line-height: 1.45; color: ${COLORS.muted}; text-wrap: balance; }
  .domain { margin-top: auto; padding-top: 28px; border-top: 2px solid ${COLORS.border}; font-size: 30px; color: ${COLORS.primary}; }
</style>
<div class="cmd"><b>$</b> whoami</div>
<h1><span>&gt;</span> Marco Machado<i class="cursor"></i></h1>
<p>Software engineer writing for AI builders and operators.</p>
<div class="domain">marcomachado.dev</div>`;

// An ICO file holding PNG images: a 6-byte header, a 16-byte entry per image, then the PNGs.
function ico(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  let offset = 6 + 16 * pngs.length;
  const entries = pngs.map(({ size, data }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size, 0);
    entry.writeUInt8(size, 1);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;
    return entry;
  });
  return Buffer.concat([header, ...entries, ...pngs.map((png) => png.data)]);
}

const browser = await puppeteer.launch({
  ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : { channel: "chrome" }),
  headless: true,
  args: process.getuid?.() === 0 ? ["--no-sandbox"] : [],
});
const page = await browser.newPage();

const svg = fs.readFileSync(path.join(ROOT, "public/favicon.svg"), "utf8");
const pngs = [];
for (const size of [16, 32, 48]) {
  await page.setViewport({ width: size, height: size });
  await page.setContent(
    `<style>html,body{margin:0;background:transparent}</style><img src="data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}" width="${size}" height="${size}">`,
    { waitUntil: "load" },
  );
  pngs.push({ size, data: Buffer.from(await page.screenshot({ omitBackground: true })) });
}
fs.writeFileSync(path.join(ROOT, "public/favicon.ico"), ico(pngs));

await page.setViewport({ width: 1200, height: 630 });
await page.setContent(socialImage, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: path.join(ROOT, "public/images/og-default.png") });

await browser.close();
console.log("Wrote public/favicon.ico and public/images/og-default.png");
