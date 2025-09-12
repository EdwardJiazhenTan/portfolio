interface ProjectCardProps {
  name: string;
  description: string;
  tech: string[];
  githubUrl: string;
}

export default function ProjectCard({ name, description, tech, githubUrl }: ProjectCardProps) {
  return (
    <div className="bg-black border border-white/20 rounded-lg p-6 hover:border-green-400/60 hover:shadow-green-400/20 hover:shadow-lg transition-all duration-300 space-y-4 group">
      <div>
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <span>{name}</span>
            <svg className="w-4 h-4 opacity-70 group-hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </h3>
        <p className="text-sm text-white/80 leading-relaxed mb-4">{description}</p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {tech.map((technology, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-xs border border-green-400/30"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}