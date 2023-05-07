"use client";

import { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";

function CookiesConsent() {
  const [cookieConsentDisplay, setCookieConsentDisplay] = useState("hidden");
  useEffect(() => {
    if (!document.cookie.includes("CookieConsent=true"))
      setCookieConsentDisplay("show");
  }, []);

  const handleDisplay = () => {
    setCookieConsentDisplay("hidden");
  };

  return (
    <CookieConsent
      onAccept={() => handleDisplay()}
      visible={cookieConsentDisplay}
      debug
      buttonText="I accept"
    >
      This site only uses cookies for authentication, do not worry! 😉
    </CookieConsent>
  );
}

export default CookiesConsent;
