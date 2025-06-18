
import { Sparkles } from "lucide-react";

interface BrandWatermarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  position?: 'corner' | 'center' | 'inline';
}

export const BrandWatermark = ({ 
  className = "", 
  size = 'md', 
  position = 'corner' 
}: BrandWatermarkProps) => {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const positionClasses = {
    corner: 'fixed bottom-4 right-4 z-50',
    center: 'flex items-center justify-center',
    inline: 'inline-flex items-center'
  };

  return (
    <div className={`${positionClasses[position]} ${className}`}>
      <div className={`flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${sizeClasses[size]}`}>
        <Sparkles className="w-3 h-3 animate-pulse" />
        <span className="font-semibold tracking-wide">WhatsX</span>
        <span className="text-blue-100">Form Builder</span>
      </div>
    </div>
  );
};
