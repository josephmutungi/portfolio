"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Database,
  MessageCircle,
  ShieldCheck,
  Wallet,
} from "lucide-react";

const plans = [
  {
    name: "Starter Website",
    price: "KES 55,000",
    priceNote: "one-time project fee",
    description:
      "A polished, mobile-friendly website for a small business that needs a clear online presence.",
    features: [
      "Up to 5 pages",
      "Responsive design for mobile and desktop",
      "Contact form or WhatsApp link",
      "Page titles and basic on-page SEO",
      "Deployment and handover",
      "2 review rounds and 30-day defect fixes",
    ],
    care: "Optional maintenance from KES 5,000/month",
  },
  {
    name: "Business Website",
    price: "KES 95,000",
    priceNote: "one-time project fee",
    description:
      "A larger site for a growing team that needs more content and room to evolve.",
    features: [
      "Up to 10 pages",
      "Blog or simple content management",
      "Contact forms and analytics setup",
      "Technical and on-page SEO foundations",
      "Deployment and handover",
      "3 review rounds and 30-day defect fixes",
    ],
    care: "Optional maintenance from KES 10,000/month",
    featured: true,
  },
  {
    name: "Custom Web Application",
    price: "From KES 180,000",
    priceNote: "scoped to your requirements",
    description:
      "Purpose-built software for custom workflows, portals, dashboards, and integrations.",
    features: [
      "Discovery and written project scope",
      "Architecture and milestone plan",
      "User accounts, dashboards, or workflows as scoped",
      "Database and API integrations as scoped",
      "Deployment and technical handover",
      "Testing and post-launch fixes for agreed deliverables",
    ],
    care: "Ongoing support quoted separately",
  },
];

const included = [
  {
    icon: Code2,
    title: "Clear scope",
    body: "Pages, features, review rounds, and exclusions are written into your proposal.",
  },
  {
    icon: Wallet,
    title: "Agreed milestones",
    body: "You see the payment schedule before work starts, with progress tied to deliverables.",
  },
  {
    icon: Database,
    title: "Practical handover",
    body: "Launch and access handover are included in the scope of each build package.",
  },
  {
    icon: ShieldCheck,
    title: "Defined support",
    body: "Defect fixes and optional maintenance are described separately from new feature work.",
  },
];

const carePlans = [
  {
    name: "Essential Care",
    price: "From KES 5,000 / month",
    items: ["Routine dependency updates", "Backup checks", "Up to 1 hour of minor updates"],
  },
  {
    name: "Priority Care",
    price: "From KES 10,000 / month",
    items: ["Essential Care coverage", "Up to 3 hours of minor updates", "Monthly site health summary"],
  },
];

const faqs = [
  {
    question: "Is monthly maintenance required?",
    answer:
      "No. Build prices are one-time project fees. Maintenance is optional and can be added if you want ongoing updates and support.",
  },
  {
    question: "What is not included in these prices?",
    answer:
      "Domain registration, hosting, paid software, stock assets, copywriting, and third-party service fees are excluded unless your proposal specifically includes them. Any extra cost is discussed before approval.",
  },
  {
    question: "Are payment integrations included?",
    answer:
      "M-Pesa, card, and other payment integrations are scoped separately because provider requirements and testing vary by project. The proposal will show any integration fee before work begins.",
  },
  {
    question: "How does the 50/30/20 payment schedule work?",
    answer:
      "Unless the written proposal says otherwise, 50% is due before work begins, 30% at the agreed project milestone, and the final 20% at completion before final handover or production launch.",
  },
  {
    question: "Can I get a quote in another currency?",
    answer:
      "Yes. For clients outside Kenya, the proposal can state an agreed currency and any payment processing costs before you approve the project.",
  },
];

const whatsappNumber = "254758133905";

