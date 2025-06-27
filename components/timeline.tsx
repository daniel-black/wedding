import { moments } from "@/app/(pages)/our-story/moments";
import { Moment } from "./moment";

export function Timeline() {
  return (
    <div className="flex flex-col gap-8">
      {moments.map((moment, index) => (
        <Moment key={index} {...moment} />
      ))}
    </div>
  );
}
