
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Zap, Mail, Database, Webhook, Globe, Settings, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AccessControl from "@/components/AccessControl";

const integrationCategories = [
  {
    title: "Communication",
    icon: MessageCircle,
    integrations: [
      {
        name: "WhatsApp Business API",
        description: "Connect directly with WhatsApp Business API for enhanced messaging capabilities",
        status: "native",
        popular: true
      },
      {
        name: "Telegram Bot",
        description: "Integrate with Telegram for automated bot conversations",
        status: "available",
        popular: false
      },
      {
        name: "SMS Gateway",
        description: "Send SMS notifications and alerts to your customers",
        status: "available",
        popular: true
      }
    ]
  },
  {
    title: "Email Marketing",
    icon: Mail,
    integrations: [
      {
        name: "Mailchimp",
        description: "Sync contacts and automate email campaigns",
        status: "available",
        popular: true
      },
      {
        name: "SendGrid",
        description: "Reliable email delivery and analytics",
        status: "available",
        popular: false
      },
      {
        name: "ConvertKit",
        description: "Creator-focused email marketing automation",
        status: "coming-soon",
        popular: false
      }
    ]
  },
  {
    title: "Database & Storage",
    icon: Database,
    integrations: [
      {
        name: "Google Sheets",
        description: "Store form responses directly in Google Sheets",
        status: "available",
        popular: true
      },
      {
        name: "Airtable",
        description: "Organize data in powerful databases",
        status: "available",
        popular: true
      },
      {
        name: "MySQL",
        description: "Connect to your MySQL database",
        status: "available",
        popular: false
      }
    ]
  },
  {
    title: "Automation",
    icon: Zap,
    integrations: [
      {
        name: "Zapier",
        description: "Connect with 5000+ apps through Zapier automation",
        status: "available",
        popular: true
      },
      {
        name: "Make (Integromat)",
        description: "Advanced automation workflows",
        status: "available",
        popular: false
      },
      {
        name: "IFTTT",
        description: "Simple automation for everyday tasks",
        status: "coming-soon",
        popular: false
      }
    ]
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "native":
      return <Badge className="bg-green-100 text-green-800">Native</Badge>;
    case "available":
      return <Badge className="bg-blue-100 text-blue-800">Available</Badge>;
    case "coming-soon":
      return <Badge className="bg-gray-100 text-gray-800">Coming Soon</Badge>;
    default:
      return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
  }
};

const Integrations = () => {
  return (
    <AccessControl 
      requiredAccess="integrations"
      title="Advanced Integrations"
      description="Access to third-party integrations requires premium access. Upgrade your plan or contact our team to unlock powerful integration features."
    >
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Integrations</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect WhatsX with your favorite tools and platforms. 
              Streamline your workflow with powerful integrations.
            </p>
          </div>

          <div className="space-y-12">
            {integrationCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-semibold text-gray-800">{category.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.integrations.map((integration, index) => (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                            <Globe className="w-6 h-6 text-gray-400" />
                          </div>
                          <div className="flex items-center space-x-2">
                            {integration.popular && (
                              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs">
                                Popular
                              </Badge>
                            )}
                            {getStatusBadge(integration.status)}
                          </div>
                        </div>
                        <CardTitle className="text-xl text-gray-800">{integration.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{integration.description}</p>
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex-1"
                            disabled={integration.status === "coming-soon"}
                          >
                            {integration.status === "native" ? "Configure" : "Connect"}
                          </Button>
                          <Button size="sm" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Custom Integration CTA */}
          <Card className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardContent className="p-8 text-center">
              <Settings className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Need a Custom Integration?</h3>
              <p className="text-gray-600 mb-6">
                Don't see your favorite tool? Contact us about custom integrations and API partnerships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/support">
                  <Button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700">
                    Request Integration
                  </Button>
                </Link>
                <Link to="/documentation">
                  <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                    API Documentation
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Integration Benefits */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Easy Setup</h3>
                <p className="text-gray-600 text-sm">One-click integration setup with most platforms</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Real-time Sync</h3>
                <p className="text-gray-600 text-sm">Instant data synchronization across all platforms</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Settings className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Flexible Configuration</h3>
                <p className="text-gray-600 text-sm">Customize data mapping and automation rules</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AccessControl>
  );
};

export default Integrations;
