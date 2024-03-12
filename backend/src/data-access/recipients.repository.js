import {RecipientModel} from "../models/recepient.js";

class RecipientsRepository {
    static async saveRecipient(recipientData) {
        try {
            const newRecipient = new RecipientModel(recipientData);

            return await newRecipient.save();
        } catch (error) {
            console.error('Error saving recipient');
            console.error(error);
            throw error;
        }
    }

    static async editRecipient(recipientId, updatedData) {
        try {
            return await RecipientModel.findByIdAndUpdate(recipientId, updatedData, {new: true});
        } catch (error) {
            console.error('Error editing recipient');
            console.error(error);
            throw error;
        }
    }

    static async deleteRecipient(recipientId) {
        try {
            await RecipientModel.findByIdAndDelete(recipientId);
        } catch (error) {
            console.error('Error deleting recipient');
            console.error(error);
            throw error;
        }
    }

    static async getAllRecipients() {
        try {
            return await RecipientModel.find().sort({lastName: 'asc'});
        } catch (error) {
            console.error('Error retrieving recipients');
            console.error(error);
            throw error;
        }
    }
}

export default RecipientsRepository