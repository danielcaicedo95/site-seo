// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Favicon básico */}
        <link rel="icon" href="/images/favicon/favicon.ico" />

        {/* Opcional: Favicon para dispositivos Apple */}
        <link rel="apple-touch-icon" href="/images/favicon/apple-touch-icon.png" />

        {/* Opcional: Favicon para dispositivos Android */}
        <link rel="icon" type="image/png" sizes="192x192" href="/images/favicon/android-chrome-192x192.png" />

        {/* Opcional: Favicon para Windows */}
        <meta name="msapplication-TileImage" content="/images/favicon/mstile-150x150.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}