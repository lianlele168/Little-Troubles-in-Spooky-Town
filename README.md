# Little Troubles in Spooky Town Wiki

Source-first, unofficial guide and task companion for **Little Troubles in Spooky Town** by Kenney.

## Included

- 25 statically exported URLs
- Dedicated solutions for all 11 current tasks
- Dependency-aware full walkthrough
- Browser-saved interactive task tracker
- Outfit, ability, collectible, controls, fixes, and source pages
- Official browser game embed and official gameplay screenshots
- Per-page metadata, canonicals, sitemap, robots, and structured data
- Desktop and mobile Playwright coverage

## Local development

```powershell
npm install
npm run dev -- --hostname 127.0.0.1 --port 3004
```

## Production checks

```powershell
npm run check
npm run lint
npm run build
npm run test:e2e
```

The static export is written to `out/`.

## Deployment target

- Suggested repository: `little-troubles-in-spooky-town-wiki`
- Preconfigured subdomain: `littletroubles.robloxwikihub.com`
- GSC sitemap: `https://littletroubles.robloxwikihub.com/sitemap.xml`

Do not add the parent hub card or submit the sitemap until the deployed subdomain returns HTTP 200.
