import Image from "next/image";

export default function HeroImage() {
  return (
    <Image
      src="/impressionist-greenhouse.png"
      alt="Impressionist Greenhouse"
      fill
      className="object-cover mask-t-from-80% brightness-70"
      priority
    />
  );
}
