import { CountDown } from "./count-down";

export default function DisplayText() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
      <h1 className="tracking-tighter font-medium text-center text-primary-foreground text-4xl md:text-6xl lg:text-7xl px-4 select-none leading-tight text-balance drop-shadow-2xl max-w-4xl">
        <span>Come celebrate our love in the garden</span>
      </h1>
      <p className="mt-4 mb-2 text-xl font-medium md:text-xl text-center drop-shadow text-primary-foreground/90">
        <span>Denver Botanic Gardens</span>
        <br />
        <span>May 29, 2026</span>
      </p>
      <CountDown targetDate="2026-05-29T17:00:00-06:00" />
    </div>
  );
}
