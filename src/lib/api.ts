/**
 * Cliente API seguro para el frontend
 * - Preparado para Zero Trust (cabeceras de trazabilidad e id de correlación)
 * - Timeouts estrictos para evitar conexiones colgadas
 * - Manejo robusto de errores sin filtrar datos sensibles
 */

export interface PreEvaluationPayload {
  name: string;
  dni: string;
  phone: string;
  email: string;
  product: string;
  terms: boolean;
  turnstileToken: string;
}

export async function submitPreEvaluation(
  payload: PreEvaluationPayload
): Promise<{ success: boolean; message?: string }> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Si no hay backend configurado aún, simulamos respuesta exitosa para entorno de pruebas
  if (!apiUrl) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { success: true };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

  try {
    const correlationId =
      typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

    const response = await fetch(`${apiUrl}/api/pre-evaluaciones`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-Correlation-ID': correlationId,
      },
      body: JSON.stringify({
        ...payload,
        submittedAt: new Date().toISOString(),
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message ||
          `Error en la solicitud al servidor (Código: ${response.status})`
      );
    }

    return { success: true };
  } catch (error: any) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error(
        'El servidor tardó demasiado en responder. Por favor, intenta nuevamente.'
      );
    }
    throw new Error(
      error.message || 'No fue posible conectar con el servidor seguro.'
    );
  }
}
