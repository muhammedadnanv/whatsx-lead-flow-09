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
    <Layout>
      <section className="bg-gradient-to-br from-whatsapp-light-green/30 via-white to-whatsapp-light-green/30 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 hero-title">
            Transform Your WhatsApp Interactions
          </h1>
          <p className="text-xl text-gray-600 mb-12 mobile-text">
            Build powerful forms and AI agents with ease. Get started today!
          </p>
          <div className="button-group flex justify-center">
            <Link to="/form-builder">
              <Button className="bg-whatsapp-green hover:bg-whatsapp-dark-green text-white px-8 py-3">
                Get Started
              </Button>
            </Link>
            <Link to="/documentation">
              <Button variant="outline" className="border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-light-green/50">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 card-grid">
            {features.map((feature) => (
              <Link key={feature.title} to={feature.link} className="block hover-scale transition-transform duration-300">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg card">
                  <feature.icon className="w-6 h-6 text-whatsapp-green mb-4" />
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h2>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-12 mobile-text">
            Join thousands of businesses already using WhatsX to transform their WhatsApp interactions.
          </p>
          <div className="button-group flex justify-center">
            <Link to="/form-builder">
              <Button className="bg-whatsapp-green hover:bg-whatsapp-dark-green text-white px-8 py-3">
                Start Building Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-light-green/50">
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
