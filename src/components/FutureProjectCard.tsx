interface FutureProjectCardProps {
  name: string;
  description: string;
  tech: string[];
  status: string;
}

export default function FutureProjectCard({ name, description, tech, status }: FutureProjectCardProps) {
  return (
    <div className="bg-black border border-white/20 rounded-lg p-6 hover:border-green-400/60 hover:shadow-green-400/20 hover:shadow-lg transition-all duration-300 space-y-4">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {name}
          </h3>
          <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-xs border border-blue-400/30">
            {status}
          </span>
        </div>
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