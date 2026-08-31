"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

const PREFERRED_SERVICES = ["Bay Rental", "Tool Hire", "Long-Term Booking"];

const initialValues = {
  name: "",
  email: "",
  phone: "",
  preferredService: PREFERRED_SERVICES[0],
  message: "",
};

/**
 * submitContactForm — isolated submission logic. Currently simulated
 * since there is no backend in Phase 1. Swap the body of this function
 * for a real API route / form service / CRM call later without
 * touching any of the form UI below.
 */
async function submitContactForm(values) {
  await new Promise((resolve) => setTimeout(resolve, 900));
  return { ok: true };
}

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Please add a short message.";
  return errors;
}

const inputClasses =
  "w-full rounded-none border-0 border-b border-line-strong bg-bg px-md py-sm text-[16px] text-fg placeholder:text-fg-muted focus:outline-none focus:border-b-2 focus:border-primary";

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      await submitContactForm(values);
      setStatus("success");
      setValues(initialValues);
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-sm border border-hairline-strong bg-bg p-xxl text-center"
      >
        <CheckCircle2 size={32} className="text-success" aria-hidden="true" />
        <p className="text-[18px] font-bold text-fg">Message sent</p>
        <p className="text-[14px] text-fg-secondary">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-sm text-[14px] font-bold text-fg underline underline-offset-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-lg">
      <div>
        <label htmlFor="name" className="mb-xxs block text-[14px] font-bold text-fg">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClasses}
        />
        {errors.name ? (
          <p id="name-error" className="mt-xxs text-[13px] text-error">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="grid gap-lg sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-xxs block text-[14px] font-bold text-fg">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClasses}
          />
          {errors.email ? (
            <p id="email-error" className="mt-xxs text-[13px] text-error">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="mb-xxs block text-[14px] font-bold text-fg">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="preferredService"
          className="mb-xxs block text-[14px] font-bold text-fg"
        >
          Preferred Service
        </label>
        <select
          id="preferredService"
          name="preferredService"
          value={values.preferredService}
          onChange={handleChange}
          className={`${inputClasses} appearance-none`}
        >
          {PREFERRED_SERVICES.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-xxs block text-[14px] font-bold text-fg">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClasses}
        />
        {errors.message ? (
          <p id="message-error" className="mt-xxs text-[13px] text-error">
            {errors.message}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <p role="alert" className="text-[14px] text-error">
          Something went wrong sending your message. Please try again.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-xs rounded-xs bg-primary px-xl py-[14px] text-[14.4px] font-bold tracking-button text-on-primary transition-colors hover:bg-primary-deep disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
