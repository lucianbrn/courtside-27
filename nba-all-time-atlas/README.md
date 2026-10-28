# NBA All-Time Atlas

A static, client-side NBA all-time franchise archive with a two-dice starting-five draft versus AI or a local friend.

## Deployment
Set the Vercel project root directory to this folder. The application is served from `index.html`; no build step is required.

## Starting-five draft
The Game Room has a local VS AI mode and a same-screen local-friend mode. Each of ten picks cycles animated era and franchise dice, filters the franchise roster by era and the required position, then lets the active player choose one available legend. Each die can be rerolled once per pick; rerolling one keeps the other locked. Players cannot be drafted twice, and the final lineups are compared by average Atlas Prime OVR.

## Player bios
Player plates show overall rating, build type, primary and secondary positions, NBA Finals record, championships, regular-season MVPs, Defensive Player of the Year awards and All-Star appearances. Award wins render as compact trophy stacks.

## Record fields and caveats
The All-Star, championship, regular-season MVP and DPOY counts read from the archive's embedded lookup tables. Finals records are mapped for players with a curated record entry; `—` means the record has not been verified in the embedded source. Build types are editorial archetype descriptions for identified players and role-based labels for other players; they are not official NBA 2K ratings.

## External trophy art
- Larry O'Brien trophy PNG: VHV image URL.
- MVP trophy PNG: PNGKey image URL.
- DPOY trophy photo: Hearst/Click2Houston CDN image URL.
External providers control availability and usage terms for those assets.

This application lives in its own subfolder so the existing Courtside 27 files remain unchanged.
