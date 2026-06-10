import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mariana | Full Stack Portfolio",
  description:
    "Portafolio para una estudiante de Ingenieria de Sistemas enfocada en Full Stack, IA y productos reales.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
