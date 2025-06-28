import { Moment as MomentType } from "@/app/(pages)/our-story/moments";
import { Polaroid } from "@/components/polaroid";

export type MomentProps = MomentType;

export function Moment({ date, title, text, images }: MomentProps) {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h2 className="text-lg sm:text-2xl font-bold mt-0">{title}</h2>
        {/* <p className="text-sm text-muted-foreground">{date}</p> */}
        <p className="text-base text-muted-foreground">{text}</p>
      </div>
      {images && (
        <div className="flex flex-wrap gap-4 justify-start">
          {images.map((image, index) => (
            <Polaroid
              date={date}
              key={`${image.src}-${index}`}
              src={image.src}
              alt={image.alt}
              text={image.text}
            />
          ))}
        </div>
      )}
    </section>
  );
}
