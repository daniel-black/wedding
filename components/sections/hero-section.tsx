import DisplayText from "../display-text";
import HeroImage from "../hero-image";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <HeroImage />
      <DisplayText />
    </section>
  );
}
