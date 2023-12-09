import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
console.log(chalk.whiteBright("\n\nSetting up server to service the program..."));
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDirPath = path.join(__dirname, "../frontend/");
app.use(express.static(rootDirPath));
const indexFilePath = path.join(rootDirPath, "index.html");
app.get('/', (req, res) => {
    res.sendFile(indexFilePath);
});
app.listen(port, () => {
    console.log(chalk.green(`Server started at http://localhost:${port}`));
    console.log(chalk.cyan(`Press Ctrl+C to quit.`));
});
