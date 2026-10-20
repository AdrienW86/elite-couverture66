export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  city: string;
  subject: string;
  message: string;
  website: string;
  consent: true;
  startedAt: number;
  submissionId: string;
}
export type ContactResult = { success: true } | { success: false; message: string };
export type ValidationResult = { valid: true; data: ContactPayload } | { valid: false; message: string };
const fields = ['name', 'email', 'phone', 'city', 'subject', 'message', 'website', 'consent', 'startedAt', 'submissionId'];
export const emailPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
export function validateContact(value: unknown, now = Date.now()): ValidationResult {
  const fail = (message: string): ValidationResult => ({ valid: false, message });
  if (!value || typeof value !== 'object' || Array.isArray(value)) return fail('Le formulaire est invalide.');
  const input: Record<string, unknown> = Object.fromEntries(Object.entries(value));
  if (Object.keys(input).some(key => !fields.includes(key))) return fail('Le formulaire contient des champs inconnus.');
  const { name, email, phone, city, subject, message, website, submissionId } = input;
  if (typeof name !== 'string' || typeof email !== 'string' || typeof phone !== 'string' || typeof city !== 'string' || typeof subject !== 'string' || typeof message !== 'string' || typeof website !== 'string' || typeof submissionId !== 'string') return fail('Le formulaire est invalide.');
  if ([name, email, phone, city, subject].some(text => /[\r\n\x00-\x1f\x7f]/.test(text))) return fail('Un champ contient des caractères invalides.');
  if (name.trim().length < 2 || name.length > 100) return fail('Indiquez un nom entre 2 et 100 caractères.');
  if (email.length > 254 || (email.trim() !== '' && !emailPattern.test(email.trim()))) return fail('Vérifiez votre adresse e-mail.');
  if (!/^[+\d\s().-]{8,25}$/.test(phone) || phone.replace(/\D/g, '').length < 8) return fail('Vérifiez votre numéro de téléphone.');
  if (city.trim().length < 2 || city.length > 100) return fail('Indiquez votre commune.');
  if (subject.trim().length < 2 || subject.length > 150) return fail('Indiquez la prestation souhaitée.');
  if (message.trim().length < 10 || message.length > 5000 || /[\x00\x08\x0b\x0c\x7f]/.test(message)) return fail('Le message doit contenir entre 10 et 5 000 caractères.');
  if (website !== '') return fail('L’envoi a été refusé. Contactez-nous par téléphone.');
  if (input.consent !== true) return fail('Votre accord est nécessaire pour traiter cette demande.');
  if (typeof input.startedAt !== 'number' || !Number.isFinite(input.startedAt) || now - input.startedAt < 2000 || now - input.startedAt > 7_200_000) return fail('Veuillez patienter un instant ou actualiser le formulaire.');
  if (!/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(submissionId)) return fail('Veuillez actualiser le formulaire avant de réessayer.');
  return { valid: true, data: { name: name.trim(), email: email.trim(), phone: phone.trim(), city: city.trim(), subject: subject.trim(), message: message.trim(), website, consent: true, startedAt: input.startedAt, submissionId } };
}
