
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Key, MessageSquare, Settings, Sparkles, AlertCircle, CheckCircle, Template } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AIAgentTemplates } from "./AIAgentTemplates";

export interface AIAgentConfig {
  enabled: boolean;
  geminiApiKey: string;
  agentName: string;
  systemPrompt: string;
  welcomeMessage: string;
  temperature: number;
  maxTokens: number;
}

interface AIAgentSetupProps {
  config: AIAgentConfig;
  onUpdateConfig: (updates: Partial<AIAgentConfig>) => void;
}

export const AIAgentSetup = ({ config, onUpdateConfig }: AIAgentSetupProps) => {
  const { toast } = useToast();
  const [isTestingConnection, setIsTestingConnection] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const testGeminiConnection = async () => {
    if (!config.geminiApiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your Gemini API key first.",
        variant: "destructive",
      });
      return;
    }

    setIsTestingConnection(true);
    setConnectionStatus('idle');
    
    try {
      console.log('Testing Gemini API connection...');
      
      // Use the correct model name for Gemini
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${config.geminiApiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: "Hello, this is a test message. Please respond with 'Connection successful'."
            }]
          }],
          generationConfig: {
            temperature: 0.1,
            maxOutputTokens: 50
          }
        }),
      });

      console.log('API Response status:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log('API Response data:', data);
        
        setConnectionStatus('success');
        toast({
          title: "Connection Successful! ✨",
          description: "Your Gemini API key is working correctly.",
        });
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error:', errorData);
        setConnectionStatus('error');
        throw new Error(`API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Connection test failed:', error);
      setConnectionStatus('error');
      toast({
        title: "Connection Failed",
        description: "Please check your API key and try again.",
        variant: "destructive",
      });
    } finally {
      setIsTestingConnection(false);
    }
  };

  const handleTemplateSelect = (template: any) => {
    onUpdateConfig({
      ...template.config,
      enabled: true
    });
    toast({
      title: "Template Applied! 🎉",
      description: `${template.name} template has been applied to your AI agent.`,
    });
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Bot className="w-5 h-5 mr-2 text-blue-600" />
              AI Agent Configuration
            </div>
            <Badge variant="outline" className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200">
              <Sparkles className="w-3 h-3 mr-1" />
              Powered by Gemini
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Enable AI Agent */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
            <div className="flex items-center space-x-3">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <div>
                <Label className="text-base font-medium text-blue-900">Enable AI Agent</Label>
                <p className="text-sm text-blue-700">Add intelligent chat support to your form</p>
              </div>
            </div>
            <Switch
              checked={config.enabled}
              onCheckedChange={(enabled) => onUpdateConfig({ enabled })}
            />
          </div>

          {config.enabled && (
            <Tabs defaultValue="templates" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="templates" className="flex items-center">
                  <Template className="w-4 h-4 mr-1" />
                  Templates
                </TabsTrigger>
                <TabsTrigger value="custom" className="flex items-center">
                  <Settings className="w-4 h-4 mr-1" />
                  Custom Setup
                </TabsTrigger>
              </TabsList>

              <TabsContent value="templates" className="mt-4">
                <AIAgentTemplates onSelectTemplate={handleTemplateSelect} />
              </TabsContent>

              <TabsContent value="custom" className="mt-4 space-y-6">
                {/* API Configuration */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Key className="w-4 h-4 text-gray-600" />
                    <Label htmlFor="geminiApiKey" className="font-medium">Gemini API Key</Label>
                    <Badge variant="secondary" className="text-xs">Required</Badge>
                    {connectionStatus === 'success' && (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    )}
                    {connectionStatus === 'error' && (
                      <AlertCircle className="w-4 h-4 text-red-600" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="geminiApiKey"
                      type="password"
                      value={config.geminiApiKey}
                      onChange={(e) => {
                        onUpdateConfig({ geminiApiKey: e.target.value });
                        setConnectionStatus('idle');
                      }}
                      placeholder="AIzaSy..."
                      className="font-mono text-sm"
                    />
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500">
                        Get your API key from <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google AI Studio</a>
                      </p>
                      <Button
                        onClick={testGeminiConnection}
                        disabled={isTestingConnection || !config.geminiApiKey}
                        size="sm"
                        variant="outline"
                        className="min-h-[32px]"
                      >
                        {isTestingConnection ? "Testing..." : "Test Connection"}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Agent Settings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="agentName">Agent Name</Label>
                    <Input
                      id="agentName"
                      value={config.agentName}
                      onChange={(e) => onUpdateConfig({ agentName: e.target.value })}
                      placeholder="Customer Support Assistant"
                      className="text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="temperature">Creativity Level</Label>
                    <Input
                      id="temperature"
                      type="number"
                      min="0"
                      max="1"
                      step="0.1"
                      value={config.temperature}
                      onChange={(e) => onUpdateConfig({ temperature: parseFloat(e.target.value) })}
                      className="text-base"
                    />
                    <p className="text-xs text-gray-500">0 = Focused, 1 = Creative</p>
                  </div>
                </div>

                {/* System Prompt */}
                <div className="space-y-2">
                  <Label htmlFor="systemPrompt">System Instructions</Label>
                  <Textarea
                    id="systemPrompt"
                    value={config.systemPrompt}
                    onChange={(e) => onUpdateConfig({ systemPrompt: e.target.value })}
                    placeholder="You are a helpful customer support assistant for WhatsX forms. Help users with their questions about filling out the form and provide relevant information."
                    rows={4}
                    className="text-sm"
                  />
                  <p className="text-xs text-gray-500">
                    Define how your AI agent should behave and respond
                  </p>
                </div>

                {/* Welcome Message */}
                <div className="space-y-2">
                  <Label htmlFor="welcomeMessage">Welcome Message</Label>
                  <Textarea
                    id="welcomeMessage"
                    value={config.welcomeMessage}
                    onChange={(e) => onUpdateConfig({ welcomeMessage: e.target.value })}
                    placeholder="Hi! I'm your WhatsX assistant. How can I help you with this form today?"
                    rows={2}
                    className="text-sm"
                  />
                </div>

                {/* Advanced Settings */}
                <div className="border-t pt-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Settings className="w-4 h-4 text-gray-600" />
                    <Label className="font-medium">Advanced Settings</Label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="maxTokens">Max Response Length</Label>
                      <Input
                        id="maxTokens"
                        type="number"
                        min="100"
                        max="2048"
                        value={config.maxTokens}
                        onChange={(e) => onUpdateConfig({ maxTokens: parseInt(e.target.value) })}
                        className="text-base"
                      />
                      <p className="text-xs text-gray-500">Tokens (100-2048)</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          )}

          {config.enabled && (
            <div className="flex items-start space-x-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-blue-900 mb-1">AI Agent Integration</p>
                <p className="text-blue-700">
                  Your AI agent will appear as a chat widget on your form, helping users with questions and providing intelligent responses using Google's Gemini AI.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
