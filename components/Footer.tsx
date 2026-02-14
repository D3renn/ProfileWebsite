export default function Footer() {
  return (
    <footer className="w-full border-t py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-400">
              © 2026 Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
