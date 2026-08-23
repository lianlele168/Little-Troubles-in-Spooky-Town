import { expect, test } from "@playwright/test";

const generalRoutes = [
  ["/play/", "Play Little Troubles in Spooky Town"],
  ["/walkthrough/", "Little Troubles in Spooky Town Walkthrough"],
  ["/tasks/", "All 11 Little Troubles in Spooky Town Tasks"],
  ["/outfits-abilities/", "Outfits and Abilities Guide"],
  ["/how-to-fly/", "How to Fly in Little Troubles in Spooky Town"],
  ["/item-locations/", "Item and Collectible Locations"],
  ["/controls/", "Little Troubles in Spooky Town Controls"],
  ["/bugs-fixes/", "Little Troubles in Spooky Town Bugs and Fixes"],
  ["/updates/", "Updates and Sources"],
  ["/about/", "About Little Troubles Guide"],
  ["/privacy-policy/", "Privacy Policy"],
  ["/terms/", "Terms of Use"],
] as const;

const taskRoutes = [
  ["/find-the-telescope/", "Find the Telescope Guide"],
  ["/cheer-the-sad-ghost-up/", "Cheer the Sad Ghost Up Guide"],
  ["/find-the-missing-barbell/", "Find the Missing Barbell Guide"],
  ["/find-a-different-song/", "Find a Different Song Guide"],
  ["/free-a-spirit/", "Free a Spirit Guide"],
  ["/collect-all-flowers/", "Collect All Flowers Guide"],
  ["/collect-all-bottles/", "Collect All Bottles Guide"],
  ["/fix-the-leak/", "Fix the Leak Guide"],
  ["/clean-the-island/", "Clean the Island Guide"],
  ["/help-sell-a-house/", "Help Sell a House Guide"],
  ["/tell-your-parents/", "Tell Your Parents Guide"],
] as const;

test("home, search, images, and responsive width work", async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1, name: "Little Troubles in Spooky Town" })).toBeVisible();
  await expect(page.getByRole("link", { name: /Open task tracker/i })).toBeVisible();

  await page.getByRole("button", { name: "Search the guide" }).click();
  await page.getByPlaceholder("Search tasks, Flying, bottles...").fill("bottles");
  await expect(page.getByRole("link", { name: /Collect All Bottles Guide/i })).toBeVisible();
  await page.keyboard.press("Escape");

  const images = page.locator("main img");
  await expect(images).toHaveCount(4);
  for (let index = 0; index < 4; index += 1) {
    await images.nth(index).scrollIntoViewIfNeeded();
    await expect.poll(async () => images.nth(index).evaluate((image: HTMLImageElement) => image.naturalWidth)).toBeGreaterThan(0);
  }

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);
  expect(errors).toEqual([]);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: `.review/home-${testInfo.project.name}-viewport.png`, fullPage: true });
});

test("task tracker saves and restores progress", async ({ page }, testInfo) => {
  await page.goto("/task-tracker/");
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();

  await expect(page.getByRole("heading", { level: 1, name: "Little Troubles Task Tracker" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "0 of 11 complete" })).toBeVisible();
  await page.getByRole("button", { name: "Mark complete: Find the Telescope" }).click();
  await expect(page.getByRole("heading", { name: "1 of 11 complete" })).toBeVisible();

  await page.reload();
  await expect(page.getByRole("heading", { name: "1 of 11 complete" })).toBeVisible();
  await page.getByRole("button", { name: "Done", exact: true }).click();
  await expect(page.locator(".tracker-task")).toHaveCount(1);

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: `.review/tracker-${testInfo.project.name}-viewport.png`, fullPage: true });
});

test("all indexed guide routes render", async ({ page }) => {
  for (const [route, heading] of [...generalRoutes, ...taskRoutes]) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.getByRole("heading", { level: 1, name: heading })).toBeVisible();
    await expect(page.locator('meta[name="robots"][content*="noindex"]')).toHaveCount(0);
  }
});

test("sitemap, robots, schema, and canonicals are present", async ({ page, request }, testInfo) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const sitemapText = await sitemap.text();
  expect((sitemapText.match(/<url>/g) ?? []).length).toBe(25);
  expect(sitemapText).toContain("/collect-all-bottles/");

  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain("https://littletroubles.robloxwikihub.com/sitemap.xml");

  await page.goto("/find-the-telescope/");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://littletroubles.robloxwikihub.com/find-the-telescope/");
  const schemas = page.locator('script[type="application/ld+json"]');
  expect(await schemas.count()).toBeGreaterThanOrEqual(3);
  const schema = (await schemas.allTextContents()).join("\n");
  expect(schema).toContain("HowTo");
  expect(schema).toContain("BreadcrumbList");
  await page.screenshot({ path: `.review/task-guide-${testInfo.project.name}-viewport.png` });
});

test("official browser game frame is connected", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "The external game frame only needs one browser check.");
  await page.goto("/play/");
  const iframe = page.getByTitle("Play Little Troubles in Spooky Town");
  await iframe.scrollIntoViewIfNeeded();
  await expect(iframe).toBeVisible();
  await expect(iframe).toHaveAttribute("src", /html-classic\.itch\.zone/);
});
