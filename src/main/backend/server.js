import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(`__dirname: ${__dirname}`);
const rootDirPath = path.join(__dirname, "../frontend/");
console.log(`rootDirPath: ${rootDirPath}`);
app.use(express.static(rootDirPath));
const indexFilePath = path.join(rootDirPath, "index.html");
app.get('/', (req, res) => {
    res.sendFile(indexFilePath);
});
app.listen(port, () => {
    console.log("\x1b[33m", `Server running at http://localhost:${port}`);
    console.log(`Press Ctrl+C to quit.`);
});
