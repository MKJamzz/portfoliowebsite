// Usage: node scripts/generate-thumbs.mjs [folderName]
// Default folder: Japan2026Pics
// Thumbnails are written to public/<folderName>/thumbs/

import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const folderName = process.argv[2] ?? 'Japan2026Pics';
const srcDir = join(__dirname, '../public', folderName);
const thumbDir = join(srcDir, 'thumbs');

if (!existsSync(srcDir)) {
  console.error(`Folder not found: ${srcDir}`);
  process.exit(1);
}

if (!existsSync(thumbDir)) {
  await mkdir(thumbDir, { recursive: true });
}

const files = (await readdir(srcDir)).filter(f =>
  ['.jpg', '.jpeg', '.png', '.webp'].includes(extname(f).toLowerCase())
);

console.log(`Generating thumbnails for ${files.length} images in ${folderName}...`);

for (const file of files) {
  const src = join(srcDir, file);
  const dest = join(thumbDir, file);
  if (existsSync(dest)) {
    console.log(`  skip ${file} (exists)`);
    continue;
  }
  await sharp(src)
    .resize(600, null, { withoutEnlargement: true })
    .jpeg({ quality: 60, progressive: true })
    .toFile(dest);
  console.log(`  ✓ ${file}`);
}

console.log('Done!');
