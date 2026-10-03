/**
 * Utilidades de sanitización y validación segura (Defensa en Profundidad)
 * Cumplimiento con ISO/IEC 27001:2022 (A.8.28 - Codificación segura)
 * y Ley N° 29733 (Protección de Datos Personales de Perú).
 */

// Sanitizar cadenas de texto eliminando etiquetas HTML y caracteres de control
export function sanitizeString(input: string): string {
  if (!input) return '';
  return input
    .replace(/[<>]/g, '') // Elimina < y > para mitigar inyección de tags XSS
    .replace(/javascript:/gi, '') // Mitiga esquemas de pseudourl
    .replace(/on\w+=/gi, '') // Mitiga inyección de atributos de eventos
    .trim();
}

// Validación estricta de DNI peruano (8 dígitos numéricos)
export function isValidDni(dni: string): boolean {
  return /^\d{8}$/.test(dni.trim());
}

// Validación estricta de teléfono peruano (9 dígitos, típicamente inicia en 9)
export function isValidPhone(phone: string): boolean {
  const cleanPhone = phone.replace(/[\s-]/g, '').trim();
  return /^9\d{8}$/.test(cleanPhone);
}

// Validación estándar de formato de correo electrónico
export function isValidEmail(email: string): boolean {
  const cleanEmail = email.trim();
  if (cleanEmail.length > 254) return false;
  // Regex segura compatible con estándares RFC
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(
    cleanEmail
  );
}

// Validación de nombres (permite letras en español, tildes, diéresis, espacios y apóstrofes)
export function isValidName(name: string): boolean {
  const clean = name.trim();
  if (clean.length < 3 || clean.length > 80) return false;
  return /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/.test(clean);
}

// Rate Limiting en cliente (previene spam local y saturación de peticiones)
class ClientRateLimiter {
  private lastSubmissions: number[] = [];
  private readonly maxRequests: number;
  private readonly windowMs: number;

  constructor(maxRequests: number = 3, windowMs: number = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  canSubmit(): { allowed: boolean; waitSeconds?: number } {
    const now = Date.now();
    this.lastSubmissions = this.lastSubmissions.filter(
      (ts) => now - ts < this.windowMs
    );

    if (this.lastSubmissions.length >= this.maxRequests) {
      const oldest = this.lastSubmissions[0];
      const waitSeconds = Math.ceil((this.windowMs - (now - oldest)) / 1000);
      return { allowed: false, waitSeconds };
    }

    return { allowed: true };
  }

  recordSubmission(): void {
    this.lastSubmissions.push(Date.now());
  }
}

export const submissionRateLimiter = new ClientRateLimiter(3, 60000); // Máximo 3 envíos por minuto
