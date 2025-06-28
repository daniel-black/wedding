import Image from "next/image";

type PolaroidProps = {
  src: string;
  alt: string;
  date: string;
  text: string;
};

export function Polaroid({ src, alt, date, text }: PolaroidProps) {
  return (
    <div className="border border-gray-100/50 rounded-[4px] bg-white w-fit h-fit shadow-xl bg-[url('https://www.transparenttextures.com/patterns/groovepaper.png')] bg-cover bg-center">
      <div className="rounded-[2px] mx-[18px] mt-[36px] mb-[24px] h-[314px] w-[236px] bg-gray-300 relative overflow-hidden filter sepia-10">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 192px, 256px"
        />
      </div>
      <div className="h-[58px] w-full bg-white/50 border-t border-gray-100/50 border-dashed rounded-b-[4px] font-handwritten text-sm font-bold tracking-widest py-1.5 px-6 text-[#575261]">
        <p>{date}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
