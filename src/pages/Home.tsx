import Hero from '@/src/components/Hero';
import FeaturedDishes from '@/src/components/FeaturedDishes';
import About from '@/src/components/About';
import Testimonials from '@/src/components/Testimonials';
import PageTransition from '@/src/components/PageTransition';
import { motion } from 'motion/react';
import { slideIn } from '@/src/lib/animations';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <FeaturedDishes />
      
      {/* Short About Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-6">Our Legacy</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight italic">
              Crafting <span className="text-dark not-italic">Culinary</span> Masterpieces
            </h3>
            <p className="text-text-muted text-lg leading-relaxed mb-10">
              Lumière is born from a passion for exceptional flavors and artistic presentation. 
              Our kitchen is a laboratory of taste, where tradition meets innovation.
            </p>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-sm group"
              >
                Learn Our Story <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 relative">
             <motion.div 
               variants={slideIn('right', 0.2)}
               initial="initial"
               whileInView="animate"
               viewport={{ once: true }}
               className="rounded-[50px] overflow-hidden soft-3d-shadow"
             >
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000" 
                  alt="Interior" 
                  className="w-full h-[500px] object-cover"
                />
             </motion.div>
          </div>
        </div>
      </section>

      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-primary/5 blur-[120px] rounded-full" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-10 italic">Ready for <span className="text-primary not-italic">Dinner?</span></h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/reservation">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
                className="px-10 py-5 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-sm shadow-xl"
              >
                Book Your Table
              </motion.button>
            </Link>
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05, borderColor: '#C05E26', color: '#C05E26' }}
                className="px-10 py-5 border border-white/20 text-white rounded-full font-bold uppercase tracking-widest text-sm"
              >
                Explore Menu
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
