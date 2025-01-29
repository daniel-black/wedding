import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { playwrite } from "@/fonts";

export const metadata: Metadata = {
  title: "Steph and Dan's Wedding",
  description: "Join us for our special day in Denver",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playwrite.className} antialiased bg-stone-900 text-stone-50`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
