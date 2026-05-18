import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  loading?: 'lazy' | 'eager';
}

export default function OptimizedImage({ src, alt, className, width, height, loading = 'lazy' }: OptimizedImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errorCount, setErrorCount] = useState(0);

  // Re-sync currentSrc and reset error if src prop changes
  useEffect(() => {
    setCurrentSrc(src);
    setErrorCount(0);
    setIsLoaded(false);
  }, [src]);

  // Professional elegant fallback if the primary image fails
  const fallbackSrc = "/assets/images/hero_dish.png"; // Reliable local hero asset as primary fallback
  const secondaryFallback = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop";

  const handleError = () => {
    if (errorCount === 0) {
      setCurrentSrc(fallbackSrc);
      setErrorCount(1);
      setIsLoaded(false);
    } else if (errorCount === 1) {
      setCurrentSrc(secondaryFallback);
      setErrorCount(2);
      setIsLoaded(false);
    } else {
      setErrorCount(3);
      setIsLoaded(true); // Stop trying to load
    }
  };

  return (
    <div className={cn("relative overflow-hidden bg-gray-100/50 backdrop-blur-sm", className)} style={{ width, height }}>
      <AnimatePresence mode="wait">
        {!isLoaded && errorCount < 3 && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-100/80 backdrop-blur-sm flex items-center justify-center z-10"
          >
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border-2 border-primary/10 border-t-primary rounded-full animate-spin mb-4" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-primary/40">Lumière</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.img
        src={currentSrc}
        alt={alt}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0, 
          scale: isLoaded ? 1 : 1.05,
          filter: isLoaded ? "blur(0px)" : "blur(10px)"
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        loading={loading}
        referrerPolicy="no-referrer"
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          !isLoaded && "invisible"
        )}
      />

      {errorCount > 0 && errorCount < 3 && isLoaded && (
        <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-md px-3 py-1.5 rounded-full text-[9px] text-primary uppercase font-black tracking-widest border border-primary/10 shadow-lg">
          Exclusive Content
        </div>
      )}

      {errorCount >= 3 && (
         <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg-light/95 backdrop-blur-md">
            <div className="w-12 h-12 border-[1px] border-primary/20 rounded-full animate-pulse opacity-20 mb-4" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-primary/30">Lumière Experience</span>
         </div>
      )}
    </div>
  );
}
