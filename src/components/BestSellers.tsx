import React, { useState, useRef, useEffect } from 'react';
import { CATEGORIES, PRODUCTS } from '../data';
import { Product, CategoryKey } from '../types';
import { ChevronLeft, ChevronRight, Star, ShoppingBag, Send, Sparkles, SlidersHorizontal, Search } from 'lucide-react';

interface BestSellersProps {
  searchQuery: string;
  activeCategory: CategoryKey;
  onCategoryChange: (category: CategoryKey) => void;
  onAddToCart: (product: Product, showBag?: boolean) => void;
}

export default function BestSellers({
  searchQuery,
  activeCategory,
  onCategoryChange,
  onAddToCart,
}: BestSellersProps) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  // Best seller products for the animated header carousel
  const bestSellerProducts = PRODUCTS.filter((p) => p.isBestSeller);

  // Catalog filtered products (supports both active category pills and main searchable input)
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev === bestSellerProducts.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev === 0 ? bestSellerProducts.length - 1 : prev - 1));
  };

  // Auto-play the best sellers carousel softly
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselIndex]);

  const [showPhoneForId, setShowPhoneForId] = useState<Record<string, boolean>>({});
  const [showPhoneForCarousel, setShowPhoneForCarousel] = useState(false);

  const handleInquiryClick = (productId: string) => {
    setShowPhoneForId(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  // Instant pre-formatted WhatsApp link for single checkout inquiries
  const triggerSingleWhatsAppInquiry = (product: Product) => {
    const storePhoneNumber = "919422770281"; 
    let message = "*🌸 PREMIUM GIFT AVAILABILITY CHECK 🌸*\n\n";
    message += `Hello Zambui Gift Gallery! I am highly interested in checking the stock and pricing of this specific product:\n\n`;
    message += `🎁 *Item:* ${product.name}\n`;
    message += `📂 *Category:* ${product.category}\n`;
    message += `💰 *Exclusive Price:* ₹${product.price}\n`;
    message += `📍 *Store Location:* Chalisgaon, Maharashtra\n\n`;
    message += `Could you please advise if this item is ready for collection or can be gift-wrapped today? Thank you!`;
    
    const waUrl = `https://api.whatsapp.com/send?phone=${storePhoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="best-sellers" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Carousel Heading block */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-[0.3em] text-fuchsia-400 uppercase font-mono mb-2">
            Top Trends
          </h2>
          <p className="text-3xl sm:text-5xl font-serif font-normal italic text-white tracking-tight leading-tight">
            Most Loved <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-400 to-cyan-400 font-sans font-black not-italic drop-shadow-[0_1px_10px_rgba(34,211,238,0.2)]">Treasures</span>
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto mb-24 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-4 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* Decorative neon ambient backlights inside the carousel */}
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-purple-500/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-cyan-500/10 rounded-full blur-[80px]" />

          {/* Active slide view */}
          <div className="relative min-h-[300px] sm:min-h-[360px] flex flex-col md:flex-row items-center gap-8 z-10">
            {/* Image section */}
            <div className="w-full md:w-1/2 h-[220px] sm:h-[300px] rounded-2xl overflow-hidden border border-white/10 relative group">
              <img
                src={bestSellerProducts[carouselIndex]?.image}
                alt={bestSellerProducts[carouselIndex]?.name}
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Highlight glass glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 text-[10px] font-bold font-mono tracking-wider bg-purple-500 border border-purple-400 text-white rounded-full uppercase shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                  Best Seller
                </span>
                <span className="px-3 py-1 text-[10px] font-bold font-mono tracking-wider bg-black/60 border border-white/20 text-yellow-400 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {bestSellerProducts[carouselIndex]?.rating}
                </span>
              </div>
            </div>

            {/* Product description details */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 text-left">
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-cyan-400 font-bold">
                Category: {bestSellerProducts[carouselIndex]?.category.replace('-', ' ')}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
                {bestSellerProducts[carouselIndex]?.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                {bestSellerProducts[carouselIndex]?.description}
              </p>

              {/* Price Tag with modern discount layouts */}
              <div className="flex items-baseline gap-3 pt-2">
                <span className="text-3xl font-black font-mono text-cyan-400">
                  ₹{bestSellerProducts[carouselIndex]?.price}
                </span>
                {bestSellerProducts[carouselIndex]?.originalPrice && (
                  <span className="text-sm text-gray-500 line-through font-mono">
                    ₹{bestSellerProducts[carouselIndex]?.originalPrice}
                  </span>
                )}
                <span className="text-xs text-rose-400 font-bold font-sans bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                  Special Offer Price
                </span>
              </div>

              {/* Action buttons inside Carousel */}
              <div className="flex flex-col space-y-3 pt-3 w-full">
                <div className="flex flex-wrap gap-3">
                  {/* Add to Bag */}
                  <button
                    onClick={() => onAddToCart(bestSellerProducts[carouselIndex], true)}
                    className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 border border-cyan-400/40 text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-[0_4px_15px_rgba(6,182,212,0.3)] hover:shadow-[0_4px_20px_rgba(6,182,212,0.5)] cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4 text-black" />
                    <span>Add to Inquiry</span>
                  </button>

                  {/* Instant Buy WhatsApp -> Inquiry Now */}
                  <button
                    onClick={() => setShowPhoneForCarousel(!showPhoneForCarousel)}
                    className={`px-6 py-3.5 rounded-xl border font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
                      showPhoneForCarousel
                        ? 'bg-cyan-500 text-black border-cyan-400'
                        : 'bg-[#10b98133] hover:bg-emerald-500 text-emerald-400 hover:text-white border-emerald-500/40 hover:border-emerald-500/60'
                    }`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Inquiry Now</span>
                  </button>
                </div>

                {/* Display Inquiry Phone Number just below the carousel option as requested */}
                {showPhoneForCarousel && (
                  <div className="p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/20 text-left animate-[fadeIn_0.3s_ease-out] flex flex-col sm:flex-row sm:items-center justify-between gap-3 max-w-md w-full">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-cyan-300 font-bold font-mono">
                        Direct Inquiry Line:
                      </p>
                      <a 
                        href="tel:+919422770281" 
                        className="text-sm font-black font-mono text-white hover:text-cyan-400 hover:underline block mt-0.5"
                      >
                        📞 +91 94227 70281
                      </a>
                    </div>
                    <button
                      onClick={() => triggerSingleWhatsAppInquiry(bestSellerProducts[carouselIndex])}
                      className="px-3.5 py-2 rounded bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-[10px] uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span>WhatsApp Info</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Carousel Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all z-20 focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all z-20 focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Pager Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6 z-10 relative">
            {bestSellerProducts.map((_, i) => (
              <button
                key={i}
                onClick={() => setCarouselIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  carouselIndex === i ? 'w-6 bg-cyan-400' : 'w-2 bg-gray-600'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* Dynamic Catalog Section (Filters & Search Grid combined!) */}
        {/* ======================================================== */}
        <div className="border-t border-white/10 pt-16 mt-16" id="catalog-explorer">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white font-sans flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-cyan-400 animate-pulse" />
                Store Catalog Explorer
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Filter by categories or type anything above in the search box.
              </p>
            </div>

            {/* Custom Search field if user has not scrolls to navbar search */}
            <div className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-full px-4 py-2 font-mono flex items-center gap-1">
              <span>Showing:</span>
              <strong className="text-cyan-300">{filteredProducts.length} unique treasures</strong>
            </div>
          </div>

          {/* Filter Pills list */}
          <div className="flex gap-2.5 overflow-x-auto pb-4 scrollbar-hidden select-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {/* "All" button */}
            <button
              onClick={() => onCategoryChange('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-black border-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.3)] font-black'
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              All Collections
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => onCategoryChange(cat.key)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-black border-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.3)] font-black'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Interactive Catalog Grid (Products matching filters) */}
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center rounded-2xl border border-white/5 bg-white/[0.01]">
              <Search className="w-10 h-10 text-gray-600 mx-auto mb-4 animate-pulse" />
              <p className="text-gray-400 font-sans">No matching gifts found for search query: "{searchQuery}".</p>
              <button
                onClick={() => {
                  onCategoryChange('all');
                  // Trigger reset search by scrolling navbar search to custom input trigger
                  const inp = document.querySelectorAll('input');
                  inp.forEach((i) => i.value = '');
                }}
                className="mt-4 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all text-xs text-cyan-400 rounded-lg"
              >
                Reset Store Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
              {filteredProducts.map((p) => {
                return (
                  <div
                    key={p.id}
                    className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-lg hover:bg-white/[0.05] shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.7)] hover:-translate-y-2.5 transition-all duration-500 p-4 flex flex-col justify-between"
                  >
                    {/* Inner ambient glows per item card */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-cyan-500/5 to-transparent rounded-t-2xl group-hover:from-cyan-400/10 transition-colors" />

                    <div>
                      {/* Image block */}
                      <div className="relative w-full h-[180px] rounded-xl overflow-hidden border border-white/5 flex-shrink-0">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        {/* Shimmer effect reflection */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

                        {/* Top badges floating */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1.5">
                          {p.isNew && (
                            <span className="px-2.5 py-0.5 text-[8px] font-bold font-mono tracking-wider bg-cyan-500 border border-cyan-400 text-black rounded-lg uppercase">
                              New Collection
                            </span>
                          )}
                          {p.isBestSeller && (
                            <span className="px-2.5 py-0.5 text-[8px] font-bold font-mono tracking-wider bg-purple-500 border border-purple-400 text-white rounded-lg uppercase">
                              Best Seller
                            </span>
                          )}
                        </div>

                        {/* Rating bottom overlay */}
                        <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/10 flex items-center gap-1 text-[10px] font-semibold text-yellow-400 font-mono">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>{p.rating}</span>
                        </div>
                      </div>

                      {/* Info details */}
                      <div className="mt-4 text-left">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#cfd3ee]/60">
                          {p.category.replace('-', ' ')}
                        </span>
                        <h4 className="text-base font-bold text-white truncate font-sans mt-0.5 tracking-tight group-hover:text-cyan-300 transition-colors">
                          {p.name}
                        </h4>
                        <p className="text-xs text-gray-400 line-clamp-2 mt-1 leading-relaxed min-h-[32px]">
                          {p.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Buy Control bar */}
                    <div className="mt-5 pt-3 border-t border-white/5">
                      <div className="flex items-center justify-between">
                        <div className="text-left">
                          <span className="text-[10px] text-gray-500 uppercase block font-mono">Special Price</span>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-xl font-bold font-mono text-white group-hover:text-cyan-400 transition-colors">
                              ₹{p.price}
                            </span>
                            {p.originalPrice && (
                              <span className="text-xs text-gray-500 line-through font-mono">
                                ₹{p.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-1">
                          {/* Main Button is Add to Bag */}
                          <button
                            onClick={() => onAddToCart(p)}
                            className="bg-white/5 hover:bg-cyan-500 text-gray-300 hover:text-black hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] p-2.5 rounded-xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 cursor-pointer"
                            title="Add to Inquiry Bag"
                          >
                            <ShoppingBag className="w-4 h-4" />
                          </button>

                          {/* Quick Message Inquire (Inquiry Now) */}
                          <button
                            onClick={() => handleInquiryClick(p.id)}
                            className={`px-3 rounded-xl border text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                              showPhoneForId[p.id]
                                ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                                : 'bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white border-emerald-500/20 hover:border-emerald-400/40'
                            }`}
                          >
                            Inquiry Now
                          </button>
                        </div>
                      </div>

                      {/* Display Inquiry Phone Number just below the option as requested */}
                      {showPhoneForId[p.id] && (
                        <div className="mt-3.5 p-2.5 rounded-xl bg-cyan-950/50 border border-cyan-500/30 text-center animate-[fadeIn_0.3s_ease-out] flex flex-col items-center justify-center gap-1.5 w-full">
                          <span className="text-[9px] uppercase tracking-widest text-cyan-300 font-bold font-mono">
                            Call direct to inquiry:
                          </span>
                          <div className="flex items-center gap-2 flex-wrap justify-center">
                            <a 
                              href="tel:+919422770281" 
                              className="text-xs font-black font-mono text-white hover:text-cyan-400 leading-none hover:underline flex items-center gap-1"
                            >
                              📞 +91 94227 70281
                            </a>
                            <span className="text-white/20 text-xs">|</span>
                            <button
                              onClick={() => triggerSingleWhatsAppInquiry(p)}
                              className="text-[10px] font-mono text-emerald-400 hover:text-emerald-300 hover:underline leading-none flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
                            >
                              WhatsApp Info
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
