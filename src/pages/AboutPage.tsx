import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { INSTITUTE_CONFIG } from '../data/institute';
import { sectionVariants, staggerContainer, staggerItem, buttonInteractive } from '../utils/animations';
import {
  Target,
  Compass,
  ShieldCheck,
  GraduationCap,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiryModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenEnquiryModal,
}) => {
  return (
    <div className="py-10 sm:py-16 space-y-16 overflow-hidden">
      {/* Page Header with In/Out motion */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4"
      >
        <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
          About Our Institution · Classes 5 to 12
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#111111] tracking-tight">
          Dedicated to Quality Education &amp; Academic Guidance
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
          {INSTITUTE_CONFIG.aboutIntroduction}
        </p>
      </motion.section>

      {/* Vision & Mission Cards with In/Out Motion */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm relative overflow-hidden transition-shadow hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6 border border-red-100">
              <Target className="w-6 h-6 text-[#C8102E]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Strategic Vision
            </span>
            <h2 className="font-heading font-bold text-2xl text-[#111111] mt-1 mb-4">
              Our Vision
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 font-medium leading-relaxed bg-[#F7F7F7] p-5 rounded-xl border border-neutral-200">
              &ldquo;{INSTITUTE_CONFIG.vision}&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 mt-4 leading-relaxed">
              We envision an educational atmosphere where every learner develops the clarity,
              analytical discipline, and confidence necessary to excel across foundational school classes
              and senior board and competitive examinations.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-[#171717] text-white rounded-2xl p-8 border border-neutral-800 shadow-sm relative overflow-hidden transition-shadow hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center mb-6 border border-neutral-700">
              <Compass className="w-6 h-6 text-[#C8102E]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8102E]">
              Core Purpose
            </span>
            <h2 className="font-heading font-bold text-2xl text-white mt-1 mb-4">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed bg-neutral-900/80 p-5 rounded-xl border border-neutral-800">
              {INSTITUTE_CONFIG.mission}
            </p>
            <p className="text-xs sm:text-sm text-neutral-400 mt-4 leading-relaxed">
              By prioritizing fundamentals from Class 5 onwards, we guide students through systematic
              preparation that builds long-term competence and genuine self-assurance.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Teaching Approach Section with Staggered In/Out Motion */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="bg-white py-16 border-y border-neutral-200"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
              Methodology
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111111] mt-1">
              Our Teaching Approach
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Our pedagogical philosophy is built on five core pillars designed to empower students
              from Class 5 to Class 12 with lasting conceptual clarity.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="space-y-6"
          >
            {INSTITUTE_CONFIG.teachingApproachPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                variants={staggerItem}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="bg-[#F7F7F7] rounded-xl p-6 sm:p-7 border border-neutral-200 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-neutral-300 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-lg bg-[#C8102E] text-white font-mono text-sm font-bold flex items-center justify-center shrink-0">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#111111]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 leading-relaxed max-w-3xl">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Teaching Philosophy Callout */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="border border-neutral-200 bg-white rounded-2xl p-8 sm:p-10 shadow-sm text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 text-[#C8102E] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Academic Integrity &amp; Discipline</span>
          </div>
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#111111]">
            A Commitment to Authentic Learning (Classes 5 to 12)
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            At Step By Step Coaching Centre, we believe that real academic results are achieved
            through steady, diligent effort and attentive teaching. We welcome students and parents to
            visit our centre in Shaheen Bagh to discuss academic roadmaps for any class from 5 to 12.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <motion.button
              {...buttonInteractive}
              onClick={onOpenEnquiryModal}
              className="px-6 py-3 bg-[#C8102E] hover:bg-[#A80F25] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Enquire for Admission
            </motion.button>
            <motion.button
              {...buttonInteractive}
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer"
            >
              View Location &amp; Timings
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
