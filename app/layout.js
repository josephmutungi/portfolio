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
    default: "JMM Labs | Web Design & Software Development",
    template: "%s | Jmmlabs",
  },
  description:
    "JMM Labs builds websites, custom software, and business IT solutions for clients in Kenya, Germany, the United States, Canada, and Europe.",
  keywords: [
    "web development company Kenya",
    "software development Nairobi",
    "web design Germany",
    "custom software development USA",
    "web development Canada",
    "software developers Europe",
    "business IT support",
    "business profile setup",
    "operating system installation",
    "M-Pesa integration Kenya",
    "JMMLabs",
  ],
  metadataBase: new URL("https://novastackdigital.co.ke"),
  openGraph: {
    title: "JMM Labs | Web Design & Software Development",
    description:
      "Websites, custom software, and business IT solutions for clients in Kenya and international markets.",
    url: "https://novastackdigital.co.ke",
    siteName: "JMM Labs",
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
    title: "JMM Labs | Web Design & Software Development",
    description:
      "Websites, custom software, and business IT solutions for clients in Kenya and international markets.",
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
              url: "https://novastackdigital.co.ke",
              logo: "https://novastackdigital.co.ke/jmmlabslogo.png",
              sameAs: ["https://github.com/mutungimuithi"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "KE",
              },
              description:
                "JMM Labs builds websites, custom software, and business IT solutions for clients in Kenya and international markets.",
            }),
          }}
        />
      </body>
    </html>
  );
}
