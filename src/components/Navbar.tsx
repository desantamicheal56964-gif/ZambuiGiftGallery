import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingBag, Gift, Sparkles, MapPin } from 'lucide-react';
import { CategoryKey } from '../types';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeCategory: CategoryKey;
  onCategoryChange: (category: CategoryKey) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  cartCount,
  onOpenCart,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Categories', href: '#categories' },
    { label: 'Best Sellers', href: '#best-sellers' },
    { label: 'Festival Offer', href: '#festival' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#090b14]/75 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-5 border-b border-white/0'
        }`}
        id="app-navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick('#home');
              }}
              className="flex items-center gap-2 group focus:outline-none"
              id="navbar-logo"
            >
              <div className="relative p-2.5 rounded-xl bg-gradient-to-tr from-purple-500/20 via-pink-500/10 to-cyan-500/20 border border-white/10 group-hover:border-cyan-400/50 transition-all duration-500 shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                <Gift className="w-6 h-6 text-cyan-400 group-hover:text-pink-400 transition-colors duration-500 animate-pulse" />
                <Sparkles className="absolute -top-1 -right-1 w-3.5 h-3.5 text-purple-400 animate-bounce delay-75" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 group-hover:brightness-110 transition-all duration-300">
                  ZAMBUI
                </span>
                <span className="text-[10px] font-bold tracking-[0.28em] text-gray-400 uppercase -mt-0.5 font-sans opacity-70">
                  Gift Gallery
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5 bg-white/5 border border-white/5 p-1 rounded-full backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(link.href);
                  }}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300" />
                </a>
              ))}
            </nav>

            {/* Search & Actions Bar */}
            <div className="flex items-center gap-3">
              {/* Desktop Interactive Search Drawer */}
              <div
                className={`relative items-center rounded-full transition-all duration-300 hidden sm:flex ${
                  isSearchActive || searchQuery
                    ? 'w-64 bg-black/40 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)]'
                    : 'w-40 bg-white/5 border border-white/10'
                }`}
              >
                <input
                  type="text"
                  placeholder="Search exotic gifts..."
                  value={searchQuery}
                  onChange={(e) => {
                    onSearchChange(e.target.value);
                    if (e.target.value) {
                      // auto-scroll to best sellers grid where products can be filtered!
                      const pgrid = document.querySelector('#best-sellers');
                      if (pgrid) {
                        pgrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }
                  }}
                  onFocus={() => setIsSearchActive(true)}
                  onBlur={() => setIsSearchActive(false)}
                  className="w-full bg-transparent border-none text-white placeholder-gray-500 text-xs px-4 py-2 focus:ring-0 focus:outline-none"
                />
                <Search className={`w-4 h-4 mr-3 transition-colors ${searchQuery ? 'text-cyan-400' : 'text-gray-400'}`} />
              </div>

              {/* Inquiry Cart Action Bag Button */}
              <button
                onClick={onOpenCart}
                className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/40 transition-all duration-300 group scale-100 active:scale-95 text-center flex items-center justify-center cursor-pointer"
                title="View Inquiry Bag"
                id="cart-trigger-btn"
              >
                <ShoppingBag className="w-5 h-5 text-gray-300 group-hover:text-purple-400 transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full border border-black bg-gradient-to-r from-cyan-500 to-purple-500 text-[10px] font-bold text-white flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Visit Store theme action button */}
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="hidden sm:block px-5 py-2 bg-white/5 border border-[#ffffff1a] rounded-full text-[10px] uppercase font-bold tracking-widest hover:bg-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-all text-center cursor-pointer"
              >
                Visit Store
              </button>

              {/* Mobile hamburger menu */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 lg:hidden text-gray-400 hover:text-white"
                id="mobile-drawer-btn"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Flyout Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#090b14e6] backdrop-blur-2xl border-b border-white/10 shadow-2xl py-6 px-4 space-y-5 animate-fade-in">
            {/* Mobile Search input */}
            <div className="relative flex items-center rounded-xl bg-black/40 border border-white/10 w-full px-3">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search toys, bone china, ganapati..."
                value={searchQuery}
                onChange={(e) => {
                  onSearchChange(e.target.value);
                  const pgrid = document.querySelector('#best-sellers');
                  if (pgrid) {
                    pgrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="w-full bg-transparent border-none text-white placeholder-gray-500 text-xs px-3 py-3 focus:outline-none"
              />
              {searchQuery && (
                <button onClick={() => onSearchChange('')} className="text-gray-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(link.href);
                  }}
                  className="p-3 text-center rounded-xl bg-white/5 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/10 hover:border hover:border-cyan-500/20 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Chalisgaon location pin badge */}
            <div className="flex items-center gap-2 justify-center p-3 rounded-xl border border-white/5 bg-gradient-to-r from-purple-950/10 to-cyan-950/10 text-xs text-cyan-300 font-mono">
              <MapPin className="w-4 h-4 text-purple-400" />
              Chalisgaon Store, Maharashtra, India
            </div>
          </div>
        )}
      </header>
    </>
  );
}
