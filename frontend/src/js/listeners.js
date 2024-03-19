import {
    deleteRecipient,
    editRecipient,
    getAllRecipients,
    saveRecipient,
    saveTemplate,
    sendSpam
} from "./fetcher.js";
import {deleteTemplate} from "./fetcher.js";

export function addListenerToSaveRecipientButton() {
    const button = document.getElementById('save-recipient-button');

    button.addEventListener('click',  () => {
        const email = document.getElementById('email').value;
        const firstName = document.getElementById('first-name').value;
        const middleName = document.getElementById('middle-name').value;
        const lastName = document.getElementById('last-name').value;

        saveRecipient(email, firstName, middleName, lastName)
            .then(() => {
                document.getElementById('recipient-form').reset();
                location.reload();
            })
            .catch(err => {
                alert('Failed to save recipient');
                console.log(err);
            });
    });
}

export function addListenerToCreateRecipientButton() {
    const button = document.getElementById('create-recipient-button');

    button.addEventListener('click', () => {
        const modal = document.getElementById('recipient-data-modal');

        modal.toggleAttribute('update', false);
    })
}

function handleDeleteTemplate(id) {
    deleteTemplate(id)
        .then(() => {
            location.reload();
        })
        .catch(err => {
            alert('Failed to delete a template.');
            console.log(err);
        });
}

export function addListenersToTemplatesTable() {
    const templatesTable = document.getElementById('templates-table');
    const messageField = document.getElementById('message-field');

    templatesTable.addEventListener('click', event => {
        if (event.target.classList.contains('delete-btn')) {
            const button = event.target.closest('button');
            const id = button.getAttribute('data-recipient-id');

            handleDeleteTemplate(id);

            return;
        }

        const templateRow = event.target.closest('.template-row');
        const templateContainer = templateRow.querySelector('.template-text');

        messageField.innerText = templateContainer.innerText;

    });
}

function handleDeleteRecipient(id) {
    deleteRecipient(id)
        .then(() => {
            location.reload();
        })
        .catch(err => {
            alert('Failed to delete a recipient.');
            console.log(err);
        });
}

export function addListenersToRecipientsTable() {
    const recipientsTable = document.getElementById('recipients-table');

    recipientsTable.addEventListener('click', event => {
        if (event.target.classList.contains('delete-button')) {
            const button = event.target.closest('button');
            const recipientId = button.getAttribute('data-recipient-id');

            handleDeleteRecipient(recipientId);

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

        console.log(modal.classList)

        if (modal.hasAttribute('update')) {
            editRecipient(id, email, firstName, middleName, lastName)
                .then(() => {
                    location.reload()
                })
                .catch(err => {
                    alert('Failed to update recipient');
                    console.log(err)
                });
        }
        else {
            saveRecipient(email, firstName, middleName, lastName)
                .then(() => {
                    location.reload()
                })
                .catch(err => {
                    alert('Failed to create recipient');
                    console.log(err)
                });
        }
    })
}

export async function addListenerToSaveTemplateButton() {
    const button = document.getElementById('save-message-template-button');

    button.addEventListener('click',  () => {
        const text = document.getElementById('message-field').value;

        saveTemplate(text)
            .then(() => {
                location.reload();
            })
            .catch(err => {
                alert('Failed to save a message template');
                console.log(err)
            });
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


