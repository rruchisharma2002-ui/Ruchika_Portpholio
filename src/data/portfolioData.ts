import type {
  ProfileInfo,
  CareerTimelineStage,
  ExperienceItem,
  ProjectItem,
  SkillCategory,
  EducationItem,
  AchievementItem
} from '../types/portfolio';

export const profileData: ProfileInfo = {
  name: 'Ruchika Sharma',
  titles: ['React Native Developer', 'Node.js Backend Developer'],
  location: 'Zirakpur, Punjab, India',
  experienceYears: '~1.5 Years',
  email: 'rruchisharma2002@gmail.com',
  phone: '+91 7889159606',
  github: 'https://github.com/rruchisharma2002-ui',
  bio: "I'm a React Native Developer with experience building cross-platform mobile applications and Node.js backends. I work on production apps, real-time messaging, REST APIs, database-driven features, and payment integrations — from implementation and debugging to live releases.",
  status: 'Open to opportunities',
  availability: 'Available for Full-time Roles & Contracts',
  resumeUrl: '/ruchika_sharma_resume.pdf',
  capabilities: [
    'Production Mobile Apps',
    'Node.js Backend Development',
    'Real-Time Messaging',
    'App Store & Google Play Releases'
  ]
};

export const careerTimeline: CareerTimelineStage[] = [
  {
    period: '2025 · 6 Months',
    role: 'Training — React Native Development',
    company: 'Logixmart Solutions',
    location: 'Mohali, Punjab',
    duration: '6 months',
    description: 'Foundation in JavaScript, HTML, CSS, and React Native. Built navigation-focused practice apps and a Tinder-style application with payment integration.',
    type: 'training'
  },
  {
    period: '2025 · ~3–4 Months',
    role: 'React Native Developer',
    company: 'Creative Web Solutions (CodifyGuru)',
    location: 'Zirakpur, Punjab',
    duration: '~3–4 months',
    description: 'Delivered client mobile applications including a book e-commerce platform and CRM with cart management, payments, and live chat assistance.',
    type: 'developer'
  },
  {
    period: '~1 Year · Present',
    role: 'React Native & Node.js Developer',
    company: 'Eracom Technology',
    location: 'Zirakpur, Punjab',
    duration: '~1 year · Present',
    description: 'Joined as a React Native developer; expanded into Node.js/MongoDB backends. Shipped apps to App Store & Google Play, built Redis real-time chat, and handled lakhs of SQLite records.',
    type: 'fullstack'
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'eracom',
    role: 'React Native & Node.js Developer',
    company: 'Eracom Technology',
    location: 'Zirakpur, Punjab',
    period: '~1 Year · Present',
    duration: 'Current Role',
    summary: 'Joined as a React Native developer; grew into full backend engineering with Node.js and MongoDB, owning features end-to-end.',
    responsibilities: [
      'Build and ship production mobile applications and responsive websites using **React Native**, **React.js**, **JavaScript**, and **TypeScript**.',
      'Maintain and deploy production applications live on the **Apple App Store** and **Google Play**.',
      'Developed a **WhatsApp-style messaging app** supporting multiple concurrent users, one-to-one chats, and group chats, using **Redis** to efficiently manage high volumes of chats and groups.',
      'Designed scalable backend services with **Node.js** and **MongoDB**: created clean REST APIs, structured data models, and handled database queries.',
      'Engineered an election management application handling **lakhs of user records** (voter details, ward data) using **SQLite** for ultra-fast local storage and instant retrieval.',
      'Debugged complex performance bottlenecks and data-handling issues across live production builds and shipped rapid hotfixes.'
    ],
    technologies: [
      'React Native',
      'Node.js',
      'MongoDB',
      'Redis',
      'SQLite',
      'TypeScript',
      'JavaScript',
      'REST APIs',
      'App Store Connect',
      'Google Play Console'
    ]
  },
  {
    id: 'codifyguru',
    role: 'React Native Developer',
    company: 'Creative Web Solutions (CodifyGuru)',
    location: 'Zirakpur, Punjab',
    period: '~3–4 Months',
    duration: 'Contract / Project Tenure',
    summary: 'Delivered live client applications with complex user flows, e-commerce mechanics, and real-time interaction.',
    responsibilities: [
      'Worked directly on live client projects and delivered **3–4 complete applications** from UI implementation to store-ready builds.',
      'Developed **Apsara Kitab Ghar**, a comprehensive book e-commerce application and its companion **CRM**: implemented live cart, multi-item management, and smooth scrolling lists.',
      'Integrated **payment gateways** with end-to-end checkout validation and error recovery.',
      'Implemented an interactive **chatbot / live chat** mechanism to support user inquiries.',
      'Resolved unfamiliar technical issues independently through documentation analysis and systematic step-by-step debugging.'
    ],
    technologies: [
      'React Native',
      'JavaScript (ES6+)',
      'Payment Gateway',
      'CRM Development',
      'Chatbot Integration',
      'REST Integration'
    ]
  },
  {
    id: 'logixmart',
    role: 'Training — React Native Development',
    company: 'Logixmart Solutions',
    location: 'Mohali, Punjab',
    period: '6 Months',
    duration: 'Professional Training',
    summary: 'Intensive practical training focusing on modern mobile development and core web foundations.',
    responsibilities: [
      'Mastered fundamentals of **JavaScript**, **HTML5**, **CSS3**, and **React Native architecture**.',
      'Constructed hands-on practice projects focusing on **React Navigation**, view lifecycles, and responsive component layouts.',
      'Engineered a complete **Tinder-style swipe application** featuring card deck animations and integrated payment gateway flows.'
    ],
    technologies: [
      'React Native',
      'JavaScript',
      'React Navigation',
      'HTML5 / CSS3',
      'Payment Integration'
    ]
  }
];

