import { Variant } from 'motion/react';

export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay: number = 0) => {
  return {
    initial: {
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
      opacity: 0,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

export const zoomIn = (delay: number = 0, scale: number = 0.95) => {
  return {
    initial: {
      scale: scale,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

export const slideIn = (direction: 'left' | 'right', delay: number = 0) => {
  return {
    initial: {
      x: direction === 'left' ? -30 : 30,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

export const staggerContainer = (staggerChildren: number = 0.05, delayChildren: number = 0) => {
  return {
    initial: {},
    animate: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

export const pageTransition = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
