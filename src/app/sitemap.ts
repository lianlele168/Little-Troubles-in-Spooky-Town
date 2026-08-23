import type { MetadataRoute } from "next";
import { routes, site } from "@/data/site";
import { townTasks } from "@/data/tasks";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const taskRoutes = townTasks.map((task) => ({
    path: `/${task.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.82,
  }));

  return [...routes, ...taskRoutes].map((route) => ({
    url: `${site.baseUrl}${route.path}`,
    lastModified: new Date(site.lastChecked),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
