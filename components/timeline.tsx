import { moments } from "@/app/(pages)/our-story/moments";
import { Moment } from "./moment";

export function Timeline() {
  return (
    <div className="relative">
      {/* Render the vertical timeline line. Content will go on left and right */}
      <div className="absolute left-20 sm:left-30 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />

      {/* Date rendered to the left. Dot marker center. Content on the right */}
      <div className="space-y-14">
        {moments.map((moment, index) => (
          <div key={index} className="relative flex items-start">
            {/* Date on the left */}
            <div className="w-20 sm:w-30 pr-8 sm:text-right sticky top-14">
              <p className="font-mono text-xs sm:text-sm text-muted-foreground tracking-tighter sm:tracking-normal tabular-nums">
                {moment.date}
              </p>
            </div>

            {/* Circle marker */}
            <div className="absolute left-20 sm:left-30 transform -translate-x-1/2 w-4 h-4 bg-background border-2 border-border rounded-full z-10" />

            {/* Moment content on the right */}
            <div className="w-full pl-6 sm:pl-14 -translate-y-2">
              <Moment {...moment} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
