import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { CVProvider } from "@/contexts/cv-context";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Brikman Paul Morales - Ingeniero de Sistemas | Full Stack Developer",
  description:
    "CV interactivo de Brikman Paul Morales - Ingeniero de Sistemas con más de 3 años de experiencia en desarrollo web, especializado en Front-End con React.js y JavaScript",
  keywords:
    "Ingeniero de Sistemas, Full Stack Developer, React, JavaScript, TypeScript, Angular, Next.js, Front-End Developer",
  authors: [{ name: "Brikman Paul Morales" }],
  openGraph: {
    title: "Brikman Paul Morales - Ingeniero de Sistemas",
    description: "CV interactivo profesional - Desarrollador Full Stack especializado en React y JavaScript",
    type: "website",
  },
  generator: 'v0.app',
  icons: {
    icon: "/brik.png", // ✅ Aquí agregamos el favicon personalizado
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <CVProvider>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </CVProvider>
        <Analytics />
      </body>
    </html>
  );
}
