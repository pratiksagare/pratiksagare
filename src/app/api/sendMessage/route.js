// pages/api/sendMessage.js
import nodemailer from 'nodemailer';
import ContactEmailTemplate from '../../components/ContactEmailTemplate';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "pratiksagare40@gmail.com",
        pass: "ughzyqwmqotoqaab",
    }
});

export async function POST(req) {
    console.log("Request received from UI");

    try {
        const { name, email, textMessage } = await req.json(); // Get the request body
        // Render the ContactEmailTemplate to a string
        if (name && email && textMessage) {
            const htmlContent = ContactEmailTemplate(name, email, textMessage);
            // Send email
            const info = await transporter.sendMail({
                from: '"Pratik.dev 👻" <pratiksagare0@gmail.com>', // Sender address
                to: "pratiksagare0@gmail.com", // List of receivers
                subject: "Received Message from Pratik.dev test1 ✔", // Subject line
                html: htmlContent, // Use your template for HTML content
            });

            console.log("Message sent: %s", info.messageId);
            return new Response(JSON.stringify({ success: true, messageId: info.messageId }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }

    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}