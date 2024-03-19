import {
    addListenersToRecipientsTable,
    addListenersToTemplatesTable, addListenerToCreateRecipientButton,
    addListenerToSaveRecipientButton,
    addListenerToSaveTemplateButton,
    addListenerToSendButton, addListenerToSaveRecipientDataButton
} from "./listeners.js";

document.addEventListener('DOMContentLoaded', async () => {
    addListenersToTemplatesTable();
    addListenersToRecipientsTable();
    addListenerToCreateRecipientButton();

    addListenerToSaveRecipientButton();
    addListenerToSaveRecipientDataButton();
    addListenerToSendButton();
    await addListenerToSaveTemplateButton();
});
