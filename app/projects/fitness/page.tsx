import Link from 'next/link';
import Footer from '@/components/Footer';

export default function FitnessPage() {
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
              MOBILE APPLICATION
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Fitness Tracker
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              A mobile app empowering fitness journeys with personalized workouts and progress tracking
            </p>
          </div>
        </section>

        <section className="px-6 py-12 bg-gray-50 dark:bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Role</h3>
                <p className="text-gray-600 dark:text-gray-400">Mobile Developer</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Timeline</h3>
                <p className="text-gray-600 dark:text-gray-400">4 months</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Year</h3>
                <p className="text-gray-600 dark:text-gray-400">2025</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Fitness Tracker is a comprehensive mobile application designed to help users achieve 
                their fitness goals through personalized workout plans, nutrition tracking, and 
                community support.
              </p>
              <p>
                The app features workout video tutorials, progress analytics, and social features 
                that keep users motivated and engaged.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 bg-gray-50 dark:bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {['React Native', 'TypeScript', 'Firebase', 'Redux', 'Expo'].map(tech => (
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
