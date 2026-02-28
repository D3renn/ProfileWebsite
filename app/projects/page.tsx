import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';

const projects = [
  {
    id: 'ecommerce',
    category: 'WEB APPLICATION',
    title: 'E-Commerce Platform',
    description: 'A full-stack online marketplace with real-time inventory management and secure payment processing.',
    href: '/projects/ecommerce',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'WebSockets'],
  },
  {
    id: 'fitness',
    category: 'MOBILE APPLICATION',
    title: 'Fitness Tracker',
    description: 'A mobile app empowering fitness journeys with personalized workouts and progress tracking.',
    href: '/projects/fitness',
    techStack: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'Chart.js'],
  },
  {
    id: 'portfolio',
    category: 'WEBSITE REDESIGN',
    title: 'Portfolio Redesign',
    description: 'A modern redesign focused on improving user experience and showcasing work effectively.',
    href: '/projects/portfolio',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 py-20 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition-colors mb-12"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Back to Home
          </Link>

          <h1 className="text-5xl md:text-6xl font-medium font-serif mb-4">Projects</h1>
          <p className="text-lg text-neutral-500 mb-14">A selection of things I&apos;ve built.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

