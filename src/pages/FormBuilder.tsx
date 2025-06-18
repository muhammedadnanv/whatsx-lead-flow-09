import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, MessageCircle, Save, Download, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormFieldEditor } from "@/components/form-builder/FormFieldEditor";
import { FormPreview } from "@/components/form-builder/FormPreview";
import { StyleEditor } from "@/components/form-builder/StyleEditor";
import { CodeGenerator } from "@/components/form-builder/CodeGenerator";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";

export interface FormField {
  id: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'checkbox' | 'radio';
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
}

export interface FormStyle {
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
  borderRadius: string;
  spacing: string;
  buttonText: string;
}

const FormBuilder = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [formTitle, setFormTitle] = useState("Contact Form");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [fields, setFields] = useState<FormField[]>([]);
  const [formStyle, setFormStyle] = useState<FormStyle>({
    primaryColor: "#10b981",
    backgroundColor: "#ffffff",
    textColor: "#1f2937",
    fontFamily: "Inter, sans-serif",
    borderRadius: "8px",
    spacing: "1rem",
    buttonText: "Send to WhatsApp"
  });
  const [showPreview, setShowPreview] = useState(true);

  // Load template if specified in URL
  useEffect(() => {
    const templateId = searchParams.get('template');
    if (templateId) {
      const templateData = localStorage.getItem('selectedTemplate');
      if (templateData) {
        try {
          const parsed = JSON.parse(templateData);
          setFormTitle(parsed.title);
          setFields(parsed.fields);
          setFormStyle(parsed.formStyle);
          localStorage.removeItem('selectedTemplate'); // Clean up
          
          toast({
            title: "Template Loaded!",
            description: "You can now customize your form.",
          });
        } catch (error) {
          console.error('Error loading template:', error);
        }
      }
    }
  }, [searchParams, toast]);

  const addField = (type: FormField['type']) => {
    const newField: FormField = {
      id: Date.now().toString(),
      type,
      label: `${type.charAt(0).toUpperCase() + type.slice(1)} Field`,
      required: false,
      placeholder: type === 'email' ? 'Enter your email' : `Enter ${type}`,
      options: type === 'select' || type === 'radio' ? ['Option 1', 'Option 2', 'Option 3'] : undefined
    };
    setFields([...fields, newField]);
  };

  const updateField = (id: string, updates: Partial<FormField>) => {
    setFields(fields.map(field => 
      field.id === id ? { ...field, ...updates } : field
    ));
  };

  const removeField = (id: string) => {
    setFields(fields.filter(field => field.id !== id));
  };

  const updateStyle = (updates: Partial<FormStyle>) => {
    setFormStyle({ ...formStyle, ...updates });
  };

  const handleSave = () => {
    const formData = {
      title: formTitle,
      fields,
      formStyle,
      whatsappNumber,
      createdAt: new Date().toISOString()
    };
    
    // Save to localStorage (in a real app, this would be saved to a database)
    const savedForms = JSON.parse(localStorage.getItem('savedForms') || '[]');
    savedForms.push({ ...formData, id: Date.now().toString() });
    localStorage.setItem('savedForms', JSON.stringify(savedForms));
    
    toast({
      title: "Form Saved!",
      description: "Your form has been saved successfully.",
    });
  };

  return (
    <>
      <SEOHead 
        title="Form Builder - WhatsX | Create Custom Forms for WhatsApp"
        description="Build custom forms that integrate seamlessly with WhatsApp. Drag-and-drop interface, real-time preview, and instant messaging integration."
        keywords="form builder, WhatsApp forms, custom forms, lead generation, contact forms"
      />
      
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
            
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPreview(!showPreview)}
                className="lg:hidden"
              >
                {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
              
              <Button onClick={handleSave} variant="outline" size="sm">
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              
              <Link to="/">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Back</span>
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left Panel - Form Builder */}
            <div className={`space-y-6 ${showPreview ? 'hidden lg:block' : ''}`}>
              {/* Form Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Form Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="formTitle">Form Title</Label>
                    <Input
                      id="formTitle"
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                      placeholder="Enter form title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="whatsappNumber">WhatsApp Number</Label>
                    <Input
                      id="whatsappNumber"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      placeholder="e.g., +1234567890"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Form Builder Tabs */}
              <Tabs defaultValue="fields" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="fields">Fields</TabsTrigger>
                  <TabsTrigger value="style">Style</TabsTrigger>
                  <TabsTrigger value="export">Export</TabsTrigger>
                </TabsList>
                
                <TabsContent value="fields">
                  <FormFieldEditor
                    fields={fields}
                    onAddField={addField}
                    onUpdateField={updateField}
                    onRemoveField={removeField}
                  />
                </TabsContent>
                
                <TabsContent value="style">
                  <StyleEditor
                    formStyle={formStyle}
                    onUpdateStyle={updateStyle}
                  />
                </TabsContent>
                
                <TabsContent value="export">
                  <CodeGenerator
                    title={formTitle}
                    fields={fields}
                    formStyle={formStyle}
                    whatsappNumber={whatsappNumber}
                  />
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Panel - Live Preview */}
            <div className={`${!showPreview ? 'hidden lg:block' : ''}`}>
              <div className="sticky top-24">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Live Preview
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowPreview(!showPreview)}
                        className="lg:hidden"
                      >
                        <EyeOff className="w-4 h-4" />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FormPreview
                      title={formTitle}
                      fields={fields}
                      formStyle={formStyle}
                      whatsappNumber={whatsappNumber}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormBuilder;
