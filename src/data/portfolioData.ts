import type { SkillCategory, Experience, NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'Redux', 'Zustand', 'React Query', 'Custom Hooks', 'useMemo / useCallback', 'React Hook Form', 'Zod', 'React Window'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST API Design', 'MVC Architecture', 'Middleware', 'JWT Authentication', 'Cron Jobs', 'Nodemon', 'dotenv'],
  },
  {
    category: 'Databases',
    items: ['MongoDB (Mongoose)', 'PostgreSQL', 'SQL', 'Elasticsearch', 'Database Schema Design'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (S3, SES & more)', 'Keycloak (OAuth 2.0 / SSO)', 'CI/CD', 'Vite', 'Webpack', 'Git'],
  },
  {
    category: 'Integrations',
    items: ['Freshworks FDK', 'Freshdesk', 'Freshsales', 'Freshservice', 'Google Maps API', 'Google Places API', '100ms WebRTC', 'OAuth 2.0'],
  },
  {
    category: 'AI & Dev Tools',
    items: ['GitHub Copilot', 'Claude AI', 'Cursor', 'Windsurf', 'Antigravity', 'Postman'],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'spritle',
    company: 'Spritle Software',
    role: 'Software Engineer',
    period: 'April 2024 – Present',
    current: true,
    summary: 'Building and shipping full-stack web applications across healthcare and SaaS platforms. Working as a solo developer — independently owning projects from architecture and design through to production deployment.',
    projects: [
      {
        id: 'saasly',
        title: 'Saasly – Freshworks Marketplace Applications',
        shortDesc: 'Suite of 3 published CRM marketplace apps for Freshdesk, Freshsales & Freshservice.',
        description: 'Designed, developed and published 3 production-ready apps on the Freshworks Marketplace. Each app solves a real CRM workflow problem for enterprise teams.',
        tech: ['React.js', 'Node.js', 'TypeScript', 'Freshworks FDK', 'Google Maps API', 'OAuth 2.0', 'Cron Jobs'],
        highlights: [
          'Contract Manager — full lifecycle contract management with RBAC, real-time hour tracking, recurring schedules via cron jobs, automated threshold alerts and PDF report exports',
          'Google Address Autocomplete — Google Places API integration with autocomplete, CRM field auto-population, multi-location storage and route-path plotting on embedded Google Map',
          'External Link Manager — label, store, copy and pre-populate URLs across Freshdesk, Freshsales and Freshchat workflows',
          'Implemented OAuth 2.0 authentication and Freshworks FDK middleware for secure frontend-to-backend communication',
        ],
        domain: 'SaaS / CRM',
        company: 'Spritle Software',
        period: 'April 2024 – Present',
      },
      {
        id: 'innerkraft',
        title: 'InnerKraft – Mental Wellness Admin Platform',
        shortDesc: 'Live admin platform connecting students with licensed psychologists via video and AI chat.',
        description: 'Solely architected and delivered the entire frontend from scratch. A live production app serving real users — students experiencing stress and depression connecting with psychologists.',
        tech: ['React.js', 'TypeScript', '100ms WebRTC', 'Zod', 'React Hook Form', 'React Window'],
        highlights: [
          'Sole frontend developer — architected and shipped entire application independently from scratch',
          'Built 3 role-based portals: Super Admin, Main Admin, and Psychologist with distinct dashboards and permission layers',
          'Integrated 100ms WebRTC SDK for real-time in-browser video consultations between students and psychologists',
          'Built AI-powered chat interface connected to backend AI model endpoints for intelligent responses',
          'Implemented React Window virtualization for performant large list rendering and Zod + React Hook Form for robust validation',
        ],
        domain: 'Healthcare',
        company: 'Spritle Software',
        period: 'April 2024 – Present',
      },
      {
        id: 'soar',
        title: 'SOAR – AI-Powered Surgical Video Review',
        shortDesc: 'Medical platform for surgeons to upload and review surgical videos with AI analysis.',
        description: 'Healthcare web application enabling surgeons to upload procedure videos for peer review and AI-powered performance evaluation.',
        tech: ['React.js', 'TypeScript', 'AI Integration', 'REST API'],
        highlights: [
          'AI-powered surgery analysis that evaluates uploaded videos and generates performance ratings',
          'Interactive charts and detailed metric breakdowns for surgical performance review',
          'Responsive video management UI with advanced filtering and categorisation',
        ],
        domain: 'Healthcare',
        company: 'Spritle Software',
        period: 'April 2024 – Present',
      },
      {
        id: 'revelia',
        title: 'Revelia – Healthcare Ticketing System',
        shortDesc: 'Large-scale healthcare ticketing application — frontend bug fixes and UI enhancements.',
        description: 'Contributed frontend bug resolution and UI improvements to a large-scale healthcare ticketing platform built with React.js.',
        tech: ['React.js'],
        highlights: [
          'Resolved critical frontend bugs improving system stability',
          'Delivered UI enhancements improving overall user experience',
        ],
        domain: 'Healthcare',
        company: 'Spritle Software',
        period: 'April 2024 – Present',
      },
    ],
  },
  {
    id: 'previous',
    company: 'Previous Employment',
    role: 'Software Engineer (Full Stack)',
    period: 'December 2021 – December 2023',
    current: false,
    summary: 'Worked full-stack across multiple product teams — building REST APIs, SDK business logic layers, and complete frontend UIs for document management, enterprise chat, and ticketing applications.',
    projects: [
      {
        id: 'dms',
        title: 'DMS – Document Management System',
        shortDesc: 'Full-stack document storage and management platform with SDK validation layer.',
        description: 'Contributed across the full stack — from REST API development and SDK business logic to building the complete dynamic frontend UI.',
        tech: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB'],
        highlights: [
          'Developed REST APIs for document storage, retrieval and management operations',
          'Implemented an SDK layer handling business logic and data validations between API and client',
          'Built the complete dynamic frontend UI using React.js, Next.js and TypeScript end-to-end',
          'Contributed across the entire stack — frontend, backend and database schema design',
        ],
        domain: 'Enterprise',
        company: 'Previous Employment',
        period: 'Dec 2021 – Dec 2023',
      },
      {
        id: 'cnn',
        title: 'CNN – Business Chat & Notification System',
        shortDesc: 'Real-time business chat and notification platform with monitoring dashboard.',
        description: 'Worked across API documentation, backend development and frontend UI for a business-grade chat and notification system.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        highlights: [
          'Authored comprehensive REST API documentation and contributed to API development',
          'Built static UI screens for the real-time application monitoring tool dashboard',
          'Worked on both backend API layer and frontend React components',
        ],
        domain: 'Enterprise',
        company: 'Previous Employment',
        period: 'Dec 2021 – Dec 2023',
      },
      {
        id: 'insights',
        title: 'Insights – Enterprise Ticketing System',
        shortDesc: 'Multi-language enterprise ticketing application — UI enhancements and bug fixes.',
        description: 'Contributed UI enhancements and frontend bug fixes to a large-scale multi-language enterprise ticketing application.',
        tech: ['React.js', 'MongoDB'],
        highlights: [
          'Delivered UI enhancements across a multi-language enterprise ticketing platform',
          'Resolved frontend bugs improving overall system reliability',
          'Worked on the React.js UI layer within a complex multi-language architecture',
        ],
        domain: 'Enterprise',
        company: 'Previous Employment',
        period: 'Dec 2021 – Dec 2023',
      },
    ],
  },
];
