# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** npm

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build the production-ready application:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
ProfileWebsite/
├── app/
│   ├── globals.css       # Global styles with Tailwind directives
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page
├── components/
│   ├── Navbar.tsx        # Navigation bar component
│   ├── Button.tsx        # Reusable button component
│   ├── Card.tsx          # Card component for content sections
│   └── Footer.tsx        # Footer component
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Features

- ✅ TypeScript for type safety
- ✅ Responsive design with Tailwind CSS
- ✅ Dark mode support
- ✅ Reusable component library
- ✅ SEO-friendly with Next.js metadata
- ✅ Fast page loads with Next.js App Router

## Customization

Edit the following files to customize your portfolio:

- `app/page.tsx` - Update the home page content
- `components/Navbar.tsx` - Customize navigation links
- `components/Footer.tsx` - Update footer links and information
- `app/layout.tsx` - Modify site metadata and layout

## License

MIT