export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  rating: number;
}

export type CategoryKey =
  | 'all'
  | 'tea-cups'
  | 'toys'
  | 'bappa-idols'
  | 'mahadev-statues'
  | 'god-articles'
  | 'flower-pots'
  | 'decor'
  | 'festivals';

export interface Category {
  key: CategoryKey;
  name: string;
  description: string;
  count: number;
  image: string;
  glowColor: string; // 'cyan' | 'purple' | 'pink'
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
