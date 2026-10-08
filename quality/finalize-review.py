from pathlib import Path
from datetime import datetime,timezone
import json,hashlib,subprocess
p=Path(__file__).resolve().parents[1];now=datetime.now(timezone.utc).isoformat()
def read(f):return json.loads((p/f).read_text(encoding='utf8'))
def ref(f):return {'path':f,'sha256':hashlib.sha256((p/f).read_bytes()).hexdigest()}
def write(f,t):(p/f).write_text(t,encoding='utf8',newline='\n')
collection=read('quality/artifacts/collection.json');checks=read('quality/artifacts/interaction-results.json');assert checks['status']=='passed'
fp=json.loads(subprocess.check_output(['node','scripts/quality-gate.mjs','--fingerprint','.'],cwd=p,text=True))['sha256'];assert collection['codeFingerprint']==fp
official='https://kenney.itch.io/little-troubles-in-spooky-town';capture=read('quality/artifacts/sources/capture.json')
write('quality/artifacts/implementation-notes.md','''# Implementation observations
This is a local preview/source review, not a claim about the previously deployed site.
- src/data/pages.ts now has nine focused dynamic pages; src/app/page.tsx is the home page. Task data and task-specific renderers are removed from src; previous source is preserved under quality/history/pre-focused-repair/src.
- Search filters this finite page collection in the browser. There is no account form, telemetry SDK or site API for search. No third-party game iframe remains. The old tracker and calculator were removed.
- Official links and source ownership are visible. Editorial identity Hlele follows the user-provided workspace contract. Actual reviewer is Codex agent; no human gameplay testing claim is made.
- privacy-policy and terms have explicit noindex. Eight successful canonical URLs remain in the actual sitemap.
- Vercel buildCommand is npm run build. Guarded build still requires this review; no push or production validation has been performed by this reviewer.
- Retired routes are intentionally absent from the static export, and representative former routes return real HTTP 404 in the preview test. They are not redirected to unrelated content.
''')
write('quality/skill-run.md','''# Skill run — focused HTML5 repair
Actual reviewer: Codex agent / HTML5 repairs. No human review asserted.

| Stage | Skill/resource | Use and output |
|---|---|---|
| Plan/source boundary | D:/AI建站/.agents/skills/roblox-site-architect/SKILL.md + research-and-evidence.md + implementation-and-review.md | Read platform branch; official HTML5 identity; quality/repair-plan.md; supported core pages and retired unsupported task routes |
| Page usefulness | D:/AI建站/.agents/skills/seo-page-audit/SKILL.md + references/local-integration.md | Read audit method; checked actual source/rendered text against player intent; no invented SEO scoring or word minimum |
| Implementation | installed Next.js generate-static-params.md and generate-metadata.md; workspace templates/design-system/theme-tokens.ts | Read applicable framework docs/design tokens; retained existing palette and responsive layout |
| Validation | workspace quality/README.md; collect-review-artifacts.mjs; quality/interaction-check.mjs | Actual build, ten routes/four widths, menu/search/404, snapshot and image provenance records |

Not used: Roblox scraper (wrong platform); calculators (no applicable game formula); codes/rating/programmatic page generation (no evidence or need); external skill scripts (not a substitute for direct source review). No cron, credential, deployment or outreach edits.
''')
claim_specs=[
('identity','fact','Little Troubles in Spooky Town is Kenney’s released adventure on HTML5, Windows and Linux.',['itch'],'Official More information: Status, Platforms, Author and Genre; title and release controls.'),
('move','fact','Move uses WASD or left joystick.',['itch'],'Controls entry for movement.'),
('interact','fact','Interact uses E or controller A.',['itch'],'Controls entry for interaction.'),
('jump','fact','Jump uses Spacebar or controller B.',['itch'],'Controls entry for jumping; this establishes that controller B is not the keyboard B key.'),
('outfit','fact','Open outfit choices using I or controller Y.',['itch'],'Controls entry Change outfit. No outfit unlock, power or requirement is inferred.'),
('drop','fact','Drop item uses F or controller X.',['itch'],'Controls entry Drop item.'),
('tasks','fact','Open the in-game task list using T or D-pad up.',['itch'],'Controls entry Task list. Does not imply a task count.'),
('float','fact','After unlocking float, a second Spacebar jump is the developer’s input clarification.',['itch'],'Kenney reply to jengabites: float ability allows double jump by pressing spacebar. Limited to use of already-unlocked float; no invented unlock route.'),
('barbell','fact','The missing barbell is on top of the house near the plaza.',['itch'],'Kenney reply to Cammellias asking where the barbell is. The answer says rooftop near the plaza, contradicting former beach-gym directions.'),
('support','fact','Developer recommends downloads for browser visual/performance/input issues and in-game visual quality options for continued performance issues; macOS is unsupported.',['itch'],'Official Troubleshooting section. Browser-flag workaround is referred to its current source, not reproduced as a stable browser fact.'),
('downloads','fact','Official page offers Windows and Linux downloads through Download Now.',['itch'],'Download section names Windows/Linux files; no unverified game version is asserted on site.'),
('source-review','date','This documentation source was reviewed on 8 October 2026 UTC by a Codex agent, not a human playtester.',['capture','implementation'],'Source capture timestamp 2026-10-08T15:57... UTC and actual source review in this task. Identity metadata, controls, troubleshooting and developer replies checked.'),
('site-scope','fact','Site is an independent AI-assisted guide under editorial identity Hlele; unsupported task chains and calculator were withdrawn; current search is local with no game iframe, tracker or account.',['implementation','interactions'],'See implementation-notes and actual retired-route, menu/search observations. Source archive records previous task data. Hlele identity is the user-specified editorial identity, not a claim of human testing.'),
('art','fact','Title screen artwork comes from the official developer gallery; game and artwork belong to Kenney.',['images'],'image-provenance.json exact SHA256 match public/gameplay-town-wide.png to official screenshot URL /NDg3NzE1OC8yOTI0NTI4Ny5wbmc=/794x1000/6e%2F0mn.png. Viewed title screen; no open license claim.'),
]
spec={
'/':('Choose the supported help topic','Four problem-oriented links, known platform scope and official launch destination.',['identity','float','barbell','site-scope','art']),
'/controls/':('Translate controller prompts to keyboard actions','All six developer mappings in one readable list, with a concrete B-versus-Space interpretation.',['move','interact','jump','outfit','drop','tasks','site-scope']),
'/how-to-fly/':('Use already-unlocked float on keyboard','Developer double-jump answer without an invented prerequisite quest route.',['float','jump','outfit','tasks','site-scope']),
'/find-the-missing-barbell/':('Find the missing barbell','Correct developer rooftop location plus explicit removal of conflicting beach-gym and reward claims.',['barbell','outfit','tasks','site-scope']),
'/bugs-fixes/':('Choose a supported troubleshooting step','Developer-supported download, quality-option and unsupported-macOS triage; no false guaranteed fix.',['support','downloads','site-scope']),
'/play/':('Reach the official current release','Stable developer release/download destination instead of an outdated embedded upload.',['identity','downloads','site-scope']),
'/updates/':('Inspect factual scope and corrections','Review date/method and precise withdrawn claim categories.',['identity','source-review','site-scope']),
'/about/':('Understand editorial responsibility','Hlele editorial identity, agent review boundary, contact and developer independence.',['identity','site-scope','art']),
'/privacy-policy/':('Understand current site behavior','Search/local behavior, no account or embeds, and external service distinction.',['site-scope']),
'/terms/':('Understand guide limits and attribution','Unofficial reference scope and ownership disclosure.',['identity','site-scope','art'])}
lines=['# Content review — Little Troubles','Reviewer: Codex agent / HTML5 repairs. This is documentation and local preview review, not a complete game playthrough.','', '## Source decisions','The official released-platform identity is explicit. Task totals, exact rewards, prerequisite chains and collectible counts were removed. Only developer-supported location/input answers remain. Editorial troubleshooting suggestions are phrased as suggestions.','', '## Visual and functional review','Viewed review-home-390.png, review-home-1440.png, review-body-768.png and review-body-1024.png. Readable contrast and normal wrapping; title art is overlaid rather than used as body text. The shared article template and every page were measured at all four widths: no overflow/offscreen body text, body text >=12px. Ten functional checks passed. Actual screenshots retained for all routes/widths.','', '## Page decisions']
for route,(intent,value,ids) in spec.items():
 slug='home' if route=='/' else route.strip('/');body=(p/f'quality/artifacts/{slug}-text.txt').read_text(encoding='utf8');assert body.strip();lines+=['',f'### {route}',f'Intent: {intent}',f'Value: {value}',f'Claims checked in rendered HTML/text: {", ".join(ids)}.', 'Reviewed title, description, visible body, FAQ/HowTo when present and canonical/noindex against this scope. No task count/reward/complete-playthrough assertion remains. Shared next-reading links are navigation, not additional factual articles.']
