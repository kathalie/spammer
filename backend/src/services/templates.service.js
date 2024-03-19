import TemplatesRepository from "../data-access/templates.repository.js";

export async function saveTemplate (template){
    try {
        return await TemplatesRepository.saveTemplate(template);
    } catch (error) {
        console.error(error);
        throw Error('Failed to save a template');
    }
}

export async function deleteTemplate(id) {
    try {
        await TemplatesRepository.deleteTemplate(id);
    } catch (error) {
        console.error(error);
        throw Error('Failed to delete a template');
    }
}

export async function getAllTemplates() {
    try {
        return await TemplatesRepository.getAllTemplates();
    } catch (error) {
        console.error(error);
        throw Error('Failed to get a template');
    }
}