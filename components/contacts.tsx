"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { SubmitButton } from "./SubmitButton";
import { sendEmail } from "@/app/actions/contacts";
import { useForm } from "react-hook-form";
import { ContactFormSchema } from "@/lib/schemas/contactSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

export default function Contacts() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ContactFormSchema>) {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("message", values.message);

      // Chiamata alla funzione sendEmail con il FormData
      const { success } = await sendEmail(formData);

      if (success) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
          variant: "default",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <section className="py-12 md:py-24 w-full" id="contacts">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        className="space-y-10 mb-16"
      >
        <div className="space-y-5 text-center">
          <Badge className="font-normal border border-primary shadow-2xl text-black bg-secondary dark:bg-background dark:text-white text-lg hover:bg-secondary">
            <MessageSquare className="mr-2" size={18} />
            <span className="tracking-wider">contact me</span>
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Let&apos;s Work Together
          </h1>
          <p className="mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Have a project in mind? I&apos;d love to help you bring it to life.
          </p>
        </div>

        <div className="container mx-auto items-center justify-center flex">
          <Card className="p-6 w-full max-w-xl border border-primary shadow-lg shadow-primary/60 bg-gradient-to-br from-white to-primary/40 dark:from-slate-800 dark:to-primary/30 dark:text-white backdrop-blur-sm">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-white/50 dark:bg-slate-900/50"
                          placeholder="Your name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-white/50 dark:bg-slate-900/50"
                          placeholder="your@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-[150px] bg-white/50 dark:bg-slate-900/50"
                          placeholder="Your message..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <SubmitButton isLoading={form.formState.isSubmitting} />
              </form>
            </Form>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
