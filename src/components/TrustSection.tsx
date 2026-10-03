'use client';

import React from 'react';
import { Compass, Clock, Target, ShieldCheck } from 'lucide-react';

export default function TrustSection() {
  const pillars = [
    {
      icon: Compass,
      title: 'Atención local',
      desc: 'Conocemos el contexto de Ciudad Constitución y escuchamos tu historia.',
    },
    {
      icon: Clock,
      title: 'Disponibilidad 24/7',
      desc: 'Envía tu solicitud o consulta por nuestro canal digital cuando lo necesites.',
    },
    {
      icon: Target,
      title: 'Proceso claro',
      desc: 'Te contamos qué sigue y qué información necesitamos en cada etapa.',
    },
    {
      icon: ShieldCheck,
      title: 'Seguridad financiera',
      desc: 'Aplicamos validaciones y buenas prácticas para cuidar tus datos.',
    },
  ];

  return (
    <section id="confianza" className="py-20 sm:py-24 bg-[#0A213B] text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#16375F] rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-bold tracking-widest text-[#F0A818] uppercase">
            CONFIANZA QUE ACOMPAÑA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-3">
            Cercanía real, claridad <br className="hidden sm:inline" />
            desde el inicio.
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#14365D] flex items-center justify-center text-[#F0A818] border border-white/10 shadow-inner">
                  <Icon className="w-6 h-6 text-[#F0A818]" />
                </div>
                <h3 className="font-sans text-lg font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
