# BusinessAI 360 Skilling Website

This repository contains a modern, responsive, single-page marketing site for the BusinessAI Skilling Course aimed at business leaders.

- Entry point: `html/index.html`
- Assets: `images/` (hero background, etc.)

## Local preview

Open `html/index.html` in your browser. Or with VS Code Live Server.

## Replace the hero video

In `html/index.html`, update the YouTube placeholder `VIDEO_ID` inside the hero section. If you have a full YouTube URL, set it on the container as `data-video-url` and the site will parse the ID automatically.

Example:

- Using ID: `<div class="video-embed" data-video-id="dQw4w9WgXcQ">`
- Using URL: `<div class="video-embed" data-video-url="https://www.youtube.com/watch?v=dQw4w9WgXcQ">`

## Content sections

- Hero with video
- Program (About)
- Who It’s For
- Program Structure (timeline)
- Why Us
- Pricing & Enrollment
- Outcomes
- Advanced Course (Agentic AI)
- Email CTA

## Notes

- Navigation is responsive; mobile menu collapses.
- Sections animate into view.
- Buttons use mailto links—replace addresses if needed.
