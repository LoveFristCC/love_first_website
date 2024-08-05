"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";

export default function PrayerForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showThankYou, setShowThankYou] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    prayerSubject: "",
    prayerRequest: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    prayerRequest: "",
    prayerSubject: "",
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

    if (!formData.prayerRequest.trim()) {
      errors.prayerRequest = "Prayer request is required.";
      isValid = false;
    }

    if (!formData.prayerSubject) {
      errors.prayerSubject = "Prayer Subject is required.";
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
      prayerRequest: "",
      prayerSubject: "",
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
        prayerSubject: "",
        prayerRequest: "",
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
    <div className="formContent">
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={onSubmit} className="prayerForm">
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

        <label htmlFor="prayerSubject">How can we pray for you?</label>
        <select
          id="prayerSubject"
          name="prayerSubject"
          value={formData.prayerSubject}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          <option value="ACCEPT JESUS AS MY SAVIOR">
            ACCEPT JESUS AS MY SAVIOR
          </option>
          <option value="HEALING">HEALING</option>
          <option value="FINANCES">FINANCES</option>
          <option value="JOB">JOB</option>
          <option value="MARRIAGE">MARRIAGE</option>
          <option value="OTHER">OTHER</option>
        </select>

        <label htmlFor="prayerRequest">Prayer Request:</label>
        <textarea
          id="prayerRequest"
          name="prayerRequest"
          rows={6}
          placeholder="Your Prayer Request"
          value={formData.prayerRequest}
          onChange={handleChange}
          required
        ></textarea>
        {fieldErrors.prayerRequest && (
          <div style={{ color: "red" }}>{fieldErrors.prayerRequest}</div>
        )}

        <button disabled={isLoading} type="submit">
          {isLoading ? "Submitting..." : "Submit Prayer Request"}
        </button>
      </form>

      {showThankYou && (
        <div className="modalOverlay">
          <div className="modalContent">
            <h2>Thank You For Submitting Your Prayer Request.</h2>
            <p>
              Your request will be added to the church’s prayer list. God is
              ABLE!
            </p>
            <p>
              You are also invited to join Pastor Jomo weekday mornings for
              prayer at{" "}
              <Link
                href="https://www.facebook.com/pastorjomo/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Pastor Jomo's Facebook
              </Link>
              .
            </p>

            <button onClick={() => setShowThankYou(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
