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
  "public/images/portrait_of_a_person/--106.jpg",
  "public/images/group_of_people/--106.jpg",
  "public/images/portrait_of_a_person/--75.jpg",
  "public/images/makeup_preparation/--22.jpg",
  "public/images/group_of_people/--112.jpg",
  "public/images/makeup_preparation/--43.jpg",
  "public/images/portrait_of_a_person/--81.jpg",
  "public/images/group_of_people/--41.jpg",
  "public/images/portrait_of_a_person/--89.jpg",
  "public/images/portrait_of_a_person/--13.jpg",
  "public/images/party_dancing/--138.jpg",
  "public/images/makeup_preparation/--39.jpg",

  "public/images/party_dancing/--231.jpg",
  "public/images/party_dancing/--654.jpg",
  "public/images/party_dancing/--167.jpg",
  "public/images/makeup_preparation/--523.jpg",
  "public/images/party_dancing/--929.jpg",
  "public/images/party_dancing/--954.jpg",
  "public/images/party_dancing/--605.jpg",
  "public/images/party_dancing/--537.jpg",
  "public/images/party_dancing/--464.jpg",
  "public/images/party_dancing/--218.jpg",
  "public/images/party_dancing/--377.jpg",
  "public/images/group_of_people/--913.jpg",

  "public/images/portrait_of_a_person/--76.jpg",
  "public/images/party_dancing/--12.jpg",
  "public/images/makeup_preparation/--19.jpg",
  "public/images/portrait_of_a_person/--178.jpg",
  "public/images/portrait_of_a_person/--106.jpg",
  "public/images/portrait_of_a_person/--191.jpg",
  "public/images/party_dancing/--363.jpg",
  "public/images/party_dancing/--463.jpg",
  "public/images/party_dancing/--335.jpg",
  "public/images/people_hugging/--182.jpg",
  "public/images/group_of_people/--241.jpg",
];

moveFiles(filesToMove, "./selected");
