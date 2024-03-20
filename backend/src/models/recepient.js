import mongoose from "mongoose";

const recipientSchema = new mongoose.Schema({
    lastName: { type: String },
    firstName: { type: String },
    middleName: { type: String },
    email: { type: String, unique: true, required: true },
});

export const RecipientModel = mongoose.model('Recipient', recipientSchema);