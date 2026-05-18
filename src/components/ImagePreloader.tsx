import { useEffect } from 'react';
import { getAssetUrl } from '@/src/lib/images';

const CRITICAL_IMAGES = [
  'hero_dish',
  'butter_chicken',
  'sushi',
  'burger',
  'chef_marco',
  'lava_cake',
  'cheesecake'
];

export default function ImagePreloader() {
  useEffect(() => {
    // Preload critical images for better LCP and perceived performance
    const preload = (name: string) => {
      const url = getAssetUrl(name);
      if (url) {
        const img = new Image();
        img.src = url;
      }
    };

    // Use idle callback to avoid blocking the main thread
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => {
        CRITICAL_IMAGES.forEach(preload);
      });
    } else {
      setTimeout(() => {
        CRITICAL_IMAGES.forEach(preload);
      }, 1000);
    }
  }, []);

  return null;
}
