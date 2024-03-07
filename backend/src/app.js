import process from "process";
import express from 'express';
import router from "./router.js";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPath = path.resolve(__dirname, '../../frontend/src/');

//app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static(frontendPath));

app.get('/', function(req, res) {
    res.sendFile(path.join(frontendPath, '/index.html'));
});

app.use('/api', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});