"use client";
import React, { useState } from "react";
import {
  Check,
  ChevronDown,
  Code2,
  Wallet,
  Database,
  ShieldCheck,
  ArrowRight,
  Terminal,
  MessageCircle,
} from "lucide-react";

/* ---------------------------------------------------------------
   Design tokens
   Ink        #0B2545  deep signal-navy — headings, primary text
   Paper      #F6F8F6  cool off-white with a faint green cast
   Mpesa      #00A651  the literal M-Pesa brand green — used
              deliberately since Daraja integration is the core
              service, not a generic "brand blue"
   Amber      #E8A33D  receipt/ledger highlight for the anchor tier
   Line       #DDE3DC  hairline borders
   ----------------------------------------------------------------*/

const tiers = [
  {
    name: "Micro Business",
    id: "tier-micro",
    setup: "KES 45,000",
    monthly: "KES 15,000",
    description:
      "Essential tech to digitize operations and start accepting automated payments.",
    features: [
      "Next.js landing page or small web app",
      "Standard M-Pesa STK Push integration",
      "Basic SEO setup & mobile optimization",
      "Secure JWT user authentication",
      "Shared MongoDB database support",
      "Next-day bug fixing support",
    ],
    cta: "Start scaling",
    status: "READY",
    mostPopular: false,
  },
  {
    name: "Growth Macro",
    id: "tier-growth",
    setup: "KES 120,000",
    monthly: "KES 45,000",
    description:
      "Complete full-stack systems with custom workflows for rapidly expanding businesses.",
    features: [
      "Full-stack web app (Next.js & Node.js)",
      "Advanced Daraja 2.0 API — STK, C2B, B2C",
      "Technical SEO & sub-2s load speed",
      "Dedicated database architecture",
      "Hardened against the OWASP Top 10",
      "Priority same-day bug support & code audits",
    ],
    cta: "Accelerate growth",
    status: "CONFIRMED",
    mostPopular: true,
  },
  {
    name: "Custom Enterprise",
    id: "tier-enterprise",
    setup: "Custom",
    monthly: "Custom",
    description:
      "Bespoke, high-performance architecture engineered for volume and scale.",
    features: [
      "Multi-platform ecosystems & API development",
      "Full payment gateway redundancy & ledgering",
      "Enterprise data models & sharded databases",
      "Continuous penetration testing & encryption",
      "Dedicated dev support SLA & system audits",
      "Custom microservices & DevOps pipelines",
    ],
    cta: "Talk to the architecture team",
    status: "QUOTE",
    mostPopular: false,
  },
];

const included = [
  {
    icon: Code2,
    title: "Next.js framework",
    body: "Server-side rendered architecture, built for immediate load speeds.",
  },
  {
    icon: Wallet,
    title: "Daraja 2.0 webhooks",
    body: "Instant delivery confirmations and secure programmatic ledgers.",
  },
  {
    icon: Database,
    title: "Encrypted schemas",
    body: "MongoDB configurations designed defensively against leaks.",
  },
  {
    icon: ShieldCheck,
    title: "OWASP hardening",
    body: "Continuous protection against injection attacks and payload tampering.",
  },
];

const faqs = [
  {
    question: "Why is there a setup fee and a monthly fee?",
    answer:
      "The setup fee covers the initial engineering, architecture design, and integration of your product. The monthly fee covers secure hosting, database maintenance, API monitoring (including Daraja status checks), and ongoing bug support.",
  },
  {
    question: "Can we upgrade from Micro to Growth Macro later?",
    answer:
      "Yes. Every tier is built on the same modular Next.js and Node.js architecture, so your codebase scales naturally as your transaction volume grows — no rebuild required.",
  },
  {
    question: "How secure is the M-Pesa API integration?",
    answer:
      "We follow Daraja 2.0 best practices: secure backend webhooks, signature validation on every callback, and encrypted transaction payloads. API keys live only in isolated environment variables, never in client code.",
  },
  {
    question: "What counts as a 'bug' under support?",
    answer:
      "Any defect in code we shipped — broken flows, failed callbacks, integration errors. New feature requests are scoped and quoted separately from maintenance.",
  },
];

function PriceLedger({ label, value, isSuffix }) {
  return (
    <div className="flex items-baseline justify-between">
      <span
        className="text-xs uppercase tracking-widest"
        style={{ color: "#6B7A72", fontFamily: "'IBM Plex Mono', monospace" }}
      >
        {label}
      </span>
      <span
        className="text-right"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          color: "#0B2545",
          fontWeight: 600,
        }}
      >
        {value}
        {isSuffix && (
          <span className="text-xs font-normal" style={{ color: "#6B7A72" }}>
            {" "}
            /mo
          </span>
        )}
      </span>
    </div>
  );
}

const WHATSAPP_NUMBER = "+254758133905"; // international format, no leading 0/+

