import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { displayFont, bodyFont, monoFont, handwrittenFont } from "@/lib/fonts";

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
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} ${handwrittenFont.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
