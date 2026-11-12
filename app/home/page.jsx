import HeroSection from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { HomeAbout, HomeServices } from "@/components/HomeSections";

export const metadata = {
  title: "JMMLabs | Web Design & Software Development",
  description:
    "JMM Labs builds websites, custom software, and business IT solutions for clients in Kenya, Germany, the US, Canada, and Europe.",
  keywords: [
    "web development company Kenya",
    "software development Nairobi",
    "custom software development Germany",
    "web design company USA",
    "web development services Canada",
    "software developers Europe",
    "IT support for businesses Germany",
    "business profile setup Kenya",
    "operating system installation Nairobi",
    "M-Pesa integration Kenya",
    "IT partnership opportunities",
    "JMMLabs",
  ],
  authors: [{ name: "JMMLabs Team" }],
  creator: "JMMLabs",
  publisher: "JMMLabs",
  openGraph: {
    title: "JMMLabs | Web Design & Software Development",
    description:
      "Websites, custom software, and business IT solutions for clients in Kenya and international markets.",
    url: "https://novastackdigital.co.ke",
    siteName: "JMMLabs",
    images: [
      {
        url: "/og-image.png",
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
    title: "JMMLabs | Web Design & Software Development",
    description:
      "Websites, custom software, and business IT solutions for clients in Kenya and international markets.",
    images: ["/og-image.png"],
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
            image: "https://novastackdigital.co.ke/jmmlabslogo.png",
            url: "https://novastackdigital.co.ke",
            telephone: "+254113822842",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nairobi",
              addressCountry: "KE",
            },
            serviceType: "Software Development, Web Design, SEO",
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
