import React, { useState, useEffect } from 'react';
import { Product, CategoryKey, CartItem } from './types';
import BackgroundGlow from './components/BackgroundGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import BestSellers from './components/BestSellers';
import FestivalSection from './components/FestivalSection';
import GallerySection from './components/GallerySection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { Sparkles, Check, ShoppingBag, X } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Custom interactive glow Toast notification alert state
  const [toast, setToast] = useState<{ show: boolean; message: string; sub: string } | null>(null);

  // Load from local storage if available for pragmatic state persistence
  useEffect(() => {
    try {
      const persisted = localStorage.getItem('zambui_cart');
      if (persisted) {
        setCartItems(JSON.parse(persisted));
      }
    } catch (e) {
      console.warn('LocalStorage not enabled or empty:', e);
    }
  }, []);

  // Synchronize category search filter parameters on initial mount (e.g. from newly opened tab clicked via festival Show Gifts buttons)
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const categoryParam = urlParams.get('category');
      if (categoryParam) {
        setActiveCategory(categoryParam as CategoryKey);
        
        // Delay slightly to ensure component lifecycle settles, then scroll
        setTimeout(() => {
          const element = document.querySelector('#catalog-explorer');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 400);
      }
    } catch (err) {
      console.warn('URL parsing parameters error:', err);
    }
  }, []);

  // Sync to local storage whenever cart items update
  const saveCartToStorage = (updated: CartItem[]) => {
    setCartItems(updated);
    try {
      localStorage.setItem('zambui_cart', JSON.stringify(updated));
    } catch (e) {
      console.warn('LocalStorage write error:', e);
    }
  };

  const handleAddToCart = (product: Product, showCartDrawer = false) => {
    const existing = cartItems.find((item) => item.product.id === product.id);
    let updated: CartItem[];

    if (existing) {
      updated = cartItems.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updated = [...cartItems, { product, quantity: 1 }];
    }

    saveCartToStorage(updated);

    // If explicit action (e.g. cart button click or buy now button), slide open drawer
    if (showCartDrawer) {
      setIsCartOpen(true);
    } else {
      // Trigger a lush neon glass toast notification alert on screen
      setToast({
        show: true,
        message: `${product.name}`,
        sub: 'Successfully added to your selection bag!'
      });
    }
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    const updated = cartItems
      .map((item) => {
        if (item.product.id === productId) {
          const nextQty = item.quantity + delta;
          return nextQty > 0 ? { ...item, quantity: nextQty } : item;
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    
    saveCartToStorage(updated);
  };

  const handleRemoveItem = (productId: string) => {
    const updated = cartItems.filter((item) => item.product.id !== productId);
    saveCartToStorage(updated);
  };

  const handleClearCart = () => {
    saveCartToStorage([]);
    setIsCartOpen(false);
  };

  // Auto-dismiss the interactive toast alert after 3 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Smooth scroll helper routines for hero button directions
  const scrollSectionToView = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-sans tracking-normal overflow-x-hidden antialiased select-none selection:bg-cyan-500 selection:text-black">
      {/* 1. Immersive Neon Particle Gradient Background */}
      <BackgroundGlow />

      {/* 2. Premium Sticky Translucent Navbar */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* 3. Cinematic Hero Hub */}
      <Hero
        onExploreClick={() => scrollSectionToView('#categories')}
        onVisitClick={() => scrollSectionToView('#contact')}
      />

      {/* 4. Elegant Storytelling About Column */}
      <About />

      {/* 5. Gilded Featured Category Cards */}
      <Categories onSelectCategory={setActiveCategory} />

      {/* 6. Best Sellers Carousel + Realtime Search products catalogue explorer */}
      <BestSellers
        searchQuery={searchQuery}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        onAddToCart={handleAddToCart}
      />

      {/* 7. Sparkly Festival Curations section */}
      <FestivalSection onSelectCategory={setActiveCategory} />

      {/* 8. Masonry Grid Showcase & Zoom lightbox */}
      <GallerySection />

      {/* 9. Verified Customer Reviews and quotes */}
      <Testimonials />

      {/* 10. Contact forms block with prepackaged checkout triggers */}
      <ContactSection />

      {/* 11. Custom Footers */}
      <Footer />

      {/* ========================================================= */}
      {/* Sliding Client Inquiry WhatsApp Cart Drawer Drawer       */}
      {/* ========================================================= */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClear={handleClearCart}
      />

      {/* ========================================================= */}
      {/* Interactive Floating Neon Toast Notification Alert Block */}
      {/* ========================================================= */}
      {toast && (
        <div className="fixed bottom-6 left-6 z-50 max-w-sm w-full bg-[#0d0f19f2] backdrop-blur-2xl border border-cyan-500/30 rounded-2xl p-4 shadow-[0_0_20px_rgba(34,211,238,0.25)] flex items-start gap-3.5 animate-slide-in overflow-hidden">
          {/* Inner neon streak */}
          <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-cyan-400" />
          
          <div className="p-1.5 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 flex items-center justify-center">
            <Check className="w-5 h-5 animate-pulse" />
          </div>

          <div className="flex-1 text-left">
            <h4 className="text-sm font-bold text-white font-sans truncate pr-4">
              {toast.message}
            </h4>
            <p className="text-xs text-gray-400 mt-0.5">
              {toast.sub}
            </p>
            <button
              onClick={() => {
                setToast(null);
                setIsCartOpen(true);
              }}
              className="text-[10px] text-cyan-300 font-bold uppercase tracking-wider mt-2 hover:underline inline-flex items-center gap-1.5"
            >
              <ShoppingBag className="w-3 h-3" /> View Inquiry Bag
            </button>
          </div>

          <button
            onClick={() => setToast(null)}
            className="text-gray-500 hover:text-white rounded-md p-0.5 hover:bg-white/5 transition-colors absolute right-2 top-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Custom styled elements details */}
      <style>{`
        /* Smooth scrolling behaviors across all anchor IDs */
        html {
          scroll-behavior: smooth;
        }
        
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes slide-in {
          0% { transform: translateY(40px); opacity: 0; }
          100% { transform: translateY(0px); opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
