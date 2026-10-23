/**
 * Central portfolio data — generated from Pulkit Chopra's resume (Pulkit_Chopra_CV.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Pulkit Chopra',
  displayName: 'Pulkit Chopra',
  firstName: 'PULKIT',
  seriesTag: 'Developer • AI • Backend',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'PULKIT ORIGINAL',
  role: 'Software Developer',
  tagline: ['Software Developer', 'Backend Systems', 'AI & Automation', 'Full-Stack'],
  intro:
    'A B.Tech Computer Science (Information Engineering) student and software developer, passionate about building intelligent systems, automation tools and scalable backend services with React, Node.js, TypeScript and PostgreSQL.',
  location: 'Delhi, India',
  email: 'pulkitchopra2007@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/pchopra3112',
    github: 'https://github.com/pulkit-phoenix31',
  },
  resumePdf: '/assets/Pulkit_Chopra_CV.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Pulkit Chopra',
  },
  interests: ['Artificial Intelligence', 'Backend Systems', 'Automation', 'Open Source'],
};

export const education = [
  {
    school: 'Maharishi Dayanand University',
    place: 'Rohtak',
    degree: 'Bachelor of Technology — Computer Science Engineering',
    period: '2025 – Present',
    score: 'CGPA 7.9',
  },
  {
    school: 'Delhi Technological University',
    place: 'Delhi',
    degree: 'Bachelor of Science — Artificial Intelligence & Cyber Security',
    period: '2024 – Present',
    score: 'CGPA 8.7'
  },
  {
    school: 'Air Force Sr. Sec. School',
    place: 'Delhi Cantt',
    degree: 'Class 12',
    period: '2023 – 24',
    score: '89.3%'
  },
  {
    school: 'Air Force Sr. Sec. School',
    place: 'Delhi Cantt',
    degree: 'Class 10',
    period: '2021 – 22',
    score: '93%'
  },
];

export const experience = [
  {
    company: 'Self-Employed',
    role: 'Freelance Software Developer',
    place: 'Remote',
    period: '2 Years',
    points: [
      'Developed independent software and web-based solutions.',
      'Built backend APIs and web applications using modern technologies.',
      'Managed project lifecycle including development, debugging, and deployment.',
    ],
  },
  {
    company: 'Aquatech',
    role: 'Intern',
    place: 'Delhi NCR',
    period: 'Jun – Aug 2024',
    points: [
      'Assisted with technical tasks and gained exposure to real-world workflows.',
      'Learned about professional development environments and industry practices.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'autoresq',
    title: 'AutoResQ – Emergency Accident Alert System',
    year: '2023 – Present',
    genre: 'Full-Stack • Real-Time • Safety',
    logline: 'A full-stack prototype that simulates vehicle accidents and instantly alerts Hospital, Police and Ambulance dashboards in real time.',
    stack: ['Node.js', 'Express.js', 'Socket.io', 'JWT', 'PostgreSQL', 'Supabase', 'React', 'Tailwind CSS', 'Leaflet', 'Motion'],
    build: [
      'Built a full-stack system to detect vehicle accidents and alert emergency services — a prototype showing how connected vehicles with sensors and GPS could trigger automatic emergency response.',
      'Accidents are simulated from a mobile app: GPS location is captured, owner and vehicle details are fetched, an accident record is created and alerts are broadcast to all EMS dashboards.',
      'Developed backend APIs using Node.js and Express.js, with real-time alerts pushed to dashboards via Socket.io.',
      'Integrated PostgreSQL and Supabase for storing accident and user data.',
      'Implemented role-based authentication with JWT for Hospital, Police, Ambulance and Admin users, and automated emergency alert workflows for faster response.',
    ],
    features: [
      'Vehicle & owner registration — blood group, medical history, emergency contact',
      'Accident simulation from a mobile app with GPS capture',
      'Three dedicated EMS dashboards: Hospital, Police and Ambulance',
      'Real-time alerts via Socket.io — popup, alert sound and highlighted incident',
      'Live accident map with Leaflet',
      'Role-based access with JWT authentication',
      'Admin panel to view accidents and vehicles and manage EMS staff',
    ],
    metrics: [
      { value: '3', label: 'EMS dashboards (Hospital, Police, Ambulance)' },
      { value: '4', label: 'user roles with JWT access control' },
      { value: 'Real-time', label: 'Socket.io emergency alerts' },
      { value: 'Live map', label: 'accident locations via Leaflet' },
    ],
    github: 'https://github.com/pulkit-phoenix31/AutoResQ',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'ai-virtual-assistant',
    title: 'Arrc – AI Virtual Assistant',
    year: '2025',
    genre: 'AI • Automation • TypeScript',
    logline: 'A JARVIS-level AI assistant that controls and manages my desktop — and acts on commands given over a phone call.',
    stack: ['Node.js', 'TypeScript', 'Electron', 'Python', 'PowerShell', 'Twilio', 'Speech-to-Text', 'Text-to-Speech', 'Claude (Anthropic)', 'Open-source LLMs'],
    build: [
      'Built Arrc, a JARVIS-level AI assistant that can control and manage my desktop and handle daily computer tasks on its own.',
      'Works remotely too: commands given over a phone call (Twilio, with speech-to-text and text-to-speech) are carried out on the desktop.',
      'Powered by Claude and open-source local models, with desktop actions executed through PowerShell/shell commands and Python scripts inside an Electron app.',
      'Implemented command-based automation and workflow coordination.',
      'Backend architecture built using Node.js and TypeScript.',
    ],
    features: [
      'JARVIS-level assistant for desktop control and management',
      'Executes commands given over a phone call (Twilio + speech-to-text / text-to-speech)',
      'AI brain: Claude and local open-source models',
      'Desktop automation via PowerShell, Python scripts and an Electron app',
      'Command-based automation',
      'Workflow coordination for daily computer tasks',
      'Node.js & TypeScript backend',
    ],
    metrics: [
      { value: 'JARVIS-level', label: 'AI desktop assistant' },
      { value: 'Phone call', label: 'commands, carried out on the desktop' },
      { value: 'Claude', label: '+ local open-source models' },
      { value: 'Twilio', label: 'with speech-to-text & text-to-speech' },
      { value: 'Node.js', label: '+ TypeScript backend' },
    ],
    // No public repo link yet — the GitHub button stays hidden. Add `github: '...'` when ready.
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

/** Built from the "Developer Highlights" section of the resume. */
export const achievements: Achievement[] = [
  {
    id: 'fullstack-apps',
    title: 'Full-Stack Applications',
    org: 'React • Node.js • PostgreSQL',
    detail: 'Built full-stack applications using React, Node.js and PostgreSQL.',
    laurel: 'Full-Stack',
  },
  {
    id: 'ai-automation',
    title: 'AI-Driven Automation',
    org: 'Tools & Assistants',
    detail: 'Developed AI-driven automation tools and assistants.',
    laurel: 'AI Automation',
  },
  {
    id: 'backend-auth',
    title: 'Backend, Auth & Databases',
    org: 'APIs • JWT • Databases',
    detail: 'Experience with backend APIs, authentication systems, and databases.',
    laurel: 'Backend',
  },
  {
    id: 'github-contributor',
    title: 'Active GitHub Contributor',
    org: 'GitHub',
    detail: 'Building real-world projects in the open.',
    laurel: 'Open Source',
    link: 'https://github.com/pulkit-phoenix31',
  },
];

