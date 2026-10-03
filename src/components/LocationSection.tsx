'use client';

import React from 'react';
import { MapPin, Mail } from 'lucide-react';

export default function LocationSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#FAF7F2] border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#165A49] uppercase">
              ESTAMOS CERCA
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0A213B] leading-tight">
              Encuéntranos en <br className="hidden sm:inline" />
              Ciudad Constitución.
            </h2>

            <p className="text-base text-[#4B5563] leading-relaxed">
              Visítanos o escríbenos para resolver tus consultas sobre nuestros productos y tu solicitud.
            </p>

            <div className="space-y-6 pt-4">
              {/* Office detail */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-[#165A49] shadow-sm flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#165A49]" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider text-stone-500 uppercase">
                    OFICINA
                  </span>
                  <p className="text-base font-bold text-[#0A213B]">
                    Jr. Ciro Alegría S/N
                  </p>
                  <p className="text-xs text-stone-500">
                    Frente a Financiera Confianza
                  </p>
                </div>
              </div>

              {/* Email detail */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-[#165A49] shadow-sm flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#165A49]" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider text-stone-500 uppercase">
                    CORREO
                  </span>
                  <p className="text-base font-bold text-[#0A213B]">
                    info@solperu.pe
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="/#pre-evaluacion"
                className="inline-flex items-center justify-center border-2 border-[#0A213B] text-[#0A213B] hover:bg-[#0A213B] hover:text-white font-semibold text-sm px-7 py-3 rounded-full transition-all"
              >
                Escribir una consulta
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Vector Map of Ciudad Constitución */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white bg-[#EAE5D9] flex items-center justify-center group">
              
              <img
                src="/mapa.jpeg"
                alt="Mapa de ubicación Financiera Sol Perú"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <a 
                href="https://maps.app.goo.gl/kzJx9CbpLKvPKdaA7"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-stone-200 flex items-center gap-3 hover:bg-white transition-colors cursor-pointer z-10"
              >
                <div className="w-8 h-8 rounded-full bg-[#FFF3D6] flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#D9900B]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0A213B] group-hover:text-[#F0A818] transition-colors">
                    Financiera Sol Perú
                  </p>
                  <p className="text-[11px] text-stone-500">
                    Ciudad Constitución, Pasco
                  </p>
                </div>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
