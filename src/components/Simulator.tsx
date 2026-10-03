'use client';

import React, { useState } from 'react';
import { ArrowRight, Info } from 'lucide-react';

export default function Simulator() {
  const [amount, setAmount] = useState<number>(5000);
  const [term, setTerm] = useState<number>(12);
  React.useEffect(() => { localStorage.setItem('simulatedMonto', amount.toString()); localStorage.setItem('simulatedPlazo', term.toString()); }, [amount, term]);

  // Approximate French amortization quota calculation (TEM ~ 2.8% monthly representative)
  const calculateQuota = (monto: number, meses: number) => {
    if (!monto || !meses) return 0;
    const tem = 0.028; // 2.8% mensual referencial
    const cuota = (monto * (tem * Math.pow(1 + tem, meses))) / (Math.pow(1 + tem, meses) - 1);
    return Math.round(cuota * 100) / 100;
  };

  const quota = calculateQuota(amount, term);

  return (
    <section id="simulador" className="py-20 sm:py-24 bg-white border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#165A49] uppercase">
              SIMULA CON CLARIDAD
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0A213B] leading-tight">
              Explora una cuota antes de solicitar.
            </h2>

            <p className="text-base text-[#4B5563] leading-relaxed">
              Ajusta el monto y el plazo para visualizar una referencia. Los parámetros definitivos se confirman durante la evaluación.
            </p>

            <div className="bg-[#FAF7F2] border border-[#EADCB9] rounded-2xl p-4 flex items-start gap-3 text-xs sm:text-sm text-[#4B5563]">
              <Info className="w-5 h-5 text-[#165A49] flex-shrink-0 mt-0.5" />
              <span>
                Esta simulación es informativa y no constituye una oferta ni garantiza aprobación.
              </span>
            </div>
          </div>

          {/* Right Interactive Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F2] border border-[#EADCB9] rounded-3xl p-6 sm:p-10 shadow-lg">
              
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-serif text-2xl font-semibold text-[#0A213B]">
                  Simulador de crédito
                </h3>
                <span className="text-xs font-bold tracking-wider text-[#0A213B] uppercase bg-[#FFF3D6] border border-[#F0A818]/40 px-3 py-1 rounded-full">
                  Configurable
                </span>
              </div>

              {/* Slider 1: Monto */}
              <div className="mb-8 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-[#0A213B]">
                    Monto que necesitas
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-sm font-bold text-[#0A213B]">S/</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      min={500}
                      max={30000}
                      step={500}
                      className="w-36 pl-8 pr-3 py-2 bg-white border border-stone-300 rounded-xl font-bold text-right text-[#0A213B] focus:outline-none focus:ring-2 focus:ring-[#F0A818]"
                    />
                  </div>
                </div>

                <input
                  type="range"
                  min={500}
                  max={30000}
                  step={500}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer"
                />

                <div className="flex justify-between text-xs text-stone-500">
                  <span>S/ 500</span>
                  <span>S/ 30,000</span>
                </div>
              </div>

              {/* Slider 2: Plazo */}
              <div className="mb-8 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-[#0A213B]">
                    Plazo
                  </label>
                  <select
                    value={term}
                    onChange={(e) => setTerm(Number(e.target.value))}
                    className="w-44 px-3 py-2 bg-white border border-stone-300 rounded-xl font-semibold text-[#0A213B] text-sm focus:outline-none focus:ring-2 focus:ring-[#F0A818]"
                  >
                    <option value={3}>3 meses</option>
                    <option value={6}>6 meses</option>
                    <option value={12}>12 meses (1 año)</option>
                    <option value={18}>18 meses</option>
                    <option value={24}>24 meses (2 años)</option>
                    <option value={36}>36 meses (3 años)</option>
                  </select>
                </div>

                <input
                  type="range"
                  min={3}
                  max={36}
                  step={3}
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer"
                />

                <div className="flex justify-between text-xs text-stone-500">
                  <span>3 meses</span>
                  <span>36 meses</span>
                </div>
              </div>

              {/* Estimation Box in Navy */}
              <div className="bg-[#0A213B] text-white rounded-2xl p-6 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-inner">
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-[#F0A818] uppercase">
                    ESTIMACIÓN
                  </span>
                  <p className="text-sm font-medium text-gray-300">
                    Cuota mensual referencial
                  </p>
                </div>

                <div className="text-right">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {quota > 0 ? `S/ ${quota.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : 'Por calcular'}
                  </span>
                </div>
              </div>

              {/* Bottom action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#4B5563]">
                  Completa los campos para ver una cuota referencial.
                </span>

                <a
                  href="#pre-evaluacion"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F0A818] hover:bg-[#E59E15] text-[#0A213B] font-semibold text-sm px-6 py-3.5 rounded-full shadow-md transition-all active:scale-95"
                >
                  Solicitar evaluación
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

