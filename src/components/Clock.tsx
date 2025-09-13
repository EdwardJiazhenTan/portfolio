import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white mb-2">
        {time.toLocaleTimeString()}
      </div>
      <div className="text-sm text-green-400">
        New York Time
      </div>
    </div>
  );
}
