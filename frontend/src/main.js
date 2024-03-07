
// // Function to delete a recipient
// async function deleteRecipient(recipientId) {
//     const response = await fetch(`/api/recipients/${recipientId}`, {
//         method: 'DELETE',
//     });
//
//     if (response.ok) {
//         await fetchAndDisplayRecipients();
//     } else {
//         console.error('Error deleting recipient');
//     }
// }
//
// // Function to fetch and display default messages
// async function fetchDefaultMessages() {
//     // Implement fetching default messages from the server if needed
//     // Update the options in the messageSelect element
// }
//
// // Function to create a new message
// function createNewMessage() {
//     const newMessage = document.getElementById('newMessage').value;
//     // Implement logic to save the new message on the server if needed
// }
//
// // Function to send email
// async function sendEmail() {
//     // Implement logic to send email using selected recipients and message
// }
//
// function saveMessageTemplate() {
//
// }
//
// // Initial setup
// document.addEventListener('DOMContentLoaded', () => {
//     fetchAndDisplayRecipients().then();
//     fetchDefaultMessages().then();
// });


import {addListenerToMessageSelector, addListenerToSaveButton, addListenerToSendButton} from "./listeners.js";
import {getAllRecipients} from "./fetcher.js";

async function init() {
    addListenerToSaveButton();
    addListenerToSendButton();
    addListenerToMessageSelector();
    await getAllRecipients();
}

init().then();