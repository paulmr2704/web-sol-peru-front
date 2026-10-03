import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { ShieldCheck, Lock, FileText, ArrowLeft, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad y Protección de Datos | Financiera Sol Perú',
  description:
    'Política de Privacidad y Protección de Datos Personales de Financiera Sol Perú conforme a la Ley N° 29733 y estándares ISO/IEC 27001.',
};

export default function PoliticaPrivacidadPage() {
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
            <ShieldCheck className="w-4 h-4" />
            Cumplimiento Ley N° 29733 & ISO/IEC 27001
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white mb-4">
            Política de Privacidad y Protección de Datos
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
            En Financiera Sol Perú nos comprometemos a garantizar la confidencialidad, integridad y disponibilidad de la información de nuestros clientes y usuarios.
          </p>
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs text-gray-400">
            <span>Última actualización: Septiembre 2026</span>
            <span>·</span>
            <span>Ciudad Constitución, Pasco, Perú</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-10 text-stone-700 leading-relaxed text-sm sm:text-base">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#0A213B]">
              1. Identidad y Domicilio del Responsable del Tratamiento
            </h2>
            <p>
              El titular del banco de datos personales y responsable del tratamiento de los datos recabados en este portal es <strong className="text-[#0A213B]">Financiera Sol Perú</strong>, con domicilio en Jr. Ciro Alegría S/N (frente a Financiera Confianza), Distrito de Ciudad Constitución, Provincia de Oxapampa, Departamento de Pasco, Perú.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#0A213B]">
              2. Marco Normativo y Estándares de Seguridad
            </h2>
            <p>
              Esta política se rige en estricto cumplimiento de la <strong className="text-[#0A213B]">Ley N° 29733</strong> (Ley de Protección de Datos Personales del Perú), su Reglamento aprobado por <strong className="text-[#0A213B]">D.S. N° 003-2013-JUS</strong> y adopta las directivas de seguridad de la información del estándar internacional <strong className="text-[#0A213B]">ISO/IEC 27001:2022</strong> (Controles A.8.11 de Enmascaramiento y A.8.28 de Codificación Segura).
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#0A213B]">
              3. Datos Personales Recopilados
            </h2>
            <p>
              A través de nuestro formulario de pre-evaluación digital, se recolectan exclusivamente los siguientes datos necesarios para la atención de su requerimiento:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-stone-600">
              <li>Nombre completo y apellidos.</li>
              <li>Documento Nacional de Identidad (DNI).</li>
              <li>Número de teléfono móvil de contacto.</li>
              <li>Dirección de correo electrónico.</li>
              <li>Producto o servicio financiero de interés.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#0A213B]">
              4. Finalidad del Tratamiento
            </h2>
            <p>
              Sus datos serán tratados para los siguientes fines explícitos y legítimos:
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#165A49] flex-shrink-0 mt-0.5" />
                <span>Atender su solicitud de contacto y consulta sobre productos financieros.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#165A49] flex-shrink-0 mt-0.5" />
                <span>Realizar la pre-evaluación crediticia preliminar según los requisitos institucionales.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#165A49] flex-shrink-0 mt-0.5" />
                <span>Validar la identidad del solicitante para prevención del fraude y suplantación.</span>
              </div>
            </div>
            <p className="text-xs text-stone-500 pt-2 italic">
              Sus datos personales no serán transferidos a terceros con fines comerciales o publicitarios sin su consentimiento previo, expreso e informado.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#0A213B]">
              5. Medidas Técnicas de Seguridad (Defensa en Profundidad & Cloudflare)
            </h2>
            <p>
              Para resguardar su información frente a accesos no autorizados, pérdida o alteración, implementamos un esquema de <strong>Defensa en Profundidad</strong>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-stone-200">
                <h3 className="font-bold text-[#0A213B] text-sm flex items-center gap-2 mb-1">
                  <Lock className="w-4 h-4 text-[#F0A818]" />
                  Cifrado en Tránsito
                </h3>
                <p className="text-xs text-stone-600">
                  Todas las comunicaciones utilizan cifrado TLS 1.3 con cabeceras estrictas HSTS (HTTP Strict Transport Security) y políticas CSP.
                </p>
              </div>

              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-stone-200">
                <h3 className="font-bold text-[#0A213B] text-sm flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#165A49]" />
                  Protección de Borde Cloudflare
                </h3>
                <p className="text-xs text-stone-600">
                  Mitigación activa contra ataques DDoS, Web Application Firewall (WAF) y verificación biométrica/heurística antibot mediante Cloudflare Turnstile.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#0A213B]">
              6. Ejercicio de Derechos ARCO
            </h2>
            <p>
              Conforme a la Ley N° 29733, usted tiene derecho a ejercer en cualquier momento sus derechos de <strong>Acceso, Rectificación, Cancelación y Oposición (ARCO)</strong> respecto al tratamiento de sus datos personales.
            </p>
            <p>
              Para ejercerlos, puede presentar su solicitud mediante:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-stone-600">
              <li>Correo electrónico oficial: <span className="font-semibold text-[#0A213B]">privacidad@solperu.pe</span></li>
              <li>Atención presencial en nuestra agencia de Ciudad Constitución: Jr. Ciro Alegría S/N.</li>
            </ul>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
