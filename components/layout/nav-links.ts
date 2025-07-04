import {
  Calendar,
  CheckCircle,
  CircleQuestionMark,
  Heart,
  Home,
  MapPin,
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
