export const site = {
  "name": "Little Troubles Guide",
  "gameName": "Little Troubles in Spooky Town",
  "developer": "Kenney",
  "baseUrl": "https://littletroubles.robloxwikihub.com",
  "officialUrl": "https://kenney.itch.io/little-troubles-in-spooky-town",
  "officialUpdateUrl": "https://kenney.itch.io/little-troubles-in-spooky-town/devlog",
  "officialTrailerUrl": "https://www.youtube.com/watch?v=ROYqAg3yHtM",
  "description": "An independent Little Troubles companion for keyboard controls, float, the missing barbell and supported-platform troubleshooting."
} as const;
export const navItems = [
  {
    "href": "/controls/",
    "label": "Controls"
  },
  {
    "href": "/how-to-fly/",
    "label": "Float"
  },
  {
    "href": "/find-the-missing-barbell/",
    "label": "Barbell"
  },
  {
    "href": "/bugs-fixes/",
    "label": "Fixes"
  },
  {
    "href": "/play/",
    "label": "Play"
  }
] as const;
export const routes = [
  {
    "path": "/",
    "priority": 1,
    "changeFrequency": "monthly"
  },
  {
    "path": "/controls/",
    "priority": 0.7,
    "changeFrequency": "monthly"
  },
  {
    "path": "/how-to-fly/",
    "priority": 0.7,
    "changeFrequency": "monthly"
  },
  {
    "path": "/find-the-missing-barbell/",
    "priority": 0.7,
    "changeFrequency": "monthly"
  },
  {
    "path": "/bugs-fixes/",
    "priority": 0.7,
    "changeFrequency": "monthly"
  },
  {
    "path": "/play/",
    "priority": 0.7,
    "changeFrequency": "monthly"
  },
  {
    "path": "/updates/",
    "priority": 0.7,
    "changeFrequency": "monthly"
  },
  {
    "path": "/about/",
    "priority": 0.7,
    "changeFrequency": "monthly"
  }
] as const;
