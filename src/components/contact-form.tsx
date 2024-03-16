import { useState } from "react";
import type { FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";

import type { ContactFormData, HTMLInputTypeAttribute } from "@lib/types";

import {
  getLangFromUrl,
  useTranslations as getTranslations,
} from "@i18n/utils";
import { cn } from "@/utils/all";
import { isValidPhone } from "@/lib/validator";

interface ContactFormProps {
  url: URL;
}

export default function ContactForm({ url }: ContactFormProps) {
  const [errors, setErrors] = useState<{ phone?: string }>({});

  const lang = getLangFromUrl(url);
  const t = getTranslations(lang);

  const fields: Array<{
    placeholder: string;
    name: string;
    type: HTMLInputTypeAttribute;
    label: string;
    autoComplete?: string;
    maxLength?: number;
  }> = [
    {
      autoComplete: "name",
      placeholder: "Daniel",
      type: "text",
      name: "name",
      maxLength: 255,
      label: t("contactForm.fields.name"),
    },
    {
      autoComplete: "email",
      placeholder: "info@webllope.es",
      type: "email",
      name: "email",
      maxLength: 255,
      label: t("contactForm.fields.email"),
    },
    {
      autoComplete: "organization",
      placeholder: "Webllope",
      type: "text",
      name: "company",
      maxLength: 255,
      label: t("contactForm.fields.company"),
    },
    {
      autoComplete: "tel",
      placeholder: "+34 722 10 99 24",
      type: "tel",
      name: "phone",
      maxLength: 24,
      label: t("contactForm.fields.phone"),
    },
  ];

  function clearForm() {
    const formElement = document.getElementById(
      "form",
    ) as HTMLFormElement | null;
    if (!!formElement) {
      formElement.reset();
      setErrors({});
    }
  }

  function sanitizeFormData(formData: FormData): ContactFormData {
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const sanitizeField = (value: FormDataEntryValue | null) =>
      value != null ? (value as string).trim() : "";

    return {
      name: sanitizeField(name),
      email: sanitizeField(email),
      company: sanitizeField(company),
      phone: sanitizeField(phone).replace(" ", ""),
      message: sanitizeField(message),
    };
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    let isError = false;

    const data = sanitizeFormData(formData);

    if (!isValidPhone(data.phone)) {
      setErrors((prev) => ({ ...prev, phone: "invalid phone number" }));
      isError = true;
    }

    if (isError) {
      return;
    }

    const response = await fetch(`/api/contact?lang=${lang}`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast.success(t("contactForm.successMsg"), { duration: 4000 });
      clearForm();
    } else {
      toast.error(t("contactForm.errorMsg"), { duration: 4000 });
    }
  }

  function error(fieldName: string) {
    return !!errors[fieldName]
      ? "border-red-500 focus:border-red-600 focus:ring-red-600/5"
      : "";
  }

  return (
    <>
      <Toaster position="top-right" />
      <form id="form" onSubmit={submit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          {t("contactForm.title")}
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white">
          {fields.map(({ label, ...field }) => (
            <div
              className="group relative z-0 transition-all focus-within:z-10"
              key={`:S${field.name}:`}>
              <input
                required
                id={`:S${field.name}:`}
                className={cn(
                  "peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl",
                  error(field.name),
                )}
                {...field}
              />
              <label
                htmlFor={`:S${field.name}:`}
                className="pointer-events-none absolute left-6 top-1/2 -mt-5 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">
                {label}
              </label>
            </div>
          ))}
        </div>
        <div className="group relative z-0 transition-all focus-within:z-10">
          <textarea
            required
            id={`:S$message:`}
            name="message"
            rows={4}
            placeholder={t("contactForm.fields.message")}
            maxLength={1000}
            className="peer block w-full border border-t-0 border-neutral-300 bg-transparent px-6 pb-4 pt-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 rounded-b-2xl"></textarea>
        </div>
        <button
          className="mt-10 inline-flex rounded-full px-8 py-4 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
          type="submit">
          <span className="relative top-px">{t("contactForm.sendBtn")}</span>
        </button>
      </form>
    </>
  );
}
