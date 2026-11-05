import React from 'react';
import { motion } from 'motion/react';
import { CourseId } from '../types';
import { COURSES, INSTITUTE_CONFIG } from '../data/institute';
import { generateQuickCourseWhatsAppUrl } from '../utils/enquiry';
import {
  sectionVariants,
  staggerContainer,
  staggerItem,
  buttonInteractive,
  cardInteractive,
} from '../utils/animations';
import {
  Stethoscope,
  Compass,
  GraduationCap,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Phone,
  BookOpen,
} from 'lucide-react';

interface CoursesPageProps {
  onOpenEnquiryModal: (course?: CourseId) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ onOpenEnquiryModal }) => {
  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-8 h-8 text-[#C8102E]" />;
      case 'Compass':
        return <Compass className="w-8 h-8 text-[#C8102E]" />;
      case 'GraduationCap':
      default:
        return <GraduationCap className="w-8 h-8 text-[#C8102E]" />;
    }
  };

  return (
    <div className="py-10 sm:py-16 space-y-16 overflow-hidden">
      {/* Header with In/Out animation */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#C8102E] text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Coaching Coverage from Class 5 to Class 12</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#111111] tracking-tight">
          Comprehensive Coaching Programmes
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Structured academic coaching designed to build foundational clarity and examination
          competence from <strong>Class 5 through Class 12</strong>, including CBSE Board and national entrance tests.
        </p>
      </motion.section>

      {/* Courses Detailed Cards with Stagger and In/Out animations */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10"
      >
        {COURSES.map((course) => {
          const quickWhatsAppUrl = generateQuickCourseWhatsAppUrl(course.title);
          return (
            <motion.div
              key={course.id}
              variants={staggerItem}
              {...cardInteractive}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  {/* Left Column: Icon & Overview */}
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center border border-red-100 shrink-0">
                        {getCourseIcon(course.iconName)}
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-[#C8102E] tracking-wider uppercase">
                          {course.badge}
                        </span>
                        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#111111]">
                          {course.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium">
                      {course.shortDescription}
                    </p>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {course.detailedDescription}
                    </p>

                    {/* Subjects Grid */}
                    <div className="pt-3">
                      <span className="text-xs font-bold uppercase text-neutral-400 tracking-wider block mb-2.5">
                        Core Subjects
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {course.subjects.map((sub) => (
                          <span
                            key={sub}
                            className="px-3 py-1.5 bg-[#F7F7F7] border border-neutral-200 rounded-lg text-xs font-semibold text-neutral-800"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Actions Box */}
                  <div className="lg:w-80 bg-[#F7F7F7] rounded-xl p-6 border border-neutral-200 flex flex-col justify-between shrink-0 space-y-4">
                    <div>
                      <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider block">
                        Target Level
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-[#111111] mt-0.5">
                        {course.targetAudience}
                      </p>

                      <div className="mt-4 pt-4 border-t border-neutral-200 space-y-2 text-xs text-neutral-600">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                          <span>Conceptual theory &amp; regular practice</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                          <span>Doubt resolution &amp; individual guidance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                          <span>Shaheen Bagh offline coaching</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2.5 pt-2">
                      <motion.button
                        {...buttonInteractive}
                        onClick={() => onOpenEnquiryModal(course.id)}
                        className="w-full py-3 px-4 bg-[#C8102E] hover:bg-[#A80F25] text-white font-semibold text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                      >
                        <span>Enquire for {course.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.button>

                      <motion.a
                        {...buttonInteractive}
                        href={quickWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-2 transition-colors shadow-xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Quick WhatsApp Enquiry</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.section>

      {/* General Enquiry Callout */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white border border-neutral-200 rounded-2xl p-8 shadow-xs space-y-3"
      >
        <h3 className="font-heading font-bold text-lg text-[#111111]">
          Not sure which programme or batch fits best?
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto">
          Whether you are in Class 5, 8, 10, or 12, select <strong>&quot;N/A&quot;</strong> in our enquiry form for a general counseling discussion with our coordinators.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <motion.button
            {...buttonInteractive}
            onClick={() => onOpenEnquiryModal('na')}
            className="px-6 py-2.5 bg-[#C8102E] hover:bg-[#A80F25] text-white text-xs font-semibold rounded-lg shadow-sm cursor-pointer"
          >
            General Enquiry (N/A)
          </motion.button>
          <motion.a
            {...buttonInteractive}
            href={INSTITUTE_CONFIG.telLink}
            className="px-6 py-2.5 border border-neutral-300 text-neutral-800 text-xs font-semibold rounded-lg hover:bg-neutral-50 flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>Call: {INSTITUTE_CONFIG.phoneDisplay}</span>
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};
