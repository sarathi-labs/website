import { useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// Leads are delivered via FormSubmit (formsubmit.co) straight to this inbox -
// no backend of our own required. First submission triggers a one-click
// activation email to this address; after that, every submission lands
// directly. Override with VITE_FORM_ENDPOINT if you'd rather use a different
// provider (Formspree, EmailJS, your own function, etc).
const RECIPIENT_EMAIL = "contact@sarathilabs.com";
const FORM_ENDPOINT =
  import.meta.env.VITE_FORM_ENDPOINT ||
  `https://formsubmit.co/ajax/${encodeURIComponent(RECIPIENT_EMAIL)}`;

export default function ContactForm({ showCompany = false, className }) {
  const uid = useId();
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;

    const form = formRef.current;
    const formData = new FormData(form);
    const payload = {};
    formData.forEach((value, key) => {
      payload[key] = value;
    });

    setStatus("submitting");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (data.success === "true" || data.success === true) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else if (data.message && data.message.indexOf("needs Activation") !== -1) {
        // FormSubmit requires a one-time click-to-activate on first use.
        alert(
          `Action required: FormSubmit has sent a 1-click activation link to ${RECIPIENT_EMAIL}.\n\nOpen that inbox (check Spam/Updates if it's not in the main tab) and click "Activate Form". After that one click, every submission lands directly.`
        );
        setStatus("idle");
      } else if (res.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("ContactForm submission failed:", err);
      setStatus("error");
    }
  };

  const buttonLabel = {
    idle: "Book a working session \u2192",
    submitting: "Sending\u2026",
    success: "Thanks \u2014 we\u2019ll reply within 24h!",
    error: "Book a working session \u2192",
  }[status];

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={cn("form", className)}
    >
      <input type="hidden" name="_subject" value="New Consultation Request - Sarathi Labs" />
      <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="field">
        <label htmlFor={`${uid}-name`}>Name</label>
        <Input id={`${uid}-name`} name="name" type="text" placeholder="Your name" required />
      </div>
      <div className="field">
        <label htmlFor={`${uid}-mail`}>Work email</label>
        <Input id={`${uid}-mail`} name="email" type="email" placeholder="you@company.com" required />
      </div>
      {showCompany && (
        <div className="field">
          <label htmlFor={`${uid}-co`}>Company</label>
          <Input id={`${uid}-co`} name="company" type="text" placeholder="Your company" />
        </div>
      )}
      <div className="field">
        <label htmlFor={`${uid}-msg`}>What&rsquo;s slowing your business down?</label>
        <Textarea id={`${uid}-msg`} name="message" placeholder="A sentence is enough to start." />
      </div>

      <Button type="submit" variant="accent" size="full" disabled={status === "submitting"}>
        {buttonLabel}
      </Button>

      {status === "error" && (
        <p className="mt-3 text-[13px] text-center" style={{ color: "#b3261e" }}>
          Something went wrong sending that - please try again, or email us directly.
        </p>
      )}
    </form>
  );
}
