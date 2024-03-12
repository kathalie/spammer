import {
    addListenerToSaveRecipientButton,
    addListenerToSaveTemplateButton,
    addListenerToSendButton
} from "./listeners.js";
import {getAllRecipients, getAllTemplates} from "./fetcher.js";
import {updateListWithRecipients, updateTableWithTemplates} from "./init.js";

async function init() {
    updateListWithRecipients(await getAllRecipients());
    updateTableWithTemplates(await getAllTemplates());

    addListenerToSaveRecipientButton();
    addListenerToSendButton();
    addListenerToSaveTemplateButton();
    // addListenerToMessageSelector();
    await getAllRecipients();
}

init().then();