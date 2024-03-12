const baseApiUrl = 'http://localhost:3000/api/'

export async function getAllRecipients() {
    const url = `${baseApiUrl}/recipients`;
    const response = await fetch(url);

    return response.json();
}

export async function getAllTemplates() {
    const url = `${baseApiUrl}/templates`;
    const response = await fetch(url);

    return response.json();
}

export async function saveRecipient(email, firstName, middleName, lastName) {
    const method = 'POST';
    const url = `${baseApiUrl}/recipient`;

    const response = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, firstName, middleName, lastName }),
    });

    return response.json();
}
export async function saveTemplate(text) {
    const method = 'POST';
    const url = `${baseApiUrl}/template`;

    const response = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
    });

    return response.json();
}

export async function deleteTemplate(templateId) {
    const method = 'DELETE';
    const url = `${baseApiUrl}/templates/${templateId}`;

    const response = await fetch(url, {
        method,
    });

    return response.json();
}

export function sendSpam(recipients, subject, text) {
    const method = 'POST'
    const url = `${baseApiUrl}/sendSpam`;

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
                console.log(err);
            });
    }
}