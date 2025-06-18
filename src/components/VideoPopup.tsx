
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play, Youtube } from "lucide-react";

interface VideoPopupProps {
  videoUrl: string;
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "ghost";
  buttonSize?: "default" | "sm" | "lg";
  className?: string;
}

export const VideoPopup = ({ 
  videoUrl, 
  buttonText = "Watch Demo", 
  buttonVariant = "outline",
  buttonSize = "default",
  className = ""
}: VideoPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Extract Loom video ID from URL
  const getLoomEmbedUrl = (url: string) => {
    const match = url.match(/loom\.com\/share\/([a-zA-Z0-9]+)/);
    if (match) {
      return `https://www.loom.com/embed/${match[1]}`;
    }
    return url;
  };

  const embedUrl = getLoomEmbedUrl(videoUrl);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={buttonVariant} 
          size={buttonSize}
          className={`group ${className}`}
        >
          <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full max-h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-xl font-semibold">How WhatsX Works</DialogTitle>
        </DialogHeader>
        <div className="aspect-video w-full p-6 pt-0">
          <iframe
            src={embedUrl}
            className="w-full h-full rounded-lg"
            frameBorder="0"
            allowFullScreen
            title="WhatsX Platform Demo"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
