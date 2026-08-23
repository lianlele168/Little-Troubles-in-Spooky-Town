import { ArrowUpRight, Gamepad2 } from "lucide-react";
import { site } from "@/data/site";

export default function PlayFrame() {
  return (
    <section className="play-frame" aria-label="Little Troubles in Spooky Town browser game">
      <div className="play-frame-head">
        <div className="flex items-center gap-3">
          <Gamepad2 className="h-5 w-5 text-mint-700" />
          <div><h2>Official itch.io game frame</h2><p>Loaded from Kenney&apos;s current HTML5 upload</p></div>
        </div>
        <a href={site.officialUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">Open on itch.io <ArrowUpRight className="h-4 w-4" /></a>
      </div>
      <div className="game-frame-ratio">
        <iframe src={site.directGameUrl} title="Play Little Troubles in Spooky Town" allow="autoplay; fullscreen; gamepad" allowFullScreen loading="eager" referrerPolicy="strict-origin-when-cross-origin" />
      </div>
    </section>
  );
}
