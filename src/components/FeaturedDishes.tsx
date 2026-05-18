import { motion } from 'motion/react';
import { Star, Flame, Leaf, ShoppingCart, Info, ArrowRight } from 'lucide-react';
import { MENU_ITEMS } from '@/src/constants';
import { fadeIn, staggerContainer, zoomIn, slideIn } from '@/src/lib/animations';
import OptimizedImage from './OptimizedImage';

export default function FeaturedDishes() {
  const featured = [
    MENU_ITEMS.find(item => item.id === 'in-1'),
    MENU_ITEMS.find(item => item.id === 'int-2'),
    MENU_ITEMS.find(item => item.id === 'int-4'),
  ].filter(Boolean) as typeof MENU_ITEMS;

  return (
    <section className="py-24 px-6 md:px-12 bg-bg-warm relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          variants={staggerContainer(0.08, 0)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={zoomIn(0, 0.95)}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary" />
              Chef's Recommends
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
              Our <span className="italic">Signature</span> Masterpieces
            </h3>
          </motion.div>
          <motion.p
            variants={fadeIn('up', 0.1)}
            className="text-text-muted max-w-sm mb-2"
          >
            Handpicked ingredients crafted by our world-class chefs to create 
            harmonies of flavor you've never experienced.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer(0.08, 0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featured.map((dish, i) => (
            <motion.div
              key={dish.id}
              variants={slideIn(i % 2 === 0 ? 'left' : 'right', 0)}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-white rounded-[40px] p-6 pt-24 mt-20 soft-3d-shadow transition-all duration-500 group-hover:shadow-2xl h-full flex flex-col">
                {/* Floating Image */}
                <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-full px-12 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative"
                  >
                    <OptimizedImage
                      src={dish.image}
                      alt={dish.name}
                      className="w-48 h-48 drop-shadow-[0_30px_30px_rgba(0,0,0,0.15)] rounded-full"
                      width="192"
                      height="192"
                      loading="lazy"
                    />
                  </motion.div>
                </div>

                <div className="flex items-center justify-between mb-4 mt-4">
                  <div className="flex items-center gap-1 text-accent-glow">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-bold text-text-main">{dish.rating}</span>
                  </div>
                  <div className="flex gap-2">
                    {dish.tags.includes('Veg') && (
                      <div className="p-2 bg-green-50 text-green-600 rounded-full">
                        <Leaf className="w-4 h-4" />
                      </div>
                    )}
                    {dish.tags.includes('Chef Special') && (
                      <div className="p-2 bg-orange-50 text-orange-600 rounded-full">
                        <Flame className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>

                <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {dish.name}
                </h4>
                <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                  {dish.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                  <span className="text-3xl font-black font-serif text-primary">
                    ${dish.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-dark text-white rounded-2xl hover:bg-primary transition-colors soft-3d-shadow"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
              
              {/* Card Decorative background element */}
              <div className="absolute inset-0 bg-primary/5 rounded-[40px] -z-10 translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
