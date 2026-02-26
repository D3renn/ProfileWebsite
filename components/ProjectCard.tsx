import Link from 'next/link';

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  href: string;
  image?: string | null;
  comingSoon?: boolean;
}

export default function ProjectCard({ 
  category, 
  title, 
  description, 
  href, 
  image,
  comingSoon = false 
}: ProjectCardProps) {
  const CardContent = () => (
    <>
      <div className="mb-4">
        <span className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
          {category}
        </span>
      </div>
      
      <h3 className="text-2xl md:text-3xl font-bold mb-4">
        {title}
        {comingSoon && (
          <span className="ml-3 text-sm font-normal text-gray-500 dark:text-gray-400">
            (Coming Soon)
          </span>
        )}
      </h3>
      
      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </>
  );

  if (comingSoon) {
    return (
      <div className="block p-8 md:p-10 border-2 border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800/50 opacity-75 cursor-not-allowed">
        <CardContent />
      </div>
    );
  }

  return (
    <Link 
      href={href}
      className="block p-8 md:p-10 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800/50 group"
    >
      <CardContent />
      
      <div className="mt-6 flex items-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
        <span className="font-semibold">View Case Study</span>
        <svg 
          className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
