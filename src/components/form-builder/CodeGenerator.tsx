
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FormField, FormStyle } from "@/pages/FormBuilder";

interface CodeGeneratorProps {
  title: string;
  fields: FormField[];
  formStyle: FormStyle;
  whatsappNumber: string;
}

export const CodeGenerator = ({ title, fields, formStyle, whatsappNumber }: CodeGeneratorProps) => {
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

    return `<!-- WhatsX Generated Form Popup -->
<div id="whatsx-popup-${Date.now()}" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 9999;">
  <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: ${formStyle.backgroundColor}; padding: 2rem; border-radius: ${formStyle.borderRadius}; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); max-width: 400px; width: 90%; margin: 0 1rem; font-family: ${formStyle.fontFamily};">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: ${formStyle.spacing};">
      <h3 style="margin: 0; font-size: 1.25rem; font-weight: 600; color: ${formStyle.textColor}; font-family: ${formStyle.fontFamily};">${title}</h3>
      <button onclick="closeWhatsXPopup()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; padding: 0.25rem; min-height: 44px; min-width: 44px; color: ${formStyle.textColor};">&times;</button>
    </div>
    <form id="whatsx-form-${Date.now()}">
${fieldsHTML}
      <button type="submit" style="width: 100%; padding: 0.75rem; background: ${formStyle.primaryColor}; color: white; border: none; border-radius: ${formStyle.borderRadius}; font-weight: 500; cursor: pointer; font-size: 16px; min-height: 44px; font-family: ${formStyle.fontFamily};">
        📱 ${formStyle.buttonText}
      </button>
    </form>
  </div>
</div>

<script>
function showWhatsXPopup() {
  document.getElementById('whatsx-popup-${Date.now()}').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeWhatsXPopup() {
  document.getElementById('whatsx-popup-${Date.now()}').style.display = 'none';
  document.body.style.overflow = 'auto';
}

document.getElementById('whatsx-form-${Date.now()}').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  
  // Build the message
  const message = 'New Lead from WhatsX Form,' + Array.from(formData.entries()).map(([key, value]) => {
    const fieldLabels = {${fields.map(f => `'${f.id}': '${f.label}'`).join(', ')}};
    return fieldLabels[key] + ': ' + value;
  }).join(',');
  
  const whatsappUrl = \`https://wa.me/${whatsappNumber}?text=\${encodeURIComponent(message)}\`;
  
  window.open(whatsappUrl, '_blank');
  closeWhatsXPopup();
  this.reset();
});

// Close popup when clicking outside
document.getElementById('whatsx-popup-${Date.now()}').addEventListener('click', function(e) {
  if (e.target === this) {
    closeWhatsXPopup();
  }
});

// Close popup with escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && document.getElementById('whatsx-popup-${Date.now()}').style.display === 'block') {
    closeWhatsXPopup();
  }
});
</script>

<!-- Usage: Add this button anywhere on your website -->
<button onclick="showWhatsXPopup()" style="background: ${formStyle.primaryColor}; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: ${formStyle.borderRadius}; cursor: pointer; font-weight: 500; font-size: 16px; min-height: 44px; font-family: ${formStyle.fontFamily};">
  ${title}
</button>`;
  };

  const copyCode = () => {
    const code = generateFormHTML();
    navigator.clipboard.writeText(code).then(() => {
      toast({
        title: "Code Copied!",
        description: "Form code has been copied to your clipboard.",
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
      title: "Code Downloaded!",
      description: "Form code has been downloaded as an HTML file.",
      duration: 3000,
    });
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Generated Form Code
            <div className="flex space-x-2">
              <Button onClick={copyCode} size="sm">
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </Button>
              <Button onClick={downloadCode} size="sm" variant="outline">
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
            className="font-mono text-sm h-96"
            placeholder="Your generated form code will appear here..."
          />
          
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">How to use this code:</h4>
            <ol className="list-decimal list-inside text-sm text-blue-800 space-y-1">
              <li>Copy the generated code above</li>
              <li>Paste it into your website's HTML</li>
              <li>The form popup will be ready to use!</li>
              <li>Make sure to replace "{whatsappNumber}" with your actual WhatsApp number</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
