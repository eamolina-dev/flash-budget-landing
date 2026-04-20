import sharp from "sharp";
import fs from "fs-extra";
import path from "path";

const inputDir = "./public/selected-webp";
const outputDir = "./public/selected";

const allowed = [".jpg", ".jpeg", ".png", ".webp"];

async function processFolder(folder) {
  const files = await fs.readdir(folder);

  for (const file of files) {
    const fullPath = path.join(folder, file);
    const stat = await fs.stat(fullPath);

    if (stat.isDirectory()) {
      await processFolder(fullPath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();

    if (!allowed.includes(ext)) {
      console.log("skipped:", file);
      continue;
    }

    const relative = path.relative(inputDir, fullPath);
    const name = path.parse(relative).name;

    const outputPath = path.join(outputDir, relative.replace(ext, ".webp"));

    await fs.ensureDir(path.dirname(outputPath));

    try {
      await sharp(fullPath)
        // .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(outputPath);

      console.log("optimized:", relative);
    } catch (err) {
      console.log("error:", relative);
    }
  }
}

await processFolder(inputDir);
