
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Mail, Phone, Clock, HelpCircle, Book, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
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
      title: "Support Request Submitted!",
      description: "We'll get back to you within 24 hours.",
      duration: 3000
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const supportOptions = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@whatsx.com",
      availability: "24/7"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our team",
      contact: "Available in app",
      availability: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with an expert",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri 9AM-6PM EST"
    }
  ];

  const faqs = [
    {
      question: "How do I set up my first form?",
      answer: "Use our Form Builder to create custom forms in minutes. Simply choose your fields, customzie the design, and copy the generated code to your website."
    },
    {
      question: "Can I customize the form design?",
      answer: "Yes! You can customize colors, fonts, spacing, and add your brand logo to match your website's design."
    },
    {
      question: "How are leads delivered to WhatsApp?",
      answer: "When someone submits your form, the data is instantly formatted and sent to your specified WhatsApp number as a message."
    },
    {
      question: "Is there a limit on form submissions?",
      answer: "Form submission limits depend on your plan. Check your dashboard for current usage and upgrade options."
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">How Can We Help?</h1>
          <p className="text-lg text-gray-600">
            Get the support you need to make the most of WhatsX
          </p>
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {supportOptions.map((option, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{option.title}</h3>
                <p className="text-gray-600 mb-3">{option.description}</p>
                <p className="font-medium text-green-600 mb-2">{option.contact}</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{option.availability}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can we help?"
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please describe your issue or question..."
                    required
                    className="mt-1"
                    rows={5}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
              <HelpCircle className="w-6 h-6 mr-2 text-green-600" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-800 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-6 text-center">
                <Book className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Need More Help?</h3>
                <p className="text-gray-600 mb-4">
                  Check out our comprehensive documentation for detailed guides and tutorials.
                </p>
                <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                  View Documentation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
