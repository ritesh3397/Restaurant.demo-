import { Home, Utensils, Calendar, MapPin, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Link, useLocation } from 'react-router-dom';

export default function BottomNav() {
  const location = useLocation();
  
  const tabs = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Utensils, label: 'Menu', href: '/menu' },
    { icon: Calendar, label: 'Book', href: '/reservation' },
    { icon: Info, label: 'About', href: '/about' },
    { icon: MapPin, label: 'Find', href: '/contact' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-[100] px-6 pb-6 pt-2 pointer-events-none">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="glass rounded-3xl p-3 flex justify-around items-center soft-3d-shadow pointer-events-auto border-white/50"
      >
        {tabs.map((tab, i) => (
          <Link
            key={i}
            to={tab.href}
            className="flex flex-col items-center gap-1 group relative p-3"
          >
            <tab.icon className={cn(
              "w-6 h-6 transition-colors",
              location.pathname === tab.href ? "text-primary" : "text-text-muted group-hover:text-primary"
            )} />
            <span className={cn(
               "text-[10px] font-black uppercase tracking-widest transition-colors",
               location.pathname === tab.href ? "text-primary" : "text-text-muted group-hover:text-primary"
            )}>
              {tab.label}
            </span>
            {location.pathname === tab.href && (
              <motion.div
                layoutId="activeTab"
                className="absolute -top-1 w-1 h-1 bg-primary rounded-full shadow-[0_0_10px_#C05E26]"
              />
            )}
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
