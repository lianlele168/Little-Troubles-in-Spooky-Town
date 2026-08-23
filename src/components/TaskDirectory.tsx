import Link from "next/link";
import { ArrowRight, MapPin, Shirt, Sparkles } from "lucide-react";
import { townTasks } from "@/data/tasks";

export default function TaskDirectory({ limit }: { limit?: number }) {
  const tasks = typeof limit === "number" ? townTasks.slice(0, limit) : townTasks;

  return (
    <div className="task-grid">
      {tasks.map((task) => (
        <Link key={task.slug} href={`/${task.slug}/`} className="task-card">
          <span className="task-number">{String(task.id).padStart(2, "0")}</span>
          <div className="min-w-0">
            <h3>{task.title}</h3>
            <p>{task.summary}</p>
            <div className="task-meta">
              <span><MapPin className="h-3.5 w-3.5" />{task.area}</span>
              <span><Shirt className="h-3.5 w-3.5" />{task.requirement}</span>
              <span><Sparkles className="h-3.5 w-3.5" />{task.reward}</span>
            </div>
          </div>
          <ArrowRight className="task-arrow h-5 w-5" />
        </Link>
      ))}
    </div>
  );
}
