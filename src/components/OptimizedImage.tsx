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

  // Professional elegant fallback if the primary image fails
  const fallbackSrc = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop";

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

      {error && isLoaded && (
        <div className="absolute top-2 right-2 bg-primary/20 backdrop-blur-md px-2 py-1 rounded text-[8px] text-primary uppercase font-bold tracking-widest">
          Fallback
        </div>
      )}

      {error && !isLoaded && (
         <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100/80 backdrop-blur-sm">
            <div className="w-6 h-6 border-[1px] border-primary/20 rounded-full animate-ping opacity-20" />
            <span className="mt-3 text-[9px] uppercase tracking-[0.2em] font-black text-primary/40">Lumière</span>
         </div>
      )}
    </div>
  );
}
