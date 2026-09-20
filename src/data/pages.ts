import { townTasks } from "@/data/tasks";

export type ContentSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: { title: string; body: string }[];
  callout?: string;
};

export type GuidePage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  sections: ContentSection[];
  faqs?: { question: string; answer: string }[];
};

const generalPages: GuidePage[] = [
  {
    slug: "play",
    title: "Play Little Troubles in Spooky Town",
    eyebrow: "Official HTML5 game",
    description: "Play Little Troubles in Spooky Town online, open the official download, and check the keyboard or gamepad controls before starting.",
    summary: "The browser frame below loads Kenney's official itch.io build. The game is a short 11-task adventure and can also be downloaded for Windows.",
    image: "/gameplay-town-wide.png",
    imageAlt: "Little Troubles in Spooky Town title screen",
    sections: [
      {
        heading: "Before you start",
        bullets: [
          "Use WASD to move, E to interact, Space to jump, I to change outfit, F to drop an item, and T for the task list.",
          "The downloadable Windows version is the official fallback for browser performance or input problems.",
          "Progress belongs to the official game build. This guide does not host or modify the game files.",
        ],
      },
      {
        heading: "A safe first route",
        paragraphs: [
          "Start with the telescope, then cheer the sad ghost and return the barbell. Those three errands unlock Talented, Strong, and Quick without requiring the offshore route.",
          "After that, complete the linked music conversations to unlock Flying. Flying is the key that makes the remaining flowers, bottles, and remote-house route straightforward.",
        ],
        callout: "Finish or drop the item in your hands before picking up another. The developer warns that holding two objects can ruin a run.",
      },
    ],
    faqs: [
      { question: "Is Little Troubles in Spooky Town free?", answer: "Yes. The official itch.io release is playable in a browser and the Windows download is offered as name-your-own-price." },
      { question: "Does it work on macOS or Linux?", answer: "The official troubleshooting notes say Linux and macOS are unsupported. The listed platforms are HTML5 and Windows." },
      { question: "How long is the game?", answer: "The official page labels an average session as a few minutes; a first full run commonly takes longer while locating all 11 tasks." },
    ],
  },
  {
    slug: "walkthrough",
    title: "Little Troubles in Spooky Town Walkthrough",
    eyebrow: "Complete 11-task route",
    description: "Complete Little Troubles in Spooky Town with an efficient 11-task route, required outfits, ability unlocks, collectibles, and ending steps.",
    summary: "This route follows the game's dependency chain: unlock movement and jobs first, then clear the three collection tasks and finish the family ending.",
    image: "/gameplay-beach.png",
    imageAlt: "Ghosts and streets in Little Troubles in Spooky Town",
    sections: [
      {
        heading: "Recommended completion order",
        steps: townTasks.map((task) => ({
          title: `${task.id}. ${task.title}`,
          body: `${task.summary} Requirement: ${task.requirement}. Reward: ${task.reward}.`,
        })),
      },
      {
        heading: "Why this order works",
        paragraphs: [
          "The telescope, sad ghost, and barbell form a compact opening loop and provide Talented, Strong, and Quick. The two music objectives then unlock Flying, which removes the main traversal barrier.",
          "Flowers unlock Cleaner; bottles unlock Engineer. Those jobs feed directly into cleaning the island and fixing the leak. Cleaning unlocks Cool, the last trait needed to sell the house.",
        ],
      },
      {
        heading: "Finish at 10 of 11",
        paragraphs: [
          "When the first ten entries are crossed out, return to the two parent ghosts near the starting home. Complete their farewell conversation to mark Tell Your Parents and show the ending group photo.",
        ],
        callout: "The task list can reveal every objective: open it with T, then press I. This is an in-game option, not a cheat code.",
      },
    ],
    faqs: [
      { question: "How many tasks are in Little Troubles in Spooky Town?", answer: "The current build has 11 tasks: ten town errands and the final Tell Your Parents objective." },
      { question: "Can tasks be completed out of order?", answer: "Many can be started early, but outfit requirements create dependencies. Flying, Cleaner, Engineer, Strong, and Cool gate specific completions." },
      { question: "What is the last task?", answer: "Tell Your Parents is last. It completes when you return to the parent ghosts after the other ten tasks are done." },
    ],
  },
  {
    slug: "tasks",
    title: "All 11 Little Troubles in Spooky Town Tasks",
    eyebrow: "Objective directory",
    description: "See every Little Troubles in Spooky Town task with its start area, outfit requirement, reward, collectible total, and full solution page.",
    summary: "The current release tracks 11 objectives. Each entry below has a dedicated route with the NPC, outfit combination, handoff, and reward.",
    image: "/gameplay-town-wide.png",
    imageAlt: "Full view of Spooky Town",
    sections: [
      {
        heading: "How to reveal the list in game",
        steps: [
          { title: "Open Tasks", body: "Press T on keyboard or D-pad up on a controller." },
          { title: "Reveal hidden names", body: "Press I or the controller Y button while the task panel is open." },
          { title: "Check the counter", body: "The top-right counter moves from 0/11 to 11/11 as full objectives complete." },
        ],
      },
    ],
    faqs: [
      { question: "Why does an official screenshot show 0/10?", answer: "Some promotional screenshots show an earlier ten-task counter. The current playable build includes Tell Your Parents and displays 11 total." },
      { question: "Do collectible pickups fill inventory slots?", answer: "Flowers and bottles update their collection counters automatically. Hand-carried quest objects such as the telescope and barbell use the carry/drop controls." },
    ],
  },
  {
    slug: "outfits-abilities",
    title: "Outfits and Abilities Guide",
    eyebrow: "Traits, movement, occupations",
    description: "Learn every Little Troubles in Spooky Town outfit row, what Strong, Flying, Magnetic, Cleaner and Engineer do, and which tasks unlock them.",
    summary: "Outfits are the game's puzzle system. A look combines one trait, one movement ability, and one occupation; NPC hints name the exact pieces they expect.",
    image: "/gameplay-island.png",
    imageAlt: "Flower quest and outfit characters near the lighthouse",
    sections: [
      {
        heading: "The three outfit rows",
        bullets: [
          "Traits: Friendly, Talented, Silly, Strong, and Cool.",
          "Movement abilities: Wandering, Quick, Flying, and Magnetic.",
          "Occupations: Ghost, Engineer, Musician, Cleaner, and Salesperson.",
        ],
      },
      {
        heading: "Task unlocks",
        steps: [
          { title: "Talented", body: "Return the lost telescope to the scholar ghost." },
          { title: "Strong", body: "Cheer the cemetery ghost while wearing Silly." },
          { title: "Quick", body: "Return the missing barbell while wearing Strong." },
          { title: "Flying", body: "Finish the linked song conversations and Free a Spirit." },
          { title: "Cleaner", body: "Return all 6 scattered flowers." },
          { title: "Engineer", body: "Return all 10 Ghoul-Aid bottles." },
          { title: "Magnetic", body: "Fix the leak while dressed as Strong + Engineer." },
          { title: "Cool", body: "Clean all 10 purple puddles around the island." },
        ],
      },
      {
        heading: "Important combinations",
        bullets: [
          "Talented + Musician opens the different-song conversation.",
          "Strong + Engineer satisfies both hints at the leaking valve.",
          "Cool + Salesperson convinces the remote buyer to take the house.",
          "Flying is a travel ability; land first, then switch outfits for the destination conversation.",
        ],
      },
    ],
    faqs: [
      { question: "Are outfits only cosmetic?", answer: "No. Strong lifts heavy objects, Flying enables a second jump and float, Magnetic extends pickup reach, and occupations unlock task interactions." },
      { question: "How do I change outfits?", answer: "Press I on keyboard or Y on a controller, then move through the three rows and choose one option per row." },
    ],
  },
  {
    slug: "how-to-fly",
    title: "How to Fly in Little Troubles in Spooky Town",
    eyebrow: "Flying unlock and controls",
    description: "Unlock Flying in Little Troubles in Spooky Town, double-jump and float correctly, and reach the offshore flower, bottles, and house island.",
    summary: "Flying is not available at the start. It unlocks after the two linked musician objectives and works as a second jump with a float, not unrestricted flight.",
    image: "/gameplay-town.png",
    imageAlt: "Floating platforms off the Spooky Town beach",
    sections: [
      {
        heading: "Unlock Flying",
        steps: [
          { title: "Unlock Talented", body: "Complete Find the Telescope." },
          { title: "Wear Talented + Musician", body: "Talk to Ghost Malone and accept the different-song request." },
          { title: "Move the song between musicians", body: "Learn the tune from the trumpet ghost and return it to Ghost Malone." },
          { title: "Free the trumpet ghost", body: "Talk to the trumpet ghost again after the handoff. The conversation unlocks Flying." },
        ],
      },
      {
        heading: "Use Flying",
        paragraphs: [
          "Equip Flying on the middle outfit row. Press Space once to jump, then press Space again while airborne to rise and float. On a gamepad, use the B button twice.",
          "For the offshore platforms, jump from the end of a green dock, trigger the second jump near the gap, and steer toward the next platform. The ability gives controlled airtime but does not let you hover forever.",
        ],
      },
      {
        heading: "When Flying seems broken",
        bullets: [
          "Confirm the middle row says Flying, not Wandering, Quick, or Magnetic.",
          "Use two separate jump presses; holding the first press is not the same input.",
          "Close dialogue and the outfit panel before testing movement.",
          "If browser input is unreliable, use the official downloadable Windows build.",
        ],
      },
    ],
    faqs: [
      { question: "Can you fly from the beginning?", answer: "No. Flying unlocks after Find a Different Song and the follow-up Free a Spirit conversation." },
      { question: "Which tasks need Flying?", answer: "It is needed for the remote platform route, used for an offshore flower and bottle, and is the practical way to reach the prospective house buyer." },
    ],
  },
  {
    slug: "item-locations",
    title: "Item and Collectible Locations",
    eyebrow: "Flowers, bottles, quest objects",
    description: "Find all 6 flowers, 10 bottles, telescope, barbell, song and house lead in Little Troubles in Spooky Town without missing an offshore item.",
    summary: "There are two tracked collectible sets plus several hand-carried quest objects. Use a clockwise sweep and finish carried-item handoffs before touching another object.",
    image: "/gameplay-town.png",
    imageAlt: "Beach collectible route in Little Troubles in Spooky Town",
    sections: [
      {
        heading: "Totals",
        bullets: [
          "6 flowers for the flower-shop ghost.",
          "10 Ghoul-Aid bottles for the delivery ghost.",
          "10 purple puddles for the Cleaner objective.",
          "One carried telescope and one carried barbell.",
        ],
      },
      {
        heading: "Efficient collection sweep",
        steps: [
          { title: "Lower beach", body: "Check the gym, rowboat, docks, shoreline corners, and the path up to the statue." },
          { title: "Central plaza", body: "Circle the statue, musician street, parked cars, and lower roofs." },
          { title: "Upper town", body: "Search the cemetery, crashed truck, pipeworks, flower shop, and lighthouse paths." },
          { title: "Offshore platforms", body: "Equip Flying and clear the small green platforms and remote island last." },
        ],
      },
      {
        heading: "Avoid the carry softlock",
        paragraphs: [
          "The developer specifically warns that picking up two items at once can ruin the run. Telescope and barbell are hand-carried objects; deliver the one you have or press F to drop it before interacting with another carried item.",
        ],
        callout: "Flowers and bottles are counter pickups and do not need to be carried back one by one.",
      },
    ],
    faqs: [
      { question: "How many bottles are there?", answer: "There are 10 bottle pickups in the current build." },
      { question: "How many flowers are there?", answer: "There are 6 flowers. One sits on a floating platform and is easiest after Flying unlocks." },
      { question: "Where is the commonly missed puddle?", answer: "Check the tunnel-side parking bay and cars after sweeping the obvious beach and street puddles." },
    ],
  },
  {
    slug: "controls",
    title: "Little Troubles in Spooky Town Controls",
    eyebrow: "Keyboard and gamepad",
    description: "See the official Little Troubles in Spooky Town controls for movement, interact, jump, outfit change, drop item, task list, and controller input.",
    summary: "The game supports keyboard and gamepad. Dialogue confirmation also accepts Enter, Space, or the normal interact input.",
    image: "/gameplay-beach.png",
    imageAlt: "Little Troubles in Spooky Town gameplay controls",
    sections: [
      {
        heading: "Official control map",
        bullets: [
          "Move: WASD or left joystick.",
          "Interact: E or A button.",
          "Jump: Spacebar or B button.",
          "Change outfit: I or Y button.",
          "Drop carried item: F or X button.",
          "Task list: T or D-pad up.",
        ],
      },
      {
        heading: "Task and dialogue controls",
        paragraphs: [
          "While the task list is open, I or the controller Y button reveals the hidden objective names. Escape backs out of menus. Enter, Space, or E can advance dialogue on keyboard.",
        ],
      },
      {
        heading: "Controller troubleshooting",
        paragraphs: [
          "The official page recommends enabling Chrome's GameInput data fetcher flag if a gamepad is not detected. Browser privacy tools and extensions can also interfere with embedded game input.",
        ],
      },
    ],
    faqs: [
      { question: "What key opens the task list?", answer: "Press T on keyboard or D-pad up on a gamepad." },
      { question: "What key drops an item?", answer: "Press F on keyboard or X on a gamepad." },
    ],
  },
  {
    slug: "bugs-fixes",
    title: "Little Troubles in Spooky Town Bugs and Fixes",
    eyebrow: "Official troubleshooting",
    description: "Fix loading, performance, controller and item softlock problems in Little Troubles in Spooky Town using the developer's official guidance.",
    summary: "Most browser issues have a clean fallback: use the downloadable Windows build, lower visual quality, and never try to hold two quest objects at once.",
    image: "/gameplay-town-wide.png",
    imageAlt: "Little Troubles in Spooky Town browser game",
    sections: [
      {
        heading: "Two-item softlock",
        paragraphs: [
          "The official page warns that picking up two items at once can ruin a run. Deliver the telescope or barbell before touching another carried object. If you only need to put one down, press F or the gamepad X button.",
        ],
      },
      {
        heading: "Performance or visual problems",
        steps: [
          { title: "Lower the visual setting", body: "Open the in-game options and reduce visual quality." },
          { title: "Open the official page directly", body: "Content blockers or third-party iframe restrictions can affect an embedded game." },
          { title: "Use the Windows download", body: "The developer recommends the downloadable build when browser performance or input remains unreliable." },
        ],
      },
      {
        heading: "Gamepad not detected in Chrome",
        paragraphs: [
          "The developer's current troubleshooting note points to Chrome's GameInput data fetcher flag. Change browser flags carefully, restart Chrome, and test on the official itch.io page.",
        ],
        callout: "Linux and macOS are listed as unsupported. The official supported targets are HTML5 and Windows.",
      },
    ],
    faqs: [
      { question: "Why can I not pick up the barbell?", answer: "Equip the Strong trait first. The normal pickup prompt is blocked when another trait is active." },
      { question: "Why can I not fix the leak?", answer: "Use Strong and Engineer together, then interact with the valve beside the upper purple pipe." },
      { question: "Why is the embedded game blank?", answer: "Open the official itch.io page directly, disable the blocker for that page, or use the Windows download." },
    ],
  },
  {
    slug: "updates",
    title: "Updates and Sources",
    eyebrow: "Verification log",
    description: "Check the Little Troubles in Spooky Town release dates, official links, guide verification method, current task count, and content update log.",
    summary: "Guide facts are checked against Kenney's official itch.io release, the current playable build, its task and dialogue data, and a complete recorded run.",
    image: "/cover.png",
    imageAlt: "Little Troubles in Spooky Town official cover",
    sections: [
      {
        heading: "Release record",
        bullets: [
          "Published on itch.io on .",
          "Official page update and Windows 1.1 upload recorded on .",
          "Current checked build displays 11 tasks and includes the final Tell Your Parents objective.",
          "Official credits name Kenney, Samantha van der Sluis for music, Unity, and Super Text Mesh.",
        ],
      },
      {
        heading: "What was verified in play",
        paragraphs: [
          "The task names, collectible totals, outfit gates, rewards, ending trigger, and controller labels were compared with the current browser build. Exact NPC dialogue is paraphrased rather than copied into the guide.",
          "Any future build can change object placement or task dependencies. The checked date appears on each guide page so stale details are visible rather than hidden.",
        ],
      },
      {
        heading: "Source boundaries",
        paragraphs: [
          "This is an independent guide. It links to the official game and embeds the official HTML5 frame but does not mirror the Unity build, claim ownership of game art, or present itself as Kenney's documentation.",
        ],
      },
    ],
  },
  {
    slug: "about",
    title: "About Little Troubles Guide",
    eyebrow: "Independent companion",
    description: "Learn how Little Troubles Guide verifies walkthrough details, handles game assets, labels official sources, and keeps task information current.",
    summary: "Little Troubles Guide is an unofficial reference built to answer concrete task, item, outfit, and troubleshooting questions about Kenney's game.",
    image: "/cover.png",
    imageAlt: "Little Troubles in Spooky Town cover",
    sections: [
      {
        heading: "Editorial approach",
        paragraphs: [
          "Pages are organized around player intent: a full route, individual task solutions, outfit dependencies, collectible totals, and fixes. Facts were checked in the current release rather than inferred from the title or promotional copy.",
          "Where the official page provides a rule or warning, the guide attributes it. Strategy and route ordering are independent recommendations based on observed gameplay.",
        ],
      },
      {
        heading: "Ownership and affiliation",
        paragraphs: [
          "Little Troubles in Spooky Town, its name, characters, screenshots, and game assets belong to Kenney and their respective owners. This site is not affiliated with Kenney or itch.io.",
        ],
      },
    ],
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    eyebrow: "Site policy",
    description: "Read the Little Troubles Guide privacy policy for local task progress, server logs, analytics, advertising, cookies, and third-party game embeds.",
    summary: "The task tracker stores progress in your browser. The site may later use standard analytics or advertising services, which will be disclosed here when enabled.",
    sections: [
      { heading: "Task tracker data", paragraphs: ["Checklist progress is saved in localStorage on your device. It is not submitted to this site's server by the tracker."] },
      { heading: "Hosting and logs", paragraphs: ["The hosting provider may process basic request data such as IP address, browser type, requested URL, and timestamps for security and delivery."] },
      { heading: "Third-party content", paragraphs: ["The play page can load an official itch.io frame. itch.io and the game host may receive connection data under their own policies. External links open those services directly."] },
      { heading: "Analytics, ads, and updates", paragraphs: ["We comply with COPPA child privacy standards. No personal information is collected from players under 13. Direct questions can be sent to lianlele168@gmail.com."] },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Use",
    eyebrow: "Site terms",
    description: "Read the Little Troubles Guide terms covering unofficial walkthrough content, game ownership, external links, accuracy, acceptable use, and liability.",
    summary: "Use this independent guide as a gameplay reference. The official game and developer pages remain the authority for downloads, availability, support, and ownership.",
    sections: [
      { heading: "Unofficial guide", paragraphs: ["This site is not affiliated with, endorsed by, or operated by Kenney or itch.io. Game names and visual assets remain the property of their owners."] },
      { heading: "Accuracy", paragraphs: ["The guide is checked against a dated game build, but updates can change controls, object placement, task totals, and platform support. No completion result is guaranteed."] },
      { heading: "External services", paragraphs: ["Official game frames, downloads, videos, and linked pages are operated by third parties. Their terms, availability, and privacy practices apply when you use them."] },
      { heading: "Acceptable use", paragraphs: ["Do not use the site to distribute malware, disrupt service, scrape personal data, or misrepresent this guide as official game documentation."] },
    ],
  },
];

const taskPages: GuidePage[] = townTasks.map((task) => ({
  slug: task.slug,
  title: `${task.title} Guide`,
  eyebrow: `Recommended route ${task.id} of 11`,
  description: `${task.summary} See the exact start area, required outfit, reward, route, and common blockers.`,
  summary: task.summary,
  image: task.image,
  imageAlt: task.imageAlt,
  sections: [
    { heading: "Where to start", paragraphs: [task.start], bullets: [`Area: ${task.area}`, `Required: ${task.requirement}`, `Reward: ${task.reward}`] },
    { heading: "Step-by-step solution", steps: task.steps },
    { heading: "Common blockers", bullets: task.tips },
  ],
  faqs: [
    { question: `What do you need for ${task.title}?`, answer: `${task.requirement}. Start in ${task.area}.` },
    { question: `What does ${task.title} unlock?`, answer: task.reward === "Final story progress" ? "It advances the counter to the final family objective." : `It rewards ${task.reward}.` },
  ],
}));

export const guidePages = [...generalPages, ...taskPages];

export function getGuidePage(slug: string) {
  return guidePages.find((page) => page.slug === slug);
}

export const homeFaqs = [
  { question: "How many tasks are in Little Troubles in Spooky Town?", answer: "There are 11 tasks in the current playable build: ten town requests and the final Tell Your Parents objective." },
  { question: "How do you unlock Flying?", answer: "Complete the different-song handoff, then return to the trumpet ghost and finish Free a Spirit. Equip Flying and press Jump twice." },
  { question: "How many flowers and bottles are there?", answer: "There are 6 flowers and 10 Ghoul-Aid bottles. The cleaning task also has 10 purple puddles." },
  { question: "Who made the game?", answer: "Little Troubles in Spooky Town was made by Kenney during Girly Game Jam 2026, with music credited to Samantha van der Sluis." },
];
