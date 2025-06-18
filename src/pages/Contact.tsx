
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
      duration: 3000
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "adnanmuhammad4393@gmail.com",
      description: "Get in touch via email for detailed inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 9656778508",
      description: "Speak directly with our support team"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      details: "Available 24/7",
      description: "Instant support through our chat widget"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Kerala, India",
      description: "Visit us at our headquarters"
    }
  ];

  const popularArticles = [
    {
      title: "Getting Started with WhatsX Forms",
      content: "Learn how to create your first form in minutes. This comprehensive guide covers everything from setting up your account to publishing your first form. We'll walk you through the form builder interface, explain each field type, and show you how to customize your form's appearance to match your brand.",
      category: "Getting Started",
      readTime: "5 min read"
    },
    {
      title: "WhatsApp Business Integration Setup",
      content: "Complete step-by-step guide to connecting your WhatsApp Business account with WhatsX. This tutorial covers obtaining your WhatsApp Business API credentials, configuring webhooks, setting up message templates, and testing your integration to ensure leads flow seamlessly to your WhatsApp.",
      category: "Integration",
      readTime: "8 min read"
    },
    {
      title: "Customizing Your Form Design",
      content: "Make your forms stand out with custom branding and design. Learn how to change colors, fonts, and layouts to match your website's aesthetic. This guide covers CSS customization, responsive design principles, and best practices for creating forms that convert visitors into leads.",
      category: "Design",
      readTime: "6 min read"
    },
    {
      title: "AI Agent Configuration Guide",
      content: "Set up and train your AI assistant to handle customer inquiries automatically. This detailed guide explains how to configure response templates, set up conversation flows, train the AI with your business information, and optimize responses for better customer engagement.",
      category: "AI Features",
      readTime: "10 min read"
    },
    {
      title: "Form Analytics and Performance Tracking",
      content: "Understand how your forms are performing with detailed analytics. Learn to interpret conversion rates, identify drop-off points, track user behavior, and use data insights to optimize your forms for better results. Includes tips on A/B testing and performance optimization.",
      category: "Analytics",
      readTime: "7 min read"
    },
    {
      title: "Advanced WhatsApp Automation",
      content: "Take your WhatsApp integration to the next level with advanced automation features. Learn to set up automated responses, create conversation workflows, integrate with CRM systems, and use WhatsApp's rich media features to enhance customer communication.",
      category: "Automation",
      readTime: "12 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need support? We're here to help. 
            Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Send us a Message</CardTitle>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">{info.title}</h3>
                        <p className="text-green-600 font-medium mb-2">{info.details}</p>
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-green-600 mr-3" />
                  <CardTitle className="text-xl text-gray-800">Business Hours</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-green-700 text-sm">
                      <strong>24/7 Support:</strong> Email support available around the clock
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Popular Articles Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Popular Help Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{article.content}</p>
                  <Button variant="ghost" className="mt-4 p-0 text-green-600 hover:text-green-700">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-8 text-center">
            <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Looking for Quick Answers?</h3>
            <p className="text-gray-600 mb-6">
              Check out our help center and documentation for instant solutions to common questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/help-center">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                  Visit Help Center
                </Button>
              </Link>
              <Link to="/documentation">
                <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                  Browse Documentation
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
