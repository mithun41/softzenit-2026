export const erpHealthEducationServices = [
  {
    id: "hospital-erp",
    slug: "hospital-erp",
    title: "Hospital ERP",
    category: "Health & Education",
    icon: "Stethoscope",
    shortDescription: "End-to-end hospital management from patient admission to discharge and billing.",
    heroTitle: "Digital Hospital Management",
    heroSubtitle: "Streamline patient care, reduce administrative errors, and optimize hospital operations.",
    features: [
      { title: "Patient Management (OPD/IPD)", description: "Seamless admission, bed allocation, and discharge workflows." },
      { title: "Electronic Health Records (EHR)", description: "Secure, centralized patient history and treatment tracking." },
      { title: "Pharmacy Integration", description: "Automated inventory deduction and prescription billing." },
      { title: "Doctor Scheduling", description: "Manage rosters, appointments, and commission calculations." }
    ],
    benefits: [
      { title: "Improved Patient Care", description: "Instant access to medical history reduces diagnostic errors." },
      { title: "Zero Billing Leakage", description: "Automated aggregation of room, doctor, pharmacy, and lab charges." },
      { title: "Operational Efficiency", description: "Reduce paperwork and waiting times at reception." }
    ],
    useCases: [
      { industry: "Multi-Specialty Hospitals", description: "Managing complex workflows across dozens of departments." },
      { industry: "Specialized Clinics", description: "Tailored workflows for maternity, eye, or orthopedic centers." }
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "HL7 Standards compliance"],
    faq: [
      { question: "Is patient data secure?", answer: "Yes, we implement strict role-based access control and encrypt sensitive health data." }
    ]
  },
  {
    id: "dental-erp",
    slug: "dental-erp",
    title: "Dental ERP",
    category: "Health & Education",
    icon: "Smile",
    shortDescription: "Visual dental charting, appointment scheduling, and patient follow-ups.",
    heroTitle: "Specialized Dental Clinic Management",
    heroSubtitle: "Focus on smiles, not paperwork, with software designed specifically for dentistry.",
    features: [
      { title: "Visual Odontogram", description: "Interactive 3D/2D dental charts to map treatments per tooth." },
      { title: "Treatment Plans", description: "Create multi-visit plans and estimate costs for patients instantly." },
      { title: "Appointment Reminders", description: "Automated SMS/WhatsApp reminders to reduce no-shows." },
      { title: "Inventory Tracking", description: "Track expensive dental materials (implants, composites)." }
    ],
    benefits: [
      { title: "Enhanced Patient Experience", description: "Visual charts help patients understand their treatment." },
      { title: "Reduced No-Shows", description: "Automated reminders ensure a packed schedule." },
      { title: "Accurate Billing", description: "Tie specific treatments directly to the invoice." }
    ],
    useCases: [
      { industry: "Private Dental Practices", description: "Single-chair clinics streamlining daily tasks." },
      { industry: "Dental Chains", description: "Centralized patient data across multiple city branches." }
    ],
    techStack: ["React", "Node.js", "MongoDB", "Twilio API"],
    faq: [
      { question: "Can we upload X-rays?", answer: "Yes, the system includes a DICOM viewer and secure image storage." }
    ]
  },
  {
    id: "diagnostic-erp",
    slug: "diagnostic-erp",
    title: "Diagnostic Center ERP",
    category: "Health & Education",
    icon: "Activity",
    shortDescription: "Machine interfacing, sample tracking, and automated report generation.",
    heroTitle: "Accelerate Diagnostic Reporting",
    heroSubtitle: "Connect your lab machines directly to the software for zero-error reporting.",
    features: [
      { title: "Machine Interfacing", description: "Direct integration with analyzers (Sysmex, Roche, etc.) to fetch results." },
      { title: "Sample Barcoding", description: "Generate and scan barcodes to track samples through departments." },
      { title: "Automated Reporting", description: "Auto-generate PDF reports with digital signatures from pathologists." },
      { title: "Referral Tracking", description: "Manage doctor commissions and referral analytics." }
    ],
    benefits: [
      { title: "Zero Typo Errors", description: "Direct machine interfacing eliminates manual data entry mistakes." },
      { title: "Faster Turnaround", description: "Deliver reports to patients via SMS/Web hours faster." },
      { title: "Audit Trail", description: "Track exactly which technician processed which sample." }
    ],
    useCases: [
      { industry: "Pathology Labs", description: "High-volume blood and fluid testing." },
      { industry: "Radiology Centers", description: "Managing X-Ray, MRI, and CT scan reporting workflows." }
    ],
    techStack: ["C# (Machine Bridge)", "React", "Node.js", "PostgreSQL"],
    faq: [
      { question: "Can patients download their own reports?", answer: "Yes, a secure patient portal and SMS links are generated automatically." }
    ]
  },
  {
    id: "medical-college-erp",
    slug: "medical-college-erp",
    title: "Medical College ERP",
    category: "Health & Education",
    icon: "HeartPulse",
    shortDescription: "Combined hospital management and academic administration.",
    heroTitle: "Unified Medical College Administration",
    heroSubtitle: "Bridge the gap between academic theory and clinical practice management.",
    features: [
      { title: "Dual Profiles", description: "Manage doctors who are also professors, and students who are clinical clerks." },
      { title: "Clinical Rotations", description: "Schedule and track student ward placements." },
      { title: "Integrated Hospital Management", description: "Full Hospital ERP seamlessly connected to academic modules." },
      { title: "Compliance Reporting", description: "Generate reports for medical council (BMDC/MCI) accreditations." }
    ],
    benefits: [
      { title: "Unified System", description: "No need for separate academic and hospital software." },
      { title: "Better Training", description: "Track student clinical exposure accurately." },
      { title: "Administrative Control", description: "Manage complex payrolls for dual-role staff." }
    ],
    useCases: [
      { industry: "Teaching Hospitals", description: "Large institutions combining patient care with medical education." }
    ],
    techStack: ["Next.js", "Java", "PostgreSQL"],
    faq: [
      { question: "Does it include a library module?", answer: "Yes, it includes full academic modules including library, hostel, and fee management." }
    ]
  },
  {
    id: "school-erp",
    slug: "school-erp",
    title: "School ERP",
    category: "Health & Education",
    icon: "GraduationCap",
    shortDescription: "Fee collection, attendance, grading, and parent portals.",
    heroTitle: "Digital Campus Management",
    heroSubtitle: "Automate administrative tasks so educators can focus on teaching.",
    features: [
      { title: "Fee Management", description: "Automated invoice generation, fine calculation, and online payments." },
      { title: "Result Processing", description: "Complex grading logic (GPA/CGPA) and automated report card generation." },
      { title: "Parent Portal/App", description: "Real-time updates on attendance, grades, and notices." },
      { title: "Transport Management", description: "Track bus routes, student boarding, and driver assignments." }
    ],
    benefits: [
      { title: "Increased Revenue", description: "Reduce fee defaults through automated SMS reminders." },
      { title: "Parent Satisfaction", description: "Keep parents highly engaged with transparent, real-time data." },
      { title: "Time Savings", description: "Reduce weeks of manual result processing down to hours." }
    ],
    useCases: [
      { industry: "K-12 Schools", description: "Managing thousands of students across multiple sections." },
      { industry: "Chain Schools", description: "Centralized control over multiple campus branches." }
    ],
    techStack: ["React", "PHP/Laravel", "MySQL", "Firebase"],
    faq: [
      { question: "Can parents pay fees online?", answer: "Yes, we integrate local payment gateways (bKash, SSLCommerz, Stripe) for direct fee collection." }
    ]
  },
  {
    id: "college-erp",
    slug: "college-erp",
    title: "College ERP",
    category: "Health & Education",
    icon: "BookOpen",
    shortDescription: "Admissions, academic advising, and alumni management.",
    heroTitle: "Streamline Higher Education",
    heroSubtitle: "Manage the complex lifecycle of college students from admission to alumni.",
    features: [
      { title: "Online Admissions", description: "Customizable application forms with merit list generation." },
      { title: "Course Registration", description: "Self-service portal for students to select electives and majors." },
      { title: "Faculty Management", description: "Class scheduling, syllabus tracking, and workload management." },
      { title: "Alumni Network", description: "Integrated database to track and engage with graduates." }
    ],
    benefits: [
      { title: "Paperless Admissions", description: "Eliminate manual data entry during the rush of admission season." },
      { title: "Resource Optimization", description: "Conflict-free class and exam scheduling." },
      { title: "Data-Driven Decisions", description: "Analyze dropout rates and academic performance trends." }
    ],
    useCases: [
      { industry: "Degree Colleges", description: "Managing under-grad and post-grad academic tracking." }
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL"],
    faq: [
      { question: "Does it support credit-based grading?", answer: "Yes, the grading engine is fully customizable for both credit-based and traditional marks-based systems." }
    ]
  },
  {
    id: "university-erp",
    slug: "university-erp",
    title: "University ERP",
    category: "Health & Education",
    icon: "Library",
    shortDescription: "Multi-faculty management, research grants, and vast student databases.",
    heroTitle: "Enterprise University Administration",
    heroSubtitle: "A massive, scalable platform to run every aspect of a modern university.",
    features: [
      { title: "Multi-Faculty Architecture", description: "Independent workflows for Engineering, Arts, Business, etc." },
      { title: "Research & Grant Tracking", description: "Manage funding, publications, and PhD progress." },
      { title: "Hostel & Facilities", description: "Complex room allocation, mess management, and maintenance ticketing." },
      { title: "Comprehensive HR", description: "Manage tenure, sabbaticals, and complex faculty payrolls." }
    ],
    benefits: [
      { title: "Unprecedented Scale", description: "Built to handle 50,000+ students and thousands of staff securely." },
      { title: "Inter-Departmental Synergy", description: "Break down silos between the registrar, finance, and academics." },
      { title: "Accreditation Readiness", description: "Generate massive datasets required by national education bodies instantly." }
    ],
    useCases: [
      { industry: "Public Universities", description: "Handling massive scale and complex bureaucratic workflows." },
      { industry: "Private Universities", description: "Focusing on student experience, fee collection, and modern portals." }
    ],
    techStack: ["Java Spring Boot", "Next.js", "Oracle/PostgreSQL", "Kafka"],
    faq: [
      { question: "How long does deployment take?", answer: "A full university ERP is deployed in phases, typically taking 6 to 12 months for complete adoption." }
    ]
  },
  {
    id: "online-education-erp",
    slug: "online-education-erp",
    title: "Online Education ERP",
    category: "Health & Education",
    icon: "Laptop",
    shortDescription: "LMS, live classes, video DRM, and subscription management.",
    heroTitle: "Launch Your EdTech Empire",
    heroSubtitle: "A complete Learning Management System built for scale, security, and engagement.",
    features: [
      { title: "Video DRM Protection", description: "Prevent piracy and unauthorized downloading of your course videos." },
      { title: "Live Classes", description: "Deep integration with Zoom or WebRTC for seamless live sessions." },
      { title: "Quizzes & Assessments", description: "Interactive testing with automated grading and analytics." },
      { title: "Subscription/Course Sales", description: "E-commerce engine for selling single courses or monthly subscriptions." }
    ],
    benefits: [
      { title: "Global Audience", description: "Scale your teaching business beyond physical classroom limitations." },
      { title: "Content Security", description: "Protect your valuable intellectual property from theft." },
      { title: "Passive Income", description: "Automated sales and content delivery running 24/7." }
    ],
    useCases: [
      { industry: "EdTech Startups", description: "Building scalable platforms like Coursera or Udemy." },
      { industry: "Corporate Training", description: "Internal employee onboarding and compliance training." }
    ],
    techStack: ["Next.js", "Node.js", "AWS MediaConvert (DRM)", "Redis"],
    faq: [
      { question: "Can we issue certificates?", answer: "Yes, automated, verifiable PDF certificates are generated upon course completion." }
    ]
  }
];
