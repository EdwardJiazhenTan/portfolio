interface ReadingCardProps {
  title: string;
  author: string;
  reason: string;
  image?: string;
}

export default function ReadingCard({ title, author, reason, image }: ReadingCardProps) {
  return (
    <div className="bg-black border border-white/20 rounded-lg p-6 hover:border-green-400/60 hover:shadow-green-400/20 hover:shadow-lg transition-all duration-300 space-y-3">
      {image && <img src={image} alt={title} className="w-full h-32 object-cover rounded-md" />}
      <div>
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-sm text-green-400 mb-2">by {author}</p>
        <p className="text-sm text-white/80 leading-relaxed">{reason}</p>
      </div>
    </div>
  );
}