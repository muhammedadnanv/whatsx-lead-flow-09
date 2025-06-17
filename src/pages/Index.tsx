
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Zap, Users, BarChart3, ArrowRight, CheckCircle, Play, Copy, Menu, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const formCode = `<!-- WhatsX Form Popup -->
<div id="whatsx-popup" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 9999;">
  <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); max-width: 400px; width: 90%; margin: 0 1rem;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
      <h3 style="margin: 0; font-size: 1.25rem; font-weight: 600;">Get In Touch!</h3>
      <button onclick="closeWhatsXPopup()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; padding: 0.25rem; min-height: 44px; min-width: 44px;">&times;</button>
    </div>
    <form id="whatsx-form">
      <div style="margin-bottom: 1rem;">
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Full Name</label>
        <input type="text" name="name" required style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 16px;">
      </div>
      <div style="margin-bottom: 1rem;">
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Email Address</label>
        <input type="email" name="email" required style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 16px;">
      </div>
      <div style="margin-bottom: 1rem;">
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Your Message</label>
        <textarea name="message" required rows="3" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; resize: vertical; font-size: 16px;"></textarea>
      </div>
      <button type="submit" style="width: 100%; padding: 0.75rem; background: linear-gradient(to right, #10b981, #059669); color: white; border: none; border-radius: 6px; font-weight: 500; cursor: pointer; font-size: 16px; min-height: 44px;">
        📱 Send to WhatsApp
      </button>
    </form>
  </div>
</div>

<script>
function showWhatsXPopup() {
  document.getElementById('whatsx-popup').style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeWhatsXPopup() {
  document.getElementById('whatsx-popup').style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
}

document.getElementById('whatsx-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  // Replace with your WhatsApp number
  const whatsappUrl = \`https://wa.me/1234567890?text=New Lead from WhatsX Form,\${name},\${email},\${message}\`;
  
  window.open(whatsappUrl, '_blank');
  closeWhatsXPopup();
  this.reset();
});

// Close popup when clicking outside
document.getElementById('whatsx-popup').addEventListener('click', function(e) {
  if (e.target === this) {
    closeWhatsXPopup();
  }
});

// Close popup with escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && document.getElementById('whatsx-popup').style.display === 'block') {
    closeWhatsXPopup();
  }
});
</script>

<!-- Usage: Add this button anywhere on your website -->
<button onclick="showWhatsXPopup()" style="background: linear-gradient(to right, #10b981, #059669); color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 500; font-size: 16px; min-height: 44px;">
  Contact Us
</button>`;

  const copyFormCode = () => {
    navigator.clipboard.writeText(formCode).then(() => {
      toast({
        title: "Code Copied!",
        description: "Form code has been copied to your clipboard.",
        duration: 3000,
      });
    });
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
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              WhatsX
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-green-600">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="container mx-auto px-4 py-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-green-600">
                Login
              </Button>
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                Start Free Trial
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-green-100 text-green-700 hover:bg-green-100 text-sm">
            🚀 Revolutionary Lead Capture Tool
          </Badge>
          
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight mobile-text">
            Turn Website Visitors Into WhatsApp Leads
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed mobile-text">
            Create beautiful form popups that capture leads and instantly deliver them to your WhatsApp. 
            No complex setups, no missed opportunities—just direct connections with your customers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => setIsFormVisible(!isFormVisible)}
            >
              <Play className="w-5 h-5 mr-2" />
              See Demo
            </Button>
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => setIsCodeVisible(!isCodeVisible)}
            >
              <Copy className="w-5 h-5 mr-2" />
              Get Code
            </Button>
          </div>

          {/* Demo Form Popup */}
          {isFormVisible && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <Card className="w-full max-w-md bg-white shadow-2xl animate-scale-in mobile-form-spacing">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Get In Touch!</h3>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setIsFormVisible(false)}
                      className="text-gray-400 hover:text-gray-600 p-2 min-h-[44px] min-w-[44px]"
                    >
                      <X className="w-4 h-4" />
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
                        className="mt-1 text-base md:text-sm"
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
                        className="mt-1 text-base md:text-sm"
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
                        className="mt-1 text-base md:text-sm"
                        rows={3}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 min-h-[44px]"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Send to WhatsApp
                    </Button>
                  </form>
                  
                  <p className="text-xs text-gray-500 mt-3 text-center mobile-text">
                    This message will be sent directly to our WhatsApp
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Copy Code Popup */}
          {isCodeVisible && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <Card className="w-full max-w-4xl bg-white shadow-2xl animate-scale-in max-h-[90vh] overflow-hidden">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">Copy Your Form Code</h3>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setIsCodeVisible(false)}
                      className="text-gray-400 hover:text-gray-600 p-2 min-h-[44px] min-w-[44px]"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm md:text-base mobile-text">
                    Copy and paste this code into your website to add the WhatsX form popup:
                  </p>
                  
                  <div className="relative">
                    <pre className="bg-gray-100 p-4 rounded-lg text-xs md:text-sm overflow-auto max-h-96 border">
                      <code>{formCode}</code>
                    </pre>
                    <Button
                      onClick={copyFormCode}
                      className="absolute top-2 right-2 bg-white hover:bg-gray-50 text-gray-700 border text-xs md:text-sm"
                      size="sm"
                    >
                      <Copy className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                      Copy
                    </Button>
                  </div>
                  
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-xs md:text-sm text-blue-800 mobile-text">
                      <strong>Note:</strong> Remember to replace "1234567890" with your actual WhatsApp number in the code above.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="text-sm text-gray-500 mobile-text">
            ✨ No credit card required • Setup in 2 minutes • 14-day free trial
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Everything You Need to Capture Leads
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mobile-text">
              WhatsX combines the power of modern forms with instant WhatsApp delivery
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base mobile-text">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Why Choose WhatsX?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mobile-text">
              Join thousands of businesses already using WhatsX to capture more leads
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0" />
                <span className="text-base md:text-lg text-gray-700 mobile-text">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 mobile-text">
            Ready to Transform Your Lead Capture?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 mobile-text">
            Start your free trial today and see how WhatsX can revolutionize your customer communication.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl shadow-lg min-h-[44px]"
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-6 rounded-xl min-h-[44px]"
            >
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-sm mt-6 opacity-75 mobile-text">
            14-day free trial • No setup fees • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold">WhatsX</span>
          </div>
          <p className="text-gray-400 mb-4 text-sm md:text-base mobile-text">
            Transforming lead capture with instant WhatsApp delivery
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
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
