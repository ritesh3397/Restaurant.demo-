import { motion } from 'motion/react';

export default function PageReveal() {
  return (
    <>
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full h-full bg-dark z-[500] origin-bottom"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        className="fixed top-0 left-0 w-full h-full bg-primary z-[500] origin-top"
      />
    </>
  );
}
