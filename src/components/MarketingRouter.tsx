
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MarketingRouter = () => {
  const location = useLocation();

  useEffect(() => {
    // Track marketing landing page visits for analytics
    const marketingPages = ['/ai', '/builder', '/business', '/developers', '/mobile'];
    
    if (marketingPages.includes(location.pathname)) {
      // Log marketing page visit for conversion tracking
      console.log(`Marketing Strategy: ${location.pathname} page visited`);
      
      // You could add analytics tracking here:
      // analytics.track('Marketing Page Visit', { page: location.pathname });
      
      // Add conversion optimization metadata
      if (typeof window !== 'undefined') {
        document.documentElement.setAttribute('data-marketing-page', location.pathname.substring(1));
      }
    }
  }, [location]);

  return null; // This component only handles routing logic
};

export default MarketingRouter;
