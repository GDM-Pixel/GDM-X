import type { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const handler: Handler = async function(event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

 const requestBody = JSON.parse(event.body) as {
  contactNumber: string; // Correspond à "contact_number" dans le formulaire
  userName: string;      // Correspond à "user_name"
  userEmail: string;     // Correspond à "user_mail"
  userPhone: string;     // Correspond à "user_phone"
  demande: string;       // Correspond à "demande"
  message: string;       // Correspond à "message"
};

try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      headers: {
        "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET as string,
      },
      method: "POST",
      body: JSON.stringify({
        from: requestBody.userEmail,
        to: "charles@gdm-pixel.fr",
        subject: "Message sur GDM-Pixel.fr",
        parameters: {
          name: requestBody.userName,
          email: requestBody.userEmail,
        },
      }),
    });

    const responseData = await response.text(); // ou response.json() si la réponse est en JSON

    console.log('SendGrid response:', responseData);

    return {
      statusCode: 200,
      body: responseData,
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email', error: error }),
    };
  }
};

export { handler };