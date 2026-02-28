// Example database utility file
// In a real app, you'd use Prisma, MongoDB, PostgreSQL, etc.

export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

// Simulated database (in real app, this would be Prisma/MongoDB client)
class Database {
  private users: User[] = [];
  private projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack online store with payment integration',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: 'https://github.com/user/ecommerce',
      liveUrl: 'https://mystore.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task tracker with real-time updates',
      technologies: ['Next.js', 'TypeScript', 'Firebase'],
      githubUrl: 'https://github.com/user/tasks'
    }
  ];

  // User operations
  async createUser(name: string, email: string): Promise<User> {
    const user: User = {
      id: this.users.length + 1,
      name,
      email,
      createdAt: new Date()
    };
    this.users.push(user);
    return user;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.find(u => u.id === id);
  }

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }

  // Project operations
  async getAllProjects(): Promise<Project[]> {
    // Simulate database query delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return this.projects;
  }

  async getProjectById(id: number): Promise<Project | undefined> {
    return this.projects.find(p => p.id === id);
  }

  async createProject(project: Omit<Project, 'id'>): Promise<Project> {
    const newProject: Project = {
      id: this.projects.length + 1,
      ...project
    };
    this.projects.push(newProject);
    return newProject;
  }
}

// Export singleton instance
export const db = new Database();

// Real-world example with Prisma would look like:
/*
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
*/
