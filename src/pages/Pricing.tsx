
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Code, Bot, CreditCard, Smartphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { UPIPayment } from "@/components/UPIPayment";
import SEOHead from "@/components/SEOHead";

const Pricing = () => {
  const [showPayment, setShowPayment] = useState(false);

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

  if (showPayment) {
    return <UPIPayment onBack={() => setShowPayment(false)} />;
  }

  return (
    <>
      <SEOHead 
        title="Pricing - WhatsX Form Builder | ₹29 Full Access"
        description="Get complete access to WhatsX form builder codebase, AI agent integration, and embedded widgets for just ₹29. Instant UPI payment with immediate code delivery."
        keywords="WhatsX pricing, form builder code, AI agent codebase, UPI payment, widget integration"
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
            <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200">
              <CreditCard className="w-4 h-4 mr-2" />
              One-Time Payment
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-800 bg-clip-text text-transparent">
              Get Full Access
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Unlock complete source code for WhatsX form builder, AI agent integration, 
              and embedded widgets with instant UPI payment.
            </p>

            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-purple-600 mb-2">₹29</div>
              <div className="text-gray-500">One-time payment • Lifetime access</div>
            </div>
          </div>
        </section>

        {/* Pricing Card */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-2xl">
            <Card className="border-2 border-purple-200 shadow-2xl bg-gradient-to-br from-white to-purple-50/30">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-purple-900 mb-2">
                  Complete Codebase Access
                </CardTitle>
                <p className="text-gray-600">
                  Everything you need to build and deploy WhatsX forms
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Features List */}
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Payment Button */}
                <div className="pt-6 border-t border-purple-100">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg py-6"
                    onClick={() => setShowPayment(true)}
                  >
                    <Smartphone className="w-5 h-5 mr-2" />
                    Pay ₹29 via UPI
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  
                  <div className="mt-4 text-center">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                      <Bot className="w-4 h-4" />
                      <span>Instant code delivery after payment</span>
                    </div>
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
                What You'll Receive
              </h2>
              <p className="text-xl text-gray-600">
                Complete source code with documentation and setup guides
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-purple-900">Embedded Widget Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Complete React components for embeddable forms, styling system, 
                    WhatsApp integration, and responsive design templates.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-blue-900">AI Agent Codebase</CardTitle>
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
