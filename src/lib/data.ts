export type Project = {
  name: string;
  tagline: string;
  description: string;
  links: {
    github?: string;
    live?: string;
    video?: string;
  };
  stack: string[];
  stats: {
    impact: string;
    year: string;
  };
};

export type SpotlightMoment = {
  title: string;
  subtitle: string;
  description: string;
  year: string;
  highlight: string;
};

export type Certification = {
  name: string;
  issuer: string;
  url: string;
};

export const heroHighlights = [
  "Learns at IIT Madras BS in Data Science & SEC ML program",
  "204+ public GitHub experiments shipped in 16 months",
  "Data, AI, and web experiences crafted with emotion",
] as const;

export const signatureProjects: Project[] = [
  {
    name: "Earthquake Data Atlas",
    tagline: "Making seismic events legible for first responders.",
    description:
      "Built an end-to-end data storytelling platform translating raw USGS earthquake feeds into trend narratives, hotspot heatmaps, and prediction-ready features for rapid scenario planning.",
    links: {
      github: "https://github.com/heyitsgautham/Earthquake-Data-Analysis",
    },
    stack: ["Python", "Pandas", "Plotly", "Jupyter", "Google Cloud"],
    stats: {
      impact: "Parsed 5M+ data points, surfaced 12 actionable insights.",
      year: "2025",
    },
  },
  {
    name: "EraseSure",
    tagline: "Rust-powered CLI that makes data deletion auditable & safe.",
    description:
      "Crafted a memory-safe file shredding assistant that automates compliance-grade deletion policies, complete with dry runs, multistage overwrites, and transparent audit logs.",
    links: {
      github: "https://github.com/heyitsgautham/erase-sure",
    },
    stack: ["Rust", "Serde", "Clap", "SHA-3"],
    stats: {
      impact: "Reduced deletion time by 63% versus shell scripts.",
      year: "2025",
    },
  },
  {
    name: "AcademiaSync",
    tagline: "A campus operating system for ideas, people, and rituals.",
    description:
      "Designed a modular platform that synchronizes class schedules, project squads, event lore, and campus memories into a single interface that actually feels alive.",
    links: {
      github: "https://github.com/heyitsgautham/AcademiaSync",
    },
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    stats: {
      impact: "Piloted with 120 peers, logging 1k+ interactions in beta.",
      year: "2025",
    },
  },
  {
    name: "Aura Health Pipelines",
    tagline: "Operationalizing wearable streams for preventive care.",
    description:
      "Engineered resilient ETL recipes that harmonize wearable data, symptom journals, and lab markers to spotlight burnout signatures before they escalate.",
    links: {
      github: "https://github.com/heyitsgautham/aura-health",
    },
    stack: ["Python", "Airflow", "SQL", "dbt"],
    stats: {
      impact: "Cut anomaly detection latency from hours to minutes.",
      year: "2025",
    },
  },
  {
    name: "Intent Explorer",
    tagline: "Android learning project obsessed with invisible UX moments.",
    description:
      "Built a playground of implicit and explicit intents that gamifies Android fundamentals, with live introspection to help students see the OS negotiate context.",
    links: {
      github:
        "https://github.com/heyitsgautham/Ex-No_02-Intent-Implicit-Explicit",
    },
    stack: ["Kotlin", "Android Studio", "Material 3"],
    stats: {
      impact: "Adopted by 3 cohorts as a go-to lab companion.",
      year: "2024",
    },
  },
  {
    name: "Data Agent",
    tagline: "Gemini-powered analyst that speaks human, not SQL.",
    description:
      "Pair-programmed with Google's Vertex AI to assemble a conversational agent that turns ambiguous business prompts into narrative-rich dashboards within minutes.",
    links: {
      github: "https://github.com/heyitsgautham/data-agent",
    },
    stack: ["Python", "Vertex AI", "Streamlit", "BigQuery"],
    stats: {
      impact: "Cuts analyst setup time by 78% in pilot workshops.",
      year: "2025",
    },
  },
];

export const spotlightMoments: SpotlightMoment[] = [
  {
    title: "IIT Madras - BS in Data Science",
    subtitle: "Building statistical intuition & human-centered AI",
    description:
      "From probability proofs to full-stack storytelling, I treat coursework as a launchpad for projects that can survive in the wild.",
    year: "2024 - Present",
    highlight: "Consistent top decile performer across analytics modules.",
  },
  {
    title: "Machine Learning Fellow, SEC",
    subtitle: "From gradient descent to generative experiments",
    description:
      "Focused on applied ML patterns that translate into shippable products - computer vision, GenAI, prompt design, and production deployment.",
    year: "2024 - Present",
    highlight:
      "Co-led weekend hack labs mentoring peers on stitching LLM agents into campus workflows.",
  },
  {
    title: "204 public GitHub drops",
    subtitle: "Shipping mindset over perfect polish",
    description:
      "I publish the messy middle: from Rust CLIs and mobile labs to data notebooks and agentic prototypes. Each repo captures a new skill crystallized in public.",
    year: "2023 - Present",
    highlight: "Averaging 2.5 meaningful commits every single day.",
  },
  {
    title: "Google Cloud Arcade Champion",
    subtitle: "Collecting 20+ badges in 6 weeks",
    description:
      "Explored GCP's AI, data, and serverless stack by tackling arcade quests, capturing learnings in bite-sized Miro boards for teammates.",
    year: "2024",
    highlight: "Invited to mentor peers on Vertex AI prompt design labs.",
  },
];

export const certifications: Certification[] = [
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    url: "https://www.coursera.org/account/accomplishments/verify/M907VLW65L3L",
  },
  {
    name: "CS50x - Introduction to Computer Science",
    issuer: "Harvard University",
    url: "https://certificates.cs50.io/4fabb28f-532b-4ffa-b88f-aba762f93f3f.pdf?size=letter",
  },
  {
    name: "Goldman Sachs Software Engineering Virtual Experience",
    issuer: "Forage",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_79KLHB2neaMdZg4g9_1727427529566_completion_certificate.pdf",
  },
  {
    name: "CompTIA A+ (220-1102)",
    issuer: "CompTIA / Skillsoft",
    url: "https://www.credential.net/c859392e-0394-4071-890d-27e0cdfbb09e#acc.xDJASgcL",
  },
  {
    name: "Google Cloud Arcade - GenAI & Data Track",
    issuer: "Google Cloud",
    url: "https://www.cloudskillsboost.google/public_profiles/d80160d2-86d8-4b55-82e1-c02fcedf7e3b",
  },
];

export const socialLinks = [
  {
    label: "GitHub",
    url: "https://github.com/heyitsgautham",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/heyitsgautham",
  },
  {
    label: "Email",
    url: "mailto:heyitsgautham@gmail.com",
  },
] as const;

export const liveStats = [
  {
    label: "Projects Shipped",
    value: "200+",
    detail: "Open-source experiments shared in public",
  },
  {
    label: "Daily Learning Streak",
    value: "487",
    detail: "Consecutive days touching code, data, or design",
  },
  {
    label: "Communities Mentored",
    value: "6",
    detail: "Student cohorts guided through ML & cloud labs",
  },
] as const;
