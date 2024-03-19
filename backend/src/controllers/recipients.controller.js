import {sendEmail} from "../services/email-sender.js";
import RecipientsRepository from "../data-access/recipients.repository.js";

export async function sendSpam(req, res) {
    try {
        const {to, subject, text} = req.body;

        sendEmail(to, subject, text);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function saveRecipient (req, res){
    try {
        const savedRecipient = await RecipientsRepository.saveRecipient(req.body);
        res.json(savedRecipient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function updateRecipient(req, res) {
    try {
        const { id } = req.params;
        const { lastName, firstName, middleName, email } = req.body;
        const updatedRecipient = await RecipientsRepository.editRecipient(id, { lastName, firstName, middleName, email });
        res.json(updatedRecipient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function deleteRecipient(req, res) {
    try {
        const { id } = req.params;
        await RecipientsRepository.deleteRecipient(id);
        res.json({ message: 'Recipient deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function getRecipient(req, res) {
    try {
        const { id } = req.params;
        const recipient = await RecipientsRepository.getRecipient(id);
        res.json(recipient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function getRecipients(req, res) {
    const { page, pageSize } = req.query;

    try {
        const recipients = await RecipientsRepository.getAllRecipients(page, pageSize);
        const total = await RecipientsRepository.countAllRecipients();

        res.json({
            recipients,
            total
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}