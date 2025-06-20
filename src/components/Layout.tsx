
import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import SEOHead from "./SEOHead";

interface LayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  seoImage?: string;
}

const Layout = ({ 
  children, 
  showFooter = true,
  seoTitle,
  seoDescription,
  seoKeywords,
  seoImage
}: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        ogImage={seoImage}
      />
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
