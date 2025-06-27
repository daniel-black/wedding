export function SpotifyEmbed() {
  return (
    <div className="group">
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/2QPTxYGPkQsbuO4VRXXZXD?utm_source=generator&theme=0"
        allowFullScreen
        className="w-full max-w-2xl h-96 transition-all duration-300 border-1 border-transparent group-hover:border-[#1DB954] group-hover:shadow-[0_0_30px_rgba(29,185,84,0.4)]"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export const RECOMMENDATIONS_PLAYLIST_URL =
  "https://open.spotify.com/playlist/1U75VzX2Mb4UA8tE9kqhWf?si=cb036cc290b44b00&pt=52b858b70e353f04ef211f095fb3418e";
