import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const srcAssets = path.join(root, "src/assets");
const outDir = path.join(root, "public/images");

const THUMB_WIDTH = 800;
const FULL_WIDTH = 1800;
const HERO_WIDTH = 1920;

async function isStale(sourcePath, outputPath) {
  try {
    const [sourceStat, outputStat] = await Promise.all([
      fs.stat(sourcePath),
      fs.stat(outputPath),
    ]);
    return sourceStat.mtimeMs > outputStat.mtimeMs;
  } catch {
    return true;
  }
}

async function writeWebp(sourcePath, outputPath, width, quality) {
  await sharp(sourcePath)
    .rotate()
    .resize(width, null, { withoutEnlargement: true })
    .webp({ quality, effort: 4 })
    .toFile(outputPath);
}

async function optimizePortfolioImage(sourcePath, folder, basename) {
  const outputFolder = path.join(outDir, folder);
  await fs.mkdir(outputFolder, { recursive: true });

  const thumbPath = path.join(outputFolder, `${basename}-thumb.webp`);
  const fullPath = path.join(outputFolder, `${basename}-full.webp`);

  if (await isStale(sourcePath, thumbPath)) {
    await writeWebp(sourcePath, thumbPath, THUMB_WIDTH, 78);
  }

  if (await isStale(sourcePath, fullPath)) {
    await writeWebp(sourcePath, fullPath, FULL_WIDTH, 82);
  }
}

async function optimizeHero() {
  const sourcePath = path.join(srcAssets, "backgroundVini.jpg");
  const outputPath = path.join(outDir, "hero.webp");
  await fs.mkdir(outDir, { recursive: true });

  if (await isStale(sourcePath, outputPath)) {
    await writeWebp(sourcePath, outputPath, HERO_WIDTH, 80);
  }
}

async function main() {
  console.log("Optimizing images...");
  await optimizeHero();
  console.log("  ✓ hero.webp");

  for (const folder of ["casais", "ensaios", "familia"]) {
    const folderPath = path.join(srcAssets, folder);
    const files = (await fs.readdir(folderPath)).filter((file) =>
      file.endsWith(".jpg"),
    );

    for (const file of files) {
      const basename = path.basename(file, ".jpg");
      await optimizePortfolioImage(
        path.join(folderPath, file),
        folder,
        basename,
      );
      console.log(`  ✓ ${folder}/${basename}`);
    }
  }

  console.log("Done.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
