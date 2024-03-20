import mongoose from "mongoose";

const templateSchema = new mongoose.Schema({
    message: String,
    subject: String
});

export const TemplateModel = mongoose.model('Template', templateSchema);