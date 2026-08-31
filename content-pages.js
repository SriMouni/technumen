import badgeCmmiFile from "./images/badge-cmmi.png";
import badgeSoc2File from "./images/badge-soc2.png";
import badgeIsoFile from "./images/badge-iso.jpg";

const pages = {
  "about.html": {
    eyebrow: "About Us",
    title: "Built for the AI Epoch, Grounded in 2016",
    intro: "Technumen is an AI-native IT and business consulting firm. We're insights-driven and outcome-based — every engagement is judged on the return it delivers, not the hours it takes.",
    sections: [
      {
        label: "About Us",
        title: "Technology consulting built on integrity and innovation",
        body: "We've spent nearly a decade helping enterprises turn digital transformation from a buzzword into measurable outcomes — bridging legacy core systems with the intelligent, scalable platforms the AI era demands. Since 2016, that specialization has meant one thing consistently: results our clients can point to."
      },
      {
        label: "Mission and Vision",
        title: "The core of business transformation, built on eternal principles",
        stats: [["2016", "Established"], ["1,500+", "People"], ["50+", "Customers"], ["3", "Global Delivery Centers"]],
        cards: [
          ["Our Mission", "To be the core of business transformation with eternal principles. Our mission is to be the world leader in Digital Transformation and help businesses leverage technological advancements while providing maximum value."],
          ["Our Vision", "To be the premier global technology partner recognized for engineering excellence, zero-defect quality, and integrity in transforming complex enterprise legacy architectures into future-ready intelligent platforms."]
        ]
      },
      {
        label: "Founder's Note",
        title: "Why we built Technumen",
        quote: "When we founded Technumen in 2016, enterprise IT was caught between legacy inertia and rapid digital disruption. Our mission was simple: build a consultancy anchored in uncompromising integrity, deep engineering rigor, and client partnerships that last a lifetime. As we lead the transition into the AI epoch, we continue to bridge complex core architectures with intelligent, scalable systems that turn our clients' digital investments into durable competitive advantages.",
        attribution: "Executive Leadership Team, Technumen"
      },
      {
        label: "What Drives Us",
        title: "Our Core Values",
        cards: [
          ["Strength In Diversity", "Diversity brings innovative ideas and fosters a productive work environment. We have developed an open and inclusive workforce."],
          ["Innovation & Excellence", "Our experts explore creative, out-of-the-box solutions so clients can meet expectations and realize growth."],
          ["Entrepreneurial Spirit", "We act as a catalyst for clients to take on complex challenges with energy and accountability."],
          ["Corporate Citizenship", "We take social responsibilities, moral management, and community obligations seriously."],
          ["Client for Life", "We dedicate ourselves as a trusted partner, building relationships that last beyond individual deliverables."],
          ["Work With Integrity", "We uphold integrity in every action without compromising quality."]
        ]
      }
    ],
    cta: ["Partner with Technumen", "From strategy to execution, we bring commitment for excellence and integrity to every engagement.", "Contact Us"]
  },
  "services.html": {
    eyebrow: "Our Services",
    title: "Six Disciplines. One AI-Native Approach.",
    intro: "Every service line below is built around the same core belief: AI should change what's possible, not just what's automated. From core insurance systems to cloud infrastructure, here's where we go deep.",
    sections: [
      {
        label: "Our Capabilities",
        title: "Technology Services",
        body: "From digital applications to cybersecurity, we deliver end-to-end technology consulting services.",
        cards: [
          ["Digital Applications", "Software Products and Digital Engineering covering application development, modernization, enterprise architecture, DevOps, and agile methodologies.", "service-digital-engineering.html"],
          ["Cloud Transformation", "Cloud assessment, migration, cloud-native development, and 24/7 operations management for resilient infrastructure.", "service-cloud.html"],
          ["Advanced Analytics", "Data platform engineering, critical data element identification, and governance frameworks for actionable intelligence.", "service-data.html"],
          ["Quality Engineering", "AI-powered testing, intelligent automation, BIDW test automation, and comprehensive test management services.", "service-quality.html"],
          ["Cyber Security", "Cloud security, product security, GRC, IAM, and managed detection and response for enterprise protection.", "service-security.html"],
          ["Guidewire & Insurance", "Guidewire-led core transformation, digital customer experience, and new product development for P&C insurance.", "guidewire.html"]
        ]
      }
    ],
    cta: ["Let's find the right solution", "Explore how our services can transform your business operations.", "Contact Us"]
  },
  "service-digital-engineering.html": {
    eyebrow: "Digital Applications",
    title: "Software Built to Outlast the Trend Cycle",
    intro: "We design and build the applications your business runs on — modernized, automated, and engineered to scale, not just to launch.",
    sections: [
      {
        label: "Overview",
        title: "Secure application lifecycles for modern businesses",
        body: "Applications are the mainstay of any business — the connective tissue for customer relationship management, internal collaboration, and the daily operational workflows your teams run on. Our in-house team of app developers brings cross-domain experience and stays current with the latest platforms and practices, so whether you're serving B2B enterprise buyers or B2C consumers, the application lifecycle stays agile and secure from concept through production."
      },
      {
        label: "Key Offerings",
        title: "Our Capabilities",
        cards: [
          ["Application Dev & Maintenance", "Full-lifecycle support for software products, from design and build to deployment and maintenance."],
          ["Application Modernization", "Migrate older systems to modern platforms to reduce risk, lower operating costs, and improve customer experience."],
          ["Enterprise Architecture", "Build scalable enterprise platforms with optimized architecture and cost-aware delivery."],
          ["DevOps", "Automated CI/CD pipelines, infrastructure as code, and continuous delivery practices that accelerate release cycles while maintaining quality and security."],
          ["Agile", "Accelerate product development with agile methods, modern tools, and iterative delivery."],
          ["Testing", "Ensure application security, scalability, and quality across the full lifecycle."]
        ]
      },
      {
        label: "What We Deliver",
        title: "Solutions",
        bullets: [
          "Custom-built applications spanning the entire product lifecycle",
          "Delivery grounded in the latest technology and tooling, to compress time-to-market",
          "Cost optimization through targeted architectural change, not wholesale rebuilds",
          "Modern technology adoption that curbs operating costs and reduces long-term risk",
          "Faster launch of market-relevant features as customer expectations shift",
          "Unearthing latent value in legacy applications instead of writing them off",
          "Reduced support burden through better-architected systems",
          "Application security built in, not bolted on",
          "Architecture designed to scale with the business, not against it",
          "Measurably better customer experience as the throughline of every engagement"
        ]
      }
    ],
    cta: ["Ready to modernize your applications?", "Let our digital engineering team assess your portfolio and build a transformation roadmap.", "Contact Us"]
  },
  "service-cloud.html": {
    eyebrow: "Cloud Transformation",
    title: "Cloud Transformation",
    intro: "Accelerate your digital journey with scalable, secure, and cost-optimized cloud solutions across AWS, Azure, and GCP.",
    sections: [
      {
        label: "Cloud Modernization",
        title: "Modernize Your Infrastructure",
        body: "We empower organizations in their cloud journey from strategy, migration, and modernization to ongoing managed services. Leverage cloud to drive innovation, agility, and growth."
      },
      {
        label: "Key Offerings",
        title: "Cloud Capabilities",
        cards: [
          ["Cloud Strategy & Advisory", "Assess the current landscape, recommend the right cloud model, and create a phased migration plan."],
          ["Cloud Migration", "Move workloads with minimal disruption using lift-and-shift, re-platforming, and re-architecting approaches."],
          ["Cloud Modernization", "Transform legacy applications into cloud-native microservices using containers, Kubernetes, serverless, and APIs."],
          ["Cloud Infrastructure & DevOps", "Build scalable infrastructure with IaC, CI/CD pipelines, and automated provisioning, cost, security, and compliance with continuous support."],
          ["Cloud-Native Development", "Build scalable applications using microservices, containers, and serverless technologies."],
          ["Hybrid Cloud", "Integrate on-premises and cloud environments for flexible, phased, or sovereignty-sensitive workloads."],
          ["Cost Optimization", "Reduce cloud spend with right-sizing, reserved instances, and FinOps practices."]
        ]
      },
      {
        label: "Run & Migrate",
        title: "24/7 Operations & Migration Depth",
        cards: [
          ["Operations Management & Excellence", "Round-the-clock design, oversight, and management of cloud operations — delivered with SLA-backed monitoring across your IT environment, cloud infrastructure, and cloud services, at a cost structure built for sustained, not one-time, engagement."],
          ["Migration Services", "Cloud migration covers more ground than a single move: data center to public cloud, platform to platform, or reverse migration back on-premises. Our team also supports Data Centre Services and Virtual Desktop Infrastructure (VDI) as part of a broader migration engagement, not as separate afterthoughts."]
        ]
      }
    ],
    cta: ["Ready for cloud transformation?", "Modernize your infrastructure and accelerate your digital journey.", "Contact Us"]
  },
  "service-data.html": {
    eyebrow: "Advanced Analytics",
    title: "Transforming Data into Actionable Business Intelligence",
    intro: "We establish the foundation necessary for organizations to scale and make strategic AI decisions, from data architecture to governance and analytics.",
    sections: [
      {
        label: "Strategy & Consulting",
        title: "Analytics Strategy & Consulting",
        body: "Applications are the building blocks of customer and employee experience — but only if the data behind them is trustworthy. We help you integrate and modernize legacy and new applications into flexible, agile data architectures, so you can act on the latest analytics innovations instead of waiting on a data team to manually reconcile spreadsheets."
      },
      {
        label: "Data Intelligence",
        title: "Data Intelligence Capabilities",
        body: "We build unified intelligence pipelines, identify critical data elements, and implement governance frameworks for AI-ready organizations.",
        cards: [
          ["Data Platform & Architecture", "Design data lakes, lakehouses, real-time streaming architectures, and unified intelligence pipelines."],
          ["Critical Data Elements Identification", "Map your data landscape, identify high-value assets, and establish lineage and quality metrics."],
          ["Data Management Governance", "Implement catalogs, access controls, retention policies, and regulatory compliance programs."]
        ]
      },
      {
        label: "Industry Focus",
        title: "Financial Services Analytics",
        bullets: [
          "Real-time fraud detection models trained on transaction-level data",
          "Credit risk and portfolio exposure analytics for lenders and underwriters",
          "Regulatory reporting pipelines built for audit-ready traceability"
        ]
      }
    ],
    cta: ["Is Your Data AI-Ready?", "Let us assess your data landscape and build a roadmap to actionable intelligence.", "Get In Touch"]
  },
  "service-quality.html": {
    eyebrow: "Quality Engineering",
    title: "Quality Engineering",
    intro: "We deliver impactful and immaculate Software Quality Automation and Testing services.",
    sections: [
      {
        label: "QE Services",
        title: "Technumen Portfolio of QE Services",
        body: "Wishing testing were more simplified, automated, and efficient for your business? Our AI-based testing mechanism is designed to improve reliability, speed, and value."
      },
      {
        label: "Key Offerings",
        title: "QE Capabilities",
        cards: [
          ["AI for Quality Engineering", "Use AI to trace critical data and add practical value to quality programs."],
          ["Intelligent Test Automation", "Smarter software and application testing with reduced errors and better maintainability."],
          ["BIDW Test Automation", "Secure data foundations and cloud architecture for data warehousing and validation."],
          ["Test Data Management", "Manage accurate test data across cloud migrations, hybrid, and multi-cloud environments."],
          ["Intelligent Test Design Automation", "Reliable test design automation to scale operations and adapt to testing needs."],
          ["Digital QE Services", "Shift to comprehensive QE aligned to the digital future."],
          ["Continuous Testing", "Match CI/CD needs with omnichannel testing, digital assurance, and crowd testing."],
          ["Cost Reduction", "Reduce costs with autonomous testing, full-cycle QE, automation, and validation services."]
        ]
      }
    ],
    cta: ["Ready for quality engineering?", "Shift your QE strategy with AI-powered testing and automation.", "Contact Us"]
  },
  "service-security.html": {
    eyebrow: "Cyber Security",
    title: "Security Built for Industries Where Failure Isn't an Option",
    intro: "Insurance and financial services don't get to treat security as an afterthought — a breach is a regulatory event, not just downtime. We build end-to-end protection designed around that reality.",
    sections: [
      {
        label: "Key Offerings",
        title: "Security Capabilities",
        cards: [
          ["Cloud Security Services", "Cloud security architecture, configuration audits, workload protection, and continuous monitoring."],
          ["Product Security Services", "Secure SDLC consulting, SAST, DAST, SCA, threat modeling, and DevSecOps integration."],
          ["GRC Services", "Risk assessments, compliance audits, policy development, and security awareness training."],
          ["IAM Services", "SSO, MFA, privileged access management, identity governance, and zero-trust access controls."],
          ["MDR Services", "24/7 threat monitoring, incident response, and threat hunting with SOC and SIEM capabilities."]
        ]
      },
      {
        label: "Industry Focus",
        title: "Financial Services Compliance",
        bullets: [
          "SOX, PCI-DSS, and GLBA-aligned control frameworks",
          "Transaction-level fraud monitoring and anomaly detection",
          "Audit-ready evidence collection for examiner review cycles"
        ]
      },
      {
        label: "How We Work",
        title: "Engagement",
        cards: [
          ["Assess", "Evaluate security posture, vulnerabilities, and compliance requirements."],
          ["Architect", "Design a tailored strategy and roadmap aligned with best practices."],
          ["Protect", "Implement solutions and establish monitoring to keep the organization protected."]
        ]
      },
      {
        label: "How We Think",
        title: "Our Security Philosophy",
        cards: [
          ["Holistic Cybersecurity Strategy", "Security here isn't a bolt-on control set — it spans your operations, infrastructure, people, processes, and technology as one connected system, with risk management and regulatory compliance built into every layer rather than checked at the end."],
          ["Secure by Design", "Security requirements and threat modeling are built into the design and development phase itself, tested against those requirements before release, and continuously monitored afterward as new vulnerabilities emerge — not retrofitted once something breaks."],
          ["Threat-Driven SecOps", "Our SecOps team combines human expertise with data analytics and machine learning to actively hunt for indicators of compromise — abnormal network traffic, shifts in user behavior, unusual configuration changes — and uses threat intelligence to get ahead of attacker tactics before they're used against you."],
          ["Zero Trust Principles", "Every user, device, and resource is treated as potentially compromised until proven otherwise. Trust isn't a default state here — it's earned continuously, through strict authentication and validation, not granted once at login."]
        ]
      }
    ],
    cta: ["Strengthen your security posture", "Partner with Technumen for enterprise-grade cybersecurity solutions.", "Contact Us"]
  },
  "guidewire.html": {
    eyebrow: "Guidewire & Insurance",
    title: "Intelligent Core Transformation for Property & Casualty",
    intro: "We deliver end-to-end Guidewire development and maintenance projects designed to reduce operational expenditure and drive business profitability.",
    sections: [
      {
        label: "Insurance Solutions",
        title: "Comprehensive Insurance Solutions",
        cards: [
          ["Guidewire-led Core Transformation", "Modernize legacy systems with Guidewire-led core transformation and managed services."],
          ["Digital Customer Experience", "Deliver seamless digital experiences using our Digital Insurance Accelerator."],
          ["New Product Development", "Develop insurance products across coverage, channel, pricing, compliance, and customer experience."]
        ]
      },
      {
        label: "Guidewire Expertise",
        title: "Deep Guidewire Expertise",
        cards: [
          ["Guidewire Cloud Platform & APIs", "API-first implementations, REST/JSON integrations, and cloud-native Guidewire deployments."],
          ["Integration Gateway", "Microservices-based integrations using Java and Spring Boot."],
          ["Core Systems Expertise", "Implementation across PolicyCenter, BillingCenter, and ClaimCenter."]
        ]
      },
      {
        label: "P&C Insurance",
        title: "Digital Solutions for Property & Casualty Insurance",
        body: "We provide IT services with P/C insurance specialization and a focus on speed and productivity. Our experts expedite the insurance process for easy and quick claims processing."
      }
    ],
    cta: ["Transform Your Insurance Operations", "Leverage our Guidewire expertise and P/C domain knowledge to drive profitability.", "Get In Touch"]
  },
  "financial-services.html": {
    eyebrow: "Financial Services",
    title: "Modernizing the Systems Banks and Lenders Run On",
    intro: "Financial institutions face a narrower margin for error than almost any other industry — every system change touches compliance, every outage touches customer trust. We build AI-powered risk and fraud infrastructure, modernize core banking platforms, and keep regulatory reporting audit-ready, without slowing down your roadmap.",
    sections: [
      {
        label: "Key Offerings",
        title: "Capabilities",
        cards: [
          ["Fraud Detection & Transaction Monitoring", "Real-time, AI-driven anomaly detection built to catch fraud patterns as they emerge, not after the quarterly review."],
          ["Risk & Portfolio Analytics", "Credit risk modeling and portfolio exposure analytics that give underwriting and lending teams a real-time view, not a monthly snapshot."],
          ["Core Banking Modernization", "Migrate legacy core banking and payments platforms to cloud-native architectures with zero-downtime cutover strategies."],
          ["Regulatory Compliance Automation", "Automated control mapping and evidence collection aligned to SOX, PCI-DSS, and GLBA — built so audit season stops being a fire drill."]
        ]
      },
      {
        label: "What We Deliver",
        title: "Built for financial-grade operations",
        bullets: [
          "AI-driven fraud detection & transaction monitoring",
          "Real-time credit risk & portfolio analytics",
          "Core banking & payments platform modernization",
          "Regulatory compliance automation (SOX, PCI-DSS, GLBA)",
          "Cloud-native infrastructure built for financial-grade uptime",
          "Legacy core system migration with zero-downtime cutover"
        ]
      }
    ],
    cta: ["Ready to modernize your financial infrastructure?", "Let's talk about where AI changes your risk and compliance economics.", "Get In Touch"]
  },
  "careers.html": {
    eyebrow: "Careers",
    title: "Shape the Future with Exceptional IT Consulting",
    intro: "Our business growth is directly determined by our consultant base. We actively seek hardworking, intelligent, talented, and determined individuals to join our global network. Email your resume to jobs@technumen.com, or reach our talent team at careers@technumen.com.",
    sections: [
      {
        label: "The Infinity Program",
        title: "Build your career through continuous learning",
        body: "We empower employees through ongoing training, role-specific skill development, and immersive learning platforms.",
        cards: [
          ["Career Development", "Ongoing training, mentorship, role-specific skill development, and structured career paths."],
          ["Complex IT Projects", "High-impact projects across AI, cloud, data, cybersecurity, and enterprise delivery."],
          ["Relocation Assistance", "Support for consultants moving between our US, India, and Costa Rica offices."],
          ["W2 Hiring & US IT Staffing", "End-to-end recruitment lifecycle for mid to senior technical positions."],
          ["Recruitment Infrastructure", "Technical recruiters and account managers skilled across W2, C2C, and 1099 models."],
          ["Guidewire Talent Acquisition", "Specialized workforce solutions for Guidewire developers, BAs, and QA experts."],
          ["Consulting Models", "Flexible engagement across software development, cloud infrastructure, and data analytics roles."]
        ]
      },
      {
        label: "Open Roles",
        title: "Featured Open Positions",
        cards: [
          ["Guidewire Integration Architect", "Full-Time | US / Remote / Hyderabad — PolicyCenter/ClaimCenter, Java/Spring Boot, REST APIs, GWCP."],
          ["Lead Data Lakehouse Engineer", "Full-Time | Hyderabad / Hybrid — Snowflake, Databricks, Apache Kafka, CDE Data Governance pipelines."],
          ["Senior AI / MLOps Engineer", "Full-Time | Hybrid — Enterprise LLM integration, Python, LangChain, Kubernetes MLOps deployment."],
          ["Cloud & DevSecOps Principal", "Full-Time | US / Costa Rica — AWS/Azure landing zones, Terraform IaC, CSPM, and automated CI/CD security."]
        ]
      }
    ],
    cta: ["Ready to Shape the Future?", "Send your resume to jobs@technumen.com and join our global network of exceptional consultants.", "Send Resume"]
  },
  "resources.html": {
    eyebrow: "Resources",
    title: "Governance, Transparency, and Compliance",
    intro: "Explore our security certifications, compliance frameworks, infrastructure defense posture, and thought leadership on AI and digital transformation.",
    sections: [
      {
        label: "Security & Compliance",
        title: "Our Security & Compliance Heritage",
        body: "Built on a foundation of global best practices, rigorous audits, and continuous security improvement.",
        cards: [
          ["CMMI SVC Level 3", "Appraisal #69959 | Expiration: March 18, 2027.", "", badgeSoc2File],
          ["SOC 2 Type 2", "AICPA SOC 2 Type II — Security, Availability & Confidentiality Audited. Report available on request under NDA.", "", badgeCmmiFile],
          ["ISO/IEC 27001:2022", "TÜV Rheinland Certified Management System | ID 9000028215.", "", badgeIsoFile]
        ]
      },
      {
        label: "Trust Center",
        title: "Vendor & Network Security",
        cards: [
          ["Vendor Security", "We minimize risk from third-party vendors through security and performance reviews on every vendor touching our Information Security Management System."],
          ["Network Protection", "Our network runs on key Microsoft Azure security services with regular audits and network intelligence that monitors and blocks known malicious traffic in real time."],
          ["Third-Party Penetration Testing", "Independent security experts run a broad penetration test across our Azure and O365 infrastructure every year — not just when a client requests it."],
          ["Security Incident & Event Management (SIEM)", "Extensive logging from critical network devices and host systems feeds our SIEM, which alerts our security team on correlated triggers for investigation and response."],
          ["Endpoint Detection & Threat Response (EDTR)", "A cloud-native platform protecting endpoints, cloud workloads, identities, and data — with threat intelligence and response built in to stop breaches before they spread."]
        ]
      },
      {
        label: "Operational Security",
        title: "Operational & Access Security",
        bullets: [
          "Security Incident Response — Alerts escalate to Operations, Network Engineering, and Security teams; employees are trained on communication and escalation paths.",
          "Phishing Campaigns — Regular internal phishing simulations to sharpen employee awareness against credential compromise and social engineering.",
          "Configurable Password Policy — Account-level policy enforcement designed to prevent identity breaches before they start.",
          "Conditional Access Policy — Access decisions driven by signals about user and device trustworthiness, not a static allow-list.",
          "Multi-Factor Authentication — An additional layer that reduces security risk while still enabling fast, frictionless digital workflows.",
          "Security Awareness Policies — A documented policy set covering the full range of security topics, shared with every employee and contractor.",
          "Employee Vetting & Background Checks — Criminal, education, and employment verification for all new hires and contractors, per local law.",
          "Confidentiality Agreements — Every new hire signs NDAs and confidentiality agreements before day one."
        ]
      },
      {
        label: "Insights",
        title: "Thought Leadership & Insights",
        cards: [
          ["AI-First Digital Transformation", "How enterprises transition from traditional IT to AI-augmented operations."],
          ["Zero Trust Security Frameworks", "Implementing zero-trust architectures for cloud-native applications and distributed workforces."],
          ["Data-Driven Decision Making", "Building AI-ready data foundations for actionable business intelligence."],
          ["AI in Financial Risk Management", "How fraud detection and credit risk models are moving from batch to real-time."]
        ]
      }
    ],
    cta: ["Questions About Our Security Posture?", "Reach out to learn more about our certifications, compliance, and governance frameworks.", "Contact Us"]
  },
  "contact.html": {
    eyebrow: "Contact Us",
    title: "Start Your Intelligence Journey",
    intro: "Whether you're exploring AI transformation, cloud migration, or staffing solutions, our team is ready to help architect your path forward.",
    sections: [
      {
        label: "Contact Details",
        title: "Reach our team",
        cards: [
          ["Phone", "732-595-0962"],
          ["Email", "info@technumen.com / sales@technumen.com"],
          ["Careers", "jobs@technumen.com"],
          ["United States", "242 Old New Brunswick Rd, Suite #310, Piscataway, NJ 08854"],
          ["India - Madhapur", "3rd Floor, 1-89/3/20, PT NO 20, A&A Lake Front, Opposite Durgam Cheruvu Park Gate, Madhapur, Hyderabad, Telangana 500081"],
          ["India - Ramanthapur", "401, 2-2-58 to 60, Prashanti Arcade, Amberpet Main Road, Ramanthapur, Hyderabad, Telangana 500013"],
          ["Costa Rica", "San Jose, Moraviya, San Vicente, 11401"]
        ]
      },
      {
        label: "Engagement Model",
        title: "Our 3-Step Business Engagement Model",
        body: "A rigorous, standardized consulting and project onboarding process designed for clarity and speed.",
        cards: [
          ["Initial Contact", "A sales manager reaches out to establish communication and understand your business context."],
          ["Requirements Gathering", "Technical experts connect with your team to understand requirements, systems, and desired outcomes."],
          ["Proposal & Delivery", "We outline scope, estimates, timelines, milestones, and accountability."]
        ]
      }
    ],
    cta: ["Get In Touch", "Fill out the form or email us and our team will reach out within one business day.", "Email Technumen"]
  },
  "terms.html": {
    eyebrow: "Terms of Service",
    title: "Terms of Service",
    intro: "These terms govern your use of technumen.com and the services described on it.",
    sections: [
      {
        label: "Legal",
        title: "Awaiting legal review",
        body: "The full text of these Terms of Service is being prepared by Technumen's legal counsel and will be published here. For questions about the terms governing an existing engagement, contact info@technumen.com."
      }
    ],
    cta: ["Questions about these terms?", "Our team can point you to the right contact for contractual and legal enquiries.", "Contact Us"]
  },
  "privacy.html": {
    eyebrow: "Privacy Policy",
    title: "Privacy Policy",
    intro: "How Technumen collects, uses, and protects personal information.",
    sections: [
      {
        label: "Legal",
        title: "Awaiting legal review",
        body: "The full text of this Privacy Policy is being prepared by Technumen's legal counsel and will be published here. To make a data access or deletion request in the meantime, contact info@technumen.com."
      }
    ],
    cta: ["Questions about your data?", "Reach out and our team will route your request to the right people.", "Contact Us"]
  },
  "cookies.html": {
    eyebrow: "Cookies",
    title: "Cookie Policy",
    intro: "How this site uses cookies and similar technologies.",
    sections: [
      {
        label: "Legal",
        title: "Awaiting legal review",
        body: "The full text of this Cookie Policy is being prepared by Technumen's legal counsel and will be published here. For questions about tracking on this site, contact info@technumen.com."
      }
    ],
    cta: ["Questions about cookies?", "Get in touch and we'll walk you through how this site handles tracking.", "Contact Us"]
  }
};

