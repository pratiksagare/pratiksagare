// src/components/ContactEmailTemplate.js
function ContactEmailTemplate(name, email, message) {
    return `
        <div style="height: auto; width: 100%; background-color: #e2e8f0; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; justify-content: center; align-items: center; padding: 16px; background-color: #111;">
                <h5 style="font-family: 'Gilroy', sans-serif; color: white; margin: 0;">Pratik.dev</h5>
            </div>
            <div style="padding: 20px; color: #111;">
                <span style="letter-spacing: 0.05em; font-family: 'Gilroy', sans-serif;">
                    You have received a message from <b>${name}</b>. His/her email is <b>${email}</b>.
                </span>
                <br /> <br />
                <span style="letter-spacing: 0.05em; font-family: 'Gilroy', sans-serif;">
                    <b>His/Her query is as below:</b>
                </span>
                <br />
                <span style="letter-spacing: 0.05em; font-family: 'Gilroy', sans-serif;">
                    ${message}
                </span>
            </div>
        </div>
    `;
}

export default ContactEmailTemplate;
