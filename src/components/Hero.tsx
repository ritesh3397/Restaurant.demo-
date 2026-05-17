import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { fadeIn, staggerContainer, zoomIn } from '@/src/lib/animations';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-bg-light">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-[radial-gradient(circle,rgba(244,162,97,0.15)_0%,transparent_70%)] blur-[40px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[100px] rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="initial"
          animate="animate"
          className="z-10"
        >
          <motion.h1 
            variants={zoomIn(0, 0.95)}
            className="text-6xl md:text-[82px] font-serif font-bold leading-[1.1] tracking-tight mb-8"
          >
            Crafted Flavors.<br />
            <span className="text-primary italic">Timeless</span> Experience.
          </motion.h1>
          
          <motion.p 
            variants={fadeIn('up', 0.05)}
            className="text-lg text-text-muted max-w-lg mb-10 leading-relaxed font-sans"
          >
            Luxury dining experience with handcrafted cuisine and modern ambiance. 
            Every plate tells a story of tradition and innovation.
          </motion.p>

          <motion.div 
            variants={fadeIn('up', 0.1)}
            className="flex flex-wrap gap-5"
          >
            <Link to="/reservation">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4.5 bg-dark text-white rounded-full font-bold text-lg shadow-xl"
              >
                Book Table
              </motion.button>
            </Link>
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4.5 bg-transparent text-dark border-2 border-dark rounded-full font-bold text-lg transition-colors hover:bg-dark hover:text-white"
              >
                View Menu
              </motion.button>
            </Link>
          </motion.div>

          <motion.div 
            variants={fadeIn('up', 0.2)}
            className="mt-12 flex items-center gap-6"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?u=${i}`}
                  className="w-12 h-12 rounded-full border-4 border-white soft-3d-shadow"
                  alt="Review"
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold">12.5k+ Happy Diners</p>
              <div className="flex text-accent-glow">
                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="relative z-10"
          >
            <OptimizedImage
              src="/src/assets/images/lumiere_hero_dish_1779022786924.png"
              alt="Signature Dish"
              className="w-full h-auto drop-shadow-[0_50px_50px_rgba(0,0,0,0.15)] animate-float rounded-full bg-transparent"
              width="1200"
              height="1200"
              loading="eager"
            />
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[10%] right-[5%] p-4 glass rounded-2xl soft-3d-shadow"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                ★
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-[20%] left-[-5%] p-4 glass rounded-2xl soft-3d-shadow flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                🔥
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Today's Special</p>
                <p className="text-sm font-black">Spicy Lobster</p>
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
