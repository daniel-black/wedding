"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Heart, MenuIcon, X } from "lucide-react";
import { NAV_LINKS } from "./nav-links";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 pointer-events-none">
      <nav className="mx-auto max-w-3xl px-2 lg:px-0 py-2 flex justify-between items-center pointer-events-none">
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
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              size="icon"
              className="rounded-full shadow-lg pointer-events-auto relative overflow-hidden"
            >
              <div className="relative w-4 h-4">
                <MenuIcon
                  className={`w-4 h-4 absolute inset-0 transition-all duration-200 ease-in-out ${
                    isOpen
                      ? "opacity-0 rotate-90 scale-75"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  className={`w-4 h-4 absolute inset-0 transition-all duration-200 ease-in-out ${
                    isOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-75"
                  }`}
                />
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="center"
            side="bottom"
            className="max-w-fit p-2"
          >
            <ul className="space-y-1 text-right tracking-tighter">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  <Button asChild variant="ghost" className="w-full">
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group flex items-center justify-end gap-3 p-2"
                      onClick={() => setIsOpen(false)}
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
