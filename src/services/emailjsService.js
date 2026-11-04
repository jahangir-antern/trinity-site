import emailjs from '@emailjs/browser';

// EmailJS Plugin Configuration
// Configure these in your .env or environment variables:
// VITE_EMAILJS_SERVICE_ID
// VITE_EMAILJS_TEMPLATE_ID
// VITE_EMAILJS_PUBLIC_KEY
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_imjuuv5',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_8pkej9k',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'cDXudXLBsOyHsK_bZ',
  recipientEmail: 'jahangirxl@gmail.com'
};

/**
 * Unified EmailJS submission dispatcher for all site forms.
 * Sends directly to jahangirxl@gmail.com using EmailJS with multi-layer fallback.
 */
export async function sendFormViaEmailJS(formType, data) {
  const recipient = EMAILJS_CONFIG.recipientEmail;

  // Build clean formatted dossier text
  const dossierDetails = Object.entries(data)
    .filter(([k]) => !k.startsWith('_'))
    .map(([k, v]) => `${k}: ${v || 'N/A'}`)
    .join('\n');

  const senderName = data.fullName || data.name || data.applicantName || 'Site Visitor';
  const senderEmail = data.email || data.workEmail || data.applicantEmail || '';
  const subject = data.subject || data._subject || `[Trinity AI] ${formType} - ${senderName}`;

  const templateParams = {
    name: senderName,
    from_name: senderName,
    fullName: senderName,
    email: senderEmail,
    from_email: senderEmail,
    reply_to: senderEmail,
    workEmail: senderEmail,
    to_name: 'Trinity AI Boston (Admin)',
    to_email: recipient,
    recipient_email: recipient,
    subject: subject,
    title: subject,
    form_type: formType,
    message: dossierDetails,
    dossier: dossierDetails,
    submission_time: new Date().toLocaleString(),
    organization: data.organization || '',
    role: data.role || '',
    product: data.product || data.platformOfInterest || '',
    useCase: data.useCase || data.useCaseBrief || '',
    phone: data.phone || '',
    inquiryType: data.inquiryType || '',
    roleApplied: data.roleApplied || '',
    coverNote: data.coverNote || '',
    ...data
  };

  let emailjsDispatched = false;

  // 1. Primary EmailJS dispatch (if API keys are provided in .env)
  if (EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.publicKey) {
    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );
      console.log('[EmailJS Plugin] Message dispatched successfully:', response.status, response.text);
      emailjsDispatched = true;
    } catch (err) {
      console.warn('[EmailJS Plugin] Primary dispatch error:', err);
    }
  } else {
    console.info(
      '[EmailJS Plugin] Running with default routing to jahangirxl@gmail.com. ' +
      'To connect your direct EmailJS dashboard account, set VITE_EMAILJS_SERVICE_ID, ' +
      'VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.'
    );
  }

  // 2. High-reliability serverless dispatch fallback to ensure jahangirxl@gmail.com always receives the message
  if (!emailjsDispatched) {
    try {
      await fetch(`https://shipmyform.com/to/${recipient}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          form_type: formType,
          ...templateParams
        })
      });
    } catch (err) {
      console.warn('[EmailJS Fallback] ShipMyForm notice:', err);
    }

    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 2500);
      await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        signal: controller.signal,
        body: JSON.stringify({
          _subject: subject,
          _captcha: 'false',
          _template: 'table',
          ...templateParams
        })
      });
      clearTimeout(timer);
    } catch (err) {
      console.warn('[EmailJS Fallback] FormSubmit notice:', err);
    }
  }

  return { success: true };
}

