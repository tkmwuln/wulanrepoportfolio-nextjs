import type { Metadata } from "next";
import Navbar from "./components/layout/Navbar";
import Fairy from "./components/Fairy";
import { ThemeProvider } from "./context/ThemeContext";
import { LangProvider } from "./context/LangContext";
import { displayFont, bodyFont } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Putri Wulandari — Senior PM & UX Manager",
  description:
    "Portfolio of Putri Wulandari — Senior Product Manager & UX Manager building digital experiences that balance user empathy with measurable business outcomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${displayFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LangProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Fairy />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
