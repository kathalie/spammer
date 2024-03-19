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

    static async getRecipient(recipientId) {
        try {
            return await RecipientModel.findById(recipientId);
        } catch (error) {
            console.error('Error deleting recipient');
            console.error(error);
            throw error;
        }
    }


    static async getAllRecipients(page = 1, pageSize = 5) {
        try {
            const skipAmount = (page - 1) * pageSize;

            return await RecipientModel.find()
                .sort({ lastName: 'asc' })
                .skip(skipAmount)
                .limit(pageSize);
        } catch (error) {
            console.error('Error retrieving recipients');
            console.error(error);
            throw error;
        }
    }

    static async countAllRecipients() {
        return RecipientModel.countDocuments();
    }
}

export default RecipientsRepository