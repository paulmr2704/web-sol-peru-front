'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X, ShieldCheck, MapPin, Calculator, Store, PiggyBank, Users } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Bloquear el scroll del fondo cuando la barra lateral esté abierta
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Cerrar al presionar la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggle = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileMenuOpen((prev) => !prev);
  };

  const handleClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full shadow-sm">
        {/* Top Notice Bar */}
        <div className="bg-[#0A213B] text-white text-xs py-2 px-4 sm:px-8 border-b border-[#14365D]">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="font-medium tracking-wide text-gray-300">
              Ciudad Constitución - Pasco
            </span>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="w-2 h-2 rounded-full bg-[#F0A818] animate-pulse"></span>
              <span>Canal digital disponible 24/7</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-white/95 backdrop-blur-md border-b border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-full bg-[#F0A818] flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
                <div className="w-5 h-5 rounded-full bg-[#0A213B] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F0A818]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#0A213B] leading-none">
                  Financiera Sol
                </span>
                <span className="text-[11px] font-bold tracking-widest text-[#165A49] uppercase mt-0.5">
                  PERÚ
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="/#soluciones"
                className="text-[#0A213B] font-medium text-sm hover:text-[#F0A818] transition-colors"
              >
                Créditos
              </a>
              <a
                href="/#portafolio"
                className="text-[#0A213B] font-medium text-sm hover:text-[#F0A818] transition-colors"
              >
                Ahorros
              </a>
              <a
                href="/#portafolio"
                className="text-[#0A213B] font-medium text-sm hover:text-[#F0A818] transition-colors"
              >
                Seguros
              </a>
              <a
                href="/#portafolio"
                className="text-[#0A213B] font-medium text-sm hover:text-[#F0A818] transition-colors"
              >
                Tarjetas
              </a>
              <a
                href="/nosotros"
                className="text-[#0A213B] font-medium text-sm hover:text-[#F0A818] transition-colors"
              >
                Nosotros
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="/#pre-evaluacion"
                className="inline-flex items-center gap-2 bg-[#F0A818] hover:bg-[#E59E15] text-[#0A213B] font-semibold text-sm px-6 py-3 rounded-full shadow-sm transition-all hover:shadow-md hover:translate-x-0.5 active:scale-95"
              >
                Solicitar evaluación
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Botón de apertura de Barra Lateral Móvil con soporte touch directo */}
            <button
              type="button"
              onClick={handleToggle}
              onTouchEnd={handleToggle}
              className="md:hidden p-2.5 rounded-xl text-[#0A213B] bg-stone-100 hover:bg-stone-200 active:scale-90 transition-transform cursor-pointer touch-manipulation focus:outline-none focus:ring-2 focus:ring-[#F0A818]"
              aria-label="Abrir barra lateral"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#0A213B]" />
              ) : (
                <Menu className="w-6 h-6 text-[#0A213B]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ======================================================== */}
      {/* BARRA LATERAL MÓVIL (Off-canvas Drawer)                   */}
      {/* ======================================================== */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[99999] md:hidden animate-in fade-in duration-200">
          {/* Fondo oscuro con efecto blur */}
          <div
            onClick={handleClose}
            onTouchEnd={handleClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
            aria-hidden="true"
          />

          {/* Panel lateral deslizable desde la derecha */}
          <aside
            className="fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-[#0A213B] text-white shadow-2xl flex flex-col justify-between z-10 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación lateral"
          >
            {/* Cabecera de la Barra Lateral */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#F0A818] flex items-center justify-center shadow-md">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#0A213B] flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-[#F0A818]" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-bold tracking-tight text-white leading-none">
                    Financiera Sol
                  </span>
                  <span className="text-[9px] font-bold tracking-widest text-[#F0A818] uppercase mt-0.5">
                    PERÚ
                  </span>
                </div>
              </div>

              {/* Botón cerrar */}
              <button
                type="button"
                onClick={handleClose}
                onTouchEnd={handleClose}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white active:scale-90 transition-all cursor-pointer focus:outline-none"
                aria-label="Cerrar barra lateral"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Enlaces de Navegación de la Barra Lateral */}
            <nav className="p-6 space-y-2 flex-1">
              <span className="text-[10px] font-bold tracking-widest text-[#F0A818] uppercase block mb-3">
                NAVEGACIÓN
              </span>

              <a
                href="/#soluciones"
                onClick={handleClose}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-stone-200 hover:text-white hover:bg-white/10 font-medium text-sm transition-colors active:bg-white/20"
              >
                <Store className="w-4 h-4 text-[#F0A818]" />
                <span>Créditos</span>
              </a>

              <a
                href="/#portafolio"
                onClick={handleClose}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-stone-200 hover:text-white hover:bg-white/10 font-medium text-sm transition-colors active:bg-white/20"
              >
                <PiggyBank className="w-4 h-4 text-[#F0A818]" />
                <span>Ahorros y Plazo Fijo</span>
              </a>

              <a
                href="/#portafolio"
                onClick={handleClose}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-stone-200 hover:text-white hover:bg-white/10 font-medium text-sm transition-colors active:bg-white/20"
              >
                <ShieldCheck className="w-4 h-4 text-[#F0A818]" />
                <span>Seguros y Protección</span>
              </a>

              <a
                href="/#simulador"
                onClick={handleClose}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-stone-200 hover:text-white hover:bg-white/10 font-medium text-sm transition-colors active:bg-white/20"
              >
                <Calculator className="w-4 h-4 text-[#F0A818]" />
                <span>Simulador de Cuotas</span>
              </a>

              <a
                href="/nosotros"
                onClick={handleClose}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-stone-200 hover:text-white hover:bg-white/10 font-medium text-sm transition-colors active:bg-white/20"
              >
                <Users className="w-4 h-4 text-[#F0A818]" />
                <span>Sobre Nosotros</span>
              </a>

              <div className="pt-4 border-t border-white/10 mt-4 space-y-2">
                <span className="text-[10px] font-bold tracking-widest text-[#F0A818] uppercase block">
                  SEDE OFICIAL
                </span>
                <div className="flex items-start gap-2 text-xs text-gray-300">
                  <MapPin className="w-4 h-4 text-[#F0A818] flex-shrink-0 mt-0.5" />
                  <span>Jr. Ciro Alegría S/N (Frente a Financiera Confianza), Ciudad Constitución</span>
                </div>
              </div>
            </nav>

            {/* Pie de la Barra Lateral con CTA */}
            <div className="p-6 border-t border-white/10 space-y-3 bg-[#081a2f]">
              <a
                href="/#pre-evaluacion"
                onClick={handleClose}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#F0A818] hover:bg-[#E59E15] active:scale-95 text-[#0A213B] font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all"
              >
                <span>Solicitar evaluación</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-center text-gray-400">
                Canal digital 24/7 verificado
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}


