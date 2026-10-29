# NBA All-Time Atlas

An unofficial, static fan archive for NBA franchise lineups, historical player records, and a local two-player/AI draft room.

## Run locally

Serve this directory with any static HTTP server. `index.html`, `players.json`, `sw.js`, `manifest.webmanifest`, and `icon.svg` must be served from the same root path. The history directory and draft room share the `players.json` payload; the draft start control stays disabled until that payload is ready.

## Data and rating notes

- Historical player seasons and career/Hall of Fame fields are derived from the public [NBA Statistics 1946â€“Present dataset](https://github.com/Taleb88/NBA-Statistics-1946-Present).
- 2025â€“26 regular-season totals and player IDs are supplemented from the public [NBA API 25â€“26 dataset](https://github.com/EasySportsApps/nba_api_25_26_data).
- NBA CDN headshots are loaded from NBA-hosted image URLs where the player ID is available. For players whose franchise uniform cannot be verified, the UI uses a franchise-logo fallback rather than asserting a team-specific portrait.
- Historical draft-room OVRs are estimates derived from peak per-game production, career longevity, and the available Hall of Fame flag. The Atlas's existing curated top-ten ratings are preserved as editorial values.
- Unknown Hall of Fame status is not treated as either a confirmed yes or a confirmed no. Some older players lack a verified birth year, height, or weight in the source records.

This is a fan project an¶»§q«^