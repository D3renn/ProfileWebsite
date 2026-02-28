interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function Card({ title, description, icon, className = '' }: CardProps) {
  return (
    <div className={`p-6 border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 ${className}`}>
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
