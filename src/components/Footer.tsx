'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A213B] text-white pt-16 pb-12 border-t border-[#14365D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Logo & Mission */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F0A818] flex items-center justify-center shadow-md">
                <div className="w-4 h-4 rounded-full bg-[#0A213B] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#F0A818]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white leading-none">
                  Financiera Sol
                </span>
                <span className="text-[10px] font-bold tracking-widest text-[#F0A818] uppercase mt-0.5">
                  PERÚ
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Soluciones financieras cercanas para personas, emprendedores y familias de Ciudad Constitución.
            </p>

            <div className="inline-flex items-center gap-2 bg-[#14365D] text-gray-300 text-xs px-3 py-1.5 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#F0A818]"></span>
              <span>Canal digital 24/7</span>
            </div>
          </div>

          {/* Col 2: Navegación */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-[#F0A818] uppercase">
              NAVEGACIÓN
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <a href="/#soluciones" className="hover:text-[#F0A818] transition-colors">
                  Créditos
                </a>
              </li>
              <li>
                <a href="/#portafolio" className="hover:text-[#F0A818] transition-colors">
                  Ahorros
                </a>
              </li>
              <li>
                <a href="/#portafolio" className="hover:text-[#F0A818] transition-colors">
                  Seguros
                </a>
              </li>
              <li>
                <a href="/#portafolio" className="hover:text-[#F0A818] transition-colors">
                  Tarjetas
                </a>
              </li>
              <li>
                <a href="/nosotros" className="hover:text-[#F0A818] transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="/#simulador" className="hover:text-[#F0A818] transition-colors">
                  Simulador
                </a>
              </li>
              <li>
                <a href="/#pre-evaluacion" className="hover:text-[#F0A818] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Oficina y Contacto */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-[#F0A818] uppercase">
              OFICINA Y CONTACTO
            </h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="font-semibold text-white">Jr. Ciro Alegría S/N</p>
              <p>Frente a Financiera Confianza</p>
              <p>Ciudad Constitución, Pasco</p>
              <p className="pt-2 text-[#F0A818] font-medium">info@solperu.pe</p>
            </div>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© Financiera Sol Perú · Información institucional</p>
          <div className="flex items-center gap-6">
            <Link href="/politica-de-privacidad" className="hover:text-white transition-colors">
              Protección de datos (Ley N° 29733)
            </Link>
            <Link href="/terminos-y-condiciones" className="hover:text-white transition-colors">
              Términos de uso
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

