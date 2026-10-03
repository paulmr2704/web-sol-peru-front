/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

// Cabeceras HTTP de seguridad estricta (Defensa en Profundidad & ISO 27001)
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // HSTS solo en producción para no romper pruebas locales por HTTP
  ...(isProd
    ? [
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
      ]
    : []),
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https://images.unsplash.com https://challenges.cloudflare.com",
      // ws: y wss: para recarga y sincronización en desarrollo local
      "connect-src 'self' ws: wss: https://challenges.cloudflare.com",
      "frame-src 'self' https://challenges.cloudflare.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      ...(isProd ? ["upgrade-insecure-requests"] : []),
    ].join('; '),
  },
];

const nextConfig = {
  reactStrictMode: true,
  // Permitir acceso desde el celular mediante zona Wi-Fi en desarrollo
  allowedDevOrigins: [
    '10.140.116.113',
    '10.140.116.113:3000',
    'localhost:3000',
    'localhost',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
