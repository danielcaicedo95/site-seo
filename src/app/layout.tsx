import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Providers from "./components/provider"; // Importa el componente Providers

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description: "Descripción global de mi sitio web.",
  keywords: ["Next.js", "SEO", "Dani"], // Palabras clave globales
  authors: [{ name: "Daniel", url: "https://daniseo.site" }], // Autor global
  publisher: "Daniel Caicedo", // Publisher global
  robots: "index, follow", // Comportamiento de los robots de búsqueda
  icons: {
    icon: "/images/favicon/favicon.ico", // Favicon global
  },
  alternates: {
    canonical: "https://daniseo.site", // URL canónica global
  },
  openGraph: {
    type: "website",
    locale: "es_ES", // Idioma global
    url: "daniseo.site",
    siteName: "SEO Dani",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-JDG3H84QBF" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JDG3H84QBF', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* 🔹 Código de Clarity Tracking */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "qfg1yii0v3");`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Envuelve children con Providers */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}