import { useEffect } from 'react';

/**
 * Scans the document for elements carrying `data-reveal` or `data-reveal-img`
 * and toggles the corresponding `is-visible` class when they enter the viewport.
 * Uses a MutationObserver to ensure dynamically added or filtered elements are observed.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const observedElements = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '50px 0px -20px 0px' }
    );

    const observeAll = () => {
      const els = document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-img]');
      els.forEach((el) => {
        if (!observedElements.has(el)) {
          // If already in viewport, mark immediately
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            el.classList.add('is-visible');
          } else {
            observer.observe(el);
            observedElements.add(el);
          }
        }
      });
    };

    observeAll();

    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
