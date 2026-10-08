from pathlib import Path
import json, re, shutil
p=Path(__file__).resolve().parents[1]
history=p/'quality/history/pre-focused-repair'
for file in (p/'src').rglob('*'):
 if file.is_file():
  dest=history/file.relative_to(p); dest.parent.mkdir(parents=True,exist_ok=True); shutil.copy2(file,dest)
def write(f,s): (p/f).write_text(s,encoding='utf-8')
def edit(f,old,new):
 s=(p/f).read_text(encoding='utf-8'); assert old in s,(f,old); write(f,s.replace(old,new))
pages=[]
def page(slug,title,summary,sections):
 pages.append(dict(slug=slug,title=title,eyebrow='Little Troubles in Spooky Town',description=summary,summary=summary,sections=sections))
def section(heading,*paragraphs): return dict(heading=heading,paragraphs=list(paragraphs))
page('controls','Little Troubles Controls: Keyboard and Gamepad','Translate the controller prompts into keyboard inputs using Kenney’s published control list.',[
 dict(heading='Choose the action you need',bullets=['Move: WASD / left joystick','Interact: E / A button','Jump: Spacebar / B button','Change outfit: I / Y button','Drop carried item: F / X button','Open task list: T / D-pad up']),
 section('If you are stuck at a controller prompt','Read the action name rather than pressing the letter shown on the controller icon. For example, the B button means Jump; on a keyboard, use Spacebar. This mapping comes from the developer’s control list.'),
 section('Keep help beside the game','Open the official game in another tab so this reference stays visible. If input or performance problems persist, see the Bugs & Fixes guide for the developer’s download and visual-quality advice.')])
page('how-to-fly','How to Use Float in Little Troubles','After the float ability is unlocked, the developer says to press Spacebar again to double jump.',[
 section('Keyboard input','Jump with Spacebar, then press it again while airborne. Kenney clarified this in a reply to a player who had already unlocked float. The official control list maps Spacebar to the controller B button.'),
 section('If the extra jump does not happen','Check that you have unlocked the ability and review the selected outfit using I. Do not confuse the displayed controller B prompt with the B key. This page does not claim a verified unlock quest chain or a maximum flight distance.'),
 section('Why the old route is absent','The earlier guide attached exact quest rewards and dependencies without adequate evidence. Those claims were removed; use T to inspect your own in-game task list rather than following an invented prerequisite order.')])
page('find-the-missing-barbell','Little Troubles Missing Barbell Location','Look on top of the house near the plaza. That is the location given by Kenney in the official game’s comments.',[
 section('Search the rooftop near the plaza','Use the plaza as your landmark, then inspect the nearby house roof. The developer’s reply specifically identifies a rooftop; it does not place the barbell next to the beach gym.'),
 section('Correction to our earlier guide','Our previous page directed players to the beach exercise area and stated a specific reward and outfit requirement. The location contradicted the developer’s answer. Those unsupported details have been withdrawn.'),
 section('What this answer does not establish','The cited reply establishes the object’s location, not the complete access route, dialogue sequence, reward, or required outfit. Follow the game’s own prompt for any remaining requirement. Press T for tasks and I for outfit choices.')])
page('bugs-fixes','Little Troubles Browser and Input Troubleshooting','Use the developer’s supported-platform and performance advice before repeating a blocked task.',[
 section('Browser play has visual, performance or input problems','Kenney recommends the downloadable version when the browser build has these problems. The official download section offers Windows and Linux builds. Open the official game page and choose Download Now; this guide does not mirror the files.'),
 section('The downloaded game still runs poorly','Try changing visual quality through the in-game options, as recommended by the developer. This is a troubleshooting step, not a promised performance fix.'),
 section('macOS','The developer marks macOS unsupported. A browser being available on a device does not mean this game is supported there.'),
 section('An unfamiliar button prompt','Use the Controls page to translate controller icons into keyboard actions. The developer also documents a Chrome gamepad flag workaround on the official page; check that current instruction there because browser flags can change.'),
 section('Report an unresolved issue','Record your operating system, browser or downloaded build, the action that fails, and any error message. Send that context through the developer’s own support/comment page. This site has no access to your game save.')])
page('play','Play Little Troubles in Spooky Town','Open Kenney’s official release for browser play or Windows and Linux downloads.',[
 section('Choose the official release','Use the Official game button above. The release page hosts the browser game and the download choices. Linking to that page avoids trapping you on an old upload URL after a game update.'),
 section('Before you start','Keep Controls open if controller prompts are unfamiliar. Browser or input issues can be followed up in Bugs & Fixes. Availability, downloads and game saves are managed by the developer and itch.io.')])
