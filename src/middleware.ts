import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // 1. ISO 27001 & Anti-Clickjacking: Prohibir embebido en iframes de terceros
  response.headers.set('X-Frame-Options', 'DENY');

  // 2. Anti-MIME sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff');

  // 3. HSTS solo en producción con HTTPS (evita romper entornos locales HTTP)
  if (process.env.NODE_ENV === 'production') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    );
  }

  // 4. Política de Referrer segura
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // 5. Restricción de permisos de hardware en navegador
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(self)'
  );

  // 6. Content Security Policy (CSP) con soporte para Turnstile y WebSockets en desarrollo
  const isDev = process.env.NODE_ENV !== 'production';
  const connectSrc = isDev
    ? "'self' ws: wss: https://challenges.cloudflare.com http://localhost:4000 https://solperu.pe"
    : "'self' https://challenges.cloudflare.com https://solperu.pe";

  response.headers.set(
    'Content-Security-Policy',
    `default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://challenges.cloudflare.com; frame-src 'self' https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' https://images.unsplash.com https://challenges.cloudflare.com data: blob:; connect-src ${connectSrc};`
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Aplica a todas las rutas excepto archivos estáticos internos de Next.js
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
