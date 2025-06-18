
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Palette, MousePointer, Layers, Smartphone, Code, Zap, CheckCircle, Star, Eye, Download, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { VideoPopup } from "@/components/VideoPopup";

const BuilderLanding = () => {
  const videoUrl = "https://www.loom.com/share/c1f4cf1f5d5b4c4d9c5e745032b2a081?sid=666100aa-4de5-4d25-92fc-8f4605f7b862";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto mobile-px py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                WhatsX Builder
              </span>
            </Link>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link to="/form-builder">
                <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-sm sm:text-base">
                  <Palette className="w-4 h-4 mr-1 sm:mr-2" />
                  Start Building
                  <ArrowRight className="w-4 h-4 ml-1 sm:ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 mobile-px">
        <div className="container mx-auto text-center max-w-5xl">
          <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 border-green-200 text-sm">
            <MousePointer className="w-3 h-3 mr-1" />
            Drag & Drop Builder
          </Badge>
          
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-teal-800 bg-clip-text text-transparent leading-tight">
            Build Forms Visually
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">No Code Required</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed mobile-text">
            Create stunning, responsive forms with our intuitive drag-and-drop builder. 
            Customize every detail, preview in real-time, and deploy instantly.
          </p>
          
          <div className="button-group flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
            <Link to="/form-builder" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                <Palette className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Open Builder
              </Button>
            </Link>
            <VideoPopup 
              videoUrl={videoUrl}
              buttonText="Watch Builder Demo"
              buttonVariant="outline"
              buttonSize="lg"
              className="group relative border-2 border-green-200 text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 hover:border-blue-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 transition-all duration-300 hover:shadow-lg hover:scale-105"
            />
          </div>

          {/* Builder Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">5 Min</div>
              <div className="text-gray-600 text-sm">Average Build Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600 text-sm">Form Elements</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-teal-600">100%</div>
              <div className="text-gray-600 text-sm">Mobile Responsive</div>
            </div>
          </div>
        </div>
      </section>

      {/* Builder Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 mobile-px bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
              Powerful Visual Builder
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mobile-text">
              Everything you need to create professional forms without touching a line of code
            </p>
          </div>

          <div className="card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-200 bg-gradient-to-br from-white to-green-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MousePointer className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-green-900 text-lg sm:text-xl">Drag & Drop Interface</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  Simply drag form elements from the sidebar and drop them where you want. Rearrange, resize, and customize with ease.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 bg-gradient-to-br from-white to-blue-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Eye className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-blue-900 text-lg sm:text-xl">Live Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  See your form come to life as you build. Real-time preview shows exactly how your form will look to users.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-teal-200 bg-gradient-to-br from-white to-teal-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Palette className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-teal-900 text-lg sm:text-xl">Style Customization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  Full control over colors, fonts, spacing, borders, and animations. Make it match your brand perfectly.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 bg-gradient-to-br from-white to-purple-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Layers className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-purple-900 text-lg sm:text-xl">Rich Form Elements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  Text fields, dropdowns, checkboxes, radio buttons, file uploads, date pickers, and many more elements.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 bg-gradient-to-br from-white to-orange-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-orange-900 text-lg sm:text-xl">Responsive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  Forms automatically adapt to any screen size. Preview on mobile, tablet, and desktop views instantly.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-indigo-200 bg-gradient-to-br from-white to-indigo-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-indigo-900 text-lg sm:text-xl">Export Code</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  Get clean, production-ready HTML, CSS, and JavaScript. Host anywhere or integrate into existing sites.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 mobile-px bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Start Building Your Forms Today
          </h2>
          <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto mobile-text">
            No technical skills required. Create professional forms in minutes.
          </p>
          
          <div className="button-group flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/form-builder" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-green-600 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                <Palette className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Open Form Builder
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuilderLanding;
