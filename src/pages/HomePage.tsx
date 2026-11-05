import React from 'react';
import { motion } from 'motion/react';
import { PageId, CourseId } from '../types';
import { COURSES, INSTITUTE_CONFIG } from '../data/institute';
import {
  sectionVariants,
  staggerContainer,
  staggerItem,
  slideFromLeft,
  slideFromRight,
  buttonInteractive,
  cardInteractive,
} from '../utils/animations';
import {
  BookOpen,
  ArrowRight,
  Compass,
  Stethoscope,
  GraduationCap,
  Atom,
  Dna,
  Calculator,
  Flame,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  Sparkles,
  Layers,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiryModal: (course?: CourseId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenEnquiryModal,
}) => {
  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-[#C8102E]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#C8102E]" />;
      case 'GraduationCap':
      default:
        return <GraduationCap className="w-6 h-6 text-[#C8102E]" />;
    }
  };

  const getSubjectIcon = (name: string) => {
    switch (name) {
      case 'Physics':
        return <Atom className="w-5 h-5 text-[#C8102E]" />;
      case 'Chemistry':
        return <Flame className="w-5 h-5 text-[#C8102E]" />;
      case 'Mathematics':
        return <Calculator className="w-5 h-5 text-[#C8102E]" />;
      case 'Biology':
      default:
        return <Dna className="w-5 h-5 text-[#C8102E]" />;
    }
  };

  return (
    <div className="space-y-16 lg:space-y-24 overflow-hidden">
      {/* Hero Section with Staggered Entrance and Out Motion */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-[#F7F7F7] pt-10 sm:pt-16 pb-16 lg:pb-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline & Value Proposition */}
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#C8102E] text-xs font-semibold tracking-wide flex-wrap">
                <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse" />
                <span className="font-bold">Coaching for Classes 5 to 12</span>
                <span className="text-red-300">·</span>
                <span className="font-normal text-neutral-600">Shaheen Bagh, New Delhi</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#111111] tracking-tight leading-[1.12]">
                Build Your Foundation.{' '}
                <span className="text-[#C8102E]">Achieve Your Dreams.</span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
                Academic support and quality coaching from <strong>Class 5 to Class 12</strong>,
                CBSE Board examinations, and dedicated NEET &amp; JEE preparation with a focus on
                strengthening concepts and building academic confidence.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <motion.button
                  {...buttonInteractive}
                  onClick={() => onNavigate('courses')}
                  className="px-6 py-3.5 bg-[#C8102E] hover:bg-[#A80F25] text-white font-semibold text-sm rounded-lg shadow-sm hover:shadow transition-colors flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Explore Our Courses</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  {...buttonInteractive}
                  onClick={() => onOpenEnquiryModal()}
                  className="px-6 py-3.5 bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 font-semibold text-sm rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  <span>Enquire Now (Classes 5–12)</span>
                </motion.button>
              </div>

              {/* Trust & Location Metadata strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-200/80 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#C8102E] shrink-0" />
                  <span className="font-semibold text-neutral-800">Classes 5 to 12</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#C8102E] shrink-0" />
                  <span>NEET · JEE · CBSE</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <MapPin className="w-4 h-4 text-[#C8102E] shrink-0" />
                  <span>Thokar No. 8, Okhla</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Premium Visual Card with Original Logo */}
            <motion.div
              variants={slideFromRight}
              initial="hidden"
              animate="visible"
              className="lg:col-span-5"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#C8102E]/20 via-neutral-100 to-transparent rounded-3xl blur-lg opacity-70" />

                <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-200">
                  <div className="flex flex-col items-center text-center">
                    {/* Centered Original Logo */}
                    <div className="bg-[#F7F7F7] p-4 rounded-xl border border-neutral-200/80 mb-5 w-full flex items-center justify-center">
                      <img
                        src={INSTITUTE_CONFIG.logoUrl}
                        alt="Step By Step Coaching Centre Official Logo"
                        className="h-28 sm:h-36 w-auto object-contain transition-transform hover:scale-105 duration-300"
                      />
                    </div>

                    <h2 className="font-heading font-bold text-xl text-[#111111]">
                      Step By Step Coaching Centre
                    </h2>
                    <p className="text-xs font-semibold text-[#C8102E] tracking-widest uppercase mt-0.5">
                      Towards Success
                    </p>
                    <p className="text-xs text-neutral-500 mt-2">
                      Academic Guidance &amp; Foundation Coaching for <strong>Classes 5 to 12</strong> in Shaheen Bagh, Jamia Nagar, New Delhi
                    </p>

                    {/* Quick Programme Tags */}
                    <div className="w-full mt-6 pt-5 border-t border-neutral-100 flex flex-wrap justify-center gap-2">
                      <span className="px-3 py-1 bg-red-50 text-[#C8102E] text-xs font-semibold rounded-md border border-red-100">
                        Class 5 to 12 Coaching
                      </span>
                      <span className="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs font-semibold rounded-md">
                        NEET Preparation
                      </span>
                      <span className="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs font-semibold rounded-md">
                        JEE Preparation
                      </span>
                    </div>

                    <div className="w-full mt-5">
                      <motion.a
                        {...buttonInteractive}
                        href={INSTITUTE_CONFIG.whatsappBaseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Chat Directly on WhatsApp</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academic Programmes Section with Scroll In and Out Animation */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
            Building Strong Foundations from Class 5 to Class 12
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111111] mt-1">
            Academic Programmes
          </h2>
          <p className="text-sm text-neutral-600 mt-2">
            Structured learning pathways from Class 5 up through board and competitive entrance milestones.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {COURSES.map((course) => (
            <motion.div
              key={course.id}
              variants={staggerItem}
              {...cardInteractive}
              className="bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center border border-red-100 group-hover:scale-105 transition-transform">
                    {getCourseIcon(course.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-[#C8102E] bg-red-50/80 px-2.5 py-1 rounded border border-red-100">
                    {course.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-[#111111] mb-2 group-hover:text-[#C8102E] transition-colors">
                  {course.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mb-4 leading-relaxed">
                  {course.shortDescription}
                </p>

                <div className="mb-6 pt-3 border-t border-neutral-100">
                  <span className="text-[11px] font-semibold uppercase text-neutral-400 tracking-wider block mb-2">
                    Subjects Covered
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {course.subjects.map((sub) => (
                      <span
                        key={sub}
                        className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-xs rounded font-medium"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-neutral-100">
                <motion.button
                  {...buttonInteractive}
                  onClick={() => onOpenEnquiryModal(course.id)}
                  className="flex-1 py-2 px-3 bg-[#C8102E] hover:bg-[#A80F25] text-white text-xs font-semibold rounded-md transition-colors text-center shadow-xs cursor-pointer"
                >
                  Enquire Now
                </motion.button>
                <motion.button
                  {...buttonInteractive}
                  onClick={() => onNavigate('courses')}
                  className="py-2 px-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold rounded-md transition-colors text-center cursor-pointer"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Why Choose Us Section with In/Out viewport animation */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="bg-white py-16 border-y border-neutral-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
              Academic Support from Class 5 to Class 12
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#111111] mt-1">
              Why Choose Step By Step
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Grounded principles dedicated to genuine learning and student progress.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {INSTITUTE_CONFIG.whyChooseUsValues.map((val, idx) => (
              <motion.div
                key={val.title}
                variants={staggerItem}
                {...cardInteractive}
                className="p-6 rounded-xl border border-neutral-200 hover:border-neutral-300 bg-[#F7F7F7] transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#111111] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#111111]">
                    {val.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pl-11">
                  {val.description}
                </p>
              </motion.div>
            ))}

            {/* 6th Educational Commitment Box */}
            <motion.div
              variants={staggerItem}
              {...cardInteractive}
              className="p-6 rounded-xl border border-neutral-300 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-[#C8102E] mb-2 font-semibold text-xs uppercase tracking-wide">
                  <Sparkles className="w-4 h-4" />
                  <span>Our Promise</span>
                </div>
                <h3 className="font-heading font-bold text-base text-[#111111] mb-2">
                  Academic Honesty &amp; Foundation Care
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  We believe in authentic guidance from primary foundations in Class 5 through senior secondary
                  boards and entrance milestones. Every student receives personal attention without inflated promises.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-100">
                <button
                  onClick={() => onNavigate('about')}
                  className="text-xs font-semibold text-[#C8102E] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Our Full Teaching Philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Subjects Section with In/Out animation */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
            Core Disciplines
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#111111] mt-1">
            Subjects Offered (Classes 5 to 12)
          </h2>
          <p className="text-sm text-neutral-600 mt-2">
            Specialized coaching in foundational science and mathematics.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {INSTITUTE_CONFIG.subjects.map((sub) => (
            <motion.div
              key={sub.name}
              variants={staggerItem}
              {...cardInteractive}
              className="bg-white rounded-xl border border-neutral-200 p-6 shadow-xs hover:border-[#C8102E]/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4 border border-red-100 group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                {getSubjectIcon(sub.name)}
              </div>
              <span className="text-[11px] font-mono text-neutral-400 block mb-1">
                {sub.category}
              </span>
              <h3 className="font-heading font-bold text-lg text-[#111111] mb-2">
                {sub.name}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {sub.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Teaching Philosophy Section with In/Out animation */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-[#171717] text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-neutral-800 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8102E]">
              Teaching Philosophy
            </span>
            <blockquote className="font-heading text-lg sm:text-2xl font-medium leading-relaxed text-neutral-100">
              &ldquo;{INSTITUTE_CONFIG.teachingPhilosophy}&rdquo;
            </blockquote>
            <p className="text-xs text-neutral-400 font-mono tracking-wide">
              STEP BY STEP STUDY CENTRE · COACHING FOR CLASSES 5 TO 12
            </p>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section with In/Out animation */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="bg-white border-t border-neutral-200 py-14"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#111111]">
            Your Journey Towards Success Starts Here.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
            Connect with us to learn more about our coaching programmes for <strong>Classes 5 to 12</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <motion.button
              {...buttonInteractive}
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#C8102E] hover:bg-[#A80F25] text-white font-semibold text-sm rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.a
              {...buttonInteractive}
              href={INSTITUTE_CONFIG.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: {INSTITUTE_CONFIG.phoneDisplay}</span>
            </motion.a>
            <motion.a
              {...buttonInteractive}
              href={INSTITUTE_CONFIG.telLink}
              className="w-full sm:w-auto px-6 py-3.5 border border-neutral-300 text-neutral-800 font-semibold text-sm rounded-lg hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C8102E]" />
              <span>Call Us</span>
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
