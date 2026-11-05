import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { FACULTY_MEMBERS, INSTITUTE_CONFIG } from '../data/institute';
import {
  sectionVariants,
  staggerContainer,
  staggerItem,
  buttonInteractive,
  cardInteractive,
} from '../utils/animations';
import {
  BookOpen,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  GraduationCap,
} from 'lucide-react';

interface FacultyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiryModal: () => void;
}

export const FacultyPage: React.FC<FacultyPageProps> = ({
  onNavigate,
  onOpenEnquiryModal,
}) => {
  return (
    <div className="py-10 sm:py-16 space-y-16 overflow-hidden">
      {/* Header with In/Out motion */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4"
      >
        <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
          Academic Mentorship · Classes 5 to 12
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#111111] tracking-tight">
          Supportive Teaching &amp; Conceptual Guidance
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          At Step By Step Coaching Centre, our teaching methodology centers around dedicated mentorship,
          accessible doubt clearance, and fostering conceptual confidence in students across <strong>Class 5 to Class 12</strong>.
        </p>
      </motion.section>

      {/* Teaching Philosophy in Action */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm text-center">
          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium">
            &ldquo;Every strong academic journey begins with a clear understanding of the basics. At Step
            By Step, our focus is on helping students develop strong concepts, improve their
            understanding, and progress towards their academic goals.&rdquo;
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-neutral-500 font-mono">
            <span>Step By Step Coaching Centre</span>
            <span>·</span>
            <span>Shaheen Bagh, New Delhi</span>
          </div>
        </div>
      </motion.section>

      {/* Faculty Profiles Grid with Stagger & Card animations */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FACULTY_MEMBERS.map((faculty) => (
            <motion.div
              key={faculty.id}
              variants={staggerItem}
              {...cardInteractive}
              className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm hover:border-[#C8102E]/40 transition-shadow hover:shadow-md flex flex-col items-center text-center group"
            >
              {/* Dignified Initials Avatar using brand colors */}
              <div className="relative mb-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#171717] to-[#111111] text-white flex items-center justify-center font-heading font-extrabold text-2xl sm:text-3xl tracking-tight shadow-md border-2 border-neutral-800 group-hover:border-[#C8102E] transition-colors">
                  <span className="text-[#C8102E]">{faculty.initials[0]}</span>
                  <span className="text-white">{faculty.initials[1]}</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-[#C8102E] text-white flex items-center justify-center text-xs shadow-sm">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              {/* Faculty Name */}
              <h2 className="font-heading font-extrabold text-2xl text-[#111111]">
                {faculty.name}
              </h2>
              <p className="text-xs font-semibold text-[#C8102E] tracking-wider uppercase mt-1">
                {faculty.role}
              </p>

              {/* Focus Area */}
              <div className="mt-4 pt-4 border-t border-neutral-100 w-full space-y-2">
                <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">
                  Instructional Focus
                </span>
                <p className="text-xs sm:text-sm text-neutral-700 font-medium">
                  {faculty.focus}
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed pt-1">
                  Dedicated to conceptual understanding, structured problem solving, and responsive student
                  guidance for foundational and board batches.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 w-full">
                <motion.button
                  {...buttonInteractive}
                  onClick={onOpenEnquiryModal}
                  className="w-full py-2.5 px-4 bg-[#F7F7F7] hover:bg-[#C8102E] hover:text-white text-neutral-800 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enquire for Batches</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Classroom Environment & Faculty Values */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-neutral-50 rounded-2xl p-8 sm:p-12 border border-neutral-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#111111]">
              The Step By Step Classroom Experience
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Guiding students step-by-step from primary foundations in Class 5 through senior board levels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-neutral-200">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-[#C8102E] mb-3">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-sm text-[#111111] mb-1">
                Root-Level Clarification
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Concepts are deconstructed to their fundamental definitions so students build an
                intuitive grasp of each topic.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-neutral-200">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-[#C8102E] mb-3">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-sm text-[#111111] mb-1">
                Open Question Culture
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Students are actively encouraged to voice doubts without hesitation, fostering an
                inclusive and attentive learning space.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-neutral-200">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-[#C8102E] mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-sm text-[#111111] mb-1">
                Continuous Evaluation
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Regular classroom reviews and problem-solving checkpoints ensure consistent progress
                throughout the session.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Bottom CTA */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4"
      >
        <h3 className="font-heading font-bold text-xl text-[#111111]">
          Meet Our Faculty in Person
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto">
          Visit Step By Step Coaching Centre in Shaheen Bagh during operational hours (Monday to
          Saturday, 4:00 PM – 9:00 PM) to discuss your academic roadmap for Classes 5 to 12.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <motion.button
            {...buttonInteractive}
            onClick={() => onNavigate('contact')}
            className="px-6 py-2.5 bg-[#C8102E] hover:bg-[#A80F25] text-white text-xs font-semibold rounded-lg shadow-sm cursor-pointer"
          >
            Centre Address &amp; Map
          </motion.button>
          <motion.a
            {...buttonInteractive}
            href={INSTITUTE_CONFIG.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold rounded-lg shadow-xs flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Connect on WhatsApp</span>
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};