page('updates','Little Troubles Sources and Corrections','Sources and limits for this focused controls and troubleshooting companion.',[
 section('Sources reviewed on 8 October 2026','The Codex agent reviewed Kenney’s official game page, its Controls and Troubleshooting sections, and Kenney’s comments about float, the missing barbell, and Magnetic. The page lists the game as Released on HTML5, Windows and Linux. A saved source snapshot records this review.'),
 section('Content removed after review','The old all-task walkthrough, collectible totals, rewards, outfit dependencies and supposed optimal route did not have adequate supporting records. Those pages have been retired rather than restated as facts. The older calculator was also unrelated to a documented game model.'),
 section('Limits','This review does not claim a complete playthrough, a tested speedrun route, or a human playtest. The maintained pages answer narrower questions that the developer’s published material supports.')])
page('about','About Little Troubles Guide','An independent, AI-assisted reference maintained under the editorial identity Hlele.',[
 section('What this site is for','This guide helps players translate controls, use float, locate the barbell and troubleshoot supported versions. It is not affiliated with Kenney or itch.io.'),
 section('Editorial responsibility','Hlele is the site’s editorial identity. Source checking for this revision was performed by a Codex agent; no personal gameplay experience or human review is claimed. Corrections can be sent to lianlele168@gmail.com.'),
 section('Attribution','Little Troubles in Spooky Town and its artwork belong to Kenney. Links lead to the official release; this site does not redistribute the game.')])
page('privacy-policy','Privacy Policy','This guide has no account or personal-information form.',[
 section('Site behavior','Guide search runs in the browser. This revision does not embed the game or run a game-progress tracker. Standard hosting services may retain technical request logs. The site does not send search text through a form to its own server.'),
 section('External services','Opening the official game or other external links uses those services and their own privacy policies. Contact: lianlele168@gmail.com.')])
page('terms','Terms of Use','Use this independent guide as a reference alongside the official game.',[
 section('Scope','Information reflects the cited public source and may change with later releases. No complete walkthrough or outcome is guaranteed. The official developer controls game availability and behavior.'),
 section('Ownership','Game names and artwork belong to their respective owners. Do not represent this reference as the official game or as an endorsement by Kenney.')])
