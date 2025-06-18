
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Play, Book, Video, FileText, Clock, User, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { VideoPopup } from "@/components/VideoPopup";

const Tutorials = () => {
  const tutorialCategories = [
    {
      title: "Getting Started",
      tutorials: [
        {
          title: "Platform Overview",
          description: "Complete walkthrough of WhatsX features and capabilities",
          type: "video",
          duration: "8 min",
          level: "Beginner",
          rating: 4.9,
          videoUrl: "https://www.loom.com/share/c1f4cf1f5d5b4c4d9c5e745032b2a081?sid=666100aa-4de5-4d25-92fc-8f4605f7b862"
        },
        {
          title: "Creating Your First Form",
          description: "Step-by-step guide to building your first WhatsApp form",
          type: "video",
          duration: "12 min",
          level: "Beginner",
          rating: 4.8,
          videoUrl: "https://www.loom.com/share/c1f4cf1f5d5b4c4d9c5e745032b2a081?sid=666100aa-4de5-4d25-92fc-8f4605f7b862"
        },
        {
          title: "WhatsApp Integration Setup",
          description: "How to connect your WhatsApp Business account",
          type: "article",
          duration: "5 min read",
          level: "Beginner",
          rating: 4.7
        }
      ]
    },
    {
      title: "Form Building",
      tutorials: [
        {
          title: "Advanced Form Fields",
          description: "Using conditional logic, validation, and custom fields",
          type: "video",
          duration: "15 min",
          level: "Intermediate",
          rating: 4.9,
          videoUrl: "https://www.loom.com/share/c1f4cf1f5d5b4c4d9c5e745032b2a081?sid=666100aa-4de5-4d25-92fc-8f4605f7b862"
        },
        {
          title: "Custom Styling Guide",
          description: "Brand your forms with custom colors, fonts, and layouts",
          type: "article",
          duration: "10 min read",
          level: "Intermediate",
          rating: 4.6
        },
        {
          title: "Mobile Optimization",
          description: "Ensuring your forms work perfectly on all devices",
          type: "video",
          duration: "8 min",
          level: "Beginner",
          rating: 4.8,
          videoUrl: "https://www.loom.com/share/c1f4cf1f5d5b4c4d9c5e745032b2a081?sid=666100aa-4de5-4d25-92fc-8f4605f7b862"
        }
      ]
    },
    {
      title: "AI Agent",
      tutorials: [
        {
          title: "AI Agent Setup",
          description: "Configure your AI assistant for automated responses",
          type: "video",
          duration: "10 min",
          level: "Intermediate",
          rating: 4.7,
          videoUrl: "https://www.loom.com/share/c1f4cf1f5d5b4c4d9c5e745032b2a081?sid=666100aa-4de5-4d25-92fc-8f4605f7b862"
        },
        {
          title: "Training Your AI Agent",
          description: "Best practices for improving AI responses",
          type: "article",
          duration: "12 min read",
          level: "Advanced",
          rating: 4.8
        },
        {
          title: "AI Response Templates",
          description: "Creating and managing response templates",
          type: "video",
          duration: "7 min",
          level: "Intermediate",
          rating: 4.6,
          videoUrl: "https://www.loom.com/share/c1f4cf1f5d5b4c4d9c5e745032b2a081?sid=666100aa-4de5-4d25-92fc-8f4605f7b862"
        }
      ]
    },
    {
      title: "Integration & Deployment",
      tutorials: [
        {
          title: "Embedding Forms on Your Website",
          description: "Different methods to add forms to your website",
          type: "article",
          duration: "8 min read",
          level: "Intermediate",
          rating: 4.9
        },
        {
          title: "Webhook Configuration",
          description: "Setting up webhooks for real-time data sync",
          type: "video",
          duration: "12 min",
          level: "Advanced",
          rating: 4.7,
          videoUrl: "https://www.loom.com/share/c1f4cf1f5d5b4c4d9c5e745032b2a081?sid=666100aa-4de5-4d25-92fc-8f4605f7b862"
        },
        {
          title: "Third-party Integrations",
          description: "Connecting with CRM, email marketing, and other tools",
          type: "article",
          duration: "15 min read",
          level: "Advanced",
          rating: 4.8
        }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-700 border-green-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Advanced":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Tutorials</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn how to master WhatsX with our comprehensive tutorials. 
            From basic setup to advanced features, we've got you covered.
          </p>
        </div>

        <div className="space-y-12">
          {tutorialCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">{category.title}</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tutorials.map((tutorial, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                          {tutorial.type === "video" ? (
                            <Video className="w-6 h-6 text-blue-600" />
                          ) : (
                            <FileText className="w-6 h-6 text-purple-600" />
                          )}
                        </div>
                        <Badge className={getLevelColor(tutorial.level)}>
                          {tutorial.level}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-gray-800">{tutorial.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 text-sm">{tutorial.description}</p>
                      
                      <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {tutorial.duration}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-500" />
                          {tutorial.rating}
                        </div>
                      </div>
                      
                      {tutorial.type === "video" && tutorial.videoUrl ? (
                        <VideoPopup
                          videoUrl={tutorial.videoUrl}
                          buttonText="Watch Tutorial"
                          buttonVariant="default"
                          buttonSize="sm"
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        />
                      ) : (
                        <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          <Book className="w-4 h-4 mr-2" />
                          Read Tutorial
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path CTA */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-8 text-center">
            <Book className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Want a Structured Learning Path?</h3>
            <p className="text-gray-600 mb-6">
              Follow our recommended learning sequence to master WhatsX efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/help-center">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  Start Learning Path
                </Button>
              </Link>
              <Link to="/documentation">
                <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
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

export default Tutorials;
