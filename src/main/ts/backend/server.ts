import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

const rootDirPath = "../../";
app.use(express.static(path.join(__dirname, rootDirPath)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, rootDirPath + "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Press Ctrl+C to quit.`);
});
