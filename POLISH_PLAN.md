# Clockwork Canopy Polish Plan

This plan keeps the game original, playable, and production-oriented. Quality comes from visible cohesion and verified playability, not artificial line growth.

## Phase 1: Visual Cohesion

Status: in progress.

- Strengthen procedural tile materials: grass lips, planks, bolts, spikes, spring coils, and readable hazard surfaces.
- Make enemy silhouettes distinct at 32x32: beetle, acorn, lantern, charger, spiker, and turret should be identifiable by shape, not color alone.
- Make the boss read as a clockwork canopy warden with leaf and gear motifs.
- Add richer parallax backgrounds: distant canopy, soft strata, gear and windmill motifs.
- Keep physics, frame counts, level data, and save compatibility unchanged.

## Phase 2: Gameplay Juice

- Add stronger pickup magnet arcs and powerup aura differentiation.
- Tune boss telegraph timing visuals without changing attack contracts.
- Add small camera and HUD moments for checkpoints, hidden seeds, and level completion.
- Keep reduced and minimal motion modes respected.

## Phase 3: Friend Features

- Add a clean score/share result after each level.
- Add a daily level seed or highlighted level route.
- Add local best-score and best-time panels before backend accounts.
- Keep the title-screen Share Link flow simple and reliable.

## Phase 4: Audio Identity

- Give major actions distinct sound families: leaf, brass, clock, glass, and steam.
- Add sound-cue labels for accessibility when enabled.
- Keep Web Audio unlock behavior and muted settings reliable.

## Phase 5: Performance

- Inspect Phaser bundle chunking and lazy-loadable code paths.
- Add a mobile frame-rate smoke check.
- Keep canvas nonblank and motion-pixel checks in e2e.

## Phase 6: Release QA

- Run lint, unit, build, e2e, and line-count before production deploys.
- Browser-check desktop and mobile production after deploy.
- Add focused regression tests when procedural asset contracts change.
