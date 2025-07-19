"use client";

import { motion } from "framer-motion";
import { CountDown } from "./count-down";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DisplayText() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h1 className="tracking-tighter font-medium text-center text-primary-foreground text-4xl md:text-6xl lg:text-7xl px-4 select-none leading-tight text-balance drop-shadow-2xl max-w-3xl">
        <span>Come celebrate our love in the garden</span>
      </h1>
      <p className="mt-4 mb-2 text-xl font-medium md:text-xl text-center drop-shadow text-primary-foreground/90">
        <span>Denver Botanic Gardens</span>
        <br />
        <span>May 29, 2026</span>
      </p>
      <CountDown variant="default" targetDate="2026-05-29T17:00:00-06:00" />
      <div className="mt-8 pointer-events-auto">
        <Button
          size="lg"
          className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg"
          asChild
        >
          <Link href="/rsvp">RSVP Now</Link>
        </Button>
      </div>
    </motion.div>
  );
}
