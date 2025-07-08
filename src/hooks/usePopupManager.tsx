
import { useState, useEffect } from 'react';

export const usePopupManager = () => {
  const [showAISaaSPopup, setShowAISaaSPopup] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('aisaas-popup-shown');
    
    if (!popupShown) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setShowAISaaSPopup(true);
        sessionStorage.setItem('aisaas-popup-shown', 'true');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closeAISaaSPopup = () => {
    setShowAISaaSPopup(false);
  };

  return {
    showAISaaSPopup,
    closeAISaaSPopup
  };
};
