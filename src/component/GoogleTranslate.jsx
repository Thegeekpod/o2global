// import React, { useEffect } from 'react';

// const GoogleTranslate = () => {
//   useEffect(() => {
//     // Check if the script is already added to prevent duplicates
//     if (!document.querySelector('script[src="//translate.google.com/translate_a/element.js"]')) {
//       const script = document.createElement('script');
//       script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//       script.async = true;
//       document.body.appendChild(script);

//       // Define the Google Translate initialization function
//       window.googleTranslateElementInit = () => {
//         if (!window.googleTranslateInitialized) {
//           new window.google.translate.TranslateElement(
//             {
//               pageLanguage: 'en',
//               layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//             },
//             'google_translate_element'
//           );
//           window.googleTranslateInitialized = true; // Prevent multiple initializations
//         }
//       };
//     }

//     // Cleanup script on component unmount
//     return () => {
//       const script = document.querySelector('script[src="//translate.google.com/translate_a/element.js"]');
//       if (script) document.body.removeChild(script);
//       delete window.googleTranslateElementInit; // Clean up the global function
//       delete window.googleTranslateInitialized; // Reset initialization flag
//     };
//   }, []);

//   return <div id="google_translate_element" style={{ display: 'inline-block' }}></div>;
// };

// export default GoogleTranslate;
import React, { useEffect } from 'react';

const GoogleTransalte = () => {
  useEffect(() => {
    // Load the Google Translate script
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = "https://translate.google.com/translate_a/element.js?cb=initGoogleTranslate";
      script.async = true;
      document.body.appendChild(script);
    };

    window.initGoogleTranslate = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', includedLanguages: 'es,fr,de,zh-CN,hi', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
        'google_translate_element'
      );
    };

    addGoogleTranslateScript();
  }, []);

  const handleLanguageChange = (e) => {
    const language = e.target.value;
    const iframe = document.querySelector('iframe.goog-te-menu-frame');
    if (iframe) {
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      const languageLinks = iframeDocument.querySelectorAll('.goog-te-menu2-item span.text');
      languageLinks.forEach((link) => {
        if (link.innerText.toLowerCase().includes(language.toLowerCase())) {
          link.click();
        }
      });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
    
        <div className="custom-dropdown">
          <select onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh-CN">Chinese</option>
            <option value="hi">Hindi</option>
          </select>
        </div>
        <div id="google_translate_element" style={{ display: 'none' }}></div>
      </header>
    </div>
  );
};

export default GoogleTransalte;
