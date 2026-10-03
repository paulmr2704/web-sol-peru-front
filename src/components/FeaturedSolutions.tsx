'use client';

import React from 'react';
import { ArrowUpRight, ArrowRight, Store, PiggyBank, ShieldCheck } from 'lucide-react';

export default function FeaturedSolutions() {
  return (
    <section id="soluciones" className="py-20 sm:py-24 bg-white border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#165A49] uppercase">
              SOLUCIONES DESTACADAS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0A213B] leading-tight">
              Un impulso para cada <br className="hidden sm:inline" />
              momento de tu progreso.
            </h2>
          </div>
          <p className="text-base text-[#4B5563] max-w-md">
            Elige una alternativa según tu objetivo. Te orientamos con información simple antes de empezar.
          </p>
        </div>

        {/* 3 Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Crédito Emprende Ya (Active / Dark Navy Card) */}
          <div className="relative bg-[#0D2744] text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl overflow-hidden group">
            
            {/* Background circular accent */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full border-[18px] border-[#16375F] pointer-events-none group-hover:scale-110 transition-transform duration-500" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] text-[#0A213B] flex items-center justify-center shadow-md">
                  <Store className="w-6 h-6 text-[#0A213B]" />
                </div>
                <span className="text-xs font-bold tracking-wider text-[#F0A818] uppercase bg-[#14365D] px-3 py-1 rounded-full">
                  PARA EMPRENDER
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-3">
                Crédito Emprende Ya
              </h3>
              <p className="text-[#CBD5E1] text-sm leading-relaxed mb-8">
                Capital para poner en marcha o fortalecer las ideas que mueven tu negocio.
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/10 z-10">
              <a
                href="#simulador"
                className="text-sm font-semibold text-[#F0A818] hover:text-[#FCD685] transition-colors inline-flex items-center gap-1.5"
              >
                Conocer más
              </a>
              <a
                href="#pre-evaluacion"
                className="w-11 h-11 rounded-full bg-[#183E6C] group-hover:bg-[#F0A818] group-hover:text-[#0A213B] text-white flex items-center justify-center transition-all shadow-md"
                aria-label="Solicitar Crédito Emprende Ya"
              >
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
              </a>
            </div>
          </div>

          {/* Card 2: Ahorro Futuro (Warm Off-white Card) */}
          <div className="bg-[#FAF7F2] border border-[#EADCB9] text-[#0A213B] rounded-3xl p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white text-[#165A49] flex items-center justify-center shadow-sm border border-stone-200">
                  <PiggyBank className="w-6 h-6 text-[#165A49]" />
                </div>
                <span className="text-xs font-bold tracking-wider text-[#165A49] uppercase bg-[#E3F2ED] px-3 py-1 rounded-full">
                  PARA AVANZAR
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0A213B] mb-3">
                Ahorro Futuro
              </h3>
              <p className="text-[#4B5563] text-sm leading-relaxed mb-8">
                Construye una reserva para tus próximos proyectos con acompañamiento cercano.
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-stone-200/80">
              <a
                href="#portafolio"
                className="text-sm font-semibold text-[#0A213B] hover:text-[#F0A818] transition-colors inline-flex items-center gap-1"
              >
                Conocer más
              </a>
              <a
                href="#pre-evaluacion"
                className="text-[#0A213B] hover:text-[#F0A818] transition-colors"
                aria-label="Conocer más Ahorro Futuro"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Card 3: Protección 365 (Warm Off-white Card) */}
          <div className="bg-[#FAF7F2] border border-[#EADCB9] text-[#0A213B] rounded-3xl p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white text-[#165A49] flex items-center justify-center shadow-sm border border-stone-200">
                  <ShieldCheck className="w-6 h-6 text-[#165A49]" />
                </div>
                <span className="text-xs font-bold tracking-wider text-[#165A49] uppercase bg-[#E3F2ED] px-3 py-1 rounded-full">
                  PARA PROTEGER
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0A213B] mb-3">
                Protección 365
              </h3>
              <p className="text-[#4B5563] text-sm leading-relaxed mb-8">
                Respaldo pensado para cuidar lo que has construido y a quienes más importan.
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-stone-200/80">
              <a
                href="#portafolio"
                className="text-sm font-semibold text-[#0A213B] hover:text-[#F0A818] transition-colors inline-flex items-center gap-1"
              >
                Conocer más
              </a>
              <a
                href="#pre-evaluacion"
                className="text-[#0A213B] hover:text-[#F0A818] transition-colors"
                aria-label="Conocer más Protección 365"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Center CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="#pre-evaluacion"
            className="inline-flex items-center gap-2 bg-[#F0A818] hover:bg-[#E59E15] text-[#0A213B] font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Solicitar evaluación
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
