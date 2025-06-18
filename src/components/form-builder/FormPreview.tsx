import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MessageCircle, X, Bot, Send, Minimize2 } from "lucide-react";
import { FormField, FormStyle } from "@/pages/FormBuilder";
import { AIAgentConfig } from "./AIAgentSetup";
import { BrandWatermark } from "./BrandWatermark";
import { useToast } from "@/hooks/use-toast";

interface FormPreviewProps {
  title: string;
  fields: FormField[];
  formStyle: FormStyle;
  whatsappNumber: string;
  aiAgentConfig?: AIAgentConfig;
  compact?: boolean;
}

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const FormPreview = ({ title, fields, formStyle, whatsappNumber, aiAgentConfig, compact = false }: FormPreviewProps) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [isAITyping, setIsAITyping] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `New Lead from WhatsX Form,${Object.entries(formData).map(([key, value]) => {
      const field = fields.find(f => f.id === key);
      return `${field?.label}: ${value}`;
    }).join(',')}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    if (!compact) {
      window.open(whatsappUrl, '_blank');
    }
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const updateFormData = (fieldId: string, value: any) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }));
  };

  const sendChatMessage = async () => {
    if (!chatInput.trim() || !aiAgentConfig?.geminiApiKey) {
      toast({
        title: "Error",
        description: "Please enter a message and ensure API key is configured.",
        variant: "destructive",
      });
      return;
    }

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: chatInput,
      isUser: true,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setChatInput("");
    setIsAITyping(true);

    try {
      console.log('Sending message to Gemini API...');
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${aiAgentConfig.geminiApiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${aiAgentConfig.systemPrompt}\n\nForm context: ${title}\nFields: ${fields.map(f => f.label).join(', ')}\n\nUser question: ${chatInput}`
            }]
          }],
          generationConfig: {
            temperature: aiAgentConfig.temperature,
            maxOutputTokens: aiAgentConfig.maxTokens,
          }
        }),
      });

      console.log('API Response status:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('API Response:', data);
        const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that request.";
        
        const aiMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: aiResponse,
          isUser: false,
          timestamp: new Date()
        };

        setChatMessages(prev => [...prev, aiMessage]);
        
        toast({
          title: "AI Response",
          description: "Message sent successfully!",
        });
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error:', errorData);
        throw new Error(`API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Please check your API key and try again later.",
        isUser: false,
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: "Connection Error",
        description: "Please check your API key and try again.",
        variant: "destructive",
      });
    } finally {
      setIsAITyping(false);
    }
  };

  const initializeChat = () => {
    if (!aiAgentConfig?.enabled) {
      toast({
        title: "AI Agent Disabled",
        description: "Please enable the AI agent first.",
        variant: "destructive",
      });
      return;
    }

    if (!aiAgentConfig?.geminiApiKey) {
      toast({
        title: "API Key Missing",
        description: "Please configure your Gemini API key first.",
        variant: "destructive",
      });
      return;
    }

    if (chatMessages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: "welcome",
        text: aiAgentConfig.welcomeMessage,
        isUser: false,
        timestamp: new Date()
      };
      setChatMessages([welcomeMessage]);
    }
    setShowAIChat(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendChatMessage();
    }
  };

  const renderField = (field: FormField) => {
    const baseStyles = {
      fontFamily: formStyle.fontFamily,
      color: formStyle.textColor,
    };

    const inputStyles = {
      ...baseStyles,
      borderRadius: formStyle.borderRadius,
      padding: formStyle.spacing,
    };

    switch (field.type) {
      case 'text':
      case 'email':
        return (
          <Input
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.id] || ''}
            onChange={(e) => updateFormData(field.id, e.target.value)}
            required={field.required}
            style={inputStyles}
            className="mt-1"
          />
        );

      case 'textarea':
        return (
          <Textarea
            placeholder={field.placeholder}
            value={formData[field.id] || ''}
            onChange={(e) => updateFormData(field.id, e.target.value)}
            required={field.required}
            style={inputStyles}
            className="mt-1"
            rows={3}
          />
        );

      case 'select':
        return (
          <Select
            value={formData[field.id] || ''}
            onValueChange={(value) => updateFormData(field.id, value)}
            required={field.required}
          >
            <SelectTrigger className="mt-1" style={inputStyles}>
              <SelectValue placeholder={field.placeholder || 'Select an option'} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option, index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'checkbox':
        return (
          <div className="flex items-center space-x-2 mt-1">
            <Checkbox
              id={field.id}
              checked={formData[field.id] || false}
              onCheckedChange={(checked) => updateFormData(field.id, checked)}
              required={field.required}
            />
            <Label htmlFor={field.id} style={baseStyles}>
              {field.label}
            </Label>
          </div>
        );

      case 'radio':
        return (
          <RadioGroup
            value={formData[field.id] || ''}
            onValueChange={(value) => updateFormData(field.id, value)}
            className="mt-1"
            required={field.required}
          >
            {field.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${field.id}-${index}`} />
                <Label htmlFor={`${field.id}-${index}`} style={baseStyles}>
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );

      default:
        return null;
    }
  };

  const containerStyle = {
    backgroundColor: formStyle.backgroundColor,
    color: formStyle.textColor,
    fontFamily: formStyle.fontFamily,
    borderRadius: formStyle.borderRadius,
    padding: formStyle.spacing,
  };

  const buttonStyle = {
    backgroundColor: formStyle.primaryColor,
    borderRadius: formStyle.borderRadius,
    fontFamily: formStyle.fontFamily,
  };

  if (compact) {
    return (
      <div className="relative">
        <div style={containerStyle} className="p-4 border rounded-lg space-y-3 max-w-sm relative">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm" style={{ color: formStyle.textColor }}>
              {title}
            </h3>
            <BrandWatermark size="sm" position="inline" className="opacity-60" />
          </div>
          {fields.slice(0, 2).map((field) => (
            <div key={field.id} className="space-y-1">
              {field.type !== 'checkbox' && (
                <Label className="text-xs font-medium" style={{ color: formStyle.textColor }}>
                  {field.label} {field.required && '*'}
                </Label>
              )}
              <div className="text-xs">
                {renderField(field)}
              </div>
            </div>
          ))}
          {fields.length > 2 && (
            <p className="text-xs text-gray-500">
              +{fields.length - 2} more fields
            </p>
          )}
          <Button
            size="sm"
            className="w-full text-xs"
            style={buttonStyle}
          >
            <MessageCircle className="w-3 h-3 mr-1" />
            {formStyle.buttonText}
          </Button>
          
          {/* AI Chat Button - Compact */}
          {aiAgentConfig?.enabled && (
            <Button
              onClick={initializeChat}
              size="sm"
              variant="outline"
              className="w-full text-xs border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <Bot className="w-3 h-3 mr-1" />
              Chat with {aiAgentConfig.agentName}
            </Button>
          )}
        </div>

        {/* AI Chat Widget - Mobile */}
        {showAIChat && aiAgentConfig?.enabled && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center p-4">
            <div className="bg-white rounded-t-2xl w-full max-w-sm h-96 flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center space-x-2">
                  <Bot className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-blue-900">{aiAgentConfig.agentName}</span>
                </div>
                <Button
                  onClick={() => setShowAIChat(false)}
                  variant="ghost"
                  size="sm"
                  className="min-h-[32px] min-w-[32px]"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.isUser
                          ? 'bg-blue-600 text-white rounded-br-sm'
                          : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                {isAITyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-bl-sm text-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask me anything..."
                    onKeyPress={handleKeyPress}
                    className="flex-1 text-sm"
                  />
                  <Button
                    onClick={sendChatMessage}
                    disabled={!chatInput.trim() || isAITyping}
                    size="sm"
                    className="min-h-[40px] min-w-[40px] bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-black/50 p-4 rounded-lg relative">
      <div style={containerStyle} className="max-w-md mx-auto p-6 shadow-2xl relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold" style={{ color: formStyle.textColor }}>
            {title}
          </h3>
          <div className="flex items-center space-x-2">
            <BrandWatermark size="sm" position="inline" className="opacity-70" />
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {isSubmitted && (
          <div className="mb-4 p-3 bg-green-100 border border-green-300 rounded-md">
            <p className="text-green-800 text-sm">
              Form submitted successfully! {!compact && 'Check WhatsApp for the message.'}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field.id} className="space-y-1">
              {field.type !== 'checkbox' && (
                <Label className="font-medium" style={{ color: formStyle.textColor }}>
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </Label>
              )}
              {renderField(field)}
            </div>
          ))}

          <Button
            type="submit"
            className="w-full text-white font-medium"
            style={buttonStyle}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            {formStyle.buttonText}
          </Button>
        </form>

        {/* AI Chat Widget - Desktop */}
        {aiAgentConfig?.enabled && (
          <div className="mt-4">
            <Button
              onClick={initializeChat}
              variant="outline"
              className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <Bot className="w-4 h-4 mr-2" />
              Need help? Chat with {aiAgentConfig.agentName}
            </Button>
          </div>
        )}

        <p className="text-xs text-gray-500 mt-3 text-center">
          This message will be sent directly to WhatsApp • Powered by WhatsX
        </p>
      </div>

      {/* AI Chat Widget - Desktop */}
      {showAIChat && aiAgentConfig?.enabled && !compact && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-900">{aiAgentConfig.agentName}</span>
            </div>
            <Button
              onClick={() => setShowAIChat(false)}
              variant="ghost"
              size="sm"
              className="min-h-[32px] min-w-[32px]"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {chatMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.isUser
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isAITyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-bl-sm text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask me anything..."
                onKeyPress={handleKeyPress}
                className="flex-1 text-sm"
              />
              <Button
                onClick={sendChatMessage}
                disabled={!chatInput.trim() || isAITyping}
                size="sm"
                className="min-h-[40px] min-w-[40px] bg-blue-600 hover:bg-blue-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
