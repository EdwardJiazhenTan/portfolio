import ReadingCard from '../components/ReadingCard';
import Beams from '../ui/Beams';

export default function Reading() {
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
        <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-8 text-white max-w-6xl w-full min-h-[85vh] shadow-2xl overflow-y-auto">
          <h1 className="text-3xl sm:text-6xl font-bold text-white mb-6 sm:mb-8 text-center">Books I Recommend</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-green-400 mb-4">Technical</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ReadingCard 
                  title="Computer Systems: A Programmer's Perspective" 
                  author="Randal E. Bryant, David R. O'Hallaron" 
                  reason="Essential for understanding how computers work at the lowest level" 
                />
                <ReadingCard 
                  title="Clean Code" 
                  author="Robert C. Martin" 
                  reason="Teaches principles for writing maintainable and readable code" 
                />
                <ReadingCard 
                  title="The Rust Programming Language" 
                  author="Steve Klabnik, Carol Nichols" 
                  reason="Best resource for learning Rust's memory safety and performance features" 
                />
                <ReadingCard 
                  title="Practical Vim" 
                  author="Drew Neil" 
                  reason="Master the most powerful text editor for efficient coding" 
                />
                <ReadingCard 
                  title="Automate the Boring Stuff with Python" 
                  author="Al Sweigart" 
                  reason="Perfect introduction to Python automation and scripting" 
                />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-green-400 mb-4">Biographies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ReadingCard 
                  title="Steve Jobs" 
                  author="Walter Isaacson" 
                  reason="Fascinating look at the mind behind Apple's innovation" 
                />
                <ReadingCard 
                  title="Fire in the Valley" 
                  author="Paul Freiberger, Michael Swaine" 
                  reason="Chronicles the birth of the personal computer revolution" 
                />
                <ReadingCard 
                  title="The Unix Haters Handbook" 
                  author="Simson Garfinkel" 
                  reason="Humorous yet insightful critique of Unix systems" 
                />
                <ReadingCard 
                  title="Just for Fun" 
                  author="Linus Torvalds" 
                  reason="The story behind Linux from its creator himself" 
                />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-green-400 mb-4">Chinese Literature</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ReadingCard 
                  title="目送" 
                  author="龙应台" 
                  reason="Moving reflections on family, life transitions, and letting go" 
                />
                <ReadingCard 
                  title="青铜葵花" 
                  author="曹文轩" 
                  reason="Beautiful story of friendship and resilience in rural China" 
                />
                <ReadingCard 
                  title="明朝那些事儿" 
                  author="当年明月" 
                  reason="Engaging historical narrative that brings Ming Dynasty to life" 
                />
                <ReadingCard 
                  title="平凡的世界" 
                  author="路遥" 
                  reason="Epic tale of ordinary people pursuing extraordinary dreams" 
                />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-green-400 mb-4">Novels</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ReadingCard 
                  title="龙族" 
                  author="江南" 
                  reason="Thrilling urban fantasy with dragons and modern technology" 
                />
                <ReadingCard 
                  title="小李飞刀" 
                  author="古龙" 
                  reason="Classic wuxia with unforgettable characters and philosophy" 
                />
                <ReadingCard 
                  title="楚留香传奇" 
                  author="古龙" 
                  reason="Elegant martial arts stories with a charismatic protagonist" 
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
