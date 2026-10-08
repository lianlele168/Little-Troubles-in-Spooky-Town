export type ContentSection = { heading:string; paragraphs?:string[]; bullets?:string[]; steps?:{title:string;body:string}[]; callout?:string };
export type GuidePage = { slug:string; title:string; eyebrow:string; description:string; summary:string; image?:string; imageAlt?:string; sections:ContentSection[]; faqs?:{question:string;answer:string}[] };
export const guidePages: GuidePage[] = [
  {
    "slug": "controls",
    "title": "Little Troubles Controls: Keyboard and Gamepad",
    "eyebrow": "Little Troubles in Spooky Town",
    "description": "Translate the controller prompts into keyboard inputs using Kenney’s published control list.",
    "summary": "Translate the controller prompts into keyboard inputs using Kenney’s published control list.",
    "sections": [
      {
        "heading": "Choose the action you need",
        "bullets": [
          "Move: WASD / left joystick",
          "Interact: E / A button",
          "Jump: Spacebar / B button",
          "Change outfit: I / Y button",
          "Drop carried item: F / X button",
          "Open task list: T / D-pad up"
        ]
      },
      {
        "heading": "If you are stuck at a controller prompt",
        "paragraphs": [
          "Read the action name rather than pressing the letter shown on the controller icon. For example, the B button means Jump; on a keyboard, use Spacebar. This mapping comes from the developer’s control list."
        ]
      },
      {
        "heading": "Keep help beside the game",
        "paragraphs": [
          "Open the official game in another tab so this reference stays visible. If input or performance problems persist, see the Bugs & Fixes guide for the developer’s download and visual-quality advice."
        ]
      }
    ]
  },
  {
    "slug": "how-to-fly",
    "title": "How to Use Float in Little Troubles",
    "eyebrow": "Little Troubles in Spooky Town",
    "description": "After the float ability is unlocked, the developer says to press Spacebar again to double jump.",
    "summary": "After the float ability is unlocked, the developer says to press Spacebar again to double jump.",
    "sections": [
      {
        "heading": "Keyboard input",
        "paragraphs": [
          "Jump with Spacebar, then press it again while airborne. Kenney clarified this in a reply to a player who had already unlocked float. The official control list maps Spacebar to the controller B button."
        ]
      },
      {
        "heading": "If the extra jump does not happen",
        "paragraphs": [
          "Check that you have unlocked the ability and review the selected outfit using I. Do not confuse the displayed controller B prompt with the B key. This page does not claim a verified unlock quest chain or a maximum flight distance."
        ]
      },
      {
        "heading": "Why the old route is absent",
        "paragraphs": [
          "The earlier guide attached exact quest rewards and dependencies without adequate evidence. Those claims were removed; use T to inspect your own in-game task list rather than following an invented prerequisite order."
        ]
      }
    ]
  },
  {
    "slug": "find-the-missing-barbell",
    "title": "Little Troubles Missing Barbell Location",
    "eyebrow": "Little Troubles in Spooky Town",
    "description": "Look on top of the house near the plaza. That is the location given by Kenney in the official game’s comments.",
    "summary": "Look on top of the house near the plaza. That is the location given by Kenney in the official game’s comments.",
    "sections": [
      {
        "heading": "Search the rooftop near the plaza",
        "paragraphs": [
          "Use the plaza as your landmark, then inspect the nearby house roof. The developer’s reply specifically identifies a rooftop; it does not place the barbell next to the beach gym."
        ]
      },
      {
        "heading": "Correction to our earlier guide",
        "paragraphs": [
          "Our previous page directed players to the beach exercise area and stated a specific reward and outfit requirement. The location contradicted the developer’s answer. Those unsupported details have been withdrawn."
        ]
      },
      {
        "heading": "What this answer does not establish",
        "paragraphs": [
          "The cited reply establishes the object’s location, not the complete access route, dialogue sequence, reward, or required outfit. Follow the game’s own prompt for any remaining requirement. Press T for tasks and I for outfit choices."
        ]
      }
    ]
  },
  {
    "slug": "bugs-fixes",
    "title": "Little Troubles Browser and Input Troubleshooting",
    "eyebrow": "Little Troubles in Spooky Town",
    "description": "Use the developer’s supported-platform and performance advice before repeating a blocked task.",
    "summary": "Use the developer’s supported-platform and performance advice before repeating a blocked task.",
    "sections": [
      {
        "heading": "Browser play has visual, performance or input problems",
        "paragraphs": [
          "Kenney recommends the downloadable version when the browser build has these problems. The official download section offers Windows and Linux builds. Open the official game page and choose Download Now; this guide does not mirror the files."
        ]
      },
      {
        "heading": "The downloaded game still runs poorly",
        "paragraphs": [
          "Try changing visual quality through the in-game options, as recommended by the developer. This is a troubleshooting step, not a promised performance fix."
        ]
      },
      {
        "heading": "macOS",
        "paragraphs": [
          "The developer marks macOS unsupported. A browser being available on a device does not mean this game is supported there."
        ]
      },
      {
        "heading": "An unfamiliar button prompt",
        "paragraphs": [
          "Use the Controls page to translate controller icons into keyboard actions. The developer also documents a Chrome gamepad flag workaround on the official page; check that current instruction there because browser flags can change."
        ]
      },
      {
        "heading": "Report an unresolved issue",
        "paragraphs": [
          "Record your operating system, browser or downloaded build, the action that fails, and any error message. Send that context through the developer’s own support/comment page. This site has no access to your game save."
        ]
      }
    ]
  },
  {
    "slug": "play",
    "title": "Play Little Troubles in Spooky Town",
    "eyebrow": "Little Troubles in Spooky Town",
    "description": "Open Kenney’s official release for browser play or Windows and Linux downloads.",
    "summary": "Open Kenney’s official release for browser play or Windows and Linux downloads.",
    "sections": [
      {
        "heading": "Choose the official release",
        "paragraphs": [
          "Use the Official game button above. The release page hosts the browser game and the download choices. Linking to that page avoids trapping you on an old upload URL after a game update."
        ]
      },
      {
        "heading": "Before you start",
        "paragraphs": [
          "Keep Controls open if controller prompts are unfamiliar. Browser or input issues can be followed up in Bugs & Fixes. Availability, downloads and game saves are managed by the developer and itch.io."
        ]
      }
    ]
  },
  {
    "slug": "updates",
    "title": "Little Troubles Sources and Corrections",
    "eyebrow": "Little Troubles in Spooky Town",
    "description": "Sources and limits for this focused controls and troubleshooting companion.",
    "summary": "Sources and limits for this focused controls and troubleshooting companion.",
    "sections": [
      {
        "heading": "Sources reviewed on 8 October 2026",
        "paragraphs": [
          "The Codex agent reviewed Kenney’s official game page, its Controls and Troubleshooting sections, and Kenney’s comments about float and the missing barbell. The page lists the game as Released on HTML5, Windows and Linux. A saved source snapshot records this review."
        ]
      },
      {
        "heading": "Content removed after review",
        "paragraphs": [
          "The old all-task walkthrough, collectible totals, rewards, outfit dependencies and supposed optimal route did not have adequate supporting records. Those pages have been retired rather than restated as facts. The older calculator was also unrelated to a documented game model."
        ]
      },
      {
        "heading": "Limits",
        "paragraphs": [
          "This review does not claim a complete playthrough, a tested speedrun route, or a human playtest. The maintained pages answer narrower questions that the developer’s published material supports."
        ]
      }
    ]
  },
  {
    "slug": "about",
    "title": "About Little Troubles Guide",
    "eyebrow": "Little Troubles in Spooky Town",
    "description": "An independent, AI-assisted reference maintained under the editorial identity Hlele.",
    "summary": "An independent, AI-assisted reference maintained under the editorial identity Hlele.",
    "sections": [
      {
        "heading": "What this site is for",
        "paragraphs": [
          "This guide helps players translate controls, use float, locate the barbell and troubleshoot supported versions. It is not affiliated with Kenney or itch.io."
        ]
      },
      {
        "heading": "Editorial responsibility",
        "paragraphs": [
          "Hlele is the site’s editorial identity. Source checking for this revision was performed by a Codex agent; no personal gameplay experience or human review is claimed. Corrections can be sent to lianlele168@gmail.com."
        ]
      },
      {
        "heading": "Attribution",
        "paragraphs": [
          "Little Troubles in Spooky Town and its artwork belong to Kenney. Links lead to the official release; this site does not redistribute the game."
        ]
      }
    ]
  },
  {
    "slug": "privacy-policy",
    "title": "Privacy Policy",
    "eyebrow": "Little Troubles in Spooky Town",
    "description": "This guide has no account or personal-information form.",
    "summary": "This guide has no account or personal-information form.",
    "sections": [
      {
        "heading": "Site behavior",
        "paragraphs": [
          "Guide search runs in the browser. This revision does not embed the game or run a game-progress tracker. Standard hosting services may retain technical request logs. The site does not send search text through a form to its own server."
        ]
      },
      {
        "heading": "External services",
        "paragraphs": [
          "Opening the official game or other external links uses those services and their own privacy policies. Contact: lianlele168@gmail.com."
        ]
      }
    ]
  },
  {
    "slug": "terms",
    "title": "Terms of Use",
    "eyebrow": "Little Troubles in Spooky Town",
    "description": "Use this independent guide as a reference alongside the official game.",
    "summary": "Use this independent guide as a reference alongside the official game.",
    "sections": [
      {
        "heading": "Scope",
        "paragraphs": [
          "Information reflects the cited public source and may change with later releases. No complete walkthrough or outcome is guaranteed. The official developer controls game availability and behavior."
        ]
      },
      {
        "heading": "Ownership",
        "paragraphs": [
          "Game names and artwork belong to their respective owners. Do not represent this reference as the official game or as an endorsement by Kenney."
        ]
      }
    ]
  }
];
export const homeFaqs = [];
export function getGuidePage(slug:string) { return guidePages.find(p=>p.slug===slug); }
