import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { FileText, AlertCircle, ArrowLeft, ShieldAlert } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones de Uso | Financiera Sol Perú',
  description:
    'Términos y condiciones de uso del portal web oficial de Financiera Sol Perú en Ciudad Constitución.',
};

export default function TerminosCondicionesPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col justify-between">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#165A49] hover:text-[#0A213B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>

        {/* Header */}
        <div className="bg-[#0A213B] rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-12">
          <div className="inline-flex items-center gap-2 bg-[#14365D] text-[#F0A818] text-xs font-bold px-3 py-1.5 rounded-full border border-white/10 uppercase tracking-widest mb-4">
            <FileText className="w-4 h-4" />
            Canal Digital Oficial
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white mb-4">
            Términos y Condiciones de Uso
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
            Condiciones aplicables al acceso, navegación y utilización de los servicios informativos y de pre-evaluación en línea de Financiera Sol Perú.
          </p>
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs text-gray-400">
            <span>Vigente para el año 2026</span>
            <span>·</span>
            <span>Ciudad Constitución, Pasco, Perú</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-10 text-stone-700 leading-relaxed text-sm sm:text-base">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#0A213B]">
              1. Aceptación de los Términos
            </h2>
            <p>
              El acceso y uso de este sitio web atribuye la condición de usuario a toda persona natural o jurídica que navegue por el mismo. Al interactuar con el portal o remitir solicitudes de pre-evaluación, el usuario acepta de manera plena y sin reservas los presentes Términos y Condiciones.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#0A213B]">
              2. Carácter Informativo y Simulaciones
            </h2>
            <p>
              La información contenida en este sitio web, así como los cálculos generados a través de nuestro <strong>Simulador de Créditos</strong>, tienen carácter meramente referencial, didáctico e ilustrativo.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-xs sm:text-sm text-amber-900">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>
                El uso del simulador o el envío del formulario de pre-evaluación <strong>no constituye una oferta vinculante ni garantiza la aprobación automática de créditos</strong>. Toda operación crediticia está sujeta a la evaluación formal de antecedentes, sustento de ingresos y aprobación del comité correspondiente.
              </span>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#0A213B]">
              3. Alerta de Seguridad y Prevención de Fraude
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-red-900 text-xs sm:text-sm space-y-2">
              <div className="flex items-center gap-2 font-bold text-red-800">
                <ShieldAlert className="w-5 h-5 text-red-600" />
                <span>Advertencia Importante contra el Phishing y Estafas</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-red-700">
                <li>Financiera Sol Perú <strong>NUNCA</strong> le solicitará depósitos previos de dinero, pagos por trámites ni comisiones anticipadas para desembolsar un préstamo.</li>
                <li>Nuestros asesores nunca solicitarán sus claves secretas, contraseñas de correo ni códigos OTP.</li>
                <li>Asegúrese siempre de que la dirección en su navegador comience con el protocolo seguro <code>https://</code> y corresponda a nuestro dominio institucional verificado.</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#0A213B]">
              4. Uso Responsable del Canal Digital
            </h2>
            <p>
              El usuario se compromete a hacer un uso diligente y de buena fe del portal, absteniéndose de:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-stone-600">
              <li>Ingresar datos falsos, inexactos o pertenecientes a terceras personas sin su autorización legal.</li>
              <li>Intentar vulnerar los mecanismos de seguridad perimetrales, WAF o capas de protección Cloudflare.</li>
              <li>Ejecutar scripts automatizados, robots o software de scraping para extraer contenidos o saturar el servicio.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#0A213B]">
              5. Propiedad Intelectual y Jurisdicción
            </h2>
            <p>
              Todos los logotipos, diseños, marcas, textos y elementos visuales son de propiedad exclusiva de Financiera Sol Perú. Para cualquier controversia derivada del uso de este portal, las partes se someten a la competencia de los jueces y tribunales del Distrito Judicial de Pasco, Perú.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
