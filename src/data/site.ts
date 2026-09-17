export const site = {
  name: "Little Troubles Guide",
  gameName: "Little Troubles in Spooky Town",
  developer: "Kenney",
  baseUrl: "https://littletroubles.robloxwikihub.com",
  officialUrl: "https://kenney.itch.io/little-troubles-in-spooky-town",
  officialUpdateUrl: "https://itch.io/e/44513804/kenney-updated-little-troubles-in-spooky-town",
  officialTrailerUrl: "https://www.youtube.com/watch?v=ROYqAg3yHtM",
  directGameUrl: "https://html-classic.itch.zone/html/18827138/index.html?v=1786881998",
  published: "2026-08-15",
  updated: "2026-08-17",
  lastChecked: "2026-08-24",
  description:
    "An unofficial Little Troubles in Spooky Town walkthrough with all 11 tasks, outfit abilities, collectible locations, fixes, browser play, and a saved task tracker.",
} as const;

export const navItems = [
  { href: "/walkthrough", label: "Walkthrough" },
  { href: "/tasks", label: "All Tasks" },
  { href: "/task-tracker", label: "Task Tracker" },
  { href: "/outfits-abilities", label: "Abilities" },
  { href: "/item-locations", label: "Items" },
  { href: "/play", label: "Play" },
] as const;

export const routes = [
  { path: "/", priority: 1, changeFrequency: "daily" },
  { path: "/walkthrough", priority: 0.95, changeFrequency: "weekly" },
  { path: "/tasks", priority: 0.95, changeFrequency: "weekly" },
  { path: "/task-tracker", priority: 0.95, changeFrequency: "weekly" },
  { path: "/play", priority: 0.9, changeFrequency: "weekly" },
  { path: "/outfits-abilities", priority: 0.9, changeFrequency: "weekly" },
  { path: "/how-to-fly", priority: 0.9, changeFrequency: "weekly" },
  { path: "/item-locations", priority: 0.88, changeFrequency: "weekly" },
  { path: "/controls", priority: 0.8, changeFrequency: "monthly" },
  { path: "/bugs-fixes", priority: 0.8, changeFrequency: "weekly" },
  { path: "/updates", priority: 0.65, changeFrequency: "weekly" },
  { path: "/about", priority: 0.35, changeFrequency: "monthly" },
  ] as const;
