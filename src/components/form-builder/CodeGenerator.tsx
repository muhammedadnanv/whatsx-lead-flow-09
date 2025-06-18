
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Copy, Download, Bot, Sparkles } from "lucide-react";
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
    const chatId = `whatsx-ai-chat-${Date.now()}`;

    const aiChatHTML = aiAgentConfig?.enabled ? `
    <!-- WhatsX AI Chat Widget -->
    <div id="${chatId}" style="display: none; position: fixed; bottom: 20px; right: 20px; width: 320px; height: 400px; background: white; border-radius: 12px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); border: 1px solid #e5e7eb; z-index: 10000; flex-direction: column;">
      <div style="padding: 1rem; border-bottom: 1px solid #e5e7eb; background: linear-gradient(to right, #dbeafe, #ede9fe); border-radius: 12px 12px 0 0; display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <div style="width: 20px; height: 20px; background: #2563eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px;">🤖</div>
          <span style="font-weight: 600; color: #1e40af;">${aiAgentConfig.agentName}</span>
        </div>
        <button onclick="closeAIChat('${chatId}')" style="background: none; border: none; cursor: pointer; padding: 0.25rem; color: #6b7280; font-size: 18px;">&times;</button>
      </div>
      <div id="chat-messages-${chatId}" style="flex: 1; overflow-y: auto; padding: 1rem; display: flex; flex-direction: column; gap: 0.75rem;">
        <div style="background: #f3f4f6; color: #374151; padding: 0.75rem; border-radius: 8px 8px 8px 2px; max-width: 85%; font-size: 14px;">
          ${aiAgentConfig.welcomeMessage}
        </div>
      </div>
      <div style="padding: 1rem; border-top: 1px solid #e5e7eb; display: flex; gap: 0.5rem;">
        <input id="chat-input-${chatId}" type="text" placeholder="Ask me anything..." style="flex: 1; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px;" onkeypress="if(event.key==='Enter') sendChatMessage('${chatId}')">
        <button onclick="sendChatMessage('${chatId}')" style="background: #2563eb; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-size: 14px;">Send</button>
      </div>
    </div>
    
    <!-- AI Chat Button -->
    <button id="ai-chat-trigger-${chatId}" onclick="showAIChat('${chatId}')" style="position: fixed; bottom: 20px; right: 20px; background: linear-gradient(to right, #2563eb, #7c3aed); color: white; border: none; padding: 0.75rem 1rem; border-radius: 50px; cursor: pointer; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); display: flex; align-items: center; gap: 0.5rem; font-weight: 500; z-index: 9999;">
      🤖 Need Help?
    </button>` : '';

    const aiScripts = aiAgentConfig?.enabled ? `
// AI Chat Functionality
function showAIChat(chatId) {
  document.getElementById(chatId).style.display = 'flex';
  document.getElementById('ai-chat-trigger-' + chatId).style.display = 'none';
}

function closeAIChat(chatId) {
  document.getElementById(chatId).style.display = 'none';
  document.getElementById('ai-chat-trigger-' + chatId).style.display = 'flex';
}

async function sendChatMessage(chatId) {
  const input = document.getElementById('chat-input-' + chatId);
  const message = input.value.trim();
  if (!message) return;
  
  // Add user message
  addMessageToChat(chatId, message, true);
  input.value = '';
  
  // Show typing indicator
  showTypingIndicator(chatId);
  
  try {
    // Call Gemini API with correct model name
    const response = await fetch(\`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${aiAgentConfig.geminiApiKey}\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: \`${aiAgentConfig.systemPrompt}\\n\\nForm context: ${title}\\nFields: ${fields.map(f => f.label).join(', ')}\\n\\nUser question: \${message}\`
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
      addMessageToChat(chatId, aiResponse, false);
    } else {
      throw new Error('API Error');
    }
  } catch (error) {
    console.error('Chat error:', error);
    addMessageToChat(chatId, "I'm sorry, I'm having trouble connecting right now. Please check your API key and try again later.", false);
  }
  
  hideTypingIndicator(chatId);
}

function addMessageToChat(chatId, text, isUser) {
  const messagesContainer = document.getElementById('chat-messages-' + chatId);
  const messageDiv = document.createElement('div');
  messageDiv.style.cssText = \`
    background: \${isUser ? '#2563eb' : '#f3f4f6'};
    color: \${isUser ? 'white' : '#374151'};
    padding: 0.75rem;
    border-radius: \${isUser ? '8px 8px 2px 8px' : '8px 8px 8px 2px'};
    max-width: 85%;
    font-size: 14px;
    align-self: \${isUser ? 'flex-end' : 'flex-start'};
    margin-bottom: 0.75rem;
  \`;
  messageDiv.textContent = text;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTypingIndicator(chatId) {
  const indicator = document.createElement('div');
  indicator.id = 'typing-indicator-' + chatId;
  indicator.style.cssText = 'background: #f3f4f6; color: #374151; padding: 0.75rem; border-radius: 8px 8px 8px 2px; max-width: 85%; font-size: 14px; align-self: flex-start; margin-bottom: 0.75rem;';
  indicator.innerHTML = '<div style="display: flex; gap: 2px;"><div style="width: 4px; height: 4px; background: #6b7280; border-radius: 50%; animation: bounce 1s infinite;"></div><div style="width: 4px; height: 4px; background: #6b7280; border-radius: 50%; animation: bounce 1s infinite 0.1s;"></div><div style="width: 4px; height: 4px; background: #6b7280; border-radius: 50%; animation: bounce 1s infinite 0.2s;"></div></div>';
  document.getElementById('chat-messages-' + chatId).appendChild(indicator);
}

function hideTypingIndicator(chatId) {
  const indicator = document.getElementById('typing-indicator-' + chatId);
  if (indicator) indicator.remove();
}` : '';

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WhatsX Form - ${title}</title>
  <style>
    @keyframes bounce {
      0%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-5px); }
    }
  </style>