function buildWhatsappLink(tier) {
  const message =
    `Hi JMMLabs, I'd like to enquire about the *${tier.name}* package.\n\n` +
    `Setup: ${tier.setup}\n` +
    `Maintenance: ${tier.monthly}${tier.monthly !== "Custom" ? "/mo" : ""}\n\n` +
    `Please get in touch with more details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function PricingCard({ tier }) {
  const [hovered, setHovered] = useState(false);
  const accent = tier.mostPopular ? "#00A651" : "#0B2545";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col rounded-3xl transition-all duration-300"
      style={{
        background: "#FFFFFF",
        border: tier.mostPopular ? "1.5px solid #00A651" : "1px solid #DDE3DC",
        boxShadow: hovered
          ? "0 20px 40px -20px rgba(11,37,69,0.25)"
          : tier.mostPopular
            ? "0 12px 30px -18px rgba(0,166,81,0.35)"
            : "0 4px 14px -10px rgba(11,37,69,0.15)",
        transform:
          hovered || tier.mostPopular ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* perforated receipt edge */}
      <div
        className="absolute -top-2 left-6 right-6 h-4"
        style={{
          backgroundImage:
            "radial-gradient(circle, #F6F8F6 3px, transparent 3.5px)",
          backgroundSize: "16px 16px",
          backgroundPosition: "0 -8px",
        }}
      />

      <div className="p-8 flex-1">
        <div className="flex items-center justify-between mb-5">
          <h3
            className="text-xl font-bold"
            style={{
              color: "#0B2545",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {tier.name}
          </h3>
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              color: tier.mostPopular ? "#FFFFFF" : accent,
              background: tier.mostPopular ? "#00A651" : "#F0F3EF",
            }}
          >
            {tier.status}
          </span>
        </div>

        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: "#5B6A63" }}
        >
          {tier.description}
        </p>

        {/* Ledger-style price block */}
        <div
          className="rounded-2xl p-5 mb-7 space-y-2"
          style={{
            background: "#F6F8F6",
            border: "1px dashed #C9D2C6",
          }}
        >
          <PriceLedger label="Setup" value={tier.setup} />
          <div style={{ borderTop: "1px dashed #C9D2C6" }} />
          <PriceLedger
            label="Maintenance"
            value={tier.monthly}
            isSuffix={tier.monthly !== "Custom"}
          />
        </div>

        <ul className="space-y-3.5 mb-2">
          {tier.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm"
              style={{ color: "#3A463F" }}
            >
              <span
                className="mt-0.5 rounded-full p-0.5 flex-shrink-0"
                style={{
                  background: tier.mostPopular ? "#E7F7EE" : "#EEF1ED",
                  color: accent,
                }}
              >
                <Check className="w-3.5 h-3.5" strokeWidth={3} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-8 pt-0">
        <a
          href={buildWhatsappLink(tier)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 group transition-colors duration-200"
          style={{
            background: tier.mostPopular ? "#00A651" : "#0B2545",
            color: "#FFFFFF",
            fontFamily: "'Space Grotesk', sans-serif",
            textDecoration: "none",
          }}
        >
          <MessageCircle className="w-4 h-4" />
          {tier.cta}
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
        <p
          className="text-center text-xs mt-3"
          style={{ color: "#8A968F", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          Opens WhatsApp with this package pre-filled
        </p>
      </div>
    </div>
  );
}

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: "1px solid #DDE3DC" }}>
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between gap-4 text-left"
      >
        <span
          className="font-semibold text-base"
          style={{
            color: "#0B2545",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {item.question}
        </span>
        <ChevronDown
          className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
          style={{
            color: "#00A651",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? "220px" : "0px" }}
      >
        <p
          className="pb-5 text-sm leading-relaxed"
          style={{ color: "#5B6A63" }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div
      className="min-h-screen antialiased mt-30"
      style={{ background: "#F6F8F6", color: "#0B2545" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Header */}
      <section
        className="py-20 px-6"
        style={{ background: "#FFFFFF", borderBottom: "1px solid #DDE3DC" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-blue-100 text-blue-600">
            <Terminal className="w-3.5 h-3.5" />
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              jmmlabs // rate card
            </span>
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#0B2545",
            }}
          >
            Transparent pricing,
            <br />
            <span className="text-blue-600">built to drive revenue.</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            Fair engineering rates that protect your cash flow, while we deploy
            premium, hardened codebases for your business.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {tiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 px-6">
        <div
          className="max-w-6xl mx-auto rounded-3xl p-10 md:p-14"
          style={{ background: "#FFFFFF", border: "1px solid #DDE3DC" }}
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2
              className="text-3xl font-bold"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#0B2545",
              }}
            >
              Engineering standards, every tier
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {included.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <div
                  className="p-3 rounded-xl h-fit flex-shrink-0"
                  style={{ background: "#E7F7EE", color: "#00A651" }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4
                    className="font-semibold mb-1 text-sm"
                    style={{ color: "#0B2545" }}
                  >
                    {title}
                  </h4>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#5B6A63" }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-10"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#0B2545",
            }}
          >
            Common questions
          </h2>
          <div>
            {faqs.map((item, i) => (
              <FaqItem
                key={item.question}
                item={item}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div
          className="max-w-4xl mx-auto rounded-3xl p-12 md:p-16 text-center"
          style={{ background: "#0B2545" }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#FFFFFF",
            }}
          >
            Ready to ship a hardened, revenue-ready app?
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: "#AEB9C8" }}>
            Tell us what you're building. We'll scope the right tier and send a
            fixed quote within one business day.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hi JMMLabs, I'd like a fixed quote for a project. Here's what I'm building: ",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm"
            style={{
              background: "#00A651",
              color: "#FFFFFF",
              fontFamily: "'Space Grotesk', sans-serif",
              textDecoration: "none",
            }}
          >
            <MessageCircle className="w-4 h-4" />
            Get a fixed quote
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
