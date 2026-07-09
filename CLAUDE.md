# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A static, single-page website (Portuguese, pt-BR) suggesting couples' outing spots around Vargem
Grande Paulista / São Roque, built for the "Escola de Famílias" at Mariápolis Ginetta. Plain
HTML/CSS/JS — no build step, no dependencies, no tests.

## Running

Open `index.html` directly in a browser (or serve the directory with any static server).

## Architecture

- `index.html` — page shell only: hero header, an empty `.grid-container`, and footer. Cards are
  NOT in the HTML.
- `script.js` — all content and behavior. The `cardData` array is the single source of truth for
  the suggestion cards. On `DOMContentLoaded` it:
  1. Computes each place's distance from a fixed origin (Mariápolis Ginetta coordinates at the top
     of the file) using the Haversine formula.
  2. Filters out entries with an empty `imgSrc` or no computed distance, sorts by distance
     (closest first), and renders each card into `.grid-container` via template strings.
  3. Uses an `IntersectionObserver` to add the `.visible` class for the fade-in scroll animation
     (paired with the `opacity`/`transform` defaults on `.card` in `style.css`).
- `style.css` — styling; accent color `#c5a47e`, fonts Playfair Display (headings) and Poppins
  (body) loaded from Google Fonts.
- `images/` — local images referenced from `cardData` (most card images are hotlinked external
  URLs instead).

## Adding or Editing Places

Edit the `cardData` array in `script.js`. Each entry needs: `imgSrc`, `imgAlt`, `title`,
`description`, `linkHref`, `linkLabel`, `googleMapsLink`, `coordinates` (`{lat, lng}`), and
`distance: ""` (filled in at runtime — never hardcode it). Entries without `coordinates` or with
an empty `imgSrc` are not rendered, which is also the convention for temporarily disabling a place
(alongside commenting it out — both patterns exist in the file). The empty template object at the
end of the array is a scaffold for new entries; keep it last.
