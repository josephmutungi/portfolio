"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { useTheme } from "@/components/ThemeProvider";

const links = [
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const { theme, toggleTheme, ready } = useTheme();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <nav aria-label="Main navigation" className="fixed inset-x-0 top-0 z-[100]">
      <div className="border-b border-slate-200/80 bg-white/95 shadow-[0_4px_24px_rgba(15,23,42,0.05)] backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            aria-label="JMM Labs home"
            onClick={() => setIsOpen(false)}
            className="theme-logo-surface shrink-0 rounded-xl bg-white px-2.5 py-1.5 transition-opacity hover:opacity-80"
          >
            <BrandLogo />
          </Link>

          <div className="hidden items-center gap-0.5 rounded-full p-1 lg:flex">
            {links.map(({ name, path }) => {
              const isActive =
                pathName === path || pathName.startsWith(path + "/");
              return (
                <Link
                  key={name}
                  href={path}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-[13px] font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-teal-700"
                      : "text-slate-600 hover:text-teal-700"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white shadow-sm ring-1 ring-slate-200/70"
                      transition={{ type: "spring", duration: 0.45 }}
                    />
                  )}
                  <span className="relative z-10">{name}</span>
                </Link>
              );
            })}
          </div>

          <ThemeToggle
            theme={theme}
            ready={ready}
            onToggle={toggleTheme}
            className="hidden lg:inline-flex"
          />

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-teal-700 px-5 py-3 text-xs font-bold tracking-wide text-white shadow-md shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow-lg active:translate-y-0 lg:inline-flex"
          >
            Request a quote
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700 lg:hidden"
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-[76px] z-[110] bg-slate-950/35 backdrop-blur-[2px] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="ml-auto flex h-full w-full max-w-sm flex-col border-l border-slate-200 bg-white px-6 pb-8 pt-7 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                  Explore
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Find what you need
                </p>
              </div>
              <div className="flex flex-col gap-1">
                {links.map(({ name, path }, index) => {
                  const isActive =
                    pathName === path || pathName.startsWith(path + "/");
                  return (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.035 }}
                    >
                      <Link
                        href={path}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition ${
                          isActive
                            ? "bg-teal-50 text-teal-700"
                            : "text-slate-700 hover:bg-slate-50 hover:text-teal-700"
                        }`}
                      >
                        {name}
                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-teal-600" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-auto border-t border-slate-100 pt-6">
                <ThemeToggle
                  theme={theme}
                  ready={ready}
                  onToggle={toggleTheme}
                  className="mb-3 w-full justify-center"
                />
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-teal-900/15 transition hover:bg-teal-800"
                >
                  Request a quote
                </Link>
                <p className="mt-4 text-center text-xs text-slate-400">
                  JMM Labs · Digital solutions
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function ThemeToggle({ theme, ready, onToggle, className = "" }) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={ready ? isDark : undefined}
      aria-label={ready ? `Switch to ${isDark ? "light" : "dark"} mode` : "Change color theme"}
      title={ready ? `Switch to ${isDark ? "light" : "dark"} mode` : "Change color theme"}
      className={`inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-100 ${className}`}
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
      <span className="lg:hidden">{isDark ? "Light mode" : "Dark mode"}</span>
      <span className="sr-only lg:not-sr-only">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
