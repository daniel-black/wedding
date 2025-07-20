import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { displayFont, bodyFont, monoFont, handwrittenFont } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Dan & Steph's Wedding",
  description:
    "Daniel Black and Stephanie Castrillo are getting married on May 29th 2026 in Denver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} ${handwrittenFont.variable} antialiased bg-primary`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