const services = [
  ["Digital Applications", "service-digital-engineering.html"],
  ["Cloud Transformation", "service-cloud.html"],
  ["Advanced Analytics", "service-data.html"],
  ["Quality Engineering", "service-quality.html"],
  ["Cyber Security", "service-security.html"],
  ["Guidewire / Insurance", "guidewire.html"]
];

const pageName = location.pathname.split("/").pop() || "about.html";
const page = pages[pageName] || pages["about.html"];
const motionThemes = {
  "services.html": "services",
  "service-digital-engineering.html": "digital",
  "service-cloud.html": "cloud",
  "service-data.html": "data",
  "service-quality.html": "quality",
  "service-security.html": "security",
  "guidewire.html": "guidewire",
  "financial-services.html": "data"
};
const motionTheme = motionThemes[pageName];

document.title = `${page.eyebrow} | Technumen`;

const view = {
  pageHero: "page-hero relative overflow-hidden pt-[220px] pb-[104px] before:pointer-events-none before:absolute before:inset-[70px_0_auto_12%] before:h-[420px] before:w-[min(760px,70vw)] before:rounded-full before:bg-[radial-gradient(circle_at_32%_44%,rgba(40,234,243,.24),transparent_62%)] before:opacity-80 before:blur-[32px] before:content-[''] max-[760px]:pt-[132px] max-[760px]:pb-16",
  pageContainer: "page-container relative z-[2] mx-auto w-[min(1320px,calc(100%-176px))] max-[960px]:w-[min(100%-64px,1320px)] max-[760px]:w-[min(100%-28px,1320px)]",
  heroTitle: "m-[18px_0_22px] w-[min(980px,100%)] font-['Urbanist',Inter,Arial,sans-serif] text-[50px] font-medium leading-[1.08] tracking-[-.09px] text-white",
  heroIntro: "m-[0_0_34px] w-[min(780px,100%)] font-['Urbanist',Inter,Arial,sans-serif] text-[clamp(15px,1.25vw,18px)] leading-[1.45] text-[#c2c2c2]",
  pageButton: "page-button inline-flex min-h-[54px] items-center justify-center rounded-[50px] bg-white px-8 font-['Urbanist',Inter,Arial,sans-serif] text-lg font-semibold text-[#0d0d10] no-underline",
  contentSection: "content-section relative overflow-hidden border-t border-white/10 py-[78px] max-[760px]:py-[54px]",
  contentGrid: "content-grid mt-12 grid grid-cols-3 gap-5 max-[960px]:grid-cols-2 max-[760px]:grid-cols-1",
  contentCard: "content-card content-card--motion relative min-h-[220px] overflow-hidden rounded-lg border border-[rgba(255,255,255,.12)] bg-[linear-gradient(180deg,rgba(255,255,255,.045),rgba(255,255,255,.015))] p-7",
  contentTitle: "card-title",
  contentBody: "card-body",
  contentLink: "content-link mt-[18px] inline-flex text-sm font-semibold text-[#bcffa5] no-underline",
  pageStats: "page-stats mt-12 grid grid-cols-4 gap-4 max-[760px]:grid-cols-1",
  statCard: "rounded-lg border border-white/10 bg-white/[.035] p-6",
  statNumber: "block text-[38px] font-normal leading-none text-[#28eaf3]",
  statLabel: "mt-3 block font-['Urbanist',Inter,Arial,sans-serif] text-xs text-[#c2c2c2]",
  pageCta: "page-cta pt-9",
  footerLink: "mb-4 block text-sm leading-[17px] tracking-[-.09px] text-white"
};

