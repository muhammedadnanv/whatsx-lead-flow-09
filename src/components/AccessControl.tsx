
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, Shield, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface AccessControlProps {
  children: React.ReactNode;
  requiredAccess: "premium" | "admin" | "integrations";
  title?: string;
  description?: string;
}

const AccessControl = ({ 
  children, 
  requiredAccess, 
  title = "Premium Feature",
  description = "This feature requires premium access." 
}: AccessControlProps) => {
  // For now, we'll simulate access control - in a real app this would check user permissions
  const hasAccess = false; // This would be determined by user authentication/subscription status

  if (hasAccess) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-whatsapp-light-green/30 via-white to-whatsapp-light-green/30 flex items-center justify-center p-4">
      <Card className="max-w-md w-full border-2 border-whatsapp-green/20">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-whatsapp-light-green rounded-full flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-whatsapp-dark-green" />
          </div>
          <CardTitle className="text-2xl text-whatsapp-dark-green">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-600">{description}</p>
          
          <div className="bg-whatsapp-light-green/30 rounded-lg p-4">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Shield className="w-5 h-5 text-whatsapp-green" />
              <span className="font-semibold text-whatsapp-dark-green">Access Required</span>
            </div>
            <p className="text-sm text-gray-700">
              Contact our team to get access to advanced integrations and enterprise features.
            </p>
          </div>

          <div className="space-y-3">
            <Link to="/contact" className="block">
              <Button className="w-full bg-whatsapp-green hover:bg-whatsapp-dark-green">
                <MessageCircle className="w-4 h-4 mr-2" />
                Request Access
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="w-full border-whatsapp-green text-whatsapp-dark-green hover:bg-whatsapp-light-green/50">
                Back to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccessControl;
