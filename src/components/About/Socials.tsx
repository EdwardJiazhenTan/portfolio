interface SocialsProps {
  content: React.ReactNode | string;
  color: string;
}

export default function Socials({ content, color }: SocialsProps) {
  return (
    <button 
      className="bg-black text-white rounded-lg p-3 border-2 hover:bg-gray-800 transition-colors"
      style={{ borderColor: color }}
    >
      {typeof content === 'string' ? (
        <span className="font-medium">{content}</span>
      ) : (
        content
      )}
    </button>
  );
}