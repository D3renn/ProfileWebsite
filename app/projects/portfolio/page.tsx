import Link from 'next/link';
import Footer from '@/components/Footer';

export default function PortfolioPage() {
  return (
    <>
      <main className="min-h-screen">
        <div className="px-6 py-8">
          <Link 
            href="/#case-studies" 
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </div>

        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-sm font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
              WEBSITE REDESIGN
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Portfolio Redesign
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              A modern redesign focused on improving user experience and showcasing work effectively
            </p>
          </div>
        </section>

        <section className="px-6 py-12 bg-gray-50 dark:bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Role</h3>
                <p className="text-gray-600 dark:text-gray-400">Full-Stack Developer & Designer</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Timeline</h3>
                <p className="text-gray-600 dark:text-gray-400">2 months</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Year</h3>
                <p className="text-gray-600 dark:text-gray-400">2026</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                A complete overhaul of a portfolio website with focus on clean design, fast performance, 
                and effective presentation of case studies and projects.
              </p>
              <p>
                The redesign prioritizes user experience with intuitive navigation, responsive layouts, 
                and engaging animations that bring the portfolio to life.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 bg-gray-50 dark:bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Framer Motion'].map(tech => (
                <span 
                  key={tech} 
                  className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
