import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import TaskTracker from "@/components/TaskTracker";
import { breadcrumbSchema, trackerSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Little Troubles Task Tracker (August 2026)",
  description: "Track all 11 Little Troubles in Spooky Town objectives with a free checklist that saves progress locally in your browser.",
  alternates: { canonical: "/task-tracker" },
  openGraph: { url: "/task-tracker/", images: ["/gameplay-town-wide.png"] },
  twitter: { card: "summary_large_image", images: ["/gameplay-town-wide.png"] },
};

export default function TaskTrackerPage() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Task Tracker", path: "/task-tracker/" }]),
        trackerSchema(),
      ]} />
      <section className="compact-hero">
        <div className="page-shell">
          <p className="eyebrow">11-objective checklist</p>
          <h1>Little Troubles Task Tracker</h1>
          <p>Mark each town errand as it clears. Your checklist stays in this browser and links directly to the solution for every unfinished task.</p>
        </div>
      </section>
      <section className="page-section">
        <div className="page-shell"><TaskTracker /></div>
      </section>
      <section className="page-section tracker-notes-band">
        <div className="page-shell grid gap-8 md:grid-cols-2">
          <article className="plain-panel">
            <Info className="h-6 w-6 text-lilac-700" />
            <h2>In-game counter</h2>
            <p>Press T to open the game&apos;s own task panel. While it is open, press I to reveal task names. This tracker is a companion and does not alter save data.</p>
          </article>
          <article className="plain-panel">
            <ArrowRight className="h-6 w-6 text-apricot-600" />
            <h2>Route order</h2>
            <p>The numbered order follows a clean dependency chain, but the game allows several requests to be started earlier.</p>
            <Link href="/walkthrough/" className="text-link mt-4">Open full walkthrough <ArrowRight className="h-4 w-4" /></Link>
          </article>
        </div>
      </section>
    </>
  );
}
