
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building, TrendingUp, Shield, Users, BarChart3, Zap, CheckCircle, Star, Globe, MessageCircle, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { VideoPopup } from "@/components/VideoPopup";

const BusinessLanding = () => {
  const videoUrl = "https://www.loom.com/share/c1f4cf1f5d5b4c4d9c5e745032b2a081?sid=666100aa-4de5-4d25-92fc-8f4605f7b862";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-slate-100 sticky top-0 z-50">
        <div className="container mx-auto mobile-px py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Building className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600" />
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
                WhatsX Business
              </span>
            </Link>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link to="/contact">
                <Button variant="ghost" className="text-slate-600 hover:text-slate-800 text-sm sm:text-base">
                  Contact Sales
                </Button>
              </Link>
              <Link to="/form-builder">
                <Button className="bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700 text-sm sm:text-base">
                  <Building className="w-4 h-4 mr-1 sm:mr-2" />
                  Start Free Trial
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
          <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-slate-100 to-blue-100 text-slate-700 border-slate-200 text-sm">
            <Building className="w-3 h-3 mr-1" />
            Enterprise-Grade Solution
          </Badge>
          
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-800 bg-clip-text text-transparent leading-tight">
            Scale Your Business
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">With Smart Lead Generation</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed mobile-text">
            Transform your website into a lead generation powerhouse. Capture, qualify, and convert visitors 
            with enterprise-grade forms and AI automation that scales with your business.
          </p>
          
          <div className="button-group flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
            <Link to="/form-builder" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Start Free Trial
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto group relative border-2 border-slate-200 text-slate-700 hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 hover:border-blue-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Users className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Talk to Sales
              </Button>
            </Link>
          </div>

          {/* Business Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-slate-600">500%</div>
              <div className="text-gray-600 text-sm">ROI Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">10k+</div>
              <div className="text-gray-600 text-sm">Businesses Trust Us</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600">99.9%</div>
              <div className="text-gray-600 text-sm">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 mobile-px bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
              Enterprise Features That Drive Results
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mobile-text">
              Built for businesses that need reliability, scalability, and measurable ROI
            </p>
          </div>

          <div className="card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-slate-200 bg-gradient-to-br from-white to-slate-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-slate-900 text-lg sm:text-xl">Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  Comprehensive dashboards with conversion tracking, lead scoring, and ROI metrics. Make data-driven decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 bg-gradient-to-br from-white to-blue-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-blue-900 text-lg sm:text-xl">Lead Qualification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  Automatically score and qualify leads based on custom criteria. Focus your sales team on high-value prospects.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-indigo-200 bg-gradient-to-br from-white to-indigo-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-indigo-900 text-lg sm:text-xl">Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  SOC 2 compliant, GDPR ready, with enterprise-grade encryption and security protocols your business demands.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200 bg-gradient-to-br from-white to-emerald-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-emerald-900 text-lg sm:text-xl">CRM Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  Seamlessly integrate with Salesforce, HubSpot, Pipedrive, and 100+ business tools your team already uses.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 bg-gradient-to-br from-white to-orange-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-orange-900 text-lg sm:text-xl">Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  Multi-user access with role-based permissions. Collaborate across marketing, sales, and development teams.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 bg-gradient-to-br from-white to-purple-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-purple-900 text-lg sm:text-xl">Global Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  99.9% uptime SLA, global CDN, unlimited forms and submissions. Built to handle enterprise traffic.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 mobile-px bg-gradient-to-r from-slate-600 to-blue-600">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Scale Your Lead Generation?
          </h2>
          <p className="text-lg sm:text-xl text-slate-100 mb-6 sm:mb-8 max-w-2xl mx-auto mobile-text">
            Join thousands of businesses already growing with WhatsX
          </p>
          
          <div className="button-group flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/form-builder" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-slate-600 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Start Free Trial
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
              >
                <Users className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessLanding;
