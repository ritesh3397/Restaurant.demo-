import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { fadeIn, staggerContainer, zoomIn, slideIn } from '@/src/lib/animations';

export default function Reservation() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    guests: '2 Guests',
    time: '',
  });

  const slots = ['18:00', '19:00', '20:00', '21:00', '22:00'];
  const guestOptions = ['1 Guest', '2 Guests', '4 Guests', '6+ Guests'];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  return (
    <section id="reservations" className="py-24 px-6 md:px-12 bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={staggerContainer(0.08, 0)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            variants={fadeIn('left')}
            className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-6"
          >
            Reservation
          </motion.h2>
          <motion.h3 
            variants={zoomIn(0.05, 0.95)}
            className="text-3xl sm:text-5xl md:text-7xl font-black mb-8 leading-tight"
          >
            Secure Your <span className="italic text-primary">Luxury</span> Table
          </motion.h3>
          <motion.p 
            variants={fadeIn('up', 0.1)}
            className="text-text-muted text-lg leading-relaxed mb-10 max-w-lg"
          >
            Experience exclusivity like never before. Our dining rooms offer
            intimacy, panoramic views, and a service that anticipates your every need.
          </motion.p>
          
          <div className="space-y-6">
            {[
              { icon: CheckCircle2, text: 'Private dining options available' },
              { icon: CheckCircle2, text: 'Complimentary valet parking' },
              { icon: CheckCircle2, text: 'Custom menu for special occasions' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={slideIn('left', 0.15 + (i * 0.05))}
                className="flex items-center gap-4 group"
              >
                <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="font-bold text-dark">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={slideIn('right', 0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="neumorph p-8 md:p-12 rounded-[50px] relative overflow-hidden"
        >
          {step === 3 ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-glow">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h4 className="text-3xl font-bold mb-4 italic">Thank You!</h4>
              <p className="text-text-muted mb-8 italic">Your reservation has been received. Our concierge will contact you shortly.</p>
              <button 
                onClick={() => setStep(1)}
                className="px-10 py-4 bg-dark text-white rounded-full font-bold transition-all hover:scale-105"
              >
                Make Another
              </button>
            </motion.div>
          ) : (
            <div className="space-y-8">
              <div className="flex gap-2 mb-8">
                {[1, 2].map((i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "h-1.5 flex-grow rounded-full transition-all duration-500",
                      step >= i ? 'bg-primary' : 'bg-gray-200'
                    )}
                  />
                ))}
              </div>

              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <label className="text-xs uppercase tracking-widest font-black text-text-muted flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Pick a Date
                    </label>
                    <input 
                      type="date" 
                      className="w-full p-5 bg-white rounded-2xl border-none soft-3d-shadow focus:ring-2 focus:ring-primary outline-none text-lg font-bold"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs uppercase tracking-widest font-black text-text-muted flex items-center gap-2">
                      <Users className="w-4 h-4" /> Party Size
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {guestOptions.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setFormData({...formData, guests: opt})}
                          className={cn(
                            "p-4 rounded-xl font-bold text-sm transition-all",
                            formData.guests === opt 
                              ? 'bg-primary text-white soft-3d-shadow' 
                              : 'bg-white text-text-muted hover:bg-gray-50'
                          )}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <label className="text-xs uppercase tracking-widest font-black text-text-muted flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Available Slots
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {slots.map((t) => (
                        <button
                          key={t}
                          onClick={() => setFormData({...formData, time: t})}
                          className={cn(
                            "p-4 rounded-xl font-bold text-lg transition-all",
                            formData.time === t 
                              ? 'bg-primary text-white soft-3d-shadow animate-pulse-slow' 
                              : 'bg-white text-text-muted hover:bg-gray-50'
                          )}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6 bg-primary/5 rounded-[30px] border border-primary/10">
                    <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">Summary</p>
                    <div className="flex justify-between items-center font-bold text-dark">
                      <span>{formData.date || 'Today'}</span>
                      <span>•</span>
                      <span>{formData.guests}</span>
                      <span>•</span>
                      <span>{formData.time || '19:00'}</span>
                    </div>
                  </div>
                </motion.div>
              )}

              <button
                disabled={step === 1 && !formData.date}
                onClick={handleNext}
                className="w-full py-5 bg-dark text-white rounded-3xl font-black text-xl flex items-center justify-center gap-3 hover:bg-primary transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {step === 1 ? 'Find Availability' : 'Confirm Luxury Booking'}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          )}

          {/* Decorative floating glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-glow/20 blur-[100px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
