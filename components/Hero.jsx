"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Check } from "lucide-react";

const benefits = ["Fast, reliable builds", "Built for search", "Local expertise"];

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-36">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(#cbd5e1_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
      />
      <div aria-hidden="true" className="absolute -right-40 top-12 -z-10 h-[32rem] w-[32rem] rounded-full bg-teal-100/70 blur-3xl" />
      <div aria-hidden="true" className="absolute -left-40 bottom-0 -z-10 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50/80 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-teal-800 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-teal-600" />
            Nairobi web studio · Working across Kenya
          </div>

          <h1 className="max-w-3xl text-[2.7rem] font-black leading-[1.07] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[4.35rem]">
            A better website can change{" "}
            <span className="bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
              how your business grows.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            We design and build fast business websites, custom web apps,
            e-commerce experiences, and M-Pesa integrations. Based in Nairobi,
            JMM Labs helps ambitious teams across Kenya turn digital plans into
            useful products.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow-xl"
            >
              Let’s talk about your project
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-800"
            >
              Explore our work <ArrowDownRight size={17} />
            </Link>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200/80 pt-6">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                  <Check size={12} strokeWidth={3} />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[580px]"
        >
          <div className="absolute inset-8 rounded-[2.5rem] bg-gradient-to-br from-teal-100 via-slate-100 to-white blur-2xl" />
          <div className="relative aspect-[1.08/1] overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-slate-50 to-teal-50/70 p-4 shadow-[0_24px_80px_-36px_rgba(30,64,175,0.3)] sm:p-7">
            <Image
              src="/jmmlabsHero.png"
              alt="A visual of JMM Labs’ digital product and software development work"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-contain p-3 sm:p-6"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:min-w-64 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">From idea to launch</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Thoughtful design. Solid engineering.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
