
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, MessageCircle, Zap, Bot, ShoppingCart, Briefcase, Heart, Users, Calendar, FileText, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { FormPreview } from "@/components/form-builder/FormPreview";
import { FormField, FormStyle } from "@/pages/FormBuilder";
import { useToast } from "@/hooks/use-toast";

const Templates = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);

  const defaultFormStyle: FormStyle = {
    primaryColor: "#3b82f6",
    backgroundColor: "#ffffff",
    textColor: "#1f2937",
    fontFamily: "Inter, sans-serif",
    borderRadius: "8px",
    spacing: "1rem",
    buttonText: "Send to WhatsApp"
  };

  const templateCategories = [
    {
      id: "lead-generation",
      title: "Lead Generation",
      icon: Zap,
      templates: [
        {
          id: "contact-form",
          name: "Contact Form",
          description: "Simple contact form with name, email, and message fields",
          preview: "contact-form.jpg",
          popular: true,
          fields: [
            { id: "1", type: "text" as const, label: "Full Name", required: true, placeholder: "Enter your full name" },
            { id: "2", type: "email" as const, label: "Email Address", required: true, placeholder: "Enter your email" },
            { id: "3", type: "textarea" as const, label: "Message", required: true, placeholder: "How can we help you?" }
          ]
        },
        {
          id: "quote-request",
          name: "Quote Request",
          description: "Detailed quote request form for service providers",
          preview: "quote-request.jpg",
          popular: false,
          fields: [
            { id: "1", type: "text" as const, label: "Company Name", required: true, placeholder: "Your company name" },
            { id: "2", type: "email" as const, label: "Email", required: true, placeholder: "Business email" },
            { id: "3", type: "select" as const, label: "Service Type", required: true, options: ["Web Development", "Mobile App", "E-commerce", "Consulting"] },
            { id: "4", type: "textarea" as const, label: "Project Details", required: true, placeholder: "Describe your project requirements" }
          ]
        },
        {
          id: "newsletter-signup",
          name: "Newsletter Signup",
          description: "Clean newsletter subscription form with email validation",
          preview: "newsletter.jpg",
          popular: true,
          fields: [
            { id: "1", type: "text" as const, label: "First Name", required: true, placeholder: "Your first name" },
            { id: "2", type: "email" as const, label: "Email Address", required: true, placeholder: "Enter your email" },
            { id: "3", type: "checkbox" as const, label: "I agree to receive marketing emails", required: true }
          ]
        }
      ]
    },
    {
      id: "ecommerce",
      title: "E-commerce",
      icon: ShoppingCart,
      templates: [
        {
          id: "product-inquiry",
          name: "Product Inquiry",
          description: "Product inquiry form with product selection and details",
          preview: "product-inquiry.jpg",
          popular: true,
          fields: [
            { id: "1", type: "text" as const, label: "Name", required: true, placeholder: "Your name" },
            { id: "2", type: "email" as const, label: "Email", required: true, placeholder: "Your email" },
            { id: "3", type: "select" as const, label: "Product", required: true, options: ["Laptop", "Smartphone", "Tablet", "Accessories"] },
            { id: "4", type: "textarea" as const, label: "Questions", required: false, placeholder: "Any specific questions?" }
          ]
        },
        {
          id: "order-form",
          name: "Order Form",
          description: "Complete order form with quantity and shipping options",
          preview: "order-form.jpg",
          popular: false,
          fields: [
            { id: "1", type: "text" as const, label: "Customer Name", required: true, placeholder: "Full name" },
            { id: "2", type: "email" as const, label: "Email", required: true, placeholder: "Email address" },
            { id: "3", type: "select" as const, label: "Product", required: true, options: ["Product A", "Product B", "Product C"] },
            { id: "4", type: "text" as const, label: "Quantity", required: true, placeholder: "How many?" },
            { id: "5", type: "textarea" as const, label: "Shipping Address", required: true, placeholder: "Complete address" }
          ]
        },
        {
          id: "customer-feedback",
          name: "Customer Feedback",
          description: "Product review and feedback collection form",
          preview: "feedback.jpg",
          popular: false,
          fields: [
            { id: "1", type: "text" as const, label: "Name", required: true, placeholder: "Your name" },
            { id: "2", type: "email" as const, label: "Email", required: true, placeholder: "Your email" },
            { id: "3", type: "radio" as const, label: "Rating", required: true, options: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"] },
            { id: "4", type: "textarea" as const, label: "Feedback", required: true, placeholder: "Share your experience" }
          ]
        }
      ]
    },
    {
      id: "business",
      title: "Business Services",
      icon: Briefcase,
      templates: [
        {
          id: "consultation-booking",
          name: "Consultation Booking",
          description: "Professional consultation booking with time slots",
          preview: "consultation.jpg",
          popular: true,
          fields: [
            { id: "1", type: "text" as const, label: "Full Name", required: true, placeholder: "Your full name" },
            { id: "2", type: "email" as const, label: "Email", required: true, placeholder: "Email address" },
            { id: "3", type: "select" as const, label: "Service", required: true, options: ["Business Consulting", "Legal Advice", "Financial Planning", "Marketing Strategy"] },
            { id: "4", type: "select" as const, label: "Preferred Time", required: true, options: ["Morning (9-12)", "Afternoon (12-5)", "Evening (5-8)"] },
            { id: "5", type: "textarea" as const, label: "Brief Description", required: true, placeholder: "What would you like to discuss?" }
          ]
        },
        {
          id: "service-request",
          name: "Service Request",
          description: "General service request form with detailed requirements",
          preview: "service-request.jpg",
          popular: false,
          fields: [
            { id: "1", type: "text" as const, label: "Company Name", required: true, placeholder: "Your company" },
            { id: "2", type: "email" as const, label: "Contact Email", required: true, placeholder: "Business email" },
            { id: "3", type: "select" as const, label: "Service Category", required: true, options: ["IT Support", "Maintenance", "Consulting", "Training"] },
            { id: "4", type: "textarea" as const, label: "Requirements", required: true, placeholder: "Detailed service requirements" }
          ]
        },
        {
          id: "partnership-inquiry",
          name: "Partnership Inquiry",
          description: "Business partnership and collaboration inquiry form",
          preview: "partnership.jpg",
          popular: false,
          fields: [
            { id: "1", type: "text" as const, label: "Company Name", required: true, placeholder: "Your company name" },
            { id: "2", type: "text" as const, label: "Contact Person", required: true, placeholder: "Your name" },
            { id: "3", type: "email" as const, label: "Email", required: true, placeholder: "Business email" },
            { id: "4", type: "select" as const, label: "Partnership Type", required: true, options: ["Strategic Alliance", "Joint Venture", "Supplier Partnership", "Technology Partnership"] },
            { id: "5", type: "textarea" as const, label: "Proposal Details", required: true, placeholder: "Describe your partnership proposal" }
          ]
        }
      ]
    },
    {
      id: "events",
      title: "Events & Booking",
      icon: Calendar,
      templates: [
        {
          id: "event-registration",
          name: "Event Registration",
          description: "Event registration form with attendee details",
          preview: "event-registration.jpg",
          popular: true,
          fields: [
            { id: "1", type: "text" as const, label: "Full Name", required: true, placeholder: "Your full name" },
            { id: "2", type: "email" as const, label: "Email", required: true, placeholder: "Email address" },
            { id: "3", type: "text" as const, label: "Company/Organization", required: false, placeholder: "Company name" },
            { id: "4", type: "select" as const, label: "Ticket Type", required: true, options: ["General Admission", "VIP", "Student", "Group"] },
            { id: "5", type: "textarea" as const, label: "Special Requirements", required: false, placeholder: "Dietary restrictions, accessibility needs, etc." }
          ]
        },
        {
          id: "appointment-booking",
          name: "Appointment Booking",
          description: "Simple appointment booking with date and time selection",
          preview: "appointment.jpg",
          popular: true,
          fields: [
            { id: "1", type: "text" as const, label: "Name", required: true, placeholder: "Your name" },
            { id: "2", type: "email" as const, label: "Email", required: true, placeholder: "Email address" },
            { id: "3", type: "select" as const, label: "Service", required: true, options: ["Consultation", "Follow-up", "New Patient", "Emergency"] },
            { id: "4", type: "select" as const, label: "Preferred Date", required: true, options: ["This Week", "Next Week", "Flexible"] },
            { id: "5", type: "textarea" as const, label: "Notes", required: false, placeholder: "Additional information" }
          ]
        },
        {
          id: "workshop-signup",
          name: "Workshop Signup",
          description: "Workshop registration with skill level and preferences",
          preview: "workshop.jpg",
          popular: false,
          fields: [
            { id: "1", type: "text" as const, label: "Full Name", required: true, placeholder: "Your full name" },
            { id: "2", type: "email" as const, label: "Email", required: true, placeholder: "Email address" },
            { id: "3", type: "select" as const, label: "Experience Level", required: true, options: ["Beginner", "Intermediate", "Advanced"] },
            { id: "4", type: "select" as const, label: "Workshop Topic", required: true, options: ["Digital Marketing", "Web Development", "Data Science", "Design Thinking"] },
            { id: "5", type: "textarea" as const, label: "Learning Goals", required: false, placeholder: "What do you hope to learn?" }
          ]
        }
      ]
    }
  ];

  const handleUseTemplate = (template: any) => {
    // Store template data in localStorage for the form builder
    const templateData = {
      title: template.name,
      fields: template.fields,
      formStyle: defaultFormStyle
    };
    
    localStorage.setItem('selectedTemplate', JSON.stringify(templateData));
    
    toast({
      title: "Template Selected!",
      description: `${template.name} template is ready to customize.`,
    });
    
    // Navigate to form builder with template
    navigate('/form-builder?template=' + template.id);
  };

  const handlePreviewTemplate = (template: any) => {
    setSelectedTemplate(template);
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
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex-1"
                          onClick={() => handleUseTemplate(template)}
                        >
                          Use Template
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="border-blue-200 text-blue-700 hover:bg-blue-50"
                              onClick={() => handlePreviewTemplate(template)}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md">
                            <DialogHeader>
                              <DialogTitle>{template.name} Preview</DialogTitle>
                            </DialogHeader>
                            <div className="mt-4">
                              <FormPreview
                                title={template.name}
                                fields={template.fields}
                                formStyle={defaultFormStyle}
                                whatsappNumber="1234567890"
                                compact={false}
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
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
