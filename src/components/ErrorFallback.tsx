
import React from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
}

const ErrorFallback = ({ error, resetError }: ErrorFallbackProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="text-center max-w-2xl px-6">
        <AlertTriangle className="w-24 h-24 text-red-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong</h1>
        <p className="text-xl text-gray-600 mb-6">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-8 text-left">
          <h3 className="font-semibold text-gray-900 mb-2">Error Details:</h3>
          <pre className="text-sm text-red-600 overflow-auto">
            {error.message}
          </pre>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={resetError}
            className="bg-whatsapp-green hover:bg-whatsapp-dark-green flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </Button>
          <Link to="/">
            <Button 
              variant="outline" 
              className="flex items-center gap-2 border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-light-green/50"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;
