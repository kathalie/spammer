import {addListenerOnTemplateClick, addListenerToDeleteTemplateButton} from "./listeners.js";

export function updateListWithRecipients(recipients) {
    const recipientsList = document.getElementById('recipientSelect');
    recipientsList.innerHTML = '';

    recipients.forEach((recipient) => {
        const listItem = document.createElement('option');
        listItem.className = 'list-group-item';
        listItem.textContent = `${recipient.email}`;
        recipientsList.appendChild(listItem);
    });
}

export function updateTableWithTemplates(templates) {
    const templatesTable = document.getElementById('templatesTable');
    templatesTable.innerHTML = '';

    templates.forEach((template) => {
        const tr = document.createElement('tr');
        const templateTd = document.createElement('td');
        const templateTextP = document.createElement('p');
        templateTextP.innerText = `${template.text}`;

        const rowContainer = document.createElement('div')
        const templateTextContainer = document.createElement('div');
        const deleteButtonContainer = document.createElement('div');
        rowContainer.className = 'row';
        templateTextContainer.className = 'col';
        addListenerOnTemplateClick(templateTextContainer, templateTextP.innerText);
        deleteButtonContainer.className = 'col-auto';

        const deleteButton = document.createElement('button');
        deleteButton.innerText = '-';
        deleteButton.className = 'btn btn-danger';
        addListenerToDeleteTemplateButton(deleteButton, template);

        templateTextContainer.appendChild(templateTextP);
        deleteButtonContainer.appendChild(deleteButton);
        rowContainer.appendChild(templateTextContainer);
        rowContainer.appendChild(deleteButtonContainer);
        templateTd.appendChild(rowContainer);
        tr.appendChild(templateTd);
        templatesTable.appendChild(tr);
    });
}
