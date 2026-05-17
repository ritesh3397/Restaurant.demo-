export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'main' | 'desserts' | 'beverages';
  image: string;
  rating: number;
  tags: string[];
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  role: string;
}

export interface Stat {
  label: string;
  value: string;
}
