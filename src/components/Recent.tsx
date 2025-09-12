export default function Recent() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Recent Activities</h1>
      
      <div>
        <h2 className="text-lg font-semibold mb-2 text-green-400">Currently Reading</h2>
        <ul className="space-y-1 text-sm">
          <li>• Practical Vim</li>
          <li>• Just for Fun - Linus Torvalds</li>
          <li>• The Rust Programming Language</li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2 text-green-400">Working On</h2>
        <ul className="space-y-1 text-sm">
          <li>• Rebuilding LeetTrack with Next.js</li>
          <li>• Discord music bot for friends</li>
          <li>• Neural network from scratch in Python</li>
        </ul>
      </div>
    </div>
  );
}
