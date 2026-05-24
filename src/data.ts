import { Product, Category, Testimonial, GalleryItem } from './types';

export const CATEGORIES: Category[] = [
  {
    key: 'tea-cups',
    name: 'Designer Tea Cups',
    description: 'Impeccable ceramic and glass sets with elegant golden borders.',
    count: 14,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600',
    glowColor: 'shadow-[0_0_20px_rgba(34,211,238,0.25)] border-cyan-500/30 text-cyan-400'
  },
  {
    key: 'toys',
    name: 'Kids Toys',
    description: 'Ultra-safe premium educational blocks, organic woodwork, and plush collector pieces.',
    count: 22,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=600',
    glowColor: 'shadow-[0_0_20px_rgba(244,63,94,0.25)] border-rose-500/30 text-rose-400'
  },
  {
    key: 'bappa-idols',
    name: 'Ganapati Bappa Idols',
    description: 'Exquisite, highly detailed Lord Ganesha idols for premium home shrines.',
    count: 18,
    image: 'https://images.unsplash.com/photo-1567591974573-ef3c6beff972?auto=format&fit=crop&q=80&w=600',
    glowColor: 'shadow-[0_0_20px_rgba(168,85,247,0.25)] border-purple-500/30 text-purple-400'
  },
  {
    key: 'mahadev-statues',
    name: 'Mahadev Statues',
    description: 'Mystical meditating Shiva sculptures in marble dust and premium metallics.',
    count: 11,
    image: 'https://images.unsplash.com/photo-1609137144813-9366ec93c200?auto=format&fit=crop&q=80&w=600',
    glowColor: 'shadow-[0_0_20px_rgba(34,211,238,0.25)] border-cyan-500/30 text-cyan-400'
  },
  {
    key: 'god-articles',
    name: 'Indian God Articles',
    description: 'Elegant spiritual articles and pooja room items in brass and gold plate.',
    count: 25,
    image: 'https://images.unsplash.com/photo-1629813204128-bd6992ceba6a?auto=format&fit=crop&q=80&w=600',
    glowColor: 'shadow-[0_0_20px_rgba(244,63,94,0.25)] border-rose-500/30 text-rose-400'
  },
  {
    key: 'flower-pots',
    name: 'Flower Pots & Vases',
    description: 'Luxury ceramic, frosted-glass, and polished copper statement vases.',
    count: 16,
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&q=80&w=600',
    glowColor: 'shadow-[0_0_20px_rgba(168,85,247,0.25)] border-purple-500/30 text-purple-400'
  },
  {
    key: 'decor',
    name: 'Decorative Gifts',
    description: 'Premium hourglasses, geometric sculpture decor, and elegant wall mirrors.',
    count: 32,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600',
    glowColor: 'shadow-[0_0_20px_rgba(34,211,238,0.25)] border-cyan-500/30 text-cyan-400'
  },
  {
    key: 'festivals',
    name: 'Festival Collections',
    description: 'Exclusive custom curations for Diwali, Ganpati Chaturthi, and weddings.',
    count: 29,
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=600',
    glowColor: 'shadow-[0_0_20px_rgba(244,63,94,0.25)] border-rose-500/30 text-rose-400'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Luxe Emerald Mug with Golden Handle',
    description: 'Exquisite ceramic single mug with real gold-coated borders and handles. The epitome of elegant morning tea sessions.',
    price: 699,
    originalPrice: 999,
    category: 'tea-cups',
    image: 'https://images.unsplash.com/photo-1517256064527-09c53b2d0ec6?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    isNew: false,
    rating: 4.9
  },
  {
    id: 'p2',
    name: 'Chalisgaon Royal Tea Set (6 Pieces)',
    description: 'An premium collection of 6 bone-china cups featuring hand-painted Maharashtrian royal motifs and 24k gold linings.',
    price: 2490,
    originalPrice: 3500,
    category: 'tea-cups',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    isNew: true,
    rating: 5.0
  },
  {
    id: 'p3',
    name: 'Elegant Handcrafted Gold-Leaf Ganesha',
    description: 'Lord Ganesha in a modern abstract lotus posture. Finished with premium metallic paint and delicate gold-leaf overlays.',
    price: 3499,
    originalPrice: 4800,
    category: 'bappa-idols',
    image: 'https://images.unsplash.com/photo-1567591974573-ef3c6beff972?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    isNew: false,
    rating: 4.8
  },
  {
    id: 'p4',
    name: 'Meditating Shiva Stone Bust (Medium)',
    description: 'Immersive grey-sandstone dust sculpture representing Lord Adiyogi in ultimate quietude. Enhances positive vibes.',
    price: 1899,
    category: 'mahadev-statues',
    image: 'https://images.unsplash.com/photo-1609137144813-9366ec93c200?auto=format&fit=crop&q=80&w=600',
    isBestSeller: false,
    isNew: true,
    rating: 4.7
  },
  {
    id: 'p5',
    name: 'Premium Wooden Geometric Block Kit',
    description: 'Eco-safe, chemical-free pine wood block set designed in sleek Nordic tones. Keeps kids safely engaged for hours.',
    price: 1290,
    originalPrice: 1899,
    category: 'toys',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    isNew: false,
    rating: 4.9
  },
  {
    id: 'p6',
    name: 'Golden Rim Ceramic Globe Planter',
    description: 'Perfect minimalist white-gilded flower pot with a lightweight metal frame. Beautiful for home entrances or office desks.',
    price: 1150,
    category: 'flower-pots',
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&q=80&w=600',
    isBestSeller: false,
    isNew: true,
    rating: 4.6
  },
  {
    id: 'p7',
    name: 'Scented Vanilla & Wood Soy Candle Set',
    description: 'Luxurious double-wick wooden-top candle poured in heavy matte-black jars. Evokes cozy emotional warmth and relaxation.',
    price: 899,
    originalPrice: 1200,
    category: 'decor',
    image: 'https://images.unsplash.com/photo-1606722590583-6951b5ea92ce?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    isNew: false,
    rating: 4.9
  },
  {
    id: 'p8',
    name: 'Handcrafted Brass Diya Hanging Stand',
    description: 'Authentic 5-cup brass chain-hanging Diya stand. Beautifully polishes under standard lighting for festival prayers.',
    price: 1999,
    category: 'god-articles',
    image: 'https://images.unsplash.com/photo-1629813204128-bd6992ceba6a?auto=format&fit=crop&q=80&w=600',
    isBestSeller: false,
    isNew: false,
    rating: 4.8
  },
  {
    id: 'p9',
    name: 'Lord Ganesha Royal Thali Pooja Plate',
    description: 'Gold-plated pooja set complete with tiny bowls, incense holder, and Ganesha engraving for marriages & festivals.',
    price: 1599,
    originalPrice: 2200,
    category: 'god-articles',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=600',
    isBestSeller: false,
    isNew: true,
    rating: 4.9
  },
  {
    id: 'p10',
    name: 'Hand-blown Abstract Glass Hourglass',
    description: 'Premium magnetic sand hourglass with standard beechwood neon-lined frame basis. A delightful executive desktop gift.',
    price: 1450,
    category: 'decor',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600',
    isBestSeller: false,
    isNew: false,
    rating: 4.5
  },
  {
    id: 'p11',
    name: 'Modern Nordic Glass Tea Infuser Carafe',
    description: 'Premium heat-resistant borosilicate glass server with micro-laser filter design. Elegant display for fine loose leaves.',
    price: 1399,
    originalPrice: 2000,
    category: 'tea-cups',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=600',
    isBestSeller: false,
    isNew: true,
    rating: 4.8
  },
  {
    id: 'p12',
    name: 'Premium Miniature Ganesh Wooden Temple',
    description: 'A miniature temple shrine handcrafted from rich teakwood, specifically styled for modern compact homes.',
    price: 4500,
    originalPrice: 6000,
    category: 'festivals',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    isNew: true,
    rating: 5.0
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajendra Deshmukh',
    role: 'Chalisgaon Resident',
    comment: 'Zambui Gift Gallery is my go-to shop for Ganesh Chaturthi and family weddings. Their Ganapati Bappa idols look absolutely divine, and the gold leaf work is exquisite!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't2',
    name: 'Sneha Kulkarni',
    role: 'Interior Designer',
    comment: 'The quality of designer tea cups and ceramic pots here is unparalleled. Each piece has a luxury finish that completely elevates living rooms. Incredible collection for Chalisgaon!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't3',
    name: 'Amit Patil',
    role: 'Local Businessman',
    comment: 'I purchased 50 customized premium Diwali dry fruit pots for corporate gifts last year. Excellent service, superb luxury packaging, and really professional behavior.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Ganapati Bappa Divine Idols',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1567591974573-ef3c6beff972?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g2',
    title: 'Gilded Tea Cup Showcase',
    category: 'Ceramics',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g3',
    title: 'Warm Scented Jars & Sconces',
    category: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1606722590583-6951b5ea92ce?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g4',
    title: 'Sacred Pooja Accessories',
    category: 'God Articles',
    image: 'https://images.unsplash.com/photo-1629813204128-bd6992ceba6a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g5',
    title: 'Luxury Terracotta Vases',
    category: 'Flower Pots',
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g6',
    title: 'Deluxe Diwali Lightings',
    category: 'Festivals',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&q=80&w=800'
  }
];
