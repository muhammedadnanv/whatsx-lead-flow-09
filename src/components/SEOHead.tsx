
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

const SEOHead = ({ 
  title = "WhatsX - Turn Website Visitors Into WhatsApp Leads | AI-Powered Lead Generation",
  description = "Create AI-powered form popups that capture leads and instantly deliver them to your WhatsApp. Revolutionary SaaS tool with Google Gemini AI for 87% higher conversion rates.",
  keywords = "WhatsApp leads, lead generation, AI forms, form builder, WhatsApp integration, lead capture, popup forms, SaaS, conversion optimization, Google Gemini AI",
  ogImage = "/lovable-uploads/be006f58-eee2-40fe-8e43-6cd2158678aa.png",
  canonicalUrl,
  structuredData
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
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', 'WhatsX');
    updateMetaTag('language', 'English');

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', `${baseUrl}${ogImage}`, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', 'WhatsX', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Update Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:url', currentUrl, true);
    updateMetaTag('twitter:image', `${baseUrl}${ogImage}`, true);
    updateMetaTag('twitter:site', '@whatsx_ai', true);
    updateMetaTag('twitter:creator', '@whatsx_ai', true);

    // Update structured data
    const defaultStructuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "WhatsX",
      "description": description,
      "url": baseUrl,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free to start"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "150"
      },
      "creator": {
        "@type": "Organization",
        "name": "WhatsX",
        "url": baseUrl,
        "logo": `${baseUrl}${ogImage}`,
        "sameAs": [
          "https://twitter.com/whatsx_ai",
          "https://linkedin.com/company/whatsx"
        ]
      }
    };

    const finalStructuredData = structuredData || defaultStructuredData;

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(finalStructuredData);
    document.head.appendChild(script);

  }, [title, description, keywords, ogImage, currentUrl, structuredData]);

  return null;
};

export default SEOHead;
