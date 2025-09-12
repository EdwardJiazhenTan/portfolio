import Card from "../components/Card";
import About from "../components/About/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Clock from "../components/Clock";
import Contacts from "../components/Contacts";
import Status from "../components/Status";
import { Link } from "react-router-dom";
import Beams from "../ui/Beams";
import Recent from "../components/Recent";
import AnimatedContent from "../ui/AnimatedContent";

export default function HomePage() {
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
      <div className="relative z-10 flex items-start justify-center min-h-screen pt-4 sm:pt-8 p-2 sm:p-4">
        <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 text-white max-w-[98vw] sm:max-w-[95vw] w-full min-h-[90vh] sm:h-[85vh] shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 h-full">
            <Card gridSpan="lg:col-span-9" className="lg:h-[100%] min-h-[400px]">
              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={true}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                delay={0}
              >
                <About />
              </AnimatedContent>
            </Card>

            <Card className="lg:col-span-3 lg:row-span-2 gap-4 lg:h-full min-h-[300px] overflow-hidden">
              <AnimatedContent
                distance={120}
                direction="horizontal"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                delay={0.4}
              >
                <div className="h-full flex flex-col space-y-4">
                  <div className="flex-1 overflow-y-auto">
                    <Skills />
                  </div>
                  <div className="flex-1 overflow-y-auto">
                    <Contacts />
                  </div>
                </div>
              </AnimatedContent>
            </Card>

            <Card gridSpan="lg:col-span-3" className="lg:h-[100%] min-h-[300px]">
              <AnimatedContent
                distance={120}
                direction="horizontal"
                reverse={true}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                delay={0.2}
              >
                <Recent />
              </AnimatedContent>
            </Card>

            <div className="lg:col-span-3 grid grid-rows-3 lg:grid-rows-[1fr_2fr_1fr] gap-4 lg:h-[100%] min-h-[300px]">
              <Card className="h-full flex items-center justify-center">
                <AnimatedContent
                  distance={100}
                  direction="vertical"
                  reverse={false}
                  duration={0.8}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  delay={0.6}
                >
                  <Clock />
                </AnimatedContent>
              </Card>
              <Card className="h-full flex items-center justify-center">
                <AnimatedContent
                  distance={100}
                  direction="vertical"
                  reverse={false}
                  duration={0.8}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  delay={0.7}
                >
                  <Status />
                </AnimatedContent>
              </Card>
              <Card className="h-full flex items-center justify-center cursor-pointer group">
                <Link to="/reading" className="w-full h-full flex items-center justify-center">
                  <AnimatedContent
                    distance={20}
                    direction="vertical"
                    reverse={false}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    delay={0.8}
                  >
                    <h1 className="text-sm sm:text-lg font-semibold group-hover:text-green-400 transition-colors text-center">Reading List</h1>
                  </AnimatedContent>
                </Link>
              </Card>
            </div>

            <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-4 gap-4 lg:h-[100%] min-h-[200px]">
              <Card className="h-full flex items-center justify-center cursor-pointer group">
                <Link to="/projects" className="w-full h-full flex items-center justify-center">
                  <AnimatedContent
                    distance={20}
                    direction="vertical"
                    reverse={false}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    delay={1.0}
                  >
                    <h1 className="text-sm sm:text-lg font-semibold group-hover:text-green-400 transition-colors text-center">Projects</h1>
                  </AnimatedContent>
                </Link>
              </Card>
              <Card className="h-full flex items-center justify-center cursor-pointer group">
                <a href="https://blog.edwardjtan.com/" className="w-full h-full flex items-center justify-center" target="_blank" rel="noopener noreferrer">
                  <AnimatedContent
                    distance={20}
                    direction="vertical"
                    reverse={false}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    delay={1.0}
                  >
                    <h1 className="text-sm sm:text-lg font-semibold group-hover:text-green-400 transition-colors text-center">Blogs</h1>
                  </AnimatedContent>
                </a>
              </Card>
              <Card className="h-full flex items-center justify-center">
                <AnimatedContent
                  distance={20}
                  direction="vertical"
                  reverse={false}
                  duration={0.8}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  delay={1.0}
                >
                  <h1 className="text-sm sm:text-lg font-semibold text-white/60 text-center">Playground</h1>
                </AnimatedContent>
              </Card>
              <Card className="h-full flex items-center justify-center">
                <AnimatedContent
                  distance={20}
                  direction="vertical"
                  reverse={false}
                  duration={0.8}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  delay={1.0}
                >
                  <h1 className="text-sm sm:text-lg font-semibold text-white/60 text-center">Image Gallery</h1>
                </AnimatedContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
