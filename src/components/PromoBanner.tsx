import { motion } from 'motion/react';
import { Sparkles, X } from 'lucide-react';
import { useState } from 'react';

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      className="bg-primary text-white overflow-hidden relative z-[60]"
    >
      <div className="py-2 px-6 flex items-center justify-center">
        <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
          <Sparkles size={14} className="animate-pulse" />
          <span>Opening Offer: Use code <span className="underline decoration-2 underline-offset-2">LUMIERE26</span> for 20% Off</span>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="ml-4 hover:scale-110 transition-transform"
        >
          <X size={14} />
        </button>
      </div>
    </motion.div>
  );
}
