import mongoose from "mongoose";

const recipientSchema = new mongoose.Schema({
    lastName: String,
    firstName: String,
    middleName: String,
    email: String,
});

export const RecipientModel = mongoose.model('Recipient', recipientSchema);