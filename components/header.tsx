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

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 pointer-events-none">
      <nav className="mx-auto max-w-5xl px-2 lg:px-0 py-2 flex justify-between items-center text-white pointer-events-none">
        <Link
          href="/"
          className="h-[36px] px-4 flex items-center justify-center gap-1 bg-green-subdued text-white border border-white/20 shadow-lg rounded-full tracking-tighter hover:bg-green-vibrant transition-colors pointer-events-auto"
        >
          <span>Dan</span>
          <div className="flex items-center -space-x-1">
            <Heart className="w-3.5 h-3.5 rotate-12 translate-y-[3px]" />
            <Heart className="w-4 h-4 -rotate-12" />
          </div>
          <span>Steph</span>
        </Link>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              aria-label="Open menu"
              size="icon"
              className="rounded-full bg-green-subdued border border-white/20 shadow-lg hover:bg-green-vibrant transition-colors pointer-events-auto"
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
    </header>
  );
}
