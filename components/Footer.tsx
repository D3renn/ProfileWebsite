export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t py-8 text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <a 
          href="mailto:your.email@example.com" 
          className="text-lg font-semibold hover:text-gray-600 dark:hover:text-gray-400 transition-colors inline-block mb-4"
        >
          dylanloh20@gmail.com
        </a>
        
        <p className="text-gray-600 dark:text-gray-400">
          © {currentYear} Dylan Loh
        </p>
      </div>
    </footer>
  );
}
