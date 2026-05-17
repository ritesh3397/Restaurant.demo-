import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ReservationPage from './pages/ReservationPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import BottomNav from './components/BottomNav';
import CustomCursor from './components/CustomCursor';
import PageReveal from './components/PageReveal';
import PromoBanner from './components/PromoBanner';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';

function AppRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="relative selection:bg-primary selection:text-white">
        {isLoading ? (
          <div className="fixed inset-0 bg-dark z-[600] flex flex-col items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
              <h1 className="text-white text-4xl font-serif font-black tracking-widest italic animate-pulse">Lumière</h1>
            </motion.div>
          </div>
        ) : (
          <>
            <PageReveal />
            <CustomCursor />
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
              style={{ scaleX }}
            />
            
            <PromoBanner />
            <Navbar onOpenCart={() => setIsCartOpen(true)} />
            
            <main className="min-h-screen">
              <AppRoutes />
            </main>

            <Footer />
            <BottomNav />
            <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          </>
        )}
      </div>
    </Router>
  );
}
