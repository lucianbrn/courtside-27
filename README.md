# COURTSIDE 27 — Finals Coach (takeover build)

Coach-first autonomous 3D basketball sim. Watch Finals matchups unfold,
call the strategy: rotations, timeouts, offensive/defensive systems, tempo,
star-player focus.

## Run locally

```bash
cd public
python3 -m http.server 8778
# open http://localhost:8778/index.html
```

## Project layout

```
public/
  index.html            # the game (single file + vendored three.js)
  vercel.json
  vendor/three.module.js
  video/
    celtics-intro.mp4   # 10s, H.264 1080p — plays for BOS Finals matchups
    heat-intro.mp4      # 15s, H.264 1080p — plays for MIA Finals matchups
    warriors-intro.mp4  # 15s, H.264 1080p — plays for GSW Finals matchups
src/base.html           # recovered pre-takeover build (reference only)
tests/                  # test_build.py, test_camera_math.py
e2e/                    # headless-Chromium playtest (needs /opt/meta-chromium)
recovered/              # original deployed HTML as recovered 2026-10-14
```

## Deploy (Vercel)

The `public/` directory is the deploy root — HTML, JS, and all three MP4s
must be deployed together. The old deployment only contained `index.html`,
which is why intros never played.

```bash
cd public
vercel --prod   # or: vercel deploy --prod
```

Then verify (do not skip):
```bash
curl -sI https://<your-domain>/video/celtics-intro.mp4  # expect 200, video/mp4
curl -sI https://<your-domain>/video/heat-intro.mp4
curl -sI https://<your-domain>/video/warriors-intro.mp4
```
Open the site, start a Finals coach game, confirm the intro video plays,
then confirm live gameplay renders.

## What changed in the takeover (2026-10-14/15)

1. **Broadcast camera** — coach mode now uses a low sideline camera
   (y≈6.6, z≈14.8, FOV 42°) that tracks the ball handler with velocity
   look-ahead, pulls back on fast breaks / possession changes, frames the
   basket on free throws, and goes wide on timeouts. Replaces the old
   high press-box view (y 15.5–19.5, z 21–27).
2. **Player models** — two-segment arms (shoulder/elbow) and legs
   (hip/knee) with elbow/knee secondary animation; replaces single-piece
   capsule limbs.
3. **Team intros** — the three real Finals intro videos are transcoded to
   web-safe H.264 1080p, ship in `video/`, and play in sequence when both
   teams have one (Celtics/Warriors/Heat). Skip button + error fallback +
   unmuted-first playback. Practice games skip intros.
4. **Era gameplay** — era presets now change pace (movement speed) and
   three-point tendency/selection, not just lighting. 1960s plays fast
   with almost no threes; modern plays with heavy three-point volume.
   Rosters remain the 2009–10 set (stated in the menu).
5. **three.js vendored** — no CDN dependency at runtime.

## Known limitations (honest)

- Player models are improved procedural figures, not scanned/mocap assets.
- Historical eras change presentation + pace/shot tendencies; full
  historical rosters are not modeled (menu says so explicitly).
- Coaching AI and sim are the recovered systems, tuned not rewritten.
