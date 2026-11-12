"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Otieno",
    role: "CEO at TechSavvy Kenya",
    content:
      "JMMLabs transformed our legacy system into a high-speed Next.js platform. Our load times dropped by 60%, and our conversion rates skyrocketed.",
  },
  {
    name: "Sarah Wanjiku",
    role: "Marketing Director",
    content:
      "The best software agency in Nairobi. They don't just build apps; they build business solutions. Their SEO strategy put us on page 1 within months.",
  },
  {
    name: "David Mensah",
    role: "Founder, Fintech Solutions",
    content:
      "Professional, timely, and technically brilliant. JMMLabs handled our backend security and API integrations with incredible precision.",
  },
  {
    name: "Linda Kemunto",
    role: "E-commerce Owner",
    content:
      "My online store is now faster and more mobile-friendly than ever. The team at JMMLabs is truly world-class.",
  },
];

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Client feedback</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Good work is remembered.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              A few words from people who have worked with JMM Labs.
            </p>
          </div>
          <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-blue-700 transition hover:gap-3">
            Work with us <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/70"
            >
              <div className="flex items-center justify-between">
                <span className="flex gap-1 text-blue-600" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, star) => (
                    <Star key={star} size={14} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />
                  ))}
                </span>
                <Quote size={20} className="text-blue-100" aria-hidden="true" />
              </div>
              <blockquote className="mt-5 flex-1 text-sm leading-6 text-slate-600">
                “{testimonial.content}”
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="mt-1 text-xs font-medium text-slate-500">{testimonial.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
