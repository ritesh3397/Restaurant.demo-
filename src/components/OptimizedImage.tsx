import { useState } from 'react';
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Fallback to a high-quality placeholder if both fail
  const fallbackSrc = `https://picsum.photos/seed/${alt.replace(/\s+/g, '')}/800/800`;

  return (
    <div className={cn("relative overflow-hidden bg-gray-100/50 backdrop-blur-sm", className)} style={{ width, height }}>
      <AnimatePresence>
        {!isLoaded && !error && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-200/50 animate-pulse flex items-center justify-center"
          >
            <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.img
        src={error ? fallbackSrc : src}
        alt={alt}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          if (!error) {
            setError(true);
            setIsLoaded(false); // Trigger reload with fallback
          }
        }}
        loading={loading}
        referrerPolicy="no-referrer"
        className={cn(
          "w-full h-full object-cover",
          !isLoaded && "invisible"
        )}
      />

      {error && !isLoaded && (
         <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-400 text-[10px] text-center p-4">
            <span className="mb-1 opacity-50">Image unavailable</span>
            <span className="text-[8px] opacity-30 italic">Trying fallback...</span>
         </div>
      )}
    </div>
  );
}
