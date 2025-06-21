
import { Sparkles, MessageCircle } from "lucide-react";

interface BrandWatermarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  position?: 'corner' | 'center' | 'inline';
  variant?: 'default' | 'minimal' | 'badge';
}

export const BrandWatermark = ({ 
  className = "", 
  size = 'md', 
  position = 'corner',
  variant = 'default'
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

  if (variant === 'minimal') {
    return (
      <div className={`${positionClasses[position]} ${className}`}>
        <a 
          href="https://whatsx-nine.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`flex items-center space-x-1 text-gray-500 hover:text-whatsapp-green transition-colors duration-300 ${sizeClasses[size]}`}
        >
          <span className="font-medium">WhatsX</span>
        </a>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`${positionClasses[position]} ${className}`}>
        <a 
          href="https://whatsx-nine.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`flex items-center space-x-1 px-2 py-1 bg-whatsapp-green/10 text-whatsapp-green rounded-md border border-whatsapp-green/20 hover:bg-whatsapp-green/20 transition-all duration-300 ${sizeClasses[size]}`}
        >
          <MessageCircle className="w-3 h-3" />
          <span className="font-semibold">WhatsX</span>
        </a>
      </div>
    );
  }

  return (
    <div className={`${positionClasses[position]} ${className}`}>
      <a 
        href="https://whatsx-nine.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-whatsapp-green to-whatsapp-dark-green text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group ${sizeClasses[size]}`}
      >
        <Sparkles className="w-3 h-3 group-hover:animate-spin" />
        <span className="font-bold tracking-wide">WhatsX</span>
        <span className="text-green-100 font-medium">Lead Gen</span>
      </a>
    </div>
  );
};
