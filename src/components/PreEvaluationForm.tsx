'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, CheckCircle2, ShieldAlert, ShieldCheck, Lock } from 'lucide-react';
import type { TurnstileInstance } from '@marsidev/react-turnstile';

const Turnstile = dynamic(
  () => import('@marsidev/react-turnstile').then((mod) => mod.Turnstile),
  { ssr: false }
);
import {
  sanitizeString,
  isValidDni,
  isValidPhone,
  isValidEmail,
  isValidName,
  submissionRateLimiter,
} from '../lib/security';
import { submitPreEvaluation } from '../lib/api';

export default function PreEvaluationForm() {
  const [formData, setFormData] = useState({
    name: '',
    dni: '',
    phone: '',
    email: '',
    product: '',
    terms: false,
  });

  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Clave pública de Cloudflare Turnstile (usa la clave de prueba oficial si no hay una en variables de entorno)
  const turnstileSiteKey =
    process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY ||
    '1x00000000000000000000AA';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // 1. Capa de Defensa: Rate Limiting en cliente
    const rateCheck = submissionRateLimiter.canSubmit();
    if (!rateCheck.allowed) {
      setErrorMsg(
        `Has enviado demasiadas solicitudes en poco tiempo. Por favor espera ${rateCheck.waitSeconds} segundos.`
      );
      return;
    }

    // 2. Capa de Defensa: Sanitización de entradas
    const sanitizedName = sanitizeString(formData.name);
    const sanitizedDni = formData.dni.trim();
    const sanitizedPhone = formData.phone.trim();
    const sanitizedEmail = sanitizeString(formData.email);
    const sanitizedProduct = sanitizeString(formData.product);

    // 3. Capa de Defensa: Validaciones estrictas
    if (!isValidName(sanitizedName)) {
      setErrorMsg('Por favor ingresa un nombre y apellido válido (entre 3 y 80 caracteres).');
      return;
    }

    if (!isValidDni(sanitizedDni)) {
      setErrorMsg('El DNI debe tener exactamente 8 dígitos numéricos válidos.');
      return;
    }

    if (!isValidPhone(sanitizedPhone)) {
      setErrorMsg('El número de celular debe ser de 9 dígitos e iniciar con 9.');
      return;
    }

    if (!isValidEmail(sanitizedEmail)) {
      setErrorMsg('Por favor ingresa un correo electrónico con formato válido.');
      return;
    }

    if (!sanitizedProduct) {
      setErrorMsg('Por favor selecciona un producto financiero de interés.');
      return;
    }

    if (!formData.terms) {
      setErrorMsg('Debes autorizar el tratamiento de datos y aceptar los términos para continuar.');
      return;
    }

    // 4. Capa de Defensa: Verificación antibot Cloudflare Turnstile
    if (!turnstileToken) {
      setErrorMsg('Por favor completa la verificación de seguridad Cloudflare antes de enviar.');
      return;
    }

    setLoading(true);

    try {
      // Envío seguro a API backend
            // HACK PARA PRESENTACION: Enviar a Admin via LocalStorage
      try {
        const m = Number(localStorage.getItem('simulatedMonto') || 5000);
        const p = Number(localStorage.getItem('simulatedPlazo') || 12);
        const sStr = localStorage.getItem('admin_solicitudes');
        let s = [];
        if (sStr) { try { s = JSON.parse(sStr); } catch(e){} }
        
        const n = { 
          id: 'sol-web-' + Date.now(), 
          cliente: sanitizedName, 
          dni: sanitizedDni, 
          correo: sanitizedEmail, 
          monto: m, 
          plazo: p, 
          riesgo: 'EN EVALUACION', 
          estado: 'RECIBIDA', 
          fecha: new Date().toISOString().split('T')[0] 
        };
        localStorage.setItem('admin_solicitudes', JSON.stringify([n, ...s]));
      } catch(e) {}
      await submitPreEvaluation({
        name: sanitizedName,
        dni: sanitizedDni,
        phone: sanitizedPhone,
        email: sanitizedEmail,
        product: sanitizedProduct,
        terms: formData.terms,
        turnstileToken,
      });

      submissionRateLimiter.recordSubmission();
      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Ocurrió un error al procesar tu solicitud. Intenta de nuevo.');
      // Reiniciar widget de Turnstile en caso de fallo
      turnstileRef.current?.reset();
      setTurnstileToken('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="pre-evaluacion" className="py-20 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#165A49] uppercase">
              CONVERSEMOS SOBRE TU META
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0A213B] leading-tight">
              Da el primer paso hacia tu evaluación.
            </h2>

            <p className="text-base text-[#4B5563] leading-relaxed">
              Déjanos tus datos. Un asesor revisará tu consulta y se pondrá en contacto para orientarte de forma personalizada y transparente.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-sm font-semibold text-[#0A213B]">
                <CheckCircle2 className="w-5 h-5 text-[#165A49]" />
                <span>Orientación según el producto elegido</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[#0A213B]">
                <CheckCircle2 className="w-5 h-5 text-[#165A49]" />
                <span>Información clara sobre requisitos y pasos</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[#0A213B]">
                <CheckCircle2 className="w-5 h-5 text-[#165A49]" />
                <span>Canal digital formal disponible 24/7</span>
              </div>
            </div>

            {/* Badges de Garantía de Seguridad */}
            <div className="bg-[#FAF7F2] border border-[#EADCB9] rounded-2xl p-4 text-xs text-[#4B5563] space-y-2">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#165A49] flex-shrink-0 mt-0.5" />
                <span>
                  Tus datos se encuentran resguardados bajo la Ley N° 29733 de Protección de Datos Personales y normas ISO/IEC 27001.
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-stone-500 pt-1 border-t border-stone-200/80">
                <Lock className="w-3.5 h-3.5 text-[#F0A818]" />
                <span>Cifrado TLS 1.3 y protección perimetral Cloudflare WAF</span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xl">
              
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-serif text-2xl font-semibold text-[#0A213B]">
                  Solicita una pre-evaluación
                </h3>
                <span className="text-xs text-stone-400">
                  Canal seguro verificado
                </span>
              </div>

              {submitted ? (
                <div className="bg-[#E3F2ED] border border-[#165A49]/30 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#165A49] text-white mx-auto flex items-center justify-center shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-semibold text-[#0A213B]">
                    ¡Solicitud enviada con éxito!
                  </h4>
                  <p className="text-sm text-[#4B5563] max-w-md mx-auto">
                    Gracias <span className="font-bold text-[#0A213B]">{formData.name}</span>. Un asesor de nuestra oficina en Ciudad Constitución se comunicará contigo al teléfono <span className="font-bold text-[#0A213B]">{formData.phone}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        dni: '',
                        phone: '',
                        email: '',
                        product: '',
                        terms: false,
                      });
                      setTurnstileToken('');
                    }}
                    className="inline-block mt-4 text-xs font-bold text-[#165A49] underline cursor-pointer hover:text-[#0A213B]"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {errorMsg && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl p-3 flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nombre completo */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#0A213B]">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={80}
                        placeholder="Nombres y Apellidos"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm text-[#0A213B] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#F0A818]"
                      />
                    </div>

                    {/* DNI */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#0A213B]">
                        DNI (8 dígitos)
                      </label>
                      <input
                        type="text"
                        required
                        inputMode="numeric"
                        maxLength={8}
                        placeholder="12345678"
                        value={formData.dni}
                        onChange={(e) => setFormData({ ...formData, dni: e.target.value.replace(/\D/g, '') })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm text-[#0A213B] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#F0A818]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Teléfono */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#0A213B]">
                        Celular (9 dígitos)
                      </label>
                      <input
                        type="tel"
                        required
                        inputMode="numeric"
                        maxLength={9}
                        placeholder="987654321"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm text-[#0A213B] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#F0A818]"
                      />
                    </div>

                    {/* Correo electrónico */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#0A213B]">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        required
                        maxLength={100}
                        placeholder="nombre@correo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm text-[#0A213B] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#F0A818]"
                      />
                    </div>
                  </div>

                  {/* Producto de interés */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#0A213B]">
                      Producto de interés
                    </label>
                    <select
                      required
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm text-[#0A213B] bg-white focus:outline-none focus:ring-2 focus:ring-[#F0A818]"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Crédito Emprende Ya">Crédito Emprende Ya (Recomendado)</option>
                      <option value="Crédito MYPE">Crédito MYPE</option>
                      <option value="Crédito Agrícola">Crédito Agrícola</option>
                      <option value="Crédito Personal">Crédito Personal</option>
                      <option value="Ahorro Futuro">Ahorro Futuro</option>
                      <option value="Protección 365">Protección 365</option>
                      <option value="Otro">Otro producto financiero</option>
                    </select>
                  </div>

                  {/* Cloudflare Turnstile Integration */}
                  <div className="pt-2">
                    <label className="text-xs font-semibold text-[#0A213B] block mb-2">
                      Verificación de Seguridad
                    </label>
                    <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 flex justify-center items-center min-h-[70px]">
                      {isMounted ? (
                        <Turnstile
                          ref={turnstileRef}
                          siteKey={turnstileSiteKey}
                          onSuccess={(token) => setTurnstileToken(token)}
                          onError={() => setErrorMsg('Error en el control de seguridad antibot. Recarga la página.')}
                          onExpire={() => setTurnstileToken('')}
                          options={{
                            theme: 'light',
                            size: 'normal',
                          }}
                        />
                      ) : (
                        <div className="text-xs text-stone-400 animate-pulse">Cargando verificación de seguridad...</div>
                      )}
                    </div>
                  </div>

                  {/* Checkbox autorización conforme a Ley N° 29733 */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      id="terms-check"
                      type="checkbox"
                      checked={formData.terms}
                      onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-stone-300 text-[#F0A818] focus:ring-[#F0A818] cursor-pointer"
                    />
                    <label htmlFor="terms-check" className="text-xs text-[#4B5563] cursor-pointer leading-normal">
                      Autorizo el tratamiento de mis datos personales conforme a la{' '}
                      <Link
                        href="/politica-de-privacidad"
                        target="_blank"
                        className="text-[#165A49] font-semibold underline hover:text-[#0A213B]"
                      >
                        Política de Privacidad (Ley N° 29733)
                      </Link>{' '}
                      y acepto los{' '}
                      <Link
                        href="/terminos-y-condiciones"
                        target="_blank"
                        className="text-[#165A49] font-semibold underline hover:text-[#0A213B]"
                      >
                        Términos de Uso
                      </Link>
                      .
                    </label>
                  </div>

                  {/* Actions & Disclaimer */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-stone-400">
                      Enviar el formulario no garantiza aprobación.
                    </span>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F0A818] hover:bg-[#E59E15] text-[#0A213B] font-semibold text-sm px-8 py-3.5 rounded-full shadow-md transition-all active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {loading ? 'Verificando y enviando...' : 'Enviar solicitud segura'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

