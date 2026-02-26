import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';

export default function Home() {
  const projects = [
    {
      category: 'WEB APPLICATION',
      title: 'E-Commerce Platform',
      description: 'A full-stack online marketplace with real-time inventory management and secure payment processing',
      href: '/projects/ecommerce',
      image: null
    },
    {
      category: 'MOBILE APPLICATION',
      title: 'Fitness Tracker',
      description: 'A mobile app empowering fitness journeys with personalized workouts and progress tracking',
      href: '/projects/fitness',
      image: null
    },
    {
      category: 'WEBSITE REDESIGN',
      title: 'Portfolio Redesign',
      description: 'A modern redesign focused on improving user experience and showcasing work effectively',
      href: '/projects/portfolio',
      image: null
    },
  ];

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-4xl w-full">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Hi,
            </h1>
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              I'm [Your Name]!
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              A full-stack developer passionate about creating intuitive, user-centered applications 
              that solve real-world problems — now building modern web experiences that make an impact.
            </p>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="px-6 py-20 bg-gray-50 dark:bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Case Studies</h2>
            
            <div className="space-y-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                My journey into development has been shaped by my passion for problem-solving, 
                creating elegant solutions, and building products that help people. Whether working 
                on a complex backend system or crafting pixel-perfect interfaces, I've consistently 
                approached my work with a user-centered mindset.
              </p>
              
              <p>
                What excites me about full-stack development is the opportunity to create complete, 
                intuitive solutions that empower people. I believe great software is more than just 
                clean code—it's about crafting thoughtful experiences that truly serve the needs of 
                the people who use them.
              </p>
              
              <p>
                My diverse background in both frontend and backend technologies provides a unique 
                perspective on creating impactful, scalable solutions. I'm eager to learn, grow, 
                and collaborate with others to build products that connect with people in a meaningful way.
              </p>
            </div>
          </div>
        </section>

        {/* Let's Connect Section */}
        <section id="contact" className="px-6 py-20 bg-gray-50 dark:bg-gray-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-4">
              Like What You See?
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Let's Connect!</h2>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <Link 
                href="/resume.pdf" 
                target="_blank"
                className="px-8 py-3 border-2 border-gray-800 dark:border-gray-200 rounded-lg font-semibold hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900 transition-all"
              >
                Resume
              </Link>
              <Link 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank"
                className="px-8 py-3 border-2 border-gray-800 dark:border-gray-200 rounded-lg font-semibold hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900 transition-all"
              >
                LinkedIn
              </Link>
              <Link 
                href="https://github.com/yourusername" 
                target="_blank"
                className="px-8 py-3 border-2 border-gray-800 dark:border-gray-200 rounded-lg font-semibold hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900 transition-all"
              >
                GitHub
              </Link>
            </div>
            
            <a 
              href="mailto:your.email@example.com" 
              className="text-xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              your.email@example.com
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
