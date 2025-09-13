import { useState } from "react";
import Masonry from "../ui/Masonry";
import Beams from "../ui/Beams";

interface ImageLightboxProps {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
  totalImages: number;
}

function ImageLightbox({
  isOpen,
  imageUrl,
  onClose,
  onPrevious,
  onNext,
  currentIndex,
  totalImages,
}: ImageLightboxProps) {
  if (!isOpen) return null;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") onPrevious();
    if (e.key === "ArrowRight") onNext();
    if (e.key === "Escape") onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      autoFocus
    >
      {/* Blur background */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white hover:text-green-400 transition-colors"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-green-400 transition-colors p-2"
        disabled={currentIndex === 0}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-green-400 transition-colors p-2"
        disabled={currentIndex === totalImages - 1}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-white bg-black/50 px-3 py-1 rounded-full">
        {currentIndex + 1} / {totalImages}
      </div>

      {/* Image container */}
      <div
        className="relative max-w-[90vw] max-h-[90vh] p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt="Zoomed view"
          className="w-full h-full object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}

export default function Gallery() {
  // Generate items array from local images, skipping image-48 and image-3.mov
  const imageNumbers = Array.from({ length: 62 }, (_, i) => i + 1).filter(
    (num) => num !== 48 && num !== 3,
  ); // Skip missing image-48 and video file

  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const items = imageNumbers.map((num, index) => ({
    id: num.toString(),
    img: `/images/image - ${num}.png`,
    url: `#image-${num}`,
    height: 300 + Math.random() * 400, // Random heights between 300-700px for masonry effect
    onClick: () => {
      setCurrentImageIndex(index);
      setLightboxImage(`/images/image - ${num}.png`);
    },
  }));

  const handlePrevious = () => {
    const newIndex =
      currentImageIndex > 0 ? currentImageIndex - 1 : imageNumbers.length - 1;
    setCurrentImageIndex(newIndex);
    setLightboxImage(`/images/image - ${imageNumbers[newIndex]}.png`);
  };

  const handleNext = () => {
    const newIndex =
      currentImageIndex < imageNumbers.length - 1 ? currentImageIndex + 1 : 0;
    setCurrentImageIndex(newIndex);
    setLightboxImage(`/images/image - ${imageNumbers[newIndex]}.png`);
  };

  const handleLoadingProgress = (loaded: number, total: number) => {
    const progress = Math.round((loaded / total) * 100);
    setLoadingProgress(progress);
    if (loaded === total) {
      setTimeout(() => setIsLoading(false), 500); // Small delay for smooth transition
    }
  };

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
        <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 text-white max-w-[98vw] sm:max-w-[95vw] w-full min-h-[90vh] shadow-2xl overflow-y-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-green-400">
            Family, Friend, Pets, and Life
          </h1>

          {/* Loading Bar */}
          {isLoading && (
            <div className="mb-8">
              <div className="text-center mb-4">
                <p className="text-green-400 text-lg">Loading Gallery...</p>
                <p className="text-white/70 text-sm">
                  {loadingProgress}% Complete
                </p>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
              <div className="text-center mt-2 text-white/50 text-xs">
                Loading {imageNumbers.length} images...
              </div>
            </div>
          )}

          {/* Gallery - hidden until loaded */}
          <div
            className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
          >
            <Masonry
              items={items}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
              onLoadingProgress={handleLoadingProgress}
            />
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        isOpen={lightboxImage !== null}
        imageUrl={lightboxImage || ""}
        onClose={() => setLightboxImage(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
        currentIndex={currentImageIndex}
        totalImages={imageNumbers.length}
      />
    </div>
  );
}
