import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Moteeullah Azmi | Full Stack Developer",

  icons: {
    icon: '/me.ico',
  },
  description:
    "Full Stack Developer building business websites, e-commerce platforms, and scalable web applications.",
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "Freelance Web Developer",
    "React Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Moteeullah Azmi" }],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* DARK MODE FIXED */}
      <body className="bg-zinc-900 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
