"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EngagementBackground } from "../engagement-background";

export function MainDetailsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen max-h-fit overflow-hidden"
    >
      <EngagementBackground />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Top text */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-10 pt-16"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <div className="container mx-auto max-w-3xl px-4">
          <p className="font-display text-2xl sm:text-4xl md:text-5xl text-background/90 text-left sm:text-center tracking-tight leading-relaxed">
            WE&apos;RE GETTING MARRIED!
          </p>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        <div className="container mx-auto max-w-3xl px-4 py-8 md:py-14 space-y-16">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <div className="h-[3px] w-14 bg-background" />
            <h2 className="text-3xl sm:text-5xl font-display text-background">
              WHEN
            </h2>
            <div>
              <h3 className="text-2xl sm:text-3xl text-background/90">
                Friday, May 29th, 2026
              </h3>
            </div>
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <div className="h-[3px] w-14 bg-background" />
            <h2 className="text-3xl sm:text-5xl font-display text-background">
              WHERE
            </h2>
            <div>
              <h3 className="text-2xl sm:text-3xl text-background/90">
                Ceremony
              </h3>
              <p className="text-background/80">Denver Botanic Gardens</p>
              <p className="text-background/80">
                1007 York St, Denver, CO 80206
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl text-background/90">
                Dinner & Reception
              </h3>
              <p className="text-background/80">The Wright Room</p>
              <p className="text-background/80">
                535 16th St Mall #240, Denver, CO 80202
              </p>
            </div>

            <div className="pt-4">
              <p className="text-background/80 italic text-sm sm:text-base">
                *Due to the intimate size of our ceremony venue, some guests are
                invited exclusively to join us for dinner and reception. Please
                check your e-vites for details on which events you&apos;ll be
                celebrating with us.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
          >
            <div className="h-[3px] w-14 bg-background" />
            <h2 className="text-3xl sm:text-5xl font-display text-background">
              RSVP
            </h2>
            <div>
              <p className="text-background/80">
                Please{" "}
                <a
                  href="/rsvp"
                  className="text-background underline hover:text-background/80 transition-colors"
                >
                  RSVP
                </a>{" "}
                by March 1st, 2026
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
