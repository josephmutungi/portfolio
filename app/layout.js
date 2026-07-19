import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Jmmlabs | Web Development Company in Kenya",
    template: "%s | Jmmlabs",
  },
  description:
    "Jmmlabs is a professional web development company in Kenya specializing in fast, SEO-optimized websites, React, Next.js, and scalable backend solutions.",
  keywords: [
    "web development company in Kenya",
    "Next.js developers Kenya",
    "React developers Kenya",
    "full stack development Kenya",
    "SEO optimized websites",
    "custom web applications",
    "Best we developer",
    "jmmlabs",
    "Mutungi Muithi",
    "Joseph Mutungi",
  ],
  metadataBase: new URL("https://novastackdigital.co.ke"),
  openGraph: {
    title: "Jmmlabs | Web Development Company in Kenya",
    description:
      "We build fast, secure, and scalable websites using Next.js, React, and modern backend technologies.",
    url: "https://novastackdigital.co.ke",
    siteName: "NovaStack Digital",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Jmmlabs",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jmmlabs | Web Development Company in Kenya",
    description:
      "Professional web development services using React, Next.js, and scalable backend solutions.",
    images: ["/preview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 font-serif`}
      >
        <Navbar />
        {children}
        <Footer />

        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Jmmlabs",
              url: "https://novastackdigital.com",
              logo: "https://novastackdigital.com/logo.png",
              sameAs: [
                "https://github.com/Joseh-star-dev",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "KE",
              },
              description:
                "Jmmlabs is a web development company in Kenya delivering fast, SEO-optimized websites and scalable web applications.",
            }),
          }}
        />
      </body>
    </html>
  );
}
