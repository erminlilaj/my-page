// Edit this file to personalise the whole site.
export const site = {
  name: 'Ermin Lilaj',
  tagline: 'Software engineer & AI researcher in Rome.',
  intro:
    'Software engineer based in Rome, finishing an MSc in Computer Science & AI at Sapienza and researching retrieval-augmented generation for legacy code.',
  email: 'ermin.lilaj04@gmail.com',
  location: 'Rome, Italy',
  links: [
    { label: 'GitHub', href: 'https://github.com/erminlilaj' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ermin-lilaj' },
  ],
  nav: [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Resume', href: '/resume' },
  ],
};

export const projects: { title: string; description: string; tags: string[]; href?: string }[] = [
  {
    title: 'RAG for legacy COBOL',
    description: 'Master’s thesis: understanding and documenting a large COBOL codebase with static analysis, graph-guided retrieval and local LLMs.',
    tags: ['RAG', 'LLMs', 'Python'],
  },
  {
    title: 'Astra Protocollo',
    description: 'Document management backend for public administration: reporting, PDF generation, roles and permissions.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL'],
  },
  {
    title: 'Inventory & Reservation Platform',
    description: 'Management system with role-based access control, reservation workflows and real-time admin dashboards.',
    tags: ['Spring Boot', 'Angular', 'RBAC'],
  },
];

export const experience = [
  {
    role: 'AI Research Intern / Master’s Thesis',
    org: 'Camera dei Deputati, Rome',
    period: 'Dec 2025 – Present',
    summary: 'AI-powered system to understand, reverse-engineer and document a large legacy COBOL codebase using static analysis and Retrieval-Augmented Generation, with local LLMs, metadata-aware retrieval and graph-guided retrieval.',
  },
  {
    role: 'Software Engineer',
    org: 'Links Management and Technology, Rome',
    period: 'Aug 2025 – Feb 2026',
    summary: 'Contributed to NADIR, a Counter-UAV command & control platform: React / React Flow dashboards, real-time telemetry interfaces, REST integration, Docker and Kubernetes environments.',
  },
  {
    role: 'Software Developer',
    org: 'Linfa Shpk, Tirana',
    period: 'Nov 2024 – Aug 2025',
    summary: 'Frontend components and Cypress E2E testing for a training & simulation platform; Java/Spring Boot services for a public-administration document platform; an inventory and reservation system with RBAC.',
  },
  {
    role: 'IT Technician',
    org: 'GlobalNet Shpk, Tirana',
    period: 'Jul 2023 – Mar 2024',
    summary: '',
  },
];

export const education = [
  {
    degree: 'MSc in Computer Science & Artificial Intelligence',
    org: 'Sapienza University of Rome',
    period: 'Sep 2025 – Present',
  },
  {
    degree: 'BSc in Software Engineering',
    org: 'Epoka University, Tirana',
    period: 'Aug 2022 – Jun 2025',
  },
];

export const skillGroups = [
  { label: 'Languages', items: ['Java', 'Python', 'C', 'JavaScript', 'SQL'] },
  { label: 'Backend', items: ['Spring Boot', 'REST APIs', 'Microservices', 'JWT', 'Kafka'] },
  { label: 'Frontend', items: ['React', 'React Flow', 'Angular', 'HTML', 'CSS'] },
  { label: 'AI / ML', items: ['LLMs', 'RAG', 'Deep Learning', 'Vector Search', 'Graph Retrieval'] },
  { label: 'Infra & Testing', items: ['PostgreSQL', 'Docker', 'Kubernetes', 'Linux', 'Git', 'CI/CD', 'Cypress', 'JUnit'] },
];

export const languages = 'Albanian (native) · English (C1) · German (B1) · Italian (A2)';
