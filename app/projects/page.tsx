// app/projects/page.tsx
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with inventory management, payment processing, and customer analytics.",
      image: "/images/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Application"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description: "Patient management platform with appointment scheduling, medical records, and insurance processing.",
      image: "/images/projects/healthcare.jpg",
      technologies: ["Angular", "Express", "PostgreSQL", "AWS"],
      category: "Web Application"
    },
    {
      id: 3,
      title: "Logistics Mobile App",
      description: "Real-time tracking and management app for delivery operations with driver routing and customer notifications.",
      image: "/images/projects/logistics.jpg",
      technologies: ["React Native", "Firebase", "Google Maps API"],
      category: "Mobile App"
    },
    {
      id: 4,
      title: "Cloud Migration for Financial Services",
      description: "Complete infrastructure migration from on-premise to cloud with enhanced security and compliance measures.",
      image: "/images/projects/cloud.jpg",
      technologies: ["AWS", "Terraform", "Docker", "Kubernetes"],
      category: "Cloud Solution"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Our Projects</h1>
      <p className="text-xl text-gray-600 mb-8">Delivering innovative solutions across industries</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-6">
        <span className="text-sm font-medium text-blue-600">{project.category}</span>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        
        <Link href={`/projects/${project.id}`} className="text-blue-600 font-medium hover:text-blue-800">
          View Details →
        </Link>
      </div>
    </div>
  );
}