import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Bot, Key, MessageSquare, Settings, Sparkles, ArrowLeft, Send, X, Copy, Download, Code, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIAgent = () => {
  const { toast } = useToast();
  const [geminiApiKey, setGeminiApiKey] = useState('');
  const [agentName, setAgentName] = useState('WhatsX Assistant');
  const [systemPrompt, setSystemPrompt] = useState('You are a helpful AI assistant. Provide clear, concise, and helpful responses to user questions.');
  const [welcomeMessage, setWelcomeMessage] = useState('Hi! I\'m your AI assistant. How can I help you today?');
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(512);
  
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [isAITyping, setIsAITyping] = useState(false);
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [isTestingConnection, setIsTestingConnection] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const testGeminiConnection = async () => {
    if (!geminiApiKey) {
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
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`, {
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

      if (response.ok) {
        setConnectionStatus('success');
        toast({
          title: "Connection Successful! ✨",
          description: "Your Gemini API key is working correctly.",
        });
      } else {
        const errorData = await response.json().catch(() => ({}));
        setConnectionStatus('error');
        throw new Error(`API Error: ${response.status}`);
      }
    } catch (error) {
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

  const startChat = () => {
    if (!geminiApiKey) {
      toast({
        title: "API Key Required",
        description: "Please configure your Gemini API key first.",
        variant: "destructive",
      });
      return;
    }

    const welcomeMsg: ChatMessage = {
      id: "welcome",
      text: welcomeMessage,
      isUser: false,
      timestamp: new Date()
    };
    setChatMessages([welcomeMsg]);
    setIsChatStarted(true);
  };

  const sendChatMessage = async () => {
    if (!chatInput.trim() || !geminiApiKey) {
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
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${systemPrompt}\n\nUser question: ${chatInput}`
            }]
          }],
          generationConfig: {
            temperature: temperature,
            maxOutputTokens: maxTokens,
          }
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that request.";
        
        const aiMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: aiResponse,
          isUser: false,
          timestamp: new Date()
        };

        setChatMessages(prev => [...prev, aiMessage]);
      } else {
        throw new Error(`API Error: ${response.status}`);
      }
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Please check your API key and try again.",
        isUser: false,
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsAITyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendChatMessage();
    }
  };

  const resetChat = () => {
    setChatMessages([]);
    setIsChatStarted(false);
    setChatInput("");
  };

  const generateEmbedCode = () => {
    const chatId = `whatsx-chatbot-${Date.now()}`;

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WhatsX AI Chatbot - ${agentName}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    
    /* WhatsX AI Chatbot Widget Styles */
    .whatsx-chatbot-container {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 10000;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
    
    /* Chat Bubble Trigger */
    .whatsx-chat-bubble {
      width: 64px;
      height: 64px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border: none;
      position: relative;
      overflow: hidden;
    }
    
    .whatsx-chat-bubble:hover {
      transform: scale(1.1);
      box-shadow: 0 12px 32px rgba(102, 126, 234, 0.5);
    }
    
    .whatsx-chat-bubble::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 100%);
      border-radius: 50%;
    }
    
    .whatsx-chat-bubble-icon {
      width: 28px;
      height: 28px;
      color: white;
      z-index: 1;
    }
    
    /* Notification Badge */
    .whatsx-notification-badge {
      position: absolute;
      top: -4px;
      right: -4px;
      width: 20px;
      height: 20px;
      background: #ff4757;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 600;
      color: white;
      border: 2px solid white;
      animation: whatsx-pulse-badge 2s infinite;
    }
    
    /* Chat Window */
    .whatsx-chat-window {
      position: absolute;
      bottom: 80px;
      right: 0;
      width: 380px;
      height: 600px;
      background: white;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
      display: none;
      flex-direction: column;
      overflow: hidden;
      transform: scale(0.9) translateY(20px);
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
    
    .whatsx-chat-window.active {
      display: flex;
      transform: scale(1) translateY(0);
      opacity: 1;
    }
    
    /* Chat Header */
    .whatsx-chat-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
      color: white;
      position: relative;
      overflow: hidden;
    }
    
    .whatsx-chat-header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 1;
    }
    
    .whatsx-bot-info {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .whatsx-bot-avatar {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      backdrop-filter: blur(10px);
    }
    
    .whatsx-bot-details h3 {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 2px;
    }
    
    .whatsx-bot-status {
      font-size: 12px;
      opacity: 0.9;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .whatsx-status-dot {
      width: 8px;
      height: 8px;
      background: #10b981;
      border-radius: 50%;
      animation: whatsx-pulse-dot 2s infinite;
    }
    
    .whatsx-close-btn {
      background: rgba(255, 255, 255, 0.2);
      border: none;
      color: white;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      transition: background 0.2s;
      backdrop-filter: blur(10px);
    }
    
    .whatsx-close-btn:hover {
      background: rgba(255, 255, 255, 0.3);
    }
    
    /* Messages Area */
    .whatsx-chat-messages {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
      background: #f8fafc;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    
    .whatsx-chat-messages::-webkit-scrollbar {
      width: 4px;
    }
    
    .whatsx-chat-messages::-webkit-scrollbar-track {
      background: transparent;
    }
    
    .whatsx-chat-messages::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 2px;
    }
    
    /* Message Bubbles */
    .whatsx-message {
      max-width: 85%;
      word-wrap: break-word;
      animation: whatsx-slideInMessage 0.3s ease-out;
    }
    
    .whatsx-message.bot {
      align-self: flex-start;
    }
    
    .whatsx-message.user {
      align-self: flex-end;
    }
    
    .whatsx-message-content {
      padding: 12px 16px;
      border-radius: 18px;
      position: relative;
      line-height: 1.4;
      font-size: 14px;
    }
    
    .whatsx-message.bot .whatsx-message-content {
      background: white;
      color: #374151;
      border-bottom-left-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      border: 1px solid #e2e8f0;
    }
    
    .whatsx-message.user .whatsx-message-content {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-bottom-right-radius: 4px;
    }
    
    .whatsx-message-info {
      font-size: 11px;
      color: #64748b;
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .whatsx-message.bot .whatsx-message-info {
      margin-left: 4px;
    }
    
    .whatsx-message.user .whatsx-message-info {
      margin-right: 4px;
      justify-content: flex-end;
    }
    
    /* Typing Indicator */
    .whatsx-typing-indicator {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      background: white;
      border-radius: 18px;
      border-bottom-left-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      border: 1px solid #e2e8f0;
      max-width: 85%;
      align-self: flex-start;
    }
    
    .whatsx-typing-dots {
      display: flex;
      gap: 4px;
    }
    
    .whatsx-typing-dot {
      width: 6px;
      height: 6px;
      background: #94a3b8;
      border-radius: 50%;
      animation: whatsx-typingDot 1.4s infinite;
    }
    
    .whatsx-typing-dot:nth-child(1) { animation-delay: 0s; }
    .whatsx-typing-dot:nth-child(2) { animation-delay: 0.2s; }
    .whatsx-typing-dot:nth-child(3) { animation-delay: 0.4s; }
    
    /* Input Area */
    .whatsx-chat-input-area {
      padding: 20px;
      background: white;
      border-top: 1px solid #e2e8f0;
    }
    
    .whatsx-input-container {
      display: flex;
      gap: 12px;
      align-items: flex-end;
    }
    
    .whatsx-chat-input {
      flex: 1;
      border: 2px solid #e2e8f0;
      border-radius: 24px;
      padding: 12px 16px;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
      resize: none;
      min-height: 48px;
      max-height: 120px;
    }
    
    .whatsx-chat-input:focus {
      border-color: #667eea;
    }
    
    .whatsx-send-btn {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border: none;
      border-radius: 50%;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      font-size: 16px;
    }
    
    .whatsx-send-btn:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }
    
    .whatsx-send-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }
    
    /* Branding */
    .whatsx-chat-branding {
      text-align: center;
      padding: 12px 20px;
      background: #f8fafc;
      border-top: 1px solid #e2e8f0;
    }
    
    .whatsx-brand-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 11px;
      font-weight: 600;
      text-decoration: none;
    }
    
    /* Responsive Design */
    @media (max-width: 480px) {
      .whatsx-chatbot-container {
        bottom: 16px;
        right: 16px;
        left: 16px;
      }
      
      .whatsx-chat-window {
        width: 100%;
        height: calc(100vh - 120px);
        bottom: 80px;
        right: 0;
        border-radius: 16px;
      }
    }
    
    /* Animations */
    @keyframes whatsx-pulse-badge {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
    
    @keyframes whatsx-pulse-dot {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    
    @keyframes whatsx-slideInMessage {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes whatsx-typingDot {
      0%, 80%, 100% {
        transform: scale(0);
        opacity: 0.5;
      }
      40% {
        transform: scale(1);
        opacity: 1;
      }
    }
  </style>
</head>
<body>

<!-- WhatsX AI Chatbot Widget -->
<div class="whatsx-chatbot-container">
  <!-- Chat Trigger Bubble -->
  <button class="whatsx-chat-bubble" onclick="whatsxToggleChat()" id="whatsx-chat-trigger">
    <svg class="whatsx-chat-bubble-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
    <div class="whatsx-notification-badge" id="whatsx-notification-badge" style="display: none;">1</div>
  </button>

  <!-- Chat Window -->
  <div class="whatsx-chat-window" id="whatsx-chat-window">
    <!-- Header -->
    <div class="whatsx-chat-header">
      <div class="whatsx-chat-header-content">
        <div class="whatsx-bot-info">
          <div class="whatsx-bot-avatar">🤖</div>
          <div class="whatsx-bot-details">
            <h3>${agentName}</h3>
            <div class="whatsx-bot-status">
              <div class="whatsx-status-dot"></div>
              Online
            </div>
          </div>
        </div>
        <button class="whatsx-close-btn" onclick="whatsxCloseChat()">×</button>
      </div>
    </div>

    <!-- Messages -->
    <div class="whatsx-chat-messages" id="whatsx-chat-messages">
      <div class="whatsx-message bot">
        <div class="whatsx-message-content">${welcomeMessage}</div>
        <div class="whatsx-message-info">
          <span>${agentName}</span>
          <span>•</span>
          <span>Just now</span>
        </div>
      </div>
    </div>

    <!-- Input Area -->
    <div class="whatsx-chat-input-area">
      <div class="whatsx-input-container">
        <textarea 
          class="whatsx-chat-input" 
          id="whatsx-chat-input" 
          placeholder="Type your message..."
          rows="1"
          onkeydown="whatsxHandleKeyDown(event)"
          oninput="whatsxAutoResize(this)"
        ></textarea>
        <button class="whatsx-send-btn" onclick="whatsxSendMessage()" id="whatsx-send-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <path d="m22 2-7 20-4-9-9-4 20-7z"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Branding -->
    <div class="whatsx-chat-branding">
      <a href="https://whatsx-nine.vercel.app/" target="_blank" class="whatsx-brand-badge">
        ✨ Powered by WhatsX AI
      </a>
    </div>
  </div>
</div>

<script>
let whatsxIsTyping = false;
let whatsxChatOpen = false;

// Chat Toggle Functions
function whatsxToggleChat() {
  const chatWindow = document.getElementById('whatsx-chat-window');
  const trigger = document.getElementById('whatsx-chat-trigger');
  const badge = document.getElementById('whatsx-notification-badge');
  
  if (whatsxChatOpen) {
    whatsxCloseChat();
  } else {
    whatsxOpenChat();
  }
}

function whatsxOpenChat() {
  const chatWindow = document.getElementById('whatsx-chat-window');
  const trigger = document.getElementById('whatsx-chat-trigger');
  const badge = document.getElementById('whatsx-notification-badge');
  
  chatWindow.classList.add('active');
  trigger.style.display = 'none';
  badge.style.display = 'none';
  whatsxChatOpen = true;
  
  // Focus on input
  setTimeout(() => {
    document.getElementById('whatsx-chat-input').focus();
  }, 300);
}

function whatsxCloseChat() {
  const chatWindow = document.getElementById('whatsx-chat-window');
  const trigger = document.getElementById('whatsx-chat-trigger');
  
  chatWindow.classList.remove('active');
  trigger.style.display = 'flex';
  whatsxChatOpen = false;
}

// Message Functions
async function whatsxSendMessage() {
  if (whatsxIsTyping) return;
  
  const input = document.getElementById('whatsx-chat-input');
  const message = input.value.trim();
  
  if (!message) return;
  
  // Add user message
  whatsxAddMessage(message, 'user');
  input.value = '';
  whatsxAutoResize(input);
  
  // Show typing indicator
  whatsxShowTypingIndicator();
  whatsxIsTyping = true;
  
  try {
    const response = await fetch(\`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: \`${systemPrompt}\\n\\nUser: \${message}\`
          }]
        }],
        generationConfig: {
          temperature: ${temperature},
          maxOutputTokens: ${maxTokens}
        }
      })
    });
    
    if (response.ok) {
      const data = await response.json();
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that request.";
      
      whatsxHideTypingIndicator();
      whatsxAddMessage(aiResponse, 'bot');
    } else {
      throw new Error('API Error');
    }
  } catch (error) {
    console.error('WhatsX Chat error:', error);
    whatsxHideTypingIndicator();
    whatsxAddMessage("I'm sorry, I'm having trouble connecting right now. Please try again later.", 'bot');
  }
  
  whatsxIsTyping = false;
}

function whatsxAddMessage(text, sender) {
  const messagesContainer = document.getElementById('whatsx-chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = \`whatsx-message \${sender}\`;
  
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  messageDiv.innerHTML = \`
    <div class="whatsx-message-content">\${text}</div>
    <div class="whatsx-message-info">
      \${sender === 'bot' ? \`<span>${agentName}</span><span>•</span>\` : ''}
      <span>\${timeString}</span>
    </div>
  \`;
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function whatsxShowTypingIndicator() {
  const messagesContainer = document.getElementById('whatsx-chat-messages');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'whatsx-typing-indicator';
  typingDiv.id = 'whatsx-typing-indicator';
  
  typingDiv.innerHTML = \`
    <span style="font-size: 12px; color: #64748b;">${agentName} is typing</span>
    <div class="whatsx-typing-dots">
      <div class="whatsx-typing-dot"></div>
      <div class="whatsx-typing-dot"></div>
      <div class="whatsx-typing-dot"></div>
    </div>
  \`;
  
  messagesContainer.appendChild(typingDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function whatsxHideTypingIndicator() {
  const indicator = document.getElementById('whatsx-typing-indicator');
  if (indicator) {
    indicator.remove();
  }
}

// Input Handling
function whatsxHandleKeyDown(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    whatsxSendMessage();
  }
}

function whatsxAutoResize(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
}

// Keyboard Shortcuts
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && whatsxChatOpen) {
    whatsxCloseChat();
  }
});

// Initialize
console.log('WhatsX AI Chatbot Widget initialized');

// Show notification badge after 3 seconds if chat is not opened
setTimeout(() => {
  if (!whatsxChatOpen) {
    document.getElementById('whatsx-notification-badge').style.display = 'flex';
  }
}, 3000);
</script>

</body>
</html>`;
  };

  const copyEmbedCode = () => {
    if (!geminiApiKey) {
      toast({
        title: "API Key Required",
        description: "Please configure your Gemini API key first to generate embed code.",
        variant: "destructive",
      });
      return;
    }

    const embedCode = generateEmbedCode();
    navigator.clipboard.writeText(embedCode).then(() => {
      toast({
        title: "Embed Code Copied! 🚀",
        description: "The AI Agent embed code has been copied to your clipboard. Paste it into your website's HTML.",
        duration: 5000,
      });
    });
  };

  const downloadEmbedCode = () => {
    if (!geminiApiKey) {
      toast({
        title: "API Key Required",
        description: "Please configure your Gemini API key first to generate embed code.",
        variant: "destructive",
      });
      return;
    }

    const embedCode = generateEmbedCode();
    const blob = new Blob([embedCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `whatsx-ai-chatbot-${agentName.toLowerCase().replace(/\s+/g, '-')}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Embed Code Downloaded! 🎉",
      description: "Your AI Agent embed file has been downloaded. Upload it to your website or integrate the code directly.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto mobile-px py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-3">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 min-h-[44px] min-w-[44px]">
                  <ArrowLeft className="w-4 h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Back</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5 md:w-6 md:h-6 text-blue-200" />
                <h1 className="text-lg md:text-2xl font-bold">AI Agent</h1>
              </div>
            </div>
            
            <Badge className="bg-white/20 text-white border-white/30 text-xs md:text-sm">
              <Sparkles className="w-3 h-3 mr-1" />
              <span className="hidden sm:inline">Powered by </span>Gemini
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto mobile-px py-4 md:py-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
          {/* Configuration Panel */}
          <div className="space-y-4 md:space-y-6">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg md:text-xl">
                  <Settings className="w-5 h-5 mr-2 text-blue-600" />
                  AI Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* API Key */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Key className="w-4 h-4 text-gray-600" />
                    <Label htmlFor="geminiApiKey" className="text-sm md:text-base">Gemini API Key</Label>
                    <Badge variant="secondary" className="text-xs">Required</Badge>
                  </div>
                  <Input
                    id="geminiApiKey"
                    type="password"
                    value={geminiApiKey}
                    onChange={(e) => {
                      setGeminiApiKey(e.target.value);
                      setConnectionStatus('idle');
                    }}
                    placeholder="AIzaSy..."
                    className="font-mono text-sm min-h-[44px]"
                  />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <p className="text-xs text-gray-500">
                      Get your API key from <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google AI Studio</a>
                    </p>
                    <Button
                      onClick={testGeminiConnection}
                      disabled={isTestingConnection || !geminiApiKey}
                      size="sm"
                      variant="outline"
                      className="min-h-[44px] w-full sm:w-auto"
                    >
                      {isTestingConnection ? "Testing..." : "Test Connection"}
                    </Button>
                  </div>
                </div>

                {/* Agent Settings */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="agentName" className="text-sm md:text-base">Agent Name</Label>
                    <Input
                      id="agentName"
                      value={agentName}
                      onChange={(e) => setAgentName(e.target.value)}
                      placeholder="AI Assistant"
                      className="min-h-[44px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="temperature" className="text-sm md:text-base">Creativity Level</Label>
                    <Input
                      id="temperature"
                      type="number"
                      min="0"
                      max="1"
                      step="0.1"
                      value={temperature}
                      onChange={(e) => setTemperature(parseFloat(e.target.value))}
                      className="min-h-[44px]"
                    />
                  </div>
                </div>

                {/* System Prompt */}
                <div className="space-y-2">
                  <Label htmlFor="systemPrompt" className="text-sm md:text-base">System Instructions</Label>
                  <Textarea
                    id="systemPrompt"
                    value={systemPrompt}
                    onChange={(e) => setSystemPrompt(e.target.value)}
                    placeholder="Define how your AI should behave..."
                    rows={3}
                    className="mobile-text resize-none"
                  />
                </div>

                {/* Welcome Message */}
                <div className="space-y-2">
                  <Label htmlFor="welcomeMessage" className="text-sm md:text-base">Welcome Message</Label>
                  <Textarea
                    id="welcomeMessage"
                    value={welcomeMessage}
                    onChange={(e) => setWelcomeMessage(e.target.value)}
                    placeholder="Hi! How can I help you today?"
                    rows={2}
                    className="mobile-text resize-none"
                  />
                </div>

                {/* Max Tokens */}
                <div className="space-y-2">
                  <Label htmlFor="maxTokens" className="text-sm md:text-base">Max Response Length</Label>
                  <Input
                    id="maxTokens"
                    type="number"
                    min="100"
                    max="2048"
                    value={maxTokens}
                    onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                    className="min-h-[44px]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Embed Code Section */}
            <Card className="border-2 border-gradient-to-r from-purple-100 to-pink-100 bg-gradient-to-r from-purple-50 to-pink-50">
              <CardHeader className="pb-4">
                <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center">
                    <Code className="w-5 h-5 mr-2 text-purple-600" />
                    <span className="text-lg md:text-xl">Embed AI Agent</span>
                    <Badge className="ml-2 bg-purple-100 text-purple-700 text-xs">
                      <Sparkles className="w-3 h-3 mr-1" />
                      <span className="hidden sm:inline">Integrate </span>Anywhere
                    </Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 mobile-text">
                  Generate embed code to integrate this AI Agent into your website or platform. The chatbot will appear as a floating widget in the bottom-right corner.
                </p>
                
                <div className="button-group flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={copyEmbedCode} 
                    disabled={!geminiApiKey}
                    className="bg-purple-600 hover:bg-purple-700 text-white min-h-[44px] flex-1"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Embed Code
                  </Button>
                  
                  <Button 
                    onClick={downloadEmbedCode} 
                    disabled={!geminiApiKey}
                    variant="outline" 
                    className="border-purple-200 text-purple-600 hover:bg-purple-50 min-h-[44px] flex-1"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download HTML
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => window.open('https://whatsx-nine.vercel.app/', '_blank')}
                    className="text-purple-600 hover:bg-purple-50 min-h-[44px] sm:flex-none"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </div>

                <div className="bg-white/50 rounded-lg p-3 md:p-4 border border-purple-200">
                  <h4 className="font-medium text-purple-900 mb-2 flex items-center text-sm md:text-base">
                    <Bot className="w-4 h-4 mr-2" />
                    Integration Features:
                  </h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium text-purple-800 mb-1">🎨 Professional Design:</h5>
                      <ul className="text-purple-700 space-y-1 text-xs">
                        <li>• Floating chat bubble with smooth animations</li>
                        <li>• Mobile-responsive design</li>
                        <li>• Professional message interface</li>
                        <li>• Typing indicators and status</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-800 mb-1">⚡ Smart Features:</h5>
                      <ul className="text-blue-700 space-y-1 text-xs">
                        <li>• Auto-expanding input field</li>
                        <li>• Keyboard shortcuts (Enter/Escape)</li>
                        <li>• Notification badge system</li>
                        <li>• Zero conflict with existing CSS</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-3 p-3 bg-white/50 rounded-lg">
                    <h5 className="font-medium text-purple-900 mb-1 text-xs">🚀 Easy Integration:</h5>
                    <ol className="list-decimal list-inside text-xs text-purple-700 space-y-1">
                      <li>Configure your AI agent settings above</li>
                      <li>Copy the embed code or download the HTML file</li>
                      <li>Paste the code into your website before closing &lt;/body&gt; tag</li>
                      <li>Your AI chatbot is now live on your website!</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Panel */}
          <div className="space-y-4 md:space-y-6">
            <Card className="h-[400px] md:h-96">
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <CardTitle className="flex items-center text-lg md:text-xl">
                  <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
                  <span className="truncate">Chat with {agentName}</span>
                </CardTitle>
                {isChatStarted && (
                  <Button onClick={resetChat} variant="outline" size="sm" className="min-h-[44px] min-w-[44px]">
                    <X className="w-4 h-4 mr-1" />
                    <span className="hidden sm:inline">Reset</span>
                  </Button>
                )}
              </CardHeader>
              <CardContent className="flex flex-col h-full p-3 md:p-6">
                {!isChatStarted ? (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Bot className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto" />
                      <p className="text-gray-500 text-sm md:text-base">Ready to start chatting!</p>
                      <Button 
                        onClick={startChat} 
                        disabled={!geminiApiKey}
                        className="min-h-[44px] px-6"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Start Chat
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2">
                      {chatMessages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[85%] sm:max-w-[80%] p-3 rounded-lg text-sm mobile-text ${
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
                    <div className="flex space-x-2">
                      <Input
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        placeholder="Type your message..."
                        onKeyPress={handleKeyPress}
                        className="flex-1 min-h-[44px] mobile-text"
                      />
                      <Button
                        onClick={sendChatMessage}
                        disabled={!chatInput.trim() || isAITyping}
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 min-h-[44px] min-w-[44px]"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgent;
