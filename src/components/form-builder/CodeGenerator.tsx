import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Download, Bot, Sparkles, MessageCircle, AlertTriangle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FormField, FormStyle } from "@/pages/FormBuilder";
import { AIAgentConfig } from "./AIAgentSetup";

interface CodeGeneratorProps {
  title: string;
  fields: FormField[];
  formStyle: FormStyle;
  whatsappNumber: string;
  aiAgentConfig?: AIAgentConfig;
}

export const CodeGenerator = ({ title, fields, formStyle, whatsappNumber, aiAgentConfig }: CodeGeneratorProps) => {
  const { toast } = useToast();

  const validateAIConfig = () => {
    if (!aiAgentConfig?.enabled) return { isValid: true, message: "" };
    if (!aiAgentConfig.geminiApiKey) return { isValid: false, message: "Gemini API key is required" };
    if (!aiAgentConfig.agentName) return { isValid: false, message: "Agent name is required" };
    if (!aiAgentConfig.systemPrompt) return { isValid: false, message: "System prompt is required" };
    if (!aiAgentConfig.welcomeMessage) return { isValid: false, message: "Welcome message is required" };
    return { isValid: true, message: "" };
  };

  const aiValidation = validateAIConfig();

  const generateChatbotWidget = () => {
    if (!aiAgentConfig?.enabled || !aiValidation.isValid) return '';

    const chatId = `chatbot-widget-${Date.now()}`;

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Chatbot Widget - ${aiAgentConfig.agentName}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    
    /* Modern Chatbot Widget Styles */
    .chatbot-container {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 10000;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
    
    /* Chat Bubble Trigger */
    .chat-bubble {
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
    
    .chat-bubble:hover {
      transform: scale(1.1);
      box-shadow: 0 12px 32px rgba(102, 126, 234, 0.5);
    }
    
    .chat-bubble::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 100%);
      border-radius: 50%;
    }
    
    .chat-bubble-icon {
      width: 28px;
      height: 28px;
      color: white;
      z-index: 1;
    }
    
    /* Notification Badge */
    .notification-badge {
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
      animation: pulse-badge 2s infinite;
    }
    
    /* Chat Window */
    .chat-window {
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
    
    .chat-window.active {
      display: flex;
      transform: scale(1) translateY(0);
      opacity: 1;
    }
    
    /* Chat Header */
    .chat-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
      color: white;
      position: relative;
      overflow: hidden;
    }
    
    .chat-header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 1;
    }
    
    .bot-info {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .bot-avatar {
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
    
    .bot-details h3 {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 2px;
    }
    
    .bot-status {
      font-size: 12px;
      opacity: 0.9;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .status-dot {
      width: 8px;
      height: 8px;
      background: #10b981;
      border-radius: 50%;
      animation: pulse-dot 2s infinite;
    }
    
    .close-btn {
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
    
    .close-btn:hover {
      background: rgba(255, 255, 255, 0.3);
    }
    
    /* Messages Area */
    .chat-messages {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
      background: #f8fafc;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    
    .chat-messages::-webkit-scrollbar {
      width: 4px;
    }
    
    .chat-messages::-webkit-scrollbar-track {
      background: transparent;
    }
    
    .chat-messages::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 2px;
    }
    
    /* Message Bubbles */
    .message {
      max-width: 85%;
      word-wrap: break-word;
      animation: slideInMessage 0.3s ease-out;
    }
    
    .message.bot {
      align-self: flex-start;
    }
    
    .message.user {
      align-self: flex-end;
    }
    
    .message-content {
      padding: 12px 16px;
      border-radius: 18px;
      position: relative;
      line-height: 1.4;
      font-size: 14px;
    }
    
    .message.bot .message-content {
      background: white;
      color: #374151;
      border-bottom-left-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      border: 1px solid #e2e8f0;
    }
    
    .message.user .message-content {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-bottom-right-radius: 4px;
    }
    
    .message-info {
      font-size: 11px;
      color: #64748b;
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .message.bot .message-info {
      margin-left: 4px;
    }
    
    .message.user .message-info {
      margin-right: 4px;
      justify-content: flex-end;
    }
    
    /* Typing Indicator */
    .typing-indicator {
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
    
    .typing-dots {
      display: flex;
      gap: 4px;
    }
    
    .typing-dot {
      width: 6px;
      height: 6px;
      background: #94a3b8;
      border-radius: 50%;
      animation: typingDot 1.4s infinite;
    }
    
    .typing-dot:nth-child(1) { animation-delay: 0s; }
    .typing-dot:nth-child(2) { animation-delay: 0.2s; }
    .typing-dot:nth-child(3) { animation-delay: 0.4s; }
    
    /* Input Area */
    .chat-input-area {
      padding: 20px;
      background: white;
      border-top: 1px solid #e2e8f0;
    }
    
    .input-container {
      display: flex;
      gap: 12px;
      align-items: flex-end;
    }
    
    .chat-input {
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
    
    .chat-input:focus {
      border-color: #667eea;
    }
    
    .send-btn {
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
    
    .send-btn:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }
    
    .send-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }
    
    /* Branding */
    .chat-branding {
      text-align: center;
      padding: 12px 20px;
      background: #f8fafc;
      border-top: 1px solid #e2e8f0;
    }
    
    .brand-badge {
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
      .chatbot-container {
        bottom: 16px;
        right: 16px;
        left: 16px;
      }
      
      .chat-window {
        width: 100%;
        height: calc(100vh - 120px);
        bottom: 80px;
        right: 0;
        border-radius: 16px;
      }
    }
    
    /* Animations */
    @keyframes pulse-badge {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
    
    @keyframes pulse-dot {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    
    @keyframes slideInMessage {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes typingDot {
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

<!-- Chatbot Widget -->
<div class="chatbot-container">
  <!-- Chat Trigger Bubble -->
  <button class="chat-bubble" onclick="toggleChat()" id="chat-trigger">
    <svg class="chat-bubble-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
    <div class="notification-badge" id="notification-badge" style="display: none;">1</div>
  </button>

  <!-- Chat Window -->
  <div class="chat-window" id="chat-window">
    <!-- Header -->
    <div class="chat-header">
      <div class="chat-header-content">
        <div class="bot-info">
          <div class="bot-avatar">🤖</div>
          <div class="bot-details">
            <h3>${aiAgentConfig.agentName}</h3>
            <div class="bot-status">
              <div class="status-dot"></div>
              Online
            </div>
          </div>
        </div>
        <button class="close-btn" onclick="closeChat()">×</button>
      </div>
    </div>

    <!-- Messages -->
    <div class="chat-messages" id="chat-messages">
      <div class="message bot">
        <div class="message-content">${aiAgentConfig.welcomeMessage}</div>
        <div class="message-info">
          <span>${aiAgentConfig.agentName}</span>
          <span>•</span>
          <span>Just now</span>
        </div>
      </div>
    </div>

    <!-- Input Area -->
    <div class="chat-input-area">
      <div class="input-container">
        <textarea 
          class="chat-input" 
          id="chat-input" 
          placeholder="Type your message..."
          rows="1"
          onkeydown="handleKeyDown(event)"
          oninput="autoResize(this)"
        ></textarea>
        <button class="send-btn" onclick="sendMessage()" id="send-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <path d="m22 2-7 20-4-9-9-4 20-7z"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Branding -->
    <div class="chat-branding">
      <a href="#" class="brand-badge">
        ✨ Powered by WhatsX AI
      </a>
    </div>
  </div>
</div>

<script>
let isTyping = false;
let chatOpen = false;

// Chat Toggle Functions
function toggleChat() {
  const chatWindow = document.getElementById('chat-window');
  const trigger = document.getElementById('chat-trigger');
  const badge = document.getElementById('notification-badge');
  
  if (chatOpen) {
    closeChat();
  } else {
    openChat();
  }
}

function openChat() {
  const chatWindow = document.getElementById('chat-window');
  const trigger = document.getElementById('chat-trigger');
  const badge = document.getElementById('notification-badge');
  
  chatWindow.classList.add('active');
  trigger.style.display = 'none';
  badge.style.display = 'none';
  chatOpen = true;
  
  // Focus on input
  setTimeout(() => {
    document.getElementById('chat-input').focus();
  }, 300);
}

function closeChat() {
  const chatWindow = document.getElementById('chat-window');
  const trigger = document.getElementById('chat-trigger');
  
  chatWindow.classList.remove('active');
  trigger.style.display = 'flex';
  chatOpen = false;
}

// Message Functions
async function sendMessage() {
  if (isTyping) return;
  
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  
  if (!message) return;
  
  // Add user message
  addMessage(message, 'user');
  input.value = '';
  autoResize(input);
  
  // Show typing indicator
  showTypingIndicator();
  isTyping = true;
  
  try {
    const response = await fetch(\`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${aiAgentConfig.geminiApiKey}\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: \`${aiAgentConfig.systemPrompt}\\n\\nUser: \${message}\`
          }]
        }],
        generationConfig: {
          temperature: ${aiAgentConfig.temperature},
          maxOutputTokens: ${aiAgentConfig.maxTokens}
        }
      })
    });
    
    if (response.ok) {
      const data = await response.json();
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that request.";
      
      hideTypingIndicator();
      addMessage(aiResponse, 'bot');
    } else {
      throw new Error('API Error');
    }
  } catch (error) {
    console.error('Chat error:', error);
    hideTypingIndicator();
    addMessage("I'm sorry, I'm having trouble connecting right now. Please try again later.", 'bot');
  }
  
  isTyping = false;
}

function addMessage(text, sender) {
  const messagesContainer = document.getElementById('chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = \`message \${sender}\`;
  
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  messageDiv.innerHTML = \`
    <div class="message-content">\${text}</div>
    <div class="message-info">
      \${sender === 'bot' ? \`<span>${aiAgentConfig.agentName}</span><span>•</span>\` : ''}
      <span>\${timeString}</span>
    </div>
  \`;
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTypingIndicator() {
  const messagesContainer = document.getElementById('chat-messages');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'typing-indicator';
  typingDiv.id = 'typing-indicator';
  
  typingDiv.innerHTML = \`
    <span style="font-size: 12px; color: #64748b;">${aiAgentConfig.agentName} is typing</span>
    <div class="typing-dots">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  \`;
  
  messagesContainer.appendChild(typingDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function hideTypingIndicator() {
  const indicator = document.getElementById('typing-indicator');
  if (indicator) {
    indicator.remove();
  }
}

// Input Handling
function handleKeyDown(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
}

function autoResize(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
}

// Keyboard Shortcuts
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && chatOpen) {
    closeChat();
  }
});

// Initialize
console.log('WhatsX Chatbot Widget initialized');

// Show notification badge after 3 seconds if chat is not opened
setTimeout(() => {
  if (!chatOpen) {
    document.getElementById('notification-badge').style.display = 'flex';
  }
}, 3000);
</script>

</body>
</html>`;
  };

  const generateFormHTML = () => {
    const fieldsHTML = fields.map((field) => {
      switch (field.type) {
        case 'text':
        case 'email':
          return `    <div style="margin-bottom: ${formStyle.spacing};">
      <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: ${formStyle.textColor}; font-family: ${formStyle.fontFamily};">${field.label}${field.required ? ' *' : ''}</label>
      <input type="${field.type}" name="${field.id}" ${field.required ? 'required' : ''} placeholder="${field.placeholder || ''}" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: ${formStyle.borderRadius}; font-size: 16px; font-family: ${formStyle.fontFamily};">
    </div>`;

        case 'textarea':
          return `    <div style="margin-bottom: ${formStyle.spacing};">
      <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: ${formStyle.textColor}; font-family: ${formStyle.fontFamily};">${field.label}${field.required ? ' *' : ''}</label>
      <textarea name="${field.id}" ${field.required ? 'required' : ''} placeholder="${field.placeholder || ''}" rows="3" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: ${formStyle.borderRadius}; resize: vertical; font-size: 16px; font-family: ${formStyle.fontFamily};"></textarea>
    </div>`;

        case 'select':
          const options = field.options?.map(opt => `        <option value="${opt}">${opt}</option>`).join('\n') || '';
          return `    <div style="margin-bottom: ${formStyle.spacing};">
      <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: ${formStyle.textColor}; font-family: ${formStyle.fontFamily};">${field.label}${field.required ? ' *' : ''}</label>
      <select name="${field.id}" ${field.required ? 'required' : ''} style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: ${formStyle.borderRadius}; font-size: 16px; font-family: ${formStyle.fontFamily};">
        <option value="">${field.placeholder || 'Select an option'}</option>
${options}
      </select>
    </div>`;

        case 'checkbox':
          return `    <div style="margin-bottom: ${formStyle.spacing};">
      <label style="display: flex; align-items: center; gap: 0.5rem; font-weight: 500; color: ${formStyle.textColor}; font-family: ${formStyle.fontFamily};">
        <input type="checkbox" name="${field.id}" ${field.required ? 'required' : ''} style="width: 16px; height: 16px;">
        ${field.label}${field.required ? ' *' : ''}
      </label>
    </div>`;

        case 'radio':
          const radioOptions = field.options?.map((opt, index) => 
            `        <label style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; font-family: ${formStyle.fontFamily};">
          <input type="radio" name="${field.id}" value="${opt}" ${field.required && index === 0 ? 'required' : ''} style="width: 16px; height: 16px;">
          ${opt}
        </label>`
          ).join('\n') || '';
          return `    <div style="margin-bottom: ${formStyle.spacing};">
      <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: ${formStyle.textColor}; font-family: ${formStyle.fontFamily};">${field.label}${field.required ? ' *' : ''}</label>
${radioOptions}
    </div>`;

        default:
          return '';
      }
    }).join('\n\n');

    const formId = `whatsx-form-${Date.now()}`;
    const popupId = `whatsx-popup-${Date.now()}`;

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WhatsX Form - ${title}</title>
  <style>
    * { box-sizing: border-box; }
  </style>
</head>
<body>

<!-- WhatsX Generated Form -->
<div id="${popupId}" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 9999;">
  <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: ${formStyle.backgroundColor}; padding: 2rem; border-radius: ${formStyle.borderRadius}; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); max-width: 400px; width: 90%; margin: 0 1rem; font-family: ${formStyle.fontFamily};">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: ${formStyle.spacing};">
      <h3 style="margin: 0; font-size: 1.25rem; font-weight: 600; color: ${formStyle.textColor}; font-family: ${formStyle.fontFamily};">${title}</h3>
      <button onclick="closeWhatsXPopup('${popupId}')" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; padding: 0.25rem; min-height: 44px; min-width: 44px; color: ${formStyle.textColor};">&times;</button>
    </div>
    <form id="${formId}">
${fieldsHTML}
      <button type="submit" style="width: 100%; padding: 0.75rem; background: ${formStyle.primaryColor}; color: white; border: none; border-radius: ${formStyle.borderRadius}; font-weight: 500; cursor: pointer; font-size: 16px; min-height: 44px; font-family: ${formStyle.fontFamily}; margin-bottom: 1rem;">
        📱 ${formStyle.buttonText}
      </button>
    </form>
    
    <!-- WhatsX Branding -->
    <div style="text-align: center; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #e5e7eb;">
      <div style="display: inline-flex; align-items: center; gap: 0.25rem; background: linear-gradient(to right, #2563eb, #7c3aed); color: white; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 12px; font-weight: 600;">
        ✨ WhatsX Form Builder
      </div>
    </div>
  </div>
</div>

<script>
function showWhatsXPopup(popupId) {
  document.getElementById(popupId).style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeWhatsXPopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
  document.body.style.overflow = 'auto';
}

document.getElementById('${formId}').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  
  const message = 'New Lead from WhatsX Form: ' + Array.from(formData.entries()).map(([key, value]) => {
    const fieldLabels = {${fields.map(f => `'${f.id}': '${f.label}'`).join(', ')}};
    return fieldLabels[key] + ': ' + value;
  }).join(', ');
  
  const whatsappUrl = \`https://wa.me/${whatsappNumber}?text=\${encodeURIComponent(message)}\`;
  
  window.open(whatsappUrl, '_blank');
  closeWhatsXPopup('${popupId}');
  this.reset();
});

document.getElementById('${popupId}').addEventListener('click', function(e) {
  if (e.target === this) {
    closeWhatsXPopup('${popupId}');
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && document.getElementById('${popupId}').style.display === 'block') {
    closeWhatsXPopup('${popupId}');
  }
});

console.log('WhatsX Form initialized successfully');
</script>

<button onclick="showWhatsXPopup('${popupId}')" style="background: linear-gradient(to right, ${formStyle.primaryColor}, #7c3aed); color: white; padding: 0.75rem 1.5rem; border: none; border-radius: ${formStyle.borderRadius}; cursor: pointer; font-weight: 500; font-size: 16px; min-height: 44px; font-family: ${formStyle.fontFamily}; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  ✨ ${title}
</button>

</body>
</html>`;
  };

  const copyCode = (code: string, type: string) => {
    navigator.clipboard.writeText(code).then(() => {
      toast({
        title: `${type} Code Copied! ✨`,
        description: `WhatsX ${type.toLowerCase()} code has been copied to your clipboard.`,
        duration: 3000,
      });
    });
  };

  const downloadCode = (code: string, filename: string, type: string) => {
    const blob = new Blob([code], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: `${type} Downloaded! 🚀`,
      description: `WhatsX ${type.toLowerCase()} has been downloaded as an HTML file.`,
      duration: 3000,
    });
  };

  return (
    <div className="space-y-4">
      {/* AI Configuration Status */}
      {aiAgentConfig?.enabled && (
        <Card className={`border-2 ${aiValidation.isValid ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              {aiValidation.isValid ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-900">AI Chatbot Ready</span>
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    <Bot className="w-3 h-3 mr-1" />
                    {aiAgentConfig.agentName}
                  </Badge>
                </>
              ) : (
                <>
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <span className="font-medium text-red-900">AI Configuration Required</span>
                  <span className="text-red-700 text-sm">({aiValidation.message})</span>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="form" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="form" className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            WhatsApp Form
          </TabsTrigger>
          <TabsTrigger value="chatbot" className="flex items-center gap-2" disabled={!aiAgentConfig?.enabled || !aiValidation.isValid}>
            <Bot className="w-4 h-4" />
            AI Chatbot Widget
          </TabsTrigger>
        </TabsList>

        <TabsContent value="form">
          <Card className="border-2 border-gradient-to-r from-blue-100 to-purple-100">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />
                  WhatsApp Lead Capture Form
                </div>
                <div className="flex space-x-2">
                  <Button onClick={() => copyCode(generateFormHTML(), "Form")} size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Code
                  </Button>
                  <Button onClick={() => downloadCode(generateFormHTML(), 'whatsx-form.html', "Form")} size="sm" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={generateFormHTML()}
                readOnly
                className="font-mono text-sm h-96 bg-gray-50"
                placeholder="Your WhatsApp form code will appear here..."
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chatbot">
          {aiAgentConfig?.enabled && aiValidation.isValid ? (
            <Card className="border-2 border-gradient-to-r from-purple-100 to-pink-100">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bot className="w-5 h-5 mr-2 text-purple-600" />
                    AI Chatbot Widget
                    <Badge className="ml-2 bg-purple-100 text-purple-700">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Professional Widget
                    </Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button onClick={() => copyCode(generateChatbotWidget(), "Chatbot")} size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Code
                    </Button>
                    <Button onClick={() => downloadCode(generateChatbotWidget(), 'chatbot-widget.html', "Chatbot")} size="sm" variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={generateChatbotWidget()}
                  readOnly
                  className="font-mono text-sm h-96 bg-gray-50"
                  placeholder="Your chatbot widget code will appear here..."
                />
                
                <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg">
                  <h4 className="font-medium text-purple-900 mb-2 flex items-center">
                    <Bot className="w-4 h-4 mr-2" />
                    Professional Chatbot Widget Features:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium text-purple-800 mb-1">🎨 Modern Design:</h5>
                      <ul className="text-purple-700 space-y-1">
                        <li>• Floating chat bubble with gradient effects</li>
                        <li>• Smooth animations and transitions</li>
                        <li>• Professional message bubbles</li>
                        <li>• Typing indicators with animated dots</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-800 mb-1">⚡ Smart Features:</h5>
                      <ul className="text-blue-700 space-y-1">
                        <li>• Auto-expanding input field</li>
                        <li>• Notification badge after 3 seconds</li>
                        <li>• Keyboard shortcuts (Enter/Escape)</li>
                        <li>• Mobile-responsive design</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-3 p-3 bg-white/50 rounded-lg">
                    <h5 className="font-medium text-purple-900 mb-1">🚀 Ready to Deploy:</h5>
                    <ol className="list-decimal list-inside text-xs text-purple-700 space-y-1">
                      <li>Copy the generated HTML code above</li>
                      <li>Save as an HTML file or embed directly in your website</li>
                      <li>The chatbot appears as a floating bubble in bottom-right</li>
                      <li>Users can start chatting with your AI assistant instantly!</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-2 border-gray-200">
              <CardContent className="flex items-center justify-center h-96">
                <div className="text-center space-y-4">
                  <Bot className="w-16 h-16 text-gray-400 mx-auto" />
                  <h3 className="text-lg font-medium text-gray-600">AI Chatbot Not Configured</h3>
                  <p className="text-gray-500">
                    {!aiAgentConfig?.enabled 
                      ? "Enable and configure your AI agent to generate the chatbot widget."
                      : aiValidation.message
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};