const serviceMotionVisuals = {
  services: `
    <span class="motion-grid"></span>
    <span class="service-constellation"></span>
    <span class="motion-hub"></span>
    <span class="motion-service-tile motion-service-tile--one"></span>
    <span class="motion-service-tile motion-service-tile--two"></span>
    <span class="motion-service-tile motion-service-tile--three"></span>
    <span class="motion-service-tile motion-service-tile--four"></span>
    <span class="service-spark service-spark--one"></span>
    <span class="service-spark service-spark--two"></span>
  `,
  digital: `
    <span class="motion-grid"></span>
    <span class="code-rain"></span>
    <span class="digital-window digital-window--main"><i></i><i></i><i></i></span>
    <span class="digital-window digital-window--side"><i></i><i></i></span>
    <span class="digital-phone"><i></i><i></i></span>
    <span class="digital-cursor"></span>
    <span class="digital-release-line"></span>
    <span class="deploy-node deploy-node--one"></span>
    <span class="deploy-node deploy-node--two"></span>
  `,
  cloud: `
    <span class="motion-grid"></span>
    <span class="cloud-beam"></span>
    <span class="cloud-core"></span>
    <span class="cloud-ring cloud-ring--one"></span>
    <span class="cloud-ring cloud-ring--two"></span>
    <span class="cloud-server cloud-server--one"><i></i><i></i><i></i></span>
    <span class="cloud-server cloud-server--two"><i></i><i></i><i></i></span>
    <span class="cloud-pod cloud-pod--one"></span>
    <span class="cloud-pod cloud-pod--two"></span>
    <span class="cloud-pod cloud-pod--three"></span>
  `,
  data: `
    <span class="motion-grid"></span>
    <span class="data-stream data-stream--one"></span>
    <span class="data-stream data-stream--two"></span>
    <span class="service-data-packet service-data-packet--one"></span>
    <span class="service-data-packet service-data-packet--two"></span>
    <span class="data-chart"><i></i><i></i><i></i><i></i><i></i></span>
    <span class="data-lens"></span>
    <span class="data-model-node data-model-node--one"></span>
    <span class="data-model-node data-model-node--two"></span>
  `,
  quality: `
    <span class="motion-grid"></span>
    <span class="quality-scan"></span>
    <span class="test-progress"><i></i></span>
    <span class="quality-matrix"><i></i><i></i><i></i><i></i><i></i><i></i></span>
    <span class="quality-check quality-check--one"></span>
    <span class="quality-check quality-check--two"></span>
    <span class="quality-bug"></span>
  `,
  security: `
    <span class="motion-grid"></span>
    <span class="security-shield"></span>
    <span class="security-lock"></span>
    <span class="security-radar security-radar--one"></span>
    <span class="security-radar security-radar--two"></span>
    <span class="security-pulse security-pulse--one"></span>
    <span class="security-pulse security-pulse--two"></span>
    <span class="security-block security-block--one"></span>
    <span class="security-block security-block--two"></span>
  `,
  guidewire: `
    <span class="motion-grid"></span>
    <span class="guidewire-flow"></span>
    <span class="guidewire-policy"></span>
    <span class="guidewire-card guidewire-card--one"><i></i><i></i></span>
    <span class="guidewire-card guidewire-card--two"><i></i><i></i></span>
    <span class="guidewire-card guidewire-card--three"><i></i><i></i></span>
    <span class="guidewire-node"></span>
    <span class="guidewire-claim-dot guidewire-claim-dot--one"></span>
    <span class="guidewire-claim-dot guidewire-claim-dot--two"></span>
  `
};

