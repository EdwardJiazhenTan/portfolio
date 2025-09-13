interface SocialsProps {
  content: React.ReactNode | string;
  color: string;
  url?: string;
  onClick?: () => void;
}

export default function Socials({
  content,
  color,
  url,
  onClick,
}: SocialsProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <button
      className="bg-black text-white rounded-lg px-6 py-2 border-2 hover:bg-gray-800 transition-colors min-w-[80px] h-10 flex items-center justify-center"
      style={{ borderColor: color }}
      onClick={handleClick}
    >
      {typeof content === "string" ? (
        <span className="font-medium text-sm">{content}</span>
      ) : (
        <span className="text-lg">{content}</span>
      )}
    </button>
  );
}
