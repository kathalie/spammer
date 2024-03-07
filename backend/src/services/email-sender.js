import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kathrine312003@gmail.com',
        pass: 'mpdgsrjkezoecxuv'
    }
});

export function sendEmail(to, subject, text) {
    const mailOptions = {
        from: 'kathrine312003@gmail.com',
        to,
        subject,
        text,
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.error('Error when sending:', error);
            throw error;
        } else {
            console.log('Successfully sent:', info.response);
        }
    });
}