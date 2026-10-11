const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuración de carpetas y estrategias de compresión
const folderConfigs = [
  // Fotos de galerías/mosaicos -> Mayor compresión + tamaño adaptado
  { dir: 'public/15juli', maxWidth: 800, quality: 70 },
  { dir: 'public/15majo', maxWidth: 800, quality: 70 },
  { dir: 'public/15marti', maxWidth: 800, quality: 70 },
  { dir: 'public/15zoe', maxWidth: 800, quality: 70 },
  { dir: 'public/exteriores', maxWidth: 800, quality: 70 },
  { dir: 'public/selected', maxWidth: 800, quality: 70 },

  // Fotos destacadas/principales (Hero, FullImageSection, Split) -> Mayor calidad + resolución alta
//   { dir: 'public/selected', maxWidth: 1920, quality: 85 },
];

async function convertImagesToWebp() {
  console.log('🔄 Iniciando optimización y conversión de imágenes a WebP...\n');

  let convertedCount = 0;

  for (const config of folderConfigs) {
    const dirPath = path.join(process.cwd(), config.dir);
    
    if (!fs.existsSync(dirPath)) {
      console.log(`⚠️ La carpeta "${config.dir}" no existe, omitiendo...`);
      continue;
    }

    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();

      // Procesar solo JPG/PNG (ignorar los que ya son .webp u otros archivos)
      if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        const filePath = path.join(dirPath, file);
        const webpFilename = path.basename(file, ext) + '.webp';
        const webpPath = path.join(dirPath, webpFilename);

        try {
          await sharp(filePath)
            .resize({
              width: config.maxWidth,
              withoutEnlargement: true, // Evita agrandar imágenes más pequeñas que el límite
            })
            .webp({ quality: config.quality })
            .toFile(webpPath);
          
          convertedCount++;
          console.log(`✅ [${config.dir}] ${file} ➔ ${webpFilename} (Ancho máx: ${config.maxWidth}px | Q: ${config.quality}%)`);
        } catch (err) {
          console.error(`❌ Error convirtiendo ${file}:`, err.message);
        }
      }
    }
  }

  console.log(`\n✨ ¡Proceso finalizado! Se convirtieron ${convertedCount} imágenes a WebP.`);
}

convertImagesToWebp();
