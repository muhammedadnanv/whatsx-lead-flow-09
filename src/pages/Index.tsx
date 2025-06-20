
import React from "react";
import Layout from "@/components/Layout";
import { Link } from 'react-router-dom';
import { Sparkles, Rocket, Code, MessageSquare, FileCode2, Users, ShieldCheck, LucideIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const features: Feature[] = [
  {
    title: "Form Builder",
    description: "Create powerful WhatsApp forms with our drag-and-drop builder.",
    icon: Sparkles,
    link: "/form-builder"
  },
  {
    title: "AI Agent",
    description: "Automate conversations with an intelligent AI agent.",
    icon: Rocket,
    link: "/ai-agent"
  },
  {
    title: "Templates",
    description: "Get started quickly with pre-built form and agent templates.",
    icon: FileCode2,
    link: "/templates"
  },
  {
    title: "Integrations",
    description: "Connect with your favorite tools and services.",
    icon: Code,
    link: "/integrations"
  },
  {
    title: "Documentation",
    description: "Learn how to use WhatsX with our comprehensive documentation.",
    icon: MessageSquare,
    link: "/documentation"
  },
  {
    title: "Team Collaboration",
    description: "Work together with your team on forms and agents.",
    icon: Users,
    link: "/contact"
  },
  {
    title: "Security",
    description: "We take your security seriously with enterprise-grade protection.",
    icon: ShieldCheck,
    link: "/privacy-policy"
  },
];

const Index = () => {
  return (
    <Layout
      seoTitle="WhatsX - Turn Website Visitors Into WhatsApp Leads | AI-Powered Lead Generation"
      seoDescription="Create AI-powered form popups that capture leads and instantly deliver them to your WhatsApp. Revolutionary SaaS tool with Google Gemini AI for 87% higher conversion rates."
      seoKeywords="WhatsApp leads, lead generation, AI forms, form builder, WhatsApp integration, lead capture, popup forms, SaaS, conversion optimization, Google Gemini AI"
      seoImage="/lovable-uploads/be006f58-eee2-40fe-8e43-6cd2158678aa.png"
    >
      <section className="bg-gradient-to-br from-whatsapp-light-green/30 via-white to-whatsapp-light-green/30 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 hero-title leading-tight">
            Transform Your WhatsApp Interactions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 mobile-text max-w-4xl mx-auto">
            Build powerful forms and AI agents with ease. Get started today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center button-group">
            <Link to="/form-builder" className="w-full sm:w-auto">
              <Button className="bg-whatsapp-green hover:bg-whatsapp-dark-green text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto min-h-[48px]">
                Get Started
              </Button>
            </Link>
            <Link to="/documentation" className="w-full sm:w-auto">
              <Button variant="outline" className="border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-light-green/50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto min-h-[48px]">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 card-grid">
            {features.map((feature) => (
              <Link key={feature.title} to={feature.link} className="block hover-scale transition-transform duration-300">
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg card h-full">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-whatsapp-green mb-3 sm:mb-4" />
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{feature.title}</h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 mobile-text max-w-4xl mx-auto">
            Join thousands of businesses already using WhatsX to transform their WhatsApp interactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center button-group">
            <Link to="/form-builder" className="w-full sm:w-auto">
              <Button className="bg-whatsapp-green hover:bg-whatsapp-dark-green text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto min-h-[48px]">
                Start Building Now
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-light-green/50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto min-h-[48px]">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
