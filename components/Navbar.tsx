import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">
            Portfolio
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
          
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
