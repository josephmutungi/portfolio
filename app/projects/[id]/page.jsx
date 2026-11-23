import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "../projectsData";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `https://novastackdigital.co.ke/projects/${project.id}`,
    },
    openGraph: {
      title: `${project.title} | JMM Labs`,
      description: project.description,
      images: [project.image],
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-16 pt-28 font-sans text-slate-900 sm:px-6 sm:pb-20 sm:pt-32 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:-translate-x-0.5 hover:text-teal-900"
        >
          <ArrowLeft size={16} /> Back to projects
        </Link>

        <header className="pb-7 pt-7 sm:pb-9 sm:pt-9">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-800">
              {project.category}
            </span>
            <span className="text-sm text-slate-500">{project.year}</span>
          </div>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {project.description}
          </p>
        </header>

        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm sm:rounded-3xl">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover"
          />
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.72fr]">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
              Project overview
            </p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">
              The focus
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              {project.description}
            </p>
          </section>

          <aside className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
              Project details
            </h2>
            <p className="mt-2 text-sm text-slate-500">Category</p>
            <p className="font-semibold text-slate-900">{project.category}</p>
            <h3 className="mt-5 text-sm font-bold text-slate-900">
              Technologies and tools
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <section className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl bg-teal-800 p-6 text-white sm:p-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-black sm:text-2xl">
              Have a similar challenge?
            </h2>
            <p className="mt-2 text-sm leading-6 text-teal-100">
              Tell us what you’re trying to build and we’ll discuss the scope.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-teal-800 transition hover:bg-teal-50"
          >
            Discuss your project <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </main>
  );
}
