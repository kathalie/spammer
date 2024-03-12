import TemplatesRepository from "../data-access/templates.repository.js";

export async function saveTemplate (req, res){
    try {
        console.log(req.body)
        const savedTemplate = await TemplatesRepository.saveTemplate(req.body);
        res.json(savedTemplate);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function deleteTemplate(req, res) {
    try {
        const { id } = req.params;
        await TemplatesRepository.deleteTemplate(id);
        res.json({ message: 'Message deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function getTemplate(req, res) {
    try {
        const templates = await TemplatesRepository.getAllTemplates();
        res.json(templates);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}