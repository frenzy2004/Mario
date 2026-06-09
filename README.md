# Clockwork Canopy

Clockwork Canopy is an original browser side-scrolling platform adventure built with Vite, TypeScript, and Phaser 3.

The repository can be named `Mario`, but the shipped game intentionally uses original characters, worldbuilding, artwork, music, sound effects, levels, and UI copy.

## Run

```powershell
npm.cmd install
npm.cmd run generate:content
npm.cmd run dev
```

## Verify

```powershell
npm.cmd run lint
npm.cmd run test
npm.cmd run build
npm.cmd run line-count
npm.cmd run test:e2e
```

## Controls

- Move: `A/D`, arrow keys, or gamepad D-pad/left stick
- Jump: `Space`, `W`, `ArrowUp`, or gamepad bottom face button
- Dash: `Shift`, `X`, or gamepad right face button
- Pause: `Esc`, `Enter`, or gamepad Start/Menu
- Touch: phones and tablets show left/right, Jump, and Dash controls automatically. Use Settings -> Touch controls to force them on or off.

## Friend Play

Use the title-screen Share Link button to send the current game URL. Browsers with Web Share open the native share sheet; other browsers copy the link to the clipboard or show a copy prompt.

For someone on the same Wi-Fi network to play a local dev build, run Vite on all interfaces:

```powershell
npm.cmd run dev -- --host 0.0.0.0
```

Then share the Network URL printed by Vite, usually `http://<your-lan-ip>:5173/`. Keep both devices on the same network and allow the dev server through the firewall if Windows asks.

## Originality

This project is a genre-inspired platform game. It does not include Nintendo characters, sprites, sounds, melodies, level layouts, item names, or branding.
