import { SpotifyEmbed } from "./spotify-embed";

export function Footer() {
  return (
    <footer className="w-full h-fit bg-green-subdued">
      <div className="p-4">
        <h5>May 29, 2026</h5>
        <p className=" text-sm">Questions? Contact either of us!</p>
        <SpotifyEmbed />
      </div>
    </footer>
  );
}