export const featuredProjects: ProjectItem[] = [
  {
    id: 'ezychat',
    number: '01',
    title: 'Ezychat',
    category: 'Real-Time Messaging',
    subtitle: 'WhatsApp-style chat platform with Redis message handling',
    description: 'A WhatsApp-style messaging application built to handle multiple concurrent users, one-to-one messaging, and high-volume group conversations with low latency.',
    contributions: [
      'Engineered real-time one-to-one and group messaging interfaces with active socket connection state.',
      'Integrated Redis caching to manage large volumes of chat threads and group membership data without degrading database performance.',
      'Built Node.js backend services and MongoDB schemas for persistent message storage, media handling, and user metadata.'
    ],
    technicalHighlights: [
      'Redis in-memory caching for instant chat thread state',
      'Node.js REST API and real-time event pipeline',
      'MongoDB indexing for message history querying'
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Redis', 'WebSockets', 'JavaScript'],
    platforms: [
      {
        label: 'Google Play',
        verified: true,
        type: 'google-play'
      }
    ],
    isFeatured: true,
    filterTag: 'backend'
  },
  {
    id: 'winfield',
    number: '02',
    title: 'Winfield',
    category: 'Election Management',
    subtitle: 'High-volume local dataset engine handling lakhs of voter records',
    description: 'An election operations application built to handle lakhs of voter records, ward mappings, and election day lookup workflows entirely offline on mobile devices.',
    contributions: [
      'Designed high-performance local data storage handling hundreds of thousands of voter records seamlessly.',
      'Used SQLite indexed queries for sub-second voter lookup, family grouping, and ward-level data filtering.',
      'Optimized memory consumption to eliminate UI thread stutter during deep search queries on mid-tier Android devices.'
    ],
    technicalHighlights: [
      'SQLite schema with composite indexing for 100K+ records',
      'Fast offline search & ward lookup without network latency',
      'Batch data ingestion & memory optimization'
    ],
    technologies: ['React Native', 'SQLite', 'TypeScript', 'Android Studio'],
    platforms: [
      {
        label: 'Internal / Field App',
        verified: true,
        type: 'code'
      }
    ],
    isFeatured: true,
    filterTag: 'enterprise'
  },
  {
    id: 'oyo-movers',
    number: '03',
    title: 'OYO Movers',
    category: 'Production Mobile App',
    subtitle: 'Live logistics & moving service application on the Apple App Store',
    description: 'A live production commercial moving and relocation mobile application deployed on the Apple App Store, serving customer bookings and driver logistics.',
    contributions: [
      'Implemented user-facing booking flows, quote estimation, and real-time job status tracking.',
      'Diagnosed and resolved critical production bugs on iOS builds, submitting compliant releases through App Store Connect.',
      'Ensured consistent cross-platform performance across various iPhone form factors and screen scales.'
    ],
    technicalHighlights: [
      'Live Apple App Store deployment and maintenance',
      'Production debugging & iOS crash-free session stability',
      'Interactive relocation quote and scheduling flows'
    ],
    technologies: ['React Native', 'iOS', 'App Store Connect', 'JavaScript', 'REST APIs'],
    platforms: [
      {
        label: 'Apple App Store',
        verified: true,
        type: 'app-store'
      }
    ],
    isFeatured: true,
    filterTag: 'mobile'
  },
  {
    id: 'acadpad',
    number: '04',
    title: 'AcadPad & AcadPad Manager',
    category: 'Sports Academy Management',
    subtitle: 'Dual-application suite for cricket academies live on iOS & Android',
    description: 'A dual-system mobile suite comprising an academy app for students/athletes and a dedicated manager application for coaches and academy administrators.',
    contributions: [
      'Developed core mobile application functionality for both user-facing student portals and management operational panels.',
      'Implemented training schedules, attendance logs, performance metrics, and academy announcements.',
      'Managed cross-platform deployment ensuring live parity on both Apple App Store and Google Play.'
    ],
    technicalHighlights: [
      'Dual-app architecture sharing common UI patterns',
      'Live releases on both iOS App Store & Android Google Play',
      'Role-based views for academy managers and players'
    ],
    technologies: ['React Native', 'React Navigation', 'iOS', 'Android', 'REST APIs'],
    platforms: [
      {
        label: 'AcadPad: iOS & Android',
        verified: true,
        type: 'app-store'
      },
      {
        label: 'Manager: iOS & Android',
        verified: true,
        type: 'google-play'
      }
    ],
    isFeatured: true,
    filterTag: 'mobile'
  },
  {
    id: 'apsara-kitab-ghar',
    number: '05',
    title: 'Apsara Kitab Ghar & CRM',
    category: 'E-Commerce & CRM',
    subtitle: 'Full-featured book retail platform with payment gateway and companion CRM',
    description: 'A complete retail e-commerce application for books paired with a custom CRM application for store managers to manage inventory, customer orders, and customer support.',
    contributions: [
      'Implemented interactive shopping cart, multi-item order placement, and smooth infinite-scrolling book catalogs.',
      'Integrated payment gateway checkout with complete validation and transaction confirmation screens.',
      'Built an in-app chatbot / live chat system for immediate customer service and created the standalone administrative CRM application.'
    ],
    technicalHighlights: [
      'Secure payment gateway checkout lifecycle',
      'Interactive customer live chat / bot assistant',
      'Dedicated companion CRM for order & catalog management'
    ],
    technologies: ['React Native', 'Payment Gateway', 'Live Chat Bot', 'CRM Engine', 'JavaScript'],
    platforms: [
      {
        label: 'CRM · Google Play',
        verified: true,
        type: 'google-play'
      }
    ],
    isFeatured: true,
    filterTag: 'mobile'
  }
];

export const additionalProjects = [
  {
    name: 'PayServe',
    category: 'Fintech & Identity',
    description: 'Mobile payment application featuring integrated payment flows and secure Firebase Google Login authentication.',
    technologies: ['React Native', 'Firebase Auth', 'Payment Gateway']
  },
  {
    name: 'Pick My Property',
    category: 'Real Estate',
    description: 'Property search and listing application with filterable real estate listings, agent contact, and geolocation browsing.',
    technologies: ['React Native', 'REST API', 'Maps Integration']
  },
  {
    name: 'EzyRentals',
    category: 'Rental Management',
    description: 'Rental asset and property management application for handling tenant agreements, rental cycles, and billing.',
    technologies: ['React Native', 'REST API', 'Data Tables']
  },
  {
    name: 'CWS App',
    category: 'Dashboard & Admin',
    description: 'Comprehensive administrative dashboard application for monitoring business operations, metrics, and internal accounts.',
    technologies: ['React Native', 'Analytics', 'State Management']
  },
  {
    name: 'MyDairy',
    category: 'Records & Accounting',
    description: 'Agricultural dairy record management application for tracking milk volume, daily customer records, and accounts.',
    technologies: ['React Native', 'Local Storage', 'Calculations']
  },
  {
    name: 'Alabla',
    category: 'On-Demand Services',
    description: 'Service marketplace application connecting customers with localized on-demand service providers.',
    technologies: ['React Native', 'Service Catalog', 'REST API']
  },
  {
    name: 'Renova Metals',
    category: 'Industrial Catalog',
    description: 'Industrial metal products catalog application providing technical specifications, order inquiries, and inventory data.',
    technologies: ['React Native', 'Product Catalog', 'Direct Inquiries']
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'mobile',
    title: 'MOBILE DEVELOPMENT',
    skills: [
      { name: 'React Native', isCore: true },
      { name: 'React Native CLI', isCore: true },
      { name: 'Expo', isCore: true },
      { name: 'React Navigation', isCore: true },
      { name: 'Android Studio', isCore: true },
      { name: 'App Store & Google Play Releases', isCore: true }
    ]
  },
  {
    id: 'languages',
    title: 'LANGUAGES & FRONTEND',
    skills: [
      { name: 'JavaScript (ES6+)', isCore: true },
      { name: 'TypeScript', isCore: true },
      { name: 'React.js', isCore: true },
      { name: 'HTML5', isCore: false },
      { name: 'CSS3', isCore: false }
    ]
  },
  {
    id: 'backend',
    title: 'BACKEND',
    skills: [
      { name: 'Node.js', isCore: true },
      { name: 'REST API Design', isCore: true },
      { name: 'REST API Integration', isCore: true }
    ]
  },
  {
    id: 'databases',
    title: 'DATABASES & CACHING',
    skills: [
      { name: 'MongoDB', isCore: true },
      { name: 'Redis (Chat & Group Data)', isCore: true },
      { name: 'SQLite (Large Datasets)', isCore: true },
      { name: 'MySQL', isCore: false }
    ]
  },
  {
    id: 'integrations',
    title: 'INTEGRATIONS',
    skills: [
      { name: 'Payment Gateway Integration', isCore: true },
      { name: 'Firebase (Google Login)', isCore: true },
      { name: 'Live Chat', isCore: false },
      { name: 'Real-Time Messaging', isCore: true }
    ]
  },
  {
    id: 'tools',
    title: 'TOOLS & WORKFLOW',
    skills: [
      { name: 'Git', isCore: true },
      { name: 'GitHub', isCore: true },
      { name: 'VS Code', isCore: false },
      { name: 'AI-Assisted Dev (ChatGPT, Copilot, Cursor)', isCore: false }
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: 'B.Sc. Computer Science',
    institution: 'SDAM College',
    boardOrUniversity: 'Guru Nanak Dev University',
    period: '2021 – 2024',
    score: '80%',
    scoreType: 'Graduation Score'
  },
  {
    degree: 'Class 12th — Non-Medical',
    institution: 'Punjab School Education Board',
    boardOrUniversity: 'PSEB Board',
    period: '2019 – 2020',
    score: '92%',
    scoreType: 'Board Exam Score'
  }
];

export const achievementData: AchievementItem[] = [
  {
    title: 'Ranked First — B.Sc Computer Science Department',
    category: 'Academic Honor',
    description: 'Secured the 1st rank across the Computer Science Department at SDAM College, Guru Nanak Dev University.'
  }
];

export const languagesData = [
  { name: 'English', level: 'Professional' },
  { name: 'Hindi', level: 'Native / Fluent' },
  { name: 'Punjabi', level: 'Native / Fluent' }
];
