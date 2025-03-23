import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Luis Keny",
  keywords: [
    'luis-keny',
    'Luis Keny Lucero Balvin',
    'luis keny',
    'portfolio',
    'porfolio',
    "luis keny's professional portfolio",
    "luis keny's portfolio",
  ],
  description: "Professional portfolio of Luis Keny, expert in web development, interface design and digital solutions. Here you can explore my projects in nextjs, angular, tailwind, astro, vue, etc. Each work reflects my innovative approach and my ability to create unique and functional digital experiences.",
  openGraph: {
    title: "luis keny's portfolio",
    description: 'Explore the professional portfolio of Luis Keny, a web developer with a unique approach.',
    url: 'https://luis-keny.dev/',
    siteName: "luis keny's portfolio",
    images: [
      {
        url: '/global/portfolio.avif',
        width: 1200,
        height: 630,
        alt: 'Luis Keny Portfolio Image',
      },
    ]
  },
  twitter: {
    site: '@luis_keny_https',
    card: 'summary_large_image',
    title: 'Portfolio Luis Keny',
    images: [
      {
        url: '/global/portfolio.avif',
        width: 1200,
        height: 630,
        alt: 'Luis Keny Portfolio Image',
      },
    ],
  },
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
