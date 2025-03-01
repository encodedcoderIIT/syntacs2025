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
    default:
      "SYNTACS 2025 | Symposium on Novel Technologies and Advances in Computer Science",
    template: "%s | SYNTACS 2025",
  },
  description:
    "Join SYNTACS 2025 - Symposium on Novel Technologies and Advances in Computer Science at IIT Ropar on March 8th, 2025. Featuring keynotes by Dr. Debabrata Nayak (PwC India) and Prof. Yogesh Simmhan (IISc Bangalore).",
  keywords: [
    "SYNTACS",
    "symposium",
    "research scholars day",
    "computer science",
    "IIT Ropar",
    "technology",
    "2025",
    "systems",
    "networks",
    "technical applications",
    "research",
    "Dr. Debabrata Nayak",
    "Prof. Yogesh Simmhan",
    "academic networking",
    "poster sessions",
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
    title:
      "SYNTACS 2025 - Symposium on Novel Technologies and Advances in Computer Science",
    description:
      "Join us at SYNTACS 2025 - Symposium on Novel Technologies and Advances in Computer Science at IIT Ropar, March 8th, 2025. A Research Scholars Day featuring keynotes, poster sessions, and networking opportunities.",
    siteName: "SYNTACS 2025",
    images: [
      {
        url: "/assets/carousels/carousel-1.png",
        width: 1200,
        height: 630,
        alt: "SYNTACS 2025 Symposium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SYNTACS 2025 - Research Scholars Symposium",
    description:
      "Join us at SYNTACS 2025 - Symposium on Novel Technologies and Advances in Computer Science at IIT Ropar, March 8th, 2025. Featuring talks by Dr. Debabrata Nayak and Prof. Yogesh Simmhan.",
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
