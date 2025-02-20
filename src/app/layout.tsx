import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  
  description: 'Descripción global de mi sitio web.',
  keywords: ['Next.js', 'SEO', 'Dani'], // Palabras clave globales
  authors: [{ name: 'Daniel', url: 'https://example.com' }], // Autor global
  publisher: 'Daniel Caicedo', // Publisher global
  robots: 'index, follow', // Comportamiento de los robots de búsqueda
  icons: {
    icon: '/favicon.ico', // Favicon global
  },
  alternates: {
    canonical: 'https://example.com', // URL canónica global
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES', // Idioma global
    url: 'https://example.com',
    siteName: 'SEO Dani',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
