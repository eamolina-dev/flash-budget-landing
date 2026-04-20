import fs from "fs";
import path from "path";

const getUniquePath = (filePath) => {
  let counter = 1;
  let newPath = filePath;

  while (fs.existsSync(newPath)) {
    const { dir, name, ext } = path.parse(filePath);
    newPath = path.join(dir, `${name}-${counter}${ext}`);
    counter++;
  }

  return newPath;
};

/**
 * Mueve una lista de archivos a otra carpeta
 * @param {string[]} files - rutas de archivos a mover
 * @param {string} destinationDir - carpeta destino
 */
const moveFiles = (files, destinationDir) => {
  // asegurar carpeta destino
  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true });
  }

  for (const filePath of files) {
    try {
      if (!fs.existsSync(filePath)) {
        console.warn(`⚠ No existe: ${filePath}`);
        continue;
      }

      const fileName = path.basename(filePath);
      const destinationPath = getUniquePath(
        path.join(destinationDir, fileName)
      );

      fs.renameSync(filePath, destinationPath);

      console.log(`✔ Movido: ${fileName}`);
    } catch (err) {
      console.error(`❌ Error moviendo ${filePath}`, err);
    }
  }
};

const filesToMove = [
  "public/selected-old/--106-sm.webp",
  "public/selected-old/--75-sm.webp",
  "public/selected-old/--22-sm.webp",
  "public/selected-old/--112-sm.webp",
  "public/selected-old/--43-sm.webp",
  "public/selected-old/--81-sm.webp",
  "public/selected-old/--41-sm.webp",
  "public/selected-old/--89-sm.webp",
  "public/selected-old/--13-sm.webp",
  "public/selected-old/--138-sm.webp",
  "public/selected-old/--39-sm.webp",

  "public/selected-old/--231-sm.webp",
  "public/selected-old/--654-sm.webp",
  "public/selected-old/--167-sm.webp",
  "public/selected-old/--523-sm.webp",
  "public/selected-old/--929-sm.webp",
  "public/selected-old/--954-sm.webp",
  "public/selected-old/--605-sm.webp",
  "public/selected-old/--537-sm.webp",
  "public/selected-old/--464-sm.webp",
  "public/selected-old/--218-sm.webp",
  "public/selected-old/--377-sm.webp",
  "public/selected-old/--913-sm.webp",

  "public/selected-old/--76-xl.webp",
  "public/selected-old/--75-xl.webp",
  "public/selected-old/--12-xl.webp",
  "public/selected-old/--19-xl.webp",
  "public/selected-old/--178-xl.webp",
  "public/selected-old/--106-xl.webp",
  "public/selected-old/--191-xl.webp",
  "public/selected-old/--363-xl.webp",
  "public/selected-old/--463-xl.webp",
  "public/selected-old/--335-xl.webp",
  "public/selected-old/--182-xl.webp",
  "public/selected-old/--241-xl.webp",
];

moveFiles(filesToMove, "./public/selected");
