import Image from "next/image";
import Link from "next/link";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Image
        src="/impressionist-greenhouse.png"
        alt="Impressionist Greenhouse"
        fill
        className="object-cover"
        priority
      />
      {/* Top Nav Overlay */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-6 text-white z-10">
        <Link
          href="/"
          className="font-bold text-2xl tracking-tighter text-stone-950"
        >
          Dan & Steph
        </Link>
        <Popover>
          <PopoverTrigger asChild>
            <Button aria-label="Open menu" size="icon">
              <PlusIcon className="w-4 h-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="max-w-fit">
            <ul className="space-y-3 text-right">
              {[
                { label: "FAQ", href: "/faq" },
                { label: "RSVP", href: "/rsvp" },
                { label: "TRAVEL", href: "/travel" },
                { label: "SCHEDULE", href: "/schedule" },
                { label: "OUR STORY", href: "/our-story" },
                { label: "THINGS TO DO", href: "/things-to-do" },
              ].map((item) => (
                <li key={item.label}>
                  <Link key={item.label} href={item.href} className="block">
                    {item.label}
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
