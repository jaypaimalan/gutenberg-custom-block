# Custom Card Block

A Gutenberg block with an image, title, description, and button. Styled with Tailwind CSS.

---

## Requirements

- WordPress 6.3+
- Node.js 20+

---

## Setup

```bash
# 1. Place plugin folder in wp-content/plugins/
# 2. Install dependencies
npm install

# 3. Start dev server (watch mode)
npm start

# 4. Or build for production
npm run build
```

Then go to **WP Admin → Plugins** and activate **Custom Card Block**.

---

## Usage

In the Gutenberg editor, click **+** and search for **Custom Card Block**. Find it under the **Design** category.

| Field | Where |
|---|---|
| Image, Title, Description, Button text | Click directly on the card |
| Button URL | Inspector sidebar → Button Settings |

---

## Structure

```
src/
├── block.json    ← attributes & metadata
├── index.js      ← block registration
├── edit.js       ← editor UI
├── save.js       ← front-end output
├── style.scss    ← shared styles (Tailwind)
└── editor.scss   ← editor-only styles (Tailwind)
```
