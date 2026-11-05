import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId, CourseId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AdmissionModal } from './components/AdmissionModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { FacultyPage } from './pages/FacultyPage';
import { ContactPage } from './pages/ContactPage';
import { pageVariants } from './utils/animations';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCourse, setModalCourse] = useState<CourseId>('neet');

  // Sync state with URL hash for browser history & direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'about', 'courses', 'faculty', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiryModal = (course?: CourseId) => {
    if (course) {
      setModalCourse(course);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F7] text-[#111111] overflow-x-hidden">
      {/* Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnquiryModal={() => handleOpenEnquiryModal()}
      />

      {/* Main Content Body with Smooth Page Entrance & Exit Transitions */}
      <main className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onOpenEnquiryModal={handleOpenEnquiryModal}
              />
            )}
            {currentPage === 'about' && (
              <AboutPage
                onNavigate={handleNavigate}
                onOpenEnquiryModal={() => handleOpenEnquiryModal()}
              />
            )}
            {currentPage === 'courses' && (
              <CoursesPage onOpenEnquiryModal={handleOpenEnquiryModal} />
            )}
            {currentPage === 'faculty' && (
              <FacultyPage
                onNavigate={handleNavigate}
                onOpenEnquiryModal={() => handleOpenEnquiryModal()}
              />
            )}
            {currentPage === 'contact' && (
              <ContactPage initialCourse={modalCourse} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEnquiryModal={() => handleOpenEnquiryModal()}
      />

      {/* Global Floating WhatsApp Access */}
      <FloatingWhatsApp />

      {/* Admission Enquiry Modal with in/out animation */}
      <AdmissionModal
        isOpen={isModalOpen}
        initialCourse={modalCourse}
        onClose={handleCloseModal}
      />
    </div>
  );
}
