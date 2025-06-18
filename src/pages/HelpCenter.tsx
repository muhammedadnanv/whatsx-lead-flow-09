
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Search, HelpCircle, Video, FileText, MessageSquare, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { VideoPopup } from "@/components/VideoPopup";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Watch step-by-step guides",
      items: [
        "Platform Overview and Getting Started",
        "Creating Your First Form",
        "Setting Up WhatsApp Integration",
        "Customizing Form Design",
        "AI Agent Configuration"
      ]
    },
    {
      icon: HelpCircle,
      title: "Frequently Asked Questions",
      description: "Common questions and answers",
      items: [
        "How do I connect my WhatsApp Business account?",
        "Can I customize the form appearance?",
        "What types of form fields are available?",
        "How does the AI agent work?",
        "Is my data secure with WhatsX?"
      ]
    },
    {
      icon: FileText,
      title: "Setup Guides",
      description: "Detailed installation instructions",
      items: [
        "WhatsApp Business API Setup",
        "Form Embedding on Your Website",
        "Domain Configuration",
        "Team Member Permissions",
        "Webhook Configuration"
      ]
    },
    {
      icon: Lightbulb,
      title: "Best Practices",
      description: "Tips for optimal results",
      items: [
        "Form Design Best Practices",
        "Improving Form Conversion Rates",
        "AI Agent Training Tips",
        "Lead Management Strategies",
        "Customer Engagement Techniques"
      ]
    }
  ];

  const popularArticles = [
    {
      title: "How to Create Your First Form",
      description: "Complete guide to building forms with WhatsX",
      readTime: "5 min read",
      category: "Getting Started"
    },
    {
      title: "WhatsApp Business Integration",
      description: "Step-by-step WhatsApp connection process",
      readTime: "8 min read",
      category: "Integration"
    },
    {
      title: "Customizing Form Design",
      description: "Brand your forms with custom colors and styles",
      readTime: "6 min read",
      category: "Design"
    },
    {
      title: "Setting Up AI Agent",
      description: "Configure your AI assistant for better responses",
      readTime: "10 min read",
      category: "AI Features"
    },
    {
      title: "Form Analytics and Insights",
      description: "Understanding your form performance data",
      readTime: "7 min read",
      category: "Analytics"
    },
    {
      title: "Troubleshooting Common Issues",
      description: "Solutions to frequently encountered problems",
      readTime: "12 min read",
      category: "Support"
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
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Help Center</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Find answers, watch tutorials, and learn how to make the most of WhatsX
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search for help articles, guides, or tutorials..."
              className="pl-12 pr-4 py-3 text-lg border-green-200 focus:border-green-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <VideoPopup
              videoUrl="https://www.loom.com/share/c1f4cf1f5d5b4c4d9c5e745032b2a081?sid=666100aa-4de5-4d25-92fc-8f4605f7b862"
              buttonText="Watch Platform Demo"
              buttonVariant="default"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
            />
            <Link to="/documentation">
              <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                Browse Documentation
              </Button>
            </Link>
            <Link to="/support">
              <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-200 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <category.icon className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-800">{category.title}</CardTitle>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-600 hover:text-green-600 cursor-pointer transition-colors">
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Popular Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{article.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Support Section */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-8 text-center">
            <MessageSquare className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Still Need Help?</h3>
            <p className="text-gray-600 mb-6">
              Our support team is available 24/7 to help you with any questions or technical issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/support">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                  Get Technical Support
                </Button>
              </Link>
              <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                Live Chat Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HelpCenter;
