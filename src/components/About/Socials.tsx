interface SocialsProps {
  content: React.ReactNode | string;
  color: string;
  url?: string;
}

export default function Socials({ content, color, url }: SocialsProps) {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank", "noonpener, noreferrer");
    }
  };

  return (
    <button
      className="bg-black text-white rounded-lg p-3 border-2 hover:bg-gray-800 transition-colors"
      style={{ borderColor: color }}
      onClick={handleClick}
    >
      {typeof content === "string" ? (
        <span className="font-medium">{content}</span>
      ) : (
        content
      )}
    </button>
  );
}

