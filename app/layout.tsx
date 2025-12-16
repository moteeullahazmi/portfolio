import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moteeullah Azmi | Full Stack Developer",
  description:
    "Full Stack Developer building modern web applications. Portfolio, projects, and GitHub contributions.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
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
