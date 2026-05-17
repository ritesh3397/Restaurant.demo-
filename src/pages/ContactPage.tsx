import Contact from '@/src/components/Contact';
import PageTransition from '@/src/components/PageTransition';
import { motion } from 'motion/react';
import { fadeIn, zoomIn } from '@/src/lib/animations';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center">
            <motion.h1 
              variants={zoomIn(0, 0.95)}
              initial="initial"
              animate="animate"
              className="text-6xl md:text-8xl font-black italic mb-6"
            >
              Contact <span className="text-primary not-italic">Us</span>
            </motion.h1>
            <motion.p 
              variants={fadeIn('up', 0.2)}
              initial="initial"
              animate="animate"
              className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
            >
              We're here to assist you with any inquiries. From private events 
              to specialized dietary requests, let us know how we can help.
            </motion.p>
        </div>

        <Contact />

        {/* Info Cards */}
        <section className="py-24 px-6 md:px-12 bg-bg-light">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: 'Our Address', content: '123 Luxury Avenue, NY' },
              { icon: Phone, title: 'Phone Number', content: '+1 (555) 888-0000' },
              { icon: Mail, title: 'Email Address', content: 'concierge@lumiere.com' },
              { icon: Clock, title: 'Open Hours', content: 'Mon-Sun: 12PM - 10PM' }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn('up', i * 0.1)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="p-10 glass rounded-[40px] text-center soft-3d-shadow border-white/50"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon size={32} />
                </div>
                <h4 className="text-xl font-black mb-2">{item.title}</h4>
                <p className="text-text-muted">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Location</h2>
              <h3 className="text-5xl md:text-7xl font-black italic">Find Your <span className="text-dark not-italic">Way</span></h3>
            </div>
            
            <motion.div 
               variants={zoomIn(0, 0.98)}
               initial="initial"
               whileInView="animate"
               viewport={{ once: true }}
               className="w-full h-[500px] rounded-[60px] overflow-hidden soft-3d-shadow grayscale hover:grayscale-0 transition-all duration-700"
            >
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528082187!2d-74.11976373974928!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1679069704230!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
