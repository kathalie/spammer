import mongoose from "mongoose";

const templateSchema = new mongoose.Schema({
    text: String,
});

export const TemplateModel = mongoose.model('Template', templateSchema);