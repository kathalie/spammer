import {
    addListenersToRecipientsTable,
    addListenersToTemplatesTable, addListenerToCreateRecipientButton,
    addListenerToSaveTemplateButton,
    addListenerToSendButton, addListenerToSaveRecipientDataButton
} from "./listeners.js";

document.addEventListener('DOMContentLoaded', async () => {
    addListenersToTemplatesTable();
    addListenersToRecipientsTable();
    addListenerToCreateRecipientButton();
    addListenerToSaveRecipientDataButton();
    addListenerToSendButton();
    await addListenerToSaveTemplateButton();
});
