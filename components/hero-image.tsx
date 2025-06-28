import Image from "next/image";

export default function HeroImage() {
  return (
    <Image
      src="/impressionist-greenhouse.png"
      alt="Impressionist Greenhouse"
      fill
      className="object-cover brightness-70 grayscale-50"
      priority
    />
  );
}
