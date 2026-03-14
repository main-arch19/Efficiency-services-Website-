import { createRequire } from 'module'
import { existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const require = createRequire(import.meta.url)
const puppeteer = require('/Users/wizard/Documents/Puppeteer/node_modules/puppeteer/lib/cjs/puppeteer/puppeteer.js')

const url = process.argv[2] || 'http://localhost:3001'
const label = process.argv[3] || ''
const dir = './temporary screenshots'

if (!existsSync(dir)) mkdirSync(dir, { recursive: true })

let n = 1
while (existsSync(join(dir, `screenshot-${n}${label ? `-${label}` : ''}.png`))) n++
const file = join(dir, `screenshot-${n}${label ? `-${label}` : ''}.png`)

const browser = await puppeteer.default.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

const page = await browser.newPage()
await page.setViewport({ width: 1280, height: 900 })
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })
await new Promise(r => setTimeout(r, 2500))

// Scroll through to trigger IntersectionObserver animations
const pageHeight = await page.evaluate(() => document.body.scrollHeight)
for (let y = 0; y < pageHeight; y += 500) {
  await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y)
  await new Promise(r => setTimeout(r, 300))
}
await page.evaluate(() => window.scrollTo(0, 0))
await new Promise(r => setTimeout(r, 800))

await page.screenshot({ path: file, fullPage: true })
await browser.close()
console.log(`Screenshot saved: ${file}`)
