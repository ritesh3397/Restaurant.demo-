import { motion } from 'motion/react';
import { STATS } from '@/src/constants';
import { Quote } from 'lucide-react';
import { fadeIn, staggerContainer, zoomIn } from '@/src/lib/animations';
import OptimizedImage from './OptimizedImage';

import { getAssetUrl } from '@/src/lib/images';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            className="relative order-2 lg:order-1"
            variants={fadeIn('right', 0)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative z-10 p-2 md:p-4 border border-primary/10 rounded-[40px] md:rounded-[60px] overflow-hidden">
              <OptimizedImage
                src={getAssetUrl('chef_marco')}
                alt="Executive Chef"
                className="w-full h-auto rounded-[35px] md:rounded-[50px] shadow-2xl"
                width="1000"
                height="1300"
                loading="lazy"
              />
            </div>
            
            {/* Background Decorative element */}
            <div className="absolute top-[10%] left-[-5%] md:left-[-10%] w-[110%] md:w-[120%] h-[110%] md:h-[120%] border-2 border-primary/5 rounded-full animate-spin-slow pointer-events-none" />
            <div className="absolute -bottom-10 -right-5 md:-right-10 w-32 md:w-48 h-32 md:h-48 bg-primary/10 blur-[60px] md:blur-[80px] rounded-full" />
            
            {/* Counter Floating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-10 left-[-30px] p-6 glass rounded-3xl soft-3d-shadow z-20 hidden md:block"
            >
              <p className="text-4xl font-black text-primary mb-1">15+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Years of<br />Excellence</p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08, 0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={fadeIn('up', 0)}
              className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6"
            >
              Our Heritage
            </motion.h2>
            <motion.h3
              variants={zoomIn(0.05, 0.95)}
              className="text-3xl sm:text-5xl md:text-7xl font-black mb-8 italic"
            >
              Elegance In Every <span className="text-dark not-italic">Detail</span>
            </motion.h3>
            
            <motion.div 
              variants={fadeIn('up', 0.1)}
              className="space-y-6 text-lg text-text-muted leading-relaxed mb-10"
            >
              <p>
                Founded in 2011, Lumière was born from a passion for redefining the
                limits of gastronomic experiences. We believe that fine dining is
                more than just food—it's a symphony of atmosphere, service, and
                unparalleled culinary execution.
              </p>
              <p>
                Our Executive Chef, Marco Rossi, brings three decades of Michelin-starred
                expertise, weaving traditional Italian roots with avant-garde
                techniques that challenge and delight the senses.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeIn('up', 0.15 + (i * 0.05))}
                  className="text-center md:text-left"
                >
                  <p className="text-3xl font-black text-primary mb-1">{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeIn('up', 0.3)}
              className="mt-12 p-8 glass rounded-[40px] relative border-primary/20"
            >
              <Quote className="w-12 h-12 text-primary/20 absolute top-4 left-4" />
              <p className="relative z-10 text-xl italic font-serif leading-relaxed text-dark font-medium">
                "We don't just cook dishes; we architect emotions onto a canvas 
                of flavors. Every guest is a story we help write."
              </p>
              <p className="mt-4 font-bold text-primary uppercase tracking-widest text-sm">— Chef Marco Rossi</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
