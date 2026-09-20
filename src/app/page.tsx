import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bug, CheckCircle2, Gamepad2, ListChecks, Map, Shirt, Sparkles } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import TaskDirectory from "@/components/TaskDirectory";
import { homeFaqs } from "@/data/pages";
import { site } from "@/data/site";
import { faqSchema, videoGameSchema, websiteSchema } from "@/lib/seo";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const intentCards = [
  { href: "/walkthrough/", title: "Full walkthrough", detail: "Efficient route through all 11 objectives", icon: Map, tone: "mint" },
  { href: "/task-tracker/", title: "Task tracker", detail: "Keep your 0/11 to 11/11 progress", icon: ListChecks, tone: "lilac" },
  { href: "/outfits-abilities/", title: "Outfits & abilities", detail: "Strong, Flying, Cleaner, Engineer and more", icon: Shirt, tone: "apricot" },
  { href: "/bugs-fixes/", title: "Bugs & fixes", detail: "Softlocks, input and browser troubleshooting", icon: Bug, tone: "mint" },
] as const;

export default function HomePage() {
  return (
    <>
      <JsonLd data={[websiteSchema(), videoGameSchema(), faqSchema(homeFaqs)]} />

      <section className="hero-home">
        <Image src="/gameplay-town-wide.png" alt="Little Troubles in Spooky Town title screen" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="hero-shade" />
        <div className="page-shell hero-content">
          <div className="max-w-4xl">
            <p className="hero-eyebrow">Unofficial walkthrough / Current build</p>
            <h1>Little Troubles<br className="hidden sm:block" /> in Spooky Town</h1>
            <p className="hero-copy">Finish all 11 town troubles, unlock the right outfit abilities, find every collectible, and reach the family ending without losing the route.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/task-tracker/" className="btn-primary"><ListChecks className="h-4 w-4" />Open task tracker</Link>
              <a href={site.officialUrl} target="_blank" rel="noopener noreferrer" className="btn-hero-secondary"><Gamepad2 className="h-4 w-4" />Play official game</a>
            </div>
          </div>
        </div>
      </section>

      <section className="fact-strip" aria-label="game totals">
        <div className="page-shell fact-grid">
          <div><strong>11</strong><span>tracked tasks</span></div>
          <div><strong>10</strong><span>Ghoul-Aid bottles</span></div>
          <div><strong>6</strong><span>scattered flowers</span></div>
          <div><strong>10</strong><span>purple puddles</span></div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-shell">
          <div className="section-heading">
            <div><p className="eyebrow">Choose your route</p><h2>Pick up exactly where you are stuck</h2></div>
            <Link href="/tasks/" className="text-link">Browse all tasks <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="intent-grid">
            {intentCards.map((card) => {
              const Icon = card.icon;
              return <Link key={card.href} href={card.href} className={`intent-card tone-${card.tone}`}><span className="intent-icon"><Icon className="h-5 w-5" /></span><span><strong>{card.title}</strong><small>{card.detail}</small></span><ArrowRight className="ml-auto h-4 w-4" /></Link>;
            })}
          </div>
        </div>
      </section>

      <section className="page-section task-band">
        <div className="page-shell">
          <div className="section-heading">
            <div><p className="eyebrow">Recommended opening</p><h2>The first five unlock the route</h2></div>
            <Link href="/walkthrough/" className="text-link">See the complete order <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-8"><TaskDirectory limit={5} /></div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-shell screenshot-layout">
          <div className="screenshot-copy">
            <p className="eyebrow">Read the town</p>
            <h2>NPC hints are outfit recipes</h2>
            <p>Words such as <strong>silly</strong>, <strong>strong</strong>, <strong>engineer</strong>, and <strong>cool salesperson</strong> name the outfit pieces the conversation checks. Change one choice on each row, then talk again.</p>
            <Link href="/outfits-abilities/" className="btn-secondary mt-6">Match every outfit <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <figure className="screenshot-feature">
            <Image src="/gameplay-island.png" alt="Flower quest dialogue near the lighthouse" width={794} height={446} sizes="(max-width: 900px) 100vw, 60vw" />
            <figcaption><Sparkles className="h-4 w-4" />The flower quest begins beside the green flower shop near the lighthouse.</figcaption>
          </figure>
        </div>
      </section>

      <section className="page-section gallery-band">
        <div className="page-shell">
          <div className="section-heading">
            <div><p className="eyebrow">Official screenshots</p><h2>Landmarks for the route</h2></div>
            <a href={site.officialUrl} target="_blank" rel="noopener noreferrer" className="text-link">Official itch.io page <ArrowUpRight className="h-4 w-4" /></a>
          </div>
          <div className="gallery-grid">
            <figure><Image src="/gameplay-town.png" alt="Lower beach and floating dock route" width={794} height={446} sizes="(max-width: 700px) 100vw, 50vw" /><figcaption>Lower beach: telescope, gym, docks, and offshore approach.</figcaption></figure>
            <figure><Image src="/gameplay-beach.png" alt="Central statue and musician street" width={794} height={446} sizes="(max-width: 700px) 100vw, 50vw" /><figcaption>Central town: statue plaza, musicians, cars, and upper paths.</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-shell faq-layout">
          <div><p className="eyebrow">Quick answers</p><h2>Before the next errand</h2><Link href="/updates/" className="text-link mt-6">Verification log <CheckCircle2 className="h-4 w-4" /></Link></div>
          <div className="faq-list">
            {homeFaqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
          </div>
        </div>
      </section>
    </>
  );
}
