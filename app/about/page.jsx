"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Gauge,
  Lightbulb,
  LockKeyhole,
  Rocket,
  UsersRound,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Clear thinking",
    description:
      "We listen first, explain the options, and keep recommendations tied to your goals.",
  },
  {
    icon: LockKeyhole,
    title: "Dependable foundations",
    description:
      "We consider security, accessibility, and maintainability as part of the build.",
  },
  {
    icon: Gauge,
    title: "Useful outcomes",
    description:
      "We focus on tools and experiences that are practical for your customers and your team.",
  },
];

const process = [
  ["01", "Listen", "Understand your users, goals, and constraints."],
  ["02", "Plan", "Agree on a clear scope, milestones, and budget."],
  ["03", "Build", "Share progress and refine the solution together."],
  ["04", "Support", "Launch with a clear handover and next steps."],
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white font-sans text-slate-900">
      <section className="relative isolate bg-slate-50 pb-16 pt-32 sm:pb-20 sm:pt-36">
        <div aria-hidden="true" className="absolute -right-28 -top-24 -z-10 h-96 w-96 rounded-full bg-teal-100/80 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
            About JMM Labs
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Technology that helps good ideas move forward.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            We’re a Nairobi-based digital technology team building websites,
            software, and practical IT solutions for businesses in Kenya and
            around the world.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-teal-800"
          >
            Talk with our team <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
            Who we are
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            A hands-on partner for your next digital step.
          </h2>
          <p className="mt-5 leading-7 text-slate-600">
            JMM Labs works across design, software development, and IT support.
            We bring technical decisions back to the real need: a clearer
            customer experience, a smoother workflow, or a more reliable system.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            From the first conversation to launch, we aim to make the process
            understandable, agree on scope before work begins, and keep
            communication direct.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {["Web development", "Business IT", "Remote collaboration"].map((tag) => (
              <span key={tag} className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-teal-100 to-slate-100 blur-xl" />
          <Image
            src="/image4.png"
            alt="JMM Labs software development workspace"
            width={900}
            height={620}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="relative aspect-[4/3] w-full rounded-[1.5rem] border border-slate-200 object-cover shadow-xl"
          />
        </motion.div>
      </section>

      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 md:grid-cols-[1fr_auto] lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
              Meet the founder
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Joseph Mutungi Mwiithi
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              Joseph founded JMM Labs to help businesses access thoughtful
              software engineering and practical technology support. He stays
              involved in project planning and delivery so clients have a
              direct point of contact.
            </p>
          </div>
          <div className="flex items-center gap-5 md:flex-col md:text-center">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-white/10 sm:h-32 sm:w-32">
              <Image
                src="/founder.jpg"
                alt="Joseph Mutungi Mwiithi, founder of JMM Labs"
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>
            <div className="text-sm text-slate-300">
              <UsersRound className="mx-auto mb-1 hidden text-teal-300 md:block" size={18} />
              Nairobi, Kenya · Remote worldwide
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto mb-9 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
            How we work
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Good work starts with a clear plan.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map(([number, title, description], index) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <p className="text-sm font-black text-teal-700">{number}</p>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-9 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              What guides us
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Thoughtful work, without the guesswork.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Icon size={21} />
                </span>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl bg-teal-700 p-7 text-white shadow-xl shadow-teal-900/10 sm:p-10 md:flex-row md:items-center">
          <div>
            <Rocket className="mb-4 text-teal-200" size={24} />
            <h2 className="text-2xl font-black sm:text-3xl">Have a project in mind?</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-teal-100">
              Tell us what you’re trying to achieve and we’ll help you map out the next step.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-teal-800 transition hover:bg-teal-50"
          >
            Contact JMM Labs <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