const serviceMotionMarkup = motionTheme ? `
  <div class="service-motion service-motion--${motionTheme}" aria-hidden="true">
    ${serviceMotionVisuals[motionTheme] || serviceMotionVisuals.services}
  </div>
` : "";

const linkify = (text = "") => text
  .replace(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g, '<a class="inline-link" href="mailto:$1">$1</a>')
  .replace(/(?<!["\d>-])(\d{3}-\d{3}-\d{4})(?![\d<])/g, '<a class="inline-link" href="tel:+1$1">$1</a>');

const cardMarkup = (cards = []) => cards.map(([title, body, href, img], index) => `
  <article class="${view.contentCard}" style="--motion-order:${index}">
    <span class="content-card-sheen" aria-hidden="true"></span>
    ${img ? `<span class="card-badge"><img src="${img}" alt="" aria-hidden="true" loading="lazy" /></span>` : ""}
    <h3 class="${view.contentTitle}">${title}</h3>
    <p class="${view.contentBody}">${linkify(body)}</p>
    ${href ? `<a class="${view.contentLink}" href="${href}">Explore</a>` : ""}
  </article>
`).join("");

const statsMarkup = (stats = []) => stats.length ? `
  <div class="${view.pageStats}">
    ${stats.map(([num, label]) => `<div class="${view.statCard}"><strong class="${view.statNumber}">${num}</strong><span class="${view.statLabel}">${label}</span></div>`).join("")}
  </div>
` : "";

const bulletsMarkup = (bullets = []) => bullets.length ? `
  <ul class="page-bullets">
    ${bullets.map(item => `<li>${item}</li>`).join("")}
  </ul>
` : "";

const quoteMarkup = (section) => section.quote ? `
  <figure class="page-quote">
    <blockquote>${section.quote}</blockquote>
    ${section.attribution ? `<figcaption>&mdash; ${section.attribution}</figcaption>` : ""}
  </figure>
` : "";

document.querySelector("[data-page-root]").innerHTML = `
  <section class="${view.pageHero}">
    ${serviceMotionMarkup}
    <div class="${view.pageContainer}">
      <p class="section-kicker">${page.eyebrow}</p>
      <h1 class="${view.heroTitle}">${page.title}</h1>
      <p class="${view.heroIntro}">${linkify(page.intro)}</p>
      <a class="${view.pageButton}" href="${pageName === "careers.html" ? "mailto:jobs@technumen.com" : pageName === "contact.html" ? "mailto:info@technumen.com" : "contact.html"}">${page.cta?.[2] || "Contact Us"}</a>
    </div>
  </section>
  ${page.sections.map((section, sectionIndex) => `
    <section class="${view.contentSection} ${motionTheme ? "content-section--motion" : ""}" style="--section-order:${sectionIndex}">
      <div class="${view.pageContainer}">
        <div class="section-copy">
          <p class="section-kicker">${section.label}</p>
          <h2 class="section-title">${section.title}</h2>
          ${section.body ? `<p class="section-body">${linkify(section.body)}</p>` : ""}
        </div>
        ${quoteMarkup(section)}
        ${statsMarkup(section.stats)}
        ${bulletsMarkup(section.bullets)}
        ${section.cards ? `<div class="${view.contentGrid}">${cardMarkup(section.cards)}</div>` : ""}
      </div>
    </section>
  `).join("")}
  <section class="${view.pageCta}">
    <div class="${view.pageContainer}">
      <div class="cta-panel">
        <h2 class="cta-title">${page.cta?.[0] || "Ready to transform?"}</h2>
        <p class="cta-copy">${linkify(page.cta?.[1] || "Partner with Technumen to accelerate your next step.")}</p>
        <a class="${view.pageButton} page-button--light" href="${pageName === "careers.html" ? "mailto:jobs@technumen.com" : "contact.html"}">${page.cta?.[2] || "Contact Us"}</a>
      </div>
    </div>
  </section>
`;

document.querySelectorAll("[data-services-list]").forEach(el => {
  el.innerHTML = services.map(([label, href]) => `<a class="${view.footerLink}" href="${href}">${label}</a>`).join("");
});
