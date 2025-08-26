// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID || "",
  TEMPLATE_ID: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID || "",
  PUBLIC_KEY: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY || "",
};

// Validate EmailJS configuration
export const isEmailJSConfigured = (): boolean => {
  return !!(
    EMAILJS_CONFIG.SERVICE_ID &&
    EMAILJS_CONFIG.TEMPLATE_ID &&
    EMAILJS_CONFIG.PUBLIC_KEY
  );
};

// Get configuration status
export const getEmailJSStatus = () => {
  return {
    serviceId: !!EMAILJS_CONFIG.SERVICE_ID,
    templateId: !!EMAILJS_CONFIG.TEMPLATE_ID,
    publicKey: !!EMAILJS_CONFIG.PUBLIC_KEY,
    isConfigured: isEmailJSConfigured(),
  };
};

// Template parameters interface
export interface EmailJSTemplateParams {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_name: string;
}

// Default template parameters
export const getDefaultTemplateParams = (): EmailJSTemplateParams => ({
  from_name: "",
  from_email: "",
  subject: "",
  message: "",
  to_name: "Thiago Cainelli",
});
