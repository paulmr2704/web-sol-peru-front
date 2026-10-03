'use client';

import React, { useState } from 'react';
import { ChevronRight, Landmark, Wallet, Shield, CreditCard, X } from 'lucide-react';

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<{name: string, desc: string} | null>(null);

  const categories = [
    {
      title: 'Créditos',
      icon: Landmark,
      items: [
        { name: 'Crédito Personal', desc: 'Dinero de libre disponibilidad para viajes, salud o imprevistos. Evaluación rápida y flexible.' },
        { name: 'MYPE', desc: 'Impulsa tu negocio, compra mercadería o renueva maquinaria. Especial para emprendedores.' },
        { name: 'Agrícola', desc: 'Financiamiento adaptado a los ciclos de cosecha y siembra para potenciar tu producción en el campo.' },
        { name: 'Hipotecario', desc: 'Haz realidad el sueño de la casa propia o la compra de tu terreno con tasas competitivas a largo plazo.' },
        { name: 'Vehicular', desc: 'Adquiere tu auto nuevo o seminuevo para uso particular o como herramienta de trabajo.' },
      ],
    },
    {
      title: 'Ahorros',
      icon: Wallet,
      items: [
        { name: 'Cuenta de Ahorro', desc: 'Ahorra a tu propio ritmo con total disponibilidad de tu dinero y gana intereses diarios.' },
        { name: 'Depósito a Plazo Fijo', desc: 'Maximiza tus ganancias. Inmoviliza tu capital por un tiempo definido a cambio de altas tasas de interés.' },
        { name: 'CTS', desc: 'Traslada tu Compensación por Tiempo de Servicios con nosotros y asegura tu futuro con la mejor tasa.' },
      ],
    },
    {
      title: 'Seguros',
      icon: Shield,
      items: [
        { name: 'Desgravamen', desc: 'Protege a tu familia cancelando la deuda total de tu crédito en caso de fallecimiento o invalidez.' },
        { name: 'Vehicular', desc: 'Cobertura completa para tu vehículo contra accidentes, robos y daños a terceros.' },
        { name: 'Vida', desc: 'Brinda tranquilidad financiera y respaldo a tus seres queridos ante cualquier eventualidad.' },
      ],
    },
    {
      title: 'Tarjetas',
      icon: CreditCard,
      items: [
        { name: 'Tarjeta de débito', desc: 'Realiza compras y retiros de tus cuentas de ahorro en cualquier momento y lugar de forma segura.' },
        { name: 'Tarjeta de crédito', desc: 'Flexibilidad de pago y acceso a promociones exclusivas para tus compras del día a día.' },
      ],
    },
  ];

  return (
    <section id="portafolio" className="py-20 sm:py-24 bg-[#FAF7F2]">
      {/* MODAL DE INFORMACIÓN DEL PRODUCTO */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0A213B]/60 backdrop-blur-sm transition-all duration-300">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setSelectedItem(null)} 
              className="absolute top-5 right-5 text-stone-400 hover:text-[#0A213B] bg-stone-100 hover:bg-stone-200 rounded-full p-1 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-full bg-[#FFF3D6] text-[#D9900B] flex items-center justify-center mb-5">
              <span className="font-bold text-xl">ℹ️</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#0A213B] mb-3 leading-tight">{selectedItem.name}</h3>
            <p className="text-[#4B5563] text-sm leading-relaxed mb-8">{selectedItem.desc}</p>
            <div className="flex flex-col gap-3">
              <a 
                href="#pre-evaluacion" 
                onClick={() => setSelectedItem(null)} 
                className="w-full text-center bg-[#F0A818] text-[#0A213B] font-bold py-3.5 rounded-xl hover:bg-[#E59E15] transition-colors shadow-md"
              >
                Solicitar evaluación
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-bold tracking-widest text-[#165A49] uppercase">
            NUESTRO PORTAFOLIO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0A213B] mt-3">
            Alternativas para organizar, <br className="hidden sm:inline" />
            crecer y proteger.
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF3D6] text-[#0A213B] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#D9900B]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-semibold text-[#0A213B] mb-6">
                    {cat.title}
                  </h3>

                  {/* Product List */}
                  <ul className="space-y-4">
                    {cat.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedItem(item);
                          }}
                          className="w-full flex items-center justify-between text-left text-sm font-medium text-[#4B5563] hover:text-[#0A213B] hover:translate-x-1 transition-all py-1 border-b border-stone-100 group"
                        >
                          <span>{item.name}</span>
                          <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-[#F0A818] transition-colors" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advisory Note */}
        <p className="text-center text-xs sm:text-sm text-[#4B5563] mt-10">
          ¿No sabes cuál elegir? Un asesor puede orientarte según tu necesidad, sin promesas de aprobación.
        </p>

      </div>
    </section>
  );
}
