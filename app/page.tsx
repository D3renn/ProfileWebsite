import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h1 className="text-5xl font-bold text-center">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400">
          Full Stack Developer | Designer | Creator
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Link href="/about" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">About</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Learn more about my background and skills
            </p>
          </Link>
          
          <Link href="/projects" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">Projects</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Explore my latest work and creations
            </p>
          </Link>
          
          <Link href="/contact" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">Contact</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Get in touch for collaborations
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
