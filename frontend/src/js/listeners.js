import {
    deleteRecipient,
    editRecipient,
    getAllRecipients,
    saveRecipient,
    saveTemplate,
    sendSpam
} from "./fetcher.js";
import {deleteTemplate} from "./fetcher.js";
import {handleFetch} from "./utils.js";

export function addListenerToCreateRecipientButton() {
    const button = document.getElementById('create-recipient-button');

    button.addEventListener('click', () => {
        const modal = document.getElementById('recipient-data-modal');

        modal.toggleAttribute('update', false);
    })
}

export function addListenersToTemplatesTable() {
    const templatesTable = document.getElementById('templates-table');
    const messageField = document.getElementById('message-field');
    const subjectField = document.getElementById('subject-field');

    templatesTable.addEventListener('click', event => {
        if (event.target.classList.contains('delete-btn')) {
            const button = event.target.closest('button');
            const templateId = button.getAttribute('data-template-id');

            handleFetch(
                async () => await deleteTemplate(templateId),
                'Failed to delete a template.'
            );

            return;
        }

        const templateRow = event.target.closest('.template-row');
        const messageContainer = templateRow.querySelector('.template-message');
        const subjectContainer = templateRow.querySelector('.template-subject');

        messageField.innerText = messageContainer.innerText;
        subjectField.innerText = subjectContainer.innerText;

        const modal = document.getElementById('templates-modal');
        modal.querySelector('.close-modal').click();
    });
}

export function addListenersToRecipientsTable() {
    const recipientsTable = document.getElementById('recipients-table');

    recipientsTable.addEventListener('click', event => {
        if (event.target.classList.contains('delete-button')) {
            const button = event.target.closest('button');
            const recipientId = button.getAttribute('data-recipient-id');

            handleFetch(
                async () => await deleteRecipient(recipientId),
                'Failed to delete a recipient.'
            );

            return;
        }

        if (event.target.classList.contains('update-button')) {
            const button = event.target.closest('button');
            const recipientId = button.getAttribute('data-recipient-id');

            const modal = document.getElementById('recipient-data-modal');
            modal.toggleAttribute('update', true);
            modal.setAttribute('data-recipient-id', recipientId);

            const tableRow = event.target.closest('tr');
            const updateEmailField = document.getElementById('update-email-field');
            const updateFirstNameField = document.getElementById('update-first-name-field');
            const updateMiddleNameField = document.getElementById('update-middle-name-field');
            const updateLastNameField = document.getElementById('update-last-name-field');

            updateEmailField.value = tableRow.querySelector('.recipient-email').innerText;
            updateFirstNameField.value = tableRow.querySelector('.recipient-first-name').innerText;
            updateMiddleNameField.value = tableRow.querySelector('.recipient-middle-name').innerText;
            updateLastNameField.value = tableRow.querySelector('.recipient-last-name').innerText;
        }
    });
}

export function addListenerToSaveRecipientDataButton() {
    const saveUpdatedRecipients = document.getElementById('save-recipient-button');

    saveUpdatedRecipients.addEventListener('click',  () => {

        const modal = document.getElementById('recipient-data-modal');
        const id = modal.getAttribute('data-recipient-id');

        const email = document.getElementById('update-email-field').value;
        const firstName = document.getElementById('update-first-name-field').value;
        const middleName = document.getElementById('update-middle-name-field').value;
        const lastName = document.getElementById('update-last-name-field').value;

        if (modal.hasAttribute('update')) {
            handleFetch(
                async () => await editRecipient(id, email, firstName, middleName, lastName),
                'Failed to update recipient. Probably such email already exists.'
            );
        }
        else {
            handleFetch(
                async () => await saveRecipient(email, firstName, middleName, lastName),
                'Failed to create recipient. Probably such email already exists.'
            );
        }
    })
}

export async function addListenerToSaveTemplateButton() {
    const button = document.getElementById('save-message-template-button');

    button.addEventListener('click',  () => {
        const message = document.getElementById('message-field').value;
        const subject = document.getElementById('subject-field').value;

        handleFetch(
            async () => await saveTemplate(message, subject),
            'Failed to save an email template.'
        );
    });
}


export function addListenerToSendButton() {
    const button = document.getElementById('spam-button');

    button.addEventListener('click', async () => {
        const recipients = (await getAllRecipients()).recipients;

        const subject = document.getElementById('subject-field').value;
        const text = document.getElementById('message-field').value;

        sendSpam(recipients, subject, text);
    });
}


