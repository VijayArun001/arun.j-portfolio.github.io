import { create } from 'zustand';
import type { UIState } from '../types';

export const useUIStore = create<UIState>((set) => ({
  activeSection: 'about',
  mobileMenuOpen: false,
  setActiveSection: (activeSection) => set({ activeSection }),
  setMobileMenuOpen: (mobileMenuOpen) => set({ mobileMenuOpen }),
}));
