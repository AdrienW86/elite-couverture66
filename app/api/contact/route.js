import nodemailer from "nodemailer";

export async function POST(req) {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !subject || !message || !phone) {
        return new Response(JSON.stringify({ message: "INVALID_PARAMETER" }), { status: 400 });
    }

    const cleanMessage = message
        .replace(/\n/g, "<br>")
        .replace(/\r/g, "<br>")
        .replace(/\t/g, "<br>")
        .replace(/<(?!br\s*\/?)[^>]+>/g, "");

    const transporter = nodemailer.createTransport({
        host: process.env.ZOHO_HOST,
        port: Number(process.env.ZOHO_PORT),
        secure: true,
        auth: {
            user: process.env.EMAIL_MASTER,
            pass: process.env.ZOHO_APP_PASSWORD,
        },
    });

    const mailOptions = {
        from: `"Elite Couverture" <${process.env.EMAIL_MASTER}>`,
        to: process.env.EMAIL_CLIENT,
        subject: `Message de votre site web - ${subject}`,
        text: `${name} (${email}, ${phone}) vous a contacté.\n\nMessage:\n${message}`,
        html: `<p>${name} (${email}, ${phone}) vous a contacté.</p><p>Message:</p><p>${cleanMessage}</p>`,
        replyTo: email
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: "EMAIL_SENDED_SUCCESSFULLY" }), { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ message: "ERROR_WITH_ZOHO", error: error.message }), { status: 500 });
    }
}
