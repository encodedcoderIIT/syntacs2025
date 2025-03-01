import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StructuredData from "../components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syntacs2025.site"),
  title: {
    default: "SYNTACS 2025 | Systems, Networks, Technical Applications in CS",
    template: "%s | SYNTACS 2025",
  },
  description:
    "International Conference on Systems, Networks, and Technical Applications in Computer Science at IIT Ropar, 8th March 2025. Featuring keynotes by Dr. Debabrata Nayak (PwC India) and Prof. Yogesh Simmhan (IISc Bangalore).",
  keywords: [
    "SYNTACS",
    "conference",
    "computer science",
    "IIT Ropar",
    "technology",
    "2025",
    "systems",
    "networks",
    "technical applications",
    "research",
    "symposium",
    "Dr. Debabrata Nayak",
    "Prof. Yogesh Simmhan",
  ],
  authors: [
    { name: "CSE Department, IIT Ropar", url: "https://cse.iitrpr.ac.in/" },
  ],
  creator: "IIT Ropar",
  publisher: "Department of Computer Science & Engineering, IIT Ropar",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  alternates: {
    canonical: "https://syntacs2025.site",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://syntacs2025.site/",
    title: "SYNTACS 2025 - International Conference on Computer Science",
    description:
      "Join us at SYNTACS 2025 - International Conference on Systems, Networks, and Technical Applications in Computer Science at IIT Ropar, 8th March 2025.",
    siteName: "SYNTACS 2025",
    images: [
      {
        url: "/assets/carousels/carousel-1.png",
        width: 1200,
        height: 630,
        alt: "SYNTACS 2025 Conference",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SYNTACS 2025 - International Conference",
    description:
      "Join us at SYNTACS 2025 - International Conference on Systems, Networks, and Technical Applications in Computer Science at IIT Ropar, 8th March 2025.",
    images: ["/assets/carousels/carousel-1.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="contentContainer">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
