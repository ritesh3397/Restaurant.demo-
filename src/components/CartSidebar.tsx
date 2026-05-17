import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { MENU_ITEMS } from '@/src/constants';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  // Mock cart items for demo
  const cartItems = [
    { ...MENU_ITEMS[0], quantity: 1 },
    { ...MENU_ITEMS[3], quantity: 2 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-[200]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[201] shadow-2xl flex flex-col"
          >
            <div className="p-8 flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 text-primary rounded-xl">
                  <ShoppingBag size={24} />
                </div>
                <h2 className="text-2xl font-black italic">Your Cart</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-8 space-y-6 no-scrollbar">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 soft-3d-shadow">
                    <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.name} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-lg leading-tight">{item.name}</h4>
                      <button className="text-gray-300 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-primary font-black font-serif mb-4">${item.price}</p>
                    <div className="flex items-center gap-4 p-1 bg-bg-light rounded-xl w-fit">
                      <button className="p-1 hover:bg-white rounded-lg transition-colors"><Minus size={14} /></button>
                      <span className="font-bold text-sm">{item.quantity}</span>
                      <button className="p-1 hover:bg-white rounded-lg transition-colors"><Plus size={14} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-bg-warm rounded-t-[40px] shadow-2xl">
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-text-muted">
                  <span className="font-bold uppercase tracking-widest text-xs">Subtotal</span>
                  <span className="font-bold font-serif">${total}</span>
                </div>
                <div className="flex justify-between text-text-muted">
                  <span className="font-bold uppercase tracking-widest text-xs">Service Fee</span>
                  <span className="font-bold font-serif">$5.00</span>
                </div>
                <div className="flex justify-between text-xl font-black pt-4 border-t border-gray-200">
                  <span className="italic">Total</span>
                  <span className="text-primary font-serif">${total + 5}</span>
                </div>
              </div>
              <button className="w-full py-5 bg-dark text-white rounded-3xl font-black text-xl hover:bg-primary transition-all duration-500">
                Proceed to Checkout
              </button>
              <p className="text-center text-[10px] uppercase tracking-[0.2em] font-black text-text-muted mt-4">
                Complimentary delivery on orders over $100
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
