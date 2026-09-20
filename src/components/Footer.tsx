import Link from "next/link";
import { ArrowUpRight, Ghost, ShieldCheck } from "lucide-react";
import { navItems, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="source-strip">
        <div className="page-shell flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p><span className="status-dot" />Compiled from public sources</p>
          <a href={site.officialUrl} target="_blank" rel="noopener noreferrer">Play on itch.io <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </div>
      <div className="page-shell footer-grid">
        <div>
          <div className="flex items-center gap-3"><span className="brand-mark"><Ghost className="h-5 w-5" /></span><strong className="font-display text-xl text-white">Little Troubles Guide</strong></div>
          <p className="mt-4 max-w-lg text-sm leading-7 text-[#cfc4da]">An independent companion for Kenney&apos;s short adventure, organized around the 11 real tasks, their outfit dependencies, and the current playable build.</p>
        </div>
        <div>
          <h2>Explore</h2>
          <ul>{navItems.slice(0, 5).map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul>
        </div>
        <div>
          <h2>Site</h2>
          <ul>
            <li><Link href="/updates/">Updates & Sources</Link></li>
            <li><Link href="/about/">About</Link></li>
            <li><Link href="/privacy-policy/">Privacy Policy</Link></li>
            <li><Link href="/terms/">Terms</Link></li>
          </ul>
          <p className="footer-disclaimer"><ShieldCheck className="h-4 w-4 shrink-0" />Not affiliated with Kenney or itch.io. Game art belongs to its owner.</p>
        </div>
      </div>
      <div className="page-shell footer-bottom">&copy; {new Date().getFullYear()} Little Troubles Guide. Independent fan reference. · Content AI-assisted, human-reviewed · Data sources cited on page · Contact: lianlele168@gmail.com</div>
    </footer>
  );
}
