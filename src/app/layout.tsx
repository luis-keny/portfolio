import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Porfolio lunydev",
  description: "Portafolio profesional de Lunydev, experto en desarrollo web, diseño de interfaces y soluciones digitales. Aquí podrás explorar mis proyectos en nextjs, angular, tailwind, astro, vue, etc. Cada trabajo refleja mi enfoque innovador y mi habilidad para crear experiencias digitales únicas y funcionales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${plusJakartaSans.variable} antialiased bg-gray-50 dark:bg-gray-950 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
