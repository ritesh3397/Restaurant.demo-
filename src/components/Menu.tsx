import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '@/src/constants';
import { cn } from '@/src/lib/utils';
import { Search, Plus, Flame, Leaf, Info } from 'lucide-react';
import { fadeIn, staggerContainer, zoomIn } from '@/src/lib/animations';
import OptimizedImage from './OptimizedImage';

const CATEGORIES = [
  { id: 'all', label: 'All Dishes' },
  { id: 'starters', label: 'Starters' },
  { id: 'main', label: 'Main' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'beverages', label: 'Beverages' },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[-5%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-primary/3 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer(0.08, 0)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeIn('up')}
            className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-6"
          >
            Art of Gastronomy
          </motion.h2>
          <motion.h3
            variants={zoomIn(0.05, 0.95)}
            className="text-5xl md:text-8xl font-black mb-12 italic leading-tight"
          >
            The <span className="text-dark not-italic">Signature</span> Menu
          </motion.h3>

          <motion.div 
            variants={fadeIn('up', 0.1)}
            className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12"
          >
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 border',
                    activeCategory === cat.id 
                      ? 'bg-dark border-dark text-white scale-105 shadow-xl' 
                      : 'bg-white/50 border-gray-100 text-text-muted hover:border-primary/50'
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search flavors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-3 bg-bg-light border border-gray-100 rounded-2xl focus:outline-none focus:border-primary/50 transition-all text-sm font-medium"
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ 
                    duration: 0.4,
                    delay: Math.min(i * 0.05, 0.4),
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group relative flex flex-col sm:flex-row gap-6 p-6 rounded-[40px] bg-white border border-gray-100 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                >
                  {/* Image container */}
                  <div className="relative w-full sm:w-44 h-44 flex-shrink-0 overflow-hidden rounded-[30px] soft-3d-shadow">
                    <OptimizedImage
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full"
                      width="176"
                      height="176"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <motion.div
                         initial={{ scale: 0 }}
                         whileHover={{ scale: 1.1 }}
                         whileTap={{ scale: 0.9 }}
                         className="p-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white cursor-pointer"
                       >
                         <Plus size={24} />
                       </motion.div>
                    </div>
                    {/* Tags overlay */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                       {item.tags.includes('Veg') && (
                         <div className="p-1.5 bg-green-500/90 text-white rounded-lg backdrop-blur-md shadow-lg">
                           <Leaf size={14} />
                         </div>
                       )}
                       {item.tags.includes('Spicy') && (
                         <div className="p-1.5 bg-orange-500/90 text-white rounded-lg backdrop-blur-md shadow-lg">
                           <Flame size={14} />
                         </div>
                       )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow flex flex-col justify-between py-2">
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                           <h4 className="text-2xl font-black italic tracking-tight group-hover:text-primary transition-colors">
                            {item.name}
                          </h4>
                          {item.tags.includes('Non-Veg') && (
                            <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" title="Non-Vegetarian" />
                          )}
                          {item.tags.includes('Veg') && (
                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" title="Vegetarian" />
                          )}
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-black text-dark block">
                            ${item.price}
                          </span>
                          <div className="flex items-center gap-1 text-primary text-[10px] font-bold justify-end">
                            <span>★</span> <span>{item.rating}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {item.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className={cn(
                            "text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border transition-all",
                            tag === 'Chef Special' ? "bg-primary/5 border-primary text-primary" : "bg-bg-light border-gray-100 text-text-muted hover:bg-white"
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full flex flex-col items-center justify-center py-20 text-text-muted"
              >
                <Info size={48} className="mb-4 opacity-20" />
                <p className="text-xl font-bold italic">No dishes found in this selection.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sommelier Banner */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-20 p-12 rounded-[50px] bg-dark text-white flex flex-col md:flex-row items-center justify-between gap-8 soft-3d-shadow overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
          <div className="relative z-10 text-center md:text-left max-w-lg">
            <h4 className="text-4xl md:text-5xl font-black mb-4 italic leading-tight">Elevate Your <span className="text-primary not-italic">Palate</span></h4>
            <p className="text-gray-400 text-lg leading-relaxed">Our master sommelier is ready to guide you through our vintage cellars for the perfect pairing.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 px-10 py-5 bg-primary text-white rounded-full font-black uppercase tracking-widest text-sm flex items-center gap-3 shadow-2xl transition-all"
          >
            Consult Sommelier <Search className="w-5 h-5" />
          </motion.button>
          
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all duration-700" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
