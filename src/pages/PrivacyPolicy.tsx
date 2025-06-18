
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Privacy Policy</h1>
        
        <Card className="shadow-lg">
          <CardContent className="p-8 space-y-6">
            <div>
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <p className="text-gray-700 mb-6">
                WhatsX ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Information We Collect</h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>Personal Information:</strong> When you create forms or use our service, we may collect personal information such as your name, email address, and contact details.</p>
                <p><strong>Form Data:</strong> We collect the data submitted through forms created using our platform to facilitate delivery to your specified WhatsApp number.</p>
                <p><strong>Usage Data:</strong> We automatically collect information about how you interact with our service, including IP addresses, browser type, and usage patterns.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>To provide and maintain our service</li>
                <li>To process and deliver form submissions to your WhatsApp</li>
                <li>To communicate with you about your account and our services</li>
                <li>To improve and optimize our platform</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Information Sharing</h2>
              <p className="text-gray-700">
                We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy. We may share information with trusted service providers who assist us in operating our platform, subject to confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Your Rights</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at support@whatsx.com.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
