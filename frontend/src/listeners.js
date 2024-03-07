import {saveRecipient, sendSpam} from "./fetcher.js";

export function addListenerToSaveButton() {
    const button = document.getElementById('saveButton');

    button.addEventListener('click', saveRecipient);
}

export function addListenerToSendButton() {
    const button = document.getElementById('spamButton');

    button.addEventListener('click', sendSpam);
}

export function addListenerToMessageSelector() {
    const allOptions = document.getElementsByClassName('messageSelectOption');
    //const selector = document.getElementById('messageSelect');
    const messageField = document.getElementById('messageField');

    for (const option of allOptions) {
        option.addEventListener('click', () => {
            console.log(option.value);

            messageField.innerText = option.value;
        })
    }

    // selector.addEventListener("change", () => {
    //     console.log('change');
    //     const selectedOption = selector.value;
    //     console.log(selectedOption);
    //
    //     messageField.innerText = selectedOption;
    // });
}