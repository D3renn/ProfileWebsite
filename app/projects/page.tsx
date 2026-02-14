import { getProjects } from '@/app/actions';
import Card from '@/components/Card';

// This component runs on the SERVER
// No 'use client' directive = Server Component
export default async function ProjectsPage() {
  // This fetch happens on the server
  const projects = await getProjects();
  
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">My Projects</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Data fetched on the server
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.tech.join(', ')}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
