import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    // Check if the script is already added to prevent duplicates
    if (!document.querySelector('script[src="//translate.google.com/translate_a/element.js"]')) {
      const script = document.createElement('script');
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      // Define the Google Translate initialization function
      window.googleTranslateElementInit = () => {
        if (!window.googleTranslateInitialized) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            'google_translate_element'
          );
          window.googleTranslateInitialized = true; // Prevent multiple initializations
        }
      };
    }

    // Cleanup script on component unmount
    return () => {
      const script = document.querySelector('script[src="//translate.google.com/translate_a/element.js"]');
      if (script) document.body.removeChild(script);
      delete window.googleTranslateElementInit; // Clean up the global function
      delete window.googleTranslateInitialized; // Reset initialization flag
    };
  }, []);

  return <div id="google_translate_element" style={{ display: 'inline-block' }}></div>;
};

export default GoogleTranslate;
