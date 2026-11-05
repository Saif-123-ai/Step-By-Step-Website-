import React from 'react';
import { motion } from 'motion/react';
import { CourseId } from '../types';
import { INSTITUTE_CONFIG } from '../data/institute';
import { EnquiryForm } from '../components/EnquiryForm';
import {
  sectionVariants,
  slideFromLeft,
  slideFromRight,
  buttonInteractive,
} from '../utils/animations';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ExternalLink,
  Navigation,
  GraduationCap,
} from 'lucide-react';

interface ContactPageProps {
  initialCourse?: CourseId;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialCourse = 'neet' }) => {
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    INSTITUTE_CONFIG.address.full
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  const googleMapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    INSTITUTE_CONFIG.address.full
  )}`;

  return (
    <div className="py-10 sm:py-16 space-y-16 overflow-hidden">
      {/* Page Header with In/Out animation */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#C8102E] text-xs font-semibold">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Admissions for Classes 5 to 12</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#111111] tracking-tight">
          Visit Us or Send an Admission Enquiry
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          We welcome students and parents to connect with us for batch details, subject guidance, and
          admissions from <strong>Class 5 through Class 12</strong>.
        </p>
      </motion.section>

      {/* Main Content: Info & Form Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Cards & Details */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 space-y-6"
          >
            {/* Institute Identity Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-white p-1 rounded-md border border-neutral-200 shrink-0">
                  <img
                    src={INSTITUTE_CONFIG.logoUrl}
                    alt="Step By Step Coaching Centre"
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-base text-[#111111] leading-tight">
                    {INSTITUTE_CONFIG.name}
                  </h2>
                  <p className="text-xs text-neutral-500 font-medium">
                    Also known as: {INSTITUTE_CONFIG.alternateName}
                  </p>
                  <p className="text-[11px] font-semibold text-[#C8102E] tracking-wider uppercase mt-0.5">
                    {INSTITUTE_CONFIG.tagline} · Classes 5 to 12
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="pt-4 border-t border-neutral-100 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-[#C8102E] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-neutral-400 tracking-wider block">
                    Campus Address
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-neutral-800 leading-snug mt-1">
                    {INSTITUTE_CONFIG.address.full}
                  </p>
                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#C8102E] font-semibold hover:underline mt-2"
                  >
                    <span>Get Directions on Google Maps</span>
                    <Navigation className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone & Click to Call */}
              <div className="pt-4 border-t border-neutral-100 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-[#C8102E] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase text-neutral-400 tracking-wider block">
                    Telephone
                  </span>
                  <p className="text-sm font-bold text-neutral-900 mt-1">
                    {INSTITUTE_CONFIG.phoneDisplay}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <motion.a
                      {...buttonInteractive}
                      href={INSTITUTE_CONFIG.telLink}
                      className="px-3 py-1.5 bg-[#C8102E] hover:bg-[#A80F25] text-white rounded text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-xs"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call Now</span>
                    </motion.a>
                    <motion.a
                      {...buttonInteractive}
                      href={INSTITUTE_CONFIG.whatsappBaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="pt-4 border-t border-neutral-100 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-neutral-400 tracking-wider block">
                    Operational Hours
                  </span>
                  <div className="text-xs sm:text-sm text-neutral-800 mt-1 space-y-0.5">
                    <p className="font-semibold">{INSTITUTE_CONFIG.timings.weekdays}</p>
                    <p className="text-neutral-500 font-normal">{INSTITUTE_CONFIG.timings.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Notice Box */}
            <div className="bg-[#171717] text-white rounded-2xl p-6 border border-neutral-800 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C8102E]">
                Local Landmark Note
              </span>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Located conveniently at Thokar Number 8 in Shaheen Bagh, Jamia Nagar. Students can visit
                between 4:00 PM and 9:00 PM, Monday through Saturday for prospectus inquiries across Classes 5 to 12.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Admission Enquiry Form */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <EnquiryForm initialCourse={initialCourse} />
          </motion.div>
        </div>
      </section>

      {/* Embedded Google Maps Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
          <div className="p-4 sm:p-6 border-b border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
                Centre Location
              </span>
              <h2 className="font-heading font-bold text-lg sm:text-xl text-[#111111]">
                Google Maps Location
              </h2>
              <p className="text-xs text-neutral-500 mt-0.5">
                {INSTITUTE_CONFIG.address.full}
              </p>
            </div>
            <motion.a
              {...buttonInteractive}
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors shrink-0"
            >
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* Responsive Map Container */}
          <div className="w-full h-80 sm:h-96 lg:h-[420px] bg-neutral-100">
            <iframe
              title="Step By Step Coaching Centre Location Map"
              src={mapEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
};
