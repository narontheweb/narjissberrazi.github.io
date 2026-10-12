import sharp from 'sharp';
import { copyFile, mkdir } from 'node:fs/promises';
await mkdir('public/fonts', { recursive: true });
await copyFile('node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2', 'public/fonts/manrope-latin.woff2');
await copyFile('node_modules/@fontsource-variable/manrope/LICENSE', 'public/fonts/Manrope-LICENSE.txt');
const source = 'public/images/narjiss-berrazi-headshot.jpeg';
// Format conversion only: the source portrait is retained without retouching.
await sharp(source).resize({ width: 900, withoutEnlargement: true }).webp({ quality: 85 }).toFile('public/images/narjiss-berrazi-headshot.webp');
await sharp(source).resize({ width: 900, withoutEnlargement: true }).avif({ quality: 65 }).toFile('public/images/narjiss-berrazi-headshot.avif');
