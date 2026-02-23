import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOMBRE - Portal de Noticias",
  description: "Portal de noticias actualizado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  );
}