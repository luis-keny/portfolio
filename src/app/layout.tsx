import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Porfolio lukdev",
  description: "Professional portfolio of lukdev, expert in web development, interface design and digital solutions. Here you can explore my projects in nextjs, angular, tailwind, astro, vue, etc. Each work reflects my innovative approach and my ability to create unique and functional digital experiences.",
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
