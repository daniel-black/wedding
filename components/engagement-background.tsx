import Image from "next/image";

export function EngagementBackground() {
  return (
    <Image
      src="/engagement-shoot-with-nala.jpg"
      alt="Dan and Steph engagement photo"
      fill
      className="object-cover brightness-50"
      priority
    />
  );
}
