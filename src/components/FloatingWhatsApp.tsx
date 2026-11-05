import React, { useState } from 'react';
import { INSTITUTE_CONFIG } from '../data/institute';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    'Hello Step By Step Coaching Centre, I would like to enquire about admission and batch details.'
  );
  const whatsappUrl = `https://wa.me/${INSTITUTE_CONFIG.phoneRaw}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2"
    >
      {/* Friendly Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#171717] text-white text-xs px-3.5 py-2 rounded-full shadow-lg border border-neutral-700 animate-fadeIn">
          <span>Need help? Chat with us on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white ml-1 p-0.5 rounded"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400/50"
        aria-label="Chat with Step By Step Coaching Centre on WhatsApp"
        title="Chat on WhatsApp (+91 84478 32910)"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white/20" />
      </a>
    </aside>
  );
};
