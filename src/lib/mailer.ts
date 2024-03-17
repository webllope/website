import sendGrid from "@sendgrid/mail";
import type { MailDataRequired, ResponseError } from "@sendgrid/mail";

export type MailData = MailDataRequired;
export type MailError = ResponseError;

export const webllopeSenderEmail = "info@webllope.es";

function send(message: MailData) {
  const isDev = import.meta.env.DEV;

  console.log("# import.meta.env ->,", import.meta.env);
  console.log("# process.env ->,", process.env);

  if (isDev) {
    console.group("#### [DEV] Sending email");
    console.log("Message:", message);
    console.groupEnd();

    return Promise.resolve();
  }

  sendGrid.setApiKey(import.meta.env.SENDGRID_API_KEY);
  // sendGrid.setApiKey(
  //   "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",
  // );
  return sendGrid.send(message);
}

export default { send };
