import sendGrid from "@sendgrid/mail";
import type { MailDataRequired, ResponseError } from "@sendgrid/mail";

export type MailData = MailDataRequired;
export type MailError = ResponseError;

export const webllopeSenderEmail = "info@webllope.es";

function send(message: MailData) {
  const isDev = import.meta.env.DEV;

  if (isDev) {
    console.group("#### [DEV] Sending email");
    console.log("Message:", message);
    console.groupEnd();

    return Promise.resolve();
  }

  // takes sendgrid env variable from Vercel
  sendGrid.setApiKey(process.env.SENDGRID_API_KEY as string);
  return sendGrid.send(message);
}

export default { send };
