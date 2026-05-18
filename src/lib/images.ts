// Centralized image management to ensure stability and production-ready paths
// Uses Vite's glob import to bundle assets correctly

const assetImages = import.meta.glob('../assets/images/*.png', { eager: true, as: 'url' });

export const getAssetUrl = (name: string): string => {
  const path = `../assets/images/${name}.png`;
  const url = assetImages[path];
  if (!url) {
    console.warn(`[Lumiere] Asset not found: ${path}`);
    // If a specific asset is missing, try to find a reasonable local substitute
    if (name.includes('cake') || name.includes('dessert') || name.includes('sweet')) return assetImages['../assets/images/lava_cake.png'] as string || '';
    return assetImages['../assets/images/hero_dish.png'] as string || '';
  }
  return url as string;
};

// Selection of diverse high-quality fallbacks to avoid repeating the same image
const FALLBACK_DISHES = [
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836', // Plating
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c', // Healthy bowl
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1', // Grilled meat
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38', // Pizza
  'https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445', // Pancakes
];

const FALLBACK_DRINKS = [
  'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b', // Cocktail
  'https://images.unsplash.com/photo-1544145945-f904253d0c7b', // Coffee
  'https://images.unsplash.com/photo-1551024709-8f23befc6f87', // Smoothie
];

const FALLBACK_DESSERTS = [
  'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e', // Cake
  'https://images.unsplash.com/photo-1551024601-bec78aea704b', // Chocolate
  'https://images.unsplash.com/photo-1488477181946-6428a0291777', // Pastry
];

export const getFallbackUrl = (alt: string, count: number): string => {
  // Level 1: Primary fallback is our hero dish
  if (count === 1) return getAssetUrl('hero_dish');
  
  // Level 2: Diversified Unsplash images
  const altLower = alt.toLowerCase();
  const isDrink = altLower.includes('drink') || altLower.includes('tea') || altLower.includes('beverage');
  const isDessert = altLower.includes('cake') || altLower.includes('sweet') || altLower.includes('dessert') || altLower.includes('jamun') || altLower.includes('waffle');
  
  let collection = FALLBACK_DISHES;
  if (isDrink) collection = FALLBACK_DRINKS;
  else if (isDessert) collection = FALLBACK_DESSERTS;
  
  // Deterministic pick based on alt text
  const hash = alt.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const index = (hash + count) % collection.length;
  
  return `${collection[index]}?q=80&w=800&auto=format&fit=crop`;
};
