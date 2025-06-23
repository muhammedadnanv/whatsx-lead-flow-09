
import React from "react";
import Layout from "@/components/Layout";
import { Link } from 'react-router-dom';
import { Sparkles, Rocket, Code, MessageSquare, FileCode2, Users, ShieldCheck, LucideIcon, Zap, Target, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const features: Feature[] = [
  {
    title: "WhatsApp Form Builder",
    description: "Create powerful WhatsApp lead capture forms with our intuitive drag-and-drop builder.",
    icon: Sparkles,
    link: "/form-builder"
  },
  {
    title: "AI-Powered Agents",
    description: "Deploy intelligent WhatsApp chatbots that convert visitors into qualified leads 24/7.",
    icon: Rocket,
    link: "/ai-agent"
  },
  {
    title: "Ready-to-Use Templates",
    description: "Launch faster with our library of proven WhatsApp form and agent templates.",
    icon: FileCode2,
    link: "/templates"
  },
  {
    title: "Seamless Integrations",
    description: "Connect WhatsX with your CRM, email tools, and favorite business applications.",
    icon: Code,
    link: "/integrations"
  },
  {
    title: "Complete Documentation",
    description: "Master WhatsX with our comprehensive guides, tutorials, and API documentation.",
    icon: MessageSquare,
    link: "/documentation"
  },
  {
    title: "Team Collaboration",
    description: "Work together with your team to create and manage WhatsApp lead generation campaigns.",
    icon: Users,
    link: "/contact"
  }
];

const stats = [
  { number: "87%", label: "Higher Conversion Rate", description: "vs traditional forms" },
  { number: "10x", label: "Faster Lead Response", description: "direct to WhatsApp" },
  { number: "24/7", label: "AI Agent Availability", description: "never miss a lead" },
  { number: "50+", label: "Integration Partners", description: "seamless workflow" }
];

const Index = () => {
  return (
    <Layout
      seoTitle="WhatsX - Turn Website Visitors Into WhatsApp Leads | AI-Powered Lead Generation"
      seoDescription="Create AI-powered form popups that capture leads and instantly deliver them to your WhatsApp. Revolutionary SaaS tool with Google Gemini AI for 87% higher conversion rates."
      seoKeywords="WhatsApp leads, lead generation, AI forms, form builder, WhatsApp integration, lead capture, popup forms, SaaS, conversion optimization, Google Gemini AI"
      seoImage="/lovable-uploads/be006f58-eee2-40fe-8e43-6cd2158678aa.png"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-whatsapp-light-green/20 via-white to-whatsapp-light-green/30 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2325d366' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 bg-whatsapp-green/10 rounded-full border border-whatsapp-green/20 animate-scale-in">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-whatsapp-green" />
              <span className="text-whatsapp-dark-green font-semibold text-xs sm:text-sm">Powered by Google Gemini AI</span>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Turn Website Visitors Into
            <span className="text-whatsapp-green block mt-1 sm:mt-2">WhatsApp Leads</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-5xl mx-auto">
            Create AI-powered form popups that capture leads and instantly deliver them to your WhatsApp. 
            <span className="text-whatsapp-dark-green font-semibold block sm:inline"> Get 87% higher conversion rates</span> with WhatsX.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 max-w-lg mx-auto">
            <Link to="/form-builder" className="w-full sm:flex-1">
              <Button className="w-full bg-whatsapp-green hover:bg-whatsapp-dark-green text-white px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg lg:text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus-visible:focus-visible">
                <Sparkles className="w-5 h-5 mr-2" />
                Start Building Free
              </Button>
            </Link>
            
            <Link to="/documentation" className="w-full sm:flex-1">
              <Button variant="outline" className="w-full border-2 border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-light-green/30 px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg lg:text-xl font-semibold transition-all duration-300 transform hover:scale-105 focus-visible:focus-visible">
                <MessageSquare className="w-5 h-5 mr-2" />
                View Demo
              </Button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="responsive-grid max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-whatsapp-green/10 hover:border-whatsapp-green/30 transition-all duration-300 hover:shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-whatsapp-green mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="responsive-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Capture
              <span className="text-whatsapp-green block mt-1 sm:mt-2">WhatsApp Leads</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              WhatsX provides all the tools you need to transform your website into a WhatsApp lead generation machine.
            </p>
          </div>
          
          <div className="responsive-grid">
            {features.map((feature, index) => (
              <Link 
                key={feature.title} 
                to={feature.link} 
                className="group block transition-all duration-300 transform hover:scale-105 focus-visible:focus-visible animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-xl h-full border-l-4 border-l-whatsapp-green group-hover:border-l-whatsapp-dark-green transition-all duration-300">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-whatsapp-light-green/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-whatsapp-light-green/50 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-whatsapp-green" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-whatsapp-dark-green transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-whatsapp-green font-semibold group-hover:text-whatsapp-dark-green transition-colors duration-300">
                    <span className="text-sm sm:text-base">Learn More</span>
                    <Target className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="responsive-padding bg-whatsapp-green">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Join 10,000+ Businesses Already Using WhatsX
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-whatsapp-light-green mb-8 sm:mb-12">
              From startups to enterprises, businesses worldwide trust WhatsX to capture more leads through WhatsApp.
            </p>
            
            <div className="responsive-grid mb-8 sm:mb-12">
              {[
                { icon: TrendingUp, value: "150%", label: "Average Lead Increase" },
                { icon: Users, value: "10k+", label: "Happy Customers" },
                { icon: ShieldCheck, value: "99.9%", label: "Uptime Guarantee" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-whatsapp-light-green mx-auto mb-2 sm:mb-3" />
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">{item.value}</div>
                  <div className="text-sm sm:text-base text-whatsapp-light-green">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 responsive-padding">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to 10x Your Lead Generation?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto">
            Join thousands of businesses already using WhatsX to transform their WhatsApp interactions and capture more qualified leads.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 max-w-lg mx-auto">
            <Link to="/form-builder" className="w-full sm:flex-1">
              <Button className="w-full bg-whatsapp-green hover:bg-whatsapp-dark-green text-white px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg lg:text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus-visible:focus-visible">
                <Rocket className="w-5 h-5 mr-2" />
                Start Building Now - Free
              </Button>
            </Link>
            
            <Link to="/contact" className="w-full sm:flex-1">
              <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg lg:text-xl font-semibold transition-all duration-300 transform hover:scale-105 focus-visible:focus-visible">
                <MessageSquare className="w-5 h-5 mr-2" />
                Talk to Sales
              </Button>
            </Link>
          </div>
          
          <div className="text-xs sm:text-sm text-gray-400 flex flex-wrap justify-center gap-2 sm:gap-4">
            <span>✓ No credit card required</span>
            <span>•</span>
            <span>✓ Setup in 5 minutes</span>
            <span>•</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
