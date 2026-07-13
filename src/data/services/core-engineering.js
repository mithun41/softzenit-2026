export const coreEngineeringServices = [
  {
    id: "custom-software",
    slug: "custom-software",
    title: "Custom Software Development",
    category: "Core Engineering",
    dashboardImage: "", 
    officeImage: "", 
    icon: "Code",
    shortDescription: "Bespoke software engineered to your exact business logic, scale, and integration requirements.",
    heroTitle: "Bespoke Software Engineered for Impact",
    heroSubtitle: "We build custom, scalable software architectures tailored to your operational needs.",
    features: [
      { title: "Tailored Architecture", description: "System design built precisely for your unique business workflows." },
      { title: "High Scalability", description: "Microservices and cloud-native patterns ensuring growth without bottlenecks." },
      { title: "Security First", description: "ISO 27001-compliant security practices baked into every layer." },
      { title: "Seamless Integration", description: "Connect with existing legacy systems and third-party APIs flawlessly." }
    ],
    benefits: [
      { title: "Complete Ownership", description: "You own the IP, with no recurring vendor licensing fees." },
      { title: "Operational Efficiency", description: "Automate manual tasks and streamline your core processes." },
      { title: "Competitive Advantage", description: "Software that adapts to your market, rather than forcing you to adapt to the software." }
    ],
    useCases: [
      { industry: "Logistics", description: "Custom routing and fleet management systems." },
      { industry: "Finance", description: "Secure transaction processing and reporting dashboards." },
      { industry: "Healthcare", description: "Patient portal and custom clinic management." }
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
    faq: [
      { question: "How long does a custom software project take?", answer: "Depending on complexity, MVPs typically take 2-3 months, while full enterprise solutions take 6+ months." },
      { question: "Do you provide post-launch support?", answer: "Yes, we offer flexible SLA-based maintenance and continuous integration support." }
    ]
  },
  {
    id: "web-development",
    slug: "web-development",
    title: "Custom Web Application Development",
    category: "Core Engineering",
    icon: "Globe",
    shortDescription: "Scalable web apps with modern architecture, API-first design, and best-in-class UX.",
    heroTitle: "High-Performance Web Applications",
    heroSubtitle: "Deliver exceptional digital experiences globally with our scalable web solutions.",
    features: [
      { title: "Responsive UI", description: "Pixel-perfect rendering across all devices and screen sizes." },
      { title: "Progressive Web Apps (PWA)", description: "App-like experiences directly within the browser, available offline." },
      { title: "API-Driven", description: "Decoupled front-end architecture communicating with robust REST/GraphQL APIs." },
      { title: "SEO Optimized", description: "Server-side rendering (SSR) ensuring maximum visibility on search engines." }
    ],
    benefits: [
      { title: "Global Reach", description: "Accessible to users worldwide without App Store friction." },
      { title: "Faster Iterations", description: "Deploy updates instantly without waiting for app reviews." },
      { title: "Higher Conversion", description: "Optimized load times and frictionless UX to maximize conversions." }
    ],
    useCases: [
      { industry: "SaaS", description: "Multi-tenant platforms with complex role-based access." },
      { industry: "Retail", description: "High-traffic portals with real-time inventory syncing." }
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel", "MongoDB"],
    faq: [
      { question: "Can you upgrade our existing web app?", answer: "Yes, we specialize in modernizing legacy web platforms into scalable React/Next.js stacks." }
    ]
  },
  {
    id: "mobile-development",
    slug: "mobile-development",
    title: "Mobile App Development",
    category: "Core Engineering",
    icon: "Smartphone",
    shortDescription: "Native Android/iOS and cross-platform apps optimized for performance and retention.",
    heroTitle: "Mobile Experiences That Drive Engagement",
    heroSubtitle: "Build high-retention apps for iOS and Android using Native or Cross-platform technologies.",
    features: [
      { title: "Cross-Platform & Native", description: "Expertise in Flutter, React Native, and native iOS/Android development." },
      { title: "Offline Capabilities", description: "Robust local databases ensuring app functionality without internet." },
      { title: "Push Notifications", description: "Targeted, segmented messaging to boost user retention." },
      { title: "App Store Optimization", description: "Technical readiness for smooth Apple and Google Play approvals." }
    ],
    benefits: [
      { title: "Market Penetration", description: "Reach users directly in their pockets." },
      { title: "Brand Loyalty", description: "Create stickiness with an icon permanently on your users' screens." },
      { title: "Hardware Access", description: "Leverage camera, GPS, and biometrics seamlessly." }
    ],
    useCases: [
      { industry: "E-Commerce", description: "One-tap purchasing and AR product previews." },
      { industry: "On-Demand Delivery", description: "Real-time rider tracking and instant notifications." }
    ],
    techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
    faq: [
      { question: "Should I choose Native or Flutter?", answer: "Flutter is usually best for speed and budget, while Native is reserved for heavy graphic or hardware-intensive apps." }
    ]
  },
  {
    id: "ecommerce-solutions",
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    category: "Core Engineering",
    icon: "ShoppingCart",
    shortDescription: "High-conversion digital storefronts built to handle massive scale and complex catalogs.",
    heroTitle: "Scalable E-commerce Platforms",
    heroSubtitle: "Turn browsers into buyers with lightning-fast, high-converting digital storefronts.",
    features: [
      { title: "Omnichannel Sync", description: "Centralize inventory across web, mobile, and physical stores." },
      { title: "Custom Checkouts", description: "Frictionless payment gateways optimized for your target market." },
      { title: "AI Recommendations", description: "Personalized product suggestions to increase average order value." },
      { title: "Robust Analytics", description: "Deep insights into customer behavior and sales trends." }
    ],
    benefits: [
      { title: "Increased Revenue", description: "Optimized UX/UI designed strictly for maximizing conversions." },
      { title: "Operational Ease", description: "Automated fulfillment workflows and inventory tracking." },
      { title: "Unlimited Scalability", description: "Handle Black Friday traffic spikes without downtime." }
    ],
    useCases: [
      { industry: "Fashion Retail", description: "Dynamic catalogs with size guides and rich media." },
      { industry: "B2B Wholesale", description: "Complex pricing tiers, bulk ordering, and account management." }
    ],
    techStack: ["Shopify Plus", "Next.js Commerce", "Magento", "Stripe", "Elasticsearch"],
    faq: [
      { question: "Can you migrate our store from WooCommerce?", answer: "Yes, we handle seamless data migration to more scalable platforms with zero downtime." }
    ]
  },
  {
    id: "social-media-platforms",
    slug: "social-media-platforms",
    title: "Social Media Platforms",
    category: "Core Engineering",
    icon: "MessageCircle",
    shortDescription: "Custom community platforms, forums, and specialized social networks.",
    heroTitle: "Build Your Digital Community",
    heroSubtitle: "Custom social networking solutions designed for niche communities and maximum engagement.",
    features: [
      { title: "Real-Time Feeds", description: "Instant content delivery using WebSockets." },
      { title: "Rich Media Handling", description: "Optimized image and video upload, processing, and streaming." },
      { title: "Granular Moderation", description: "AI-assisted tools for content screening and user management." },
      { title: "Scalable Graphs", description: "Graph databases handling complex user relationship mapping." }
    ],
    benefits: [
      { title: "Data Ownership", description: "Own your audience and their data completely." },
      { title: "High Engagement", description: "Gamification and notification systems that keep users returning." },
      { title: "Custom Monetization", description: "Implement subscriptions, ads, or tipping exactly how you want." }
    ],
    useCases: [
      { industry: "Creator Economy", description: "Gated communities for influencers and their top fans." },
      { industry: "Corporate Alumni", description: "Private networking spaces for university or corporate alumni." }
    ],
    techStack: ["React", "Node.js", "Redis", "WebRTC", "Neo4j"],
    faq: [
      { question: "How do you handle massive user scaling?", answer: "We use microservices, heavy caching (Redis), and CDN edge delivery to ensure fast load times regardless of user count." }
    ]
  },
  {
    id: "corporate-solutions",
    slug: "corporate-solutions",
    title: "Corporate Business Solutions",
    category: "Core Engineering",
    icon: "Briefcase",
    shortDescription: "Enterprise intranet, document management, and workflow automation.",
    heroTitle: "Digital Transformation for Enterprises",
    heroSubtitle: "Streamline corporate operations with unified digital workspaces and automated workflows.",
    features: [
      { title: "Intranet Portals", description: "Secure, centralized hubs for employee communications and resources." },
      { title: "Document Management", description: "Version control, OCR search, and secure file sharing." },
      { title: "Workflow Automation", description: "Digitize approval chains, leave requests, and compliance tracking." },
      { title: "Single Sign-On (SSO)", description: "Seamless integration with Active Directory/Okta." }
    ],
    benefits: [
      { title: "Increased Productivity", description: "Reduce time spent searching for information or chasing approvals." },
      { title: "Enhanced Security", description: "Strict access controls keeping corporate data safe." },
      { title: "Better Collaboration", description: "Break down silos between departments with unified tools." }
    ],
    useCases: [
      { industry: "Multinational Corporations", description: "Connecting distributed teams globally securely." },
      { industry: "Government", description: "Secure inter-departmental communication and record keeping." }
    ],
    techStack: ["Next.js", "Java Spring Boot", "Microsoft Azure", "SharePoint APIs"],
    faq: [
      { question: "Is this secure enough for banking/government?", answer: "Absolutely. We build with strict compliance to global security standards like GDPR and SOC2." }
    ]
  }
];
