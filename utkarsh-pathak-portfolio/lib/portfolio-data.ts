export const portfolioData = {
  personalInfo: {
    name: "Utkarsh Pathak",
    role: "Senior Frontend Engineer",
    yoe: "6.5+ Years Experience",
    location: "Noida, Uttar Pradesh, India",
    email: "utkarshpathak03@gmail.com",
    summary:
      "ReactJS developer with 6.5+ years building secure, high-performance, accessible banking and enterprise web applications. I have shipped production systems for ANZ, Samsung SDS, and IBM — specializing in Next.js, TypeScript, web performance, and WCAG accessibility.",
    socials: {
      linkedin: "https://linkedin.com/in/utkarsh-pathak-543003153",
      github: "https://github.com",
      email: "mailto:utkarshpathak03@gmail.com",
    },
    resume: "https://drive.google.com/file/d/1_itNNToFYy4y5wyMfolZndcqul59TECd/view?usp=sharing",
  },

  metrics: [
    { value: "6.5+", label: "Years Experience" },
    { value: "30%", label: "Fraud Reduction at ANZ" },
    { value: "100%", label: "WCAG Accessibility Compliance" },
  ],

  experience: [
    {
      company: "Infosys Limited",
      client: "ANZ (Australia and New Zealand Banking Group)",
      role: "Senior Associate Consultant",
      period: "Jun 2023 – Present",
      location: "Noida, India",
      highlights: [
        "Engineered secure 2FA & scam interstitial workflows for ANZ.com, cutting customer fraud by 30%.",
        "Spearheaded frontend architecture for the Suncorp Bank migration as sole developer under strict regulatory standards.",
        "Evaluated Next.js server-client boundaries to offload heavy computations, cutting delivery timelines by 20%.",
        "Achieved 100% WCAG accessibility compliance on International Money Transfer workflows using VoiceOver.",
        "Maintained 85%+ code coverage via Jest and React Testing Library, significantly lowering production defects.",
        "Mentored 4 junior developers, boosting Agile team onboarding efficiency by 25%.",
      ],
      techStack: [
        "ReactJS",
        "Next.js",
        "TypeScript",
        "Redux",
        "Redux-Saga",
        "Jest",
        "RTL",
        "WCAG",
      ],
    },
    {
      company: "Infosys Limited",
      client: "Samsung SDS",
      role: "Associate Consultant",
      period: "Jul 2022 – Jun 2023",
      location: "Noida, India",
      highlights: [
        "Cut initial load times by 30% and improved INP by 25% via Chrome DevTools profiling and React.lazy code-splitting.",
        "Architected strict TypeScript Generics and integrated TanStack Query, cutting boilerplate and API latency by 20%.",
        "Built 20+ responsive components using OneUI-Web across 4 enterprise dashboard modules.",
        "Partnered with backend engineering to define RESTful API contracts and minimize integration defects.",
      ],
      techStack: [
        "ReactJS",
        "TypeScript",
        "Redux",
        "TanStack Query",
        "OneUI-Web",
        "Tailwind CSS",
      ],
    },
    {
      company: "IBM India",
      client: "Aditya Birla Sun Life Insurance",
      role: "Application Developer",
      period: "Jan 2020 – Jun 2022",
      location: "Noida, India",
      highlights: [
        "Created modular UI components using Tailwind CSS, reducing technical debt by 20%.",
        "Engineered high-throughput dynamic search, multi-tier filtering, sorting, and server-side pagination components.",
        "Diagnosed and resolved 30+ critical production bugs while supporting CI/CD build deployments.",
      ],
      techStack: ["ReactJS", "JavaScript", "Tailwind CSS", "Webpack", "REST APIs"],
    },
  ],

  skills: {
    Frontend: [
      "ReactJS",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux / Redux-Saga",
      "TanStack Query",
      "Tailwind CSS",
      "Material UI",
    ],
    "Quality & Accessibility": [
      "Jest",
      "React Testing Library",
      "WCAG 100% Compliance",
      "VoiceOver",
      "SonarQube",
    ],
    "Core & AI": [
      "Data Structures & Algorithms",
      "Problem Solving",
      "Generative AI",
      "Prompt Engineering",
      "AI-Assisted Development",
    ],
    "Tools & DevOps": [
      "Git / SVN",
      "Codefresh",
      "Postman",
      "Webpack / Babel",
      "Figma",
      "Jira / Confluence",
    ],
  } as Record<string, string[]>,

  projects: [
    {
      title: "Super IDE",
      tagline: "A browser-based code editor and development environment.",
      url: "https://super-ide.vercel.app",
      details: [
        "In-browser code editing with a file tree, tabs, and live preview.",
        "Built as a fast, responsive single-page experience with Next.js and TypeScript.",
        "Focused on a clean, distraction-free workspace that runs entirely in the browser.",
      ],
      tags: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Work Pulse Dashboard",
      tagline: "A productivity dashboard for tracking work and team activity.",
      url: "https://work-pulse-dashboard.vercel.app",
      details: [
        "Interactive dashboard visualizing tasks, activity, and progress at a glance.",
        "Responsive charts and cards with a clean, accessible layout.",
        "Built with React and modern data-fetching patterns for a snappy experience.",
      ],
      tags: ["React", "Tailwind", "Vite"],
    },
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "PSIT College of Engineering, Kanpur",
      year: "2019",
    },
  ],
}
