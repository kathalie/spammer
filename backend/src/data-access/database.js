import mongoose from 'mongoose';
import {RecipientModel} from "../models/recepient.js";

const host = process.env.DB_HOST | '127.0.0.1';
const port = process.env.DB_PORT | '27017'
const database = 'spammerDb';

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose
            .connect(`mongodb://${host}:${port}/${database}`)
            .then(() => {
                console.log('Database connection successful');
            })
            .catch((err) => {
                console.error('Database connection error');
                console.error(err)
            });
    }

    async saveRecipient(recipientData) {
        try {
            const newRecipient = new RecipientModel(recipientData);

            return await newRecipient.save();
        } catch (error) {
            console.error('Error saving recipient');
            console.error(error);
            throw error;
        }
    }

    async editRecipient(recipientId, updatedData) {
        try {
            return await RecipientModel.findByIdAndUpdate(recipientId, updatedData, { new: true });
        } catch (error) {
            console.error('Error editing recipient');
            console.error(error);
            throw error;
        }
    }

    async deleteRecipient(recipientId) {
        try {
            await RecipientModel.findByIdAndDelete(recipientId);
        } catch (error) {
            console.error('Error deleting recipient');
            console.error(error);
            throw error;
        }
    }

    async getAllRecipients() {
        try {
            return await RecipientModel.find().sort({ lastName: 'asc' });
        } catch (error) {
            console.error('Error retrieving recipients');
            console.error(error);
            throw error;
        }
    }
}

const db = new Database();

export default db;