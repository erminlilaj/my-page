// Edit this file to personalise the whole site.
export const site = {
  name: 'Ermin Lilaj',
  tagline: 'Software engineer & AI researcher in Rome.',
  intro:
    'Software engineer and MSc student in Computer Science & AI at Sapienza University of Rome, working on AI for software engineering.',
  email: 'ermin.lilaj04@gmail.com',
  location: 'Rome, Italy',
  links: [
    { label: 'GitHub', href: 'https://github.com/erminlilaj' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ermin-lilaj' },
  ],
  nav: [
    { label: 'About', href: '/#about' },
    { label: 'Work', href: '/#work' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Journey', href: '/#journey' },
    { label: 'Contact', href: '/#contact' },
  ],
};

export const projects: { title: string; description: string; tags: string[]; highlights?: string[]; href?: string; cta?: string; status?: string; links?: { label: string; href: string }[] }[] = [
  {
    title: 'Traceable RAG for Legacy COBOL Comprehension',
    description: 'Peer-reviewed paper at AISM ’26, Munich. A locally deployed, open-source RAG pipeline that combines architectural and semantic analysis for traceable answers about legacy COBOL code.',
    tags: ['Paper', 'RAG', 'COBOL', 'LLMs'],
    highlights: ['Peer reviewed', 'Local LLMs', 'Traceable retrieval'],
    href: 'https://doi.org/10.1145/3843775.3844545',
    cta: 'Read the paper',
  },
  {
    title: 'WaitLess',
    description: 'University IoT project: an adaptive traffic-light prototype for a two-way crossroad. ESP32 nodes with ultrasonic sensors talk over LoRa and adjust the signals to vehicle presence.',
    tags: ['ESP32', 'C++', 'Python', 'LoRa'],
    status: 'University project',
    links: [
      { label: 'GitHub', href: 'https://github.com/erminlilaj/iot-waitLess' },
      { label: 'Demo video', href: 'https://www.youtube.com/watch?v=lq9b3uMraB4' },
    ],
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
    summary: 'Built interactive dashboards, dynamic forms and real-time telemetry interfaces in React and React Flow, integrated with REST services in Docker and Kubernetes environments.',
  },
  {
    role: 'Software Developer',
    org: 'Linfa Shpk, Tirana',
    period: 'Nov 2024 – Aug 2025',
    summary: 'Reusable frontend components with Cypress end-to-end tests; Java / Spring Boot services for document management, reporting and PDF generation; an inventory and reservation system with role-based access control.',
  },
  {
    role: 'IT Technician',
    org: 'GlobalNet Shpk, Tirana',
    period: 'Jul 2023 – Mar 2024',
    summary: 'Supported IT equipment and CCTV / security systems.',
  },
];

export const education = [
  {
    degree: 'MSc in Computer Science & Artificial Intelligence',
    org: 'Sapienza University of Rome',
    period: 'Sep 2025 – Summer 2027 (expected)',
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
  { label: 'AI / ML', items: ['LLMs', 'RAG', 'Deep Learning', 'Vector Search', 'BM25', 'Graph Retrieval'] },
  { label: 'Infra & Testing', items: ['PostgreSQL', 'Docker', 'Kubernetes', 'Linux', 'Git', 'CI/CD', 'Cypress', 'JUnit'] },
];

export const languages = 'Albanian (native) · English (C1) · German (B1) · Italian (A2)';
