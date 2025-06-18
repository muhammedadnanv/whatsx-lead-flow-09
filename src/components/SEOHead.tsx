
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SEOHead = ({ 
  title = "WhatsX - Turn Website Visitors Into WhatsApp Leads | AI-Powered Lead Generation",
  description = "Create AI-powered form popups that capture leads and instantly deliver them to your WhatsApp. Revolutionary SaaS tool with Google Gemini AI for 87% higher conversion rates.",
  keywords = "WhatsApp leads, lead generation, AI forms, form builder, WhatsApp integration, lead capture, popup forms, SaaS, conversion optimization, Google Gemini AI",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  canonicalUrl
}: SEOHeadProps) => {
  const location = useLocation();
  const baseUrl = "https://whatsx.lovable.app";
  const currentUrl = canonicalUrl || `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (meta) {
        meta.content = content;
      } else {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.href = currentUrl;
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = currentUrl;
      document.head.appendChild(canonical);
    }

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', ogImage, true);

    // Update Twitter tags
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:url', currentUrl, true);
    updateMetaTag('twitter:image', ogImage, true);

  }, [title, description, keywords, ogImage, currentUrl]);

  return null;
};

export default SEOHead;
