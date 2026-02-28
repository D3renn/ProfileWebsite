# Portfolio Website

A modern, clean portfolio website built with Next.js, TypeScript, and Tailwind CSS. Inspired by contemporary portfolio designs with focus on simplicity and user experience.

## 🎨 Design Features

- **Hero Section** - Bold, welcoming introduction
- **Case Studies** - Showcase projects with detailed case study pages
- **About Section** - Personal story and background
- **Let's Connect** - Easy access to resume and social links
- **Responsive Design** - Mobile-first approach
- **Dark Mode** - Automatic dark mode support

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
│   ├── page.tsx          # Home page with all sections
│   ├── actions.ts        # Server actions
│   ├── api/              # Backend API routes
│   │   ├── contact/
│   │   └── projects/
│   ├── projects/         # Individual project pages
│   │   ├── ecommerce/
│   │   ├── fitness/
│   │   └── portfolio/
│   └── contact/          # Contact page
├── components/
│   ├── ProjectCard.tsx   # Project card component
│   ├── Button.tsx        # Reusable button component
│   ├── Card.tsx          # Card component
│   ├── ContactForm.tsx   # Contact form with API integration
│   ├── Navbar.tsx        # Navigation bar component
│   └── Footer.tsx        # Footer component
├── lib/
│   └── db.ts             # Database utilities
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
- ✅ Client and Server components
- ✅ API routes for backend functionality
- ✅ Smooth scroll navigation
- ✅ Project case study pages
- ✅ SEO-friendly with Next.js metadata
- ✅ Fast page loads with Next.js App Router

## Page Structure

### Home Page (`/`)
- Hero section with introduction
- Case studies showcase
- About me section
- Let's connect section

### Project Pages (`/projects/[slug]`)
- Project overview
- Role, timeline, and year
- Challenge and solution
- Technologies used
- Results and impact

## Customization

### Update Your Information

1. **Personal Details** - Edit [app/page.tsx](app/page.tsx):
   - Replace `[Your Name]` with your name
   - Update the introduction text
   - Modify the about section with your story

2. **Projects** - Update the projects array in [app/page.tsx](app/page.tsx):
   - Add your own projects
   - Update categories, titles, and descriptions
   - Create corresponding project pages in `app/projects/`

3. **Contact Info** - Update throughout:
   - Email addresses
   - Social media links (LinkedIn, GitHub, etc.)
   - Resume link

4. **Styling** - Customize in [tailwind.config.ts](tailwind.config.ts):
   - Update colors
   - Modify fonts
   - Adjust spacing and sizing

### Adding New Projects

1. Create a new folder in `app/projects/[project-name]/`
2. Add a `page.tsx` file with your project details
3. Add the project to the home page projects array
4. Update the href to match your new route

## Backend Capabilities

### API Routes
- `/api/contact` - Contact form endpoint
- `/api/projects` - Projects CRUD operations
- `/api/projects/[id]` - Individual project details

### Database Integration
Ready to connect to:
- MongoDB
- PostgreSQL (with Prisma)
- Firebase
- Supabase

See [BACKEND_GUIDE.md](BACKEND_GUIDE.md) for detailed instructions.

## License

MIT