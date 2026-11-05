import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { INSTITUTE_CONFIG, COURSES } from '../data/institute';
import { buttonInteractive } from '../utils/animations';
import { Phone, MessageCircle, MapPin, Clock, ArrowUpRight, GraduationCap } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiryModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiryModal }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-neutral-300 border-t border-neutral-800">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-lg shadow-sm">
                <img
                  src={INSTITUTE_CONFIG.logoUrl}
                  alt="Step By Step Coaching Centre Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-white text-base tracking-tight leading-tight">
                  STEP BY STEP
                </h3>
                <p className="text-xs font-semibold text-[#C8102E] tracking-wider uppercase">
                  Coaching Centre
                </p>
                <p className="text-xs text-neutral-400 italic">Towards Success</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Step By Step Study Centre provides quality coaching and academic support from{' '}
              <strong className="text-neutral-200">Class 5 to Class 12</strong>, including CBSE Board
              coaching and dedicated preparation for NEET and JEE examinations.
            </p>

            <div className="pt-2">
              <motion.button
                {...buttonInteractive}
                onClick={onOpenEnquiryModal}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8102E] hover:bg-[#A80F25] text-white text-xs font-semibold rounded-md transition-colors shadow-sm cursor-pointer"
              >
                <span>Request Admission Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </div>

          {/* Col 2: Academic Programmes */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Academic Programmes
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {COURSES.map((course) => (
                <li key={course.id}>
                  <button
                    onClick={() => handleNav('courses')}
                    className="hover:text-white transition-colors text-left flex items-center justify-between w-full group cursor-pointer"
                  >
                    <span className="text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-all">
                      {course.title}
                    </span>
                    <span className="text-[10px] text-neutral-500 font-mono">
                      {course.badge}
                    </span>
                  </button>
                </li>
              ))}
              <li className="pt-2 text-xs text-neutral-400 border-t border-neutral-800">
                <span className="flex items-center gap-1.5 text-neutral-300 font-medium">
                  <GraduationCap className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>Coaching for Classes 5 to 12</span>
                </span>
                <span className="text-[11px] text-neutral-500 block mt-1">
                  Physics, Chemistry, Mathematics &amp; Biology
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white hover:translate-x-1 transition-all cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white hover:translate-x-1 transition-all cursor-pointer"
                >
                  About Our Institute
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('courses')}
                  className="hover:text-white hover:translate-x-1 transition-all cursor-pointer"
                >
                  Courses (Class 5–12)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faculty')}
                  className="hover:text-white hover:translate-x-1 transition-all cursor-pointer"
                >
                  Our Faculty
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white hover:translate-x-1 transition-all cursor-pointer"
                >
                  Contact &amp; Map Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Info */}
          <div className="space-y-3.5">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact &amp; Location
            </h4>

            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
              <MapPin className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
              <span>
                {INSTITUTE_CONFIG.address.full}
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
              <Phone className="w-4 h-4 text-[#C8102E] shrink-0" />
              <a
                href={INSTITUTE_CONFIG.telLink}
                className="hover:text-white font-medium transition-colors"
              >
                {INSTITUTE_CONFIG.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
              <MessageCircle className="w-4 h-4 text-green-500 shrink-0" />
              <a
                href={INSTITUTE_CONFIG.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 font-medium transition-colors"
              >
                WhatsApp: {INSTITUTE_CONFIG.phoneDisplay}
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-neutral-400 pt-1">
              <Clock className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-neutral-300">{INSTITUTE_CONFIG.timings.weekdays}</p>
                <p className="text-neutral-500">{INSTITUTE_CONFIG.timings.sunday}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 bg-[#0c0c0c] py-5 pb-24 sm:pb-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-3.5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
            <p>
              &copy; {new Date().getFullYear()} Step By Step Coaching Centre. All rights reserved.
            </p>
            <p className="text-center sm:text-right">
              Towards Success · Coaching for Classes 5 to 12 · Shaheen Bagh, Jamia Nagar, New Delhi
            </p>
          </div>

          <div className="pt-3 border-t border-neutral-800/80 text-center">
            <p className="text-xs text-neutral-400">
              <span className="block sm:inline">Designed &amp; Developed By </span>
              <span className="block sm:inline font-semibold text-white tracking-wide hover:text-[#C8102E] transition-colors">
                Md. Saifur Rahman
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
