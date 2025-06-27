import { moments } from "@/app/(pages)/our-story/moments";
import { Moment } from "./moment";

export function Timeline() {
  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />

      <div className="space-y-8">
        {moments.map((moment, index) => (
          <div key={index} className="relative flex items-start">
            {/* Date on the left */}
            <div className="w-1/2 pr-8 text-right sticky top-30">
              <p className="font-mono text-sm text-muted-foreground">
                {moment.date}
              </p>
            </div>

            {/* Circle marker */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background border-2 border-border rounded-full z-10" />

            {/* Moment content on the right */}
            <div className="w-1/2 pl-8">
              <Moment {...moment} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
