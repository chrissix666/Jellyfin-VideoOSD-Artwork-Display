# Jellyfin VideoOSD Artwork Display

Highly experimental. This took time to build, but not much technical coding know-how & lot of AI help.
@HighImKevin and @BobHasNoSoul from the Jellyfin community helped shape the initial code base and provided several fixes. Many thanks to both of them.

---

Tested environment  
This script has been tested exclusively on:
- Windows 11
- Jellyfin Web 10.10.7
- Google Chrome

Behavior on other operating systems, browsers, or Jellyfin versions is unknown and may differ.

---

<img src="Screenshot.jpg" width="600">

---
This script adds configurable artwork overlays to the Jellyfin Video OSD. It displays logos, clearart, discs, posters, banners, thumbs, and multiple backdrops directly on top of the video player, using existing Jellyfin artwork and metadata.

Originally, this script was designed as a single global overlay system just for clearlogo.png on left top VideoOSD overlay. During development, it became clear that a global approach was too limiting. The script was therefore split into independent profiles for **movies**, **episodes (from TV shows)**, and **videos**, allowing each media type to be configured entirely separately. This makes it possible to build completely different artwork layers per media type without compromises or shared constraints. This script has now become a complete matrix for all libraries, all artworks & sub, and all positions—fully individual and independent. The configuration is an artwork overlay creator with almost full freedom.

---

## Overview

Jellyfin VideoOSD Artwork Display is a client-side userscript that injects artwork elements into the Video OSD view.  
It resolves artwork context-aware based on the currently playing item and its choosable hierarchy (episode → season → series, or file → parent → grandparent). Each media type (movie, episode, video) has its own configuration profile and state handling.

---

## Features

- Independent configuration profiles for:
  - Movies
  - Episodes (TV shows)
  - Videos
- Fully configurable artwork layers per profile
- Supported artwork types:
  - Logo
  - Clearart (with optional logo fallback)
  - Disc (static or rotating)
  - Poster
  - Banner
  - Thumb
  - Backdrop (main)
  - Extended artwork types for TV shows Season & Episode + fallbacks
  - Additional backdrops (Backdrop #1 to #9)
- Per-artwork configuration options:
  - Enable or disable each element individually
  - Source selection (file, parent, grandparent, episode, season, series)
  - Horizontal alignment (left, center, right)
  - Vertical alignment (top, center, bottom)
  - Screen offsets using viewport units (vw / vh)
  - Maximum height and optional maximum width
  - Z-index layer control
  - Optional fallback logic (for example clearart falling back to logo)
- Context-aware artwork resolution using Jellyfin metadata
- Automatic artwork switching on item change
- Automatic hiding and showing based on OSD visibility
- Fullscreen-aware positioning adjustments
- Optional disc rotation synced to video playback
- Automatic pause and resume of disc rotation
- Multiple simultaneous artwork layers
- Non-active media type layers are hidden automatically
- Client-side only, no server-side changes required


---

## Installation

1. Install a JavaScript injector or userscript manager  
   (for example Tampermonkey, Violentmonkey, or a Jellyfin-compatible JS injector)

2. Add the script file:  
   `Jellyfin-VideoOSD-Artwork-Display-v1.js`

3. Reload the Jellyfin web interface

No server-side changes are required.

---

## Configuration

All behavior is controlled via the `CONFIG` object at the top of the script.

Configuration is separated into three profiles:
- movie
- episode
- video

Each profile can be configured completely independently.

For each artwork element you can define:
- Enabled or disabled state
- Source mode:
  - Movies and Videos: file, parent, grandparent
  - Episodes: episode, season, series
- Horizontal alignment
- Vertical alignment
- Screen offsets (vw and vh based)
- Maximum height
- Optional maximum width
- Z-index layer (use 1-9)
- Optional fallback behavior

This allows highly granular control over which artwork is shown and where it appears.

---

## Artwork Source Resolution

Artwork is resolved dynamically using Jellyfin metadata.

Movies and Videos:
- File
- Parent
- Grandparent

Episodes (TV shows):
- Episode
- Season
- Series

The source level used depends on the configured source mode for each artwork element.

Fallback logic is applied where supported, for example clearart falling back to logo, or season falling back to series artwork.

---

## Disc Rotation

If enabled, disc artwork can rotate while video playback is active.

- Rotation is synced to playback state
- Pauses automatically when playback pauses or ends
- Rotation speed is configurable per profile
- Uses requestAnimationFrame for smooth animation

---

## Visibility Behavior

- Artwork is only visible when the Video OSD is visible
- Automatically hides when leaving the video page (smooth fade)
- Automatically resets on item change
- Handles real fullscreen and browser fullscreen modes
- Non-active media types are hidden when switching content

---

## Known Bugs and Issues

OSD layering (Play Next)  
The artwork overlays are successfully positioned behind trickplay thumbnails, skip buttons, and media info overlays.  
During the "Play Next" action, the artwork currently remains in the foreground.

The "Play Next" event cannot be reliably triggered manually, which makes debugging difficult.  
No stable DOM or state hook has been identified so far.

---

Limited support for special content types  
The following content types are not fully supported:
- File stacking
- Trailers
- Bonus or extra content

Extras, Trailers, Bonus content (stacked sub videos) are treated by Jellyfin as standalone videos and cannot be reliably linked back to their parent movie. (have not find out yet)
In these cases empty, at most may fallback poster appear or the thumb generated in the jellyfin (Screen Grabber / Image Extractor), or when the artwork directly assigned to the stacked files themselves or same folder. Else empty.

---

## Compatibility

Tested on:
- Jellyfin Web 10.10.7
- Windows 11
- Google Chrome

Other environments are untested.

---

## Disclaimer

This script was created through trial and error and experimentation.  
I am not a professional JavaScript developer.

The code is shared in the hope that others may find it useful, improve it, or adapt it to their own setups.  
Suggestions, improvements, and pull requests are welcome.

JavaScript injection modifies the client-side behavior of Jellyfin and can potentially cause instability, visual glitches, or unexpected behavior.  
Use this script cautiously and only if you understand the risks involved.

Avoid using multiple conflicting JavaScript injects at the same time and always test changes carefully.

This project is not affiliated with or endorsed by Jellyfin.

---

## License

MIT License  
Free to use, modify, and share.
