
export default function Skill() {
  const skillCategories = {
    "Programming": ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "FastAPI", "Rust", "SQL"],
    "Languages": ["English", "Mandarin"],
    "Tools & Cloud": ["Linux", "Docker", "Jest", "Git", "CI/CD", "AWS (EC2, RDS, S3)", "Vercel", "Nginx", "Redis"]
  };

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-white">Skills</h1>
      
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="space-y-2">
          <h2 className="text-sm font-semibold text-white">{category}</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-green-400/20 text-green-400 rounded-full text-xs border border-green-400/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
      
      <p className="text-xs text-white/70 leading-relaxed pt-2">
        Arch Linux & Neovim enthusiast
      </p>
    </div>
  );
}
