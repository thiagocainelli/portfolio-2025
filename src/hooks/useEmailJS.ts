import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_CONFIG,
  isEmailJSConfigured,
  EmailJSTemplateParams,
} from "../config/emailjs";

interface UseEmailJSReturn {
  sendEmail: (params: EmailJSTemplateParams) => Promise<boolean>;
  loading: boolean;
  isConfigured: boolean;
  error: string | null;
  success: boolean;
  resetStatus: () => void;
}

export const useEmailJS = (): UseEmailJSReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);

  // Check configuration on mount
  useEffect(() => {
    const configured = isEmailJSConfigured();
    setIsConfigured(configured);

    if (configured && EMAILJS_CONFIG.PUBLIC_KEY) {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }
  }, []);

  const sendEmail = async (params: EmailJSTemplateParams): Promise<boolean> => {
    // Reset previous status
    setError(null);
    setSuccess(false);

    // Validate configuration
    if (!isConfigured) {
      const errorMsg = "EmailJS não está configurado corretamente.";
      setError(errorMsg);
      console.error("EmailJS Configuration Error:", EMAILJS_CONFIG);
      return false;
    }

    try {
      setLoading(true);

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID!,
        EMAILJS_CONFIG.TEMPLATE_ID!,
        params as unknown as Record<string, unknown>,
        EMAILJS_CONFIG.PUBLIC_KEY!
      );

      if (result.status === 200) {
        setSuccess(true);
        return true;
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
    } catch (err) {
      const errorMsg =
        err instanceof Error
          ? err.message
          : "Erro desconhecido ao enviar email.";
      setError(errorMsg);
      console.error("EmailJS Error:", err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const resetStatus = () => {
    setError(null);
    setSuccess(false);
  };

  return {
    sendEmail,
    loading,
    isConfigured,
    error,
    success,
    resetStatus,
  };
};
