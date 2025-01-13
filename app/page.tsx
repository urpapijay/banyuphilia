'use client';

import { motion } from "framer-motion";
import { useRef } from "react";

// SVG Components
const AbstractCircles = () => (
  <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" className="text-primary/30"/>
    <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" className="text-primary/40"/>
    <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="1.5" className="text-primary/50"/>
    <circle cx="60" cy="20" r="3" fill="currentColor" className="text-primary/60"/>
    <circle cx="75" cy="20" r="3" fill="currentColor" className="text-primary/60"/>
  </svg>
);

const PageAbstracts = () => (
  <>
    {/* Left Side Abstract */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed left-8 top-1/2 -translate-y-1/2 z-20"
    >
      <svg width="160" height="400" viewBox="0 0 160 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="200" r="60" stroke="currentColor" strokeWidth="1" className="text-primary/10"/>
        <circle cx="80" cy="200" r="40" stroke="currentColor" strokeWidth="1" className="text-primary/20"/>
        <circle cx="80" cy="200" r="20" stroke="currentColor" strokeWidth="1" className="text-primary/30"/>
      </svg>
    </motion.div>
    
    {/* Right Side Abstract */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-20"
    >
      <svg width="120" height="300" viewBox="0 0 120 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="150" r="40" stroke="currentColor" strokeWidth="1" className="text-primary/20"/>
        <circle cx="60" cy="150" r="20" stroke="currentColor" strokeWidth="1" className="text-primary/30"/>
        <circle cx="60" cy="150" r="5" fill="currentColor" className="text-primary/40"/>
      </svg>
    </motion.div>
  </>
);

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const title = "BANYU.PHILIA";

  return (
    <main className="min-h-screen bg-dark overflow-hidden">
      {/* Background Gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-dark via-dark/90 to-primary/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-primary/10" />
        <div className="grain" />
      </div>

      {/* Page Abstracts */}
      <PageAbstracts />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 px-4 sm:px-8 py-4 backdrop-blur-md bg-dark/30 border-b border-white/10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <AbstractCircles />
          </div>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-8 font-jetbrains text-sm">
              <motion.a 
                href="#tracks"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-light/70 hover:text-primary transition-colors"
              >
                TRACKS
              </motion.a>
              <motion.a 
                href="#discography"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-light/70 hover:text-primary transition-colors"
              >
                DISCOGRAPHY
              </motion.a>
              <motion.a 
                href="#connect"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-light/70 hover:text-primary transition-colors"
              >
                CONNECT
              </motion.a>
            </nav>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-monument text-sm text-light hover:text-primary transition-colors"
            >
              BANYU.PHILIA
            </motion.div>
          </div>
        </div>
      </header>

      {/* Credentials Bar */}
      <div className="fixed top-20 left-0 w-full z-40 px-4 sm:px-8 py-2 border-y border-white/10 overflow-x-auto backdrop-blur-sm bg-dark/30">
        <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono text-light/70 whitespace-nowrap min-w-max sm:min-w-0">
          <div className="flex gap-3 sm:gap-6">
            <span>SOUND -</span>
            <motion.div className="flex gap-2 sm:gap-4">
              <span className="hover:text-primary cursor-pointer">ELECTRONIC</span>
              <span className="hover:text-primary cursor-pointer">AMBIENT</span>
              <span className="hover:text-primary cursor-pointer hidden sm:inline">EXPERIMENTAL</span>
            </motion.div>
          </div>
          <div className="flex gap-3 sm:gap-6 ml-4 sm:ml-0">
            <span>GENRE - ELECTRONIC</span>
            <span className="hidden sm:inline">ARTIST - BANYU PHILIA</span>
            <span>SPOTIFY - @BANYUPHILIA</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="relative z-10 min-h-screen pt-48 sm:pt-52 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative min-h-[50vh] flex flex-col items-center justify-center"
          >
            {/* Title Container */}
            <div className="relative">
              {/* Main Title */}
              <motion.h1
                ref={titleRef}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[40px] sm:text-[70px] md:text-[100px] lg:text-[130px] leading-[0.9] font-monument-bold text-light tracking-tight wave-text"
              >
                {title.split('').map((char, i) => (
                  <span
                    key={i}
                    style={{ '--char-index': i } as React.CSSProperties}
                  >
                    {char}
                  </span>
                ))}
              </motion.h1>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute left-0 right-0 top-1/2 -translate-y-1/2"
              >
                <span className="font-twister text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl block">
                  Music Producer & Composer
                </span>
              </motion.div>
            </div>

            {/* Japanese Characters and Icons */}
            <div className="flex items-center gap-4 justify-center mt-12 sm:mt-16">
              <div className="w-6 h-6 rounded-full border border-primary/20" />
              <div className="flex gap-2 text-light/50 font-mono text-sm sm:text-base">
                <span>音楽</span>
                <span className="text-primary/50">•</span>
                <span>創造</span>
              </div>
              <div className="w-6 h-6 rounded-full border border-primary/20" />
            </div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-light/70 font-mono text-sm sm:text-base leading-relaxed max-w-xl mx-auto mt-12"
            >
              EXPLORING THE BOUNDARIES OF SOUND AND RHYTHM. CRAFTING UNIQUE 
              SONIC LANDSCAPES THAT BLEND ELECTRONIC AND AMBIENT ELEMENTS.
            </motion.p>

            {/* Action Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 px-8 py-3 rounded-full border border-primary/20 text-light hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 font-monument group"
            >
              <span className="group-hover:text-primary transition-colors">LISTEN NOW</span>
            </motion.button>

            {/* About Me Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-32 max-w-3xl mx-auto"
            >
              <motion.div 
                className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Abstract Decoration */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/5 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
                
                <div className="relative">
                  <h2 className="font-monument-bold text-2xl sm:text-3xl text-light mb-8 flex items-center gap-4">
                    <span className="text-primary">/</span>
                    ABOUT ME
                    <span className="ml-auto">
                      <AbstractCircles />
                    </span>
                  </h2>
                  
                  <div className="space-y-6 text-light/80 text-sm sm:text-base leading-relaxed">
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1 }}
                      className="pl-4 border-l-2 border-primary/30 font-jetbrains tracking-tight"
                    >
                      Seorang produser musik profesional yang memulai perjalanan kreatifnya sejak 2015. 
                      Dengan dedikasi selama 8 tahun dalam industri musik, telah menghasilkan berbagai karya 
                      yang menggabungkan elemen elektronik modern dengan sentuhan artistik yang unik.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="pl-4 border-l-2 border-primary/50 font-jetbrains tracking-tight"
                    >
                      Berkolaborasi dengan berbagai VTuber dan content creator terkemuka, menunjukkan 
                      kemampuan adaptif dalam menciptakan soundscape yang sesuai dengan visi kreatif setiap proyek.
                      Spesialisasi dalam electronic music production dengan fokus pada ambient dan experimental sound design.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/20"
                    >
                      <p className="italic text-primary/90 font-jetbrains tracking-tight">
                        &ldquo;Musik adalah bahasa universal yang mampu menyampaikan emosi dan cerita melampaui 
                        batasan kata-kata. Setiap komposisi adalah sebuah perjalanan sonic yang unik.&rdquo;
                      </p>
                    </motion.div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-primary font-monument-bold text-xl">8+</div>
                      <div className="text-light/60 text-sm font-jetbrains">Years Experience</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-primary font-monument-bold text-xl">50+</div>
                      <div className="text-light/60 text-sm font-jetbrains">Projects</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                      <div className="text-primary font-monument-bold text-xl">20+</div>
                      <div className="text-light/60 text-sm font-jetbrains">Collaborations</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="fixed bottom-4 sm:bottom-8 left-4 right-4 sm:left-8 sm:right-8 bg-white/5 backdrop-blur-sm rounded-full py-2 sm:py-3 px-4 sm:px-6"
        >
          <div className="flex justify-between items-center font-mono text-xs sm:text-sm overflow-x-auto whitespace-nowrap">
            <div className="flex gap-3 sm:gap-4 items-center">
              <span className="text-light">#ELECTRONIC</span>
              <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex-shrink-0" />
            </div>
            <div className="flex gap-3 sm:gap-4 items-center mx-2 sm:mx-0">
              <span className="text-light">#SOUNDSCAPE</span>
              <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex-shrink-0" />
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="relative z-10 mt-32 pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="border-t border-white/10 pt-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo & Description */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <AbstractCircles />
                  </div>
                  <p className="font-jetbrains text-light/60 text-sm leading-relaxed">
                    Music Producer & Composer based in Indonesia. Creating unique sonic landscapes and emotional experiences through sound.
                  </p>
                </div>

                {/* Quick Links */}
                <div className="md:text-center space-y-4">
                  <h3 className="font-monument-bold text-light text-sm mb-4">QUICK LINKS</h3>
                  <div className="space-y-2 font-jetbrains text-light/60 text-sm">
                    <div className="hover:text-primary transition-colors cursor-pointer">Tracks</div>
                    <div className="hover:text-primary transition-colors cursor-pointer">Discography</div>
                    <div className="hover:text-primary transition-colors cursor-pointer">Connect</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="md:text-right space-y-4">
                  <h3 className="font-monument-bold text-light text-sm mb-4">CONNECT</h3>
                  <div className="space-y-2 font-jetbrains text-light/60 text-sm">
                    <div className="hover:text-primary transition-colors cursor-pointer">Instagram</div>
                    <div className="hover:text-primary transition-colors cursor-pointer">SoundCloud</div>
                    <div className="hover:text-primary transition-colors cursor-pointer">YouTube</div>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="font-jetbrains text-light/40 text-xs">
                    © 2024 BANYU.PHILIA. All rights reserved.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="font-jetbrains text-light/40 text-xs">Made with</span>
                    <span className="text-primary">♥</span>
                    <span className="font-jetbrains text-light/40 text-xs">in Indonesia</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </footer>
      </section>
    </main>
  );
}
