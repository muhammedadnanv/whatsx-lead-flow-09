
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Book, Code, Settings, Zap, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Documentation = () => {
  const sections = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: Zap,
      items: [
        { title: "Quick Start Guide", description: "Get up and running in 5 minutes" },
        { title: "Creating Your First Form", description: "Step-by-step form creation tutorial" },
        { title: "WhatsApp Integration", description: "Connect your WhatsApp Business account" },
        { title: "Platform Overview", description: "Understanding WhatsX features" }
      ]
    },
    {
      id: "form-builder",
      title: "Form Builder",
      icon: Code,
      items: [
        { title: "Form Field Types", description: "Text, email, phone, dropdown, and more" },
        { title: "Custom Styling", description: "Brand colors, fonts, and layout options" },
        { title: "Conditional Logic", description: "Show/hide fields based on responses" },
        { title: "Form Validation", description: "Required fields and input validation" }
      ]
    },
    {
      id: "ai-agent",
      title: "AI Agent",
      icon: Users,
      items: [
        { title: "Agent Configuration", description: "Set up your AI assistant personality" },
        { title: "Response Templates", description: "Pre-defined responses for common queries" },
        { title: "Training Your Agent", description: "Improve responses with custom data" },
        { title: "Integration Setup", description: "Connect AI agent to your forms" }
      ]
    },
    {
      id: "integration",
      title: "Integration & Deployment",
      icon: Settings,
      items: [
        { title: "Embedding Forms", description: "Add forms to your website with code snippets" },
        { title: "WhatsApp Business API", description: "Advanced WhatsApp integration options" },
        { title: "Webhook Configuration", description: "Real-time data synchronization" },
        { title: "Third-party Integrations", description: "CRM, email marketing, and more" }
      ]
    },
    {
      id: "security",
      title: "Security & Privacy",
      icon: Shield,
      items: [
        { title: "Data Protection", description: "How we keep your data secure" },
        { title: "GDPR Compliance", description: "Privacy regulations and compliance" },
        { title: "Access Controls", description: "User permissions and team management" },
        { title: "Data Retention", description: "Storage policies and data lifecycle" }
      ]
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
          <div className="flex items-center justify-center mb-4">
            <Book className="w-12 h-12 text-green-600 mr-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Documentation</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive guides and documentation to help you get the most out of WhatsX platform
          </p>
        </div>

        {/* Quick Navigation */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Quick Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex flex-col items-center p-4 rounded-lg border-2 border-transparent hover:border-green-200 hover:bg-green-50 transition-all duration-200 group"
                >
                  <section.icon className="w-8 h-8 text-green-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-700 text-center">{section.title}</span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Documentation Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={section.id} id={section.id}>
              <div className="flex items-center mb-6">
                <section.icon className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {section.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="shadow-md hover:shadow-lg transition-shadow duration-200">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <Button variant="outline" size="sm" className="text-green-600 border-green-200 hover:bg-green-50">
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {index < sections.length - 1 && <Separator className="mt-12" />}
            </div>
          ))}
        </div>

        {/* Help Section */}
        <Card className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-8 text-center">
            <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Need More Help?</h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/support">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                  Contact Support
                </Button>
              </Link>
              <Link to="/help-center">
                <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                  Visit Help Center
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Documentation;
