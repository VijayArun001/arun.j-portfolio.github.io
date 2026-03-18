export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  tech: string[];
  highlights: string[];
  domain: string;
  company: string;
  period: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  current: boolean;
  summary: string;
  projects: Project[];
}

export interface UIState {
  activeSection: string;
  mobileMenuOpen: boolean;
  setActiveSection: (s: string) => void;
  setMobileMenuOpen: (v: boolean) => void;
}
