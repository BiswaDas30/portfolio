// All portfolio copy lives here. Edit this file to update site content —
// components read from this data instead of hard-coding text.

export const profile = {
  name: 'Biswaranjan Das',
  role: 'SOFTWARE ENGINEER CONSULTANT II · ALLSTATE INDIA',
  village: 'Bengaluru, India',
  yearsActive: '7+ years',
  specialty: 'Full-Stack · Insurance Systems',
  knownTechniques: 'Java · Spring Boot · React',
  rankBadge: 'ANBU Captain — Currently Active',
  tagline:
    '"The strongest shinobi aren\'t the ones who are seen — they\'re the ones who make sure everything still stands, quietly, long after they\'ve moved on."',
}

export const nindo = {
  quote:
    'Some engineers build for the credit. I build for the system that\'s still standing at 3am when no one\'s watching.',
  paragraphs: [
    `I'm a full-stack engineer with over seven years in the field, most of it spent deep inside insurance-domain platforms that real agents depend on every day. My core discipline runs through Java, Spring Boot, and microservices on the backend, with React on the front lines — but the real work has always been the unglamorous kind: hardening systems against failure, absorbing complexity so the next person doesn't have to, and carrying production stability as a personal responsibility rather than a task.`,
    `I've mentored engineers who've gone on to ship the features that got noticed, and I was fine with that — the mission mattered more than the byline. Lately that same discipline has extended into AI-assisted engineering: GitHub Copilot and generative tooling folded into daily practice for debugging, edge-case analysis, and cutting the noise out of delivery.`,
  ],
  exploring:
    'an agentic side project using RAG, LangChain, and LangGraph — sharpening a new set of eyes for a discipline still being written.',
}

export const missions = [
  {
    rank: 'ANBU Captain',
    rankClass: 'rank-anbu',
    title: 'Software Engineer Consultant II — Allstate India',
    dates: 'Mar 2026 — Present',
    bullets: [
      'Drive technical discussions and propose solutions that improve platform scalability, performance, and maintainability.',
      'Partner with Product Managers, Business Analysts, and Architects to translate complex requirements into scalable technical designs.',
      'Lead end-to-end feature delivery — from requirement analysis through deployment and post-production support.',
      'Mentor junior engineers through code reviews, technical coaching, and knowledge-sharing sessions.',
      'Champion AI-assisted engineering practices (GitHub Copilot, Generative AI) to raise team-wide delivery speed and code quality.',
    ],
  },
  {
    rank: 'Chūnin',
    rankClass: 'rank-chunin',
    title: 'Software Engineer Consultant I — Allstate India',
    dates: 'Oct 2020 — Mar 2026',
    bullets: [
      'Designed and built scalable, secure enterprise applications (Java, Spring Boot, REST APIs, React) for critical insurance workflows on a biweekly release cadence.',
      'Owned High-Level and Low-Level Design for resilient, maintainable architectures; led the OAuth migration and the EPS-to-LDS data-loading migration.',
      'Improved platform stability with resiliency patterns, rollback mechanisms, and feature toggles.',
      'Monitored production with Splunk and Datadog to cut incidents and improve observability.',
      'Enforced TDD and peer code review as standard practice across delivery.',
    ],
  },
  {
    rank: 'Genin',
    rankClass: 'rank-genin',
    title: 'Associate Consultant — Allstate India',
    dates: 'Feb 2019 — Sep 2020',
    bullets: [
      'Learned core insurance-domain workflows and business-critical application ecosystems from the ground up.',
      'Translated functional specs into clean, maintainable code alongside senior engineers.',
      'Built foundations in Agile practice — stand-ups, sprint planning, unit testing, and debugging.',
    ],
  },
]

