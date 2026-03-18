import { useEffect } from 'react';
import { useUIStore } from '../store/uiStore';

export const useActiveSection = (ids: string[]) => {
  const setActiveSection = useUIStore((s) => s.setActiveSection);
  useEffect(() => {
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [ids, setActiveSection]);
};
