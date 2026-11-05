import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CourseId, EnquiryFormData, FormErrors, AcademicClassOption, ProgrammeOption } from '../types';
import { ACADEMIC_CLASSES, PROGRAMME_OPTIONS, INSTITUTE_CONFIG, COURSES } from '../data/institute';
import {
  validateEnquiryForm,
  generateWhatsAppUrl,
} from '../utils/enquiry';
import { buttonInteractive } from '../utils/animations';
import {
  MessageCircle,
  Phone,
  CheckCircle2,
  AlertCircle,
  Send,
  ExternalLink,
  RotateCcw,
} from 'lucide-react';

interface EnquiryFormProps {
  initialCourse?: CourseId;
  onSuccess?: () => void;
  className?: string;
  isCompact?: boolean;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialCourse,
  onSuccess,
  className = '',
  isCompact = false,
}) => {
  // Map CourseId to human-readable ProgrammeOption
  const getInitialProgramme = (courseId?: CourseId): ProgrammeOption => {
    if (!courseId || courseId === 'na') return 'N/A';
    const found = COURSES.find((c) => c.id === courseId);
    if (found?.id === 'neet') return 'NEET Preparation';
    if (found?.id === 'jee') return 'JEE Preparation';
    if (found?.id === 'cbse') return 'CBSE Board Coaching';
    return 'N/A';
  };

  const [formData, setFormData] = useState<EnquiryFormData>({
    studentName: '',
    parentName: '',
    phoneNumber: '',
    currentClass: 'Class 5',
    interestedProgramme: getInitialProgramme(initialCourse),
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string | null>(null);

  const handleInputChange = (
    field: keyof EnquiryFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateEnquiryForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const whatsappUrl = generateWhatsAppUrl(formData);
      setSubmittedWhatsAppUrl(whatsappUrl);
      setIsSubmitting(false);

      try {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      } catch (err) {
        console.error('Window open blocked, user can click manual button:', err);
      }

      if (onSuccess) {
        onSuccess();
      }
    }, 350);
  };

  const handleReset = () => {
    setSubmittedWhatsAppUrl(null);
    setErrors({});
  };

  if (submittedWhatsAppUrl) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -12, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 shadow-sm ${className}`}
      >
        <div className="flex items-center gap-3 text-green-700 bg-green-50 p-4 rounded-lg mb-6 border border-green-200">
          <CheckCircle2 className="w-6 h-6 shrink-0 text-green-600" />
          <div>
            <h4 className="font-heading font-semibold text-sm text-green-900">
              Admission Enquiry Form Ready!
            </h4>
            <p className="text-xs text-green-800 mt-0.5">
              WhatsApp has been triggered with your prefilled details.
            </p>
          </div>
        </div>

        <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200 mb-6 space-y-2">
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            Important Step: Press &quot;Send&quot; in WhatsApp
          </p>
          <p className="text-xs text-neutral-700 leading-relaxed">
            WhatsApp should have opened with your enquiry prefilled for{' '}
            <strong className="text-neutral-900">Step By Step Coaching Centre</strong> (+91 84478 32910).
            Please remember to click the <strong>Send</strong> button inside WhatsApp to deliver your
            message to our administrative team.
          </p>
        </div>

        {/* Selected Details Confirmation */}
        <div className="p-3.5 bg-neutral-100 rounded-lg text-xs text-neutral-700 space-y-1 mb-6 border border-neutral-200">
          <p><strong>Student:</strong> {formData.studentName} | <strong>Parent:</strong> {formData.parentName}</p>
          <p><strong>Class:</strong> {formData.currentClass} | <strong>Programme:</strong> {formData.interestedProgramme}</p>
        </div>

        <div className="space-y-3">
          <motion.a
            {...buttonInteractive}
            href={submittedWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm rounded-lg flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Open WhatsApp Again</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>

          <motion.a
            {...buttonInteractive}
            href={INSTITUTE_CONFIG.telLink}
            className="w-full py-3 px-4 border border-neutral-300 hover:border-neutral-400 bg-white text-neutral-800 font-semibold text-sm rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#C8102E]" />
            <span>Or Call Us Directly: {INSTITUTE_CONFIG.phoneDisplay}</span>
          </motion.a>

          <button
            onClick={handleReset}
            className="w-full py-2 text-xs text-neutral-500 hover:text-neutral-800 font-medium flex items-center justify-center gap-1.5 transition-colors mt-2"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Edit or Submit Another Enquiry</span>
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 shadow-sm ${className}`}
      noValidate
    >
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 text-[#C8102E] text-[11px] font-semibold mb-2">
          <span>{INSTITUTE_CONFIG.classRange}</span>
        </div>
        <h3 className="font-heading text-lg sm:text-xl font-bold text-[#111111]">
          Admission &amp; Programme Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 mt-1">
          Coaching support from Class 5 to Class 12. Fill in your details below to open WhatsApp with your prefilled enquiry.
        </p>
      </div>

      <div className="space-y-4">
        {/* Student Name */}
        <div>
          <label
            htmlFor="studentName"
            className="block text-xs font-semibold text-neutral-800 uppercase tracking-wide mb-1"
          >
            Student Name <span className="text-[#C8102E]">*</span>
          </label>
          <input
            id="studentName"
            type="text"
            value={formData.studentName}
            onChange={(e) => handleInputChange('studentName', e.target.value)}
            placeholder="e.g. Ayaan Khan"
            className={`w-full px-3.5 py-2.5 text-sm rounded-lg border transition-all duration-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#C8102E] ${
              errors.studentName
                ? 'border-red-500 bg-red-50/30'
                : 'border-neutral-300 hover:border-neutral-400'
            }`}
          />
          <AnimatePresence>
            {errors.studentName && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-xs text-red-600 mt-1 flex items-center gap-1"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.studentName}</span>
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Parent / Guardian Name */}
        <div>
          <label
            htmlFor="parentName"
            className="block text-xs font-semibold text-neutral-800 uppercase tracking-wide mb-1"
          >
            Parent / Guardian Name <span className="text-[#C8102E]">*</span>
          </label>
          <input
            id="parentName"
            type="text"
            value={formData.parentName}
            onChange={(e) => handleInputChange('parentName', e.target.value)}
            placeholder="e.g. Tariq Khan"
            className={`w-full px-3.5 py-2.5 text-sm rounded-lg border transition-all duration-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#C8102E] ${
              errors.parentName
                ? 'border-red-500 bg-red-50/30'
                : 'border-neutral-300 hover:border-neutral-400'
            }`}
          />
          <AnimatePresence>
            {errors.parentName && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-xs text-red-600 mt-1 flex items-center gap-1"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.parentName}</span>
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Number */}
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-xs font-semibold text-neutral-800 uppercase tracking-wide mb-1"
          >
            WhatsApp / Mobile Number <span className="text-[#C8102E]">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-neutral-500 pointer-events-none">
              +91
            </span>
            <input
              id="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              placeholder="84478 32910"
              maxLength={15}
              className={`w-full pl-12 pr-3.5 py-2.5 text-sm rounded-lg border transition-all duration-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#C8102E] ${
                errors.phoneNumber
                  ? 'border-red-500 bg-red-50/30'
                  : 'border-neutral-300 hover:border-neutral-400'
              }`}
            />
          </div>
          <AnimatePresence>
            {errors.phoneNumber ? (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-xs text-red-600 mt-1 flex items-center gap-1"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.phoneNumber}</span>
              </motion.p>
            ) : (
              <p className="text-[11px] text-neutral-500 mt-1">
                Enter 10-digit Indian mobile number for WhatsApp coordination
              </p>
            )}
          </AnimatePresence>
        </div>

        {/* Current Class and Interested Programme Grids */}
        <div className={isCompact ? 'space-y-4' : 'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
          {/* Current Class (Class 5 to Class 12 in exact order) */}
          <div>
            <label
              htmlFor="currentClass"
              className="block text-xs font-semibold text-neutral-800 uppercase tracking-wide mb-1"
            >
              Current Class <span className="text-[#C8102E]">*</span>
            </label>
            <select
              id="currentClass"
              value={formData.currentClass}
              onChange={(e) => handleInputChange('currentClass', e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 bg-white hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E] transition-colors"
            >
              {ACADEMIC_CLASSES.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>

          {/* Interested Programme (NEET, JEE, CBSE, N/A) */}
          <div>
            <label
              htmlFor="interestedProgramme"
              className="block text-xs font-semibold text-neutral-800 uppercase tracking-wide mb-1"
            >
              Interested Programme <span className="text-[#C8102E]">*</span>
            </label>
            <select
              id="interestedProgramme"
              value={formData.interestedProgramme}
              onChange={(e) => handleInputChange('interestedProgramme', e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 bg-white hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E] transition-colors"
            >
              {PROGRAMME_OPTIONS.map((prog) => (
                <option key={prog} value={prog}>
                  {prog}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Additional Message (Optional) */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold text-neutral-800 uppercase tracking-wide mb-1"
          >
            Additional Questions / Notes <span className="text-neutral-400 font-normal">(Optional)</span>
          </label>
          <textarea
            id="message"
            rows={3}
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            placeholder="e.g. Inquiring for upcoming session batches and timing options..."
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E] bg-white transition-colors"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6 space-y-3">
        <motion.button
          {...buttonInteractive}
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-4 bg-[#C8102E] hover:bg-[#A80F25] text-white font-semibold text-sm rounded-lg flex items-center justify-center gap-2 shadow-sm transition-colors disabled:opacity-70 cursor-pointer"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Preparing WhatsApp Message...</span>
            </div>
          ) : (
            <>
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Send Enquiry via WhatsApp</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </motion.button>

        <p className="text-[11px] text-center text-neutral-500">
          Clicking will open WhatsApp with your message prefilled. You will review and tap Send.
        </p>
      </div>
    </form>
  );
};
