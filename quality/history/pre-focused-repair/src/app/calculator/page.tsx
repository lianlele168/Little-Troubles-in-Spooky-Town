import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Calculator review — Little Troubles in Spooky Town",
  description: "Review status of this older reference page.",
  alternates: { canonical: "/calculator/" },
  robots: { index: false, follow: true },
};
export default function ReviewPage() {
  return <section className="page-section"><div className="page-shell article-body"><h1>Calculator review</h1><p>The earlier calculator page included specific secret NPCs, quest rewards and a supposedly optimal completion route. We could not support those claims with the evidence available in this review, so that material has been withdrawn.</p><h2>Current status</h2><p>This page does not claim a complete walkthrough or calculate verified game rewards. We are retaining this https://kenney.itch.io/little-troubles-in-spooky-town to explain the correction to returning readers.</p><p>Use the <a href="https://kenney.itch.io/little-troubles-in-spooky-town">official developer page</a> for the current game and published instructions.</p></div></section>;
}
