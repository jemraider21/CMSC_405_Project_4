import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

const rootDirPath = path.join(__dirname, "../../");
console.log(`rootDirPath: ${rootDirPath}`);
//app.use(express.static(rootDirPath));

const jsFilePaths = new Map<string, string>();
const jsFilesDirectory = "js/frontend";
const jsFilePath = path.join(rootDirPath, jsFilesDirectory);
jsFilePaths.set(jsFilesDirectory, jsFilePath);

const jsUtilsDirectory = `${jsFilesDirectory}/utils`;
const jsUtilsPath = path.join(rootDirPath, jsUtilsDirectory);
jsFilePaths.set(jsUtilsDirectory, jsUtilsPath);

["assets", "shapes", "structure"].forEach((dir) => {
  const jsModelDirectory = `${jsFilesDirectory}/model/${dir}`;
  const jsModelPath = path.join(rootDirPath, jsModelDirectory);
  jsFilePaths.set(jsModelDirectory, jsModelPath);
});

jsFilePaths.forEach((value, key) => {
  const url = "/" + key;
  console.log(`${url}: ${value}`);
  app.use(url, express.static(value));
});

const indexFilePath = path.join(rootDirPath, "index.html");
app.get('/', (req, res) => {
  res.sendFile(indexFilePath);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Press Ctrl+C to quit.`);
});
