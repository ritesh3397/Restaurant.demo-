import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import ThemeToggle from './ThemeToggle';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onOpenCart?: () => void;
}

export default function Navbar({ onOpenCart }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Reservation', href: '/reservation' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12',
        isScrolled || isMobileMenuOpen ? 'glass py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-primary rounded-full shadow-[0_4px_12px_rgba(192,94,38,0.3)]"></div>
            <span className="text-2xl font-serif font-bold tracking-tight">
              Lumière
            </span>
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={link.href}
                className={cn(
                  "text-[13px] font-bold uppercase tracking-[2px] transition-all relative group",
                  location.pathname === link.href ? "text-primary px-4 py-2 bg-primary/10 rounded-full" : "text-text-muted hover:text-primary"
                )}
              >
                {link.name}
                {location.pathname === link.href && (
                  <motion.div
                   layoutId="navUnderline"
                   className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-primary rounded-full"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onOpenCart}
            className="p-3 bg-white/5 rounded-2xl border border-white/10 hover:bg-primary transition-all relative group"
          >
            <ShoppingBag className="w-5 h-5 group-hover:text-white" />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </motion.button>
          
          <button
            className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-xl transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
          
          <Link to="/reservation">
             <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-primary text-white px-8 py-3 rounded-full font-bold tracking-wide shadow-[0_8px_20px_rgba(192,94,38,0.25)] hover:bg-primary-light transition-colors"
            >
              Book Table
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden glass mt-4 rounded-[30px] overflow-hidden border border-white/20"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-2xl font-black italic transition-all",
                    location.pathname === link.href ? "text-primary text-3xl" : "text-dark/60"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-[1px] bg-dark/10 w-full my-2" />
              <Link to="/reservation">
                <button className="w-full bg-primary text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-lg active:scale-[0.98] transition-transform">
                  Book a Table
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