</head>
<body>

<!-- WhatsX Generated Form with AI Agent -->
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
      ${aiAgentConfig?.enabled ? `<button type="button" onclick="showAIChat('${chatId}')" style="width: 100%; padding: 0.75rem; background: linear-gradient(to right, #2563eb, #7c3aed); color: white; border: none; border-radius: ${formStyle.borderRadius}; font-weight: 500; cursor: pointer; font-size: 16px; min-height: 44px; font-family: ${formStyle.fontFamily};">🤖 Chat with ${aiAgentConfig.agentName}</button>` : ''}
    </form>
    
    <!-- WhatsX Branding -->
    <div style="text-align: center; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #e5e7eb;">
      <div style="display: inline-flex; align-items: center; gap: 0.25rem; background: linear-gradient(to right, #2563eb, #7c3aed); color: white; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 12px; font-weight: 600;">
        ✨ WhatsX Form Builder
      </div>
    </div>
  </div>
</div>

${aiChatHTML}

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
  
  // Build the message
  const message = 'New Lead from WhatsX Form,' + Array.from(formData.entries()).map(([key, value]) => {
    const fieldLabels = {${fields.map(f => `'${f.id}': '${f.label}'`).join(', ')}};
    return fieldLabels[key] + ': ' + value;
  }).join(',');
  
  const whatsappUrl = \`https://wa.me/${whatsappNumber}?text=\${encodeURIComponent(message)}\`;
  
  window.open(whatsappUrl, '_blank');
  closeWhatsXPopup('${popupId}');
  this.reset();
});

// Close popup when clicking outside
document.getElementById('${popupId}').addEventListener('click', function(e) {
  if (e.target === this) {
    closeWhatsXPopup('${popupId}');
  }
});

// Close popup with escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && document.getElementById('${popupId}').style.display === 'block') {
    closeWhatsXPopup('${popupId}');
  }
});

${aiScripts}
</script>

<!-- Usage: Add this button anywhere on your website -->
<button onclick="showWhatsXPopup('${popupId}')" style="background: linear-gradient(to right, ${formStyle.primaryColor}, #7c3aed); color: white; padding: 0.75rem 1.5rem; border: none; border-radius: ${formStyle.borderRadius}; cursor: pointer; font-weight: 500; font-size: 16px; min-height: 44px; font-family: ${formStyle.fontFamily}; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  ✨ ${title}
</button>

</body>
</html>`;
  };

  const copyCode = () => {
    const code = generateFormHTML();
    navigator.clipboard.writeText(code).then(() => {
      toast({
        title: "Code Copied! ✨",
        description: "WhatsX form code has been copied to your clipboard.",
        duration: 3000,
      });
    });
  };

  const downloadCode = () => {
    const code = generateFormHTML();
    const blob = new Blob([code], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'whatsx-form.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Code Downloaded! 🚀",
      description: "WhatsX form code has been downloaded as an HTML file.",
      duration: 3000,
    });
  };

  return (
    <div className="space-y-4">
      <Card className="border-2 border-gradient-to-r from-blue-100 to-purple-100">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-blue-600" />
              Generated WhatsX Form Code
              {aiAgentConfig?.enabled && (
                <Badge className="ml-2 bg-blue-100 text-blue-700">
                  <Bot className="w-3 h-3 mr-1" />
                  AI-Powered
                </Badge>
              )}
            </div>
            <div className="flex space-x-2">
              <Button onClick={copyCode} size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </Button>
              <Button onClick={downloadCode} size="sm" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
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
            placeholder="Your generated WhatsX form code will appear here..."
          />
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2 flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              How to use your WhatsX form:
            </h4>
            <ol className="list-decimal list-inside text-sm text-blue-800 space-y-1">
              <li>Copy the generated code above</li>
              <li>Save it as an HTML file (e.g., whatsx-form.html)</li>
              <li>Replace "{whatsappNumber}" with your actual WhatsApp number if needed</li>
              {aiAgentConfig?.enabled && (
                <li className="font-medium">🤖 Your AI agent will automatically help users with form questions!</li>
              )}
              <li>Your WhatsX form is ready to capture leads! ✨</li>
            </ol>
          </div>

          {aiAgentConfig?.enabled && (
            <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg">
              <h4 className="font-medium text-purple-900 mb-2 flex items-center">
                <Bot className="w-4 h-4 mr-2" />
                AI Agent Features:
              </h4>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Intelligent chat widget powered by Google Gemini</li>
                <li>• Contextual help based on your form fields</li>
                <li>• Custom personality: {aiAgentConfig.agentName}</li>
                <li>• Automatic responses to user questions</li>
                <li>• Real-time API key validation</li>
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
