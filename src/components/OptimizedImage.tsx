import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { getFallbackUrl } from '@/src/lib/images';

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

  // Initialize with src but also handle the case where it might be undefined
  useEffect(() => {
    if (src) {
      setCurrentSrc(src);
      setErrorCount(0);
      setIsLoaded(false);
    }
  }, [src]);

  const handleError = () => {
    // Prevent infinite loop
    if (errorCount < 3) {
      const nextFallback = getFallbackUrl(alt, errorCount + 1);
      if (nextFallback && nextFallback !== currentSrc) {
        setCurrentSrc(nextFallback);
        setErrorCount(prev => prev + 1);
        setIsLoaded(false);
      } else {
        setErrorCount(4);
        setIsLoaded(true);
      }
    } else {
      setErrorCount(4);
      setIsLoaded(true);
    }
  };

  return (
    <div 
      className={cn(
        "relative overflow-hidden bg-gray-100/30 backdrop-blur-sm shadow-inner transition-all duration-300", 
        className,
        !isLoaded && "animate-pulse"
      )} 
      style={{ width, height }}
    >
      <AnimatePresence mode="wait">
        {!isLoaded && errorCount < 3 && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-bg-warm/20 backdrop-blur-md flex items-center justify-center z-10"
          >
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 border-[1.5px] border-primary/10 border-t-primary rounded-full animate-spin mb-3" />
              <span className="text-[7px] uppercase tracking-[0.4em] font-black text-primary/20">Lumière</span>
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
          filter: isLoaded ? "blur(0px)" : "blur(15px)"
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onLoad={() => {
          setIsLoaded(true);
        }}
        onError={handleError}
        loading={loading}
        decoding="async"
        fetchPriority={loading === 'eager' ? 'high' : 'auto'}
        referrerPolicy="no-referrer"
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          !isLoaded && "opacity-0"
        )}
      />

      {errorCount >= 3 && (
         <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg-light/95 backdrop-blur-md px-6 text-center border border-primary/5">
            <div className="w-8 h-8 border border-primary/10 rounded-full flex items-center justify-center text-primary/20 mb-2">
              <span className="text-[10px] font-serif">L</span>
            </div>
            <span className="text-[7px] uppercase tracking-[0.4em] font-black text-primary/20 leading-relaxed">
              Selection In<br/>Preparation
            </span>
         </div>
      )}
    </div>
  );
}
