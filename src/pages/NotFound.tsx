
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';

const NotFound = () => {
  return (
    <>
      <SEOHead 
        title="404 - Page Not Found | WhatsX"
        description="The page you're looking for doesn't exist. Return to WhatsX homepage or explore our AI-powered lead generation tools."
        keywords="404 error, page not found, WhatsX, lead generation"
        canonicalUrl="https://whatsx.lovable.app/404"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-whatsapp-light-green/10 via-white to-whatsapp-light-green/20 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative">
              <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-whatsapp-green/20 select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-whatsapp-green rounded-full flex items-center justify-center animate-pulse">
                  <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-md mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 max-w-lg mx-auto">
            <Link to="/" className="w-full sm:flex-1">
              <Button className="w-full bg-whatsapp-green hover:bg-whatsapp-dark-green text-white px-6 py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus-visible:focus-visible">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="w-full sm:flex-1 border-2 border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-light-green/20 px-6 py-4 text-base font-semibold transition-all duration-300 transform hover:scale-105 focus-visible:focus-visible"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Quick Links */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500 mb-4">
              Or try these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <Link 
                to="/form-builder" 
                className="text-whatsapp-green hover:text-whatsapp-dark-green font-medium text-sm hover:underline transition-colors"
              >
                Form Builder
              </Link>
              <span className="text-gray-300">•</span>
              <Link 
                to="/ai-agent" 
                className="text-whatsapp-green hover:text-whatsapp-dark-green font-medium text-sm hover:underline transition-colors"
              >
                AI Agent
              </Link>
              <span className="text-gray-300">•</span>
              <Link 
                to="/templates" 
                className="text-whatsapp-green hover:text-whatsapp-dark-green font-medium text-sm hover:underline transition-colors"
              >
                Templates
              </Link>
              <span className="text-gray-300">•</span>
              <Link 
                to="/contact" 
                className="text-whatsapp-green hover:text-whatsapp-dark-green font-medium text-sm hover:underline transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
