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

  //automatically generated snippet from the email preview
  //sends a request to an email handler for a subscribed email
  await fetch(`${process.env.URL}/.netlify/functions/emails/subscribed`, {
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

  return {
    statusCode: 200,
    body: JSON.stringify("Mail envoyé !"),
  };
};

export { handler };