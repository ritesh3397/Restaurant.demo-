import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '@/src/constants';
import { Instagram, Expand } from 'lucide-react';
import { fadeIn, staggerContainer, zoomIn } from '@/src/lib/animations';
import OptimizedImage from './OptimizedImage';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-bg-warm relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          variants={staggerContainer(0.08, 0)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={zoomIn(0, 0.95)}>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Gallery</h2>
            <h3 className="text-4xl sm:text-5xl md:text-7xl font-black italic">
              Visual <span className="text-dark not-italic">Immersion</span>
            </h3>
          </motion.div>
          <motion.button
            variants={fadeIn('left', 0.15)}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm group text-left"
          >
            <Instagram className="w-5 h-5 flex-shrink-0" /> Follow @LumiereDining
            <span className="w-12 h-[2px] bg-primary group-hover:w-20 transition-all hidden sm:block" />
          </motion.button>
        </motion.div>

        <motion.div 
          className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
          variants={staggerContainer(0.05, 0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.05 }}
        >
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              variants={zoomIn(0, 0.9)}
              className="relative group overflow-hidden rounded-[40px] soft-3d-shadow break-inside-avoid"
            >
              <OptimizedImage
                src={img}
                alt={`Gallery ${i}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm pointer-events-none">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className="p-4 glass rounded-full text-white"
                >
                  <Expand className="w-8 h-8" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
