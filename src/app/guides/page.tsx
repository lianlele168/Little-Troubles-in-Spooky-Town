import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Sparkles, MapPin, CheckCircle, HelpCircle, Compass } from "lucide-react";
import AuthorCard from "@/components/AuthorCard";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Little Troubles in Spooky Town 100% Walkthrough Guide (September 2026)",
  description: "Complete 100% speedrun and quest walkthrough for Little Troubles in Spooky Town. Solve all 11 town tasks, find secret island shortcuts, and unlock all wardrobe outfits.",
  alternates: { canonical: "/guides/" },
};

const GUIDE_FAQS = [
  {
    question: "Where is the lost skeleton key located?",
    answer: "The lost skeleton key is tucked behind the overgrown pumpkin patch near Old Man Bartholomew's windmill. Jump onto the wooden fence to bypass the thorny brambles.",
  },
  {
    question: "How do you reach the secret offshore island?",
    answer: "Wait for low tide by the dockside lighthouse, or speak with Barnaby the Ferryman once you complete the Ghost Lantern errand on the main beach.",
  },
  {
    question: "What is the fastest route to clear all 11 errands?",
    answer: "Follow our sequential 4-zone path: Main Street & Bakery &rarr; Graveyard Crypts &rarr; Whispering Woods &rarr; Lighthouse & Beach Pier.",
  },
  {
    question: "Can you change costumes after unlocking them?",
    answer: "Yes. Return to your starting bedroom and interact with the vintage vanity mirror to swap between all unlocked costumes, masks, and candy baskets.",
  },
];

export default function GuidesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    dateModified: "2026-09-15",
    author: {
      "@type": "Person",
      name: 'Penny "Pumpkin" Holloway',
      jobTitle: "Lead Spooky Town Quest Cartographer & Task Completionist",
    },
    mainEntity: GUIDE_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides/" }]), faqSchema]} />

      <section className="compact-hero">
        <div className="page-shell relative z-10 space-y-4">
          <p className="eyebrow flex items-center gap-2">
            <Compass className="w-4 h-4 text-purple-400" />
            Comprehensive Town Walkthrough & Quest Map
          </p>
          <h1>Little Troubles in Spooky Town: Complete Strategy Guide</h1>
          <p className="max-w-2xl text-slate-300">
            A step-by-step master walkthrough covering all 11 town errands, secret NPC dialogue triggers, hidden island collectibles, and outfit unlocking routes.
          </p>
        </div>
      </section>

      <main className="page-shell py-10 space-y-12">
        <AuthorCard />

        {/* Visual Media Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-purple-950/20 p-4 flex flex-col items-center">
            <Image
              src="/gameplay-town.png"
              alt="Spooky Town Central Plaza and Town Hall"
              width={640}
              height={360}
              className="rounded-xl object-cover w-full h-56 border border-white/10"
              priority
            />
            <p className="text-xs text-slate-400 mt-3 text-center font-mono">
              Figure 1: Main Plaza — Central hub connecting the Bakery, Candy Shop, and Graveyard.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-purple-950/20 p-4 flex flex-col items-center">
            <Image
              src="/gameplay-beach.png"
              alt="Spooky Town Coastal Pier and Lighthouse"
              width={640}
              height={360}
              className="rounded-xl object-cover w-full h-56 border border-white/10"
            />
            <p className="text-xs text-slate-400 mt-3 text-center font-mono">
              Figure 2: Coastal Beach Pier — Location of the Ghost Lantern and Ferryman dock.
            </p>
          </div>
        </div>

        {/* Detailed Mechanics Walkthrough */}
        <div className="space-y-8 text-slate-300 leading-relaxed text-sm">
          <section className="p-6 sm:p-8 rounded-3xl bg-purple-950/30 border border-purple-900/40 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-purple-400" />
              1. Zone 1: Main Street & Town Square Errands
            </h2>
            <p>
              Your journey begins in the town center where Mayor Higgins needs three missing flyer posters retrieved. Speak with Madame Gertrude at the pastry shop first; she will gift you a warm ginger biscuit that you can trade with the stray black cat behind the apothecary to secure the second poster.
            </p>
            <p>
              Use our interactive <Link href="/calculator" className="text-purple-400 underline font-bold">Task & Reward Calculator</Link> to monitor your candy earnings and outfit unlock milestones as you complete each objective.
            </p>
          </section>

          <section className="p-6 sm:p-8 rounded-3xl bg-purple-950/30 border border-purple-900/40 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              2. Zone 2: Graveyard Crypts & Mausoleum Riddle
            </h2>
            <p>
              The northern cemetery contains two interdependent errands: finding the Undertaker's silver trowel and aligning the three stone gargoyles facing the full moon. Inspect the crypt inscriptions from left to right: the owl gargoyle must face east, the wolf gargoyle must face north, and the bat gargoyle must face south. This unlocks the hidden basement containing the Antique Vampire Cape.
            </p>
          </section>

          <section className="p-6 sm:p-8 rounded-3xl bg-purple-950/30 border border-purple-900/40 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              3. Zone 3: Whispering Woods & Offshore Island
            </h2>
            <p>
              Follow the glowing violet mushrooms deep into Whispering Woods to locate the Witch's lost cauldron. After brewing the bubbling lavender stew, take the potion down to the beach pier. Barnaby the Ferryman will drink the potion, breaking his insomnia curse and ferrying you across to the offshore island where the final golden pumpkin relic rests.
            </p>
          </section>

          {/* FAQ Section */}
          <section className="p-6 sm:p-8 rounded-3xl bg-purple-950/30 border border-purple-900/40 space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-purple-400" />
              Frequently Asked Quest Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {GUIDE_FAQS.map((faq, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#120a1c] border border-purple-900/50 space-y-2">
                  <h3 className="font-bold text-white text-sm">{faq.question}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
