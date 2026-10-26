# Biolink (Single File + Dynamic Config)

This project contains a biolink (linktree) page in a single `index.html` file, including all styles and scripts. It features a music player, animated background, and an integrated "jumpscare" / ransomware prank effect.

## How to edit?

1. Open `index.html` in any text editor.
2. At the top of the file you will find the `window.CONFIG` object.
3. Change the values (colors, names, links to assets) to yours.

## Assets (`assets/` folder)
For correct operation, it is recommended to create an `assets/` folder next to the `index.html` file and place in it:
- `avatar.png` - Your profile picture (also used as an icon and fallback background)
- `background.mp4` - (Optional) Animated video background
- `scare_classic.jpg` - Image used for the "jumpscare" effect
- `music-cover.png` - Track cover in the music player

If you don't use local files, change the paths in the configuration (and in the HTML code for the `<video>` tag) to full URLs (e.g., `https://yoursite.com/avatar.png`).
