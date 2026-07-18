import lighthouse from "lighthouse";
import puppeteer from "puppeteer-core";

const BASE_URL = process.env.LH_BASE_URL ?? "http://localhost:4173";
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

const browser = await puppeteer.launch({ channel: "chrome", headless: true });
const warmup = await browser.newPage();
await warmup.goto(`${BASE_URL}/`, { waitUntil: "networkidle0" });
await warmup.close();

let failed = false;

for (const theme of ["dark", "light"]) {
  for (const path of pages) {
    const page = await browser.newPage();
    if (theme === "light") {
      await page.evaluateOnNewDocument(() => {
        localStorage.setItem("theme", "light");
      });
    }

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