types='export type ContentSection = { heading:string; paragraphs?:string[]; bullets?:string[]; steps?:{title:string;body:string}[]; callout?:string };\nexport type GuidePage = { slug:string; title:string; eyebrow:string; description:string; summary:string; image?:string; imageAlt?:string; sections:ContentSection[]; faqs?:{question:string;answer:string}[] };\n'
write('src/data/pages.ts',types+'export const guidePages: GuidePage[] = '+json.dumps(pages,ensure_ascii=False,indent=2)+';\nexport const homeFaqs = [];\nexport function getGuidePage(slug:string) { return guidePages.find(p=>p.slug===slug); }\n')
site={'name':'Little Troubles Guide','gameName':'Little Troubles in Spooky Town','developer':'Kenney','baseUrl':'https://littletroubles.robloxwikihub.com','officialUrl':'https://kenney.itch.io/little-troubles-in-spooky-town','officialUpdateUrl':'https://kenney.itch.io/little-troubles-in-spooky-town/devlog','officialTrailerUrl':'https://www.youtube.com/watch?v=ROYqAg3yHtM','description':'An independent Little Troubles companion for keyboard controls, float, the missing barbell and supported-platform troubleshooting.'}
nav=[{'href':'/'+s+'/', 'label':l} for s,l in [('controls','Controls'),('how-to-fly','Float'),('find-the-missing-barbell','Barbell'),('bugs-fixes','Fixes'),('play','Play')]]
routes=[{'path':'/','priority':1,'changeFrequency':'monthly'}]+[{'path':'/'+x['slug']+'/','priority':0.7,'changeFrequency':'monthly'} for x in pages if x['slug'] not in ['privacy-policy','terms']]
write('src/data/site.ts','export const site = '+json.dumps(site,indent=2)+' as const;\nexport const navItems = '+json.dumps(nav,indent=2)+' as const;\nexport const routes = '+json.dumps(routes,indent=2)+' as const;\n')
write('src/app/page.tsx','''import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { guidePages } from "@/data/pages";
import { site } from "@/data/site";
import JsonLd from "@/components/JsonLd";
import { websiteSchema, videoGameSchema } from "@/lib/seo";
export const metadata:Metadata={alternates:{canonical:"/"}};
export default function Home(){return <><JsonLd data={[websiteSchema(),videoGameSchema()]}/><section className="hero-home"><Image src="/gameplay-town-wide.png" alt="Little Troubles in Spooky Town title screen" fill priority sizes="100vw" className="object-cover object-center"/><div className="hero-shade"/><div className="page-shell hero-content"><div className="max-w-4xl"><p className="hero-eyebrow">Independent player companion</p><h1>Little Troubles<br/>in Spooky Town</h1><p className="hero-copy">Controller prompts on a keyboard? A float ability that will not jump? A missing barbell? Find a focused answer tied to Kenney’s published instructions.</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/controls/" className="btn-primary">Find a control</Link><a href={site.officialUrl} className="btn-hero-secondary">Open official game</a></div></div></div></section><section className="page-section"><div className="page-shell"><div className="section-heading"><div><p className="eyebrow">Choose your problem</p><h2>Get back to the game</h2></div></div><div className="intent-grid">{guidePages.filter(p=>["controls","how-to-fly","find-the-missing-barbell","bugs-fixes"].includes(p.slug)).map(p=><Link key={p.slug} href={`/${p.slug}/`} className="intent-card tone-mint"><span><strong>{p.title}</strong><small>{p.description}</small></span></Link>)}</div></div></section><section className="page-section task-band"><div className="page-shell article-body"><h2>What this guide covers</h2><p>Kenney’s official release supports HTML5, Windows and Linux. Our reference covers published controls, specific developer answers and troubleshooting. It does not claim a full walkthrough or an optimal quest order.</p><p>The earlier full-task route contained unsupported details and has been withdrawn. Read the <Link href="/updates/">source and correction log</Link> for the scope of this revision.</p><p>Editorial identity: Hlele. Research review: Codex agent. No human playtest is claimed.</p></div></section></>}
''')
s=(p/'src/app/[slug]/page.tsx').read_text(encoding='utf-8')
s=s.replace('import OutfitMatrix from "@/components/OutfitMatrix";','').replace('import PlayFrame from "@/components/PlayFrame";','').replace('import TaskDirectory from "@/components/TaskDirectory";','').replace('import { getTownTask } from "@/data/tasks";','').replace('  const task = getTownTask(slug);','')
s=re.sub(r'\s*\{page.slug !== "tasks".*? : null\}', '',s)
s=re.sub(r'\s*\{task \? \([\s\S]*?\) : null\}', '',s)
s=re.sub(r'^.*\{page.slug === "(?:play|tasks|outfits-abilities)".*\n','',s,flags=re.M)
s=s.replace('<strong>Current playable build</strong><p>Current task names, totals, dependencies, and ending were verified against the playable build.</p>','<strong>Developer documentation</strong><p>Controls and support answers are linked to Kenney’s published instructions. This revision does not claim a complete playthrough.</p>')
write('src/app/[slug]/page.tsx',s)
write('src/app/sitemap.ts','''import type { MetadataRoute } from "next";
import {routes,site} from "@/data/site";
export const dynamic="force-static";
export default function sitemap():MetadataRoute.Sitemap{return routes.map(route=>({url:site.baseUrl+route.path,changeFrequency:route.changeFrequency,priority:route.priority}));}
''')
edit('src/components/Footer.tsx','An independent companion for Kenney&apos;s short adventure, organized around the 11 real tasks, their outfit dependencies, and the current playable build.','An independent companion for Kenney&apos;s adventure, focused on documented controls and developer support answers.')
edit('src/components/Header.tsx','const pages = [extraSearchItem, ...guidePages];','const pages = guidePages;')
edit('src/components/Header.tsx','Search tasks, Flying, bottles...','Search controls, float, barbell...')
s=(p/'src/components/Header.tsx').read_text();s=re.sub(r'const extraSearchItem = \{[\s\S]*?\};\n','',s);write('src/components/Header.tsx',s)
s=(p/'src/lib/seo.ts').read_text();s=s.replace('    datePublished: site.published,\n','').replace('gamePlatform: ["Web browser", "Windows"]','gamePlatform: ["Web browser", "Windows", "Linux"]');s=s.replace('author: { "@type": "Organization", name: site.name }','author: { "@type": "Person", name: "Hlele" }');s=re.sub(r'export function trackerSchema\(\) \{[\s\S]*','',s);write('src/lib/seo.ts',s)
s=(p/'src/app/layout.tsx').read_text();s=s.replace(' - All 11 Tasks',' - Controls and Player Help');s=re.sub(r'  keywords: \[[\s\S]*?  \],\n','',s);write('src/app/layout.tsx',s)
edit('src/app/not-found.tsx','Return to the task list and choose the errand you were looking for.','This page is unavailable or has been retired. Return to the guide for supported controls and help topics.')
edit('src/app/not-found.tsx','href="/tasks/"','href="/"');edit('src/app/not-found.tsx','All tasks','Guide home')
for f in ['src/app/calculator/page.tsx','src/app/guides/page.tsx','src/app/task-tracker/page.tsx','src/components/TaskTracker.tsx','src/components/TaskDirectory.tsx','src/components/OutfitMatrix.tsx','src/components/PlayFrame.tsx','src/data/tasks.ts']:
 (p/f).unlink()
print('Focused Little Troubles source repaired; originals preserved in quality/history.')
