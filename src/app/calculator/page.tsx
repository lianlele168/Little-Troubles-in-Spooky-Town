import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calculator, Info, HelpCircle } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import TaskTracker from "@/components/TaskTracker";
import AuthorCard from "@/components/AuthorCard";
import { breadcrumbSchema, trackerSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Little Troubles Task & Reward Calculator (September 2026)",
  description: "Calculate quest completion percentage, candy rewards, and outfit milestones across all 11 town objectives in Little Troubles in Spooky Town.",
  alternates: { canonical: "/calculator" },
};

const CALCULATOR_FAQS = [
  {
    question: "How many total core tasks exist in Little Troubles in Spooky Town?",
    answer: "There are 11 primary town tasks required for 100% completion. Clearing all 11 awards the Master of Spooky Town achievement and the secret Ghost Witch costume.",
  },
  {
    question: "Do tasks need to be completed in strict numerical order?",
    answer: "No. While tasks 1 through 4 unlock essential town shortcuts, errands across the beach, cemetery, and candy shop can be started in any order.",
  },
  {
    question: "How do you view your in-game task checklist?",
    answer: "Press T on your keyboard to open the in-game task book, and press I to inspect individual errand hints and item requirements.",
  },
];

export default function CalculatorPage() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Little Troubles in Spooky Town Task & Progress Calculator",
    applicationCategory: "GameApplication",
    operatingSystem: "Any web browser",
    description: "Tracks and calculates player quest completion and outfit rewards in Little Troubles in Spooky Town.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    dateModified: "2026-09-15",
    author: {
      "@type": "Person",
      name: 'Penny "Pumpkin" Holloway',
      jobTitle: "Lead Spooky Town Quest Cartographer & Task Completionist",
    },
    mainEntity: CALCULATOR_FAQS.map((faq) => ({
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
      <JsonLd data={[
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Calculator", path: "/calculator/" }]),
        appSchema,
        faqSchema,
      ]} />
      <section className="compact-hero">
        <div className="page-shell">
          <p className="eyebrow flex items-center gap-2">
            <Calculator className="w-4 h-4 text-purple-400" />
            Interactive Quest & Progress Calculator
          </p>
          <h1>Little Troubles Task & Reward Calculator</h1>
          <p>Mark each town errand as it clears. Calculate your candy earnings, outfit unlock thresholds, and remaining objective milestones in real time.</p>
        </div>
      </section>

      <div className="page-shell">
        <AuthorCard />
      </div>

      <section className="page-section">
        <div className="page-shell"><TaskTracker /></div>
      </section>

      <section className="page-section tracker-notes-band">
        <div className="page-shell space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-purple-400" />
            Task Calculator FAQs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CALCULATOR_FAQS.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-purple-950/40 border border-purple-900/40 space-y-2">
                <h3 className="font-bold text-white text-sm">{faq.question}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
