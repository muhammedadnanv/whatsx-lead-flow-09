import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Zap, Users, BarChart3, ArrowRight, CheckCircle, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp URL with the specified format
    const whatsappUrl = `https://wa.me/1234567890?text=New Lead from WhatsX Form,${formData.name},${formData.email},${formData.message}`;
    
    // Show success toast
    toast({
      title: "Lead Captured Successfully!",
      description: "Data would be sent to your WhatsApp instantly.",
      duration: 3000,
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setIsFormVisible(false);
  };

  const features = [
    {
      icon: MessageCircle,
      title: "Instant WhatsApp Delivery",
      description: "Every form submission is instantly sent to your WhatsApp number in real-time."
    },
    {
      icon: Zap,
      title: "Lightning Fast Setup",
      description: "Create and deploy your form popup in under 5 minutes with our intuitive builder."
    },
    {
      icon: Users,
      title: "Smart Lead Capture",
      description: "Customizable forms that capture exactly the data you need from your visitors."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track conversion rates, form performance, and lead quality with detailed insights."
    }
  ];

  const benefits = [
    "No complex integrations required",
    "Works with any website or landing page",
    "Instant mobile notifications via WhatsApp",
    "Customizable design to match your brand",
    "GDPR compliant data handling",
    "24/7 automated lead capture"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              WhatsX
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-green-600">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
              Start Free Trial
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-green-100 text-green-700 hover:bg-green-100">
            🚀 Revolutionary Lead Capture Tool
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight">
            Turn Website Visitors Into WhatsApp Leads
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Create beautiful form popups that capture leads and instantly deliver them to your WhatsApp. 
            No complex setups, no missed opportunities—just direct connections with your customers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => setIsFormVisible(!isFormVisible)}
            >
              <Play className="w-5 h-5 mr-2" />
              See Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-green-200 hover:border-green-300 text-lg px-8 py-6 rounded-xl"
            >
              Watch Video <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Demo Form Popup */}
          {isFormVisible && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <Card className="w-full max-w-md bg-white shadow-2xl animate-scale-in">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Get In Touch!</h3>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setIsFormVisible(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </Button>
                  </div>
                  
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="How can we help you?"
                        required
                        className="mt-1"
                        rows={3}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Send to WhatsApp
                    </Button>
                  </form>
                  
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    This message will be sent directly to our WhatsApp
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="text-sm text-gray-500">
            ✨ No credit card required • Setup in 2 minutes • 14-day free trial
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Everything You Need to Capture Leads
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              WhatsX combines the power of modern forms with instant WhatsApp delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Why Choose WhatsX?
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of businesses already using WhatsX to capture more leads
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-lg text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Lead Capture?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start your free trial today and see how WhatsX can revolutionize your customer communication.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl shadow-lg"
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-6 rounded-xl"
            >
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-sm mt-6 opacity-75">
            14-day free trial • No setup fees • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold">WhatsX</span>
          </div>
          <p className="text-gray-400 mb-4">
            Transforming lead capture with instant WhatsApp delivery
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
