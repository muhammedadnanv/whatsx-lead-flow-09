
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, Eye, Code, Palette, Layout, Settings, Smartphone } from "lucide-react";
import { FormFieldEditor } from "@/components/form-builder/FormFieldEditor";
import { FormPreview } from "@/components/form-builder/FormPreview";
import { StyleEditor } from "@/components/form-builder/StyleEditor";
import { CodeGenerator } from "@/components/form-builder/CodeGenerator";
import { Link } from "react-router-dom";

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
  borderRadius: string;
  fontFamily: string;
  spacing: string;
  buttonText: string;
}

const FormBuilder = () => {
  const [activeTab, setActiveTab] = useState<'fields' | 'style' | 'preview' | 'code'>('fields');
  const [showMobilePreview, setShowMobilePreview] = useState(false);
  const [formTitle, setFormTitle] = useState("Get In Touch!");
  const [whatsappNumber, setWhatsappNumber] = useState("1234567890");
  const [fields, setFields] = useState<FormField[]>([
    {
      id: '1',
      type: 'text',
      label: 'Full Name',
      placeholder: 'John Doe',
      required: true
    },
    {
      id: '2',
      type: 'email',
      label: 'Email Address',
      placeholder: 'john@example.com',
      required: true
    },
    {
      id: '3',
      type: 'textarea',
      label: 'Your Message',
      placeholder: 'How can we help you?',
      required: true
    }
  ]);

  const [formStyle, setFormStyle] = useState<FormStyle>({
    primaryColor: '#10b981',
    backgroundColor: '#ffffff',
    textColor: '#1f2937',
    borderRadius: '8px',
    fontFamily: 'Inter, sans-serif',
    spacing: '1rem',
    buttonText: 'Send to WhatsApp'
  });

  const addField = (type: FormField['type']) => {
    const newField: FormField = {
      id: Date.now().toString(),
      type,
      label: `New ${type.charAt(0).toUpperCase() + type.slice(1)}`,
      placeholder: type === 'textarea' ? 'Enter your message...' : `Enter ${type}...`,
      required: false,
      options: type === 'select' || type === 'radio' ? ['Option 1', 'Option 2'] : undefined
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

  const tabs = [
    { id: 'fields', label: 'Fields', icon: Layout },
    { id: 'style', label: 'Style', icon: Palette },
    { id: 'preview', label: 'Preview', icon: Eye },
    { id: 'code', label: 'Code', icon: Code }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/">
                <Button variant="ghost" size="sm" className="min-h-[44px] min-w-[44px]">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Back</span>
                </Button>
              </Link>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">Form Builder</h1>
            </div>
            
            <div className="flex items-center space-x-2">
              <Badge className="bg-green-100 text-green-700 hidden sm:inline-flex">
                No-Code Editor
              </Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowMobilePreview(!showMobilePreview)}
                className="md:hidden min-h-[44px] min-w-[44px]"
              >
                <Smartphone className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-4 md:py-6">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          {/* Form Settings Card - Mobile */}
          <Card className="mb-4">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-lg">
                <Settings className="w-5 h-5 mr-2" />
                Form Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="formTitle-mobile">Form Title</Label>
                <Input
                  id="formTitle-mobile"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="Enter form title"
                  className="text-base"
                />
              </div>
              <div>
                <Label htmlFor="whatsappNumber-mobile">WhatsApp Number</Label>
                <Input
                  id="whatsappNumber-mobile"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  placeholder="1234567890"
                  className="text-base"
                />
              </div>
            </CardContent>
          </Card>

          {/* Mobile Tab Navigation */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? 'default' : 'outline'}
                onClick={() => setActiveTab(tab.id as any)}
                className="flex items-center justify-center py-3 text-sm min-h-[44px]"
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Mobile Tab Content */}
          <div className="space-y-4">
            {activeTab === 'fields' && (
              <FormFieldEditor
                fields={fields}
                onAddField={addField}
                onUpdateField={updateField}
                onRemoveField={removeField}
              />
            )}

            {activeTab === 'style' && (
              <StyleEditor
                formStyle={formStyle}
                onUpdateStyle={updateStyle}
              />
            )}

            {activeTab === 'preview' && (
              <FormPreview
                title={formTitle}
                fields={fields}
                formStyle={formStyle}
                whatsappNumber={whatsappNumber}
              />
            )}

            {activeTab === 'code' && (
              <CodeGenerator
                title={formTitle}
                fields={fields}
                formStyle={formStyle}
                whatsappNumber={whatsappNumber}
              />
            )}
          </div>

          {/* Mobile Preview Toggle */}
          {showMobilePreview && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg p-4 max-w-sm w-full max-h-[90vh] overflow-auto">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Mobile Preview</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowMobilePreview(false)}
                    className="min-h-[44px] min-w-[44px]"
                  >
                    ×
                  </Button>
                </div>
                <FormPreview
                  title={formTitle}
                  fields={fields}
                  formStyle={formStyle}
                  whatsappNumber={whatsappNumber}
                  compact
                />
              </div>
            </div>
          )}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
          {/* Left Panel - Builder */}
          <div className="lg:col-span-2 space-y-6">
            {/* Form Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Form Settings
                </CardTitle>
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
                    placeholder="1234567890"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Desktop Tabs */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveTab(tab.id as any)}
                  className="flex-1"
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </Button>
              ))}
            </div>

            {/* Desktop Tab Content */}
            {activeTab === 'fields' && (
              <FormFieldEditor
                fields={fields}
                onAddField={addField}
                onUpdateField={updateField}
                onRemoveField={removeField}
              />
            )}

            {activeTab === 'style' && (
              <StyleEditor
                formStyle={formStyle}
                onUpdateStyle={updateStyle}
              />
            )}

            {activeTab === 'preview' && (
              <FormPreview
                title={formTitle}
                fields={fields}
                formStyle={formStyle}
                whatsappNumber={whatsappNumber}
              />
            )}

            {activeTab === 'code' && (
              <CodeGenerator
                title={formTitle}
                fields={fields}
                formStyle={formStyle}
                whatsappNumber={whatsappNumber}
              />
            )}
          </div>

          {/* Right Panel - Live Preview */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    Live Preview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <FormPreview
                      title={formTitle}
                      fields={fields}
                      formStyle={formStyle}
                      whatsappNumber={whatsappNumber}
                      compact
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
