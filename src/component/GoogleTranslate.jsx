import React, { useEffect, useRef } from 'react';

const GoogleTranslate = () => {
  const scriptLoadedRef = useRef(false); // Tracks if the script is already loaded

  useEffect(() => {
    if (!scriptLoadedRef.current) {
      const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        );
      };

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = googleTranslateElementInit;

      scriptLoadedRef.current = true; // Mark script as loaded
    }

    return () => {
      if (scriptLoadedRef.current) {
        // delete window.googleTranslateElementInit;
      }
    };
  }, []);

  return (
    <div>
      <div id="google_translate_element"></div>
      <style>{`
  .goog-te-banner-frame {
    display: none !important;
  }
  body {
    top: 0px !important;
  }
  .goog-logo-link,
  #goog-gt-tt,
  .goog-te-gadget-simple span,
  .VIpgJd-ZVi9od-ORHb-OEVmcd {
    display: none !important;
  }
  .goog-te-gadget {
    color: transparent !important;
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    height: 0px !important;
  }
  .goog-te-gadget .goog-te-combo {
    color: #ffffff !important;
    font-size: 12px !important;
    line-height: 1.5; /* Adjusts the spacing between items */
    font-family: 'Montserrat';
    font-weight: 500;
    padding: 7px 10px;
    background: transparent;
  }
  a.VIpgJd-ZVi9od-l4eHX-hSRGPd {
    display: none;
  }
  select.goog-te-combo {
    border-radius: 0px;
    width: 30%;
    margin: 0;
  }
  .select_container::before {
    background: transparent;
    content: "";
    display: inline-block;
    height: 0px;
    position: absolute;
    right: 0px !important;
    top: 0;
    width: 50px;
  }
  select {
    border: none;
    font-style: italic;
    font-weight: 600;
    height: auto;
    width: 100%;
  }
  .goog-te-gadget .goog-te-combo {
    margin: 4px 0px;
    padding: 7px 0px;
    background: transparent;
  }
  .goog-te-combo option {
    padding: 10px; /* Adds spacing between dropdown options */
  }
  .select_container::after {
    color: #fff;
    content: "";
    font-family: FontAwesome;
    font-size: 10px;
    position: absolute;
    right: 19px;
    top: 22%;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
  .select_container {
    max-width: 100%;
    position: relative;
  }
`}</style>

    </div>
  );
};

export default GoogleTranslate;
