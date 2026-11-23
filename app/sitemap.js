import { projects } from "./projects/projectsData";

export default function sitemap() {
  const staticPages = [
    {
      url: "https://novastackdigital.co.ke",
      lastModified: new Date(),
    },
    {
      url: "https://novastackdigital.co.ke/about",
      lastModified: new Date(),
    },
    {
      url: "https://novastackdigital.co.ke/projects",
      lastModified: new Date(),
    },
    {
      url: "https://novastackdigital.co.ke/contact",
      lastModified: new Date(),
    },
    {
      url: "https://novastackdigital.co.ke/services",
      lastModified: new Date(),
    },
    {
      url: "https://novastackdigital.co.ke/pricing",
      lastModified: new Date(),
    },
    {
      url: "https://novastackdigital.co.ke/terms",
      lastModified: new Date(),
    },
  ];

  const projectPages = projects.map((project) => ({
    url: `https://novastackdigital.co.ke/projects/${project.id}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...projectPages];
}
