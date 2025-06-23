
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, CreditCard, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface PremiumGuardProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  featureName?: string;
}

const PremiumGuard = ({ 
  children, 
  title = "Premium Feature",
  description = "This feature requires premium access.",
  featureName = "this feature"
}: PremiumGuardProps) => {
  const hasPremiumAccess = () => {
    return localStorage.getItem('whatsxAccessGranted') === 'true';
  };

  if (hasPremiumAccess()) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full border-2 border-purple-200 shadow-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-purple-900">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-600">{description}</p>
          
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-purple-900">Premium Access Required</span>
            </div>
            <p className="text-sm text-gray-700">
              Get instant access to {featureName} and all premium features for just ₹29.
            </p>
          </div>

          <div className="space-y-3">
            <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg py-6">
              <Link to="/pricing" className="flex items-center justify-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Unlock for ₹29
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="w-full border-purple-200 text-purple-700 hover:bg-purple-50">
              <Link to="/">
                Back to Home
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PremiumGuard;
