import type { APIRoute } from "astro";
import sendGrid from "@sendgrid/mail";

const isDev = import.meta.env.DEV;

export const POST: APIRoute = async ({ request }) => {
  try {
    sendGrid.setApiKey(
      "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",
    );

    // Getting posted data from our contact form
    const data = await request.formData();
    console.log("# Form data:", data)
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const company = data.get("company");
    const phone = data.get("phone");

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          message: "Missing required fields",
        }),
        { status: 400 }
      );
    }

    const msgForWebllope = {
      from: "info@webllope.es",
      to: "info@webllope.es",
      subject: "Formulario de contacto de webllope.es",
      text: `Nombre: ${name}\nEmail: ${email}\nCompañía: ${company}\nTeléfono: ${phone}\nMensaje: ${message}`,
    };

    const msgForClient: sendGrid.MailDataRequired = {
      from: "info@webllope.es",
      to: email as string,
      dynamicTemplateData: {
        name: name,
        to: [
          {
            email: email
          }
        ],
      },
      templateId: "d-26c30776e18b47c2b2d15a1a03209803",
      asm: {
        groupId: 27970
      }
    };

    if (isDev) {
      console.group("#### Sending email");
      console.log("For webllope:", msgForWebllope);
      console.log("For client:", msgForClient);
      console.groupEnd();
    } else {
      try {
        // const [response, _] = await sendGrid.send(msg);        
        await sendGrid.send(msgForWebllope);
        await sendGrid.send(msgForClient);
      } catch (error) {
        const { response } = (error as sendGrid.ResponseError)
        console.error(response.body)
      }
    }

    // Do something with the data, then return a success response
    return new Response(
      JSON.stringify({
        message: "Success!"
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        message: "Error handling form",
      }),
      { status: 500 }
    );
  }
};