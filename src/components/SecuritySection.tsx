'use client';

import React from 'react';
import { CheckCircle2, Lock } from 'lucide-react';

export default function SecuritySection() {
  const points = [
    'Protección de datos durante todo el proceso',
    'Validación segura de identidad',
    'Cifrado para el envío de información',
    'Buenas prácticas de grado financiero',
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-200">
          
          {/* Left Photo: Peruvian Artisan with Smartphone */}
          <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
              alt="Seguridad Financiera Sol Perú"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Right Navy Panel: Security Principles */}
          <div className="lg:col-span-7 bg-[#0A213B] text-white p-8 sm:p-12 lg:p-16 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#F0A818] uppercase">
                TU INFORMACIÓN IMPORTA
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                Seguridad explicada en palabras simples.
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
                Cuidamos tus datos durante el envío, la revisión y el contacto posterior. Nunca compartas claves ni códigos de acceso.
              </p>

              {/* 4 Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#F0A818] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-200 font-medium">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Channel Verification Badge */}
            <div className="bg-[#14365D] border border-white/10 rounded-2xl p-4 flex items-center gap-3 text-xs sm:text-sm text-gray-200">
              <Lock className="w-5 h-5 text-[#F0A818] flex-shrink-0" />
              <span>
                Verifica siempre que estés en el canal oficial de Financiera Sol Perú.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
