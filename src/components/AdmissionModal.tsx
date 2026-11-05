import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CourseId } from '../types';
import { EnquiryForm } from './EnquiryForm';
import { modalOverlayVariants, modalContentVariants } from '../utils/animations';
import { X } from 'lucide-react';

interface AdmissionModalProps {
  isOpen: boolean;
  initialCourse?: CourseId;
  onClose: () => void;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  initialCourse,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop with Entrance and Exit Animation */}
          <motion.div
            variants={modalOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Dialog Content with Entrance and Exit Animation */}
          <motion.div
            variants={modalContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl z-10 my-8 overflow-hidden"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-[#171717] text-white">
              <div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C8102E]">
                  Step By Step Coaching Centre
                </span>
                <h2 id="modal-title" className="font-heading text-base font-bold text-white">
                  Direct Admission Enquiry
                </h2>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] cursor-pointer"
                aria-label="Close enquiry modal"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Form Body */}
            <div className="p-2 sm:p-4 max-h-[80vh] overflow-y-auto">
              <EnquiryForm initialCourse={initialCourse} isCompact={true} className="border-0 shadow-none p-4 sm:p-6" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
