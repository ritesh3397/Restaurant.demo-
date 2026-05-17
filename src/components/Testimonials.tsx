import { motion } from 'motion/react';
import { REVIEWS } from '@/src/constants';
import { Star, Quote } from 'lucide-react';
import { fadeIn, staggerContainer, zoomIn } from '@/src/lib/animations';

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-x border-dark h-full" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer(0.08, 0)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={fadeIn('up')} className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Testimonials</motion.h2>
          <motion.h3 variants={zoomIn(0.05, 0.95)} className="text-5xl md:text-7xl font-black italic">Diners' <span className="text-dark not-italic">Stories</span></motion.h3>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={staggerContainer(0.08, 0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.id}
              variants={zoomIn(0, 0.95)}
              className="group relative"
            >
              <div className="p-10 glass rounded-[50px] soft-3d-shadow border-white/50 h-full flex flex-col justify-between hover:bg-white transition-all duration-500 hover:scale-105">
                <div>
                  <div className="flex text-accent-glow mb-6">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-primary opacity-20 mb-4" />
                  <p className="text-lg text-text-muted italic leading-relaxed mb-8">
                    "{review.comment}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <img
                    src={review.avatar}
                    className="w-14 h-14 rounded-2xl soft-3d-shadow border-2 border-white"
                    alt={review.name}
                  />
                  <div>
                    <h4 className="font-black text-dark tracking-tight">{review.name}</h4>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
