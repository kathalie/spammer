import {TemplateModel} from "../models/template.js";

class TemplatesRepository {
    static async saveTemplate(templateData) {
        try {
            const newTemplate = new TemplateModel(templateData);

            return await newTemplate.save();
        } catch (error) {
            console.error('Error saving message');
            console.error(error);
            throw error;
        }
    }

    static async deleteTemplate(templateId) {
        try {
            await TemplateModel.findByIdAndDelete(templateId);
        } catch (error) {
            console.error('Error deleting message');
            console.error(error);
            throw error;
        }
    }

    static async getAllTemplates() {
        try {
            return await TemplateModel.find().sort({text: 'asc'});
        } catch (error) {
            console.error('Error retrieving messages');
            console.error(error);
            throw error;
        }
    }
}

export default TemplatesRepository