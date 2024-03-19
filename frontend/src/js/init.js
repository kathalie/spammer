// export function createRecipientRow(id, email, firstName, lastName, middleName) {
//     const tr = document.createElement('tr');
//
//     const recipientTd = document.createElement('td');
//     tr.appendChild(recipientTd);
//
//     const rowContainer = document.createElement('div');
//     rowContainer.className = 'row';
//     recipientTd.appendChild(rowContainer);
//
//     const recipientDataContainer = document.createElement('div');
//     recipientDataContainer.className = 'col';
//     rowContainer.appendChild(recipientDataContainer);
//
//     const recipientEmailP = document.createElement('p');
//     recipientEmailP.innerText = `Email: ${email}`;
//     recipientDataContainer.appendChild(recipientEmailP);
//     const recipientNameP = document.createElement('p');
//     recipientNameP.innerText = `Name: ${lastName} ${middleName} ${firstName}`;
//     recipientDataContainer.appendChild(recipientNameP);
//
//     const deleteButtonContainer = document.createElement('div');
//     deleteButtonContainer.className = 'col-auto';
//     rowContainer.appendChild(deleteButtonContainer);
//
//     const deleteButton = document.createElement('button');
//     deleteButton.innerText = '-';
//     deleteButton.className = 'btn btn-danger';
//     deleteButton.addEventListener('click', async () => {
//         await deleteRecipient(id);
//         await updateTableWithRecipients();
//     });
//
//     const editButton = document.createElement('button');
//     editButton.innerText = 'Edit';
//     editButton.id = 'updateRecipientButton'
//     editButton.className = 'btn btn-warning';
//     editButton.setAttribute("data-toggle", "modal");
//     editButton.setAttribute("data-target", "#editRecipientModal");
//     editButton.setAttribute("data-recipient-id", id);
//     editButton.addEventListener('click', () => {
//         const modal = document.getElementById('editRecipientModal');
//         const updateEmailField = document.getElementById('updateEmailField');
//         const updateFirstNameField = document.getElementById('updateFirstNameField');
//         const updateMiddleNameField = document.getElementById('updateMiddleNameField');
//         const updateLastNameField = document.getElementById('updateLastNameField');
//
//         modal.setAttribute('data-recipient-id', id);
//
//         updateEmailField.value = email;
//         updateFirstNameField.value = firstName;
//         updateMiddleNameField.value = middleName;
//         updateLastNameField.value = lastName;
//     })
//
//     deleteButtonContainer.appendChild(deleteButton);
//     deleteButtonContainer.appendChild(editButton);
//
//     return tr;
// }

// export async function updateTableWithRecipients() {
//     const allRecipientsTable = document.getElementById('all-recipients-tableecipientsTable');
//
//     const recipients = (await getAllRecipients()).recipients;
//     allRecipientsTable.innerHTML = '';
//
//     recipients.forEach((recipient) => {
//         const tr = createRecipientRow(
//             recipient['_id'],
//             recipient.email,
//             recipient.firstName,
//             recipient.lastName,
//             recipient.middleName
//         );
//
//         allRecipientsTable.appendChild(tr);
//     });
// }



// export async function updateTableWithTemplates() {
//     const templates = await getAllTemplates();
//
//     // const templatesTable = document.getElementById('templatesTable');
//     //
//     // const templatePath = '../html/partials/templates-table.ejs';
//     // const templateStr = await fetch(templatePath).then(response => response.text());
//     // const compiledTemplate = ejs.compile(templateStr);
//     //
//     // const templateHTML = templates.map((template) => compiledTemplate({ template })).join('');
//     // templatesTable.innerHTML = '';
//     //
//     // templatesTable.innerHTML = templateHTML;
//
//     const templatesTable = document.getElementById('templates-table');
//     templatesTable.innerHTML = '';
//
//     const templateHTML = ejs.render(`
//         <% templates.forEach(function(template) { %>
//             <tr class="template-row">
//                 <td>
//                     <div class="row">
//                         <div class="col">
//                             <p class="template-text"><%= template.text %></p>
//                         </div>
//                         <div class="col-auto">
//                             <button class="btn btn-danger delete-btn" data-recipient-id="<%= template['_id'] %>">-</button>
//                         </div>
//                     </div>
//                 </td>
//             </tr>
//         <% }); %>
//     `, { templates: templates });
//
//     templatesTable.innerHTML = templateHTML;
//
//     const messageField = document.getElementById('message-field');
//
//     templatesTable.addEventListener('click', event => {
//         if (event.target.classList.contains('delete-btn')) {
//             const button = event.target.closest('button');
//             const id = button.getAttribute('data-recipient-id');
//
//             handleDeleteTemplate(id);
//
//             return;
//         }
//
//         const templateRow = event.target.closest('.template-row');
//         const templateContainer = templateRow.querySelector('.template-text');
//
//         messageField.innerText = templateContainer.innerText;
//
//     });
// }

// export function updateTableWithTemplates(templates) {
//
//     const templatesTable = document.getElementById('templatesTable');
//     templatesTable.innerHTML = '';
//
//     templates.forEach((template) => {
//         const tr = document.createElement('tr');
//         const templateTd = document.createElement('td');
//         const templateTextP = document.createElement('p');
//         templateTextP.innerText = `${template.text}`;
//
//         const rowContainer = document.createElement('div')
//         const templateTextContainer = document.createElement('div');
//         const deleteButtonContainer = document.createElement('div');
//         rowContainer.className = 'row';
//         templateTextContainer.className = 'col';
//         addListenerOnTemplateClick(templateTextContainer, templateTextP.innerText);
//         deleteButtonContainer.className = 'col-auto';
//
//         const deleteButton = document.createElement('button');
//         deleteButton.innerText = '-';
//         deleteButton.className = 'btn btn-danger';
//         addListenerToDeleteTemplateButton(deleteButton, template);
//
//         templateTextContainer.appendChild(templateTextP);
//         deleteButtonContainer.appendChild(deleteButton);
//         rowContainer.appendChild(templateTextContainer);
//         rowContainer.appendChild(deleteButtonContainer);
//         templateTd.appendChild(rowContainer);
//         tr.appendChild(templateTd);
//         templatesTable.appendChild(tr);
//     });
// }