lines+=['','## Limits','New content cannot guarantee Google indexing. External game execution, a full game playthrough, traffic, GSC changes and production deployment were not tested. These are not required to state the bounded published instructions above. Developer copyrighted screenshots remain attributed; no license transfer or publisher endorsement asserted.']
write('quality/content-review.md','\n'.join(lines)+'\n')
review={'status':'supported','reviewer':'Codex agent / HTML5 repairs','reviewedAt':now,'artifact':ref('quality/content-review.md')}
def source(id,kind,file,url=official,date=None):return {'id':id,'kind':kind,'url':url,'checkedAt':date or now,'artifact':ref(file)}
local=read('quality/artifacts/home-technical.json')['testedUrl']
sources=[source('itch','official','quality/artifacts/sources/itch-current.html',date=capture['checkedAt']),source('capture','observation','quality/artifacts/sources/capture.json'),source('implementation','observation','quality/artifacts/implementation-notes.md',local),source('interactions','observation','quality/artifacts/interaction-results.json',local),source('images','observation','quality/artifacts/sources/image-provenance.json')]
claims=[dict(id=id,kind=kind,statement=statement,sourceIds=ids,support=support,review=review) for id,kind,statement,ids,support in claim_specs]
pages=[]
for row in collection['pages']:
 route=row['path'];intent,value,ids=spec[route];tech=read(row['technicalArtifact']['path']);assert not row['issues']['brokenLinks'] and row['issues']['consoleErrors']==0 and not row['issues']['overflow']
 for v in tech['viewports']:
  match=[x for x in checks['readability'] if x['route']==route and x['width']==v['width']];assert len(match)==1 and not match[0]['outside'] and not match[0]['smallText'];v['readable']=True
 tech['interaction']='passed';tech['interactionEvidence']='quality/artifacts/interaction-results.json: shared menu/search and representative retired 404 routes. Static content needs no artificial loading state.';tech['contentReview']='supported';tech['note']='Actual local preview. Per-route four-width measurements plus shared-template visual review and tested global navigation. External game execution was not claimed.';write(row['technicalArtifact']['path'],json.dumps(tech,indent=2))
 pages.append(dict(path=route,status='ready',intent=intent,uniqueValue=value,indexable=route not in ['/privacy-policy/','/terms/'],claimIds=ids,claimCoverage='complete',crossPageConsistency='passed',review=review,renderedArtifact=ref(row['renderedArtifact']['path']),technicalArtifact=ref(row['technicalArtifact']['path'])))
m=dict(schemaVersion=1,codeFingerprint=fp,site=dict(baseUrl='https://littletroubles.robloxwikihub.com',officialUrl=official,platform='html5',releaseStatus='released',identitySourceId='itch',identityReview=review),sources=sources,claims=claims,pages=pages,routeInventoryArtifact=ref('quality/artifacts/routes.json'),sitemapPaths=[x['path'] for x in pages if x['indexable']],sitemapArtifact=ref('quality/artifacts/sitemap.xml'),buildStatus='passed',buildArtifact=ref('quality/artifacts/build.log'),skillRunArtifact=ref('quality/skill-run.md'),unresolved=[])
write('quality/review.json',json.dumps(m,ensure_ascii=False,indent=2)+'\n');print('review saved',len(pages),'pages',len(claims),'claims')
