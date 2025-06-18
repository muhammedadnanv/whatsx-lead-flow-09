
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, Sparkles, MessageCircle, Zap, Brain, Users, CheckCircle, Star, Globe, Smartphone, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { VideoPopup } from "@/components/VideoPopup";

const AILanding = () => {
  const videoUrl = "https://www.loom.com/share/c1f4cf1f5d5b4c4d9c5e745032b2a081?sid=666100aa-4de5-4d25-92fc-8f4605f7b862";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto mobile-px py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                WhatsX AI
              </span>
            </Link>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link to="/ai-agent">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-sm sm:text-base">
                  <Bot className="w-4 h-4 mr-1 sm:mr-2" />
                  Try AI Agent
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
          <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200 text-sm">
            <Bot className="w-3 h-3 mr-1" />
            Powered by Google Gemini AI
          </Badge>
          
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-800 bg-clip-text text-transparent leading-tight">
            AI That Converts
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Website Visitors Into Leads</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed mobile-text">
            Deploy intelligent AI agents that engage visitors, help them fill forms, answer questions instantly, 
            and convert them into WhatsApp leads automatically.
          </p>
          
          <div className="button-group flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
            <Link to="/ai-agent" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                <Bot className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Start AI Agent
              </Button>
            </Link>
            <VideoPopup 
              videoUrl={videoUrl}
              buttonText="Watch AI Demo"
              buttonVariant="outline"
              buttonSize="lg"
              className="group relative border-2 border-purple-200 text-purple-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:border-blue-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 transition-all duration-300 hover:shadow-lg hover:scale-105"
            />
          </div>

          {/* AI Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600">87%</div>
              <div className="text-gray-600 text-sm">Higher Conversion</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600 text-sm">AI Availability</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600">3x</div>
              <div className="text-gray-600 text-sm">More Leads</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 mobile-px bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
              Revolutionary AI Features
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mobile-text">
              Our AI doesn't just collect data - it intelligently engages, assists, and converts your visitors
            </p>
          </div>

          <div className="card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 bg-gradient-to-br from-white to-purple-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-purple-900 text-lg sm:text-xl">Smart Conversations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  AI understands context and provides relevant responses. Handles complex queries and guides users through your forms naturally.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 bg-gradient-to-br from-white to-blue-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-blue-900 text-lg sm:text-xl">Lead Qualification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  Automatically qualifies leads based on their responses. Only high-quality prospects reach your WhatsApp.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-indigo-200 bg-gradient-to-br from-white to-indigo-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-indigo-900 text-lg sm:text-xl">Instant Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  Zero wait time for visitors. AI responds immediately to queries, keeping engagement high and bounce rates low.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200 bg-gradient-to-br from-white to-emerald-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-emerald-900 text-lg sm:text-xl">WhatsApp Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  Seamlessly transfers qualified conversations to WhatsApp with full context and lead information.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 bg-gradient-to-br from-white to-orange-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-orange-900 text-lg sm:text-xl">Multi-Language</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  Supports 100+ languages automatically. Your AI speaks your customers' language fluently.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-pink-200 bg-gradient-to-br from-white to-pink-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-pink-900 text-lg sm:text-xl">Learning AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  Gets smarter over time. Learns from interactions to provide better responses and higher conversion rates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 mobile-px bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Deploy Your AI Agent?
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto mobile-text">
            Start converting visitors into leads with AI-powered conversations
          </p>
          
          <div className="button-group flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/ai-agent" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-purple-600 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                <Bot className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Deploy AI Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AILanding;
