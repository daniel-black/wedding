import Link from "next/link";
import { SpotifyEmbed, RECOMMENDATIONS_PLAYLIST_URL } from "../spotify-embed";

import { ExternalLink, ListMusic, Heart } from "lucide-react";
import { CountDown } from "../count-down";
import { NAV_LINKS } from "./nav-links";

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Left: Info & Nav */}
          <div className="flex-1 min-w-0 space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold">Dan & Steph</h2>
              <p className="text-base font-medium">May 29, 2026</p>
              <p className="text-sm text-muted-foreground">
                We can&apos;t wait to celebrate with you.
              </p>
              <CountDown
                variant="secondary"
                targetDate="2026-05-29T17:00:00-06:00"
              />
            </div>
            <nav className="grid grid-cols-2 gap-x-8 gap-y-2 mt-4">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs underline underline-offset-2 text-muted-foreground hover:text-muted-foreground font-normal transition-none"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="pt-6">
              <p className="text-xs text-muted-foreground">
                Questions? Contact either Dan or Steph!
              </p>
            </div>
          </div>

          {/* Center: Honeymoon Fund */}
          <div className="flex-1 min-w-0 max-w-sm space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <Heart className="w-4 h-4" />
              <h3 className="text-base font-semibold">Honeymoon Fund</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              While we don&apos;t have a traditional registry, we&apos;d be
              grateful for contributions to our dream honeymoon.
            </p>
            <a
              href="https://venmo.com/u/danblack1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs underline underline-offset-2 text-muted-foreground hover:text-muted-foreground transition-none"
            >
              <span>Support our honeymoon</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Right: Music Section */}
          <div className="flex-1 min-w-0 max-w-xl space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <ListMusic className="w-4 h-4" />
              <h3 className="text-base font-semibold">Our Wedding Playlist</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Help shape the sounds of our day -{" "}
              <a
                href={RECOMMENDATIONS_PLAYLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs underline underline-offset-2 text-muted-foreground hover:text-muted-foreground transition-none"
              >
                <span>leave a song recommendation</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
            <SpotifyEmbed />
          </div>
        </div>
      </div>
    </footer>
  );
}
