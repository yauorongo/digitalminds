// Full-page screenshot tool (Puppeteer)
// Usage:
//   node screenshot.mjs http://localhost:3000
//   node screenshot.mjs http://localhost:3000 mylabel
//   node screenshot.mjs http://localhost:3000 mylabel 1440   (custom viewport width)
//
// Screenshots are saved to ./temporary screenshots/screenshot-N.png (auto-incremented,
// never overwritten). An optional label becomes screenshot-N-label.png.
import puppeteer from 'puppeteer';
import { mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('.', import.meta.url));
const OUT_DIR = join(ROOT, 'temporary screenshots');

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] ? `-${process.argv[3]}` : '';
const width = Number(process.argv[4]) || 1440;

async function nextIndex() {
  await mkdir(OUT_DIR, { recursive: true });
  const files = await readdir(OUT_DIR).catch(() => []);
  const nums = files
    .map((f) => /^screenshot-(\d+)/.exec(f)?.[1])
    .filter(Boolean)
    .map(Number);
  return nums.length ? Math.max(...nums) + 1 : 1;
}

const n = await nextIndex();
const outPath = join(OUT_DIR, `screenshot-${n}${label}.png`);

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--hide-scrollbars'],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width, height: 900, deviceScaleFactor: 2 });
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

  // Scroll through the whole page so IntersectionObserver reveal animations
  // (and any lazy images) trigger before we capture the full page.
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = window.innerHeight * 0.8;
      const timer = setInterval(() => {
        window.scrollTo(0, y);
        y += step;
        if (y >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 120);
    });
  });
  // Deterministically reveal everything (don't rely on observer timing for the capture)
  await page.evaluate(() => {
    document.querySelectorAll('[data-rv]').forEach((el) => {
      el.classList.add('in');
      el.style.transitionDelay = '0ms';
    });
  });
  // let reveals/fonts/images settle
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: outPath, fullPage: true });
  console.log(`Saved → ${outPath}`);
} catch (err) {
  console.error('Screenshot failed:', err.message);
  process.exitCode = 1;
} finally {
  await browser.close();
}
