
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, Trash2, Eye, Code, Copy, Palette, Type, Layout } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
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
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'fields' | 'style' | 'preview' | 'code'>('fields');
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Form Builder</h1>
          </div>
          <Badge className="bg-green-100 text-green-700">
            No-Code Editor
          </Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Panel - Builder */}
          <div className="lg:col-span-2 space-y-6">
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
                    placeholder="1234567890"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              <Button
                variant={activeTab === 'fields' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('fields')}
                className="flex-1"
              >
                <Layout className="w-4 h-4 mr-2" />
                Fields
              </Button>
              <Button
                variant={activeTab === 'style' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('style')}
                className="flex-1"
              >
                <Palette className="w-4 h-4 mr-2" />
                Style
              </Button>
              <Button
                variant={activeTab === 'preview' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('preview')}
                className="flex-1"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button
                variant={activeTab === 'code' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('code')}
                className="flex-1"
              >
                <Code className="w-4 h-4 mr-2" />
                Code
              </Button>
            </div>

            {/* Tab Content */}
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
            <div className="sticky top-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Live Preview</CardTitle>
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
