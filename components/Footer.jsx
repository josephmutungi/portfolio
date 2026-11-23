import Link from "next/link";
import { ArrowUpRight, Code2, Mail, MapPin, MessageCircle } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const solutionLinks = [
  ["Business websites", "/services"],
  ["Custom web apps", "/services"],
  ["E-commerce development", "/services"],
  ["M-Pesa integrations", "/services"],
  ["SEO & performance", "/services"],
];

const companyLinks = [
  ["About JMM Labs", "/about"],
  ["Projects", "/projects"],
  ["Pricing", "/pricing"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#10213d] text-white">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-40 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-6 pt-14 sm:px-8 sm:pt-16 lg:px-10">
        <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:gap-10">
          <div>
            <Link href="/" aria-label="JMM Labs home" className="theme-logo-surface inline-flex rounded-lg bg-white px-3 py-2.5">
              <BrandLogo />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">
              Nairobi web design and software development for businesses ready
              to make their next digital move.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              <SocialLink href="https://github.com/josephmutungi" label="JMM Labs on GitHub">
                <Code2 size={17} />
              </SocialLink>
              <SocialLink href="https://wa.me/254758133905" label="Message JMM Labs on WhatsApp">
                <MessageCircle size={17} />
              </SocialLink>
              <SocialLink href="mailto:josehstar@gmail.com" label="Email JMM Labs">
                <Mail size={17} />
              </SocialLink>
            </div>
          </div>

          <FooterColumn title="Services" links={solutionLinks} />
          <FooterColumn title="Explore" links={companyLinks} />

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
              Let’s build something useful
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Have a website, software, or integration project in mind? Tell us
              what you need and we’ll discuss a practical next step.
            </p>
            <Link
              href="/contact"
              className="group mt-5 inline-flex items-center gap-2 rounded-xl bg-teal-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-200/50"
            >
              Start a conversation
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <p className="mt-5 flex items-center gap-2 text-xs font-medium text-slate-400">
              <MapPin size={14} className="text-teal-300" />
              Nairobi, Kenya · Remote worldwide
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} JMM Labs. All rights reserved.</p>
          <Link href="/terms" className="w-fit transition hover:text-white">
            Terms of service
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <nav aria-label={title}>
      <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
        {title}
      </h2>
      <ul className="mt-5 space-y-3">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="text-sm text-slate-300 transition hover:text-white focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-teal-300"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-teal-300/40 hover:bg-teal-300 hover:text-slate-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-200/50"
    >
      {children}
    </a>
  );
}
