import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';
import { INSTITUTE_CONFIG } from '../data/institute';
import { mobileDrawerVariants, buttonInteractive } from '../utils/animations';
import { Phone, MessageCircle, Menu, X, ArrowRight, GraduationCap } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenEnquiryModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenEnquiryModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'courses', label: 'Courses' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#171717] text-white text-xs py-2 px-4 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 text-neutral-300 flex-wrap justify-center sm:justify-start">
            <span className="font-semibold text-white">Shaheen Bagh, Jamia Nagar, New Delhi</span>
            <span className="text-neutral-600 hidden sm:inline">|</span>
            <span className="inline-flex items-center gap-1 text-[#C8102E] font-semibold bg-white/10 px-2 py-0.5 rounded text-[11px]">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Classes 5 to 12</span>
            </span>
            <span className="text-neutral-600 hidden md:inline">|</span>
            <span className="hidden md:inline">Mon–Sat: 4:00 PM – 9:00 PM</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-300">
            <a
              href={INSTITUTE_CONFIG.telLink}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8102E]" />
              <span className="font-semibold text-white">{INSTITUTE_CONFIG.phoneDisplay}</span>
            </a>
            <span className="text-neutral-600">|</span>
            <a
              href={INSTITUTE_CONFIG.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-green-400 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-green-500" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-neutral-200'
            : 'bg-white py-3.5 border-b border-neutral-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo & Brand Identity */}
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] rounded-lg p-1 cursor-pointer"
              aria-label="Step By Step Coaching Centre Home"
            >
              <img
                src={INSTITUTE_CONFIG.logoUrl}
                alt="Step By Step Coaching Centre Logo"
                className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-[#111111] leading-tight">
                  STEP BY STEP
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#C8102E] tracking-wider uppercase">
                  Coaching Centre
                </span>
                <span className="text-[10px] text-neutral-500 font-normal italic leading-none">
                  Towards Success · Classes 5 to 12
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <motion.button
                    key={link.id}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => handleLinkClick(link.id)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors relative whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'text-[#C8102E] font-semibold'
                        : 'text-neutral-700 hover:text-[#C8102E] hover:bg-neutral-50'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C8102E] rounded-full"
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={INSTITUTE_CONFIG.telLink}
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-700 hover:text-[#C8102E] transition-colors"
                title="Call Step By Step Coaching Centre"
              >
                <Phone className="w-3.5 h-3.5 text-[#C8102E]" />
                <span>Call Us</span>
              </a>
              <motion.button
                {...buttonInteractive}
                onClick={onOpenEnquiryModal}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#C8102E] hover:bg-[#A80F25] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                onClick={onOpenEnquiryModal}
                className="px-2.5 py-1.5 bg-[#C8102E] text-white text-xs font-semibold rounded-md shadow-sm"
              >
                Enquire
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-neutral-700 hover:text-[#C8102E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] rounded-md cursor-pointer"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer with AnimatePresence */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileDrawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={`flex items-center justify-between px-3 py-2.5 text-base font-medium rounded-lg text-left transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-red-50 text-[#C8102E] font-semibold'
                          : 'text-neutral-800 hover:bg-neutral-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-col gap-2.5">
                <motion.button
                  {...buttonInteractive}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenEnquiryModal();
                  }}
                  className="w-full py-2.5 px-4 bg-[#C8102E] hover:bg-[#A80F25] text-white font-semibold text-sm rounded-lg flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>Admission Enquiry (Classes 5–12)</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={INSTITUTE_CONFIG.telLink}
                    className="py-2 px-3 border border-neutral-300 rounded-lg text-xs font-semibold text-neutral-700 flex items-center justify-center gap-1.5 hover:bg-neutral-50"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href={INSTITUTE_CONFIG.whatsappBaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 bg-green-600 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-green-700"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
