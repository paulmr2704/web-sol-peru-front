'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedSolutions from '../components/FeaturedSolutions';
import Portfolio from '../components/Portfolio';
import TrustSection from '../components/TrustSection';
import Simulator from '../components/Simulator';
import StepsSection from '../components/StepsSection';
import SecuritySection from '../components/SecuritySection';
import PreEvaluationForm from '../components/PreEvaluationForm';
import LocationSection from '../components/LocationSection';
import CallToActionBanner from '../components/CallToActionBanner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Soluciones Destacadas */}
      <FeaturedSolutions />

      {/* 4. Portafolio de Productos */}
      <Portfolio />

      {/* 5. Confianza que Acompaña (Navy) */}
      <TrustSection />

      {/* 6. Simulador Interactivo */}
      <Simulator />

      {/* 7. Tres Pasos & Requisitos */}
      <StepsSection />

      {/* 8. Seguridad Explicada */}
      <SecuritySection />

      {/* 9. Formulario Pre-Evaluación */}
      <PreEvaluationForm />

      {/* 10. Ubicación en Ciudad Constitución */}
      <LocationSection />

      {/* 11. Banner CTA */}
      <CallToActionBanner />

      {/* 12. Footer */}
      <Footer />
    </main>
  );
}
