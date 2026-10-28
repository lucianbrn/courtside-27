# NBA All-Time Atlas

A static, client-side NBA all-time franchise archive.

## Deployment
Set the Vercel project root directory to this folder. The application is served from `index.html`; no build step is required.

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
