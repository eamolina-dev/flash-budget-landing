import fs from "fs";
import path from "path";

const BASE_INPUT = "public/selected";
const BASE_OUTPUT = "public/selected-old";

// lista de archivos que NO querés mover
const usedNames = new Set([
  "--106","--75","--22","--112","--43","--81","--41","--89","--13","--138","--39",
  "--231","--654","--167","--523","--929","--954","--605","--537","--464",
  "--218","--377","--913",
  "--76","--12","--19","--178","--191","--363","--463","--335","--182","--241",
]);

const walkAndMove = (dir) => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkAndMove(fullPath);
      continue;
    }

    // ruta relativa desde BASE_INPUT
    const relativePath = path.relative(BASE_INPUT, fullPath);

    const name = path.parse(file).name; // --106-sm
    const base = name.split("-").slice(0, 2).join("-"); // --106

    if (usedNames.has(base)) {
      console.log("✔ keep:", file);
      continue;
    }

    // mover manteniendo estructura
    const destinationPath = path.join(BASE_OUTPUT, relativePath);

    fs.mkdirSync(path.dirname(destinationPath), { recursive: true });

    fs.renameSync(fullPath, destinationPath);

    console.log("➡ moved:", relativePath);
  }
};

walkAndMove(BASE_INPUT);
