interface CardProps {
  children: React.ReactNode;
  className?: string;
  gridSpan?: string;
}

export default function Card({ children, className = '', gridSpan = 'col-span-1' }: CardProps) {
  return (
    <div className={`bg-black border border-white/20 rounded-lg p-6 hover:border-green-400/60 hover:shadow-green-400/20 hover:shadow-lg transition-all duration-300 ${className} ${gridSpan}`}>
      {children}
    </div>
  );
}
