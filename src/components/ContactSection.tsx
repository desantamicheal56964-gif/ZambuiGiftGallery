import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Send, Instagram, Facebook, Share2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    chosenCollection: 'General Interest'
  });
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Package the form details directly into WhatsApp for quick high-touch local checkout!
    const storeNumber = "919422770281"; 
    let text = "*🌸 NEW STORE ENQUIRY - ZAMBUI GIFT GALLERY 🌸*\n\n";
    text += `• *From Name:* ${formData.name}\n`;
    text += `• *Tel Number:* ${formData.phone}\n`;
    text += `• *Curated Interest:* _${formData.chosenCollection}_\n\n`;
    text += `📝 *Enquiry Message:* \n"${formData.message || 'I would like to explore custom catalogs.'}"\n\n`;
    text += `📍 *Request Area:* Chalisgaon Maharashtra Customer`;

    const waLink = `https://api.whatsapp.com/send?phone=${storeNumber}&text=${encodeURIComponent(text)}`;
    window.open(waLink, '_blank');

    setIsSubmitSuccess(true);
    setTimeout(() => {
      setIsSubmitSuccess(false);
      setFormData({ name: '', phone: '', message: '', chosenCollection: 'General Interest' });
    }, 4000);
  };

  const triggerDirectWhatsApp = () => {
    const waUrl = `https://api.whatsapp.com/send?phone=919422770281&text=${encodeURIComponent(
      "Hello Zambui Gift Gallery Team! I am looking for exquisite gift items in Chalisgaon. Could you please show me your latest catalogs? Thank you!"
    )}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-[10%] w-[30vw] h-[30vw] bg-cyan-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-cyan-400 uppercase font-mono mb-2">
            Stay Connected
          </h2>
          <p className="text-3xl sm:text-5xl font-serif font-normal italic text-white tracking-tight leading-tight">
            Contact & <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-400 to-cyan-400 font-sans font-black not-italic drop-shadow-[0_1px_10px_rgba(34,211,238,0.2)]">Store Info</span>
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-500 via-pink-400 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: Store info Cards & Location Outlines */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Store details block */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 space-y-6 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-4">
                <span className="text-xs text-purple-400 font-mono tracking-widest uppercase font-bold px-2.5 py-1 rounded bg-purple-950/20 border border-purple-400/20">
                  FLAGSHIP SHOWROOM
                </span>
                <h3 className="text-3xl font-extrabold text-white font-sans tracking-tight">
                  ZAMBUI GIFT GALLERY
                </h3>
              </div>

              {/* Detail Items */}
              <div className="space-y-5 pt-4">
                {/* Location MapPin */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-sans">Our Address</h4>
                    <p className="text-xs text-gray-400 leading-relaxed mt-1">
                      Hanuman Wadi, <br />
                      Chalisgaon, Maharashtra 424101, India.
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-purple-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-sans">Enquiry Helplines</h4>
                    <p className="text-xs text-gray-400 leading-relaxed mt-1 font-mono">
                      +91 94227 70281 <br />
                      +91 75881 57575
                    </p>
                  </div>
                </div>

                {/* Store Timings */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-pink-400 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-sans">Business Hours</h4>
                    <p className="text-xs text-gray-400 leading-relaxed mt-1">
                      Open Every Day: <strong className="text-white">9:30 AM to 9:00 PM</strong> <br />
                      <span className="text-[10px] text-cyan-400 font-mono tracking-wider">Sundays Active</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels with Neon Glow */}
              <div className="pt-6 border-t border-white/5 flex items-center gap-4">
                <span className="text-xs text-gray-400 font-sans">Follow us:</span>
                
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-rose-500/40 hover:border-rose-400 text-rose-400 hover:bg-rose-500/10 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_10px_rgba(244,63,94,0.15)] hover:shadow-[0_0_15px_rgba(244,63,94,0.35)]"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-cyan-500/40 hover:border-cyan-400 text-cyan-400 hover:bg-cyan-500/10 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_10px_rgba(6,182,212,0.15)] hover:shadow-[0_0_15px_rgba(6,182,212,0.35)]"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Glowing Interactive Google Maps Block with Real Embed */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl text-left relative overflow-hidden flex-1 flex flex-col justify-between min-h-[300px] group/map">
              {/* Real Google Maps Embed Iframe */}
              <iframe
                title="Zambui Gift Gallery Location Map"
                src="https://maps.google.com/maps?q=Zambui%20Gift%20Gallery,%20Hanuman%20Wadi,%20Chalisgaon,%20Maharashtra%20424101&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full opacity-40 group-hover/map:opacity-85 transition-opacity duration-500 border-0 pointer-events-auto filter grayscale-[35%] invert-[90%] hue-rotate-[180deg]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Overlay to ensure readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b14] via-[#090b14]/40 to-[#090b14]/80 pointer-events-none" />

              {/* Pin simulation glowing graphic */}
              <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none z-10">
                <div className="w-12 h-12 rounded-full bg-cyan-400/25 border border-cyan-400/60 flex items-center justify-center animate-ping duration-[2500ms] absolute" />
                <MapPin className="w-9 h-9 text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.9)] relative animate-bounce" />
                <span className="mt-2 px-3 py-1 rounded-full bg-[#090b14ea] border border-cyan-500/50 text-[9px] font-bold text-cyan-300 font-mono uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                  Store Located Here
                </span>
              </div>

              <div className="relative z-10 p-6 pointer-events-none">
                <span className="text-[10px] text-cyan-300 font-mono tracking-widest uppercase font-bold px-2 py-0.5 rounded bg-black/60 border border-cyan-500/20 inline-block">
                  Live Navigation Map
                </span>
                <h4 className="text-lg font-black text-white font-sans mt-2 drop-shadow-md">ZAMBUI GIFT GALLERY, CHALISGAON</h4>
                <p className="text-[11px] text-gray-300 font-sans mt-1 drop-shadow-sm">Open in maps to drive directly</p>
              </div>

              {/* Go to Map deep link button */}
              <div className="relative z-10 p-6 pt-0">
                <a
                  href="https://maps.google.com/?q=Hanuman+Wadi+Chalisgaon+Maharashtra+424101+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xs uppercase tracking-wider text-center transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-1.5 shadow-[0_4px_20px_rgba(34,211,238,0.4)] hover:shadow-[0_4px_25px_rgba(34,211,238,0.6)]"
                  id="maps-direction-btn"
                >
                  <Share2 className="w-4 h-4 text-black" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Sleek Contact Inquiry Form with glassmorphism */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-left relative overflow-hidden h-full flex flex-col justify-between">
              
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-cyan-500/5 rounded-full blur-[80px]" />
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans tracking-tight">
                  Leave a Message
                </h3>
                <p className="text-xs text-gray-400 mt-2 max-w-sm mb-8 leading-relaxed">
                  Have questions about custom Ganesha statues, corporate gifts sizing or special wedding wrapping? Fill out and submit to text us instantly.
                </p>

                {isSubmitSuccess ? (
                  <div className="py-12 text-center space-y-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-6 animate-fade-in my-auto">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                      <MessageSquare className="w-6 h-6 animate-pulse" />
                    </div>
                    <h4 className="text-lg font-bold text-emerald-300">Inquiry Link Prepackaged!</h4>
                    <p className="text-xs text-gray-300 leading-relaxed max-w-sm mx-auto">
                      Leaving a message packs everything elegantly and opens WhatsApp on your device. Please click the prompt on screen to submit.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" id="store-contact-form">
                    
                    {/* Name */}
                    <div>
                      <label htmlFor="name-input" className="block text-xs font-semibold text-gray-400 uppercase tracking-widest font-mono mb-2">
                        Your Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        required
                        placeholder="e.g. Anand Deshmukh"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-cyan-400/50 focus:outline-none focus:ring-0 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone */}
                      <div>
                        <label htmlFor="phone-input" className="block text-xs font-semibold text-gray-400 uppercase tracking-widest font-mono mb-2">
                          WhatsApp Phone <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          id="phone-input"
                          type="tel"
                          required
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-cyan-400/50 focus:outline-none focus:ring-0 transition-colors"
                        />
                      </div>

                      {/* Collection Selector */}
                      <div>
                        <label htmlFor="interest-select" className="block text-xs font-semibold text-gray-400 uppercase tracking-widest font-mono mb-2">
                          Collection Filter
                        </label>
                        <select
                          id="interest-select"
                          value={formData.chosenCollection}
                          onChange={(e) => setFormData({ ...formData, chosenCollection: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-xs focus:border-cyan-400/50 focus:outline-none focus:ring-0 transition-colors"
                        >
                          <option value="General Interest">General Gift Catalogue</option>
                          <option value="Ganapati Bappa Idols">Ganapati Bappa Idols</option>
                          <option value="Designer Tea Cups">Designer Tea Cups</option>
                          <option value="Mahadev Statues">Mahadev Statues</option>
                          <option value="Indian God Articles">Indian God Articles</option>
                          <option value="Flower Pots & Vases">Flower Pots & Vases</option>
                          <option value="Custom Festival Bundling">Festival Hampers</option>
                          <option value="Corporate / Bulk Order">Bulk & Marriages Orders</option>
                        </select>
                      </div>
                    </div>

                    {/* Message box */}
                    <div>
                      <label htmlFor="msg-input" className="block text-xs font-semibold text-gray-400 uppercase tracking-widest font-mono mb-2">
                        Details of your Inquiry
                      </label>
                      <textarea
                        id="msg-input"
                        rows={4}
                        placeholder="Tell us about the sizes, colors or customized packing options you are looking for..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-cyan-400/50 focus:outline-none focus:ring-0 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[1px] shadow-[0_4px_20px_rgba(168,85,247,0.25)] hover:shadow-[0_4px_30px_rgba(6,182,212,0.45)] transition-all duration-300 transform hover:scale-[1.01] active:scale-95"
                    >
                      <span className="block w-full py-4 rounded-[11px] bg-[#0c0d12] text-xs font-bold uppercase tracking-wider text-white group-hover:bg-transparent transition-all flex items-center justify-center gap-2">
                        <Send className="w-4 h-4 text-cyan-400 group-hover:text-black" />
                        <span>Send WhatsApp Inquiry</span>
                      </span>
                    </button>
                  </form>
                )}
              </div>

              {/* Bottom Quick-Chat WhatsApp button */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-400 font-sans">Or connect instantly via live chat:</span>
                <button
                  type="button"
                  onClick={triggerDirectWhatsApp}
                  className="px-6 py-2.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500 hover:text-white border border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
                  id="direct-wa-chat"
                >
                  <MessageSquare className="w-4 h-4 animate-bounce" />
                  <span>Chat with Shopkeeper</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
