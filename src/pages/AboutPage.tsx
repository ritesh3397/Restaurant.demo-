import About from '@/src/components/About';
import Gallery from '@/src/components/Gallery';
import PageTransition from '@/src/components/PageTransition';
import { motion } from 'motion/react';
import { fadeIn, zoomIn } from '@/src/lib/animations';
import OptimizedImage from '@/src/components/OptimizedImage';

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center">
            <motion.h1 
              variants={zoomIn(0, 0.95)}
              initial="initial"
              animate="animate"
              className="text-4xl sm:text-6xl md:text-8xl font-black italic mb-6"
            >
              The <span className="text-primary not-italic">Lumière</span> Story
            </motion.h1>
            <motion.p 
              variants={fadeIn('up', 0.2)}
              initial="initial"
              animate="animate"
              className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
            >
              A journey of thousand flavors, beginning with a simple dream to redefine 
              the art of fine dining in the heart of the city.
            </motion.p>
        </div>
        
        <About />

        {/* Team Section */}
        <section className="py-24 px-6 md:px-12 bg-bg-light">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">The Masters</h2>
              <h3 className="text-4xl sm:text-5xl md:text-7xl font-black italic">Behind the <span className="text-dark not-italic">Flavors</span></h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { name: 'Marco Rossi', role: 'Executive Chef', image: '/assets/images/chef_marco.png' },
                { name: 'Elena Chen', role: 'Pastry Chef', image: '/assets/images/chef_elena.png' },
                { name: 'Julian Vane', role: 'Head Sommelier', image: '/assets/images/sommelier_julian.png' }
              ].map((member, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn('up', i * 0.1)}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative rounded-[40px] overflow-hidden mb-6 soft-3d-shadow aspect-[4/5]">
                    <OptimizedImage 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors pointer-events-none" />
                  </div>
                  <h4 className="text-2xl font-black">{member.name}</h4>
                  <p className="text-primary font-bold tracking-widest uppercase text-sm mt-2">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Gallery />
      </div>
    </PageTransition>
  );
}
