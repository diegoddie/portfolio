"use server";

import { Resend } from "resend";
import { ContactFormSchema } from "@/lib/schemas/contactSchema";
import { EmailContactForm } from "@/components/EmailTemplates/email-contact-form";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    // Invia l'email tramite Resend
    const response = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "",
      to: [process.env.RESEND_TO_EMAIL || ""],
      subject: "Message from portfolio contact form",
      react: await EmailContactForm({
        name,
        message,
        email,
      }),
    });

    // Verifica la risposta e restituisci il risultato
    if (response.data) {
      return {
        success: true,
        message: "Your message has been sent successfully.",
      };
    } else {
      return {
        success: false,
        message: "Failed to send the message. Please try again.",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while sending your message.",
    };
  }
};
