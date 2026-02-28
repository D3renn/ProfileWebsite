import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import PhotoCarousel from '@/components/PhotoCarousel';

export default function Home() {
  const projects = [
    {
      id: 'ecommerce',
      category: 'WEB APPLICATION',
      title: 'E-Commerce Platform',
      description: 'A full-stack online marketplace with real-time inventory management and secure payment processing.',
      body: [
        'Built a complete marketplace from the ground up — product listings, cart, checkout, and an admin dashboard all in one cohesive system.',
        'Integrated Stripe for secure payments and implemented real-time inventory updates using WebSockets, ensuring customers always see accurate stock levels.',
        'Focused on performance and mobile-first design, achieving sub-second load times and a seamless checkout flow that reduced drop-off significantly.',
      ],
      href: '/projects/ecommerce',
      techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'WebSockets'],
    },
    {
      id: 'fitness',
      category: 'MOBILE APPLICATION',
      title: 'Fitness Tracker',
      description: 'A mobile app empowering fitness journeys with personalized workouts and progress tracking.',
      body: [
        'Designed a workout tracking app that adapts to the user — whether they are a beginner building a habit or an athlete chasing a personal best.',
        'Features include custom workout plans, exercise logging with sets and reps, progress charts, and streak tracking to keep motivation high.',
        'Built with React Native for cross-platform support, with a Node.js backend storing workout history and surfacing weekly insights.',
      ],
      href: '/projects/fitness',
      techStack: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'Chart.js'],
    },
    {
      id: 'portfolio',
      category: 'WEBSITE REDESIGN',
      title: 'Portfolio Redesign',
      description: 'A modern redesign focused on improving user experience and showcasing work effectively.',
      body: [
        'Took an outdated portfolio and rebuilt it from scratch with a clear information hierarchy, smooth interactions, and a design that lets the work speak for itself.',
        'Introduced a case study format that tells the story behind each project — the problem, the process, and the outcome — rather than just listing technologies.',
        'Shipped with Next.js and Tailwind CSS, with a focus on accessibility, fast load times, and a layout that works beautifully across all screen sizes.',
      ],
      href: '/projects/portfolio',
      techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-4xl w-full text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 flex flex-wrap items-center justify-center gap-x-5">
              <span>Hi,</span>
              <span className="profile-img-wrapper inline-block">
                <span className="inline-block w-20 h-20 md:w-24 md:h-24 overflow-hidden border-4 shadow-lg profile-img cursor-pointer">
                  <img
                    src="https://framerusercontent.com/images/5647IxUJFIfhXfqhK4lt63DaI.jpg"
                    alt="Dylan"
                    className="w-full h-full object-cover object-center"
                  />
                </span>
              </span>
              <span>I'm Dylan!</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed max-w-3xl mx-auto">
                Full-stack developer crafting user-centered products that solve real business problems.
            </p>
            {/* Scroll down arrow */}
            <div className="mt-14 flex justify-center">
              <a href="#case-studies" aria-label="Scroll down" className="scroll-arrow text-[#202020] hover:text-neutral-600 transition-colors">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="px-6 py-20 bg-[#f8f8f8]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl text-center font-medium mb-12 font-serif">
              <Link href="/projects" className="hover:opacity-70 transition-opacity">Projects</Link>
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    category={project.category}
                    title={project.title}
                    description={project.description}   
                    href={project.href}
                    techStack={project.techStack}
                  />
              ))}
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              {/* Left: text */}
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-medium mb-10 font-serif">About Me</h2>
                <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
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

              {/* Right: photo carousel */}
              <div className="w-full md:w-80 flex-shrink-0">
                <PhotoCarousel />
              </div>
            </div>
          </div>
        </section>

        {/* Let's Connect Section */}
        <section id="contact" className="px-6 py-20 bg-[#f8f8f8]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-neutral-600 mb-4">
              Like What You See?
            </p>
            <h2 className="text-6xl md:text-8xl font-bold mb-12">Let's Connect!</h2>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <Link 
                href="/resume.pdf" 
                target="_blank"
                className="px-8 py-3 border-1 border-black rounded-lg font-semibold hover:bg-black hover:text-amber-50 transition-all"
              >
                Resume
              </Link>
              <Link 
                href="https://www.linkedin.com/in/dylan-loh-3a4390306" 
                target="_blank"
                className="px-8 py-3 border-1 border-black rounded-lg font-semibold hover:bg-black hover:text-amber-50 transition-all"
              >
                LinkedIn
              </Link>
              <Link 
                href="https://github.com/D3renn" 
                target="_blank"
                className="px-8 py-3 border-1 border-black rounded-lg font-semibold hover:bg-black hover:text-amber-50 transition-all"
              >
                GitHub
              </Link>
            </div>
            
            <a 
              href="mailto:dylanloh20@gmail.com" 
              className="text-xl text-neutral-700 hover:text-black transition-colors"
            >
              dylanloh20@gmail.com
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
