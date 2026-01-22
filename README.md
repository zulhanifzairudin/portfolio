# Portfolio Website

A modern, responsive portfolio website built with Next.js 16, featuring a clean design, dark mode support, and a dynamic project showcase with filtering capabilities.

## Features

- 🎨 **Modern UI/UX**: Clean, responsive design with gradient accents and smooth transitions
- 🌙 **Dark Mode**: Full dark mode support with system preference detection
- 📱 **Responsive Design**: Optimized for all screen sizes
- 🔍 **Project Filtering**: Filter projects by technology stack
- 📄 **Dynamic Project Pages**: Individual detail pages for each project
- ⚡ **Performance**: Built with Next.js App Router for optimal performance
- 🎯 **Type-Safe**: Full TypeScript support

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans & Geist Mono (via Next.js)

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout with navigation
│   ├── projects/          # Projects pages
│   │   ├── page.tsx       # Projects listing with filtering
│   │   └── [slug]/        # Dynamic project detail pages
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Main navigation bar
│   ├── ProjectCard.tsx    # Project card component
│   ├── ThemeProvider.tsx  # Dark mode provider
│   ├── ThemeScript.tsx    # Theme initialization script
│   └── ThemeToggle.tsx    # Dark mode toggle button
├── data/                  # Data files
│   └── projects.json      # Project data
├── types/                 # TypeScript types
│   └── project.ts         # Project interface
└── utils/                 # Utility functions
    └── techColors.ts      # Technology badge colors
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Projects

Projects are managed in `data/projects.json`. To add a new project:

1. Add a new object to the `projects.json` array:

```json
{
  "slug": "project-slug",
  "title": "Project Title",
  "description": "Short description for the card",
  "longDescription": "Detailed description with paragraphs and bullet points.\n\nUse \\n for line breaks.",
  "image": "/images/project-image.jpg",
  "technologies": ["Next.js", "TypeScript", "React"],
  "githubUrl": "https://github.com/username/repo",
  "liveUrl": "https://project-demo.vercel.app",
  "featured": true
}
```

2. Add the project image to `public/images/` directory

3. The project will automatically appear on the projects page and have a detail page at `/projects/project-slug`

## Current Projects

- **E-Commerce Platform** - Full-stack e-commerce solution with payment integration
- **Task Management App** - Collaborative task management with real-time updates
- **Weather Dashboard** - Beautiful weather dashboard with forecasts and maps
- **Fynecta Landing** - Converted a static Webflow HTML export into a modern Next.js App Router app

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your portfolio will be live!

For more deployment options, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Customization

### Update Personal Information

Edit `app/page.tsx` to update:
- Your name
- Bio/description
- Tech stack
- GitHub URL

### Styling

The project uses Tailwind CSS. Customize colors, spacing, and other design tokens in:
- `app/globals.css` - Global styles and CSS variables
- Component files - Tailwind classes

### Theme

Dark mode is implemented using a custom theme provider. The theme preference is stored in localStorage and respects system preferences.

## License

This project is private - All rights reserved
