# Workout Gym — Landing Page

A responsive landing page for a fitness/gym brand, built as a standalone project (originally homework #7 from the [BUI-studies](https://github.com/BUI-studies) course). It's kept in its own repository to showcase a **mobile-first** approach to responsive design, with dedicated breakpoints for mobile, tablet, and desktop.

🔗 [Live demo](https://mykola-lp.github.io/workout-gym/)

## Structure

| Folder/File | Description |
|---|---|
| `index.html` | Main page markup |
| `css/reset.css` | Base CSS reset |
| `css/style.css` | Main stylesheet (mobile-first, with breakpoints for tablet/desktop) |
| `js/navigation.js` | Handles the mobile navigation menu (open/close, resize behavior) |
| `js/year.js` | Automatically updates the copyright year in the footer |
| `img/` | Images and icons used across the page |
| `figma/` | Original design file used as a reference for this layout |

## Features

- Mobile-first responsive layout, with separate styles for mobile, tablet (768px+), and desktop (1024px+)
- Semantic HTML structure
- BEM naming convention for CSS classes
- Subtle hover/active animations on buttons and interactive elements
- Accessible navigation menu built with native `<details>`/`<summary>`

## Getting Started

Clone the repository and open it locally:

```bash
git clone https://github.com/mykola-lp/workout-gym.git
cd workout-gym
```

### Running the project

This project was developed using the **Live Server** extension for VS Code, and it's the recommended way to run it locally.

**Steps:**
1. Open the project folder in VS Code
2. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension (if not already installed)
3. Right-click `index.html` and select **"Open with Live Server"**

### Why not just open `index.html` directly?

Opening the file directly in a browser (via `file://`) will technically load the page, but a few things won't behave correctly:

- **No live reload** — any change to HTML/CSS/JS requires a manual page refresh, which slows down development significantly
- **Relative paths may misbehave** — some browsers apply stricter security restrictions to pages loaded via `file://`, which can cause inconsistent behavior with fonts, scripts, or asset loading compared to how they'd behave over `http://`
- **Different environment than production** — the site is deployed via GitHub Pages, which serves files over `http://`/`https://`; testing locally over the same protocol (which Live Server provides) gives a more accurate preview of the deployed result

For these reasons, using a local development server (Live Server or any alternative, such as the VS Code `http-server` package) is recommended over opening the file directly.

## Reference Material

Resources used while working on layout and responsiveness:

- [Flexbox Cheatsheet](https://flexbox.malven.co/) — visual reference for Flexbox properties
- [Grid Cheatsheet](https://grid.malven.co/) — visual reference for CSS Grid properties
- [rage/secret-project-331](https://github.com/rage/secret-project-331) — referenced for styling/CSS structuring practices
