import Reservation from '@/src/components/Reservation';
import PageTransition from '@/src/components/PageTransition';
import { motion } from 'motion/react';
import { fadeIn, zoomIn } from '@/src/lib/animations';
import { MessageSquare } from 'lucide-react';

export default function ReservationPage() {
  return (
    <PageTransition>
      <div className="pt-24 min-h-screen flex flex-col">
        <div className="flex-1">
          <Reservation />
        </div>
        
        {/* WhatsApp Footer CTA */}
        <section className="py-20 px-6 md:px-12 bg-white border-t border-gray-100">
           <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                variants={zoomIn(0)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="mb-8 flex justify-center"
              >
                  <div className="p-5 bg-[#25D366]/10 text-[#25D366] rounded-3xl">
                    <MessageSquare size={48} />
                  </div>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">Need <span className="text-[#25D366]">Express</span> Booking?</h2>
              <p className="text-text-muted text-lg mb-10 max-w-xl mx-auto">
                Text us directly on WhatsApp for party sizes over 10 or for last-minute availability checks.
              </p>
              <motion.a
                href="https://wa.me/15558880000"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl hover:shadow-[#25D366]/30 transition-all"
              >
                Chat on WhatsApp
              </motion.a>
           </div>
        </section>
      </div>
    </PageTransition>
  );
}
