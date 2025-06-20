
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const suggestedPages = [
    { name: "Form Builder", path: "/form-builder", description: "Create powerful WhatsApp forms" },
    { name: "AI Agent", path: "/ai-agent", description: "Build intelligent chat agents" },
    { name: "Templates", path: "/templates", description: "Browse pre-built templates" },
    { name: "Documentation", path: "/documentation", description: "Learn how to use WhatsX" },
  ];

  return (
    <Layout showFooter={false}>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-whatsapp-light-green/20 via-white to-whatsapp-green/10">
        <div className="text-center max-w-2xl px-6">
          <div className="mb-8">
            <AlertTriangle className="w-24 h-24 text-whatsapp-green mx-auto mb-4" />
            <div className="text-8xl font-bold text-whatsapp-green mb-4">404</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-8">
              <p className="text-sm text-gray-500">
                <strong>Requested URL:</strong> {location.pathname}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/">
              <Button className="bg-whatsapp-green hover:bg-whatsapp-dark-green flex items-center gap-2 px-6 py-3">
                <Home className="w-5 h-5" />
                Go Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-6 py-3 border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-light-green/50"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </Button>
          </div>

          {/* Suggested Pages */}
          <div className="text-left">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Maybe you're looking for one of these?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suggestedPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="block p-4 border border-gray-200 rounded-lg hover:border-whatsapp-green hover:bg-whatsapp-light-green/20 transition-all duration-200 group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-whatsapp-dark-green mb-1">
                    {page.name}
                  </h3>
                  <p className="text-sm text-gray-600">{page.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="mt-12 p-6 bg-whatsapp-light-green/30 rounded-lg">
            <Search className="w-8 h-8 text-whatsapp-green mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Still can't find what you need?</h3>
            <p className="text-gray-600 mb-4">
              Try searching our documentation or contact our support team for help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/documentation">
                <Button variant="outline" className="border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-light-green/50">
                  Browse Documentation
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-light-green/50">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
