import Link from "next/link";
import { ArrowLeft, Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grid min-h-[65vh] place-items-center px-4 text-center">
      <div>
        <Ghost className="mx-auto h-10 w-10 text-lilac-700" />
        <p className="eyebrow mt-5">Wrong turn</p>
        <h1 className="mt-3 font-display text-5xl font-semibold text-ink-950">This path leaves Spooky Town.</h1>
        <p className="mx-auto mt-4 max-w-lg text-ink-700">Return to the task list and choose the errand you were looking for.</p>
        <Link href="/tasks/" className="btn-primary mt-7"><ArrowLeft className="h-4 w-4" />All tasks</Link>
      </div>
    </section>
  );
}
