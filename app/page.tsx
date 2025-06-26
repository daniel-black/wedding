import Image from "next/image";
import Link from "next/link";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  CheckCircle,
  CircleQuestionMark,
  Heart,
  MapPin,
  PlusIcon,
  Telescope,
} from "lucide-react";
import { Yeseva_One } from "next/font/google";

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yeseva-one",
});

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Image
        src="/impressionist-greenhouse.png"
        alt="Impressionist Greenhouse"
        fill
        className="object-cover mask-t-from-80%"
        priority
      />
      {/* Responsive overlay: bottom on mobile, center on md+ */}
      <div className="absolute inset-0 flex items-end md:items-center justify-center z-10 pointer-events-none">
        <h1
          className={`${yeseva.variable} font-display text-white text-center text-4xl md:text-6xl lg:text-7xl px-4 select-none leading-tight`}
          style={{ fontFamily: "var(--font-yeseva-one)" }}
        >
          <span>
            Come celebrate our love
            <br />
            in the greenhouse
          </span>
        </h1>
      </div>
      {/* Top Nav Overlay */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-6 text-white z-20">
        <Link
          href="/"
          className="bg-green-subdued text-white backdrop-blur-md border border-white/20 shadow-lg rounded-full px-4 py-2 font-bold text-lg tracking-tighter"
        >
          Dan & Steph
        </Link>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              aria-label="Open menu"
              size="icon"
              className="rounded-full bg-green-subdued shadow-lg hover:bg-green-vibrant"
            >
              <PlusIcon className="w-4 h-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="max-w-fit bg-beige/30 border-white/20 backdrop-blur-md"
          >
            <ul className="space-y-1 text-right tracking-tighter">
              {[
                { label: "FAQ", href: "/faq", icon: CircleQuestionMark },
                { label: "RSVP", href: "/rsvp", icon: CheckCircle },
                { label: "TRAVEL", href: "/travel", icon: MapPin },
                { label: "SCHEDULE", href: "/schedule", icon: Calendar },
                { label: "OUR STORY", href: "/our-story", icon: Heart },
                {
                  label: "THINGS TO DO",
                  href: "/things-to-do",
                  icon: Telescope,
                },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center justify-end gap-3 rounded p-2 hover:bg-green-subdued hover:text-white transition-colors"
                  >
                    <span className="font-medium">{item.label}</span>
                    <item.icon className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
      </nav>
    </div>
  );
}
