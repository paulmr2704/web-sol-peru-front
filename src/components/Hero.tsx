'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-12 pb-20 sm:pt-16 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-[#F5E8C7] border border-[#E8D4A6] rounded-full px-4 py-1.5 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#0A213B]" />
              <span className="text-xs font-semibold text-[#0A213B]">
                Finanzas que nacen cerca de ti
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0A213B] leading-[1.12] tracking-tight">
              Impulsamos lo que construyes cada día.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl">
              Soluciones claras para personas, emprendedores y familias de nuestra zona. 
              <span className="font-semibold text-[#0A213B]"> Tu progreso, nuestra misión.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#pre-evaluacion"
                className="inline-flex items-center gap-2 bg-[#F0A818] hover:bg-[#E59E15] text-[#0A213B] font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                Solicitar evaluación
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#simulador"
                className="inline-flex items-center justify-center border-2 border-[#0A213B] text-[#0A213B] hover:bg-[#0A213B] hover:text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all active:scale-95"
              >
                Simular crédito
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-8 pt-6">
              <a href="https://www.tiktok.com/@isaiascarlosmore?_r=1&_t=ZS-9ACz22tWeU0" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-80 transition-opacity hover:scale-110 transform duration-200" aria-label="TikTok">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1DeUz5q1xD/" target="_blank" rel="noopener noreferrer" className="text-[#1877F2] hover:opacity-80 transition-opacity hover:scale-110 transform duration-200" aria-label="Facebook">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://youtube.com/shorts/vEYIpwDwhJ4?si=H-Cx7gFyTx6jJmcd" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:opacity-80 transition-opacity hover:scale-110 transform duration-200" aria-label="YouTube">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image with Floating Quote */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Photo Container with Rounded Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[1.15/1] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/80 bg-stone-100">
                <video
                  src="/video1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle vignette/lighting */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Bodega sign simulation on top right corner */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-[11px] font-semibold text-white tracking-wide uppercase">
                  BODEGA "MI DULCE HOGAR" - CIUDAD CONSTITUCIÓN
                </div>
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 left-4 sm:left-8 bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-xl border border-stone-200/80 max-w-xs sm:max-w-sm transition-transform hover:-translate-y-1">
                <p className="font-serif text-[#0A213B] text-base sm:text-lg font-semibold leading-snug">
                  “Cerca para escucharte, claros para acompañarte.”
                </p>
                <p className="text-xs text-[#165A49] font-bold uppercase tracking-wider mt-2">
                  Financiera Sol Perú
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
