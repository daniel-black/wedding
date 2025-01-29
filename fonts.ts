import { Corinthia, Playwrite_CL } from "next/font/google";

export const playwrite = Playwrite_CL({
  variable: "--font-playwrite",
  weight: ["400"],
});

export const corinthia = Corinthia({
  variable: "--font-corinthia",
  subsets: ["latin"],
  weight: ["400", "700"],
});
