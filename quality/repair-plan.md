# Evidence repair plan — 2026-10-08

Official identity: Kenney's released HTML5/Windows/Linux adventure. P0: translate controller prompts to keyboard keys, recover from a blocked jump or missing barbell, and reach the developer's playable release.

```mermaid
flowchart TD
 Home[/] --> Controls[/controls/]
 Home --> Float[/how-to-fly/]
 Home --> Barbell[/find-the-missing-barbell/]
 Home --> Fixes[/bugs-fixes/]
 Home --> Play[/play/]
 Home --> Sources[/updates/]
 Sources --> Official[Kenney itch.io]
```

| Route | Intent | Information | Action | Fallback |
|---|---|---|---|---|
| / | Choose help | Supported help topics | Open relevant guide | Official game link |
| /controls/ | Translate an input | Six official keyboard/controller mappings | Use key in game | Download/support guide |
| /how-to-fly/ | Use unlocked float | Developer's double-jump clarification | Press jump again | No invented unlock route; consult in-game task list |
| /find-the-missing-barbell/ | Find object | Developer-corrected rooftop location | Inspect plaza rooftops | Official comment, no guessed reward |
| /bugs-fixes/ | Resolve play problems | Official support boundaries and options | Use desktop download/options | Developer support page |
| /play/ | Open supported game | Official release/download destination | Open itch.io | No stale embedded upload |
| /updates/ | See sourcing/corrections | Current capture plus withdrawn task claims | Inspect primary source | Explicit limits |
| /about/, /privacy-policy/, /terms/ | Understand site | Ownership, actual behavior, policies | Browse sources/contact | Official publisher remains independent |

Retire unsupported walkthrough, all-task counts, collection locations, outfit/reward chain, and mandatory calculator routes with actual 404 output. Remove incoming links and sitemap entries. Preserve original source under quality/history; do not blanket redirect unrelated URLs. Keep original palette/layout; no copied game screenshots whose provenance cannot be established. No claimed gameplay verification.
