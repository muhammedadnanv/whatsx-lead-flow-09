
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2, GripVertical, Type, Mail, MessageSquare, List, CheckSquare, Radio } from "lucide-react";
import { FormField } from "@/pages/FormBuilder";

interface FormFieldEditorProps {
  fields: FormField[];
  onAddField: (type: FormField['type']) => void;
  onUpdateField: (id: string, updates: Partial<FormField>) => void;
  onRemoveField: (id: string) => void;
}

const fieldTypeIcons = {
  text: Type,
  email: Mail,
  textarea: MessageSquare,
  select: List,
  checkbox: CheckSquare,
  radio: Radio
};

export const FormFieldEditor = ({ fields, onAddField, onUpdateField, onRemoveField }: FormFieldEditorProps) => {
  const [expandedField, setExpandedField] = useState<string | null>(null);

  const fieldTypes: { value: FormField['type']; label: string }[] = [
    { value: 'text', label: 'Text Input' },
    { value: 'email', label: 'Email Input' },
    { value: 'textarea', label: 'Textarea' },
    { value: 'select', label: 'Select Dropdown' },
    { value: 'checkbox', label: 'Checkbox' },
    { value: 'radio', label: 'Radio Button' }
  ];

  const updateFieldOptions = (id: string, optionsText: string) => {
    const options = optionsText.split('\n').filter(opt => opt.trim()).map(opt => opt.trim());
    onUpdateField(id, { options });
  };

  return (
    <div className="space-y-4">
      {/* Add Field Buttons */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Add Form Fields</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {fieldTypes.map((type) => {
              const Icon = fieldTypeIcons[type.value];
              return (
                <Button
                  key={type.value}
                  variant="outline"
                  onClick={() => onAddField(type.value)}
                  className="flex flex-col h-20 space-y-2"
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs">{type.label}</span>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Form Fields List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Form Fields ({fields.length})</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {fields.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              No fields added yet. Click on a field type above to get started.
            </p>
          ) : (
            fields.map((field, index) => {
              const Icon = fieldTypeIcons[field.type];
              const isExpanded = expandedField === field.id;
              
              return (
                <div key={field.id} className="border rounded-lg p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <GripVertical className="w-4 h-4 text-gray-400" />
                      <Icon className="w-4 h-4 text-gray-600" />
                      <div>
                        <p className="font-medium">{field.label}</p>
                        <p className="text-sm text-gray-500 capitalize">{field.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setExpandedField(isExpanded ? null : field.id)}
                      >
                        {isExpanded ? 'Collapse' : 'Edit'}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemoveField(field.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`label-${field.id}`}>Field Label</Label>
                          <Input
                            id={`label-${field.id}`}
                            value={field.label}
                            onChange={(e) => onUpdateField(field.id, { label: e.target.value })}
                            placeholder="Enter field label"
                          />
                        </div>
                        
                        {field.type !== 'checkbox' && field.type !== 'radio' && (
                          <div>
                            <Label htmlFor={`placeholder-${field.id}`}>Placeholder</Label>
                            <Input
                              id={`placeholder-${field.id}`}
                              value={field.placeholder || ''}
                              onChange={(e) => onUpdateField(field.id, { placeholder: e.target.value })}
                              placeholder="Enter placeholder text"
                            />
                          </div>
                        )}
                      </div>

                      {(field.type === 'select' || field.type === 'radio') && (
                        <div>
                          <Label htmlFor={`options-${field.id}`}>Options (one per line)</Label>
                          <Textarea
                            id={`options-${field.id}`}
                            value={field.options?.join('\n') || ''}
                            onChange={(e) => updateFieldOptions(field.id, e.target.value)}
                            placeholder="Option 1&#10;Option 2&#10;Option 3"
                            rows={4}
                          />
                        </div>
                      )}

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={`required-${field.id}`}
                          checked={field.required}
                          onCheckedChange={(checked) => onUpdateField(field.id, { required: !!checked })}
                        />
                        <Label htmlFor={`required-${field.id}`}>Required field</Label>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </CardContent>
      </Card>
    </div>
  );
};
