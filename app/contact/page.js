"use client";
export const metadata = {
  title: "Contact",
  description:
    "Contact TrustMetrics for AI evaluation consulting and multilingual quality benchmarking discussions.",
};

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-3xl mx-auto text-center">

        <h1 className="text-5xl font-bold mb-6">
          Contact
        </h1>

        <p className="text-gray-400 mb-12">
          Ready to improve your AI evaluation workflows?  
          Send your requirements and we will respond promptly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 text-left"
        >
          <input
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 focus:border-white outline-none"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 focus:border-white outline-none"
          />

          <textarea
            name="message"
            required
            rows="6"
            placeholder="Project details or inquiry..."
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 focus:border-white outline-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Status Messages */}
        {status === "success" && (
          <p className="text-green-400 mt-6">
            ✅ Message sent successfully. We will respond soon.
          </p>
        )}

        {status === "error" && (
          <p className="text-red-400 mt-6">
            ❌ Something went wrong. Please try again.
          </p>
        )}

      </div>
    </div>
  );
}

