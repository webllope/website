import contactForm from "./contact-form";
import errors from "./errors";
import { ui } from "./ui";
import { content } from "./content";

export default {
  errors,
  contactForm,
  ...ui,
  ...content,
};
