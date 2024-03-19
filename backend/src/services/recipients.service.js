import RecipientsRepository from "../data-access/recipients.repository.js";

export async function saveRecipient (recipient){
    try {
        return await RecipientsRepository.saveRecipient(recipient);
    } catch (error) {
        console.error(error);
        throw Error('Failed to save recipient');
    }
}

export async function updateRecipient(recipient, id) {
    try {
        const { lastName, firstName, middleName, email } = recipient;

        return await RecipientsRepository.editRecipient(id, { lastName, firstName, middleName, email });
    } catch (error) {
        console.error(error);
        throw Error('Failed to update recipient');
    }
}

export async function deleteRecipient(id) {
    try {
        await RecipientsRepository.deleteRecipient(id);
    } catch (error) {
        console.error(error);
        throw Error('Failed to delete recipient');
    }
}

export async function getRecipient(id) {
    try {
        return await RecipientsRepository.getRecipient(id);
    } catch (error) {
        console.error(error);
        throw Error('Failed to get recipient');
    }
}

export async function getAllRecipients(page, pageSize) {
    try {
        const recipients = await RecipientsRepository.getAllRecipients(page, pageSize);
        const total = await RecipientsRepository.countAllRecipients();

        return {
            recipients,
            total
        };
    } catch (error) {
        console.error(error);
        throw Error('Failed to get recipients');
    }
}