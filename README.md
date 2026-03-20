# Instapulse

An Instagram-inspired fullstack web app built with Next.js App Router.

## Features

- Story rail, immersive feed cards, and right-hand suggestions panel
- Fullstack `GET /api/feed` and `POST /api/feed` route handlers
- Local JSON-backed persistence for published posts
- Tailwind-powered responsive dark UI

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## API

### `GET /api/feed`
Returns the stories, posts, and suggestions used on the home page.

### `POST /api/feed`
Creates a new post. JSON body:

```json
{
  "username": "you.creator",
  "location": "New York, NY",
  "image": "https://images.unsplash.com/...",
  "caption": "Shipping something visual today"
}
```
