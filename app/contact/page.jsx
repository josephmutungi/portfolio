"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { GiThumbUp } from "react-icons/gi";

const contactOptions = [
  {
    icon: Mail,
    label: "Email",
    value: "josehstar@gmail.com",
    href: "mailto:josehstar@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+254 758 133 905",
    href: "https://wa.me/254758133905",
    external: true,
  },
  {
    icon: GiThumbUp,
    label: "Engineering portfolio",
    value: "GitHub",
    href: "https://github.com/josephmutungi",
    external: true,
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Nairobi, Kenya · Remote worldwide",
    href: "https://maps.google.com/?q=Nairobi%2C+Kenya",
    external: true,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus({
          type: "error",
          message:
            "We couldn’t send your message. Please try again or contact us directly.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: "Thanks for reaching out. Your message has been sent.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        message:
          "We couldn’t connect. Please check your connection or contact us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-16 pt-28 font-sans text-slate-900 sm:px-6 sm:pb-20 sm:pt-32">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
            Contact JMM Labs
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Let’s talk about what you need.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Tell us about a website, software project, computer setup, or IT
            partnership enquiry. We’ll use your details to respond to this
            request.
          </p>
        </header>

        <div className="grid items-start gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                <MessageCircle size={22} />
              </span>
              <h2 className="mt-5 text-xl font-bold">
                A quick note is enough.
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Share your goals, timeline, and any constraints. We can work
                through the details together.
              </p>
              <a
                href="https://wa.me/254758133905"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-600"
              >
                Message us on WhatsApp <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactOptions.map(
                ({ icon: Icon, label, value, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex min-w-0 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:shadow-md"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                      <Icon size={19} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {label}
                      </span>
                      <span className="mt-0.5 block break-words text-sm font-semibold text-slate-800">
                        {value}
                      </span>
                    </span>
                  </a>
                ),
              )}
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
              <div className="flex items-start gap-3">
                <Building2
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-700"
                />
                <div>
                  <h2 className="font-bold text-slate-900">
                    IT partnership listings
                  </h2>
                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    Partner placement is a paid service. We agree the listing
                    details and fee before publication.
                  </p>
                  <Link
                    href="/terms"
                    className="mt-2 inline-block text-xs font-bold text-blue-700 hover:text-blue-900"
                  >
                    Read the service terms
                  </Link>
                </div>
              </div>
            </div>
          </motion.aside>

          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10"
          >
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                Send an enquiry
              </p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">
                What can we help with?
              </h2>
            </div>

            {status && (
              <div
                role={status.type === "error" ? "alert" : "status"}
                className={`mb-6 rounded-xl border p-4 text-sm font-medium ${
                  status.type === "success"
                    ? "border-blue-100 bg-blue-50 text-blue-800"
                    : "border-slate-200 bg-slate-100 text-slate-700"
                }`}
              >
                {status.message}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              aria-busy={loading}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Project or enquiry details
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us what you're looking for, your timeline, and whether this is a project or partner listing enquiry."
                  required
                  className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-900/10 transition hover:bg-blue-800 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
              >
                {loading ? "Sending…" : "Send enquiry"}
                <Send
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </form>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
