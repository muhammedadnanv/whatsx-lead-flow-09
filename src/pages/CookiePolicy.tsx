
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Cookie Policy</h1>
        
        <Card className="shadow-lg">
          <CardContent className="p-8 space-y-6">
            <div>
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <p className="text-gray-700 mb-6">
                This Cookie Policy explains how WhatsX ("we," "our," or "us") uses cookies and similar technologies when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. What Are Cookies</h2>
              <p className="text-gray-700">
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. They help the website remember information about your visit, which can make it easier to visit the site again and make the site more useful to you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. How We Use Cookies</h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</p>
                <p><strong>Analytics Cookies:</strong> We use these cookies to understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                <p><strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization, such as remembering your preferences.</p>
                <p><strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites to display relevant and engaging advertisements.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Types of Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3 text-left">Cookie Type</th>
                      <th className="border border-gray-300 p-3 text-left">Purpose</th>
                      <th className="border border-gray-300 p-3 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="border border-gray-300 p-3">Session Cookies</td>
                      <td className="border border-gray-300 p-3">Maintain your session and preferences during your visit</td>
                      <td className="border border-gray-300 p-3">Until browser is closed</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Persistent Cookies</td>
                      <td className="border border-gray-300 p-3">Remember your preferences for future visits</td>
                      <td className="border border-gray-300 p-3">Up to 2 years</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Analytics Cookies</td>
                      <td className="border border-gray-300 p-3">Help us understand website usage and performance</td>
                      <td className="border border-gray-300 p-3">Up to 2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Third-Party Cookies</h2>
              <p className="text-gray-700">
                We may also use third-party services that place cookies on your device. These include analytics services like Google Analytics, which help us understand how our website is being used.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Managing Cookies</h2>
              <div className="space-y-4 text-gray-700">
                <p>You can control and manage cookies in several ways:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Browser Settings: Most browsers allow you to refuse or accept cookies</li>
                  <li>Cookie Preferences: Use our cookie preference center when available</li>
                  <li>Opt-out Tools: Use third-party opt-out tools for marketing cookies</li>
                  <li>Delete Cookies: Clear existing cookies from your browser</li>
                </ul>
                <p className="mt-4">
                  Please note that disabling certain cookies may affect the functionality of our website.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Updates to This Policy</h2>
              <p className="text-gray-700">
                We may update this Cookie Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Cookie Policy, please contact us at privacy@whatsx.com.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CookiePolicy;
