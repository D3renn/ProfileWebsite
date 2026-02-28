import Link from 'next/link';

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  href: string;
  techStack?: string[];
  comingSoon?: boolean;
}

export default function ProjectCard({
  category,
  title,
  description,
  href,
  techStack = [],
  comingSoon = false,
}: ProjectCardProps) {
  const inner = (
    <div className="flex flex-col gap-3 px-7 pt-7 pb-6 h-full">
      <span className="text-xs font-bold tracking-widest uppercase text-neutral-400">
        {category}
      </span>

      <h3 className="text-2xl font-bold text-black leading-snug">
        {title}
        {comingSoon && (
          <span className="ml-3 text-sm font-normal text-neutral-400">(Coming Soon)</span>
        )}
      </h3>

      <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2">{description}</p>

      {techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-1">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  if (comingSoon) {
    return (
      <div className="bg-white border border-neutral-200 rounded-[20px] shadow-sm opacity-60 cursor-not-allowed">
        {inner}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="block bg-white border border-neutral-200 rounded-[20px] shadow-sm hover:shadow-md hover:scale-[1.015] transition-all duration-200 h-full"
    >
      {inner}
    </Link>
  );
}
