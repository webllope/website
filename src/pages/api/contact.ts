import type { APIRoute } from "astro";
import sendGrid from "@sendgrid/mail";

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

    const msg = {
      to: "info@webllope.es",
      from: "info@webllope.es",
      subject: "Formulario de contacto de webllope.es",
      text: `Nombre: ${name}\nEmail: ${email}\nCompañía: ${company}\nTeléfono: ${phone}\nMensaje: ${message}`,
    };

    // console.group("#### Sending email");
    // console.log(msg);
    // console.groupEnd();
    await sendGrid.send(msg);

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