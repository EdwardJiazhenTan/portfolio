import ProjectCard from '../components/ProjectCard';
import FutureProjectCard from '../components/FutureProjectCard';
import Beams from '../ui/Beams';

export default function Projects() {
  return (
    <div className="relative min-h-screen bg-black font-['Audiowide']">
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={4.4}
          beamHeight={30}
          beamNumber={20}
          lightColor="#22c55e"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>
      <div className="relative z-10 flex items-start justify-center min-h-screen pt-8 p-4">
        <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-8 text-white max-w-6xl w-full min-h-[85vh] shadow-2xl overflow-y-auto">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8 text-center">My Projects</h1>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold text-green-400 mb-6">Current Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              name="Coding Interview Prep"
              description="Platform for coding interview practice"
              tech={["React", "TypeScript"]}
              githubUrl="https://github.com/EdwardJiazhenTan/interview-prep"
            />
            
            <ProjectCard 
              name="Personal Blog"
              description="Minimalist blog platform"
              tech={["Next.js"]}
              githubUrl="https://github.com/EdwardJiazhenTan/blog"
            />
            
            <ProjectCard 
              name="3D Gaussian Splat Renderer"
              description="Real-time 3D rendering with Gaussian Splatting"
              tech={["React", "WebGL"]}
              githubUrl="https://github.com/EdwardJiazhenTan/react-gaussian-splat"
            />
            
            <ProjectCard 
              name="VoiceSync AI"
              description="Digital twin voice synchronization"
              tech={["Python", "AI"]}
              githubUrl="https://github.com/EdwardJiazhenTan/VoiceSync-AI"
            />
            
            <ProjectCard 
              name="RustDrop"
              description="HTTP File Transfer Tool"
              tech={["Rust"]}
              githubUrl="https://github.com/EdwardJiazhenTan/RustDrop"
            />
            
                <ProjectCard 
                  name="Markdawn"
                  description="Markdown Renderer"
                  tech={["Rust"]}
                  githubUrl="https://github.com/EdwardJiazhenTan/markdawn"
                />
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-6">Future Project Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FutureProjectCard 
                  name="Custom EC Split Keyboard"
                  description="Design and build my own ergonomic split keyboard with hot-swappable switches, custom firmware, and wireless connectivity"
                  tech={["KiCad", "QMK Firmware", "C", "3D Printing", "Electronics"]}
                  status="Planning"
                />
                
                <FutureProjectCard 
                  name="Light Linux System from Scratch"
                  description="Build a minimal Linux distribution from the ground up, focusing on performance and customization for development work"
                  tech={["Linux", "Assembly", "C", "Shell Scripting", "Build Systems"]}
                  status="Research"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}