
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Code, Bot, Lock } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const Pricing = () => {
  const features = [
    "Complete Embedded Widget Codebase",
    "AI Agent Integration Code",
    "WhatsApp Form Builder",
    "Responsive Design Templates",
    "Custom Styling Options",
    "API Integration Examples",
    "Documentation & Setup Guide",
    "Lifetime Updates"
  ];

  return (
    <>
      <SEOHead 
        title="Pricing - WhatsX Form Builder | Currently Unavailable"
        description="WhatsX form builder pricing is currently locked. Stay tuned for updates on availability."
        keywords="WhatsX pricing, form builder, coming soon"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <Code className="w-8 h-8 text-purple-600" />
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  WhatsX
                </span>
              </Link>
              <Link to="/">
                <Button variant="ghost" className="text-purple-600 hover:text-purple-800">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <Badge className="mb-6 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 border-red-200">
              <Lock className="w-4 h-4 mr-2" />
              Payment Gateway Locked
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-800 bg-clip-text text-transparent">
              Pricing Temporarily Unavailable
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our payment system is currently locked for maintenance. 
              Please check back later or contact support for more information.
            </p>
          </div>
        </section>

        {/* Locked Pricing Card */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-2xl">
            <Card className="border-2 border-gray-200 shadow-2xl bg-gradient-to-br from-white to-gray-50/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gray-100/50 flex items-center justify-center">
                <div className="bg-white p-4 rounded-full shadow-lg">
                  <Lock className="w-8 h-8 text-gray-500" />
                </div>
              </div>
              
              <CardHeader className="text-center pb-6 relative z-10 opacity-50">
                <CardTitle className="text-3xl font-bold text-gray-700 mb-2">
                  Complete Codebase Access
                </CardTitle>
                <p className="text-gray-500">
                  Payment gateway is currently locked
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10 opacity-50">
                {/* Features List */}
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Locked Message */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <Lock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Payment System Locked</h3>
                    <p className="text-gray-600 text-sm">
                      The payment gateway is temporarily unavailable. 
                      Please try again later or contact our support team.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-16 px-4 bg-white/50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                What You'll Receive (When Available)
              </h2>
              <p className="text-xl text-gray-600">
                Complete source code with documentation and setup guides
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-gray-200 hover:shadow-lg transition-shadow opacity-75">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-gray-700">Embedded Widget Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Complete React components for embeddable forms, styling system, 
                    WhatsApp integration, and responsive design templates.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:shadow-lg transition-shadow opacity-75">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg flex items-center justify-center mb-4">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-gray-700">AI Agent Codebase</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    AI-powered chatbot integration, conversation handling, 
                    lead qualification system, and Google Gemini AI setup.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;
