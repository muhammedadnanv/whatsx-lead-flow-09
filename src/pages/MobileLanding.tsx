import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Smartphone, MessageCircle, Zap, Users, Heart, CheckCircle, Star, Play, Globe, Clock, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { VideoPopup } from "@/components/VideoPopup";

const MobileLanding = () => {
  const videoUrl = "https://www.loom.com/share/c1f4cf1f5d5b4c4d9c5e745032b2a081?sid=666100aa-4de5-4d25-92fc-8f4605f7b862";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Mobile-Optimized Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Smartphone className="w-6 h-6 text-pink-600" />
              <span className="text-lg font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                WhatsX
              </span>
            </Link>
            <Link to="/form-builder">
              <Button size="sm" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-sm px-4">
                Start Free
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Free Platform Banner */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-4">
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
          <Badge className="mb-4 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border-pink-200 text-xs">
            <Smartphone className="w-3 h-3 mr-1" />
            Mobile-First Design
          </Badge>
          
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
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
              <Button size="lg" className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-base py-4">
                <Zap className="w-4 h-4 mr-2" />
                Create Your Form
              </Button>
            </Link>
            <VideoPopup 
              videoUrl={videoUrl}
              buttonText="Watch Demo (1 min)"
              buttonVariant="outline"
              buttonSize="lg"
              className="w-full border-2 border-pink-200 text-pink-700 hover:bg-pink-50 py-4"
            />
          </div>

          {/* Mobile Stats */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-lg font-bold text-pink-600">2 Min</div>
              <div className="text-gray-600 text-xs">Setup Time</div>
            </div>
            <div>
              <div className="text-lg font-bold text-purple-600">7 Months</div>
              <div className="text-gray-600 text-xs">Free Access</div>
            </div>
            <div>
              <div className="text-lg font-bold text-blue-600">No Cards</div>
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
            <Card className="border border-pink-100 bg-gradient-to-r from-white to-pink-50/30">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-4 h-4 text-white" />
                  </div>
                  <CardTitle className="text-pink-900 text-base">Touch-Friendly</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm">
                  Large buttons, smooth scrolling, and gesture support for the best mobile experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-purple-100 bg-gradient-to-r from-white to-purple-50/30">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <CardTitle className="text-purple-900 text-base">Lightning Fast</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm">
                  Forms load instantly even on slow connections. Optimized for mobile networks.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-blue-100 bg-gradient-to-r from-white to-blue-50/30">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <CardTitle className="text-blue-900 text-base">WhatsApp Ready</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm">
                  Direct integration with WhatsApp - the app your users already have and love.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-green-100 bg-gradient-to-r from-white to-green-50/30">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <CardTitle className="text-green-900 text-base">User-Friendly</CardTitle>
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
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">🚗</span>
                </div>
                <div>
                  <div className="font-medium text-gray-800 text-sm">Local Services</div>
                  <div className="text-gray-600 text-xs">Service requests</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-100 p-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-sm">🏋️</span>
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

      {/* Mobile CTA Section */}
      <section className="py-8 px-4 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="container mx-auto text-center max-w-sm">
          <h2 className="text-xl font-bold text-white mb-3">
            Start in 2 Minutes
          </h2>
          <p className="text-pink-100 mb-6 text-sm">
            Create your first mobile form right now - completely free for 7 months
          </p>
          
          <div className="space-y-3">
            <Link to="/form-builder" className="block">
              <Button size="lg" className="w-full bg-white text-pink-600 hover:bg-gray-100 text-base py-4">
                <Smartphone className="w-4 h-4 mr-2" />
                Create Form Now
              </Button>
            </Link>
            <div className="flex items-center justify-center space-x-4 text-pink-100 text-xs">
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
            <Smartphone className="w-4 h-4 text-pink-400" />
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
  );
};

export default MobileLanding;
