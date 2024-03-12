import {deleteTemplate, getAllRecipients, getAllTemplates, saveRecipient, saveTemplate, sendSpam} from "./fetcher.js";
import {updateListWithRecipients, updateTableWithTemplates} from "./init.js";

export function addListenerToSaveRecipientButton() {
    const button = document.getElementById('saveButton');

    button.addEventListener('click', async () => {
        const email = document.getElementById('email').value;
        const firstName = document.getElementById('firstName').value;
        const middleName = document.getElementById('middleName').value;
        const lastName = document.getElementById('lastName').value;

        saveRecipient(email, firstName, middleName, lastName)
            .then(() => document.getElementById('recipientForm').reset())
            .catch(err => {
                console.error('Error saving recipient');
                console.log(err)
            });

        const recipients = await getAllRecipients();

        updateListWithRecipients(recipients);
    });
}

export function addListenerToSaveTemplateButton() {
    const button = document.getElementById('saveMessageTemplateButton');

    button.addEventListener('click', async () => {
        const text = document.getElementById('messageField').value;

        saveTemplate(text)
            .catch(err => {
                console.error('Error saving template');
                console.log(err)
            });

        const templates = await getAllTemplates();

        updateTableWithTemplates(templates);
    });
}


export function addListenerToSendButton() {
    const button = document.getElementById('spamButton');

    button.addEventListener('click', async () => {
        const recipients = await getAllRecipients();

        console.log(recipients)

        const subject = document.getElementById('subjectField').value;
        const text = document.getElementById('messageField').value;

        sendSpam(recipients, subject, text);
    });
}

export function addListenerToDeleteTemplateButton(deleteButton, template) {
    deleteButton.addEventListener('click', () => {
        deleteTemplate(template['_id'])
            .then(async () => {
                const templates = await getAllTemplates();

                updateTableWithTemplates(templates)
            })
            .catch(err => {
                console.error(`Error deleting template with text "${template.text}"`);
                console.log(err);
            })
    });
}

export function addListenerOnTemplateClick(templateContainer, templateText) {
    const messageField = document.getElementById('messageField');

    templateContainer.addEventListener('click', (event) => {
        event.stopImmediatePropagation();
        messageField.innerText = templateText;
    });
}
