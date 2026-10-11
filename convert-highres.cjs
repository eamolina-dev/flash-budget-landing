const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Lista de fotos grandes con alta calidad y resolución (1920px / 85% calidad)
const highResPhotos = [
//   'public/15marti/--12.jpg',
//   'public/exteriores/--18.jpg',
//   'public/exteriores/--4 (2).jpg',
//   'public/exteriores/--113.jpg',
  'public/selected/--39.jpg',
  'public/15majo/--118.jpg',
//   'public/selected/--12.jpg',
//   'public/selected/--191.jpg',
//   'public/15marti/--50.jpg',
//   'public/15zoe/--116.jpg',
//   'public/15juli/--244.jpg',
//   'public/15marti/--74.jpg',
//   'public/selected/--463.jpg',
//   'public/15marti/--616.jpg',
];

async function convertHighResPhotos() {
  console.log('🔄 Iniciando conversión de fotos grandes a WebP (Alta Calidad)...\n');

  let successCount = 0;

  for (const photoPath of highResPhotos) {
    const fullPath = path.join(process.cwd(), photoPath);

    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️ No se encontró el archivo: ${photoPath}`);
      continue;
    }

    const ext = path.extname(fullPath);
    const dir = path.dirname(fullPath);
    const baseName = path.basename(fullPath, ext);
    const webpPath = path.join(dir, `${baseName}.webp`);

    try {
        // await sharp(fullPath)
        //     .resize({ width: 1920, withoutEnlargement: true })
        //     .sharpen() // <-- Agrega un realce de nitidez sutil
        //     .webp({ quality: 90 })
        //     .toFile(webpPath);
      await sharp(fullPath)
        .resize({
          width: 1920,
          withoutEnlargement: true,
        })
        .webp({ quality: 85 })
        .toFile(webpPath);

      successCount++;
      console.log(`🌟 Convertida: ${photoPath} ➔ ${baseName}.webp`);
    } catch (err) {
      console.error(`❌ Error convirtiendo ${photoPath}:`, err.message);
    }
  }

  console.log(`\n✨ ¡Listo! Se procesaron ${successCount} de ${highResPhotos.length} fotos con éxito.`);
}

convertHighResPhotos();
