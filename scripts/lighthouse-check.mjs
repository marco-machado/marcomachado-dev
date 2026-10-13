import lighthouse from "lighthouse";
import puppeteer from "puppeteer-core";

const BASE_URL = process.env.LH_BASE_URL ?? "http://localhost:3000";
const THRESHOLD = 95;

const pages = [
  "/",
  "/about/",
  "/uses/",
  "/ai-tools/",
  "/blog/",
  "/blog/the-prompt-isnt-the-bottleneck/",
];

const categories = ["performance", "accessibility", "seo"];

// CHROME_PATH points at any Chrome or Chromium binary; without it, use installed Chrome.
const browser = await puppeteer.launch({
  ...(process.env.CHROME_PATH
    ? { executablePath: process.env.CHROME_PATH }
    : { channel: "chrome" }),
  headless: true,
  // Chromium refuses to start as root (containers, CI) unless sandboxing is off.
  args: process.getuid?.() === 0 ? ["--no-sandbox"] : [],
});
const warmup = await browser.newPage();
await warmup.goto(`${BASE_URL}/`, { waitUntil: "networkidle0" });
await warmup.close();

let failed = false;

// Every theme by default; LH_THEMES=dark,terminal narrows the run.
const themes = (
  process.env.LH_THEMES ??
  "dark,light,terminal,orbital,editorial,command,eclipse,atelier,core,cinematic,abstract"
).split(",");

for (const theme of themes) {
  for (const path of pages) {
    const page = await browser.newPage();
    await page.evaluateOnNewDocument((value) => {
      localStorage.setItem("theme", value);
    }, theme);

    const result = await lighthouse(
      `${BASE_URL}${path}`,
      {
        onlyCategories: categories,
        disableStorageReset: true,
        output: "json",
      },
      undefined,
      page,
    );

    const scores = categories.map((c) => {
      const score = Math.round((result.lhr.categories[c].score ?? 0) * 100);
      if (score < THRESHOLD) failed = true;
      return `${c}=${score}${score < THRESHOLD ? " FAIL" : ""}`;
    });
    console.log(`[${theme}] ${path} ${scores.join(" ")}`);
    await page.close();
  }
}

await browser.close();
process.exit(failed ? 1 : 0);
