import { EngagementBackground } from "../engagement-background";

export function MainDetailsSection() {
  return (
    <section className="relative w-full min-h-screen max-h-fit overflow-hidden">
      <EngagementBackground />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Top text */}
      <div className="absolute top-0 left-0 right-0 z-10 pt-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="font-display text-2xl sm:text-4xl md:text-5xl text-background/90 text-left sm:text-center tracking-tight leading-relaxed">
            WE&apos;RE GETTING MARRIED!
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container mx-auto max-w-3xl px-4 py-16 space-y-16">
          <div className="space-y-2">
            <div className="h-[3px] w-14 bg-background" />
            <h2 className="text-3xl sm:text-5xl font-display text-background">
              WHEN
            </h2>
            <div>
              <h3 className="text-2xl sm:text-3xl text-background/90">
                Friday, May 29th, 2026
              </h3>
            </div>
          </div>

          <div className="space-y-2">
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
          </div>
        </div>
      </div>
    </section>
  );
}
