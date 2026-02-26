import Link from 'next/link';
import Footer from '@/components/Footer';

export default function EcommercePage() {
  return (
    <>
      <main className="min-h-screen">
        {/* Back Button */}
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

        {/* Project Header */}
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-sm font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
              WEB APPLICATION
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              E-Commerce Platform
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              A full-stack online marketplace with real-time inventory management and secure payment processing
            </p>
          </div>
        </section>

        {/* Project Details */}
        <section className="px-6 py-12 bg-gray-50 dark:bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="font-semibold mb-2">Role</h3>
                <p className="text-gray-600 dark:text-gray-400">Full-Stack Developer</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Timeline</h3>
                <p className="text-gray-600 dark:text-gray-400">3 months</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Year</h3>
                <p className="text-gray-600 dark:text-gray-400">2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                This project involved building a comprehensive e-commerce platform from the ground up, 
                featuring a modern shopping experience with real-time inventory tracking and seamless 
                checkout process.
              </p>
              <p>
                The platform handles thousands of products across multiple categories, with advanced 
                search and filtering capabilities to help users find exactly what they need.
              </p>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="px-6 py-12 bg-gray-50 dark:bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Creating a scalable platform that could handle high traffic during peak shopping seasons 
              while maintaining fast load times and providing a smooth user experience across all devices.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Solution</h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Modern Tech Stack
                </h3>
                <p>
                  Built with Next.js for optimal performance, TypeScript for type safety, and 
                  integrated Stripe for secure payment processing.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Real-Time Updates
                </h3>
                <p>
                  Implemented WebSocket connections for live inventory updates and order status tracking, 
                  ensuring customers always see accurate product availability.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Responsive Design
                </h3>
                <p>
                  Designed with mobile-first approach using Tailwind CSS, providing a seamless 
                  experience from smartphones to desktop computers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="px-6 py-12 bg-gray-50 dark:bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'].map(tech => (
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

        {/* Results */}
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 dark:bg-gray-900/30 rounded-xl">
                <div className="text-4xl font-bold mb-2">50%</div>
                <p className="text-gray-600 dark:text-gray-400">Faster load times</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-900/30 rounded-xl">
                <div className="text-4xl font-bold mb-2">10K+</div>
                <p className="text-gray-600 dark:text-gray-400">Active users</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-900/30 rounded-xl">
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <p className="text-gray-600 dark:text-gray-400">Uptime</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
