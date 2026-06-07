import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Manpreet Bhatti | Home",
    template: "%s - Manpreet Bhatti",
  },
  description:
    "All about Manpreet Bhatti; I'm a front end (aspiring full-stack) developer based in Canada! Get to know me as I showcase my projects, skills, and more!",
  authors: [{ name: "Manpreet Bhatti" }],
  openGraph: {
    siteName: "Manpreet Bhatti",
    title: "Manpreet Bhatti",
    type: "website",
    url: "https://www.manpreetbhatti.com/",
    description:
      "All about Manpreet Bhatti; I'm a front end (aspiring full-stack) developer based in Canada! Get to know me as I showcase my projects, skills, and more!",
    images: [{ url: "https://www.manpreetbhatti.com/images/MB-mono.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manpreet Bhatti",
    description:
      "All about Manpreet Bhatti; I'm a front end (aspiring full-stack) developer based in Canada! Get to know me as I showcase my projects, skills, and more!",
    images: ["https://www.manpreetbhatti.com/images/MB-mono.svg"],
  },
  icons: {
    apple: "/images/MB-mono.svg",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t===null&&d)){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
      </head>
      <body className={`${poppins.variable}`}>
        <Navbar />
        <main className="flex flex-col min-h-screen items-center pt-14">
          {children}
          <footer className="text-center opacity-40 text-sm mt-auto pt-8 pb-2">
            Made with ❤️ by Manpreet Bhatti
          </footer>
        </main>
      </body>
    </html>
  );
}
