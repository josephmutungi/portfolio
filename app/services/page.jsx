"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  ShieldCheck,
  Search,
  Wallet,
  BugOff,
  Database,
  Building2,
  MonitorCog,
  Handshake,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building scalable, high-performance web applications using Next.js, React, and Node.js. Optimized for speed and user experience.",
    icon: <Code2 className="w-8 h-8 text-teal-600" />,
    tags: ["Next.js", "Express", "Tailwind"],
  },
  {
    title: "M-Pesa API Integration",
    description:
      "Seamlessly integrate Daraja 2.0 for automated payment processing, STK Push, and C2B/B2C transactions in your Kenyan business.",
    icon: <Wallet className="w-8 h-8 text-teal-600" />,
    tags: ["Payments", "Daraja API", "Automation"],
  },
  {
    title: "SEO & Performance Optimization",
    description:
      "Technical SEO and performance improvements that make websites easier to find, quicker to use, and ready for customers in local and international markets.",
    icon: <Search className="w-8 h-8 text-teal-600" />,
    tags: ["Core Web Vitals", "SSR", "SEO"],
  },
  {
    title: "Database Architecture",
    description:
      "Designing robust, secure, and scalable data models using MongoDB and Mongoose for complex property or inventory systems.",
    icon: <Database className="w-8 h-8 text-teal-600" />,
    tags: ["MongoDB", "Mongoose", "Schemas"],
  },
  {
    title: "Cybersecurity & Hardening",
    description:
      "Protecting your digital assets with JWT authentication, data encryption, and protection against OWASP top 10 vulnerabilities.",
    icon: <ShieldCheck className="w-8 h-8 text-teal-600" />,
    tags: ["Auth", "Encryption", "Security"],
  },
  {
    title: "Bug Fixing & JS Support",
    description:
      "Rapid troubleshooting of complex JavaScript/TypeScript memory leaks, logic errors, and integration bottlenecks.",
    icon: <BugOff className="w-8 h-8 text-teal-600" />,
    tags: ["Debugging", "Code Audit", "Testing"],
  },
  {
    title: "Business Profile Setup",
    description:
      "Set up or improve your Google Business Profile and relevant directory listings with accurate business details and a consistent brand presence.",
    icon: <Building2 className="w-8 h-8 text-teal-600" />,
    tags: ["Business Listings", "Local SEO", "Profile Setup"],
  },
  {
    title: "Operating System Installation",
    description:
      "Installation and initial setup of supported operating systems for personal and business computers, including drivers, updates, and essential configuration. A valid software license must be supplied or purchased separately where required.",
    icon: <MonitorCog className="w-8 h-8 text-teal-600" />,
    tags: ["Windows", "Linux", "Computer Setup"],
  },
  {
    title: "IT Partnership Listings",
    description:
      "IT professionals and businesses can enquire about a paid partnership or directory feature on our website. Placement scope and fees are agreed in writing before publication.",
    icon: <Handshake className="w-8 h-8 text-teal-600" />,
    tags: ["Partner Network", "Paid Listing", "IT Services"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header Section */}
      <section className="border-b border-slate-200 bg-white px-4 pb-10 pt-32 sm:px-6 sm:pb-14 sm:pt-36">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl"
          >
            Software, business IT, and computer services
          </motion.h1>
          <p className="mx-auto max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            From custom software and M-Pesa integrations to business profile
            setup and computer support, JMM Labs helps local and international
            businesses move forward with practical technology.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl sm:p-7"
            >
              <div className="mb-5 w-fit rounded-xl bg-teal-50 p-3.5 transition-colors group-hover:bg-teal-100">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold leading-snug text-slate-950">
                {service.title}
              </h3>
              <p className="mb-5 text-sm leading-6 text-slate-600">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 sm:text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-teal-800 px-6 py-10 text-center text-white shadow-xl sm:px-10 sm:py-14">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <h2 className="mb-4 text-2xl font-black sm:text-3xl md:text-4xl">
              Ready to scale your digital presence?
            </h2>
            <p className="mx-auto mb-7 max-w-2xl text-sm leading-6 text-teal-100 sm:text-base sm:leading-7">
              We work remotely with clients in Kenya, Germany, the United
              States, Canada, the UK, and other European countries. Have an IT
              service to offer? Ask us about a paid partner listing.
            </p>
            <Link href="/contact" className="inline-flex max-w-full items-center justify-center rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-teal-800 shadow-lg transition-colors hover:bg-teal-50 sm:px-7">
              Discuss a project or partnership
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
