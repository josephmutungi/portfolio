import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Code2,
  Handshake,
  MonitorCog,
  Search,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Websites & web apps",
    description:
      "Clear, responsive digital experiences built around your customers and the way your business works.",
    label: "Design · Development",
  },
  {
    icon: Workflow,
    title: "Custom business systems",
    description:
      "Useful tools and integrations that streamline everyday work, from payments to internal workflows.",
    label: "Automation · Integrations",
  },
  {
    icon: Search,
    title: "SEO & performance",
    description:
      "Technical improvements that make your site faster, easier to find, and more comfortable to use.",
    label: "Search · Optimization",
  },
  {
    icon: Building2,
    title: "Business profiles",
    description:
      "Get help setting up accurate business profiles and listings that make it easier for customers to find you.",
    label: "Listings · Local presence",
  },
  {
    icon: MonitorCog,
    title: "Computer & OS setup",
    description:
      "Operating system installation and initial setup for personal and business computers.",
    label: "Windows · Linux · Setup",
  },
  {
    icon: Handshake,
    title: "IT partner listings",
    description:
      "IT providers can enquire about a paid partnership feature on the JMM Labs website, with terms agreed before publication.",
    label: "Partnerships · Paid listing",
  },
];

const steps = [
  ["01", "Understand", "We start with your goals, users, and the problem you need to solve."],
  ["02", "Plan", "We shape a practical scope and agree on the right approach together."],
  ["03", "Build", "We design, develop, and refine your solution with regular check-ins."],
  ["04", "Launch", "We help you go live and provide support as your needs evolve."],
];

export function HomeServices() {
  return (
    <section id="services" className="scroll-mt-24 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">What we do</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Practical digital work, made for your business.
            </h2>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 transition hover:gap-3">
            See all services <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ icon: Icon, title, description, label }) => (
            <article
              key={title}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-200/70 focus-within:ring-2 focus-within:ring-teal-600 focus-within:ring-offset-2 sm:p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">{label}</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
                Learn more <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
              <Link
                href={title === "IT partner listings" ? "/contact" : "/services"}
                aria-label={
                  title === "IT partner listings"
                    ? "Enquire about an IT partner listing"
                    : `Learn more about ${title}`
                }
                className="absolute inset-0"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeAbout() {
  return (
    <>
      <section id="about" className="scroll-mt-24 bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 p-8 text-white sm:p-10">
            <div aria-hidden="true" className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-teal-500/30 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-teal-100">
                <ShieldCheck size={14} /> Built with care
              </span>
              <p className="mt-8 max-w-md text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                Good technology should make work feel simpler.
              </p>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
                We pair thoughtful design with dependable engineering to create
                solutions people can use with confidence.
              </p>
              <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:gap-3">
                Get to know JMM Labs <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">A better way to build</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              A clear process from first conversation to launch.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              We’re a Nairobi-based technology team working with businesses
              across Kenya and beyond. You get direct communication, sensible
              technical choices, and a product shaped around real needs.
            </p>
            <div className="mt-8 grid gap-x-6 gap-y-6 sm:grid-cols-2">
              {steps.map(([number, title, body]) => (
                <div key={number} className="flex gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-xs font-bold text-teal-700">{number}</span>
                  <div>
                    <h3 className="font-bold text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm leading-5 text-slate-600">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-teal-700 px-6 py-12 text-center text-white shadow-xl shadow-teal-900/10 sm:px-12 sm:py-16">
          <div aria-hidden="true" className="absolute -right-12 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10" />
          <div aria-hidden="true" className="absolute -bottom-40 -left-16 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-100">Have a project in mind?</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Let’s make something useful.</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-teal-100 sm:text-base">
              Tell us what you’re working on. We’ll help you find a clear next step.
            </p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-teal-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-teal-50">
              Start a conversation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
