"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  experience: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  experience: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Unable to send enquiry");
      }

      setStatus("success");
      setFormData(initialFormState);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-intro">
            <p className="section-eyebrow">Get In Touch</p>

            <h2>
              Ready to join
              <br />
              the next session?
            </h2>

            <p>
              Send us an enquiry and let us know a little about your volleyball
              experience. We&apos;ll get back to you with everything you need
              to know before joining a session.
            </p>

            <div className="contact-info">
              <div>
                <span>Training</span>
                <strong>Every Saturday</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>Orrong Romanis Recreation Centre</strong>
              </div>

              <div>
                <span>Session Fee</span>
                <strong>$21 per person</strong>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="experience">Volleyball experience</label>

                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select your experience level
                  </option>

                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="returning">Returning player</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're looking for..."
                  rows={6}
                  required
                />
              </div>

              <button
                type="submit"
                className="button button-primary form-submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Enquiry"}
              </button>

              <div className="form-status" aria-live="polite">
                {status === "success" && (
                  <p className="form-success">
                    Thanks for your enquiry. We&apos;ll be in touch soon.
                  </p>
                )}

                {status === "error" && (
                  <p className="form-error">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}