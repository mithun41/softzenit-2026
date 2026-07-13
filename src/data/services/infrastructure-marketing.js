export const infrastructureMarketingServices = [
  {
    id: "api-integrations",
    slug: "api-integrations",
    title: "API Integrations",
    category: "Infrastructure & Growth",
    icon: "Network",
    shortDescription: "Connect disparate systems, third-party software, and legacy databases seamlessly.",
    heroTitle: "Seamless Systems Connectivity",
    heroSubtitle: "Bridge the gap between your fragmented software tools with robust, secure API integrations.",
    features: [
      { title: "Custom Middleware", description: "Build translation layers between systems that don't natively talk to each other." },
      { title: "Third-Party APIs", description: "Integration with payment gateways, SMS providers, ERPs, and CRMs." },
      { title: "Legacy System Bridging", description: "Expose modern REST/GraphQL APIs from older, on-premise SOAP/XML systems." },
      { title: "Webhook Management", description: "Real-time event listening and data syncing across platforms." }
    ],
    benefits: [
      { title: "Eliminate Data Entry", description: "Stop manually copying data from one system to another." },
      { title: "Real-Time Sync", description: "Ensure all departments are looking at the exact same, updated data." },
      { title: "Extend Lifespan", description: "Keep using expensive legacy software by giving it modern connectivity." }
    ],
    useCases: [
      { industry: "E-Commerce", description: "Syncing Shopify orders directly into a custom logistics ERP." },
      { industry: "FinTech", description: "Connecting local banking APIs with mobile wallets securely." }
    ],
    techStack: ["Node.js", "GraphQL", "REST", "Redis", "AWS API Gateway"],
    faq: [
      { question: "How do you handle rate limits?", answer: "We implement queuing systems (like RabbitMQ or Redis) to throttle requests and ensure data delivery without hitting limits." }
    ]
  },
  {
    id: "cloud-solutions",
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    category: "Infrastructure & Growth",
    icon: "Cloud",
    shortDescription: "AWS/Azure architecture, migration, and DevOps automation.",
    heroTitle: "Scalable Cloud Architecture",
    heroSubtitle: "Modernize your infrastructure for infinite scalability, high availability, and reduced costs.",
    features: [
      { title: "Cloud Migration", description: "Seamless lift-and-shift or refactoring from on-premise to AWS/Azure/GCP." },
      { title: "DevOps & CI/CD", description: "Automated testing and deployment pipelines for zero-downtime releases." },
      { title: "Serverless Architecture", description: "Pay only for what you use by utilizing Lambda and serverless databases." },
      { title: "Disaster Recovery", description: "Multi-region backups and automated failover systems." }
    ],
    benefits: [
      { title: "Cost Optimization", description: "Eliminate the capital expenditure of buying and maintaining physical servers." },
      { title: "High Availability", description: "Ensure your applications stay online 99.99% of the time." },
      { title: "Faster Time-to-Market", description: "Automated pipelines allow developers to push features daily instead of monthly." }
    ],
    useCases: [
      { industry: "High-Traffic Portals", description: "Auto-scaling infrastructure to handle sudden media spikes." },
      { industry: "Financial Services", description: "Highly secure, isolated VPCs complying with data sovereignty laws." }
    ],
    techStack: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    faq: [
      { question: "Can you audit our current AWS bill?", answer: "Yes, we specialize in cloud cost-optimization, often reducing monthly bills by 30-50%." }
    ]
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "Infrastructure & Growth",
    icon: "TrendingUp",
    shortDescription: "SEO, Google Ads, Meta Ads, Social Media Marketing, Branding, and Content.",
    heroTitle: "Data-Driven Digital Marketing",
    heroSubtitle: "Transform your online presence into a predictable, scalable revenue engine.",
    features: [
      { title: "Search Engine Optimization", description: "Technical, On-page, and Off-page SEO to dominate Google rankings." },
      { title: "Performance Marketing", description: "High-ROI Google Ads and Meta Ads campaigns." },
      { title: "Social Media Management", description: "Engaging content calendars, community management, and branding." },
      { title: "Content Marketing", description: "High-quality blogs, whitepapers, and video scripts that convert." }
    ],
    benefits: [
      { title: "Increased ROI", description: "Stop guessing and start tracking every dollar spent to actual conversions." },
      { title: "Brand Authority", description: "Position your company as the thought leader in your industry." },
      { title: "Predictable Lead Flow", description: "Build funnels that consistently generate qualified B2B or B2C leads." }
    ],
    useCases: [
      { industry: "B2B Software", description: "Generating high-ticket leads through LinkedIn Ads and technical SEO." },
      { industry: "E-Commerce", description: "Scaling ROAS (Return on Ad Spend) through dynamic Facebook product ads." }
    ],
    techStack: ["Google Analytics 4", "Semrush", "Meta Business Manager", "HubSpot"],
    faq: [
      { question: "How long does SEO take?", answer: "While ads generate immediate traffic, SEO is a long-term strategy typically showing significant ROI in 3 to 6 months." }
    ]
  }
];
