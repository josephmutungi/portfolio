export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://novastackdigital.co.ke/sitemap.xml",
    host: "https://novastackdigital.co.ke",
  };
}
