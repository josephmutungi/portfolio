import HeroSection from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { HomeAbout, HomeServices } from "@/components/HomeSections";

export const metadata = {
  title: "Web Design & Software Development in Nairobi",
  description:
    "Need a business website or custom web app? JMM Labs is a Nairobi web design and software development studio for growing businesses across Kenya.",
  keywords: [
    "web development company Kenya",
    "software development Nairobi",
    "web design Nairobi",
    "website development Kenya",
    "custom web application development Kenya",
    "ecommerce website design Nairobi",
    "M-Pesa Daraja integration Kenya",
    "technical SEO services Nairobi",
    "website maintenance Kenya",
    "JMMLabs",
  ],
  authors: [{ name: "JMMLabs Team" }],
  creator: "JMMLabs",
  publisher: "JMMLabs",
  openGraph: {
    title: "Web Design & Software Development in Nairobi | JMM Labs",
    description:
      "Business websites, custom web apps, e-commerce and M-Pesa integrations for growing businesses across Kenya.",
    url: "https://novastackdigital.co.ke",
    siteName: "JMMLabs",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "JMMLabs digital product and software development",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Software Development in Nairobi | JMM Labs",
    description:
      "Business websites, custom web apps, e-commerce and M-Pesa integrations for growing businesses across Kenya.",
    images: ["/hero.png"],
  },
  alternates: {
    canonical: "https://novastackdigital.co.ke",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <HomeServices />
      <HomeAbout />
      <Testimonials />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "JMMLabs",
            image: "https://novastackdigital.co.ke/jmm-labs-icon.svg",
            url: "https://novastackdigital.co.ke",
            telephone: "+254758133905",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nairobi",
              addressCountry: "KE",
            },
            serviceType: [
              "Web design",
              "Web development",
              "Custom web application development",
              "E-commerce development",
              "M-Pesa API integration",
              "Technical SEO",
            ],
            areaServed: [
              { "@type": "Country", name: "Kenya" },
              { "@type": "Country", name: "Germany" },
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "Canada" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "AdministrativeArea", name: "Europe" },
            ],
            priceRange: "$$",
          }),
        }}
      />
    </main>
  );
}
