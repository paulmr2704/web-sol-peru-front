'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CallToActionBanner() {
  return (
    <section className="bg-[#F0A818] py-14 sm:py-16 text-[#0A213B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-[#0A213B]/80 uppercase">
              TU PROGRESO, NUESTRA MISIÓN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0A213B] leading-tight">
              Conversemos sobre el siguiente <br className="hidden sm:inline" />
              paso para tu proyecto.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#pre-evaluacion"
              className="inline-flex items-center gap-2 bg-[#0A213B] hover:bg-[#0D2744] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg transition-all active:scale-95"
            >
              Solicitar evaluación
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#simulador"
              className="inline-flex items-center justify-center bg-white hover:bg-stone-50 text-[#0A213B] font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md transition-all active:scale-95"
            >
              Simular crédito
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
