export async function getAllRecipients() {
    const response = await fetch('http://localhost:3000/api/recipients');
    const recipients = await response.json();

    const recipientsList = document.getElementById('recipientSelect');
    recipientsList.innerHTML = '';

    recipients.forEach((recipient) => {
        const listItem = document.createElement('option');
        listItem.className = 'list-group-item';
        listItem.textContent = `${recipient.email}`;
        recipientsList.appendChild(listItem);
    });

    return recipients
}

export function saveRecipient() {
    const email = document.getElementById('email').value;
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const lastName = document.getElementById('lastName').value;

    const method = 'POST'
    const url = 'http://localhost:3000/api/recipient';

    fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, firstName, middleName, lastName }),
    })
        .then(() => document.getElementById('recipientForm').reset())
        .catch(err => {
            console.error('Error saving recipient');
            console.log(err)
        });

    getAllRecipients().catch(err => {
        console.error('Error fetching recipients');
        console.log(err)
    });
}

export async function sendSpam() {
    const recipients = await getAllRecipients();

    console.log(recipients)

    const subject = document.getElementById('subjectField').value;
    const text = document.getElementById('messageField').value;

    const method = 'POST'
    const url = 'http://localhost:3000/api/sendSpam';

    for (const recipient of recipients) {
        const email = recipient.email

        fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ to: email, subject, text }),
        })
            .then(() => console.log(`Successfully sent to ${email}`))
            .catch(err => {
                console.error(`Error sending email to ${email} `);
                console.log(err)
            });
    }
}