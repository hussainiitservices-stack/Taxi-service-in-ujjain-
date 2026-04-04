"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_PHONE, WHATSAPP_NUMBER } from "@/lib/config";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number.")
    .max(16, "Phone number is too long."),
  pickup: z.string().min(2, "Please enter pickup location."),
  drop: z.string().min(2, "Please enter drop location."),
  // Allow empty/whitespace message (default: "") since field is optional.
  message: z
    .string()
    .optional()
    .refine(
      (v) => v === undefined || v.trim().length === 0 || v.trim().length >= 5,
      "Please add a short message.",
    ),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "redirecting" | "success"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      pickup: "",
      drop: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setStatus("submitting");

    const msg = [
      "Hi! I want to book a taxi in Ujjain.",
      "",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Pickup: ${values.pickup}`,
      `Drop: ${values.drop}`,
      values.message ? `Message: ${values.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const href = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
      msg,
    )}`;

    setStatus("redirecting");
    window.open(href, "_blank", "noopener,noreferrer");
    setStatus("success");
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-0">
        <CardTitle>Contact & Booking</CardTitle>
        <CardDescription>
          Fill the form and we will open WhatsApp with your details. Or call{" "}
          <a className="font-semibold text-zinc-800" href={`tel:${CONTACT_PHONE}`}>
            {CONTACT_PHONE}
          </a>
          .
        </CardDescription>
      </CardHeader>

      <form className="mt-6 grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <label className="text-sm font-medium text-zinc-900" htmlFor="name">
            Name
          </label>
          <Input id="name" placeholder="Your name" {...register("name")} />
          {errors.name?.message ? (
            <p className="text-xs text-red-600">{errors.name.message}</p>
          ) : null}
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium text-zinc-900" htmlFor="phone">
            Phone
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="10-digit mobile number"
            {...register("phone")}
          />
          {errors.phone?.message ? (
            <p className="text-xs text-red-600">{errors.phone.message}</p>
          ) : null}
        </div>

        <div className="grid gap-2">
          <label
            className="text-sm font-medium text-zinc-900"
            htmlFor="pickup"
          >
            Pickup location
          </label>
          <Input
            id="pickup"
            placeholder="e.g. Ujjain Junction"
            {...register("pickup")}
          />
          {errors.pickup?.message ? (
            <p className="text-xs text-red-600">{errors.pickup.message}</p>
          ) : null}
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium text-zinc-900" htmlFor="drop">
            Drop location
          </label>
          <Input
            id="drop"
            placeholder="e.g. Mahakal Temple"
            {...register("drop")}
          />
          {errors.drop?.message ? (
            <p className="text-xs text-red-600">{errors.drop.message}</p>
          ) : null}
        </div>

        <div className="grid gap-2">
          <label
            className="text-sm font-medium text-zinc-900"
            htmlFor="message"
          >
            Message (optional)
          </label>
          <Textarea
            id="message"
            placeholder="Tell us ride type, time, or any notes."
            {...register("message")}
          />
          {errors.message?.message ? (
            <p className="text-xs text-red-600">{errors.message.message}</p>
          ) : null}
        </div>

        <Button
          type="submit"
          disabled={status === "submitting" || status === "redirecting"}
          className="justify-center"
          size="lg"
        >
          {status === "idle"
            ? "Send on WhatsApp"
            : status === "submitting"
              ? "Preparing..."
              : status === "redirecting"
                ? "Opening WhatsApp..."
                : "Sent!"}
        </Button>

        {status === "success" ? (
          <p className="text-xs leading-5 text-zinc-600">
            If WhatsApp didn&apos;t open, check your pop-up blocker and try again.
          </p>
        ) : null}
      </form>
    </Card>
  );
}

