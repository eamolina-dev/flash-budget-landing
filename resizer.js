import fs from "fs";
import path from "path";
import sharp from "sharp";

const INPUT_DIR = "./public/selected";
const OUTPUT_DIR = "./public/selected-webp";

// tamaños que querés generar
const SIZES = [
  { name: "xl", width: 1800, webpQuality: 85, jpgQuality: 82 },
  { name: "md", width: 1200, webpQuality: 82, jpgQuality: 80 },
  { name: "sm", width: 400, webpQuality: 80, jpgQuality: 78 },
];

// extensiones válidas
const IMAGE_REGEX = /\.(jpg|jpeg|png)$/i;

// crear carpeta si no existe
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// recorrer carpetas recursivamente
const walkDir = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkDir(fullPath, fileList);
    } else {
      fileList.push(fullPath);
    }
  }

  return fileList;
};

const processImages = async () => {
  const allFiles = walkDir(INPUT_DIR);

  for (const filePath of allFiles) {
    if (!filePath.match(IMAGE_REGEX)) continue;

    const relativePath = path.relative(INPUT_DIR, filePath);
    const parsed = path.parse(relativePath);

    for (const size of SIZES) {
      const outputBaseDir = path.join(OUTPUT_DIR, parsed.dir);
      ensureDir(outputBaseDir);

      const baseName = `${parsed.name}-${size.name}`;

      const webpPath = path.join(outputBaseDir, baseName + ".webp");
      const jpgPath = path.join(outputBaseDir, baseName + ".jpg");

      try {
        const image = sharp(filePath).resize({
          width: size.width,
          withoutEnlargement: true,
        });

        // WebP
        await image
          .clone()
          .webp({ quality: size.webpQuality })
          .toFile(webpPath);

        // JPG fallback
        await image
          .clone()
          .jpeg({
            quality: size.jpgQuality,
            progressive: true,
          })
          .toFile(jpgPath);

        console.log(`✔ ${relativePath} → ${baseName}`);
      } catch (err) {
        console.error(`❌ Error con ${filePath}`, err);
      }
    }
  }

  console.log("✅ Procesamiento completo");
};

processImages();