export const jutsu = [
  {
    glyph: '忍',
    title: 'Ninjutsu — Core Backend',
    sub: 'Direct combat techniques',
    chips: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'MySQL', 'Distributed Systems'],
  },
  {
    glyph: '幻',
    title: 'Genjutsu — Frontend Craft',
    sub: 'The illusion the user sees',
    chips: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    glyph: '封',
    title: 'Fuinjutsu — Sealing & Ops',
    sub: 'Containment, delivery, defense',
    chips: ['Git', 'Jenkins', 'Docker', 'CI/CD', 'Postman', 'SonarQube', 'Splunk', 'Datadog', 'OAuth', 'Feature Toggles'],
  },
  {
    glyph: '仙',
    title: 'Sage Mode — AI-Assisted Engineering',
    sub: 'Borrowed power, sharpened focus',
    chips: ['GitHub Copilot', 'Generative AI Dev', 'AI-Driven Debugging', 'RAG', 'LangChain', 'LangGraph'],
  },
]

// Sharingan evolution stages — ordered from first awakening (I) to current (V).
// `variant` controls which icon shape SharinganIcon renders: 'tomoe' (I-III) or 'mangekyo' | 'eternal' (IV-V).
export const evolution = [
  {
    stage: 'Stage I · One Tomoe',
    variant: 'tomoe',
    tomoeCount: 1,
    title: 'Helpdesk Turbo',
    description:
      'An AI-enabled support and routing platform. Refined intelligent ticket-routing logic that cut incoming support tickets from roughly 100 down to about 10 in typical scenarios.',
    meta: '~90% Ticket Reduction · Generative AI Routing',
  },
  {
    stage: 'Stage II · Two Tomoe',
    variant: 'tomoe',
    tomoeCount: 2,
    title: 'Sales Side Kick (SSK)',
    description:
      'A guided advisory assistant that helps agents understand customer needs and recommend suitable policies. Reduced policy binding time by streamlining workflow interactions and business-rule execution.',
    meta: 'Advisory Workflow · Business Rules Engine',
  },
  {
    stage: 'Stage III · Three Tomoe — Matured',
    variant: 'tomoe',
    tomoeCount: 3,
    title: 'Access Management Utils (AMU)',
    description:
      'Centralized permission and access-management platform for 1,000+ users. Implemented real-time permission management and emergency rollback capability that helped avoid multiple production outages.',
    meta: '1,000+ users · OAuth · Resilient Access Control',
  },
  {
    stage: 'Stage IV · Mangekyō — Forged Through Loss',
    variant: 'mangekyo',
    title: 'Advisor Pro',
    description:
      'The primary agent-facing insurance sales platform, used by 10,000+ agents for quoting, policy sales, renewals, and servicing. Delivered enhancements that improved quoting efficiency and strengthened the overall agent experience under real production pressure.',
    meta: '10,000+ agents · Java · Spring Boot · React',
  },
  {
    stage: 'Stage V · Eternal Mangekyō — In Progress',
    variant: 'eternal',
    title: 'DharmaAI_Backend',
    description:
      "An agentic project collecting Vedic and Sanatan Dharma scripture texts to offer guidance on life's karma cycle. Built on a RAG pipeline with LangChain and LangGraph orchestration, driving multiple LLMs — the eyes that don't dim, still being earned.",
    meta: 'RAG · LangChain · LangGraph · Python',
    link: 'https://github.com/BiswaDas30/DharmaAI_Backend',
    linkLabel: 'View scroll on GitHub →',
    eternal: true,
  },
]

export const academy = [
  {
    title: 'Bachelor of Technology (BTech), Electrical Engineering',
    meta: 'National Institute of Science and Technology · 2017',
  },
  {
    title: 'AWS Certified',
    meta: 'Cloud Practitioner / Solutions Architect',
  },
]

export const contact = {
  subtitle: 'Open to conversations on engineering, architecture, or the odd side quest into agentic AI.',
  links: [
    { stamp: '封', label: 'brdas78@gmail.com', href: 'mailto:brdas78@gmail.com', external: false },
    { stamp: '印', label: 'LinkedIn', href: 'https://www.linkedin.com/in/biswaranjan-das-225966146', external: true },
    { stamp: '巻', label: 'GitHub', href: 'https://github.com/BiswaDas30', external: true },
  ],
}
