# ☀️ Financiera Sol Perú - Portal Institucional & Plataforma Web

Bienvenido al repositorio oficial del frontend de **Financiera Sol Perú**, la institución de confianza de Ciudad Constitución, Pasco. Este proyecto sirve como portal institucional y plataforma de simulación/evaluación de créditos para los clientes.

![Next.js](https://img.shields.io/badge/Next.js-16.3.6-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)

---

## 🎯 Características Principales

*   **🌐 Portal Institucional:** Página principal dinámica con información de la empresa, filosofía (Misión, Visión, Valores) y el organigrama.
*   **📊 Simulador de Créditos:** Herramienta interactiva para que los clientes simulen su cronograma de pagos según monto y plazo.
*   **🛡️ Pre-Evaluación Segura:** Formulario protegido con **Cloudflare Turnstile** para captura de prospectos y leads.
*   **💼 Portafolio de Soluciones:** Modal interactivo explicando los tipos de créditos (Emprende Ya, Solución Rápida, etc.) y ahorros.
*   **⚙️ Panel Administrativo (Frontend):** Dashboard en /admin que lee datos del prospecto desde el simulador.
*   **📱 Diseño Responsivo:** Completamente optimizado para dispositivos móviles, tablets y escritorios, con control estricto de colores (*Light Mode* forzado para evitar inversiones de color en móviles).

## 🛠️ Tecnologías Utilizadas

*   **Framework:** [Next.js 16](https://nextjs.org/) (App Router).
*   **Lenguaje:** TypeScript.
*   **Estilos:** Tailwind CSS.
*   **Iconos:** Lucide React.
*   **Seguridad Antibot:** @marsidev/react-turnstile (Cloudflare Turnstile).
*   **Despliegue:** [Vercel](https://vercel.com/).

## 🚀 Instalación y Ejecución Local

1.  **Clonar el repositorio:**
    \\\ash
    git clone https://github.com/tu-usuario/web-sol-peru-front.git
    cd web-sol-peru-front
    \\\

2.  **Instalar las dependencias:**
    \\\ash
    npm install
    \\\

3.  **Configurar Variables de Entorno:**
    Renombra el archivo .env.example a .env.local e introduce tu Site Key de Cloudflare:
    \\\env
    NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY=tu_site_key_aqui
    NEXT_PUBLIC_API_URL=http://localhost:3000
    \\\

4.  **Iniciar el servidor de desarrollo:**
    \\\ash
    npm run dev
    \\\
    Visita [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 📦 Scripts Disponibles

*   
pm run dev - Inicia la aplicación en modo desarrollo.
*   
pm run build - Compila la aplicación para producción.
*   
pm run start - Inicia el servidor de producción tras el build.
*   
pm run lint - Ejecuta el linter para revisar la calidad del código.

## 🏗️ Despliegue en Producción

El proyecto está optimizado para desplegarse fácilmente en Vercel. 
Solo recuerda configurar las **Environment Variables** en el panel de Vercel con las credenciales correspondientes de Cloudflare Turnstile (NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY).

---
*Diseñado y desarrollado para el crecimiento de Ciudad Constitución.* 📈
