#!/usr/bin/env node
// Generate compressed sitemap.xml and robots.txt
import fs from 'node:fs/promises';
import path from 'node:path';
import { gzip } from 'node:zlib';
import { promisify } from 'node:util';

const gzipAsync = promisify(gzip);
const DOMAIN = process.env.DOMAIN || 'wwvacations.com';
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const ROUTES_DIR = path.join(process.cwd(), 'src', 'app');

const urls = [];

async function walk(dir, baseRoute = '') {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const name = entry.name;
    if (name.startsWith('_')) continue; // skip internal
    const fullPath = path.join(dir, name);
    if (entry.isDirectory()) {
      if (name.startsWith('[')) continue; // skip dynamic routes
      await walk(fullPath, path.join(baseRoute, name));
    } else if (entry.isFile() && name === 'page.tsx') {
      const routePath = baseRoute === '' || baseRoute === 'home' ? '/' : `/${baseRoute}`;
      const stats = await fs.stat(fullPath);
      urls.push({
        loc: `https://${DOMAIN}${routePath}`,
        lastmod: stats.mtime.toISOString().split('T')[0],
      });
    }
  }
}

await walk(ROUTES_DIR);

const sitemapXml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map(u => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>`)
    .join('\n') +
  `\n</urlset>`;

await fs.mkdir(PUBLIC_DIR, { recursive: true });
const gzipped = await gzipAsync(Buffer.from(sitemapXml));
await fs.writeFile(path.join(PUBLIC_DIR, 'sitemap.xml'), gzipped);

const robots = `User-agent: *\nAllow: /\nDisallow: /search\nSitemap: https://${DOMAIN}/sitemap.xml\n`;
await fs.writeFile(path.join(PUBLIC_DIR, 'robots.txt'), robots, 'utf-8');

console.log('✅ Sitemap and robots.txt generated'); 