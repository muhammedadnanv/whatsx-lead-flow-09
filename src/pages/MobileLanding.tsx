import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Smartphone, MessageCircle, Zap, Users, Heart, CheckCircle, Star, Play, Globe, Clock, Gift, Calendar, BarChart3, Palette, Database, Shield, Webhook } from "lucide-react";
import { Link } from "react-router-dom";
import { VideoPopup } from "@/components/VideoPopup";
import Layout from "@/components/Layout";

const MobileLanding = () => {
  const videoUrl = "https://www.loom.com/share/c1f4cf1f5d5b4c4d9c5e745032b2a081?sid=666100aa-4de5-4d25-92fc-8f4605f7b862";

  return (
    <Layout 
      showFooter={false}
      seoTitle="Mobile WhatsApp Forms | WhatsX - Mobile-First Lead Generation"
      seoDescription="Create beautiful WhatsApp forms optimized for mobile devices. Touch-friendly interface, lightning-fast loading, and perfect mobile user experience. Free for 7 months!"
      seoKeywords="mobile WhatsApp forms, mobile lead generation, mobile-first design, touch-friendly forms, mobile optimization, WhatsApp mobile, responsive forms"
      seoImage="/lovable-uploads/be006f58-eee2-40fe-8e43-6cd2158678aa.png"
    >
      <div className="bg-gradient-to-br from-green-50 via-whatsapp-gray to-green-50">
        {/* Free Platform Banner */}
        <div className="bg-gradient-to-r from-whatsapp-green to-whatsapp-dark-green text-white py-2 px-4">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center space-x-1 text-xs sm:text-sm font-semibold">
              <Gift className="w-3 h-3 sm:w-4 sm:h-4 animate-bounce" />
              <span>🎉 FREE for 7 months - No login required!</span>
            </div>
          </div>
        </div>

        {/* Mobile Hero Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto text-center max-w-lg">
            <Badge className="mb-4 bg-whatsapp-light-green text-whatsapp-dark-green border-whatsapp-green text-xs">
              <Smartphone className="w-3 h-3 mr-1" />
              Mobile-First Design
            </Badge>
            
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-whatsapp-green via-whatsapp-dark-green to-green-600 bg-clip-text text-transparent leading-tight">
              WhatsApp Forms
              <br />
              Made for Mobile
            </h1>
            
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Create beautiful forms that work perfectly on phones. 
              Your visitors can fill and submit in seconds.
            </p>
            
            <div className="space-y-3 mb-6">
              <Link to="/form-builder" className="block">
                <Button size="lg" className="w-full bg-whatsapp-green hover:bg-whatsapp-dark-green text-base py-4">
                  <Zap className="w-4 h-4 mr-2" />
                  Create Your Form
                </Button>
              </Link>
              <VideoPopup 
                videoUrl={videoUrl}
                buttonText="Watch Demo (1 min)"
                buttonVariant="outline"
                buttonSize="lg"
                className="w-full border-2 border-whatsapp-green text-whatsapp-dark-green hover:bg-whatsapp-light-green py-4"
              />
            </div>

            {/* Mobile Stats */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-lg font-bold text-whatsapp-green">2 Min</div>
                <div className="text-gray-600 text-xs">Setup Time</div>
              </div>
              <div>
                <div className="text-lg font-bold text-whatsapp-dark-green">7 Months</div>
                <div className="text-gray-600 text-xs">Free Access</div>
              </div>
              <div>
                <div className="text-lg font-bold text-green-600">No Cards</div>
                <div className="text-gray-600 text-xs">Required</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Features Section */}
        <section className="py-8 px-4 bg-white/50">
          <div className="container mx-auto max-w-sm">
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold mb-3 text-gray-800">
                Perfect for Mobile
              </h2>
              <p className="text-sm text-gray-600">
                Every feature designed for touch screens
              </p>
            </div>

            <div className="space-y-4">
              <Card className="border border-green-100 bg-gradient-to-r from-white to-whatsapp-light-green/30">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-whatsapp-green rounded-lg flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-white" />
                    </div>
                    <CardTitle className="text-whatsapp-dark-green text-base">Touch-Friendly</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm">
                    Large buttons, smooth scrolling, and gesture support for the best mobile experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-green-100 bg-gradient-to-r from-white to-whatsapp-light-green/30">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-whatsapp-green rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <CardTitle className="text-whatsapp-dark-green text-base">Lightning Fast</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm">
                    Forms load instantly even on slow connections. Optimized for mobile networks.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-green-100 bg-gradient-to-r from-white to-whatsapp-light-green/30">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-whatsapp-green rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <CardTitle className="text-whatsapp-dark-green text-base">WhatsApp Ready</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm">
                    Direct integration with WhatsApp - the app your users already have and love.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-green-100 bg-gradient-to-r from-white to-whatsapp-light-green/30">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-whatsapp-green rounded-lg flex items-center justify-center">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                    <CardTitle className="text-whatsapp-dark-green text-base">User-Friendly</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm">
                    Simple, clean interface that anyone can use. No confusion, just results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mobile Use Cases */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-sm">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold mb-3 text-gray-800">
                Great for Any Business
              </h2>
              <p className="text-sm text-gray-600">
                Perfect for mobile-first businesses
              </p>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-lg border border-gray-100 p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-sm">🍕</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 text-sm">Food Delivery</div>
                    <div className="text-gray-600 text-xs">Quick order forms</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-100 p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">💄</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 text-sm">Beauty Services</div>
                    <div className="text-gray-600 text-xs">Appointment booking</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-100 p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-whatsapp-light-green rounded-full flex items-center justify-center">
                    <span className="text-whatsapp-dark-green text-sm">🚗</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 text-sm">Local Services</div>
                    <div className="text-gray-600 text-xs">Service requests</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-100 p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-whatsapp-light-green rounded-full flex items-center justify-center">
                    <span className="text-whatsapp-dark-green text-sm">🏋️</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 text-sm">Fitness & Health</div>
                    <div className="text-gray-600 text-xs">Member signups</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Features */}
        <section className="py-8 px-4 bg-gradient-to-r from-whatsapp-light-green to-green-50">
          <div className="container mx-auto max-w-sm">
            <div className="text-center mb-6">
              <Badge className="mb-3 bg-whatsapp-green text-white border-whatsapp-dark-green text-xs">
                <Clock className="w-3 h-3 mr-1" />
                Coming Soon
              </Badge>
              <h2 className="text-xl font-bold mb-3 text-gray-800">
                Exciting Features Ahead
              </h2>
              <p className="text-sm text-gray-600">
                Amazing new features launching soon
              </p>
            </div>

            <div className="space-y-3">
              <Card className="border border-green-100 bg-gradient-to-r from-white to-whatsapp-light-green/30 opacity-90">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-whatsapp-green rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-whatsapp-dark-green text-sm">Smart Scheduling</div>
                      <div className="text-gray-600 text-xs">Auto-book appointments via WhatsApp</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-green-100 bg-gradient-to-r from-white to-whatsapp-light-green/30 opacity-90">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-whatsapp-green rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-whatsapp-dark-green text-sm">Analytics Dashboard</div>
                      <div className="text-gray-600 text-xs">Track form performance & conversions</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-green-100 bg-gradient-to-r from-white to-whatsapp-light-green/30 opacity-90">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-whatsapp-green rounded-lg flex items-center justify-center">
                      <Palette className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-whatsapp-dark-green text-sm">Custom Themes</div>
                      <div className="text-gray-600 text-xs">Brand matching & advanced styling</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-green-100 bg-gradient-to-r from-white to-whatsapp-light-green/30 opacity-90">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-whatsapp-green rounded-lg flex items-center justify-center">
                      <Database className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-whatsapp-dark-green text-sm">CRM Integration</div>
                      <div className="text-gray-600 text-xs">Connect with Salesforce, HubSpot & more</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-green-100 bg-gradient-to-r from-white to-whatsapp-light-green/30 opacity-90">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-whatsapp-green rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-whatsapp-dark-green text-sm">Advanced Security</div>
                      <div className="text-gray-600 text-xs">2FA, encryption & compliance tools</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-green-100 bg-gradient-to-r from-white to-whatsapp-light-green/30 opacity-90">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-whatsapp-green rounded-lg flex items-center justify-center">
                      <Webhook className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-whatsapp-dark-green text-sm">Webhooks & API</div>
                      <div className="text-gray-600 text-xs">Developer tools & custom integrations</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 text-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                <p className="text-xs text-gray-600 mb-2">Be the first to know when these launch!</p>
                <Link to="/form-builder">
                  <Button size="sm" className="bg-whatsapp-green hover:bg-whatsapp-dark-green text-xs px-4">
                    <Star className="w-3 h-3 mr-1" />
                    Join Early Access
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile CTA Section */}
        <section className="py-8 px-4 bg-gradient-to-r from-whatsapp-green to-whatsapp-dark-green">
          <div className="container mx-auto text-center max-w-sm">
            <h2 className="text-xl font-bold text-white mb-3">
              Start in 2 Minutes
            </h2>
            <p className="text-green-100 mb-6 text-sm">
              Create your first mobile form right now - completely free for 7 months
            </p>
            
            <div className="space-y-3">
              <Link to="/form-builder" className="block">
                <Button size="lg" className="w-full bg-white text-whatsapp-green hover:bg-gray-100 text-base py-4">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Create Form Now
                </Button>
              </Link>
              <div className="flex items-center justify-center space-x-4 text-green-100 text-xs">
                <div className="flex items-center">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  No Credit Card
                </div>
                <div className="flex items-center">
                  <Star className="w-3 h-3 mr-1" />
                  7 Months Free
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Footer */}
        <footer className="bg-gray-900 text-white py-6 px-4">
          <div className="container mx-auto max-w-sm text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Smartphone className="w-4 h-4 text-whatsapp-green" />
              <span className="text-sm font-bold">WhatsX</span>
            </div>
            <p className="text-gray-400 text-xs mb-4">
              Mobile-first forms for modern businesses
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <Link to="/help-center" className="text-gray-400 hover:text-white block">Help</Link>
                <Link to="/contact" className="text-gray-400 hover:text-white block">Contact</Link>
              </div>
              <div>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white block">Privacy</Link>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white block">Terms</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default MobileLanding;
