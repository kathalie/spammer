import process from "process";
import express from 'express';
import ejs from 'ejs';

import apiRouter from "./api-router.js";
import path from 'path';
import { fileURLToPath } from 'url';
import connectToDb from "./data-access/database.js";
import {getAllTemplates} from "./services/templates.service.js";
import {getAllRecipients} from "./services/recipients.service.js";

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPath = path.resolve(__dirname, '../../frontend/src/');

app.set('view engine', 'ejs');
app.set('views', '../frontend/src/html/');

app.use(express.json());
app.use(express.static(frontendPath));

app.get('/', async function(req, res) {
    const templates = await getAllTemplates();
    const recipientsData = await getAllRecipients();

    res.render('index', {
        templates,
        recipients: recipientsData.recipients
    });
});

app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    connectToDb()
});