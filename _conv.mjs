import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
const src = process.argv[2], dst = 'brand_assets/learn-english.png';
const inBuf = readFileSync(src);            // read into buffer (avoid file-handle lock)
const meta = await sharp(inBuf).metadata();
console.log(`source: ${meta.width}x${meta.height} ${meta.format}  ratio=${(meta.width/meta.height).toFixed(3)}`);
const out = await sharp(inBuf).resize({ width: 900 }).png({ quality: 90 }).toBuffer();
writeFileSync(dst, out);
console.log(`wrote ${dst} (${out.length} bytes)`);
