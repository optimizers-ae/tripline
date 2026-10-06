import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

async function optimizeImages() {
  console.log('Optimizing images in:', publicDir);

  // 1. banner.png -> banner.webp & banner-mobile.webp
  const bannerPng = path.join(publicDir, 'banner.png');
  if (fs.existsSync(bannerPng)) {
    const bannerBuffer = fs.readFileSync(bannerPng);
    
    // Desktop WebP
    await sharp(bannerBuffer)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(path.join(publicDir, 'banner.webp'));
    console.log('Created banner.webp');

    // Mobile WebP
    await sharp(bannerBuffer)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 78, effort: 6 })
      .toFile(path.join(publicDir, 'banner-mobile.webp'));
    console.log('Created banner-mobile.webp');
  }

  // 2. Heavy Service & Editorial images
  const heavyImages = [
    { file: 'hero-elearning-desktop.webp', width: 1000, quality: 80 },
    { file: 'service-web-editorial-mobile.webp', width: 800, quality: 80 },
    { file: 'service-app-editorial-mobile.webp', width: 800, quality: 80 },
    { file: 'service-systems-editorial-v2-mobile.webp', width: 800, quality: 80 },
    { file: 'service-consulting-editorial-mobile.webp', width: 800, quality: 80 },
    { file: 'SECURITY-poster.webp', width: 800, quality: 80 },
    { file: 'accent-section-1-v2.webp', width: 1600, quality: 80 },
  ];

  for (const item of heavyImages) {
    const filePath = path.join(publicDir, item.file);
    if (fs.existsSync(filePath)) {
      const buffer = fs.readFileSync(filePath);
      const tempPath = path.join(publicDir, `temp_${item.file}`);
      
      await sharp(buffer)
        .resize({ width: item.width, withoutEnlargement: true })
        .webp({ quality: item.quality, effort: 6 })
        .toFile(tempPath);
      
      fs.renameSync(tempPath, filePath);
      const newStats = fs.statSync(filePath);
      console.log(`Optimized ${item.file} -> ${(newStats.size / 1024).toFixed(1)} KB`);
    }
  }

  // 3. favicon_2.jpg
  const faviconJpg = path.join(publicDir, 'favicon_2.jpg');
  if (fs.existsSync(faviconJpg)) {
    const buffer = fs.readFileSync(faviconJpg);
    const tempPath = path.join(publicDir, 'temp_favicon_2.jpg');
    await sharp(buffer)
      .resize({ width: 256, withoutEnlargement: true })
      .jpeg({ quality: 85 })
      .toFile(tempPath);
    fs.renameSync(tempPath, faviconJpg);
    console.log('Optimized favicon_2.jpg');
  }

  console.log('All image optimizations completed!');
}

optimizeImages().catch(console.error);
