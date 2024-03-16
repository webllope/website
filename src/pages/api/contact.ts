import type { APIRoute } from "astro";
import type { ContactFormData } from "@/lib/types";
import mailer, {
  webllopeSenderEmail,
  type MailData,
  type MailError,
} from "@/lib/mailer";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, message, company, phone } =
      (await request.json()) as ContactFormData;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          message: "Missing required fields",
        }),
        { status: 400 },
      );
    }

    const msgForWebllope = {
      from: webllopeSenderEmail,
      to: "info@webllope.es",
      subject: "Formulario de contacto de webllope.es",
      text: `Nombre: ${name}\nEmail: ${email}\nCompañía: ${company}\nTeléfono: ${phone}\nMensaje: ${message}`,
    };

    const msgForClient: MailData = {
      from: webllopeSenderEmail,
      to: email,
      dynamicTemplateData: {
        name: name,
        to: [{ email: email }],
      },
      templateId: "d-26c30776e18b47c2b2d15a1a03209803",
      asm: {
        groupId: 27970,
      },
    };

    try {
      // const [response, _] = await sendGrid.send(msg);
      await mailer.send(msgForWebllope);
      await mailer.send(msgForClient);
    } catch (error) {
      const { response } = error as MailError;
      console.error(response.body);
    }

    return new Response(null, { status: 204 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        message: "Error handling form",
      }),
      { status: 500 },
    );
  }
};
