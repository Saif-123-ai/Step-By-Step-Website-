import { INSTITUTE_CONFIG } from '../data/institute';
import { EnquiryFormData, FormErrors } from '../types';

/**
 * Normalizes and checks if a phone number is a valid 10-digit Indian mobile number.
 * Accepts formats like: "+91 84478 32910", "918447832910", "08447832910", "8447832910", "84478-32910".
 */
export function isValidIndianPhone(input: string): boolean {
  if (!input) return false;
  // Strip all non-digit characters
  const clean = input.replace(/\D/g, '');

  // Case 1: 10 digits starting with 6, 7, 8, or 9
  if (clean.length === 10 && /^[6-9]\d{9}$/.test(clean)) {
    return true;
  }
  // Case 2: 11 digits starting with 0 followed by 6, 7, 8, or 9
  if (clean.length === 11 && clean.startsWith('0') && /^[6-9]\d{9}$/.test(clean.slice(1))) {
    return true;
  }
  // Case 3: 12 digits starting with 91 followed by 6, 7, 8, or 9
  if (clean.length === 12 && clean.startsWith('91') && /^[6-9]\d{9}$/.test(clean.slice(2))) {
    return true;
  }

  return false;
}

/**
 * Normalizes phone number to standard 10-digit format for display or storage.
 */
export function normalizeIndianPhone(input: string): string {
  const clean = input.replace(/\D/g, '');
  if (clean.length === 12 && clean.startsWith('91')) return clean.slice(2);
  if (clean.length === 11 && clean.startsWith('0')) return clean.slice(1);
  return clean;
}

/**
 * Formats the exact admission enquiry message requested in Change 4.
 */
export function formatWhatsAppMessage(data: EnquiryFormData): string {
  const cleanPhone = normalizeIndianPhone(data.phoneNumber) || data.phoneNumber.trim();
  const studentName = data.studentName.trim();
  const parentName = data.parentName.trim();
  const currentClass = data.currentClass.trim();
  const interestedProgramme = data.interestedProgramme.trim();

  let message = `Hello Step By Step Coaching Centre,\n\n`;
  message += `I would like to enquire about admission.\n\n`;
  message += `Student Name: ${studentName}\n`;
  message += `Parent/Guardian Name: ${parentName}\n`;
  message += `Phone Number: ${cleanPhone}\n`;
  message += `Current Class: ${currentClass}\n`;
  message += `Interested Programme: ${interestedProgramme}\n`;

  if (data.message && data.message.trim().length > 0) {
    message += `\nAdditional Message:\n${data.message.trim()}\n`;
  }

  message += `\nThank you.`;

  return message;
}

/**
 * Generates the official wa.me link with URL-encoded prefilled message.
 */
export function generateWhatsAppUrl(data: EnquiryFormData): string {
  const text = formatWhatsAppMessage(data);
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${INSTITUTE_CONFIG.phoneRaw}?text=${encoded}`;
}

/**
 * Generates a quick course-specific direct WhatsApp enquiry link.
 */
export function generateQuickCourseWhatsAppUrl(courseTitle: string): string {
  const text = `Hello Step By Step Coaching Centre,\n\nI would like to enquire about details and admissions for the ${courseTitle} programme.\n\nPlease share further details.\n\nThank you.`;
  return `https://wa.me/${INSTITUTE_CONFIG.phoneRaw}?text=${encodeURIComponent(text)}`;
}

/**
 * Validates enquiry form data. Returns error map.
 */
export function validateEnquiryForm(data: EnquiryFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.studentName || data.studentName.trim().length < 2) {
    errors.studentName = 'Please enter student name (at least 2 letters)';
  }

  if (!data.parentName || data.parentName.trim().length < 2) {
    errors.parentName = "Please enter parent or guardian's name";
  }

  if (!data.phoneNumber || !data.phoneNumber.trim()) {
    errors.phoneNumber = 'Phone number is required';
  } else if (!isValidIndianPhone(data.phoneNumber)) {
    errors.phoneNumber = 'Please enter a valid 10-digit Indian mobile number';
  }

  if (!data.currentClass || !data.currentClass.trim()) {
    errors.currentClass = 'Please select the current class';
  }

  if (!data.interestedProgramme || !data.interestedProgramme.trim()) {
    errors.interestedProgramme = 'Please select an interested programme or N/A';
  }

  return errors;
}
