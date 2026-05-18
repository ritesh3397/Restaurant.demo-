import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { fadeIn, staggerContainer, zoomIn } from '@/src/lib/animations';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';

import { getAssetUrl } from '@/src/lib/images';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center pt-20 md:pt-24 overflow-hidden bg-bg-light text-text-main">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-[radial-gradient(circle,rgba(244,162,97,0.15)_0%,transparent_70%)] blur-[40px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[100px] rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="initial"
          animate="animate"
          className="z-10 text-center lg:text-left"
        >
          <motion.h1 
            variants={zoomIn(0, 0.95)}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[82px] font-serif font-bold leading-[1.1] tracking-tight mb-6 md:mb-8"
          >
            Crafted Flavors.<br />
            <span className="text-primary italic">Timeless</span> Experience.
          </motion.h1>
          
          <motion.p 
            variants={fadeIn('up', 0.05)}
            className="text-sm sm:text-base md:text-lg text-text-muted max-w-lg mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed font-sans"
          >
            Luxury dining experience with handcrafted cuisine and modern ambiance. 
            Every plate tells a story of tradition and innovation.
          </motion.p>

          <motion.div 
            variants={fadeIn('up', 0.1)}
            className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-5"
          >
            <Link to="/reservation">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 md:px-10 py-3.5 md:py-4.5 bg-dark text-white rounded-full font-bold text-base md:text-lg shadow-xl"
              >
                Book Table
              </motion.button>
            </Link>
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 md:px-10 py-3.5 md:py-4.5 bg-transparent text-dark border-2 border-dark rounded-full font-bold text-base md:text-lg transition-colors hover:bg-dark hover:text-white"
              >
                View Menu
              </motion.button>
            </Link>
          </motion.div>

          <motion.div 
            variants={fadeIn('up', 0.2)}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?u=${i}`}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white soft-3d-shadow"
                  alt="Review"
                />
              ))}
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs md:text-sm font-bold">12.5k+ Happy Diners</p>
              <div className="flex text-accent-glow justify-center sm:justify-start">
                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="relative mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative z-10 max-w-[320px] sm:max-w-md md:max-w-none mx-auto"
          >
            <OptimizedImage
              src={getAssetUrl('hero_dish')}
              alt="Signature Dish"
              className="w-full h-auto drop-shadow-[0_30px_30px_rgba(0,0,0,0.15)] animate-float rounded-full bg-transparent aspect-square"
              width="1200"
              height="1200"
              loading="eager"
            />
            
            {/* Floating Elements - Hidden on very small screens */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[10%] right-[5%] p-3 md:p-4 glass rounded-2xl soft-3d-shadow hidden sm:block"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 bg-secondary rounded-lg flex items-center justify-center text-white font-bold text-base md:text-xl">
                ★
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-[10%] sm:bottom-[20%] left-[-5%] p-3 md:p-4 glass rounded-2xl soft-3d-shadow flex items-center gap-2 md:gap-3"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center text-sm md:text-base">
                🔥
              </div>
              <div>
                <p className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold opacity-60">Today's Special</p>
                <p className="text-xs md:text-sm font-black">Spicy Lobster</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Circular Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[1px] border-primary/10 rounded-full animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-[1px] border-primary/5 rounded-full" />
        </div>
      </div>
    </section>
  );
}
