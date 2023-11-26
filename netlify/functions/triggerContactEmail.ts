import type { Handler } from "@netlify/functions";
import fetch from "node-fetch";
//@ts-ignore
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
    const data = {
  personalizations: [
    {
      to: [{ email: "charles@gdm-pixel.fr" }],
      subject: requestBody.demande,
    },
  ],
  from: { email: "charles@gdm-pixel.fr" }, // Utilisez votre adresse email vérifiée par SendGrid
  content: [
    {
      type: 'text/plain',
      value: requestBody.message,
    },
    {
      type: 'text/html',
      value: `<p>${requestBody.message}</p>`, // Vous pouvez mettre ici le HTML de votre email
    },
  ],
};

const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
  method: 'POST',
  headers: {
    //'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
    //'Content-Type': 'application/json',
    "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET as string,
  },
  body: JSON.stringify(data),
});
console.log(`Status Code: ${response.status}`);
console.log(`Headers: ${JSON.stringify(response.headers)}`);
const responseBody = await response.text(); // Use text to ensure you get raw response even if it's not JSON
console.log(`Body: ${responseBody}`);
const responseData = await response.text();

console.log('SendGrid response:', responseData);
  } 
  
  catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email', error: error }),
    };
  }
};

export { handler };