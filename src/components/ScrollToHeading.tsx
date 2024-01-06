'use client';

import { useEffect } from 'react';

const ScrollToHeading = () => {
  const scrollToHeading = (element: HTMLElement) => {
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const decodedHash = decodeURIComponent(hash);
      const element = window.document.getElementById(
        decodedHash.replace('#', '')
      );

      if (element) {
        scrollToHeading(element);
      }
    }
  }, []);

  return null;
};

export default ScrollToHeading;
