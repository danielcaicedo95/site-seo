import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";



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
    <html lang="es">
      <head>
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
        {children}
      </body>
    </html>
  );
}
