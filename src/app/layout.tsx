import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://tuataras.io";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Tuataras | Desarrollo Web, UX/UI y Consultoría Digital",
    template: "%s | Tuataras",
  },
  description:
    "Creamos aplicaciones web escalables, diseño UX/UI y plataformas e-learning para empresas que quieren crecer. Más de 10 años de experiencia en Panamá.",
  keywords: [
    "desarrollo web", "UX UI", "DevOps", "e-learning", "consultoría TIC",
    "web development", "digital consulting", "Panama", "Tuataras",
  ],
  authors: [{ name: "Tuataras", url: BASE_URL }],
  creator: "Tuataras",
  openGraph: {
    type: "website",
    locale: "es_PA",
    alternateLocale: "en_US",
    url: BASE_URL,
    siteName: "Tuataras",
    title: "Tuataras | Desarrollo Web, UX/UI y Consultoría Digital",
    description:
      "Creamos aplicaciones web escalables, diseño UX/UI y plataformas e-learning para empresas que quieren crecer.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Tuataras" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuataras | Desarrollo Web, UX/UI y Consultoría Digital",
    description:
      "Creamos aplicaciones web escalables, diseño UX/UI y plataformas e-learning.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
