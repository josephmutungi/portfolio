"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Search, X } from "lucide-react";
import { categories, projects } from "./projectsData";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.28, delay: index * 0.035 }}
      className="h-full"
    >
      <Link
        href={`/projects/${project.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-200/70 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-200"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <span className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/95 px-3 py-1.5 text-[11px] font-bold text-teal-800 shadow-sm backdrop-blur">
            {project.category}
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-slate-950/70 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur">
            {project.year}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h2 className="text-xl font-bold leading-snug text-slate-950 transition-colors group-hover:text-teal-800">
            {project.title}
          </h2>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
            {project.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
            {project.technologies.slice(0, 3).map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600"
              >
                {technology}
              </li>
            ))}
            {project.technologies.length > 3 && (
              <li className="rounded-full bg-teal-50 px-2.5 py-1 text-[11px] font-semibold text-teal-700">
                +{project.technologies.length - 3}
              </li>
            )}
          </ul>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal-700">
            View project
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All work");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All work" || project.category === activeCategory;
      const searchableText = [
        project.title,
        project.description,
        project.category,
        ...project.technologies,
      ]
        .join(" ")
        .toLowerCase();
      return matchesCategory && searchableText.includes(normalizedSearch);
    });
  }, [activeCategory, searchTerm]);

  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-16 pt-28 font-sans text-slate-900 sm:px-6 sm:pb-20 sm:pt-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-9 flex flex-col gap-6 sm:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              Selected work
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Projects built around real needs.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Explore web application, design, and search projects from JMM Labs.
              Open a project to see its focus and the technologies involved.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-teal-900/10 transition hover:bg-teal-800"
          >
            Discuss a project <ArrowRight size={16} />
          </Link>
        </header>

        <section aria-label="Filter projects" className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 gap-2 overflow-x-auto pb-1" role="group" aria-label="Project category">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                const count =
                  category === "All work"
                    ? projects.length
                    : projects.filter((project) => project.category === category).length;
                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-100 ${
                      isActive
                        ? "bg-teal-700 text-white"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-teal-200 hover:bg-teal-50 hover:text-teal-800"
                    }`}
                  >
                    {category}
                    <span className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                      isActive ? "bg-white/15 text-white" : "bg-slate-100 text-slate-500"
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <label className="relative block w-full lg:max-w-xs">
              <span className="sr-only">Search projects</span>
              <Search size={17} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search projects or technology"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-10 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear project search"
                  className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
                >
                  <X size={16} />
                </button>
              )}
            </label>
          </div>
        </section>

        <div className="mb-4 mt-6 flex items-center justify-between text-sm text-slate-500" aria-live="polite">
          <p>
            Showing <span className="font-bold text-slate-800">{filteredProjects.length}</span>{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </p>
          {(activeCategory !== "All work" || searchTerm) && (
            <button
              type="button"
              onClick={() => {
                setActiveCategory("All work");
                setSearchTerm("");
              }}
              className="font-semibold text-teal-700 hover:text-teal-900"
            >
              Clear filters
            </button>
          )}
        </div>

        <motion.div layout className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="mt-3 rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center">
            <h2 className="text-lg font-bold text-slate-900">No matching projects</h2>
            <p className="mt-2 text-sm text-slate-600">
              Try another search term or clear your category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("All work");
                setSearchTerm("");
              }}
              className="mt-5 rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-teal-800"
            >
              Show all projects
            </button>
          </div>
        )}

        <section className="mt-14 overflow-hidden rounded-3xl bg-teal-800 px-6 py-10 text-white sm:mt-20 sm:px-10 sm:py-14">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-200">
                Your project could be next
              </p>
              <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                Let’s build something useful together.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-teal-100">
                Share the problem you’re solving and we’ll help shape the next step.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-teal-800 transition hover:bg-teal-50"
            >
              Start a conversation <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
