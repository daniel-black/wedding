import {
  Yeseva_One,
  Lato,
  Space_Mono,
  Shadows_Into_Light,
} from "next/font/google";

export const displayFont = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yeseva-one",
});

export const bodyFont = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const monoFont = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const handwrittenFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-handwritten",
});
