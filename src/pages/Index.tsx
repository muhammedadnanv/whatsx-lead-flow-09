
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
      <section className="bg-gradient-to-br from-whatsapp-light-green/20 via-white to-whatsapp-light-green/30 py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%2325d366\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3 px-4 py-2 bg-whatsapp-green/10 rounded-full border border-whatsapp-green/20">
              <Zap className="w-5 h-5 text-whatsapp-green" />
              <span className="text-whatsapp-dark-green font-semibold text-sm">Powered by Google Gemini AI</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 hero-title leading-tight">
            Turn Website Visitors Into
            <span className="text-whatsapp-green block mt-2">WhatsApp Leads</span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8 sm:mb-12 mobile-text max-w-5xl mx-auto leading-relaxed">
            Create AI-powered form popups that capture leads and instantly deliver them to your WhatsApp. 
            <span className="text-whatsapp-dark-green font-semibold"> Get 87% higher conversion rates</span> with WhatsX.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center button-group mb-12">
            <Link to="/form-builder" className="w-full sm:w-auto">
              <Button className="bg-whatsapp-green hover:bg-whatsapp-dark-green text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl w-full sm:w-auto min-h-[56px] shadow-lg hover:shadow-xl transition-all duration-300">
                <Sparkles className="w-5 h-5 mr-2" />
                Start Building Free
              </Button>
            </Link>
            <Link to="/documentation" className="w-full sm:w-auto">
              <Button variant="outline" className="border-2 border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-light-green/30 px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl w-full sm:w-auto min-h-[56px] font-semibold">
                <MessageSquare className="w-5 h-5 mr-2" />
                View Demo
              </Button>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-whatsapp-green/10">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-whatsapp-green mb-1">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Capture
              <span className="text-whatsapp-green block mt-2">WhatsApp Leads</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              WhatsX provides all the tools you need to transform your website into a WhatsApp lead generation machine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 card-grid">
            {features.map((feature, index) => (
              <Link key={feature.title} to={feature.link} className="block hover-scale transition-all duration-300 group">
                <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-xl card h-full border-l-4 border-l-whatsapp-green group-hover:border-l-whatsapp-dark-green transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-whatsapp-light-green/30 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-whatsapp-green" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-6 flex items-center text-whatsapp-green font-semibold group-hover:text-whatsapp-dark-green transition-colors">
                    <span>Learn More</span>
                    <Target className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-whatsapp-green">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Join 10,000+ Businesses Already Using WhatsX
            </h2>
            <p className="text-xl sm:text-2xl text-whatsapp-light-green mb-8">
              From startups to enterprises, businesses worldwide trust WhatsX to capture more leads through WhatsApp.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <TrendingUp className="w-8 h-8 text-whatsapp-light-green mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-2">150%</div>
                <div className="text-whatsapp-light-green">Average Lead Increase</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Users className="w-8 h-8 text-whatsapp-light-green mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-2">10k+</div>
                <div className="text-whatsapp-light-green">Happy Customers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <ShieldCheck className="w-8 h-8 text-whatsapp-light-green mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-2">99.9%</div>
                <div className="text-whatsapp-light-green">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to 10x Your Lead Generation?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 sm:mb-12 mobile-text max-w-4xl mx-auto">
            Join thousands of businesses already using WhatsX to transform their WhatsApp interactions and capture more qualified leads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center button-group">
            <Link to="/form-builder" className="w-full sm:w-auto">
              <Button className="bg-whatsapp-green hover:bg-whatsapp-dark-green text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl w-full sm:w-auto min-h-[56px] shadow-lg hover:shadow-xl transition-all duration-300">
                <Rocket className="w-5 h-5 mr-2" />
                Start Building Now - Free
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl w-full sm:w-auto min-h-[56px] font-semibold transition-all duration-300">
                <MessageSquare className="w-5 h-5 mr-2" />
                Talk to Sales
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            ✓ No credit card required  •  ✓ Setup in 5 minutes  •  ✓ Cancel anytime
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