export type Certification = { issuer: string; name: string; link: string };

// No certifications are listed on the current resume. Add entries here if you add them to your CV.
export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'What I build with',
    skills: [
      { name: 'JavaScript', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'Python', mono: 'Py' },
      { name: 'Golang', mono: 'Go' },
      { name: 'C++', mono: 'C+' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Modern, responsive, animated interfaces',
    skills: [
      { name: 'React', mono: 'Re', note: 'Primary' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'Vite', mono: 'Vi' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'Motion', mono: 'Mo' },
      { name: 'Redux', mono: 'Rx' },
      { name: 'Responsive UI', mono: 'Ru' },
      { name: 'Leaflet Maps', mono: 'Lf' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Socket.io', mono: 'So' },
    ],
  },
  {
    id: 'infra',
    title: 'Infra & Tools',
    subtitle: 'Shipping & security',
    skills: [
      { name: 'JWT Auth', mono: 'Jw' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Linux', mono: 'Lx' },
      { name: 'PowerShell', mono: 'Ps' },
      { name: 'Electron', mono: 'El' },
      { name: 'Twilio', mono: 'Tl' },
      { name: 'Git / GitHub', mono: 'Gt' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    subtitle: 'Assistants that act',
    skills: [
      { name: 'Claude (Anthropic)', mono: 'Cl' },
      { name: 'Open-source LLMs', mono: 'Ll' },
      { name: 'Speech-to-Text', mono: 'St' },
      { name: 'Text-to-Speech', mono: 'Ts' },
      { name: 'Desktop Automation', mono: 'Da' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Storing the data',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'Supabase', mono: 'Sb' },
    ],
  },
  {
    id: 'stacks',
    title: 'Tech Stacks',
    subtitle: 'Full stacks I build with',
    skills: [
      { name: 'MERN', mono: 'Mn' },
      { name: 'PERN', mono: 'Pn' },
      { name: 'Rust', mono: 'Rs' },
      { name: 'Golang', mono: 'Go' },
      { name: 'Kotlin + Android', mono: 'Kt' },
    ],
  },
  {
    id: 'android',
    title: 'Android Development',
    subtitle: 'Native mobile apps',
    skills: [
      { name: 'Android', mono: 'An' },
      { name: 'Kotlin', mono: 'Kt' },
      { name: 'Jetpack Compose', mono: 'Jc' },
      { name: 'Android Studio', mono: 'As' },
    ],
  },
  {
    id: 'gamedev',
    title: 'Game Development',
    subtitle: 'Scripting & in-game UI',
    skills: [
      { name: 'FiveM', mono: 'Fm' },
      { name: 'ESX Legacy', mono: 'Es' },
      { name: 'Lua', mono: 'Lu' },
      { name: 'NUI (HTML/CSS/JS)', mono: 'Nu' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'Artificial Intelligence', mono: 'Ai' },
      { name: 'Backend Systems', mono: 'Bs' },
      { name: 'Automation', mono: 'Au' },
      { name: 'Open Source', mono: 'Os' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, experience or highlights on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  JavaScript: ['Full-stack applications with React & Node.js'],
  TypeScript: ['Arrc – AI Virtual Assistant'],
  Python: ['Arrc – AI Virtual Assistant'],
  PERN: ['AutoResQ (React, Node.js, Express.js, PostgreSQL)'],
  FiveM: ['pulkit_jobs — FiveM jobs resource'],
  'ESX Legacy': ['pulkit_jobs — FiveM jobs resource'],
  Lua: ['pulkit_jobs — FiveM jobs resource'],
  'NUI (HTML/CSS/JS)': ['pulkit_jobs — NUI dispatch board'],
  React: ['AutoResQ', 'Full-stack applications (Developer Highlights)'],
  'Tailwind CSS': ['AutoResQ'],
  Motion: ['AutoResQ'],
  'Leaflet Maps': ['AutoResQ'],
  'Socket.io': ['AutoResQ'],
  'Node.js': ['AutoResQ', 'Arrc – AI Virtual Assistant'],
  'Express.js': ['AutoResQ'],
  'REST APIs': ['AutoResQ', 'Freelance backend APIs'],
  'JWT Auth': ['AutoResQ', 'Authentication systems experience'],
  PowerShell: ['Arrc – AI Virtual Assistant'],
  Electron: ['Arrc – AI Virtual Assistant'],
  Twilio: ['Arrc – AI Virtual Assistant'],
  'Claude (Anthropic)': ['Arrc – AI Virtual Assistant'],
  'Open-source LLMs': ['Arrc – AI Virtual Assistant'],
  'Speech-to-Text': ['Arrc – AI Virtual Assistant'],
  'Text-to-Speech': ['Arrc – AI Virtual Assistant'],
  'Desktop Automation': ['Arrc – AI Virtual Assistant'],
  'Git / GitHub': ['Active GitHub contributor'],
  PostgreSQL: ['AutoResQ', 'Full-stack applications (Developer Highlights)'],
  Supabase: ['AutoResQ'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2021 – 2024',
    synopsis: 'School years at Air Force Sr. Sec. School, Delhi Cantt — Class 10 and Class 12.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'Class 10 at Air Force Sr. Sec. School, Delhi Cantt — finishing with 93%.',
        tags: ['Class 10', '93%'],
        runtime: '2021 – 22',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Graduate',
        description: 'Class 12 at Air Force Sr. Sec. School, Delhi Cantt — finishing with 89.3%.',
        tags: ['Class 12', '89.3%'],
        runtime: '2023 – 24',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: AI & Cyber Security',
    period: '2024 – Present',
    synopsis: 'B.Sc in Artificial Intelligence & Cyber Security at DTU, then B.Tech in Computer Science Engineering at Maharishi Dayanand University, Rohtak.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Scholar',
        description: 'B.Sc in Artificial Intelligence & Cyber Security at Delhi Technological University — CGPA 8.7.',
        tags: ['B.Sc', 'AI', 'Cyber Security', 'CGPA 8.7'],
        runtime: '2024 – Present',
        palette: crimson,
      },
      {
        code: 'S02 E02',
        title: 'The Engineer',
        description: 'B.Tech in Computer Science Engineering at Maharishi Dayanand University, Rohtak — CGPA 7.9.',
        tags: ['B.Tech', 'CSE', 'CGPA 7.9'],
        runtime: '2025 – Present',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Learning to Build',
    period: '2 Years',
    synopsis: 'Two years as a self-employed freelance developer, plus an internship at Aquatech.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Freelancer',
        description: 'Developed independent software and web-based solutions as a self-employed developer, working remotely.',
        tags: ['Freelance', 'Remote', 'Software'],
        runtime: '2 Years',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Backend Builder',
        description: 'Built backend APIs and web applications using modern technologies.',
        tags: ['Backend APIs', 'Web Apps'],
        runtime: 'Self-Employed',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Intern',
        description: 'Assisted with technical tasks at Aquatech and learned about professional development environments and industry practices.',
        tags: ['Aquatech', 'Internship', 'Delhi NCR'],
        runtime: 'Jun – Aug 2024',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: 'Ongoing',
    synopsis: 'Two Originals — an accident detection system and an AI virtual assistant — plus active open-source work on GitHub.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Lifesaver',
        description: 'AutoResQ — a full-stack system that detects vehicle accidents and alerts emergency services through automated workflows.',
        tags: ['Node.js', 'Express.js', 'PostgreSQL', 'Supabase'],
        runtime: 'AutoResQ',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Automator',
        description: 'Arrc — a JARVIS-level assistant that controls and manages the desktop and acts on commands given over a phone call.',
        tags: ['Node.js', 'TypeScript', 'AI', 'Automation'],
        runtime: '2025',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The Contributor',
        description: 'Active GitHub contributor building real-world projects.',
        tags: ['GitHub', 'Open Source'],
        runtime: 'GitHub',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The interests on the resume point to the next arc of the story.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Exploring Artificial Intelligence, Backend Systems, Automation and Open Source.',
        tags: ['AI', 'Backend Systems', 'Automation', 'Open Source'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Core stack', title: 'Node.js', detail: 'Express.js • REST APIs • TypeScript', palette: amber },
  { label: 'The Safety Original', title: 'AutoResQ', detail: 'Accident detection & emergency alerts', palette: crimson },
  { label: 'The AI Original', title: 'Arrc', detail: 'JARVIS-level desktop control, even by phone call', palette: ocean },
  { label: 'Freelance arc', title: '2 Years', detail: 'Self-employed software developer', palette: violet },
  { label: 'Database stack', title: 'PostgreSQL', detail: 'with Supabase', palette: jade },
  { label: 'Auth', title: 'JWT', detail: 'Authentication systems & secure APIs', palette: amber },
  { label: 'Degree', title: 'B.Tech CSE', detail: 'Maharishi Dayanand University • CGPA 7.9', palette: crimson },
  { label: 'Second degree', title: 'B.Sc AI & Cyber Security', detail: 'Delhi Technological University • CGPA 8.7', palette: ocean },
  { label: 'Open source', title: 'GitHub', detail: 'Active contributor building real-world projects', palette: jade },
  { label: 'Current focus', title: 'AI & Automation', detail: 'with Backend Systems', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: ['Maharishi Dayanand University, Rohtak · 2025 – Present', 'B.Sc AI & Cyber Security · Delhi Technological University'],
    chips: ['CGPA 7.9', 'CGPA 8.7'],
  },
  {
    kicker: 'Skills',
    title: 'Full-stack, backend-first.',
    lines: ['JavaScript, TypeScript, Python, Golang, C++', 'React · Tailwind CSS · Node.js · Express.js · Socket.io · PostgreSQL · Supabase'],
    chips: ['TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Electron'],
  },
  {
    kicker: 'Experience',
    title: 'The Freelance Arc',
    lines: ['2 years as a self-employed Freelance Software Developer', 'Backend APIs · Web apps · Development, debugging & deployment', 'Intern · Aquatech · Jun – Aug 2024'],
  },
  {
    kicker: 'Projects',
    title: 'Two Originals',
    lines: ['AutoResQ — accident detection & emergency alerts', 'Arrc — JARVIS-level desktop control, even by phone call'],
  },
  {
    kicker: 'Highlights',
    title: 'Developer Highlights',
    lines: ['Full-stack apps with React, Node.js and PostgreSQL', 'AI-driven automation tools and assistants', 'Active GitHub contributor'],
  },
  {
    kicker: 'Interests',
    title: 'What drives me',
    lines: ['Artificial Intelligence · Backend Systems · Automation · Open Source'],
  },
  {
    kicker: 'Current mission',
    title: 'Now building',
    lines: ['Arrc — a JARVIS-level assistant that controls my desktop and listens on a phone call'],
  },
];

export type ProfileId = 'pulkit' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'pulkit',
    name: 'Pulkit',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, highlights & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Highlights', meta: `${achievements.length} Developer Highlights`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};