import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    default: "JMM Labs | Web Design & Software Development in Nairobi",
    template: "%s | JMM Labs",
  },
  description:
    "Nairobi based web design and software development studio building business websites, custom web apps, e-commerce and M-Pesa integrations for growing businesses in Kenya.",
  keywords: [
    "web development company Kenya",
    "software development Nairobi",
    "web design Nairobi",
    "website design company Kenya",
    "custom web application development Kenya",
    "ecommerce website development Kenya",
    "Next.js developers Kenya",
    "M-Pesa Daraja API integration",
    "technical SEO services Kenya",
    "website maintenance Nairobi",
    "M-Pesa integration Kenya",
    "JMMLabs",
  ],
  metadataBase: new URL("https://novastackdigital.co.ke"),
  openGraph: {
    title: "JMM Labs | Web Design & Software Development in Nairobi",
    description:
      "Nairobi based web design and software development studio building business websites, custom web apps, e-commerce and M-Pesa integrations.",
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
    title: "JMM Labs | Web Design & Software Development in Nairobi",
    description:
      "Business websites, custom web apps, e-commerce and M-Pesa integrations from a Nairobi based digital studio.",
    images: ["/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>

        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Jmmlabs",
              url: "https://novastackdigital.co.ke",
              logo: "https://novastackdigital.co.ke/jmm-labs-icon.svg",
              sameAs: ["https://github.com/josephmutungi"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "KE",
              },
              description:
                "Nairobi based web design and software development studio building business websites, custom web apps, e-commerce and M-Pesa integrations.",
            }),
          }}
        />
      </body>
    </html>
  );
}
