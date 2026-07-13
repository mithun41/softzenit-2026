export const erpGeneralServices = [
  {
    id: "erp-development",
    slug: "erp-development",
    title: "ERP Development for all industries",
    category: "ERP & Management",
    icon: "Database",
    shortDescription: "Full-featured ERP platforms from production floor to C-suite dashboards.",
    heroTitle: "Unified Enterprise Resource Planning",
    heroSubtitle: "Consolidate your entire business operations into a single, scalable, and intelligent platform.",
    features: [
      { title: "Centralized Database", description: "A single source of truth eliminating data silos across departments." },
      { title: "Real-Time Dashboards", description: "C-level analytics and reporting generated in real-time." },
      { title: "Modular Architecture", description: "Start with core modules and add HR, Inventory, or Finance as you grow." },
      { title: "Cloud Deployment", description: "Accessible securely from anywhere, on any device." }
    ],
    benefits: [
      { title: "Data Accuracy", description: "Eliminate manual data entry errors between disconnected systems." },
      { title: "Operational Visibility", description: "Track bottlenecks and inefficiencies instantly." },
      { title: "Cost Savings", description: "Reduce IT overhead by replacing multiple fragmented software licenses." }
    ],
    useCases: [
      { industry: "Multinational Corporations", description: "Cross-border financial consolidation and supply chain tracking." },
      { industry: "Mid-Market Enterprises", description: "Scaling operations without linearly increasing administrative headcount." }
    ],
    techStack: ["Node.js", "Java", "PostgreSQL", "React", "Docker"],
    faq: [
      { question: "Can the ERP integrate with our existing accounting tool?", answer: "Yes, we build robust API bridges to sync with legacy systems like SAP, Oracle, or local accounting tools." }
    ]
  },
  {
    id: "crm-systems",
    slug: "crm-systems",
    title: "CRM Systems",
    category: "ERP & Management",
    icon: "Users",
    shortDescription: "Customer relationship management tailored to your sales pipeline and data.",
    heroTitle: "Accelerate Sales with Custom CRM",
    heroSubtitle: "Track leads, automate follow-ups, and close deals faster with a CRM built for your exact sales process.",
    features: [
      { title: "Pipeline Management", description: "Visual drag-and-drop boards to track deal stages." },
      { title: "Omnichannel Comms", description: "Integrate email, WhatsApp, and SMS directly into the client profile." },
      { title: "Sales Automation", description: "Trigger follow-up emails and task assignments automatically." },
      { title: "Performance Tracking", description: "Leaderboards and conversion analytics for your sales team." }
    ],
    benefits: [
      { title: "Higher Conversion Rates", description: "Never let a lead fall through the cracks again." },
      { title: "Better Customer Retention", description: "Maintain detailed histories of every client interaction." },
      { title: "Data Sovereignty", description: "Own your customer data completely without paying per-user SaaS fees." }
    ],
    useCases: [
      { industry: "B2B Sales", description: "Managing long, complex sales cycles with multiple stakeholders." },
      { industry: "Real Estate", description: "Tracking buyer preferences and automating property recommendations." }
    ],
    techStack: ["Next.js", "Node.js", "MongoDB", "Twilio API"],
    faq: [
      { question: "Why build a custom CRM instead of using Salesforce?", answer: "Custom CRMs eliminate expensive per-user monthly licensing and are stripped of bloatware, focusing exactly on what your team needs." }
    ]
  },
  {
    id: "pos-software",
    slug: "pos-software",
    title: "POS Software",
    category: "ERP & Management",
    icon: "Monitor",
    shortDescription: "Point-of-sale systems for retail, F&B, and multi-branch operations.",
    heroTitle: "Lightning-Fast Point of Sale",
    heroSubtitle: "Process transactions, track inventory, and manage multiple branches seamlessly.",
    features: [
      { title: "Multi-Branch Sync", description: "Real-time inventory synchronization across all your physical locations." },
      { title: "Offline Mode", description: "Continue processing sales even if the internet connection drops." },
      { title: "Hardware Integration", description: "Seamless connection with barcode scanners, receipt printers, and cash drawers." },
      { title: "Barcode/RFID Support", description: "Fast scanning and inventory intake mechanisms." }
    ],
    benefits: [
      { title: "Faster Checkouts", description: "Reduce queue times and improve customer satisfaction." },
      { title: "Inventory Control", description: "Prevent stockouts and overstocking with automated alerts." },
      { title: "Theft Prevention", description: "Strict cash register tracking and shift management." }
    ],
    useCases: [
      { industry: "Supermarkets", description: "High-volume scanning and complex discount rules." },
      { industry: "Apparel Stores", description: "Matrix inventory managing sizes, colors, and seasons." }
    ],
    techStack: ["Electron (Desktop App)", "React", "Node.js", "Local First Sync (PouchDB)"],
    faq: [
      { question: "Does this work offline?", answer: "Yes, our POS solutions feature an offline-first architecture that syncs automatically when the connection returns." }
    ]
  },
  {
    id: "hrm-biometric",
    slug: "hrm-biometric",
    title: "HRM with Biometric/Fingerprint Integration",
    category: "ERP & Management",
    icon: "Fingerprint",
    shortDescription: "Automated payroll, attendance tracking, and deep hardware integration.",
    heroTitle: "Modernize Your Workforce Management",
    heroSubtitle: "End-to-end Human Resource Management with direct hardware integration for foolproof attendance.",
    features: [
      { title: "Biometric Sync", description: "Direct API integration with ZKTeco and other popular fingerprint/face-scan devices." },
      { title: "Automated Payroll", description: "Calculate salaries, overtime, taxes, and bonuses with one click." },
      { title: "Leave Management", description: "Self-service portal for employees to request leaves with manager approval workflows." },
      { title: "Performance Appraisals", description: "Track KPIs, OKRs, and conduct structured review cycles." }
    ],
    benefits: [
      { title: "Zero Time Theft", description: "Biometric hardware integration eliminates buddy-punching." },
      { title: "HR Efficiency", description: "Reduce days of manual payroll calculation to minutes." },
      { title: "Employee Satisfaction", description: "Transparent leave balances and pay slip access via mobile." }
    ],
    useCases: [
      { industry: "Manufacturing", description: "Managing shift-based attendance for thousands of factory workers." },
      { industry: "Corporate Offices", description: "Tracking desk-time, remote work, and complex KPI structures." }
    ],
    techStack: ["React", "Python (Hardware Bridge)", "PostgreSQL", "Redis"],
    faq: [
      { question: "Which biometric devices do you support?", answer: "We support major protocols and devices, primarily focusing on ZKTeco hardware via push SDKs." }
    ]
  },
  {
    id: "accounting-billing",
    slug: "accounting-billing",
    title: "Accounting & Billing Software",
    category: "ERP & Management",
    icon: "Calculator",
    shortDescription: "Automated invoicing, tax compliance, and multi-currency ledgers.",
    heroTitle: "Precision Accounting & Automated Billing",
    heroSubtitle: "Take control of your cash flow with compliant, secure, and automated financial software.",
    features: [
      { title: "Double-Entry Ledger", description: "Strict, compliant accounting core to prevent data tampering." },
      { title: "Recurring Billing", description: "Automated subscription generation and invoice emailing." },
      { title: "Tax Automation", description: "Pre-configured local tax rules (VAT, GST) applied instantly." },
      { title: "Bank Reconciliation", description: "Import bank statements to automatically match and clear transactions." }
    ],
    benefits: [
      { title: "Financial Clarity", description: "Instant access to P&L, Balance Sheets, and Cash Flow statements." },
      { title: "Faster Payments", description: "Integrated payment gateways inside invoices to get paid instantly." },
      { title: "Audit Readiness", description: "Maintain a flawless, immutable trail of all financial actions." }
    ],
    useCases: [
      { industry: "Agencies & Consultancies", description: "Tracking billable hours and managing retainer invoicing." },
      { industry: "Subscription Businesses", description: "Handling monthly automated recurring payments." }
    ],
    techStack: ["Next.js", "Java Spring Boot", "PostgreSQL", "Stripe API"],
    faq: [
      { question: "Is this compliant with local tax laws?", answer: "Yes, we customize the tax engine to comply strictly with your regional financial regulations." }
    ]
  },
  {
    id: "factory-erp",
    slug: "factory-erp",
    title: "Factory ERP",
    category: "ERP & Management",
    icon: "Factory",
    shortDescription: "Raw material tracking, machine maintenance, and supply chain management.",
    heroTitle: "Digitize Your Factory Floor",
    heroSubtitle: "Complete visibility from raw material intake to final product dispatch.",
    features: [
      { title: "BOM Management", description: "Complex Bill of Materials tracking with multi-level assemblies." },
      { title: "Production Planning", description: "Capacity planning and machine scheduling algorithms." },
      { title: "Quality Control", description: "Digital checkpoints and defect logging during the assembly process." },
      { title: "Preventative Maintenance", description: "Automated alerts for machine servicing to prevent downtime." }
    ],
    benefits: [
      { title: "Reduced Wastage", description: "Precise tracking of raw materials prevents loss and spoilage." },
      { title: "Optimized Throughput", description: "Identify bottlenecks on the factory floor instantly." },
      { title: "Traceability", description: "Track a finished product back to its exact raw material batch." }
    ],
    useCases: [
      { industry: "Food Processing", description: "Strict expiry tracking and hygiene compliance checkpoints." },
      { industry: "Electronics Assembly", description: "Managing thousands of micro-components and QA testing." }
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "IoT Protocols"],
    faq: [
      { question: "Can this integrate with IoT sensors?", answer: "Yes, we can bridge the ERP with factory floor IoT sensors for real-time machine telemetry." }
    ]
  },
  {
    id: "garments-erp",
    slug: "garments-erp",
    title: "Garments ERP",
    category: "ERP & Management",
    icon: "Shirt",
    shortDescription: "Order tracking, cutting/sewing floor management, and export compliance.",
    heroTitle: "End-to-End RMG Software",
    heroSubtitle: "Purpose-built ERP for the Ready-Made Garments sector, handling complex color/size matrices.",
    features: [
      { title: "Merchandising Hub", description: "Costing sheets, sample tracking, and buyer communication." },
      { title: "Cutting & Sewing Tracking", description: "Bundle tracking and piece-rate wage calculation." },
      { title: "Commercial & Export", description: "L/C (Letter of Credit) tracking and automated export documentation." },
      { title: "Color/Size Matrix", description: "Advanced inventory system designed specifically for apparel variations." }
    ],
    benefits: [
      { title: "On-Time Shipment", description: "Critical path method (T&A) alerts to ensure deadlines are met." },
      { title: "Accurate Costing", description: "Prevent profit leakage with micro-level material and labor costing." },
      { title: "Buyer Transparency", description: "Generate instant progress reports for international buyers." }
    ],
    useCases: [
      { industry: "Apparel Manufacturing", description: "Managing the entire lifecycle from yarn to finished garment." },
      { industry: "Textile Mills", description: "Tracking spinning, weaving, and dyeing processes." }
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
    faq: [
      { question: "Does it handle piece-rate payroll?", answer: "Yes, the system accurately calculates wages based on individual worker output per bundle." }
    ]
  },
  {
    id: "manufacturing-erp",
    slug: "manufacturing-erp",
    title: "Manufacturing ERP",
    category: "ERP & Management",
    icon: "Wrench",
    shortDescription: "Heavy industry resource planning, logistics, and multi-plant operations.",
    heroTitle: "Heavy Industry Operational Mastery",
    heroSubtitle: "Scale your manufacturing operations with software that handles intense logistical complexity.",
    features: [
      { title: "Multi-Plant Sync", description: "Centralized control over multiple manufacturing facilities." },
      { title: "Logistics & Fleet", description: "Track dispatch, delivery routes, and vehicle maintenance." },
      { title: "Subcontracting", description: "Manage raw materials sent to third-party vendors for processing." },
      { title: "Demand Forecasting", description: "AI-assisted tools to predict material requirements." }
    ],
    benefits: [
      { title: "Inventory Optimization", description: "Maintain Just-In-Time (JIT) inventory to free up working capital." },
      { title: "Unified Reporting", description: "C-level dashboards aggregating data from all plants." },
      { title: "Compliance", description: "Automated environmental and safety compliance logging." }
    ],
    useCases: [
      { industry: "Automotive Parts", description: "Managing strict QA and complex multi-stage assemblies." },
      { industry: "Plastics & Packaging", description: "Tracking weight-based raw material conversions." }
    ],
    techStack: ["Next.js", "Java", "Oracle/PostgreSQL"],
    faq: [
      { question: "Is this suitable for continuous process manufacturing?", answer: "Yes, we customize the BOM and routing modules to support both discrete and process manufacturing." }
    ]
  },
  {
    id: "restaurant-software",
    slug: "restaurant-software",
    title: "Restaurant Software",
    category: "ERP & Management",
    icon: "Utensils",
    shortDescription: "KDS, recipe management, and multi-branch franchise control.",
    heroTitle: "Smart Restaurant Management",
    heroSubtitle: "From the front-of-house POS to the back-of-house Kitchen Display System.",
    features: [
      { title: "Kitchen Display System (KDS)", description: "Digital screens replacing paper tickets for faster service." },
      { title: "Recipe & Wastage", description: "Deduct raw ingredients accurately down to the gram per sale." },
      { title: "Table Management", description: "Visual floor plans for reservations and order routing." },
      { title: "QR Code Menus", description: "Contactless ordering and direct-to-table payments." }
    ],
    benefits: [
      { title: "Faster Table Turnover", description: "Streamlined communication between waiters and the kitchen." },
      { title: "Food Cost Control", description: "Identify pilferage and recipe deviations instantly." },
      { title: "Franchise Ready", description: "Manage central kitchen distributions to multiple outlets." }
    ],
    useCases: [
      { industry: "Fine Dining", description: "Complex course sequencing and reservation management." },
      { industry: "QSR (Fast Food)", description: "High-speed ordering and third-party delivery aggregation." }
    ],
    techStack: ["React Native (Tablets)", "React", "Node.js"],
    faq: [
      { question: "Can it integrate with Foodpanda/UberEats?", answer: "Yes, we can build custom API bridges to pull third-party delivery orders straight into your POS." }
    ]
  },
  {
    id: "isp-billing",
    slug: "isp-billing",
    title: "ISP Billing Software",
    category: "ERP & Management",
    icon: "Wifi",
    shortDescription: "Radius integration, automated disconnections, and customer portals.",
    heroTitle: "Automated ISP Management",
    heroSubtitle: "Manage subscribers, bandwidth, and automated billing without manual intervention.",
    features: [
      { title: "MikroTik/Radius Integration", description: "Direct communication with routers for bandwidth control." },
      { title: "Auto Disconnection", description: "Automatically suspend connections for overdue payments." },
      { title: "Customer Portal & App", description: "Self-service for users to check usage, raise tickets, and pay bills." },
      { title: "Reseller Management", description: "Manage local cable operators and revenue sharing." }
    ],
    benefits: [
      { title: "Zero Revenue Leakage", description: "Automated cut-offs ensure 100% payment collection." },
      { title: "Lower Support Load", description: "Customer portals reduce basic billing inquiry calls." },
      { title: "Operational Scaling", description: "Manage 10,000+ subscribers with a minimal administrative team." }
    ],
    useCases: [
      { industry: "Broadband Providers", description: "Managing FTTH networks and monthly subscriptions." },
      { industry: "WISP", description: "Wireless internet providers managing remote access points." }
    ],
    techStack: ["PHP/Laravel", "Node.js", "MySQL", "Radius APIs"],
    faq: [
      { question: "Does it support prepaid and postpaid?", answer: "Yes, both billing models are fully supported with automated invoice generation." }
    ]
  },
  {
    id: "real-estate-software",
    slug: "real-estate-software",
    title: "Real Estate Software",
    category: "ERP & Management",
    icon: "Building",
    shortDescription: "Property CRM, installment tracking, and lead management.",
    heroTitle: "PropTech Solutions for Developers",
    heroSubtitle: "Manage your properties, agents, and buyers from a single, powerful platform.",
    features: [
      { title: "Property Inventory", description: "Visual grid mapping of available, booked, and sold units." },
      { title: "Installment Tracking", description: "Automated calculation and reminders for buyer payment schedules." },
      { title: "Agent Commission", description: "Multi-tier commission structures and payout tracking." },
      { title: "Lead Funnel", description: "Capture leads from social media and assign them to brokers round-robin." }
    ],
    benefits: [
      { title: "Cash Flow Visibility", description: "Predict future revenues based on scheduled installments." },
      { title: "No Double Booking", description: "Centralized inventory prevents selling the same unit twice." },
      { title: "Higher Sales Conversion", description: "Automated follow-ups keep leads warm." }
    ],
    useCases: [
      { industry: "Property Developers", description: "Managing large-scale apartment and commercial tower projects." },
      { industry: "Real Estate Agencies", description: "Managing hundreds of brokers and secondary market listings." }
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "AWS S3 (for contracts)"],
    faq: [
      { question: "Can buyers log in to see their payment status?", answer: "Yes, we include a secure Buyer Portal for them to download receipts and check due dates." }
    ]
  }
];
