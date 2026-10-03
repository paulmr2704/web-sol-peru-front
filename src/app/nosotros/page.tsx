'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Target, Eye, Heart, BarChart3, Users, ShieldCheck, Zap, Building2, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function Nosotros() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] font-sans">
      <Navbar />

      {/* 1. Presentación Institucional */}
      <section className="pt-32 pb-20 bg-[#0A213B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <span className="text-[#F0A818] font-bold tracking-widest uppercase text-sm mb-4 block">1. Presentación Institucional</span>
          <h1 className="text-4xl md:text-6xl font-black font-serif mb-6 leading-tight">Financiera Sol Perú</h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Somos una entidad financiera orgullosamente nacida en Ciudad Constitución, Pasco. 
            Nacimos con el firme propósito de democratizar el acceso al crédito mediante tecnología e innovación, 
            impulsando el desarrollo económico de las familias y emprendedores de nuestra región y de todo el país.
          </p>
        </div>
      </section>

      {/* 2. Perfil, Misión, Visión y Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <span className="text-[#165A49] font-bold tracking-widest uppercase text-xs mb-2 block">2. ADN Corporativo</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0A213B]">Perfil, Misión, Visión y Valores</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-stone-200">
              <Target className="w-12 h-12 text-[#D9900B] mb-6" />
              <h3 className="text-2xl font-bold text-[#0A213B] mb-4 font-serif">Misión</h3>
              <p className="text-[#4B5563] leading-relaxed">Brindar soluciones financieras ágiles, transparentes y accesibles, apalancadas en tecnología innovadora, para mejorar la calidad de vida de nuestros clientes.</p>
            </div>
            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-stone-200">
              <Eye className="w-12 h-12 text-[#165A49] mb-6" />
              <h3 className="text-2xl font-bold text-[#0A213B] mb-4 font-serif">Visión</h3>
              <p className="text-[#4B5563] leading-relaxed">Ser la financiera digital líder a nivel nacional, reconocida por nuestra excelencia en servicio, inclusión financiera y desarrollo tecnológico sustentable.</p>
            </div>
            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-stone-200">
              <Heart className="w-12 h-12 text-[#0A213B] mb-6" />
              <h3 className="text-2xl font-bold text-[#0A213B] mb-4 font-serif">Valores</h3>
              <ul className="space-y-3 text-[#4B5563]">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#F0A818]"/> Innovación Constante</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#F0A818]"/> Transparencia Total</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#F0A818]"/> Empatía con el Cliente</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#F0A818]"/> Sostenibilidad</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Objetivos Estratégicos & 4. Estructura */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[#165A49] font-bold tracking-widest uppercase text-xs mb-2 block">3. Metas Clave</span>
            <h2 className="text-3xl font-bold font-serif text-[#0A213B] mb-6">Objetivos Estratégicos <br/><span className="text-[#D9900B] text-xl">(Enfoque Innovador)</span></h2>
            <ul className="space-y-4">
              <li className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex items-start gap-4">
                <Zap className="w-6 h-6 text-[#F0A818] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#0A213B]">Digitalización al 100%</h4>
                  <p className="text-sm text-stone-600 mt-1">Implementar flujos de originación de crédito completamente digitales sin necesidad de pisar una agencia.</p>
                </div>
              </li>
              <li className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-[#165A49] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#0A213B]">Inclusión Financiera</h4>
                  <p className="text-sm text-stone-600 mt-1">Alcanzar a poblaciones desatendidas mediante evaluaciones de riesgo alternativas e inteligencia artificial.</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[#165A49] font-bold tracking-widest uppercase text-xs mb-2 block">4. Organización</span>
            <h2 className="text-3xl font-bold font-serif text-[#0A213B] mb-6">Estructura Organizacional</h2>
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5"><Building2 className="w-32 h-32" /></div>
              <div className="space-y-4 relative z-10">
                <div className="bg-[#0A213B] text-white text-center py-3 rounded-xl font-bold">Directorio</div>
                <div className="w-0.5 h-6 bg-stone-300 mx-auto"></div>
                <div className="bg-[#165A49] text-white text-center py-3 rounded-xl font-bold">Gerencia General</div>
                <div className="w-0.5 h-6 bg-stone-300 mx-auto"></div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs font-bold">
                  <div className="bg-stone-100 border border-stone-200 p-3 rounded-xl text-[#0A213B]">Gerencia de<br/>Riesgos</div>
                  <div className="bg-[#FFF3D6] border border-[#F0A818]/30 p-3 rounded-xl text-[#D9900B]">Gerencia de<br/>Innovación y TI</div>
                  <div className="bg-stone-100 border border-stone-200 p-3 rounded-xl text-[#0A213B]">Gerencia de<br/>Operaciones</div>
                  <div className="bg-stone-100 border border-stone-200 p-3 rounded-xl text-[#0A213B]">Gerencia<br/>Comercial</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5, 6 y 7. Productos, Políticas, Riesgos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <span className="text-[#165A49] font-bold tracking-widest uppercase text-xs block">5. Oferta de Valor</span>
              <h3 className="text-2xl font-bold font-serif text-[#0A213B]">Productos Innovadores</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Contamos con un simulador interactivo y un portafolio diversificado que incluye el <strong>Crédito Emprende Ya</strong>, diseñado algorítmicamente para dar respuesta inmediata a pequeños empresarios.</p>
            </div>
            <div className="space-y-4">
              <span className="text-[#165A49] font-bold tracking-widest uppercase text-xs block">6. Normativa</span>
              <h3 className="text-2xl font-bold font-serif text-[#0A213B]">Políticas y Procesos Clave</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Nuestro proceso de admisión de clientes utiliza protección antibot (Cloudflare Turnstile) y sanitización estricta de datos en tiempo real para asegurar el cumplimiento de la Ley N° 29733.</p>
            </div>
            <div className="space-y-4">
              <span className="text-[#165A49] font-bold tracking-widest uppercase text-xs block">7. Sostenibilidad</span>
              <h3 className="text-2xl font-bold font-serif text-[#0A213B]">Gestión de Cartera y Riesgos</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Implementamos un <a href="/admin" className="text-[#F0A818] underline font-bold">Panel de Administración de Riesgos</a> que clasifica a los usuarios en BAJO, MEDIO y ALTO riesgo, permitiendo a nuestros analistas una gestión de cartera eficiente y segura.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Indicadores */}
      <section className="py-20 bg-[#0A213B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <span className="text-[#F0A818] font-bold tracking-widest uppercase text-xs mb-2 block">8. KPIs</span>
          <h2 className="text-3xl font-bold font-serif mb-12">Indicadores de Desempeño</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-black text-[#F0A818] mb-2">+5K</div>
              <div className="text-sm text-stone-300 font-medium uppercase tracking-widest">Clientes Activos</div>
            </div>
            <div>
              <div className="text-5xl font-black text-[#F0A818] mb-2">{'<'}2%</div>
              <div className="text-sm text-stone-300 font-medium uppercase tracking-widest">Tasa de Morosidad</div>
            </div>
            <div>
              <div className="text-5xl font-black text-[#F0A818] mb-2">5 min</div>
              <div className="text-sm text-stone-300 font-medium uppercase tracking-widest">Tiempo de Pre-aprobación</div>
            </div>
            <div>
              <div className="text-5xl font-black text-[#F0A818] mb-2">100%</div>
              <div className="text-sm text-stone-300 font-medium uppercase tracking-widest">Seguridad Cloudflare</div>
            </div>
          </div>
        </div>
      </section>

      {/* 9, 10 y 11. Caso Práctico, Conclusiones y Anexos */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-12">
          
          <div>
            <span className="text-[#165A49] font-bold tracking-widest uppercase text-xs mb-2 block">9. Casos de Éxito</span>
            <h2 className="text-3xl font-bold font-serif text-[#0A213B] mb-4">Caso Práctico de Innovación</h2>
            <div className="bg-[#FFF3D6] p-6 sm:p-8 rounded-2xl border border-[#F0A818]/30 space-y-4">
              
              <div>
                <h4 className="font-bold text-[#165A49] text-lg mb-2">La Innovación: Digitalización del Proceso de Crédito</h4>
                <p className="text-stone-700 text-sm leading-relaxed">
                  Históricamente, los clientes de Ciudad Constitución debían acudir físicamente a una agencia solo para consultar cronogramas de pago. Nuestra principal <strong>innovación tecnológica</strong> ha sido el desarrollo de esta plataforma web interactiva (Frontend en Next.js y Backend en Node.js) que permite la <em>simulación de créditos en tiempo real</em> y la captura segura de prospectos mediante Cloudflare Turnstile, automatizando el embudo de ventas.
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0A818]/30">
                <h4 className="font-bold text-[#D9900B] mb-2">El Resultado en el Mundo Real: "Ferretería El Constructor"</h4>
                <p className="text-stone-700 text-sm leading-relaxed">
                  Don Carlos, un emprendedor ferretero local, no tenía tiempo para dejar su negocio. Gracias a nuestra plataforma, ingresó desde su celular, simuló su cuota exacta, y envió su solicitud segura en menos de 5 minutos. Al recibir la alerta automática en nuestro Dashboard, el asesor lo visitó directamente para el desembolso. <strong>Redujimos el tiempo de atención de 3 días a solo 24 horas</strong>, permitiendo que Don Carlos aprovechara una oferta mayorista que incrementó sus ventas en un 60%.
                </p>
              </div>

            </div>
          </div>

          <div>
            <span className="text-[#165A49] font-bold tracking-widest uppercase text-xs mb-2 block">10. Cierre</span>
            <h2 className="text-3xl font-bold font-serif text-[#0A213B] mb-4">Conclusiones</h2>
            <p className="text-stone-600 leading-relaxed">
              Financiera Sol Perú demuestra que la transformación digital no está reservada solo para la gran banca. 
              Al integrar innovación en cada paso —desde la estructura organizacional hasta el manejo de la cartera— 
              hemos logrado un modelo sostenible, seguro y enfocado en el cliente.
            </p>
          </div>

          <div className="pt-8 border-t border-stone-200">
            <span className="text-[#165A49] font-bold tracking-widest uppercase text-xs mb-2 block">11. Documentación Extra</span>
            <h2 className="text-xl font-bold font-serif text-[#0A213B] mb-4">Anexos</h2>
            <ul className="space-y-2">
              <li><a href="/politica-de-privacidad" className="text-[#F0A818] font-bold hover:underline">📄 Política de Privacidad y Tratamiento de Datos (Ley N° 29733)</a></li>
              <li><a href="/terminos-y-condiciones" className="text-[#F0A818] font-bold hover:underline">📄 Términos y Condiciones de Uso</a></li>
              <li><a href="/admin" className="text-[#0A213B] font-bold hover:underline">🔒 Acceso a Intranet (Dashboard Admin)</a></li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
