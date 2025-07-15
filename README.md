# SPLMNS Frontend Assessment

A Next.js project that allows users to input names or phrases, which are then animated on a dedicated page. The project demonstrates state management, animation, and a modern UI using Zustand and Tailwind CSS.

Please see live demo [here](https://splmns-frontend-assessment.vercel.app/)

## Highlights

- **Tag Input:** Users can enter a name or phrase on the main page.
- **Tag List:** Recently submitted tags (up to 5) are displayed.
- **Animated Page:** Submitted tags are shown as animated floating elements on a visually rich background.
- **State Management:** Uses Zustand for managing tags.
- **Responsive UI:** Built with Tailwind CSS for modern styling.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm

### Installation

```bash
pnpm install
```

### Running the Development Server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- `app/` – Next.js app directory (main and animation pages)
- `features/animated-tag/` – All tag-related components, hooks, store, and types

## How it Works

1. **Main Page:**

   - Enter a name or phrase and submit.
   - The tag is added to the list and you can proceed to the animated page.

2. **Animated Page:**
   - Tags float and bounce within a container, each with randomized starting positions.
   - The background features a looping video for added effect.

## Tech Stack

- Next.js
- React
- Zustand
- Tailwind CSS (v4)
- TypeScript
- Eslint
- Prettier
