"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showThankYou, setShowThankYou] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  function validateFields() {
    let isValid = true;
    let errors: any = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email address.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Prayer request is required.";
      isValid = false;
    }

    setFieldErrors(errors);
    return isValid;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null); // Clear previous errors when a new request starts
    setFieldErrors({
      name: "",
      email: "",
      message: "",
    }); // Clear field errors

    if (!validateFields()) {
      return;
    }

    setIsLoading(true);

    try {
      const formDataToSubmit = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSubmit.append(key, value);
      });

      const response = await fetch("/api/emails", {
        method: "POST",
        body: formDataToSubmit,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      // Handle response if necessary
      const data = await response.json();
      console.log("🚀 ~ data:", data);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setShowThankYou(true);
    } catch (error: any) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <>
      <form onSubmit={onSubmit} className="contactForm">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {fieldErrors.name && (
          <div style={{ color: "red" }}>{fieldErrors.name}</div>
        )}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {fieldErrors.email && (
          <div style={{ color: "red" }}>{fieldErrors.email}</div>
        )}

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        {fieldErrors.message && (
          <div style={{ color: "red" }}>{fieldErrors.message}</div>
        )}

        <button
          disabled={isLoading}
          type="submit"
          className="contactFormButton"
        >
          {isLoading ? "Submitting..." : "Send Message"}
        </button>
      </form>

      {showThankYou && (
        <div className="contactModalOverlay">
          <div className="contactModalContent">
            <h2>Thank You For Your Inquiry!</h2>
            <p>
              We appreciate you reaching out to us. Your message has been
              received, and our team will get back to you as soon as possible.
            </p>

            <button onClick={() => setShowThankYou(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
