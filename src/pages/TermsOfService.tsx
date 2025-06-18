
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              WhatsX
            </span>
          </Link>
          
          <Link to="/">
            <Button variant="ghost" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Terms of Service</h1>
        
        <Card className="shadow-lg">
          <CardContent className="p-8 space-y-6">
            <div>
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <p className="text-gray-700 mb-6">
                These Terms of Service ("Terms") govern your use of WhatsX's services. By accessing or using our service, you agree to be bound by these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using WhatsX, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Description of Service</h2>
              <p className="text-gray-700">
                WhatsX provides a platform for creating form popups that capture leads and deliver them to WhatsApp. Our service includes form building tools, customization options, and integration capabilities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. User Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You agree to use the service only for lawful purposes</li>
                <li>You will not attempt to gain unauthorized access to our systems</li>
                <li>You are responsible for all content and data processed through your forms</li>
                <li>You must comply with applicable data protection laws</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Prohibited Uses</h2>
              <p className="text-gray-700 mb-3">You may not use our service:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>For any unlawful purpose or to solicit others to unlawful acts</li>
                <li>To violate any international, federal, provincial or state regulations, rules, laws, or local ordinances</li>
                <li>To transmit or procure the sending of any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Service Availability</h2>
              <p className="text-gray-700">
                We strive to maintain high service availability but do not guarantee uninterrupted access. We reserve the right to modify or discontinue the service with or without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Limitation of Liability</h2>
              <p className="text-gray-700">
                WhatsX shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to update these Terms at any time. We will notify users of significant changes via email or through our platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Contact Information</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms, please contact us at legal@whatsx.com.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;
