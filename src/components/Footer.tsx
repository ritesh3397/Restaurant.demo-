import { UtensilsCrossed, Instagram, Send, Phone, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer, zoomIn } from '@/src/lib/animations';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 md:pt-24 pb-24 md:pb-12 px-4 md:px-12 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute top-0 left-0 w-[30%] h-[30%] bg-secondary/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20 border-b border-white/10 pb-16 md:pb-20 text-center md:text-left"
          variants={staggerContainer(0.08, 0)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={zoomIn(0, 0.95)} className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary rounded-2xl shadow-lg">
                <UtensilsCrossed size={32} />
              </div>
              <span className="text-4xl font-serif font-black tracking-tight">
                Lumière
              </span>
            </div>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-8 italic">
              Crafting timeless culinary experiences where every ingredient tells a 
              story of luxury and passion. Embark on a gastronomic journey with us.
            </p>
            <div className="flex gap-4">
              {[Instagram, Send, Phone].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  variants={fadeIn('up', 0.2 + (i * 0.05))}
                  whileHover={{ scale: 1.1, backgroundColor: '#C05E26' }}
                  className="p-4 bg-white/5 rounded-2xl border border-white/10 transition-all font-bold"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn('up', 0.1)}>
            <h4 className="text-xl font-bold mb-8 uppercase tracking-widest text-primary">Explore</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'Signature Menu', href: '/menu' },
                { name: 'Reservations', href: '/reservation' },
                { name: 'Our Story', href: '/about' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    {item.name} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeIn('up', 0.2)}>
            <h4 className="text-xl font-bold mb-8 uppercase tracking-widest text-primary">Hours</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between">
                <span>Mon — Thu</span>
                <span className="text-white font-bold">18:00 — 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Fri — Sat</span>
                <span className="text-white font-bold">18:00 — 01:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white font-bold">12:00 — 22:00</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={fadeIn('up', 0.3)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm font-bold uppercase tracking-widest"
        >
          <p>© {currentYear} Lumière Dining. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
