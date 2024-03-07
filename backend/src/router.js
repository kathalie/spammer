import express from 'express';
import db from "./data-access/database.js";
import {sendEmail} from "./services/email-sender.js";

const router = express.Router();

router.post('/sendSpam', async (req, res) => {
    try {
        sendEmail(...req.body);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/recipient', async (req, res) => {
    try {
        const savedRecipient = await db.saveRecipient(req.body);
        res.json(savedRecipient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/recipients/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { lastName, firstName, middleName, email } = req.body;
        const updatedRecipient = await db.editRecipient(id, { lastName, firstName, middleName, email });
        res.json(updatedRecipient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/recipients/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await db.deleteRecipient(id);
        res.json({ message: 'Recipient deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/recipients', async (req, res) => {
    try {
        const recipients = await db.getAllRecipients();
        res.json(recipients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;