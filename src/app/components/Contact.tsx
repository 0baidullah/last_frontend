"use client";

import { useState } from "react";
import DarkStrip from "./spacing";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/contactForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          question: form.message,
        }),
      });
      console.log(res)

      const data = await res.json();

      if (!res.ok) {
        setError(data.error?.name?.[0] || data.error?.email?.[0] || data.error?.question?.[0] || "Something went wrong.");
      } else {
        setSuccess("Your question has been submitted!");
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      setError("Failed to submit. Please try again later.");
    } finally {
      setLoading(false);
    }

    console.log(setError , setSuccess , setLoading )
  };

  return (
    <>
      <DarkStrip />
      <div className="bg-gray-1000 text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
          <div className="flex-1 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-300 uppercase">
              Questions?
              <br />
              <span className="text-white">No Problem,</span>
              <br />
              <span className="text-white">
                We Have The <span className="text-gray-300">Answers.</span>
              </span>
            </h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex-1 w-full bg-[#0f0f0f] border border-gray-700 rounded-xl p-6 space-y-4"
          >
            <div className="bg-yellow-500/20 border border-yellow-500 text-yellow-400 text-sm p-3 rounded">
              ⚠️ We may take up to 24–78 hours to reply
            </div>

            {error && <div className="text-red-400 text-sm bg-red-400/10 border border-red-400 p-2 rounded">{error}</div>}

            {success && <div className="text-green-400 text-sm bg-green-400/10 border border-green-400 p-2 rounded">{success}</div>}

            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Your question</label>
              <textarea
                maxLength={400}
                placeholder="..."
                className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <div className="text-right text-xs text-gray-500">{form.message.length}/400</div>
            </div>

            <div className="mt-4">
              <div className="bg-purple-400 rounded p-4 w-fit text-black text-sm">
                [reCAPTCHA goes here]
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-lg uppercase tracking-wide mt-4 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
      <DarkStrip />
    </>
  );
}
