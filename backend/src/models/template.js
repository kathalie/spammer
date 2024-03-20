import mongoose from "mongoose";

const templateSchema = new mongoose.Schema({
    message: { type: String },
    subject: { type: String },
});

export const TemplateModel = mongoose.model('Template', templateSchema);