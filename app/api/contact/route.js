import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SEND_GRID_KEY);

// Exporter la méthode POST
export async function POST(req) {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
        return new Response(JSON.stringify({ message: 'INVALID_PARAMETER' }), {
            status: 400
        });
    }

    const pattern =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!pattern.test(email)) {
        return new Response(JSON.stringify({
            message: "EMAIL_SYNTAX_INCORRECT",
        }), {
            status: 400
        });
    }

    const contenu = message
        .replace(/\n/g, "<br>")
        .replace(/\r/g, "<br>")
        .replace(/\t/g, "<br>")
        .replace(/<(?!br\s*\/?)[^>]+>/g, "");

		const sendGridMail = {
			to: process.env.EMAIL_CLIENT,
			from: process.env.EMAIL_MASTER,
			subject: `Entreprise Gurtner - ${subject}`,
			text: `${name} vous a contacté.\n\nVoici son message :\n\n${message}`,
			html: `<p>${name} vous a contacté.</p><p>Voici son message :</p><p>${message}</p>`,
		};		

    try {
        await sgMail.send(sendGridMail);
        return new Response(JSON.stringify({
            message: "EMAIL_SENDED_SUCCESSFULLY",
        }), {
            status: 200
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({
            message: "ERROR_WITH_SENDGRID",
            error: error.message,
        }), {
            status: 500
        });
    }
}
