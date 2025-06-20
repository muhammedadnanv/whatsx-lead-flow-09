
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MessageCircle, X } from "lucide-react";
import { FormField, FormStyle } from "@/pages/FormBuilder";
import { BrandWatermark } from "./BrandWatermark";
import { useToast } from "@/hooks/use-toast";

interface FormPreviewProps {
  title: string;
  fields: FormField[];
  formStyle: FormStyle;
  whatsappNumber: string;
  compact?: boolean;
}

export const FormPreview = ({ title, fields, formStyle, whatsappNumber, compact = false }: FormPreviewProps) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    
    toast({
      title: "Form Submitted!",
      description: "Your message has been prepared for WhatsApp.",
    });
  };

  const updateFormData = (fieldId: string, value: any) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }));
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
            className="mt-1 mobile-text text-base w-full min-h-[44px]"
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
            className="mt-1 mobile-text text-base w-full min-h-[80px] resize-none"
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
            <SelectTrigger className="mt-1 mobile-text text-base w-full min-h-[44px]" style={inputStyles}>
              <SelectValue placeholder={field.placeholder || 'Select an option'} />
            </SelectTrigger>
            <SelectContent className="bg-white z-50 max-h-[200px] overflow-y-auto">
              {field.options?.map((option, index) => (
                <SelectItem key={index} value={option} className="text-base py-3">
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'checkbox':
        return (
          <div className="flex items-start space-x-3 mt-2">
            <Checkbox
              id={field.id}
              checked={formData[field.id] || false}
              onCheckedChange={(checked) => updateFormData(field.id, checked)}
              required={field.required}
              className="min-w-[20px] min-h-[20px] mt-1 flex-shrink-0"
            />
            <Label htmlFor={field.id} style={baseStyles} className="mobile-text text-base cursor-pointer leading-relaxed">
              {field.label}
            </Label>
          </div>
        );

      case 'radio':
        return (
          <RadioGroup
            value={formData[field.id] || ''}
            onValueChange={(value) => updateFormData(field.id, value)}
            className="mt-2 space-y-3"
            required={field.required}
          >
            {field.options?.map((option, index) => (
              <div key={index} className="flex items-start space-x-3">
                <RadioGroupItem 
                  value={option} 
                  id={`${field.id}-${index}`} 
                  className="min-w-[20px] min-h-[20px] mt-1 flex-shrink-0"
                />
                <Label 
                  htmlFor={`${field.id}-${index}`} 
                  style={baseStyles} 
                  className="mobile-text text-base cursor-pointer leading-relaxed"
                >
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
      <div className="relative w-full max-w-sm mx-auto">
        <div style={containerStyle} className="p-3 sm:p-4 border rounded-lg space-y-3 relative">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm sm:text-base truncate pr-2" style={{ color: formStyle.textColor }}>
              {title}
            </h3>
            <BrandWatermark size="sm" position="inline" className="opacity-60 flex-shrink-0" />
          </div>
          {fields.slice(0, 2).map((field) => (
            <div key={field.id} className="space-y-1">
              {field.type !== 'checkbox' && (
                <Label className="text-xs sm:text-sm font-medium block" style={{ color: formStyle.textColor }}>
                  {field.label} {field.required && '*'}
                </Label>
              )}
              <div className="text-sm">
                {renderField(field)}
              </div>
            </div>
          ))}
          {fields.length > 2 && (
            <p className="text-xs text-gray-500 text-center">
              +{fields.length - 2} more fields
            </p>
          )}
          <Button
            onClick={handleSubmit}
            size="sm"
            className="w-full text-sm min-h-[44px] flex items-center justify-center"
            style={buttonStyle}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            {formStyle.buttonText}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/50 p-3 sm:p-4 rounded-lg relative w-full max-w-lg mx-auto">
      <div style={containerStyle} className="w-full p-4 sm:p-6 shadow-2xl relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg sm:text-xl font-semibold truncate pr-2" style={{ color: formStyle.textColor }}>
            {title}
          </h3>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <BrandWatermark size="sm" position="inline" className="opacity-70" />
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 min-w-[44px] min-h-[44px] p-2">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {isSubmitted && (
          <div className="mb-4 p-3 bg-green-100 border border-green-300 rounded-md">
            <p className="text-green-800 text-sm mobile-text">
              Form submitted successfully! {!compact && 'Check WhatsApp for the message.'}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field.id} className="space-y-1">
              {field.type !== 'checkbox' && (
                <Label className="font-medium text-base block" style={{ color: formStyle.textColor }}>
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </Label>
              )}
              {renderField(field)}
            </div>
          ))}

          <Button
            type="submit"
            className="w-full text-white font-medium min-h-[48px] text-base flex items-center justify-center"
            style={buttonStyle}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            {formStyle.buttonText}
          </Button>
        </form>

        <p className="text-xs text-gray-500 mt-3 text-center mobile-text">
          This message will be sent directly to WhatsApp • Powered by WhatsX
        </p>
      </div>
    </div>
  );
};
