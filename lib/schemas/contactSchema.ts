import { z } from "zod";

// Contact form schema
export const ContactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(5, "Message must be at least 5 characters"),
});
  