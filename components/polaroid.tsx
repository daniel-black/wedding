import Image from "next/image";

type PolaroidProps = {
  src: string;
  alt: string;
  date: string;
  text: string;
};

export function Polaroid({ src, alt, date, text }: PolaroidProps) {
  return (
    <div className="group relative inline-block">
      {/* Polaroid container with aspect ratio and responsive scaling */}
      <div className="border-[1px] border-border/50 rounded-[2px] relative w-48 h-60 sm:w-64 sm:h-80 bg-white bg-[url('https://www.transparenttextures.com/patterns/groovepaper.png')] bg-cover bg-center p-2 sm:p-3 pb-6 sm:pb-8 shadow-lg transform rotate-1 transition-transform duration-300 hover:rotate-0 hover:scale-105">
        {/* Image container with aspect ratio */}
        <div className="relative w-full h-40 sm:h-56 overflow-hidden rounded-[1px] filter sepia-10">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 192px, 256px"
          />
        </div>

        {/* Caption area */}
        <div className="mt-2 sm:mt-3 text-center font-handwritten text-[#000F55]">
          <p className="text-sm">{date}</p>
          <p className="text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
}
