'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function StepsSection() {
  const steps = [
    {
      num: '01',
      title: 'Completa tus datos',
      desc: 'Cuéntanos cómo contactarte y qué producto te interesa.',
      highlight: true,
    },
    {
      num: '02',
      title: 'Evaluamos tu solicitud',
      desc: 'Revisamos la información de acuerdo con el producto elegido.',
      highlight: false,
    },
    {
      num: '03',
      title: 'Un asesor te contacta',
      desc: 'Te explicará el resultado y los siguientes pasos con claridad.',
      highlight: false,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#165A49] uppercase">
              PRE-EVALUACIÓN SIMPLE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0A213B]">
              Tres pasos, siempre <br className="hidden sm:inline" />
              sabiendo qué sigue.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4B5563] max-w-md">
            Enviar tus datos inicia una revisión; no implica aprobación automática.
          </p>
        </div>

        {/* 3 Steps horizontal flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="relative space-y-4">
              {/* Step Badge */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ${
                  step.highlight
                    ? 'bg-[#F0A818] text-[#0A213B]'
                    : 'bg-white text-[#0A213B] border border-stone-300'
                }`}
              >
                {step.num}
              </div>

              <h3 className="font-serif text-2xl font-semibold text-[#0A213B]">
                {step.title}
              </h3>

              <p className="text-sm text-[#4B5563] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Visible Requirements Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[11px] font-bold tracking-widest text-[#165A49] uppercase">
              ANTES DE EMPEZAR
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-semibold text-[#0A213B]">
              Requisitos visibles
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 text-xs sm:text-sm font-semibold text-[#0A213B]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#165A49] flex-shrink-0" />
              <span>Ser mayor de edad</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#165A49] flex-shrink-0" />
              <span>DNI peruano de 8 dígitos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#165A49] flex-shrink-0" />
              <span>Antigüedad mínima de negocio de 6 meses, cuando corresponda</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
