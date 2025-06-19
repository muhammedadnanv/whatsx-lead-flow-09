
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { FormStyle } from "@/pages/FormBuilder";

interface StyleEditorProps {
  formStyle: FormStyle;
  onUpdateStyle: (updates: Partial<FormStyle>) => void;
}

const colorPresets = [
  { name: 'WhatsApp Green', value: '#25d366' },
  { name: 'WhatsApp Dark', value: '#128c7e' },
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Purple', value: '#8b5cf6' },
  { name: 'Red', value: '#ef4444' },
  { name: 'Orange', value: '#f97316' },
];

const fontFamilies = [
  { name: 'Inter', value: 'Inter, sans-serif' },
  { name: 'Roboto', value: 'Roboto, sans-serif' },
  { name: 'Open Sans', value: '"Open Sans", sans-serif' },
  { name: 'Lato', value: 'Lato, sans-serif' },
  { name: 'Poppins', value: 'Poppins, sans-serif' },
  { name: 'Montserrat', value: 'Montserrat, sans-serif' },
];

export const StyleEditor = ({ formStyle, onUpdateStyle }: StyleEditorProps) => {
  return (
    <div className="space-y-6">
      {/* Colors */}
      <Card>
        <CardHeader>
          <CardTitle>Colors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Primary Color</Label>
            <div className="flex items-center space-x-3 mt-2">
              <Input
                type="color"
                value={formStyle.primaryColor}
                onChange={(e) => onUpdateStyle({ primaryColor: e.target.value })}
                className="w-16 h-10"
              />
              <Input
                value={formStyle.primaryColor}
                onChange={(e) => onUpdateStyle({ primaryColor: e.target.value })}
                placeholder="#25d366"
                className="flex-1"
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {colorPresets.map((preset) => (
                <Button
                  key={preset.name}
                  variant="outline"
                  size="sm"
                  onClick={() => onUpdateStyle({ primaryColor: preset.value })}
                  className="h-8"
                  style={{ backgroundColor: preset.value, color: 'white', borderColor: preset.value }}
                >
                  {preset.name}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <Label>Background Color</Label>
            <div className="flex items-center space-x-3 mt-2">
              <Input
                type="color"
                value={formStyle.backgroundColor}
                onChange={(e) => onUpdateStyle({ backgroundColor: e.target.value })}
                className="w-16 h-10"
              />
              <Input
                value={formStyle.backgroundColor}
                onChange={(e) => onUpdateStyle({ backgroundColor: e.target.value })}
                placeholder="#ffffff"
                className="flex-1"
              />
            </div>
          </div>

          <div>
            <Label>Text Color</Label>
            <div className="flex items-center space-x-3 mt-2">
              <Input
                type="color"
                value={formStyle.textColor}
                onChange={(e) => onUpdateStyle({ textColor: e.target.value })}
                className="w-16 h-10"
              />
              <Input
                value={formStyle.textColor}
                onChange={(e) => onUpdateStyle({ textColor: e.target.value })}
                placeholder="#1f2937"
                className="flex-1"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Typography */}
      <Card>
        <CardHeader>
          <CardTitle>Typography</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Font Family</Label>
            <Select
              value={formStyle.fontFamily}
              onValueChange={(value) => onUpdateStyle({ fontFamily: value })}
            >
              <SelectTrigger className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {fontFamilies.map((font) => (
                  <SelectItem key={font.value} value={font.value}>
                    <span style={{ fontFamily: font.value }}>{font.name}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Layout */}
      <Card>
        <CardHeader>
          <CardTitle>Layout</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Border Radius</Label>
            <Select
              value={formStyle.borderRadius}
              onValueChange={(value) => onUpdateStyle({ borderRadius: value })}
            >
              <SelectTrigger className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0px">None (0px)</SelectItem>
                <SelectItem value="4px">Small (4px)</SelectItem>
                <SelectItem value="8px">Medium (8px)</SelectItem>
                <SelectItem value="12px">Large (12px)</SelectItem>
                <SelectItem value="16px">Extra Large (16px)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Spacing</Label>
            <Select
              value={formStyle.spacing}
              onValueChange={(value) => onUpdateStyle({ spacing: value })}
            >
              <SelectTrigger className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0.5rem">Compact (0.5rem)</SelectItem>
                <SelectItem value="1rem">Normal (1rem)</SelectItem>
                <SelectItem value="1.5rem">Spacious (1.5rem)</SelectItem>
                <SelectItem value="2rem">Extra Spacious (2rem)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Button */}
      <Card>
        <CardHeader>
          <CardTitle>Submit Button</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="buttonText">Button Text</Label>
            <Input
              id="buttonText"
              value={formStyle.buttonText}
              onChange={(e) => onUpdateStyle({ buttonText: e.target.value })}
              placeholder="Send to WhatsApp"
              className="mt-2"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
