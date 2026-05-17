import { motion } from 'motion/react';
import { MapPin, Phone, Instagram, Send, MessageSquare } from 'lucide-react';
import { fadeIn, staggerContainer, zoomIn, slideIn } from '@/src/lib/animations';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-bg-warm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            variants={staggerContainer(0.08, 0)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 variants={fadeIn('up')} className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-6">Contact Us</motion.h2>
            <motion.h3 variants={zoomIn(0.05, 0.95)} className="text-5xl md:text-7xl font-black italic mb-10 leading-tight">
              Let's <span className="text-dark not-italic underline decoration-primary decoration-8 underline-offset-8">Connect</span>
            </motion.h3>
            
            <motion.div variants={staggerContainer(0.08, 0.1)} className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <motion.div variants={slideIn('left', 0)} className="space-y-4">
                <h4 className="font-black text-xl flex items-center gap-3">
                  <MapPin className="text-primary" /> Location
                </h4>
                <p className="text-text-muted leading-relaxed">
                  123 Luxury Avenue, Culinary District<br />
                  Manhattan, NY 10012
                </p>
              </motion.div>
              <motion.div variants={slideIn('right', 0.1)} className="space-y-4">
                <h4 className="font-black text-xl flex items-center gap-3">
                  <Phone className="text-primary" /> Reach Out
                </h4>
                <p className="text-text-muted leading-relaxed">
                  Reservations: +1 (555) 888-0000<br />
                  Inquiries: concierge@lumiere.com
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn('up', 0.2)} className="p-8 glass rounded-[40px] flex items-center justify-between group cursor-pointer hover:bg-primary transition-all duration-500">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary text-white rounded-2xl group-hover:bg-white group-hover:text-primary transition-colors">
                  <MessageSquare size={32} />
                </div>
                <div>
                  <h4 className="font-black text-xl group-hover:text-white transition-colors">Chat on WhatsApp</h4>
                  <p className="text-text-muted text-sm group-hover:text-white/80 transition-colors">Instant assistance for your dining needs</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn('up', 0.3)} className="mt-12 flex gap-4">
              {[Instagram, Send, Phone].map((Icon, i) => (
                <motion.button
                  key={i}
                  variants={fadeIn('up', 0.3 + (i * 0.05))}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="p-4 glass rounded-2xl text-dark hover:bg-primary hover:text-white transition-all"
                >
                  <Icon size={24} />
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          <motion.form 
            variants={slideIn('right', 0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="neumorph p-10 md:p-14 rounded-[60px] space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-2">Name</label>
                <input type="text" className="w-full p-4 bg-white rounded-2xl focus:ring-2 focus:ring-primary outline-none soft-3d-shadow" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-2">Email</label>
                <input type="email" className="w-full p-4 bg-white rounded-2xl focus:ring-2 focus:ring-primary outline-none soft-3d-shadow" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-2">Event Type</label>
              <select className="w-full p-4 bg-white rounded-2xl focus:ring-2 focus:ring-primary outline-none soft-3d-shadow appearance-none">
                <option>Private Dining</option>
                <option>Corporate Gala</option>
                <option>Wedding Celebration</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-2">Message</label>
              <textarea rows={4} className="w-full p-4 bg-white rounded-2xl focus:ring-2 focus:ring-primary outline-none soft-3d-shadow resize-none" placeholder="Tell us more..."></textarea>
            </div>
            <button className="w-full py-5 bg-dark text-white rounded-3xl font-black text-xl flex items-center justify-center gap-3 hover:bg-primary transition-all duration-500 shadow-xl group">
              Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