function quoteLink(plan) {
  const message =
    "Hello JMM Labs, I would like a quote for the " +
    plan.name +
    " package (" +
    plan.price +
    "). Please let me know what information you need.";
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function PricingCard({ plan }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${
        plan.featured
          ? "border-teal-500 shadow-teal-900/10 ring-1 ring-teal-500"
          : "border-slate-200"
      }`}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-6 rounded-full bg-teal-700 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          Most requested
        </span>
      )}
      <div>
        <h3 className="text-xl font-bold text-slate-950">{plan.name}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{plan.description}</p>
        <p className="mt-5 text-3xl font-black tracking-tight text-teal-800 sm:text-[2rem]">
          {plan.price}
        </p>
        <p className="mt-1 text-xs font-medium text-slate-500">{plan.priceNote}</p>
        <ul className="mt-6 space-y-3 border-t border-slate-100 pt-5">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm leading-5 text-slate-700">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <Check size={12} strokeWidth={3} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto pt-6">
        <p className="mb-4 text-xs font-semibold leading-5 text-slate-500">{plan.care}</p>
        <a
          href={quoteLink(plan)}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-4 py-3.5 text-sm font-bold text-white transition hover:bg-teal-800"
        >
          <MessageCircle size={16} />
          Ask for a quote
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}

function FaqItem({ item, isOpen, onToggle, index }) {
  const answerId = `pricing-answer-${index}`;
  return (
    <div className="border-b border-slate-200">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={answerId}
          className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-bold text-slate-900 sm:text-base"
        >
          {item.question}
          <ChevronDown
            size={19}
            className={`shrink-0 text-teal-700 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </h3>
      <div id={answerId} hidden={!isOpen} className="pb-5 text-sm leading-6 text-slate-600">
        {item.answer}
      </div>
    </div>
  );
}

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-slate-50 pt-[76px] font-sans text-slate-900">
      <header className="border-b border-slate-200 bg-white px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center rounded-full border border-teal-100 bg-teal-50 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-800">
            Straightforward project pricing
          </p>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Clear scope. Fair fees.{" "}
            <span className="text-teal-700">No surprise retainers.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Pay for the work your project needs. Every quote spells out the
            deliverables, payment milestones, and any optional ongoing care
            before you commit.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
        <p className="mt-5 text-center text-xs leading-5 text-slate-500">
          Prices are starting points in KES. Hosting, domain names, licenses,
          third-party fees, and out-of-scope requests are quoted separately.
          For international projects, currency and payment costs are confirmed
          in the proposal.
        </p>
      </section>

      <section className="px-5 pb-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-3xl border border-teal-100 bg-white p-6 shadow-sm sm:p-9">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">Optional, clearly scoped</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
                Ongoing website care
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Maintenance is separate from the build. You can manage updates
                yourself or choose a plan with a defined monthly time allowance.
              </p>
            </div>
            <p className="text-xs leading-5 text-slate-500 md:max-w-xs">
              Plans cover software care, not hosting, domains, paid tools, or
              new feature development.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {carePlans.map((plan) => (
              <article key={plan.name} className="rounded-2xl bg-slate-50 p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-sm font-bold text-teal-800">{plan.price}</p>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {plan.items.map((item) => (
                    <li key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {included.map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <Icon size={20} />
              </span>
              <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-5 text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-black tracking-tight text-slate-950">
            Pricing questions
          </h2>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white px-5 sm:px-7">
            {faqs.map((item, index) => (
              <FaqItem
                key={item.question}
                item={item}
                index={index}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 pt-4 sm:px-8 sm:pb-20 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-teal-800 p-7 text-white sm:p-10 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-200">Need a different scope?</p>
            <h2 className="mt-2 text-2xl font-black sm:text-3xl">Let’s work out a fair quote.</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-teal-100">
              Share your goals and constraints. We’ll propose a practical scope
              and milestone plan before any work begins.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-teal-800 transition hover:bg-teal-50"
          >
            Discuss a project <ArrowRight size={16} />
          </Link>
        </div>
        <p className="mx-auto mt-5 max-w-7xl text-center text-xs leading-5 text-slate-500">
          Project payments follow the 50% deposit, 30% milestone, and 20%
          completion schedule unless your written proposal states otherwise.{" "}
          <Link href="/terms" className="font-bold text-teal-700 hover:text-teal-900">
            Read the service terms.
          </Link>
        </p>
      </section>
    </main>
  );
}
