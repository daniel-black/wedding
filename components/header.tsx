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
  Home,
  Heart,
  MapPin,
  PlusIcon,
  Telescope,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "HOME", href: "/", icon: Home },
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
] as const;

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 pointer-events-none">
      <nav className="mx-auto max-w-4xl px-2 lg:px-0 py-2 flex justify-between items-center pointer-events-none">
        <Button asChild className="rounded-full pointer-events-auto shadow-lg">
          <Link
            href="/"
            className="px-4 flex items-center justify-center gap-1 tracking-tighter pointer-events-auto"
          >
            <span>Dan</span>
            <div className="flex items-center -space-x-1">
              <Heart className="w-3.5 h-3.5 rotate-12 translate-y-[3px]" />
              <Heart className="w-4 h-4 -rotate-12" />
            </div>
            <span>Steph</span>
          </Link>
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              aria-label="Open menu"
              size="icon"
              className="rounded-full shadow-lg pointer-events-auto"
            >
              <PlusIcon className="w-4 h-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="max-w-fit p-2">
            <ul className="space-y-1 text-right tracking-tighter">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  <Button asChild variant="ghost" className="w-full">
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group flex items-center justify-end gap-3 p-2"
                    >
                      <span className="font-medium">{item.label}</span>
                      <item.icon className="w-4 h-4 text-muted-foreground" />
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
      </nav>
    </header>
  );
}
