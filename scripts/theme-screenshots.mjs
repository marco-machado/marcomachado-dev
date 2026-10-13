// Screenshot pages in each theme: node scripts/theme-screenshots.mjs <outDir> [themes] [paths] [widths]
// themes/paths/widths are comma lists. Needs a running server at SHOT_BASE_URL (default localhost:3000).
import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer-core";

const [outDir = "shots", themesArg, pathsArg, widthsArg] = process.argv.slice(2);
const BASE = process.env.SHOT_BASE_URL ?? "http://localhost:3000";
const themes = (themesArg ?? "dark,light,terminal,orbital,editorial,command,eclipse,atelier,core,cinematic,abstract").split(",");
const paths = (pathsArg ?? "/").split(",");
const widths = (widthsArg ?? "1440,390").split(",").map(Number);

fs.mkdirSync(outDir, { recursive: true });
const browser = await puppeteer.launch({
  ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : { channel: "chrome" }),
  headless: true,
  args: process.getuid?.() === 0 ? ["--no-sandbox"] : [],
});

for (const theme of themes) {
  for (const p of paths) {
    for (const width of widths) {
      const page = await browser.newPage();
      await page.setViewport({ width, height: 900, deviceScaleFactor: width < 600 ? 2 : 1 });
      await page.evaluateOnNewDocument((t) => localStorage.setItem("theme", t), theme);
      await page.goto(`${BASE}${p}`, { waitUntil: "networkidle0" });
      await page.evaluate(() => document.fonts.ready);
      await new Promise((r) => setTimeout(r, 300));
      const name = `${theme}${p.replace(/\/+$/, "").replace(/[^a-z0-9]+/gi, "_") || "_home"}-${width}.png`;
      await page.screenshot({ path: path.join(outDir, name), fullPage: true });
      console.log(name);
      await page.close();
    }
  }
}
await browser.close();
