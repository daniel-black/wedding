import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { displayFont, bodyFont, monoFont } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Wedding",
  description: "Wedding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
