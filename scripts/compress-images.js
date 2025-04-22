import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images');
const files = fs.readdirSync(imagesDir);

let totalOriginalSize = 0;
let totalCompressedSize = 0;

async function compressImage(file) {
  if (!file.endsWith('.webp')) return;

  const inputPath = path.join(imagesDir, file);
  const tempPath = path.join(imagesDir, `temp_${file}`);
  const stats = fs.statSync(inputPath);
  totalOriginalSize += stats.size;

  try {
    await sharp(inputPath)
      .webp({ quality: 50 })
      .toFile(tempPath);

    fs.unlinkSync(inputPath);
    fs.renameSync(tempPath, inputPath);

    const newStats = fs.statSync(inputPath);
    totalCompressedSize += newStats.size;

    console.log(`Compressed: ${file}`);
    console.log(`Original size: ${(stats.size / 1024).toFixed(2)} KB`);
    console.log(`Compressed size: ${(newStats.size / 1024).toFixed(2)} KB`);
    console.log(`Reduction: ${(((stats.size - newStats.size) / stats.size) * 100).toFixed(2)}%`);
    console.log('---');
  } catch (error) {
    console.error(`Error compressing ${file}:`, error);
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

async function compressAllImages() {
  console.log('Starting image compression...');
  console.log('---');

  for (const file of files) {
    await compressImage(file);
  }

  console.log('Compression completed!');
  console.log(`Total original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total compressed size: ${(totalCompressedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total space saved: ${((totalOriginalSize - totalCompressedSize) / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total reduction: ${(((totalOriginalSize - totalCompressedSize) / totalOriginalSize) * 100).toFixed(2)}%`);
}

compressAllImages(); 