
'use client';

import { useEffect } from 'react';

export default function ScrollProvider() {
  useEffect(() => {
    let locomotive: { destroy: () => void } | undefined;
    let cancelled = false;

    async function initializeScroll() {
      const { default: LocomotiveScroll } = await import(
        'locomotive-scroll'
      );

      if (cancelled) return;

      locomotive = new LocomotiveScroll();

      document.documentElement.classList.add('scroll-ready');
    }

    initializeScroll();

    return () => {
      cancelled = true;
      locomotive?.destroy();
      document.documentElement.classList.remove('scroll-ready');
    };
  }, []);

  return null;
}