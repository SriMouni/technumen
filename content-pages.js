import badgeCmmiFile from "./images/badge-cmmi.png";
import badgeSoc2File from "./images/badge-soc2.png";
import badgeIsoFile from "./images/badge-iso.jpg";

const pages = {
  "about.html": {
    eyebrow: "About Us",
    title: "AI-Ready. Enterprise-Proven.",
    intro: "Since 2012, Technumen has partnered with global enterprises to solve complex technology challenges and deliver meaningful business outcomes.",
    sections: [
      {
        label: "About Us",
        title: "Technology consulting built on integrity and innovation",
        image: ["images/Frame 126.png", "How Technumen builds, tests, deploys and operates enterprise technology"],
        paras: [
          "We combine deep engineering expertise with capabilities across AI, data, cloud, digital engineering and quality engineering. Our teams help enterprises modernize technology, build and scale digital products, accelerate AI adoption, and enhance the quality, reliability, and performance of mission-critical platforms.",
          "We operate as a long-term technology partner, combining domain expertise, engineering excellence, accountability and delivery discipline to help enterprises transform and deliver at scale."
        ]
      },
      {
        label: "Mission and Vision",
        title: "Where we are going, and how we get there",
        stats: [["2012", "Established"], ["1,500+", "People"], ["50+", "Customers"], ["3", "Global Delivery Centers"]],
        cards: [
          ["Our Vision", "To be a trusted technology partner helping enterprises shape the future."],
          ["Our Mission", "To help enterprises solve complex challenges, accelerate modernization, and create lasting business value through AI, data, and engineering."]
        ]
      },
      {
        label: "Our Story",
        title: "Why We Built Technumen",
        timeline: [
          ["2012", "Technumen was founded in 2012 with a simple belief: enterprises need technology partners who understand their business, solve complex problems and take ownership of outcomes."],
          ["Since then", "We built Technumen around strong engineering, trusted relationships and disciplined delivery. Over the years, we've helped enterprises modernize applications, build data platforms, move to the cloud, engineer digital products and improve the quality, security, and performance of critical technology."],
          ["Today", "AI is transforming how technology is built, operated, and delivered. We believe AI should not exist as a standalone service alongside traditional technology capabilities. It should be embedded into the way modern technology is engineered."],
          ["What we’re building", "That's why we are making Technumen AI-ready across our services — using AI to help our clients build smarter products, modernize faster, unlock greater value from data, and engineer higher-quality technology."],
          ["What stays constant", "Technology will continue to evolve. Our commitment to understanding the right problem, engineering the right solution, and delivering outcomes that work will remain at the heart of Technumen."]
        ]
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
      },
      {
        label: "Leadership",
        title: "Experience. Perspective. Leadership.",
        body: "Technumen is led by a team of experienced technology and business leaders who bring together deep industry knowledge, engineering expertise and diverse perspectives. Our leadership team works closely with our clients and our people to turn complex challenges into practical outcomes, build trusted partnerships, and continuously strengthen our capabilities for what's next.",
        people: [
          ["Srikanth Arutla", "Chief Executive Officer"],
          ["Gurrala Sunil Chandra Reddy", "Chief Financial Officer"],
          ["Mallik Miryala", "Chief Operating Officer"],
          ["Vasanthi Penagulur", "Sr. VP – Strategic Partnerships"],
          ["Durga Mishra", "Chief Security Officer"]
        ]
      },
      {
        label: "Women in Leadership",
        title: "Leadership that reflects diverse perspectives.",
        body: "Women play an important role in leadership at Technumen, contributing across technology, business, operations, customer relationships and organizational growth. We are committed to creating an inclusive environment where talented people have the opportunity to grow, take on leadership responsibilities and make a meaningful impact.",
        people: [
          ["Vasanthi Penagulur", "Sr. VP – Strategic Partnerships"],
          ["Revathy Kakani", "Global Delivery Head – Strategic Accounts"],
          ["Elissa Bedamatta", "Global HR Head"],
          ["Jayaprada Ravula", "HR Business Partner – USA"],
          ["Swetha Komatwar", "Account Manager"],
          ["Sindhura Mettu", "Sr Program Manager"],
          ["Saritha Chintala", "HR Business Partner \u2013 India"],
          ["Chandana Namburi", "Sr Program Lead"]
        ]
      },
      {
        label: "How We Lead",
        title: "Our Leadership Principles",
        cards: [
          ["Customer First", "We listen deeply, understand the business context, and take ownership of outcomes — not just deliverables."],
          ["Engineering Excellence", "We apply strong engineering practices, technical depth, and disciplined execution to build technology that is reliable, scalable, and built to last."],
          ["Continuous Innovation", "We embrace emerging technologies, including AI, when they can solve real problems, improve outcomes, and create lasting value."],
          ["People & Collaboration", "We build high-performing teams where diverse experiences, perspectives, and ideas are valued — and where people succeed together."],
          ["Accountability", "We take responsibility for our commitments, our decisions, and the outcomes we deliver for our clients and our people."]
        ]
      }
    ],
    cta: ["Partner with Technumen", "From strategy to execution, we bring commitment for excellence and integrity to every engagement.", "Contact Us"]
  },
  "services.html": {
    eyebrow: "Our Services",
    title: "Technology Services. AI-Ready by Design.",
    intro: "Technology is evolving rapidly, and AI is reshaping how enterprises build, modernize, operate, and grow. Technumen brings together deep engineering expertise across AI, data, cloud, digital engineering, quality engineering, and cybersecurity to help enterprises build new products, modernize technology landscapes, and solve complex business and technology challenges. AI is not a separate service at Technumen — it is becoming an integral part of how we engineer, modernize, test, secure, and operate technology.",
    sections: [
      /* OVERVIEW GRID — commented out: it repeated the six discipline
         sections below, each of which links to its own detail page.
         Remove this comment wrapper to restore it.
      {
        label: "Our Capabilities",
        title: "Six disciplines, engineered to work together",
        body: "End-to-end engineering capabilities tailored for complex enterprise ecosystems. Each discipline is detailed below.",
        cards: [
          ["Digital Engineering", "Build and modernize digital products, applications and platforms with AI-enabled engineering.", "service-digital-engineering.html"],
          ["Data & AI", "Build trusted data foundations and intelligent solutions that turn enterprise data into business value.", "service-data.html"],
          ["Cloud & Platform Engineering", "Modernize technology foundations for cloud, AI and enterprise scale.", "service-cloud.html"],
          ["Quality Engineering", "Deliver quality across the software lifecycle — from traditional applications to AI-powered products.", "service-quality.html"],
          ["Cybersecurity", "Protect applications, infrastructure, identities and data across modern enterprise environments.", "service-security.html"],
          ["Insurance & Guidewire", "Combine deep P&C insurance expertise with Guidewire, modern engineering and AI.", "guidewire.html"]
        ]
      },
      */
      {
        label: "Digital Engineering",
        num: "01",
        title: "Build. Modernize. Scale.",
        body: "We help enterprises build, modernize, and scale digital products, applications and platforms through modern engineering practices, cloud technologies and AI-enabled development.",
        bullets: [
          "Product Engineering",
          "Application Development & Modernization",
          "Enterprise Architecture",
          "AI-Assisted Software Engineering",
          "API & Integration",
          "DevOps & Platform Engineering",
          "Application Support & Maintenance"
        ],
        aiNote: "We apply AI across the development lifecycle — from code generation, refactoring, and modernization to testing, developer productivity, and intelligent automation — helping engineering teams accelerate delivery, improve quality, and focus on higher-value work.",
        link: ["service-digital-engineering.html","Explore Digital Engineering"]
      },
      {
        label: "Data & AI",
        num: "02",
        title: "Turn Data Into Intelligence.",
        body: "Enterprise AI starts with trusted, accessible, and well-engineered data. We help organizations build the data foundations, modern platforms, and intelligent solutions needed to turn data into actionable insights and scale AI across the enterprise.",
        bullets: [
          "Data Engineering",
          "Modern Data Platforms",
          "Data Modernization",
          "Data Governance",
          "Analytics & Business Intelligence",
          "AI/ML Engineering",
          "Generative AI",
          "Enterprise AI Solutions",
          "AI-Ready Data Foundations"
        ],
        aiNote: "We help enterprises move from data to insight to intelligent action — integrating AI across analytics, applications, and business workflows to unlock greater productivity, smarter decisions, and measurable business value.",
        link: ["service-data.html","Explore Data & AI"]
      },
      {
        label: "Cloud & Platform Engineering",
        num: "03",
        title: "Build the Foundation for What’s Next.",
        body: "We help enterprises modernize their technology foundations, accelerate cloud adoption and engineer scalable, secure platforms for digital and AI workloads.",
        bullets: [
          "Cloud Strategy & Assessment",
          "Cloud Migration & Modernization",
          "Cloud-Native Development",
          "Platform Engineering",
          "DevSecOps",
          "AI Infrastructure",
          "Cloud Operations & Managed Services"
        ],
        aiNote: "We help organizations design and engineer cloud environments that are scalable, secure, resilient, and AI-ready — supporting modern applications, data platforms, and AI workloads at enterprise scale.",
        link: ["service-cloud.html","Explore Cloud & Platform Engineering"]
      },
      {
        label: "Quality Engineering",
        num: "04",
        title: "Quality for the AI Era.",
        body: "Traditional testing alone is no longer enough. AI-powered applications introduce new dimensions of quality — including accuracy, reliability, robustness, safety, performance, and the quality of intelligent outcomes. Technumen combines deep quality engineering expertise with AI-enabled testing and evaluation to help enterprises build reliable software, resilient platforms, and intelligent digital experiences they can trust.",
        bullets: [
          "AI Quality Engineering",
          "AI Application Testing",
          "AI/ML Model Evaluation",
          "Human Evaluation",
          "Generative AI Testing",
          "Intelligent Test Automation",
          "Functional & Performance Testing",
          "Test Data Engineering",
          "Continuous Quality Engineering"
        ],
        aiNote: "We apply AI across the quality lifecycle to accelerate test creation and execution, expand coverage, improve automation, and evaluate the behavior, accuracy, consistency, and reliability of AI-powered systems.",
        link: ["service-quality.html","Explore Quality Engineering"]
      },
      {
        label: "Cybersecurity",
        num: "05",
        title: "Secure the Modern Enterprise.",
        body: "As enterprises adopt cloud, modern applications, data platforms, and AI, the security landscape continues to evolve. Technumen helps organizations protect applications, infrastructure, identities, and data across increasingly complex digital environments.",
        bullets: [
          "Cloud Security",
          "Application & Product Security",
          "Identity & Access Management",
          "Security Operations",
          "Governance, Risk & Compliance",
          "Security Testing",
          "AI Security"
        ],
        aiNote: "We help enterprises address emerging AI security challenges while applying intelligent technologies to improve threat detection, security analysis, risk assessment, and response.",
        link: ["service-security.html","Explore Cybersecurity"]
      },
      {
        label: "Insurance & Guidewire",
        num: "06",
        title: "Deep Insurance Expertise. Modern Engineering.",
        body: "Technumen combines deep P&C insurance expertise, Guidewire capabilities, and modern engineering to help insurers transform their technology landscape, modernize core platforms, and deliver better digital experiences.",
        bullets: [
          "Guidewire Implementation",
          "Guidewire Modernization",
          "P&C Insurance Solutions",
          "Digital Customer Experience",
          "Insurance Product Engineering",
          "Data & Analytics",
          "Quality Engineering",
          "AI for Insurance"
        ],
        aiNote: "We help insurers explore and apply AI across underwriting, claims, customer experience, operations, and technology — while modernizing the platforms and data foundations needed to scale these capabilities.",
        link: ["guidewire.html","Explore Insurance & Guidewire"]
      },
      {
        label: "AI Across Technumen",
        title: "AI Isn’t a Separate Service. It’s How We Engineer.",
        cards: [
          ["Build Faster","Accelerate software development, modernization, testing, and engineering productivity."],
          ["Work Smarter With Data","Transform enterprise data into insights, predictions, and intelligent decisions."],
          ["Engineer Better Quality","Use AI-powered testing and evaluation to improve the reliability, accuracy, and performance of traditional and AI-powered applications."],
          ["Modernize With Intelligence","Apply AI to understand, analyze, transform, and continuously improve complex technology environments."],
          ["Automate Intelligently","Use AI to streamline repetitive processes and optimize enterprise workflows where it delivers measurable value."]
        ]
      },
      {
        label: "Why Technumen",
        title: "The Technumen Difference",
        cards: [
          ["Enterprise Experience","More than a decade of experience solving complex technology challenges."],
          ["Engineering Depth","Multidisciplinary expertise spanning digital engineering, data, AI, cloud, quality, cybersecurity, and industry solutions."],
          ["AI-Ready by Design","AI is embedded across capabilities and practices, helping clients accelerate delivery and unlock new possibilities."],
          ["Domain Expertise","Deep knowledge where business processes and operational complexity intersect."],
          ["Long-Term Partnerships","Working alongside clients as an extension of their teams to build, modernize, and evolve technology for the long term."]
        ]
      },
      {
        label: "How We Deliver",
        title: "Engineering That Delivers",
        body: "We combine technical depth with accountability and disciplined execution to turn complex technology challenges into practical, measurable outcomes."
      }
    ],
    cta: ["Ready to Build What's Next?", "Let's talk about your next technology challenge.", "Talk to Technumen"]
  },
  "service-digital-engineering.html": {
    eyebrow: "Digital Engineering",
    title: "Build. Modernize. Scale.",
    intro: "We help enterprises build, modernize, and scale digital products, applications and platforms through modern engineering practices, cloud technologies and AI-enabled development.",
    sections: [
      {
        label: "Overview",
        title: "Secure application lifecycles for modern businesses",
        body: "Applications are the mainstay of any business — the connective tissue for customer relationship management, internal collaboration, and the daily operational workflows your teams run on. Our in-house team of app developers brings cross-domain experience and stays current with the latest platforms and practices, so whether you're serving B2B enterprise buyers or B2C consumers, the application lifecycle stays agile and secure from concept through production."
      },
      {
        label: "Key Offerings",
        title: "Our Capabilities",
        bullets: [
          "Product Engineering",
          "Application Development & Modernization",
          "Enterprise Architecture",
          "AI-Assisted Software Engineering",
          "API & Integration",
          "DevOps & Platform Engineering",
          "Application Support & Maintenance"
        ],
        aiNote: "We apply AI across the development lifecycle — from code generation, refactoring, and modernization to testing, developer productivity, and intelligent automation — helping engineering teams accelerate delivery, improve quality, and focus on higher-value work."
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
    eyebrow: "Cloud & Platform Engineering",
    title: "Build the Foundation for What’s Next.",
    intro: "We help enterprises modernize their technology foundations, accelerate cloud adoption and engineer scalable, secure platforms for digital and AI workloads.",
    sections: [
      {
        label: "Cloud Modernization",
        title: "Modernize Your Infrastructure",
        body: "We empower organizations in their cloud journey from strategy, migration, and modernization to ongoing managed services. Leverage cloud to drive innovation, agility, and growth."
      },
      {
        label: "Key Offerings",
        title: "Cloud Capabilities",
        bullets: [
          "Cloud Strategy & Assessment",
          "Cloud Migration & Modernization",
          "Cloud-Native Development",
          "Platform Engineering",
          "DevSecOps",
          "AI Infrastructure",
          "Cloud Operations & Managed Services"
        ],
        aiNote: "We help organizations design and engineer cloud environments that are scalable, secure, resilient, and AI-ready — supporting modern applications, data platforms, and AI workloads at enterprise scale."
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
    eyebrow: "Data & AI",
    title: "Turn Data Into Intelligence.",
    intro: "Enterprise AI starts with trusted, accessible, and well-engineered data. We help organizations build the data foundations, modern platforms, and intelligent solutions needed to turn data into actionable insights and scale AI across the enterprise.",
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
        bullets: [
          "Data Engineering",
          "Modern Data Platforms",
          "Data Modernization",
          "Data Governance",
          "Analytics & Business Intelligence",
          "AI/ML Engineering",
          "Generative AI",
          "Enterprise AI Solutions",
          "AI-Ready Data Foundations"
        ],
        aiNote: "We help enterprises move from data to insight to intelligent action — integrating AI across analytics, applications, and business workflows to unlock greater productivity, smarter decisions, and measurable business value."
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
    title: "Quality for the AI Era.",
    intro: "Traditional testing alone is no longer enough. AI-powered applications introduce new dimensions of quality — including accuracy, reliability, robustness, safety, performance, and the quality of intelligent outcomes. Technumen combines deep quality engineering expertise with AI-enabled testing and evaluation to help enterprises build reliable software, resilient platforms, and intelligent digital experiences they can trust.",
    sections: [
      {
        label: "QE Services",
        title: "Technumen Portfolio of QE Services",
        body: "Wishing testing were more simplified, automated, and efficient for your business? Our AI-based testing mechanism is designed to improve reliability, speed, and value."
      },
      {
        label: "Key Offerings",
        title: "QE Capabilities",
        bullets: [
          "AI Quality Engineering",
          "AI Application Testing",
          "AI/ML Model Evaluation",
          "Human Evaluation",
          "Generative AI Testing",
          "Intelligent Test Automation",
          "Functional & Performance Testing",
          "Test Data Engineering",
          "Continuous Quality Engineering"
        ],
        aiNote: "We apply AI across the quality lifecycle to accelerate test creation and execution, expand coverage, improve automation, and evaluate the behavior, accuracy, consistency, and reliability of AI-powered systems."
      }
    ],
    cta: ["Ready for quality engineering?", "Shift your QE strategy with AI-powered testing and automation.", "Contact Us"]
  },
  "service-security.html": {
    eyebrow: "Cybersecurity",
    title: "Secure the Modern Enterprise.",
    intro: "As enterprises adopt cloud, modern applications, data platforms, and AI, the security landscape continues to evolve. Technumen helps organizations protect applications, infrastructure, identities, and data across increasingly complex digital environments.",
    sections: [
      {
        label: "Key Offerings",
        title: "Security Capabilities",
        bullets: [
          "Cloud Security",
          "Application & Product Security",
          "Identity & Access Management",
          "Security Operations",
          "Governance, Risk & Compliance",
          "Security Testing",
          "AI Security"
        ],
        aiNote: "We help enterprises address emerging AI security challenges while applying intelligent technologies to improve threat detection, security analysis, risk assessment, and response."
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
    eyebrow: "Insurance & Guidewire",
    title: "Deep Insurance Expertise. Modern Engineering.",
    intro: "Technumen combines deep P&C insurance expertise, Guidewire capabilities, and modern engineering to help insurers transform their technology landscape, modernize core platforms, and deliver better digital experiences.",
    sections: [
      {
        label: "Insurance Solutions",
        title: "Comprehensive Insurance Solutions",
        bullets: [
          "Guidewire Implementation",
          "Guidewire Modernization",
          "P&C Insurance Solutions",
          "Digital Customer Experience",
          "Insurance Product Engineering",
          "Data & Analytics",
          "Quality Engineering",
          "AI for Insurance"
        ],
        aiNote: "We help insurers explore and apply AI across underwriting, claims, customer experience, operations, and technology — while modernizing the platforms and data foundations needed to scale these capabilities."
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
        body: "Send your application to jobs@technumen.com or careers@technumen.com, quoting the Job ID in the subject line. Each role below expands for the full description.",
        jobs: [
          {
            "anchor": "lm-off26-n110",
            "jobId": "LM-OFF26-N110",
        "applyUrl": "https://technumen.keka.com/careers/jobdetails/87324",
            "title": "Full Stack Developer – Java 17/21 & React",
            "experience": "6+ Years",
            "location": "Offshore",
            "joining": "Immediate / Short Notice Preferred",
            "summary": "We are looking for an experienced Full Stack Developer with strong hands-on expertise in Java 17/21, Spring Boot, Spring Security, Microservices, React.js, and TypeScript. The ideal candidate should have experience building scalable full-stack applications and RESTful microservices, along with good knowledge of Hibernate/JPA, Apache Kafka, AWS, UI development, testing, monitoring, and CI/CD practices.",
            "groups": [
              [
                "Key Responsibilities",
                [
                  "Design, develop, and maintain scalable full-stack applications using Java, Spring Boot, React.js, and TypeScript.",
                  "Develop and maintain RESTful APIs and Microservices using Spring Boot.",
                  "Implement authentication and authorization using Spring Security 6.",
                  "Build responsive, reusable, and user-friendly UI components using React.js and TypeScript.",
                  "Integrate React applications with backend REST APIs.",
                  "Develop data-access layers using Hibernate/JPA.",
                  "Implement Apache Kafka for event-driven communication.",
                  "Design and maintain applications following Microservices architecture.",
                  "Work with AWS services and support cloud-based deployments.",
                  "Develop unit and integration tests using JUnit and Mockito.",
                  "Perform API testing, debugging, troubleshooting, and performance optimization.",
                  "Participate in code reviews and follow established coding and quality standards.",
                  "Collaborate with business, QA, DevOps, and other technical teams throughout the SDLC."
                ]
              ],
              [
                "Required Technical Skills — Backend",
                [
                  "Strong hands-on experience with Java 17/21.",
                  "Strong experience with Spring Boot 3.x+.",
                  "Strong understanding of Spring Security 6.",
                  "Experience developing REST APIs.",
                  "Strong understanding of Microservices architecture.",
                  "Hands-on experience with Hibernate/JPA.",
                  "Good knowledge of SQL and relational databases."
                ]
              ],
              [
                "Frontend / UI",
                [
                  "Strong hands-on experience with React.js.",
                  "Good experience with TypeScript.",
                  "Strong knowledge of JavaScript, HTML5, and CSS3.",
                  "Experience developing responsive and reusable UI components.",
                  "Good understanding of React Hooks and state management.",
                  "Understanding of UI/UX principles and responsive design.",
                  "Experience integrating REST APIs with React applications."
                ]
              ],
              [
                "Messaging & Cloud",
                [
                  "Basic knowledge of Apache Kafka and event-driven architecture.",
                  "Basic knowledge of AWS services.",
                  "Understanding of cloud-based application deployment."
                ]
              ],
              [
                "Node.js",
                [
                  "Basic knowledge of Node.js.",
                  "Understanding of Node.js for frontend tooling or basic backend services is a plus."
                ]
              ],
              [
                "Testing",
                [
                  "Good understanding of Unit Testing and Integration Testing.",
                  "Hands-on experience with JUnit and Mockito.",
                  "Knowledge of REST API testing.",
                  "Basic understanding of React component testing.",
                  "Strong debugging and troubleshooting skills."
                ]
              ],
              [
                "Tools & Development Practices",
                [
                  "Git and GitHub Actions.",
                  "Experience working in Agile/Scrum environments."
                ]
              ]
            ]
          },
          {
            "anchor": "lm-off26-n109",
            "jobId": "LM-OFF26-N109",
        "applyUrl": "https://technumen.keka.com/careers/jobdetails/82453",
            "title": "Sr Guidewire Developer",
            "experience": "6+ Years",
            "location": "Offshore",
            "joining": "Immediate / Short Notice Preferred",
            "summary": "We are looking for an experienced Guidewire PolicyCenter Developer with 6–10 years of experience and strong hands-on expertise in PolicyCenter configuration, data migration, integrations, and version upgrades. The ideal candidate should have experience working on Property & Casualty (P&C) insurance applications, particularly Personal Lines and Commercial Lines, with strong knowledge of PolicyCenter configuration, transaction lifecycles, Product Model, PCF, integrations, and migration processes. Experience with Guidewire PolicyCenter V9/V10 upgrades and Book of Business migration will be highly preferred.",
            "groups": [
              [
                "Guidewire PolicyCenter Configuration",
                [
                  "Perform hands-on configuration and development in Guidewire PolicyCenter.",
                  "Configure and enhance the Product Model, PCF Screens, Data Model, Forms, Underwriting Rules, Transactions, and Validation Rules.",
                  "Translate business requirements into scalable PolicyCenter configurations.",
                  "Support enhancements to Personal Lines and Commercial Lines insurance products.",
                  "Collaborate with business analysts, QA, integration teams, and other stakeholders."
                ]
              ],
              [
                "Book of Business / Data Migration",
                [
                  "Design and implement PolicyCenter data migration solutions for Book of Business migration.",
                  "Develop custom migration frameworks to extract, transform, validate, and transfer policy data between legacy and target systems.",
                  "Implement migration processes across multiple Lines of Business (LOBs).",
                  "Design custom Migration transaction lifecycles and related PolicyCenter configurations.",
                  "Handle policies that are in progress, completed, leaving the book, or failed and stuck during migration.",
                  "Develop mechanisms for failure detection, recovery, and transaction retry.",
                  "Ensure data integrity and consistency throughout the migration lifecycle.",
                  "Define and implement appropriate handling of policy edits and changes during migration."
                ]
              ],
              [
                "Guidewire Upgrade",
                [
                  "Participate in Guidewire PolicyCenter version upgrades, preferably V9 to V10 or similar.",
                  "Perform code refactoring and configuration updates required for platform compatibility.",
                  "Analyze and resolve upgrade-related defects and compatibility issues.",
                  "Support unit testing, integration testing, regression testing, and defect resolution."
                ]
              ],
              [
                "Integration Development",
                [
                  "Develop and maintain integrations between PolicyCenter and downstream/upstream systems.",
                  "Work with REST/SOAP APIs, messaging, batch processes, and other integration mechanisms.",
                  "Troubleshoot integration failures and transaction issues.",
                  "Ensure reliable data transfer between PolicyCenter and external systems."
                ]
              ],
              [
                "Production Support & Troubleshooting",
                [
                  "Investigate complex technical issues across PolicyCenter configurations, integrations, and migration processes.",
                  "Perform detailed Root Cause Analysis (RCA) for production and non-production issues.",
                  "Identify failed or stuck transactions and implement corrective solutions.",
                  "Provide permanent fixes for recurring technical issues.",
                  "Work closely with support and engineering teams to resolve critical issues."
                ]
              ],
              [
                "Required Skills",
                [
                  "6–10 years of IT experience with strong Guidewire experience.",
                  "Strong hands-on experience with Guidewire PolicyCenter.",
                  "Experience in PolicyCenter configuration and development.",
                  "Strong knowledge of Product Model, PCF, Data Model, Forms, Underwriting Rules, Transactions, and Gosu.",
                  "Hands-on experience with Book of Business / Policy Data Migration.",
                  "Experience designing custom migration processes and transaction lifecycles.",
                  "Experience working across multiple P&C Lines of Business.",
                  "Experience with Personal Lines and/or Commercial Lines.",
                  "Experience with Guidewire PolicyCenter upgrades, preferably V9 to V10.",
                  "Strong experience with REST/SOAP integrations, Messaging, and Batch Processing.",
                  "Strong debugging and troubleshooting skills.",
                  "Good understanding of SQL and database concepts.",
                  "Experience working in Agile/Kanban environments."
                ]
              ]
            ]
          },
          {
            "anchor": "ginv-on26-n103",
            "jobId": "GINV-ON26-N103",
        "applyUrl": "https://technumen.keka.com/careers/jobdetails/81037",
            "title": "Guidewire QA Lead",
            "experience": "8+ Years",
            "location": "Onshore",
            "joining": "Immediate / Short Notice Preferred",
            "summary": "We are looking for an experienced Guidewire QA Lead with strong expertise in Guidewire PolicyCenter, BillingCenter, and/or ClaimCenter testing. The candidate will lead QA activities across Guidewire implementations, integrations, upgrades, and production releases, ensuring high-quality delivery through effective test strategy, automation, defect management, and team leadership.",
            "groups": [
              [
                "Key Responsibilities",
                [
                  "Lead the QA strategy, planning, execution, and delivery for Guidewire projects.",
                  "Provide technical leadership to QA engineers and coordinate testing activities across multiple teams.",
                  "Develop Test Strategy, Test Plans, Test Scenarios, Test Cases, and Traceability Matrix.",
                  "Perform functional, integration, regression, system, end-to-end, and UAT testing.",
                  "Strong hands-on experience testing Guidewire PolicyCenter / BillingCenter / ClaimCenter.",
                  "Validate Guidewire configurations, workflows, business rules, transactions, screens, and integrations.",
                  "Test Guidewire APIs, REST/SOAP services, messaging, and external system integrations.",
                  "Validate data flows and perform database/backend testing using SQL.",
                  "Lead defect identification, triage, root-cause analysis, prioritization, and resolution.",
                  "Work closely with Business Analysts, Guidewire Developers, Product Owners, and Business stakeholders.",
                  "Define QA metrics and provide testing status, risks, issues, and release-readiness reports.",
                  "Review test cases and automation scripts developed by QA engineers.",
                  "Identify opportunities for test automation and continuous improvement.",
                  "Support CI/CD testing and integration with tools such as Jenkins/GitLab.",
                  "Participate in Agile ceremonies including Sprint Planning, Backlog Refinement, Daily Scrum, Sprint Review, and Retrospective.",
                  "Mentor QA team members and establish QA best practices, standards, and processes.",
                  "Support production releases, smoke testing, and post-production validation."
                ]
              ],
              [
                "Required Skills",
                [
                  "8+ years of QA/testing experience, with strong experience in Guidewire.",
                  "5+ years of Guidewire testing experience preferred.",
                  "Strong expertise in one or more of Guidewire PolicyCenter, BillingCenter, or ClaimCenter.",
                  "Experience with Guidewire Cloud is highly preferred.",
                  "Strong understanding of Guidewire configuration, business rules, workflows, transactions, and integrations.",
                  "Strong knowledge of API testing – REST/SOAP.",
                  "Strong SQL/database testing skills.",
                  "Experience with Agile/Scrum methodologies.",
                  "Hands-on experience with defect management tools such as JIRA.",
                  "Knowledge of Postman, SOAP UI, Jenkins/GitLab, Splunk or similar tools.",
                  "Experience with test automation frameworks such as Selenium, Playwright, Cypress, or similar is preferred.",
                  "Strong analytical, communication, leadership, and problem-solving skills."
                ]
              ],
              [
                "Guidewire-Specific Testing",
                [
                  "Policy lifecycle and transactions.",
                  "New Business, Renewal, Cancellation, Rewrite, Reinstatement.",
                  "Rating and underwriting rules.",
                  "Product model and policy changes.",
                  "Billing and payment transactions.",
                  "Claims lifecycle and financial transactions.",
                  "Guidewire PCF/UI functionality.",
                  "Workflows and business rules.",
                  "Batch processes.",
                  "Guidewire APIs and integrations, external system integrations, and event/messaging-based integrations.",
                  "Data migration and reconciliation.",
                  "Guidewire Cloud releases and deployments."
                ]
              ],
              [
                "Leadership Expectations",
                [
                  "Lead a team of QA engineers and manage testing deliverables.",
                  "Conduct code/test-case reviews and quality assessments.",
                  "Establish QA standards and reusable testing frameworks.",
                  "Identify project risks and provide mitigation strategies.",
                  "Drive defect prevention and continuous quality improvement.",
                  "Communicate effectively with technical and business stakeholders.",
                  "Ensure testing is completed within scope, timeline, and quality objectives."
                ]
              ],
              [
                "Preferred Qualifications",
                [
                  "Guidewire certification is a plus.",
                  "Experience with Guidewire Cloud Platform.",
                  "Experience in Insurance domain, especially P&C Insurance.",
                  "Knowledge of ACORD, insurance policy lifecycle, rating, billing, and claims processes.",
                  "Experience with CI/CD and DevOps practices.",
                  "Experience working on large-scale Guidewire implementations or upgrades."
                ]
              ]
            ]
          }
        ]
      }
    ],
    cta: ["Ready to Shape the Future?", "Send your resume to jobs@technumen.com or careers@technumen.com with the Job ID in the subject line.", "Send Resume"]
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
  ["Digital Engineering", "service-digital-engineering.html"],
  ["Data & AI", "service-data.html"],
  ["Cloud & Platform Engineering", "service-cloud.html"],
  ["Quality Engineering", "service-quality.html"],
  ["Cybersecurity", "service-security.html"],
  ["Insurance & Guidewire", "guidewire.html"]
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

const cardMarkup = (cards = []) => cards.map(([title, body, href, img, linkLabel], index) => `
  <article class="${view.contentCard}" style="--motion-order:${index}">
    <span class="content-card-sheen" aria-hidden="true"></span>
    ${img ? `<span class="card-badge"><img src="${img}" alt="" aria-hidden="true" loading="lazy" /></span>` : ""}
    <h3 class="${view.contentTitle}">${title}</h3>
    <p class="${view.contentBody}">${linkify(body)}</p>
    ${href ? `<a class="${view.contentLink}" href="${href}">${linkLabel || "Explore"}</a>` : ""}
  </article>
`).join("");

const statsMarkup = (stats = []) => stats.length ? `
  <div class="${view.pageStats}">
    ${stats.map(([num, label]) => `<div class="${view.statCard}"><strong class="${view.statNumber}">${num}</strong><span class="${view.statLabel}">${label}</span></div>`).join("")}
  </div>
` : "";

// A list of short capability names reads better as chips than as bullets;
// long-form bullets keep the original marker list.
const bulletsMarkup = (bullets = []) => {
  if (!bullets.length) return "";
  const short = bullets.every(b => String(b).length <= 46);
  return `<ul class="page-bullets${short ? " page-bullets--chips" : ""}">` +
    bullets.map(b => `<li>${linkify(String(b))}</li>`).join("") + `</ul>`;
};

const jobsMarkup = (jobs = []) => jobs.length ? `
  <div class="job-list">
    ${jobs.map(job => `
      <details class="job" id="${job.anchor}">
        <summary class="job-head">
          <span>
            <strong class="job-title">${job.title}</strong>
            <span class="job-meta">${job.jobId} &middot; ${job.experience} &middot; ${job.location} &middot; ${job.joining}</span>
          </span>
          <span class="job-toggle" aria-hidden="true"></span>
        </summary>
        <div class="job-body">
          <p class="job-summary">${job.summary}</p>
          ${job.groups.map(([heading, items]) => `
            <div class="job-group">
              <h4>${heading}</h4>
              <ul>${items.map(i => `<li>${i}</li>`).join("")}</ul>
            </div>
          `).join("")}
          ${job.applyUrl
            ? `<a class="job-apply" href="${job.applyUrl}" target="_blank" rel="noopener">Apply for this role</a>`
            : `<a class="job-apply" href="mailto:jobs@technumen.com?subject=${encodeURIComponent("Application - " + job.title + " (" + job.jobId + ")")}">Apply for this role</a>`}
        </div>
      </details>
    `).join("")}
  </div>
` : "";

const initials = (name) => name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();

/* The heading block fills the container instead of stopping at 767px:
   split into two columns when something follows it, full width with the
   narrative flowing in columns when it is the whole section. */
const figureMarkup = (image) => image ? `
  <figure class="section-figure">
    <span class="section-figure-glow" aria-hidden="true"></span>
    <img src="${image[0]}" alt="${image[1] || ""}" loading="lazy" />
  </figure>
` : "";

const timelineMarkup = (steps = []) => steps.length ? `
  <ol class="timeline">
    ${steps.map(([phase, text], i) => `
      <li class="timeline-step" style="--motion-order:${i}">
        <span class="timeline-node" aria-hidden="true"></span>
        <p class="timeline-phase">${phase}</p>
        <p class="timeline-text">${linkify(text)}</p>
      </li>
    `).join("")}
  </ol>
` : "";

const copyClass = (section) => {
  const hasMore = section.cards || section.bullets || section.people || section.stats || section.quote || section.timeline;
  // a lone closing sentence reads better centred; everything else stacks
  if (section.body && !section.paras && !hasMore) return "section-copy section-copy--center";
  return "section-copy";
};

const narrativeMarkup = (paras = []) => paras.length
  ? `<div class="section-narrative">${paras.map(t => `<p class="section-body section-body--stacked">${linkify(t)}</p>`).join("")}</div>`
  : "";

const aiNoteMarkup = (note) => note ? `
  <p class="ai-note"><span class="ai-note-label">AI-Enabled Approach</span>${note}</p>
` : "";

const sectionLinkMarkup = (link) => link ? `
  <a class="section-link" href="${link[0]}">${link[1]} <span aria-hidden="true">&rarr;</span></a>
` : "";

const peopleMarkup = (people = []) => people.length ? `
  <ul class="people-grid">
    ${people.map(([name, role, photo]) => `
      <li class="person-card">
        ${photo
          ? `<span class="person-avatar"><img src="${photo}" alt="${name}" loading="lazy" /></span>`
          : `<span class="person-avatar person-avatar--placeholder" aria-hidden="true">${initials(name)}</span>`}
        <span class="person-name">${name}</span>
        <span class="person-role">${role}</span>
      </li>
    `).join("")}
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
      <div class="${view.pageContainer}${section.image ? " section-has-figure" : ""}">
        <div class="${copyClass(section)}">
          ${section.num ? `<span class="section-num" aria-hidden="true">${section.num}</span>` : ""}
          <p class="section-kicker">${section.label}</p>
          <h2 class="section-title">${section.title}</h2>
          ${section.body ? `<p class="section-body">${linkify(section.body)}</p>` : ""}
          ${narrativeMarkup(section.paras)}
        </div>
        ${figureMarkup(section.image)}
        ${timelineMarkup(section.timeline)}
        ${quoteMarkup(section)}
        ${statsMarkup(section.stats)}
        ${bulletsMarkup(section.bullets)}
        ${jobsMarkup(section.jobs)}
        ${peopleMarkup(section.people)}
        ${section.cards ? `<div class="${view.contentGrid}">${cardMarkup(section.cards)}</div>` : ""}
        ${aiNoteMarkup(section.aiNote)}
        ${sectionLinkMarkup(section.link)}
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
