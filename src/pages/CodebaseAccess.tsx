import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Download, Code, Bot, Lock, Unlock, FileText, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const CodebaseAccess = () => {
  const [unlockCode, setUnlockCode] = useState('');
  const [hasAccess, setHasAccess] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    console.log('CodebaseAccess component mounted');
    // Check if user already has access
    const accessGranted = localStorage.getItem('whatsxAccessGranted');
    const storedCode = localStorage.getItem('whatsxUnlockCode');
    
    console.log('Checking stored access:', { accessGranted, storedCode });
    
    if (accessGranted === 'true' && storedCode) {
      setHasAccess(true);
      setUnlockCode(storedCode);
      console.log('Access granted from stored data');
    }
  }, []);

  const verifyUnlockCode = () => {
    console.log('Verifying unlock code:', unlockCode);
    setIsVerifying(true);
    
    // Simulate verification
    setTimeout(() => {
      // In a real app, this would verify against a server
      const validCodes = ['WX-DEMO123', 'WX-TEST456']; // Demo codes
      const storedCode = localStorage.getItem('whatsxUnlockCode');
      
      console.log('Verification check:', { unlockCode, storedCode, validCodes });
      
      if (unlockCode.startsWith('WX-') && (unlockCode === storedCode || validCodes.includes(unlockCode))) {
        setHasAccess(true);
        localStorage.setItem('whatsxAccessGranted', 'true');
        localStorage.setItem('whatsxUnlockCode', unlockCode);
        
        console.log('Unlock code verified successfully');
        
        toast({
          title: "Access Granted!",
          description: "You can now download the codebase",
        });
      } else {
        console.log('Invalid unlock code');
        toast({
          title: "Invalid Code",
          description: "Please check your unlock code and try again",
          variant: "destructive",
        });
      }
      setIsVerifying(false);
    }, 2000);
  };

  const downloadFile = (filename: string, content: string) => {
    console.log('Downloading file:', filename);
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const downloadWidgetCode = () => {
    console.log('Downloading widget code');
    const widgetCode = `
// WhatsX Embedded Widget - React Component
import React, { useState } from 'react';
import './WhatsXWidget.css';

const WhatsXWidget = ({ 
  phoneNumber = "1234567890",
  message = "Hi! I'm interested in your services",
  position = "bottom-right",
  theme = "purple"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const openWhatsApp = () => {
    const text = encodeURIComponent(\`Name: \${formData.name}\\nEmail: \${formData.email}\\nMessage: \${formData.message}\`);
    const url = \`https://wa.me/\${phoneNumber}?text=\${text}\`;
    window.open(url, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openWhatsApp();
    setIsOpen(false);
  };

  return (
    <div className={\`whatsX-widget \${position} \${theme}\`}>
      {!isOpen && (
        <button 
          className="whatsX-trigger"
          onClick={() => setIsOpen(true)}
        >
          💬 Chat with us
        </button>
      )}
      
      {isOpen && (
        <div className="whatsX-form">
          <div className="whatsX-header">
            <h3>Let's Chat!</h3>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
            <button type="submit">Send to WhatsApp</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default WhatsXWidget;

// CSS Styles (WhatsXWidget.css)
/*
.whatsX-widget {
  position: fixed;
  z-index: 9999;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.whatsX-widget.bottom-right {
  bottom: 20px;
  right: 20px;
}

.whatsX-widget.bottom-left {
  bottom: 20px;
  left: 20px;
}

.whatsX-trigger {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 15px 20px;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
}

.whatsX-trigger:hover {
  transform: translateY(-2px);
}

.whatsX-form {
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  width: 320px;
  overflow: hidden;
  margin-bottom: 10px;
}

.whatsX-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.whatsX-header h3 {
  margin: 0;
  font-size: 18px;
}

.whatsX-header button {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.whatsX-form form {
  padding: 20px;
}

.whatsX-form input,
.whatsX-form textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 2px solid #f0f0f0;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.whatsX-form input:focus,
.whatsX-form textarea:focus {
  outline: none;
  border-color: #667eea;
}

.whatsX-form textarea {
  height: 80px;
  resize: vertical;
}

.whatsX-form button[type="submit"] {
  width: 100%;
  background: #25D366;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.whatsX-form button[type="submit"]:hover {
  background: #22c55e;
}

/* Theme Variations */
.whatsX-widget.blue .whatsX-trigger,
.whatsX-widget.blue .whatsX-header {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.whatsX-widget.green .whatsX-trigger,
.whatsX-widget.green .whatsX-header {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.whatsX-widget.red .whatsX-trigger,
.whatsX-widget.red .whatsX-header {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}
*/

// Usage Example:
// <WhatsXWidget 
//   phoneNumber="1234567890"
//   message="Hello! I'm interested in your services"
//   position="bottom-right"
//   theme="purple"
// />
`;

    downloadFile('WhatsXWidget.jsx', widgetCode);
    
    toast({
      title: "Downloaded!",
      description: "Widget codebase downloaded successfully",
    });
  };

  const downloadAIAgentCode = () => {
    console.log('Downloading AI Agent code');
    const aiAgentCode = `
// WhatsX AI Agent - Intelligent Chat Integration
import React, { useState, useEffect, useRef } from 'react';
import './AIAgent.css';

const AIAgent = ({ 
  apiKey = "your-gemini-api-key",
  phoneNumber = "1234567890",
  agentName = "WhatsX Assistant",
  theme = "gradient"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'ai', content: \`Hi! I'm \${agentName}. How can I help you today?\` }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });
  const [showLeadForm, setShowLeadForm] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = async (userMessage) => {
    // Simulate AI response (integrate with Google Gemini API)
    const responses = [
      "That's a great question! Let me help you with that.",
      "I understand your concern. Here's what I can suggest...",
      "Based on what you've told me, I think the best approach would be...",
      "I'd be happy to connect you with our team for more detailed assistance.",
      "Let me gather some information to provide you with the best solution."
    ];

    // Lead qualification logic
    const leadKeywords = ['price',  'cost', 'demo', 'trial', 'contact', 'call', 'meeting'];
    const isLeadQualified = leadKeywords.some(keyword => 
      userMessage.toLowerCase().includes(keyword)
    );

    if (isLeadQualified && !userInfo.name) {
      setShowLeadForm(true);
      return "I'd love to help you with that! Could you please share your contact details so I can connect you with the right person?";
    }

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { type: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(async () => {
      const aiResponse = await generateAIResponse(inputMessage);
      setMessages(prev => [...prev, { type: 'ai', content: aiResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setShowLeadForm(false);
    setMessages(prev => [...prev, 
      { type: 'ai', content: \`Thank you \${userInfo.name}! I'll connect you with our team shortly. Meanwhile, would you like to continue our conversation on WhatsApp?\` }
    ]);
  };

  const transferToWhatsApp = () => {
    const chatHistory = messages.map(msg => 
      \`\${msg.type === 'ai' ? agentName : 'User'}: \${msg.content}\`
    ).join('\\n\\n');
    
    const message = encodeURIComponent(
      \`Hi! I was chatting with \${agentName} on your website.\\n\\n\` +
      \`My details:\\n\` +
      \`Name: \${userInfo.name}\\n\` +
      \`Email: \${userInfo.email}\\n\` +
      \`Phone: \${userInfo.phone}\\n\\n\` +
      \`Chat History:\\n\${chatHistory}\`
    );

    window.open(\`https://wa.me/\${phoneNumber}?text=\${message}\`, '_blank');
  };

  return (
    <div className={\`ai-agent \${theme}\`}>
      {!isOpen && (
        <button 
          className="ai-trigger"
          onClick={() => setIsOpen(true)}
        >
          🤖 Need Help?
        </button>
      )}

      {isOpen && (
        <div className="ai-chat-window">
          <div className="ai-header">
            <div className="ai-info">
              <div className="ai-avatar">🤖</div>
              <div>
                <h4>{agentName}</h4>
                <span className="ai-status">● Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div className="ai-messages">
            {messages.map((message, index) => (
              <div key={index} className={\`message \${message.type}\`}>
                <div className="message-content">
                  {message.content}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message ai">
                <div className="message-content typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {showLeadForm && (
            <div className="lead-form">
              <form onSubmit={handleLeadSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                  required
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  value={userInfo.phone}
                  onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                  required
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          )}

          <div className="ai-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              disabled={showLeadForm}
            />
            <button onClick={handleSendMessage} disabled={showLeadForm}>
              Send
            </button>
          </div>

          {userInfo.name && (
            <div className="whatsapp-transfer">
              <button onClick={transferToWhatsApp}>
                Continue on WhatsApp
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AIAgent;
`;

    downloadFile('AIAgent.jsx', aiAgentCode);
    
    toast({
      title: "Downloaded!",
      description: "AI Agent codebase downloaded successfully",
    });
  };

  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-2 border-purple-200 shadow-xl">
          <CardHeader className="text-center">
            <Lock className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <CardTitle className="text-2xl font-bold text-purple-900">Access Required</CardTitle>
            <p className="text-gray-600">Enter your unlock code to access the codebase</p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Input
                type="text"
                placeholder="Enter unlock code (e.g., WX-ABC12345)"
                value={unlockCode}
                onChange={(e) => setUnlockCode(e.target.value.toUpperCase())}
                className="text-center font-mono"
              />
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600"
                onClick={verifyUnlockCode}
                disabled={isVerifying || !unlockCode}
              >
                {isVerifying ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Verifying...</span>
                  </div>
                ) : (
                  <>
                    <Unlock className="w-4 h-4 mr-2" />
                    Verify Access
                  </>
                )}
              </Button>
            </div>

            <div className="text-center text-sm text-gray-500 border-t pt-4">
              <p>Don't have an unlock code?</p>
              <Link to="/pricing" className="text-purple-600 hover:underline font-medium">
                Purchase for ₹29 →
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Code className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                WhatsX Codebase
              </span>
            </Link>
            <Badge className="bg-green-100 text-green-700 border-green-200">
              <Unlock className="w-3 h-3 mr-1" />
              Access Granted
            </Badge>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-800 bg-clip-text text-transparent">
            Your Codebase Access
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Complete source code for WhatsX form builder and AI agent integration
          </p>
          <Badge className="bg-purple-100 text-purple-700 border-purple-200 text-sm">
            Unlock Code: {unlockCode}
          </Badge>
        </div>
      </section>

      {/* Download Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Widget Code */}
            <Card className="border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-purple-900 text-center">Embedded Widget</CardTitle>
                <p className="text-gray-600 text-center">Complete React component for embeddable forms</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">Includes:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• React Component (JSX)</li>
                    <li>• CSS Styles & Animations</li>
                    <li>• WhatsApp Integration</li>
                    <li>• Responsive Design</li>
                    <li>• Multiple Themes</li>
                    <li>• Customization Options</li>
                  </ul>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700"
                  onClick={downloadWidgetCode}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Widget Code
                </Button>
              </CardContent>
            </Card>

            {/* AI Agent Code */}
            <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-blue-900 text-center">AI Agent</CardTitle>
                <p className="text-gray-600 text-center">Intelligent chatbot with lead qualification</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Includes:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AI Chat Interface</li>
                    <li>• Google Gemini Integration</li>
                    <li>• Lead Qualification Logic</li>
                    <li>• WhatsApp Transfer</li>
                    <li>• Conversation History</li>
                    <li>• Custom Styling</li>
                  </ul>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700"
                  onClick={downloadAIAgentCode}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download AI Agent Code
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-12 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Documentation & Setup</h2>
            <p className="text-lg text-gray-600">Everything you need to implement and customize</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <FileText className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Setup Guide</h3>
                <p className="text-gray-600 text-sm">Step-by-step installation and configuration instructions</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">API Reference</h3>
                <p className="text-gray-600 text-sm">Complete API documentation with examples</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Github className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Examples</h3>
                <p className="text-gray-600 text-sm">Working examples and implementation demos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 px-4 text-center">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Need Help?</h3>
          <p className="text-gray-600 mb-6">
            If you have any questions about implementing the code or need customization help, 
            feel free to reach out to our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link to="/support">
                Contact Support
              </Link>
            </Button>
            <Button asChild>
              <Link to="/documentation">
                View Documentation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CodebaseAccess;
