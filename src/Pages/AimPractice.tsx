import { useState, useEffect, useRef, useCallback } from "react";
import CrossHair from "../ui/CrossHair";

interface Ball {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function AimPractice() {
  const [gameState, setGameState] = useState<
    "waiting" | "playing" | "finished"
  >("waiting");
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [balls, setBalls] = useState<Ball[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | null>(null);
  const ballIdRef = useRef(0);

  const generateRandomBall = useCallback((): Ball => {
    const container = containerRef.current;
    if (!container) {
      return { id: ballIdRef.current++, x: 200, y: 200, size: 40 };
    }

    const rect = container.getBoundingClientRect();
    const ballSize = 40;
    const padding = ballSize;

    return {
      id: ballIdRef.current++,
      x: Math.random() * (rect.width - ballSize - padding * 2) + padding,
      y: Math.random() * (rect.height - ballSize - padding * 2) + padding,
      size: ballSize,
    };
  }, []);

  const startGame = () => {
    setGameState("playing");
    setTimeLeft(30);
    setScore(0);
    setBalls([
      generateRandomBall(),
      generateRandomBall(),
      generateRandomBall(),
    ]);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameState("finished");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const hitBall = (ballId: number) => {
    setBalls((prevBalls) => {
      const newBalls = prevBalls.filter((ball) => ball.id !== ballId);
      newBalls.push(generateRandomBall());
      return newBalls;
    });
    setScore((prev) => prev + 1);
  };

  const resetGame = () => {
    setGameState("waiting");
    setTimeLeft(30);
    setScore(0);
    setBalls([]);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black font-['Audiowide'] overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-full h-screen flex items-center justify-center"
      >
        {gameState === "playing" && (
          <CrossHair color="#22c55e" containerRef={containerRef} />
        )}

        {gameState === "waiting" && (
          <div className="text-center">
            <h1 className="text-4xl text-white mb-8">Aim Practice</h1>
            <p className="text-gray-300 mb-6">
              Click the balls as fast as you can!
            </p>
            <button
              onClick={startGame}
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xl font-bold transition-colors"
            >
              Start Game
            </button>
          </div>
        )}

        {gameState === "playing" && (
          <>
            <div className="absolute top-4 left-4 text-white z-10">
              <div className="text-2xl">Time: {timeLeft}s</div>
              <div className="text-2xl">Score: {score}</div>
            </div>

            {balls.map((ball) => (
              <div
                key={ball.id}
                className="absolute bg-red-500 rounded-full cursor-crosshair hover:bg-red-400 transition-colors"
                style={{
                  left: ball.x,
                  top: ball.y,
                  width: ball.size,
                  height: ball.size,
                }}
                onClick={() => hitBall(ball.id)}
              />
            ))}
          </>
        )}

        {gameState === "finished" && (
          <div className="text-center">
            <h1 className="text-4xl text-white mb-4">Game Over!</h1>
            <p className="text-2xl text-green-400 mb-6">Final Score: {score}</p>
            <p className="text-gray-300 mb-6">
              Accuracy:{" "}
              {score > 0 ? Math.round((score / (score + 3)) * 100) : 0}%
            </p>
            <button
              onClick={resetGame}
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xl font-bold transition-colors"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
