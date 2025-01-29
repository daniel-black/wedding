import Image from "next/image";

export function FullWidthImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full h-auto aspect-video">
      <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 z-10">
        <h1 className="text-5xl text-white font-semibold text-center drop-shadow-lg">
          We&apos;re getting married!
        </h1>
      </div>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        priority
        quality={100}
        className="z-0 brightness-50"
      />
    </div>
  );
}
