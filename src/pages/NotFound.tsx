
import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search, AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const suggestedPages = [
    { 
      name: "Form Builder", 
      path: "/form-builder", 
      description: "Create powerful WhatsApp forms",
      color: "from-blue-500 to-blue-600"
    },
    { 
      name: "AI Agent", 
      path: "/ai-agent", 
      description: "Build intelligent chat agents",
      color: "from-purple-500 to-purple-600"
    },
    { 
      name: "Templates", 
      path: "/templates", 
      description: "Browse pre-built templates",
      color: "from-green-500 to-green-600"
    },
    { 
      name: "Documentation", 
      path: "/documentation", 
      description: "Learn how to use WhatsX",
      color: "from-orange-500 to-orange-600"
    },
  ];

  return (
    <Layout 
      showFooter={false}
      seoTitle="Page Not Found - WhatsX | 404 Error"
      seoDescription="The page you're looking for doesn't exist. Navigate back to WhatsX or explore our available features."
    >
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-whatsapp-light-green/20 via-white to-whatsapp-green/10 responsive-padding">
        <div className="text-center max-w-4xl w-full px-4 sm:px-6 lg:px-8">
          {/* Error Icon and Code */}
          <div className="mb-8 sm:mb-12">
            <div className="relative inline-block">
              <AlertTriangle className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-whatsapp-green mx-auto mb-4 animate-bounce" />
              <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm font-bold">!</span>
              </div>
            </div>
            
            <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-whatsapp-green mb-4 animate-pulse">
              404
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              The page you're looking for seems to have vanished into the digital void. 
              Don't worry, we'll help you find your way back!
            </p>
            
            {/* URL Display */}
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 border border-gray-200">
              <p className="text-sm sm:text-base text-gray-500 break-all">
                <strong>Requested URL:</strong> {window.location.origin}{location.pathname}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 max-w-md mx-auto">
            <Link to="/" className="flex-1">
              <Button className="w-full bg-whatsapp-green hover:bg-whatsapp-dark-green text-white flex items-center justify-center gap-2 px-6 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus-visible:focus-visible">
                <Home className="w-5 h-5" />
                Go Home
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              onClick={handleGoBack}
              className="flex-1 w-full flex items-center justify-center gap-2 px-6 py-3 sm:py-4 text-base sm:text-lg border-2 border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-light-green/50 font-semibold transition-all duration-300 transform hover:scale-105 focus-visible:focus-visible"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </Button>
            
            <Button 
              variant="ghost" 
              onClick={handleRefresh}
              className="sm:hidden w-full flex items-center justify-center gap-2 px-6 py-3 text-base text-gray-600 hover:text-whatsapp-green hover:bg-whatsapp-light-green/30 font-semibold transition-all duration-300 focus-visible:focus-visible"
            >
              <RefreshCw className="w-5 h-5" />
              Refresh Page
            </Button>
          </div>

          {/* Suggested Pages */}
          <div className="text-left max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8 text-center">
              Maybe you're looking for one of these?
            </h2>
            
            <div className="responsive-grid">
              {suggestedPages.map((page, index) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="group block p-4 sm:p-6 border-2 border-gray-200 rounded-xl hover:border-whatsapp-green hover:bg-whatsapp-light-green/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus-visible:focus-visible"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${page.color} rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-white rounded opacity-80"></div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-whatsapp-dark-green mb-2 transition-colors duration-300">
                    {page.name}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {page.description}
                  </p>
                  
                  <div className="mt-3 text-sm font-medium text-whatsapp-green group-hover:text-whatsapp-dark-green opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center">
                    Explore <ArrowLeft className="w-4 h-4 ml-1 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-whatsapp-light-green/30 rounded-xl border border-whatsapp-green/20 max-w-2xl mx-auto">
            <Search className="w-8 h-8 sm:w-10 sm:h-10 text-whatsapp-green mx-auto mb-4" />
            
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              Still can't find what you're looking for?
            </h3>
            
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Try searching our comprehensive documentation or reach out to our support team. 
              We're here to help you succeed with WhatsX!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <Link to="/documentation" className="flex-1">
                <Button variant="outline" className="w-full border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-light-green/50 font-semibold transition-all duration-300 focus-visible:focus-visible">
                  Browse Documentation
                </Button>
              </Link>
              
              <Link to="/contact" className="flex-1">
                <Button variant="outline" className="w-full border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-light-green/50 font-semibold transition-all duration-300 focus-visible:focus-visible">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>

          {/* Additional Help */}
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-xs sm:text-sm text-gray-500 mb-4">
              Error Code: 404 | Time: {new Date().toLocaleString()}
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm text-gray-400">
              <span>💡 Tip: Check your URL for typos</span>
              <span>•</span>
              <span>🔄 Try refreshing the page</span>
              <span>•</span>
              <span>📧 Report broken links</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
