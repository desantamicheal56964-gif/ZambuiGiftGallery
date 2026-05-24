import React from 'react';
import { ShoppingBag, X, Trash2, Plus, Minus, Send } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClear: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClear,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const triggerWhatsAppInquiry = () => {
    const storePhoneNumber = "919422770281"; // Real-style store contact for Chalisgaon shop
    let message = "*🌸 INQUIRY FROM ZAMBUI GIFT GALLERY SHOPPER 🌸*\n\n";
    message += "Hello Zambui Gift Gallery Team! I was browsing your modern luxury display and would like to confirm the availability of the following fine gift items:\n\n";
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      message += `   • Category: _${item.product.category}_\n`;
      message += `   • Quantity: *${item.quantity}*\n`;
      message += `   • Unit Price: ₹${item.product.price} | Total: *₹${item.product.price * item.quantity}*\n\n`;
    });

    message += `💰 *Est. Grand Value:* ₹${totalPrice}\n`;
    message += `📍 *Destination:* Chalisgaon Store / Local Collection\n\n`;
    message += "Please let me know if these are in stock or if we can customize them! Thank you.";

    const waUrl = `https://api.whatsapp.com/send?phone=${storePhoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" id="cart-drawer-overlay">
      <div className="absolute inset-0 bg-[#00000088] backdrop-blur-md transition-opacity" onClick={onClose} />
      
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md transform transition-all duration-300">
          <div className="h-full flex flex-col bg-[#0b0c15e6] backdrop-blur-2xl border-l border-white/10 shadow-2xl">
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-purple-950/20 to-cyan-950/20">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-cyan-400" />
                <h2 className="text-xl font-bold tracking-tight text-white font-sans">
                  Inquiry Bag <span className="text-cyan-400 font-mono text-sm">({cartItems.length})</span>
                </h2>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-1.5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                id="close-cart-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-white/5 border border-white/10 text-gray-500 animate-bounce">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Your bag is empty</h3>
                    <p className="text-sm text-gray-400 mt-1 max-w-xs mx-auto">
                      Explore the collection and click "Add to bag" or "Inquiry Now" to start planning your perfect gift inquiry.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-xs text-gray-400 tracking-wider uppercase font-mono">Selected Items</span>
                    <button
                      onClick={onClear}
                      className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 hover:underline transition-all"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Clear All
                    </button>
                  </div>

                  {cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/20 transition-all duration-300 group"
                    >
                      {/* Image Thumbnail */}
                      <div className="w-16 h-16 rounded-lg overflow-hidden border border-white/10 bg-black/40 flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Detail Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-white truncate">{item.product.name}</h4>
                        <p className="text-xs text-gray-400 truncate mt-0.5">{item.product.category}</p>
                        <div className="text-sm font-semibold text-cyan-400 mt-1.5 font-mono">
                          ₹{item.product.price}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-gray-500 hover:text-rose-400 p-1 rounded-md hover:bg-white/5 transition-colors"
                          title="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        
                        <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-lg p-1 scale-90 origin-right">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="text-gray-400 hover:text-white p-0.5 hover:bg-white/5 rounded transition-all"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-semibold text-white px-1.5 font-mono min-w-[14px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="text-gray-400 hover:text-white p-0.5 hover:bg-white/5 rounded transition-all"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-[#090b11fd] space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-sm text-gray-400 font-sans">
                    <span>Inquiry Count</span>
                    <span className="font-mono text-white">{cartItems.reduce((acc, item) => acc + item.quantity, 0)} items</span>
                  </div>
                  <div className="flex justify-between items-baseline pt-2">
                    <span className="text-base font-medium text-white">Estimated Value</span>
                    <span className="text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                      ₹{totalPrice}
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-500 text-center uppercase tracking-wider pt-2">
                    📍 Standard Collection at Chalisgaon, MH
                  </p>
                </div>

                <button
                  onClick={triggerWhatsAppInquiry}
                  className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 p-4 flex items-center justify-center gap-2.5 shadow-[0_4px_25px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.45)] text-white font-semibold transition-all duration-300"
                  id="checkout-whatsapp-btn"
                >
                  <Send className="w-5 h-5 text-white animate-pulse" />
                  <span>Send WhatsApp Inquiry</span>
                </button>
                <div className="text-center text-[11px] text-gray-400">
                  Clicking will open WhatsApp with structured details including item names, custom pricing, and photos. No credit card required!
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
