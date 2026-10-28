# NBA All-Time Atlas

A static, client-side NBA all-time franchise archive.

## Deployment
Set the Vercel project root directory to this folder. The application is served from `index.html`; no build step is required.

## Record fields and caveats
The All-Star, championship, regular-season MVP and DPOY counts read from the archive's embedded lookup tables. Finals records are mapped for players with a curated record entry; `—` means the record has not been verified in the embedded source. Build types are editorial archetype descriptions for identified players and role-based labels for other players; they are not official NBA 2K ratings.

## External trophy art
- Larry O'Brien trophy PNG: VHV image URL.
- MVP trophy PNG: PNGKey image URL.
- DPOY trophy photo: Hearst/Click2Houston CDN image URL.
External providers control availability and usage terms for those assets.
