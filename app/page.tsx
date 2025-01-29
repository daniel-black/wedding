import { corinthia } from "@/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-auto aspect-video">
        <div
          className={`absolute inset-0 text-center flex flex-col justify-center p-6 md:p-12 z-10 ${corinthia.className}`}
        >
          <h1 className="text-6xl font-bold drop-shadow-lg">
            We&apos;re getting married!
          </h1>
          <h2 className="text-4xl font-normal mt-10">
            Come join us on our special day in Denver
          </h2>
        </div>
        <Image
          src="/hero.png"
          alt="Steph and Dan's Wedding"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority
          quality={100}
          className="-z-10 brightness-50"
        />
      </div>
    </div>
  );
}
