import './globals.css';
import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A213B',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  title: 'Financiera Sol PerÃº | Tu progreso, nuestra misiÃ³n',
  description: 'Portal institucional y canal digital oficial de Financiera Sol PerÃº en Ciudad ConstituciÃ³n, Pasco. CrÃ©ditos, Ahorros, Seguros y Soluciones Financieras.',
  keywords: 'Financiera Sol PerÃº, Ciudad ConstituciÃ³n, Pasco, CrÃ©dito Emprende Ya, Ahorro Futuro, prÃ©stamos mype, finanzas PerÃº',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-[#FAF7F2] text-[#0A213B] antialiased selection:bg-[#F0A818] selection:text-[#0A213B]">
        {children}
      </body>
    </html>
  );
}

