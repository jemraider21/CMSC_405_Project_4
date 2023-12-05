import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);
const rootDirPath = path.join(__dirname, "../../");
console.log(`Root path: ${rootDirPath}`);
app.use(express.static(rootDirPath));
const indexFilePath = path.join(rootDirPath, "index.html");
console.log(`Index file path: ${indexFilePath}`);
app.get('/', (req, res) => {
    res.sendFile(indexFilePath);
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Press Ctrl+C to quit.`);
});
