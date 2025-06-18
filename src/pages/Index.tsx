import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Palette, Code, MessageCircle, Smartphone, Globe, Bot, Sparkles, CheckCircle, Star, Users, Building, ShoppingCart, Briefcase, Heart, UserCheck, Monitor, Layers, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { VideoPopup } from "@/components/VideoPopup";

const Index = () => {
  const videoUrl = "https://www.loom.com/share/c1f4cf1f5d5b4c4d9c5e745032b2a081?sid=666100aa-4de5-4d25-92fc-8f4605f7b862";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto mobile-px py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                WhatsX
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <VideoPopup 
                videoUrl={videoUrl}
                buttonText="Watch Demo"
                buttonVariant="ghost"
                buttonSize="sm"
                className="text-blue-600 hover:text-blue-800 hidden sm:flex"
              />
              <Link to="/ai-agent">
                <Button variant="ghost" className="text-blue-600 hover:text-blue-800 text-sm sm:text-base p-2 sm:p-3">
                  <Bot className="w-4 h-4 mr-1 sm:mr-2" />
                  <span className="hidden xs:inline">AI Agent</span>
                </Button>
              </Link>
              <Link to="/form-builder">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base">
                  <span className="hidden xs:inline">Get Started</span>
                  <span className="xs:hidden">Start</span>
                  <ArrowRight className="w-4 h-4 ml-1 sm:ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 mobile-px">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200 text-sm">
            <Sparkles className="w-3 h-3 mr-1" />
            AI-Powered Form Builder
          </Badge>
          
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            Create WhatsApp Forms
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">in Minutes</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed mobile-text">
            Build beautiful, responsive forms that send responses directly to WhatsApp. 
            No coding required - just drag, drop, and deploy with AI assistance.
          </p>
          
          <div className="button-group flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
            <Link to="/form-builder" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                <Zap className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Start Building
              </Button>
            </Link>
            <Link to="/ai-agent" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto group relative border-2 border-blue-200 text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-purple-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                <Bot className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent group-hover:from-blue-800 group-hover:to-purple-800">
                  Try AI Agent
                </span>
                <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-purple-600" />
              </Button>
            </Link>
          </div>

          {/* Video Demo Button */}
          <div className="mb-8 sm:mb-12">
            <VideoPopup 
              videoUrl={videoUrl}
              buttonText="Watch How It Works"
              buttonVariant="outline"
              buttonSize="lg"
              className="group relative border-2 border-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 hover:border-blue-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 transition-all duration-300 hover:shadow-lg hover:scale-105"
            />
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-500 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
              No Credit Card Required
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1 text-yellow-500" />
              Free Forever
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-1 text-blue-500" />
              Instant Setup
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 mobile-px bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
              Everything You Need to Create Amazing Forms
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mobile-text mb-6">
              Powerful features designed to make form building simple, fast, and effective
            </p>
            <VideoPopup 
              videoUrl={videoUrl}
              buttonText="See It In Action"
              buttonVariant="outline"
              className="border-blue-200 text-blue-700 hover:bg-blue-50"
            />
          </div>

          <div className="card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Form Builder */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 bg-gradient-to-br from-white to-blue-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-blue-900 text-lg sm:text-xl">Visual Form Builder</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  Drag and drop interface to create forms in minutes. Add text fields, dropdowns, checkboxes, and more with zero coding.
                </p>
              </CardContent>
            </Card>

            {/* AI Agent */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 bg-gradient-to-br from-white to-purple-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Bot className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-purple-900 text-lg sm:text-xl">AI-Powered Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  Intelligent chat support powered by Google Gemini. Help users fill forms and answer questions automatically.
                </p>
              </CardContent>
            </Card>

            {/* Styling */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-200 bg-gradient-to-br from-white to-green-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Palette className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-green-900 text-lg sm:text-xl">Custom Styling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  Customize colors, fonts, spacing, and more. Match your brand perfectly with our intuitive style editor.
                </p>
              </CardContent>
            </Card>

            {/* WhatsApp Integration */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200 bg-gradient-to-br from-white to-emerald-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-emerald-900 text-lg sm:text-xl">WhatsApp Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  Form submissions are sent directly to your WhatsApp. No email setup, no complex integrations required.
                </p>
              </CardContent>
            </Card>

            {/* Mobile Responsive */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 bg-gradient-to-br from-white to-orange-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-orange-900 text-lg sm:text-xl">Mobile Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  All forms are automatically mobile-responsive. Your users get a perfect experience on any device.
                </p>
              </CardContent>
            </Card>

            {/* Code Generation */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-indigo-200 bg-gradient-to-br from-white to-indigo-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-indigo-900 text-lg sm:text-xl">Export Code</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base mobile-text">
                  Get clean HTML, CSS, and JavaScript code. Host anywhere or integrate into your existing website.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Can Benefit Section */}
      <section className="py-12 sm:py-16 lg:py-20 mobile-px bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
              Who Can Benefit?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mobile-text">
              Our widgets are designed to help a wide range of website owners enhance their online presence.
            </p>
          </div>

          <div className="card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 bg-gradient-to-br from-white to-purple-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-purple-900">E-commerce Stores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Boost sales with interactive product forms, customer feedback widgets, and seamless WhatsApp integration for order inquiries.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 bg-gradient-to-br from-white to-blue-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-blue-900">Service Providers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Capture leads efficiently with consultation booking forms, quote requests, and instant customer communication via WhatsApp.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-200 bg-gradient-to-br from-white to-green-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-green-900">Small Businesses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Streamline customer interactions with contact forms, feedback collection, and direct WhatsApp communication for better customer service.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 bg-gradient-to-br from-white to-orange-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-orange-900">Content Creators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Engage your audience with interactive forms, newsletter signups, and direct fan communication through WhatsApp integration.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-pink-200 bg-gradient-to-br from-white to-pink-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-pink-900">Non-Profits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Increase donations and volunteer signups with compelling forms and instant communication channels for community engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-indigo-200 bg-gradient-to-br from-white to-indigo-50/30">
              <CardHeader>
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-indigo-900">Freelancers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Win more clients with professional contact forms, project inquiry widgets, and seamless WhatsApp communication for quick responses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Works Anywhere Section */}
      <section className="py-12 sm:py-16 lg:py-20 mobile-px bg-white/70">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Layers className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
              Works Anywhere
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 mobile-text">
              Our widgets and embeds work with any website platform. Simply copy the code and paste it anywhere.
            </p>
          </div>

          <div className="badge-list flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            {[
              'Shopify', 'Webflow', 'Framer', 'Squarespace', 'Wix',
              'WordPress', 'Elementor', 'WooCommerce', 'HTML', 'Weebly',
              'Joomla', 'Blogger', 'Drupal', 'Magento', 'BigCommerce',
              'Ghost', 'Gatsby', 'Next.js', 'React', 'Vue.js',
              'Angular', 'Svelte', 'Nuxt.js', 'Astro', 'Hugo',
              'Jekyll', 'Eleventy', 'Gridsome', 'Sapper', 'Remix',
              'SvelteKit', 'Vite', 'Parcel', 'Webpack', 'Rollup',
              'Bubble', 'Notion', 'Carrd', 'Linktree', 'Beehiiv',
              'ConvertKit', 'Mailchimp', 'Substack', 'Medium', 'Dev.to',
              'Hashnode', 'Gumroad', 'Teachable', 'Thinkific', 'Kajabi',
              'ClickFunnels', 'Leadpages', 'Unbounce', 'Instapage', 'GetResponse',
              'ActiveCampaign', 'HubSpot', 'Salesforce', 'Pipedrive', 'Zoho',
              'Monday.com', 'Airtable', 'Typeform', 'JotForm', 'Google Forms',
              'Microsoft Forms', 'Formstack', 'Gravity Forms', 'Ninja Forms', 'Contact Form 7',
              'WPForms', 'Caldera Forms', 'Formidable Forms', 'Happy Forms', 'Form Maker'
            ].map((platform) => (
              <Badge 
                key={platform}
                className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200 hover:from-blue-100 hover:to-purple-100 transition-colors duration-200 px-4 py-2 text-sm font-medium"
              >
                {platform}
              </Badge>
            ))}
            <Badge className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 border-gray-200 px-4 py-2 text-sm font-medium">
              ...and 100+ more
            </Badge>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 border border-blue-100">
              <Monitor className="w-12 sm:w-16 h-12 sm:h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Universal Compatibility</h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-sm sm:text-base mobile-text">
                No matter what platform you're using, our widgets integrate seamlessly. 
                Get clean HTML, CSS, and JavaScript code that works everywhere.
              </p>
              <div className="button-group flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link to="/form-builder" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Code className="w-4 h-4 mr-2" />
                    Get Your Code
                  </Button>
                </Link>
                <Link to="/ai-agent" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto border-blue-200 text-blue-700 hover:bg-blue-50">
                    <Bot className="w-4 h-4 mr-2" />
                    Try AI Assistant
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 mobile-px bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Create Your First Form?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto mobile-text">
            Join thousands of users who are already creating amazing WhatsApp forms with WhatsX
          </p>
          
          <div className="button-group flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/form-builder" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                <Zap className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Start Building Now
              </Button>
            </Link>
            <Link to="/ai-agent" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto group relative border-2 border-white text-white hover:bg-white/10 hover:bg-gradient-to-r hover:from-white/10 hover:to-purple-200/20 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 transition-all duration-300 hover:shadow-xl hover:scale-105 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-purple-300/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                <Bot className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                <span className="relative z-10 group-hover:text-purple-100 transition-colors duration-300">
                  Explore AI Features
                </span>
                <div className="ml-2 relative z-10">
                  <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-purple-200 group-hover:animate-pulse" />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 mobile-px">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4">
                <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
                <span className="text-lg sm:text-xl font-bold">WhatsX</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base mobile-text">
                Create beautiful WhatsApp forms with AI assistance. Simple, fast, and powerful.
              </p>
            </div>
            
            <div className="text-center sm:text-left">
              <h3 className="font-semibold mb-4 text-base sm:text-lg">Product</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link to="/form-builder" className="hover:text-white">Form Builder</Link></li>
                <li><Link to="/ai-agent" className="hover:text-white">AI Agent</Link></li>
                <li><a href="#" className="hover:text-white">Templates</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>
            
            <div className="text-center sm:text-left">
              <h3 className="font-semibold mb-4 text-base sm:text-lg">Support</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link to="/support" className="hover:text-white">Help Center</Link></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Tutorials</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div className="text-center sm:text-left">
              <h3 className="font-semibold mb-4 text-base sm:text-lg">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 WhatsX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
