
import React, { useState, useEffect } from 'react';
import { X, MessageCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AISaaSPopupProps {
  onClose: () => void;
}

const AISaaSPopup: React.FC<AISaaSPopupProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup with animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Auto-dismiss after 15 seconds
    const autoDismiss = setTimeout(() => {
      handleClose();
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoDismiss);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for animation to complete
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = "916567778508";
    const message = "Hi! I'm interested in building an AI SaaS product. Can you help me turn my idea into reality?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    handleClose();
  };

  const handleEmailContact = () => {
    const email = "contact@example.com"; // Replace with actual email
    const subject = "AI SaaS Product Development Inquiry";
    const body = "Hi! I'm interested in building an AI SaaS product. Can you help me turn my idea into reality?";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    handleClose();
  };

  const handleProductHunt = () => {
    window.open('https://www.producthunt.com/@muhammad_adnan45', '_blank');
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div 
        className={`relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transition-all duration-300 transform ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10 focus-visible:focus-visible"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
            Build Your Own AI SaaS Product
          </h2>

          {/* Subtext */}
          <p className="text-gray-600 mb-4 text-base sm:text-lg leading-relaxed">
            Have an AI startup idea? I'll turn it into a fully functional product — fast. 
            From concept to launch, done for you.
          </p>

          {/* Contact Info */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 text-whatsapp-green font-semibold">
              <MessageCircle className="w-4 h-4" />
              <span>+91 65677 8508</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleWhatsAppContact}
              className="flex-1 bg-whatsapp-green hover:bg-whatsapp-dark-green text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus-visible:focus-visible"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Connect with Me
            </Button>
            
            <Button
              onClick={handleProductHunt}
              variant="outline"
              className="flex-1 border-2 border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-light-green/20 font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus-visible:focus-visible"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              See My Products
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISaaSPopup;
