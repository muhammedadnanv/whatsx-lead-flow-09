
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Zap, Bot, ShoppingCart, Briefcase, Heart, Users, Calendar, FileText, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Templates = () => {
  const templateCategories = [
    {
      id: "lead-generation",
      title: "Lead Generation",
      icon: Zap,
      templates: [
        {
          name: "Contact Form",
          description: "Simple contact form with name, email, and message fields",
          preview: "contact-form.jpg",
          popular: true
        },
        {
          name: "Quote Request",
          description: "Detailed quote request form for service providers",
          preview: "quote-request.jpg",
          popular: false
        },
        {
          name: "Newsletter Signup",
          description: "Clean newsletter subscription form with email validation",
          preview: "newsletter.jpg",
          popular: true
        }
      ]
    },
    {
      id: "ecommerce",
      title: "E-commerce",
      icon: ShoppingCart,
      templates: [
        {
          name: "Product Inquiry",
          description: "Product inquiry form with product selection and details",
          preview: "product-inquiry.jpg",
          popular: true
        },
        {
          name: "Order Form",
          description: "Complete order form with quantity and shipping options",
          preview: "order-form.jpg",
          popular: false
        },
        {
          name: "Customer Feedback",
          description: "Product review and feedback collection form",
          preview: "feedback.jpg",
          popular: false
        }
      ]
    },
    {
      id: "business",
      title: "Business Services",
      icon: Briefcase,
      templates: [
        {
          name: "Consultation Booking",
          description: "Professional consultation booking with time slots",
          preview: "consultation.jpg",
          popular: true
        },
        {
          name: "Service Request",
          description: "General service request form with detailed requirements",
          preview: "service-request.jpg",
          popular: false
        },
        {
          name: "Partnership Inquiry",
          description: "Business partnership and collaboration inquiry form",
          preview: "partnership.jpg",
          popular: false
        }
      ]
    },
    {
      id: "events",
      title: "Events & Booking",
      icon: Calendar,
      templates: [
        {
          name: "Event Registration",
          description: "Event registration form with attendee details",
          preview: "event-registration.jpg",
          popular: true
        },
        {
          name: "Appointment Booking",
          description: "Simple appointment booking with date and time selection",
          preview: "appointment.jpg",
          popular: true
        },
        {
          name: "Workshop Signup",
          description: "Workshop registration with skill level and preferences",
          preview: "workshop.jpg",
          popular: false
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              WhatsX
            </span>
          </Link>
          
          <Link to="/">
            <Button variant="ghost" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Form Templates</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our collection of professionally designed form templates. 
            Customize any template to match your brand and requirements.
          </p>
        </div>

        <div className="space-y-12">
          {templateCategories.map((category) => (
            <div key={category.id}>
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">{category.title}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.templates.map((template, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                    <CardHeader>
                      <div className="relative mb-4">
                        <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                          <FileText className="w-12 h-12 text-gray-400" />
                        </div>
                        {template.popular && (
                          <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl text-gray-800">{template.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{template.description}</p>
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex-1">
                          Use Template
                        </Button>
                        <Button size="sm" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-8 text-center">
            <Bot className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Need a Custom Template?</h3>
            <p className="text-gray-600 mb-6">
              Our AI agent can help you create custom forms tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ai-agent">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  Try AI Agent
                </Button>
              </Link>
              <Link to="/form-builder">
                <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                  Custom Form Builder
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Templates;
