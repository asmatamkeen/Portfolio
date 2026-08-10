// ============================================================
// portfolioData.js — Centralized configuration for Asma Tamkeen's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Asma Tamkeen",
  firstName: "Asma",
  brandName: "Asma Tamkeen",
  title: "Computer Science Student & Aspiring Software Engineer",
  location: "Hyderabad, Telangana, India",
  phone: "+91 99891-76633",
  emails: {
    primary: "tamkeenasma06@gmail.com",
    college: "160424733367@mjcollege.ac.in",
  },
  summary:
    "Computer Science & Engineering undergraduate with hands-on experience building full-stack and command-line applications. Passionate about software development, algorithms, databases, and writing clean, structured code.",
  resumeUrl: "/Asma Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/asmatamkeen",
  linkedin: "https://www.linkedin.com/in/asmatamkeen/",
  instagram: "https://www.instagram.com/asmaaa7.__/",
};

export const heroContent = {
  greeting: "Hi, I'm Asma Tamkeen",
  titleHighlight: "Aspiring Software Engineer",
  subtitle:
    "Computer Science student focused on mastering core programming logic, algorithms, databases, and clean software foundations.",
  ctaPrimary: { text: "Explore Skills", href: "#skills" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:tamkeenasma06@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Asma,%0D%0A%0D%0AI came across your portfolio and would like to connect.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Asma Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Asma Tamkeen</span>, a Computer Science and Engineering student based in Hyderabad, Telangana. I am dedicated to learning core software development principles, writing structured logic, and building clean data frameworks and applications.`,
  techStack: ["Python", "Java", "C", "C++", "SQL", "Data Structures"],
};

export const skillsContent = {
  badge: "My Learning Process",
  heading: "How I approach code and logic",
  description:
    "I focus on a clear, analytical workflow to break down programming challenges and build stable applications.",
  cards: [
    {
      number: "01",
      title: "Analyze Logic",
      text: "I break down complex problems into clear algorithmic steps and technical requirements before writing any code.",
    },
    {
      number: "02",
      title: "Structure Data",
      text: "Choosing the correct data arrangements and schemas to ensure efficient performance and readable implementations.",
    },
    {
      number: "03",
      title: "Clean Coding",
      text: "Writing modular, structured logic following best practices, keeping comments and logic simple and scalable.",
    },
    {
      number: "04",
      title: "Test & Refine",
      text: "Debugging errors, running core inputs, and refining execution speed to ensure stability across frameworks.",
    },
  ],
  endText: "Ready to build!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 88 },
        { name: "Java", level: 82 },
        { name: "C & C++", level: 85 },
        { name: "JavaScript", level: 78 },
        { name: "SQL", level: 90 },
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "SQLite & PostgreSQL", level: 85 },
        { name: "MySQL", level: 82 },
        { name: "Git & GitHub", level: 85 },
        { name: "CLI & Linux Basics", level: 80 },
        { name: "VS Code & Streamlit", level: 88 },
      ],
    },
    {
      title: "Core CS Fundamentals",
      skills: [
        { name: "Data Structures & Algorithms", level: 88 },
        { name: "Object-Oriented Programming (OOP)", level: 85 },
        { name: "Database Management (DBMS)", level: 88 },
        { name: "Operating Systems (OS)", level: 80 },
        { name: "Computer Networks", level: 78 },
      ],
    },
  ],
};

export const contentCreation = {
  badge: "Credentials & Badges",
  heading: "Verified Achievements",
  description:
    "Core skill milestones completed during my computer science degree tracking practical capability.",
  categories: [
    {
      title: "Problem Solving & Python",
      description:
        "Earning verified problem-solving credentials and coding badges on technical assessment platforms.",
      stats: "HackerRank Certified",
      icon: "💻",
    },
    {
      title: "Data Analytics Simulation",
      description:
        "Completing structured enterprise mock modules to understand real-world data analytics structures.",
      stats: "Deloitte Simulation",
      icon: "📊",
    },
    {
      title: "SQL Mastery",
      description:
        "Demonstrating advanced relational database querying capabilities and data retrieval optimization logic.",
      stats: "HackerRank SQL Gold Badge",
      icon: "🥇",
    },
    {
      title: "Industry Ready Programme",
      description:
        "Collaborated with teammates to engineer a secure logging utility using C and an algorithmic travel budgeting platform built with Java foundations.",
      stats: "MJCET'S Industry Ready Programme",
      icon: "🛠️",
    },
    {
      title: "Hackathons & Ideathons",
      description:
        "Collaborating under intense timelines to build prototype solutions, solve computer vision prompts, and design relational schemas.",
      stats: "Datanyx & CBIT Finalist",
      icon: "🚀",
    },
  ],
};

export const leadershipList = [
  {
    title: "IEEE Sensors Council MJCET Chapter",
    description:
      "Utilized terminal environments to study core microcontroller architectures; mentored and guided 3+ student teams through complex hardware-software integration concepts.",
    role: "Technical Execom Member",
    badge: "Technical Mentorship",
  },
  {
    title: "IEEE Nanotechnology Council (NTC) Student Branch Chapter",
    description:
      "Elected to lead executive branch strategy, manage overall student community operations, coordinate technical core agendas, and streamline cross-departmental operations.",
    role: "General Secretary",
    badge: "Executive Leadership",
  },
  {
    title: "IEEE Nanotechnology Council (NTC) Student Branch Chapter",
    description:
      "Spearheaded digital branding campaigns, expanded community outreach strategies, and crafted structural asset layouts to drive high engagement for technical events.",
    role: "Social Media Manager",
    badge: "Public Relations",
  },
];

export const internshipsList = [
  {
    organization: "IEEE Sensors Council MJCET",
    role: "Technical Execom Member",
    duration: "10/2025 - 05/2026",
    skills: [
      "Hardware-Software Integration",
      "Microcontroller Architectures",
      "Student Team Mentorship",
      "Technical Problem Solving",
    ],
    tech: ["C", "C++", "Terminal CLI", "Microcontrollers"],
  },
  {
    organization: "CodeAlpha",
    role: "Data Analytics Intern",
    duration: "Recent",
    skills: [
      "Data Analysis",
      "Statistical Modeling",
      "Data Cleaning",
      "Logical Structuring",
    ],
    tech: ["Python", "SQL", "Tableau", "Excel"],
  },
];

export const softSkillsList = [
  {
    name: "Analytical Problem Solving",
    description:
      "Breaking down complex engineering tasks into clear step-by-step logic scripts and functional execution loops.",
    icon: "🧠",
  },
  {
    name: "Team Collaboration",
    description:
      "Experienced in managing cross-functional team communication and engineering workflows within group environments.",
    icon: "🤝",
  },
  {
    name: "Leadership & Management",
    description:
      "Organizing student networks and coordinating engineering events across active college council tracks.",
    icon: "👑",
  },
  {
    name: "Adaptable Learning",
    description:
      "Eager to explore new technology stacks and pivot into new coding workflows quickly.",
    icon: "🚀",
  },
];

export const projectsList = [
  {
    id: "omr-corrector",
    number: "01",
    title: "AI OMR Sheet Corrector",
    badge: "Hackathon Winner Project",
    isFlagship: true,
    description:
      "Co-developed an automated bubble-sheet grading platform using Python and OpenCV. Implemented computer vision algorithms achieving 98%+ grading accuracy, successfully eliminating manual evaluation errors during high-volume test scoring.",
    techTags: ["Python", "OpenCV", "Computer Vision", "Image Processing", "Automation"],
    tech: ["Python", "OpenCV", "Computer Vision", "Automation"],
    category: "AI & Computer Vision",
    links: {
      github: "https://github.com/asmatamkeen",
      demo: null,
      live: null,
    },
  },
  {
    id: "score-ranker",
    number: "02",
    title: "Score Ranker Web Application",
    badge: "Live Web App",
    isFlagship: true,
    description:
      "Developed a dynamic leaderboard web application using SQLite for persistent data storage. Optimized SQL query execution to reduce latency by 15% for seamless, simultaneous score updates and real-time rank rendering.",
    techTags: ["Python", "SQLite", "Streamlit", "SQL Query Optimization", "Leaderboard Logic"],
    tech: ["Python", "SQLite", "Streamlit", "SQL"],
    category: "Data Utilities",
    links: {
      github: "https://github.com/asmatamkeen/score-ranker-app",
      demo: "https://scoreranker.streamlit.app/",
      live: "https://scoreranker.streamlit.app/",
    },
  },
  {
    id: "skinsync-db",
    number: "03",
    title: "SkinSync Database Architecture",
    badge: "Ideathon Finalist",
    isFlagship: false,
    description:
      "Architected a normalized relational database framework using SQL for 'SkinSync' to track 100+ hormone-disrupting components and calculate real-time product safety scores for consumer health transparency.",
    techTags: ["SQL", "Relational Database Design", "Schema Normalization", "DBMS"],
    tech: ["SQL", "PostgreSQL", "DBMS"],
    category: "Relational Databases",
    links: {
      github: "https://github.com/asmatamkeen",
      demo: null,
      live: null,
    },
  },
  {
    id: "secure-auth",
    number: "04",
    title: "Secure User Authentication System",
    badge: "Security Utility",
    isFlagship: false,
    description:
      "Engineered a secure terminal-based login system in C using custom data masking protocols, mitigating credential visibility threats by 100% during terminal password inputs.",
    techTags: ["C", "Terminal CLI", "Data Masking", "Authentication Protocol"],
    tech: ["C", "CLI", "Data Security"],
    category: "Systems & Security",
    links: {
      github: "https://github.com/asmatamkeen",
      demo: null,
      live: null,
    },
  },
  {
    id: "travel-budgeter",
    number: "05",
    title: "Currency Converter & Travel Budgeter",
    badge: "OOP Java Application",
    isFlagship: false,
    description:
      "Designed a modular Java application automating expense tracking across 5+ global currencies using robust Object-Oriented design patterns (OOP) to handle multi-currency arrays and dynamic rates.",
    techTags: ["Java", "OOP", "Data Structures", "Currency Logic"],
    tech: ["Java", "OOP", "Algorithms"],
    category: "Software Utilities",
    links: {
      github: "https://github.com/asmatamkeen",
      demo: null,
      live: null,
    },
  },
];

// Aliases for backwards compatibility
export const projects = projectsList;

export const certificates = {
  featured: [
    {
      name: "Python & SQL Certification",
      issuer: "HackerRank",
      icon: "💻",
    },
    {
      name: "DATANYX '25 24-Hour Datathon",
      issuer: "CS & AI Dept, MJCET",
      icon: "📊",
    },
    {
      name: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      icon: "🥇",
    },
    {
      name: "Build Week: Data Structures & Algorithms",
      issuer: "GDGC × Horizon",
      icon: "🧠",
    },
    {
      name: "Build Week: Cyber Security Domain",
      issuer: "GDGC × Horizon",
      icon: "🔒",
    },
    {
      name: "CBIT Women Ideathon 1.0 Finals",
      issuer: "CBIT Hyderabad",
      icon: "🚀",
    },
    {
      name: "MJ-Industry Ready Program (Cycle 1)",
      issuer: "MJCET",
      icon: "🛠️",
    },
  ],
  viewAllUrl: "/Certificates.pdf",
};

export const education = {
  degree: "B.E. – Computer Science & Engineering",
  institution: "Muffakham Jah College of Engineering and Technology (MJCET)",
  cgpa: "8.17 (SGPA)",
  graduation: "2028",
  twelfth: "Intermediate / 12th Science",
  tenth: "High School / 10th Grade",
};

export const footerContent = {
  taglines: [
    "Computer Science & Core Logic",
    "Python · Java · C · SQL · Data Structures",
    "Algorithmic Problem Solving",
  ],
  credential: "B.E. CSE · SGPA 8.17",
  copyright: `© ${new Date().getFullYear()} Asma Tamkeen | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
