"use client";

import { useEffect } from "react";

const ScrollToHeading = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const decodedHash = decodeURIComponent(hash);
      const element = window.document.querySelector(decodedHash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return null;
};

export default ScrollToHeading;
